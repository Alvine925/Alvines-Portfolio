export const coverImage = "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80";

export const content = `
## How Jitabi Creates a Live Event Website from a Single WhatsApp Message

When someone types "Amara's birthday Saturday at Karen" into WhatsApp and sends it to Jitabi, they expect something to happen. What they probably don't expect is that within ten seconds, a fully formatted, publicly shareable event website will be live on the internet — complete with RSVP functionality, event details, and a unique URL delivered back to them in the same chat thread. Yet that is exactly what happens, 50,000 times over.

This post is about the engineering behind that ten-second window. It covers the full technical pipeline, the failure modes we've encountered across half a million events, what the latency budget looks like at every step, and what running a production system like this has taught us about building for real users in real conditions.

![Event website creation pipeline](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80)

### The Pipeline in Five Stages

The journey from WhatsApp message to live URL passes through five distinct stages. Each has a latency budget, a failure mode, and a recovery strategy. Understanding all five is the difference between a product that feels magical and one that feels broken.

**Stage 1: Webhook Reception (target: <100ms)**

Meta's WhatsApp Cloud API delivers incoming messages as HTTP POST requests to a registered webhook endpoint. The webhook handler does almost nothing — it validates the HMAC-SHA256 signature, extracts the message body and sender metadata, writes a raw event to a queue, and returns HTTP 200 immediately. Total processing time: under 50ms on a warm instance.

The critical discipline here is to never do real work in the webhook handler. Meta will retry delivery if it doesn't receive a 200 within a few seconds, and duplicate processing is significantly more expensive to debug than a slightly slower response. The webhook's only job is to acknowledge receipt and enqueue.

**Stage 2: Entity Extraction via LLM (target: <2.5 seconds)**

The queued message is picked up by an async worker that submits it to a large language model with a structured output prompt. The prompt instructs the model to extract eight fields: event name, event type, date, time, location, host name, guest limit (if mentioned), and a short description. Each field includes a confidence score between 0 and 1.

The confidence threshold that triggers a clarification request is currently set at 0.70. We started at 0.80 and tuned it down after analysing dropout — users who never completed event creation. The 0.80 threshold was triggering clarification requests too often for inputs that were actually unambiguous to a human reader. Dropping to 0.70 reduced the clarification rate from 31% to 18% with no measurable increase in incorrect event data.

The model also handles hallucination risk for dates. If the extracted date is more than 24 months in the future or appears to be before the message timestamp, the system flags it as a likely hallucination, discards it, and adds a clarification step specifically for the date field. In production, this catches roughly 0.3% of extractions — small, but important at 50K events.

**Stage 3: Idempotent Write to Supabase (target: <300ms)**

Once extraction produces a high-confidence result, the event data is written to Supabase using an upsert keyed on a composite of sender phone number and a hash of the extracted event name plus date. This idempotency key means that if the system retries due to a transient failure, it will update the existing record rather than create a duplicate.

The write goes to the primary Postgres instance with a 500ms timeout. If it times out, the worker retries with exponential backoff up to three times before sending the sender a failure message with a request to try again. In practice, Supabase write failures account for less than 0.05% of attempts, but the retry logic has prevented several incidents from becoming visible user failures.

**Stage 4: Static Page Generation via Next.js (target: <4 seconds)**

With the event record committed, a page generation job is triggered. The event page is a Next.js page rendered with the event data and made available at a URL of the form myjoyfulday.com/e/[event-slug]. For performance at scale, we cache the rendered HTML at the CDN layer and invalidate it when the event is updated.

The page includes RSVP functionality, event metadata optimised for WhatsApp link preview (og:title, og:description, og:image), and all the design tokens needed to make it look like a proper event invitation. The first render takes 2-4 seconds. Subsequent requests for the same event page are served from cache in under 50ms.

**Stage 5: URL Delivery via WhatsApp (target: <1 second)**

The final step is sending the URL back to the user via the Meta Cloud API. This is a simple outbound message send — a template message that includes the event URL and a brief confirmation string. End-to-end, the five stages take between six and ten seconds under normal load.

![WhatsApp message to event creation](https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=1200&q=80)

### Why Speed Matters: Sharing Velocity

The ten-second target isn't arbitrary. It comes from studying what users do immediately after receiving the URL.

Our data shows that the median time from URL receipt to first share is **four minutes**. Users receive their event link, they open it, they check it looks right, and then they immediately share it to WhatsApp groups, family chats, and directly to individual contacts. The event discovery cycle — the period during which guests can still decide to attend — begins within minutes of creation.

If event creation took three minutes instead of ten seconds, we'd still be well within the sharing window. But perceived speed matters beyond the functional constraint. When the event appears in under ten seconds, the reaction is consistently "wow" — and that reaction turns into word of mouth. Users tell other users. That's how we reached 50,000 events without meaningful paid marketing.

Slower would still work technically. But it would feel like a slow Wi-Fi connection — functional, but not the kind of thing you tell your friends about.

### Handling "Amara's Birthday Saturday at Karen"

Let's trace this specific message through the pipeline. The input contains:

- **Host name**: implicit (the sender), or possibly "Amara" — ambiguous
- **Event type**: birthday
- **Date**: "Saturday" — relative, requires anchoring to message timestamp
- **Location**: "Karen" — a suburb of Nairobi, sufficient for display but not a geocoded address

The LLM extracts: event_type=birthday (confidence 0.97), date=relative:next_saturday (confidence 0.88), location="Karen" (confidence 0.91), host_name="Amara" (confidence 0.72, ambiguous — could be the sender or the birthday person).

The ambiguous host name field triggers the one-question clarification protocol: "Is Amara the birthday person or is this your event for Amara?" The user responds "It's for my friend Amara," and the system resolves host_name="Amara (hosted by [sender])" with high confidence.

For the date, "Saturday" is anchored to the message timestamp. If the message was sent on a Wednesday, "Saturday" means the coming Saturday. If sent on a Saturday, it means the following Saturday. The system includes the resolved date in its confirmation message so the user can catch errors: "Got it — Amara's birthday, Saturday 14th June, Karen."

### Infrastructure at Scale: What 50,000 Events Taught Us

The first 1,000 events ran on a single Supabase instance with no read replicas and no CDN caching. Page loads were slow but tolerable. By 10,000 events, event pages were occasionally serving stale data because of cold rendering. By 20,000, we had a queue backup problem during peak hours — Saturday mornings, when event creators are planning the week ahead, caused enough concurrent webhook traffic to overwhelm the async worker pool.

The fixes: Supabase read replicas for event page queries, aggressive CDN caching with 60-second TTL (short enough to reflect updates, long enough to absorb traffic spikes), and a horizontally scaled worker pool that auto-scales based on queue depth. The system now handles 200 concurrent event creations without queue backup.

![Platform infrastructure and monitoring](https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80)

### Load Testing Results

Before each major infrastructure change, we run load tests against the full pipeline using synthetic WhatsApp webhook payloads. Our baseline test fires 500 concurrent event creation requests. Here's what we measure:

- **p50 end-to-end latency**: 7.2 seconds
- **p95 end-to-end latency**: 11.8 seconds
- **p99 end-to-end latency**: 18.4 seconds
- **Error rate at 500 concurrent**: 0.4%
- **LLM extraction failure rate**: 0.1% (model timeout or malformed output)
- **Supabase write failure rate**: 0.05%
- **URL delivery failure rate**: 0.2% (Meta API rate limiting)

The p99 at 18.4 seconds is higher than we'd like. It occurs when all three external systems — LLM provider, Supabase, and Meta — experience elevated latency simultaneously. We've implemented circuit breakers that shed non-critical work when the combined system latency exceeds 15 seconds, which keeps the p99 from climbing further.

### Monitoring and Alerting

The monitoring stack watches four core signals: webhook receipt rate (are messages arriving?), queue depth (are they being processed?), LLM response time (is extraction running?), and URL delivery success rate (are users getting their links?). Alerts fire to a Slack channel and by SMS when any signal deviates more than two standard deviations from its 7-day rolling average.

The most actionable alerts have been LLM response time spikes — these are usually caused by the model provider having an incident and can be mitigated by switching to a backup model. Having a secondary LLM configured and hot has saved us from three separate incidents that would otherwise have caused 15-30 minute outages.

### What 50,000 Events Taught Us About Edge Cases

The most instructive failures come from messages the system handles in unexpected ways. A selection from our incident log:

- **The future date trap**: A user typed "New Year's party" in December. The system correctly extracted date=January 1st — but of the following year, 13 months away. This turned out to be correct, but the system initially flagged it as a potential hallucination. We added a December exception to the date validation logic.

- **The non-event message**: Some users send the bot general questions ("How much does this cost?") or forward old event links without any event creation intent. The intent classifier now runs before the extraction step and routes non-creation messages to a FAQ handler.

- **The voice note**: WhatsApp allows users to send voice notes. We don't support voice input. The bot now responds to audio messages with a gentle prompt to type the event details instead.

- **The group message**: Occasionally Jitabi is added to a WhatsApp group and receives event-creation messages intended for other group members. The group message handler now checks whether the message directly mentions the bot before attempting extraction.

Every edge case at 50,000 events represents real user confusion or system failure. Logging them, categorising them, and systematically eliminating the most common ones is how the extraction accuracy rate has improved from 71% at launch to 94% today. The remaining 6% trigger clarification flows that resolve the ambiguity before creation proceeds. The pipeline is not perfect — but it is significantly more robust than the first version, and every improvement compounds over hundreds of thousands of future events.

### The Full Latency Budget

To summarise the latency allocation across the full pipeline:

1. Webhook receipt and acknowledgement: 50ms
2. Queue enqueue and worker pickup: 200ms
3. LLM entity extraction: 2,500ms (median)
4. Supabase write: 300ms
5. Page generation and CDN registration: 3,500ms
6. URL delivery via Meta API: 800ms
7. Buffer for network variance: 650ms

**Total target: under 8 seconds (median), under 10 seconds (p90)**

Meeting this target consistently, at scale, across the variability introduced by five external systems, is the engineering challenge at the core of MyJoyfulDay. It requires not just good code but the operational discipline of monitoring, alerting, circuit breaking, and constant measurement. The ten-second experience users love is built on thousands of small engineering decisions that are invisible when they work and very visible when they don't.
`;

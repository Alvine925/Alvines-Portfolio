export const coverImage = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80";

export const content = `## Why AI Assistants Feel Slow (And What We Did About It)

There is a particular frustration unique to AI tools. You ask a question, and then you wait. The spinner spins. Two seconds pass. Three. The text begins to appear. By the time the answer arrives, you have lost the thread of what you were thinking.

This is not a minor inconvenience. It is a fundamental UX problem that undermines the entire value proposition of an AI assistant. If the tool interrupts your flow more than it supports it, the tool is net negative regardless of the quality of its answers.

At Tellus, we spent significant engineering time on what we call the latency problem. This post explains what we found, what is physically possible, and what we built to close the gap between possible and good enough.

## The Flow State Problem

Flow state is the psychological condition in which a person is fully immersed in a task, operating at peak cognitive performance, with effort feeling effortless. It is the state in which the best work gets done — complex problems get solved, writing becomes clear, design decisions become obvious.

Research from UC Irvine, led by Gloria Mark, found that after an interruption, it takes an average of 23 minutes and 15 seconds to fully return to a task. Not 23 minutes to stop being annoyed. 23 minutes to restore the full mental context that deep work requires.

This has enormous implications for AI tool design. An AI assistant that takes 3 seconds to respond to a query has not just cost you 3 seconds. If that 3 seconds breaks your flow — if the wait is long enough that your attention drifts, you check something else, you lose the thread — it has potentially cost you 23 minutes.

The threshold at which a response feels conversational versus interruptive is roughly 200-400 milliseconds. This is the number that matters. Not 3 seconds versus 1 second. 400 milliseconds versus 1000 milliseconds.

## The Physics of LLM Inference

Before describing what we built, it is worth being honest about what is not engineerable away.

Large language models process tokens sequentially through transformer attention layers. The attention mechanism is O(n²) with respect to context length — as the context window grows, the compute required grows with the square of the context size. On current hardware, a GPT-4-class model responding to a medium-length query with a medium-length response takes 1 to 4 seconds for full generation.

This is not a software problem. It is not an optimization problem that clever engineering can fully solve. It is a physics problem — the number of floating-point operations required to run the model, divided by the number of floating-point operations current hardware can perform per second, gives you a lower bound on inference time that no amount of engineering can beat.

What you can do is work within that constraint intelligently. You accept the physical minimum latency and engineer aggressively to make the perceived latency as close to zero as possible.

![A developer focused at a screen with code and data flowing](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80)

## Technique 1: Streaming Tokens

The most important single technique for perceived latency reduction is streaming.

Without streaming, the model generates the entire response server-side, then transmits it to the client in one payload. Time-to-first-token equals time-to-full-response. If that is 3 seconds, the user stares at a spinner for 3 seconds.

With streaming, the model transmits tokens to the client as they are generated using Server-Sent Events. The client renders each token as it arrives. Time-to-first-token can be as low as 200-400 milliseconds. The user sees text appearing in near-real time.

The UX difference is not merely cosmetic. The reading experience feels entirely different from the waiting experience. When text appears incrementally, users read as it generates — by the time the full response is rendered, they have already absorbed most of it. The perceived wait is replaced by a perceived reading session.

Time-to-first-token is the metric that matters most for perceived latency. Tellus engineering targets sub-400ms time-to-first-token for all interactive queries. Time-to-full-response is a secondary metric.

## Technique 2: Speculative Rendering

For interactions where the response shape is predictable, we use speculative rendering to further compress perceived latency.

When you ask Tellus to summarise a thread, the response will have a predictable structure: a brief summary paragraph, a list of key decisions, a list of open questions. We know this before the model responds. We render the structural skeleton — the headings, the list containers, the layout — before the content arrives.

When the content streams in, it populates a scaffold the user has already seen. The visual experience is smoother because the layout does not shift as content arrives, and the loading experience feels faster because something meaningful was visible earlier.

Speculative rendering is applicable to a specific class of high-confidence-structure responses: summaries, action lists, follow-up question suggestions, briefing formats. For open-ended conversational responses, it is less useful.

## Technique 3: Pre-Computation for Event-Triggered Interactions

This technique is the most powerful for Tellus's specific use case, and the least common in the industry.

Most AI queries are user-initiated: the user types a question, the model responds. The query and the response happen in sequence, and the user waits for the sequence to complete.

Tellus intercepts a class of interactions before they become user queries. When a new email arrives about Project Horizon, Tellus knows — with high confidence — that if you open that email, you will want the associated context: the Slack channel, the outstanding tasks, the last meeting notes, the recent decisions. It knows this because it has a model of your working context.

So Tellus pre-computes that context before you open the email. By the time you click on the email, the context panel is already populated. The perceived latency for context retrieval is near zero because the retrieval happened while you were doing something else.

This approach requires careful engineering — pre-computing context for every incoming event would be wasteful and expensive. The pre-computation is gated by the same relevance model that determines what to surface: only events that score above a relevance threshold trigger pre-computation.

![Data streams and processing pipelines visualized abstractly](https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80)

## Technique 4: Caching for Common Context Patterns

The fourth technique is the most prosaic, but surprisingly impactful in practice.

Within a working session, many context queries are structurally similar. "What is the current status of Project Horizon?" asked at 9am and asked again at 11am (after no new relevant signals) should return the same response. Without caching, both queries trigger full model inference. With caching, the second query returns the cached response in milliseconds.

Tellus implements a context-keyed cache with an invalidation model tied to the event stream. A cached response is valid until a new event arrives that affects the associated context. When the cache is invalidated — a new Slack message in the project channel, a task status change — the cache entry is cleared and the next query triggers fresh inference.

Cache hit rates in practice range from 40-60% depending on how actively a project is generating new signals. For stable contexts, the rate is higher. This meaningfully reduces both perceived latency and inference costs.

## The Latency Budget

Putting these techniques together, here is how Tellus's latency budget works for an interactive query with full inference:

- Pre-computation (event-triggered, background): 800ms to 2s, happens before user interaction
- Time-to-first-token (streaming): target under 400ms
- Token streaming to full response: 1.5 to 3s total inference, visible as progressive rendering
- Structural skeleton (speculative rendering): available in under 100ms for known response shapes

Perceived latency for a user who opens an email that triggered pre-computation: under 200ms for context panel population. Perceived latency for a fresh interactive query with streaming: under 400ms for first visible content. Perceived latency for a cache hit: under 50ms.

The gap between actual inference time (1-4 seconds) and perceived latency (under 400ms) is closed by making inference happen before the user asks, making first content visible as fast as possible, and making cached responses available instantly.

## User Testing Results

We tested these techniques against a baseline (no streaming, no pre-computation, no caching) with a group of 18 users performing standard Tellus tasks over a two-week period.

Task completion time improved by 34% compared to baseline. User-reported satisfaction with responsiveness went from 3.1/5 to 4.4/5. Crucially, the qualitative feedback shifted — baseline users described the tool as "laggy" and "worth it but annoying." Post-optimization users described it as "fast" or did not mention latency at all.

When users do not mention latency in feedback about an AI tool, you have largely solved the problem.
`;

export const title = "50,000 Events Later: What Building an Event Platform in Kenya Taught Me";
export const date = "2025-05-20";
export const excerpt = "We hit 50,000 events created on MyJoyfulDay. Here's what the data revealed, what surprised us, and what we'd build differently if we started over today.";
export const tags = ["MyJoyfulDay", "Product", "Kenya"];

export const coverImage = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80";

export const content = `
## 50,000 Events Later: What Building an Event Platform in Kenya Taught Me

There is a moment in every technology product's life when the data stops being abstract and starts being people. For MyJoyfulDay, that moment came when someone used Jitabi to create an event for a funeral. We had built a celebration platform  -  birthday parties, weddings, baby showers, house parties. The word "funeral" had never appeared in our planning documents or our test suites. And then, at event number 31,447, it appeared in our database.

That story comes later. First, let us look at the shape of 50,000 events.

### The Distribution of Joy

One of the most useful datasets we have is event type distribution. We do not force users into a category selection  -  event type is inferred by the LLM from the message content  -  which means the distribution reflects genuine usage rather than the categories we thought to offer.

The breakdown, across 50,000 events:

- **Birthdays: 38%**  -  the dominant category by a wide margin. Milestone birthdays (18th, 21st, 40th, 50th) are more common than annual ones.
- **House parties: 22%**  -  informal gatherings, often with loose guest lists and flexible times.
- **Baby showers: 15%**  -  highly organised, with specific RSVPs important for catering planning.
- **Community events: 12%**  -  fundraisers, church gatherings, neighbourhood meetings, school functions.
- **Weddings and formal events: 13%**  -  the most complex, highest-stakes category.

The birthday dominance shaped product priorities in ways we did not anticipate. Birthday event creators care deeply about the visual presentation of the event page  -  they want it to look like a real invitation, not a form response. That pressure drove investment in the event page design system earlier than the roadmap had planned.

The community events category surprised us. Twelve percent of events are not personal celebrations but collective organising  -  church fundraisers, chama meetings, school prize-giving ceremonies, local political gatherings. These users have different needs: they care more about headcount accuracy than visual presentation, and they often need to share the event across multiple WhatsApp groups simultaneously.

![Kenyan community gathering and events](https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=1200&q=80)

### Geographic Spread

The majority of events  -  approximately 61%  -  originate in Nairobi. This is expected given Nairobi's population density and smartphone penetration. Kisumu, where MyJoyfulDay was founded, accounts for 11% of events, which is disproportionately high relative to its population size and reflects local network effects from early adoption. Mombasa contributes 9%, Eldoret 6%, and the remaining 13% comes from smaller towns and rural areas.

The rural data point is interesting. We have events from Homa Bay, Garissa, Kitale, and Lamu. Users in these areas tend to have lower event page view counts  -  they are sharing with tighter, more local networks  -  but their RSVP completion rates are among the highest on the platform. Close-knit communities have strong social accountability around RSVPs.

### Sharing Velocity

The metric we track most closely is sharing velocity: the time from URL receipt to first external share. The median is **four minutes**. The 25th percentile is 90 seconds  -  some users share before they have even properly reviewed the page. The 75th percentile is 11 minutes.

This data explains why the ten-second creation window matters so much. The event creation experience and the sharing experience are not two separate moments  -  they blend together. A user who creates an event and then waits three minutes for the URL will experience that wait as part of the sharing process. A URL delivered in eight seconds feels like it arrived before the user was ready to share, which is exactly the right pace.

### Ambiguity Failure Analysis

Not every event creation attempt succeeds. Across all attempts, approximately 8% result in the user abandoning before the event is published. We have analysed what these incomplete attempts have in common.

The primary predictor of abandonment is **the number of clarification rounds required**. Attempts requiring zero clarifications complete at a 97% rate. One clarification: 84%. Two clarifications: 61%. Three or more clarifications: 29%. The conversation state machine now caps clarification attempts at three, after which it offers a structured fallback form via a web link.

The second predictor is **time of day**. Abandonment rates are highest between 22:00 and 01:00 EAT. Users initiating event creation late at night are more likely to get interrupted, lose battery, or simply fall asleep mid-conversation. We added session resume capability  -  if a user returns to Jitabi within 24 hours of an incomplete session, it picks up where they left off.

### What We Built First vs. What Mattered

The first version of MyJoyfulDay had a dashboard. It had user accounts. It had an onboarding email sequence. None of these features drove meaningful engagement. The dashboard was opened by fewer than 15% of event creators, and the median session duration for those who did open it was 47 seconds.

What mattered: the speed of event creation, the quality of the event page design, and the reliability of the RSVP notification. These three things determined whether users came back and whether they told others. Everything else was product manager intuition that did not survive contact with actual users.

![Event gathering with people celebrating](https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80)

### Infrastructure Surprises at 50K Scale

The first infrastructure surprise arrived at around 8,000 events: Supabase read performance degraded noticeably for event page loads during peak hours. The fix was read replicas and query optimisation  -  the event page query had grown to include several joins that were not indexed properly. Lesson: index early, not when you have to.

The second surprise was CDN cache invalidation. Event pages are heavily cached, which is great for performance and terrible for updates. When a user changes their event time, they expect the page to reflect the change immediately. Our first cache TTL was 10 minutes  -  too long. We reduced it to 60 seconds and added a cache-busting mechanism on explicit event updates.

The third surprise was WhatsApp rate limits. The Meta Cloud API enforces per-phone-number rate limits on outbound messages. When we send RSVP confirmations to large guest lists for popular events, we hit rate limits. We implemented a queue with rate-aware dispatch that respects Meta's limits while ensuring every guest eventually receives their confirmation.

### Repeat Usage and the Second Event

One of the metrics that matters most to us is second-event creation rate: the percentage of event creators who create a second event within 90 days. Currently, that figure is **43%**. Nearly half of users who create one event create another.

The leading predictor of second-event creation is first-event RSVP count. Users whose first event received 10 or more RSVPs are 2.8 times more likely to create a second event than those whose first event received fewer than 10. The social validation of a well-attended event reinforces the platform value.

### The Funeral

At event number 31,447, a user in Nairobi created an event with the message "Burial ceremony for Dad, this Friday, Langata Cemetery." Jitabi processed it, extracted the fields correctly, and delivered a URL. The event page was styled with our default celebration aesthetic  -  warm colours, a birthday-cake-adjacent visual language, a "Let's celebrate!" tagline.

The mismatch was immediate and obvious. A funeral page should not look like a birthday party. We had not built for this.

The short-term fix was a manual override: we edited the event page directly to use a neutral colour scheme and removed the celebration copy. The medium-term fix was a new event type category  -  Memorial  -  with its own visual template: muted tones, clean typography, no celebratory language. The LLM extraction prompt was updated to detect burial, funeral, memorial, and remembrance keywords and route them to this template.

The longer-term lesson was about humility. We had optimised the platform for joy, as the name suggests. But life is not only celebrations. People use the tools available to them to organise all the gatherings that matter  -  and some of the gatherings that matter most are not joyful. Building a platform that serves people at those moments, with appropriate gravity, was work we had not planned for but could not avoid once 50,000 events had shown us the full range of human gathering.

### What We Would Re-architect

If we were starting today with the knowledge we have from 50,000 events, we would make three structural changes.

First, we would build the event type taxonomy earlier and invest in the visual template system before scaling. The cost of retrofitting design consistency across thousands of existing event pages was significant.

Second, we would instrument the clarification flow from day one. Understanding exactly where users get stuck in the conversation, with granular message-level data, is the fastest way to improve extraction quality. We built this instrumentation six months in; it should have been there from day one.

Third, we would build the vendor marketplace concurrently with the event creation product, not after. The demand signal was there from the beginning  -  users were asking for vendor recommendations in their very first conversations with Jitabi. We left that signal on the floor for eight months while we focused on event creation. Those eight months represent a significant missed opportunity for vendor network growth.

Fifty thousand events is a milestone. It is also a dataset. Every event in it contains a lesson about how people gather, how they communicate, and what they need when they want to bring others together. We are still learning from it.

## The Event Type Breakdown Nobody Predicted

Before building MyJoyfulDay, the assumption was that wedding-related events would dominate the platform. Kenya's wedding culture is elaborate, the vendor ecosystem is large, and the planning coordination requirements are high. Weddings seemed like the obvious use case.

The actual data from 50,000 events told a different story. Birthdays account for approximately 38% of all events created. House parties are 22%. Baby showers are 15%. Community and church events are 12%. Weddings and formal celebrations make up only 13%.

This distribution has significant product implications. Birthday and house party events are typically planned with short lead times - often less than a week, sometimes less than 48 hours. The value of getting a live event page up in under ten seconds is most acute for these spontaneous social occasions. If the planning window is four days, spending two hours manually designing and sharing an event page represents a significant portion of the available planning time.

Weddings, despite being a smaller percentage of volume, represent disproportionate complexity and value - they have the longest planning horizons, the highest vendor spend, and the most guests to coordinate. The vendor marketplace feature was initially designed for wedding planners but quickly became valuable for the larger birthday and house party segment as well.

![Event categories at MyJoyfulDay showing birthday, party, and wedding distribution across Kenya](https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80)

## Sharing Velocity as a Product Metric

One metric that standard event platform analytics did not anticipate as important turned out to be the most revealing signal about product-market fit: sharing velocity. How quickly after event creation does the creator share the event URL with potential guests?

Median sharing velocity on MyJoyfulDay is four minutes after event creation. The creator receives the URL, often while still in the same WhatsApp conversation context they used to create the event, and shares it directly to relevant groups or individual contacts. This four-minute median means the product has found its way into a natural action sequence: the moment a social event is decided, the creator immediately tells people about it, and Jitabi is the mechanism for generating the shareable evidence.

Compare this to traditional event planning tools where the step between deciding to have an event and having something shareable involves multiple form fields, an account creation, and learning a new interface. The sharing moment is deferred by hours or days, and some events that were decided never become shareable pages because the friction was too high to complete the form.

The sharing velocity data also revealed an unexpected user segment: event creators who send the URL not to guests but to themselves. This segment is using Jitabi to create a permanent, shareable record of events they are attending rather than events they are organising. The event page serves as a calendar entry and a shareable reference.

## Infrastructure Surprises at Scale

Certain infrastructure challenges only appear above specific scale thresholds. The following patterns emerged between 10,000 and 50,000 events and were not visible during early testing.

**Read replica lag under burst load:** Supabase read replicas replicate with sub-second lag under normal conditions. Under burst load (hundreds of simultaneous event creations), replica lag occasionally extended to two to three seconds. For event page serving - where the page is generated immediately after write - a two-second lag meant pages were sometimes served before the event data had replicated to the read replica. The fix was to write and immediately read from the primary for new events, falling back to the read replica after 30 seconds.

**CDN cache warming:** When an event page is first generated, it must be served from the origin before the CDN caches it. For events that get shared immediately into large WhatsApp groups, the first 30 seconds after URL delivery can see hundreds of concurrent page requests before CDN caching kicks in. Adding a deliberate CDN cache pre-warming step (requesting the URL from multiple edge nodes immediately after generation) eliminated this origin overload pattern.

**WhatsApp Business Account rate limits:** Meta imposes messaging rate limits based on Business Account quality ratings. As MyJoyfulDay's message volume grew, these limits became a real operational constraint. The fix was spreading volume across multiple phone numbers associated with the same Business Account, with intelligent routing to avoid any single number hitting rate limits.

![MyJoyfulDay platform infrastructure handling 50,000 events and 1 million guest RSVPs](https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80)

## The Event That Changed How We Think About Edge Cases

Among the 50,000 events on MyJoyfulDay, one category was never anticipated: funerals. A user sent Jitabi a message asking to create an event for a funeral announcement and burial service the following weekend.

The system created the event page without issue - Jitabi has no content filtering that would distinguish a funeral from a birthday. But the experience of seeing a funeral announcement page generated through the same cheerful event creation flow, with the same design aesthetic and the same default "can't wait to see everyone!" tone in the reminder messages, made it obvious that the product was not designed for this use case.

The response was not to block funeral events but to add an event type category that triggers a different tone calibration for Jitabi's responses, different default copy on the event page, and suppression of the "can't wait to celebrate!" language that works for birthdays and house parties but is deeply inappropriate for bereavement gatherings.

This edge case became a principle: do not assume that the emotional register of your primary use case maps to all use cases. The platform serves real human occasions. Some of those occasions are not celebrations. The product needed to handle this with appropriate sensitivity.

`;
export const coverImage = "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=80";

export const content = `
## How MyJoyfulDay Handles RSVPs for Over a Million Guests Without Sign-Up Forms

The hardest constraint in consumer product design is the one you impose on yourself. For MyJoyfulDay, that constraint was this: **no guest should ever be required to create an account to RSVP to an event**. Not a social login. Not an email confirmation. Not an app download. A guest receives an event link, taps it, enters their name and phone number, and they are confirmed. Fifteen seconds. Done.

A million guests have now RSVPed under this constraint. Here is how the system works, why the tradeoffs are worth it, and what we learned along the way.

### The Tension at the Heart of the RSVP Problem

Every RSVP system faces a fundamental tension: the platform wants certainty (who are these guests? are they real people?), and guests want friction-free confirmation. Most platforms resolve this tension in favour of the platform  -  they require accounts, email verification, or app installation. This is rational from a data integrity perspective and irrational from a conversion perspective.

The data on RSVP conversion is stark. Events on platforms requiring account creation for guests see median RSVP rates of 18 - 24% of people who receive the event link. Events on MyJoyfulDay, with the frictionless RSVP flow, see median RSVP rates of 41%. The difference is not user motivation  -  guests at a Kenyan birthday party are not less motivated to confirm attendance than guests anywhere else in the world. The difference is friction.

Phone number as guest identity resolves most of the platform's certainty concerns. A phone number is unique (one person, one number), it doubles as a WhatsApp delivery channel for confirmations and reminders, it does not require email infrastructure, and it is the identifier that Kenyan users are most comfortable sharing. The tradeoff is that phone numbers can be faked  -  a guest can enter a friend's number  -  but this is a rare and low-stakes failure mode for social events.

### The Complete RSVP Flow

A guest receives an event link via WhatsApp, typically forwarded by the event creator or another guest. They tap the link. The event page loads  -  a clean, mobile-optimised page with the event details, a photo (if the creator uploaded one), and a prominent RSVP button.

Tapping RSVP opens a simple inline form: first name, last name, phone number. No email. No password. No "agree to terms" checkbox (the terms are linked in the footer, not blocking). Submit. The form validates that the phone number is in a valid Kenyan or international format, submits via a lightweight POST request, and immediately shows a confirmation screen.

Total time from link tap to confirmation screen: under 15 seconds on a typical 3G connection. Total data transfer for the RSVP flow: under 45KB. The form was designed with mobile bandwidth in mind  -  no large images, no heavy JavaScript frameworks, progressive loading for the event cover photo.

![RSVP guest list management](https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=80)

### The WhatsApp Confirmation Message

After a successful RSVP, the system sends the guest a WhatsApp confirmation message. This message does three things: it confirms the RSVP, it recaps the event details, and it plants a reminder trigger.

The message structure:

> "You're confirmed for [Event Name]! 🎉
> [Date] at [Time]
> [Location]
>
> We'll send you a reminder the day before. See you there!"

The confirmation message design went through seven iterations before landing on this format. The key findings: guests respond better to warm, personal-feeling confirmation than formal acknowledgement. Including the date and time in the confirmation reduces day-before no-shows (guests who forgot when the event was). The reminder mention sets an expectation that increases acceptance of the day-before message.

### The Day-Before Reminder

The most impactful feature for actual event attendance is one that users rarely notice: the automated day-before reminder. At 9am EAT on the day before the event, every confirmed guest receives a WhatsApp reminder.

The reminder message is short and friendly: "Hey [First Name]! Just a reminder that [Event Name] is tomorrow at [Time], [Location]. See you there! 🙌"

Opt-out is handled by replying "STOP" to the reminder  -  Jitabi processes this and removes the guest from future messages for that event. Opt-out rate is 2.1%. The reminder has no opt-in  -  all confirmed guests receive it. This is an intentional design choice. At a social event in Kenya, showing up is a social commitment, and a day-before reminder serves the event creator's interest as much as the guest's.

### Deduplication and Idempotency

The deduplication strategy is simple: RSVP records are idempotent on the composite key of phone_number + event_id. If the same phone number attempts to RSVP for the same event twice, the second request updates the existing record rather than creating a new one. The guest receives a confirmation either way, but the guest list count does not increment.

This approach handles the common case of guests who tap the RSVP link multiple times (network errors, impatience, accidental double-tap) without creating duplicates. It also handles the case of guests who RSVP, cancel, and RSVP again  -  their record transitions through states (confirmed → cancelled → confirmed) rather than creating multiple entries.

In over one million RSVPs, we have received fewer than 200 duplicate complaints  -  guests contacting support because they believe they appear twice on the guest list. Investigation of these cases shows most were caused by guests using different phone numbers (personal and work), not actual system duplicates. The true duplicate rate from system errors is effectively zero.

### Live RSVP Counts for Event Creators

Event creators can check their RSVP count in two ways: by asking Jitabi ("How many people are coming to my party on Saturday?") or by opening the event dashboard. Jitabi returns the current count and a breakdown of confirmed, pending, and cancelled in a single message. The dashboard shows the full guest list with names and contact numbers, filterable and exportable to CSV.

The live count in Jitabi is the most-used feature by event creators during the pre-event period. The query volume peaks 24 - 48 hours before events, when creators are finalising catering quantities and logistical details. Accurate, real-time headcount is genuinely high-value information for the people who need it.

![Event planning and guest coordination](https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80)

### What Happens When an Event Goes Viral

The load pattern for RSVPs is extremely uneven. A typical event receives 15 - 40 RSVPs over 3 - 5 days, arriving in a steady trickle as the event link circulates through WhatsApp groups. A viral event  -  one that gets shared in a large community group or by someone with a large following  -  can receive 300 - 500 RSVPs in a 30-minute window.

Our load testing protocol simulates a 500-concurrent RSVP scenario against a single event. At peak, the Supabase write throughput for RSVPs needs to handle approximately 200 writes per minute without degradation. With connection pooling and write batching, we sustain this load with p95 write latency under 180ms.

The WhatsApp confirmation send queue is rate-limited by Meta's API limits. At viral load, confirmation messages queue up and are delivered over 5 - 15 minutes rather than immediately. The guest sees the RSVP confirmation screen instantly (optimistic UI), and the WhatsApp confirmation follows within minutes. For social events, this delay is entirely acceptable. No guest has ever complained that their WhatsApp confirmation arrived eight minutes after they submitted the RSVP form.

### What Makes a Good RSVP Confirmation Message

After running 1M+ RSVPs, we have some strong opinions about RSVP confirmation messages. The best ones are short (under 60 words), warm in tone, include all logistical essentials (date, time, location), and end with forward-looking anticipation rather than administrative closure.

"Your RSVP has been received" is administrative closure. "See you there!" is forward-looking anticipation. The difference in guest sentiment  -  measurable in follow-through attendance rates  -  is meaningful. Guests who receive warm confirmation messages attend at a 12% higher rate than those who receive clinical acknowledgement. The words in the confirmation message are not just UX copy. They are attendance infrastructure.

## The Load Testing Story: When an Event Went Viral

Designing for a median guest list of 40 people is straightforward. Designing for the event that gets posted in a WhatsApp group with 2,000 members, then forwarded to five more groups, and generates 800 RSVPs in 45 minutes, is a different engineering problem entirely.

This scenario happened on a Sunday evening in November. A community church event in Nairobi was created through Jitabi in the afternoon. The creator shared the URL in the church's main WhatsApp group. Within ten minutes, the link had been forwarded to multiple other groups. By 9 PM, the RSVP endpoint had received 847 requests in 45 minutes.

The RSVP endpoint had been designed for a maximum expected concurrency of 50 simultaneous submissions. At 20 times that concurrency, response times degraded from under 200 milliseconds to over 8 seconds. Several hundred guests received error pages rather than confirmation screens.

The incident drove an immediate architectural change: horizontal scaling of the RSVP service with auto-scaling configured to handle 100x expected concurrency, a database connection pool expanded to match, and a queue-based architecture for RSVP writes that decouples reception from storage. The guest now receives an immediate confirmation (optimistic acknowledgment from the queue entry) before the database write has completed, with a background process handling the actual persistence.

The 45-minute incident with 847 concurrent RSVPs turned out to be useful. It stress-tested the system at a scale that planned load testing would have simulated but not matched in the authentic randomness of real traffic.

![MyJoyfulDay RSVP system handling viral event traffic showing infrastructure scaling](https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80)

## Deduplication in Practice: The Real-World Edge Cases

The deduplication strategy - idempotent on phone number plus event ID - handles the obvious case: a guest submitting the RSVP form twice by double-tapping or refreshing. But real-world usage produced several edge cases the initial design did not anticipate.

**Shared devices:** In households where family members share a phone, multiple people RSVPing to the same event from the same number creates a conflict. The system cannot distinguish between a duplicate submission and two genuine guests using the same phone. The current approach: accept the second RSVP as an update to the first (updating the name field), and add a "plus one" prompt on the confirmation screen that allows the original RSVP to add additional guests explicitly.

**Number changes:** When a guest changes their phone number between creating an RSVP and attending the event, the WhatsApp confirmation and reminder messages go to the old number. This is a genuine problem with no clean solution at the platform level - it requires the guest or event creator to update the RSVP with the new number. A manual update path through Jitabi (the creator messages "update RSVP from old-number to new-number") handles this case for events where the creator is aware of the change.

**Cancelled and recreated events:** When an event is cancelled and a new version is created with a new URL, guests who RSVPed to the original event need to RSVP again. This is correct behaviour but creates confusion when guests receive a "your RSVP was cancelled" message followed by a "please RSVP to the new event" message. Improving the cancellation and migration flow to automatically carry over RSVPs when an event is recreated by the same creator is a planned feature.

## The Guest Experience Beyond RSVP

The RSVP confirmation is the beginning of the guest experience, not the end. MyJoyfulDay's guest journey continues through two additional touchpoints that drive event attendance.

**The day-before reminder:** Twenty-four hours before the event start time, all confirmed guests receive a WhatsApp message from Jitabi with the event details, the location (with a Google Maps link if a mappable address was provided), and a one-tap option to confirm they are still attending or let the creator know they cannot make it. This reminder drives a 31% increase in attendance versus events without reminders.

**The morning-of-event message:** For events starting after 2 PM, guests receive a brief "today is the day" message at 9 AM with a link to the event page for a quick detail check. This message has the highest open rate of any Jitabi outbound communication - 84% read rate within two hours of sending - because it is contextually relevant to what the recipient is about to do that day.

![Guest experience timeline at MyJoyfulDay showing RSVP to event attendance journey](https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=80)

## Creator Guest Management: What the Dashboard Enables

While most creators interact with Jitabi exclusively through WhatsApp, the guest management tools in the web dashboard serve the 13% of creators who run larger or more complex events.

The dashboard guest list view shows all RSVPs in real time, sortable by name, confirmation time, or attendance status. For events where capacity matters (venue hire has a maximum occupancy, catering is ordered per head), the real-time RSVP count drives practical decisions. A creator whose venue has 80-person capacity and has received 120 RSVPs needs to close RSVPs or expand their venue booking - information the dashboard surfaces clearly.

The check-in feature allows creators to mark guests as arrived at the event, tracking actual attendance versus RSVPs. This data is useful for future event planning (RSVPs typically over-estimate attendance by 20 to 30% on MyJoyfulDay - knowing this helps creators budget more accurately for catering and seating).

Export to CSV gives creators a guest list they can use offline, share with caterers or venue staff, or import into other systems. This is consistently the most-used dashboard feature among the creators who access the dashboard at all.

`;
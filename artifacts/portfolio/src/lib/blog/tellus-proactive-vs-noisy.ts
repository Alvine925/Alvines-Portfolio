export const coverImage = "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80";

export const content = `## The Line Between Helpful and Annoying: How Tellus Decides When to Interrupt You

There are two ways a notification system can fail you. The first is missing something important  -  you find out about a client escalation three hours after it happened because the signal never reached you. The second is crying wolf so often that you start ignoring everything  -  you miss the real emergency because you had trained yourself to dismiss alerts.

Both failures destroy the product. But they are not symmetric failures. Under-notification erodes trust slowly. Over-notification erodes it fast, and then makes under-notification catastrophic.

Understanding this asymmetry is central to how Tellus is designed.

## Why Over-Notification Is the Default Failure Mode

When developers build notification systems, they have perfect visibility into one side of the outcome: the catches. Every time the system surfaces something important and the user acts on it, that is a legible success. The developer can see it in the logs, in the user behavior data, in the engagement metrics.

What the developer cannot see is the silent dismissal. The user who sees an alert, glances at it, decides it does not matter, and swipes it away. This is not logged as a failure. It is often logged as an engagement event. The system appears to be working.

Over time, this asymmetry in feedback causes systems to optimize for recall at the cost of precision. Every potentially relevant signal gets surfaced, because surfacing it has a measurable upside (catches a real thing) and an invisible downside (trains the user to ignore alerts).

The invisible downside compounds. Once a user's internal model of the notification system is "most of these don't matter," the user begins processing notifications with much lower attention. The false alarm problem is that false alarms cause you to miss real ones, not because the real ones stop coming, but because you stop paying attention.

Tellus was designed with this failure mode as the primary thing to avoid.

## The Three-Axis Classification System

Every incoming signal in Tellus is evaluated against three dimensions before a surfacing decision is made.

**The urgency axis:** Does this require a time-bounded action? A message asking for input before a meeting that starts in two hours scores high. A thread update on a project with no active deadline scores low. Urgency is not just about importance  -  it is about the cost of waiting.

**The relevance axis:** Is this connected to work the user is actively engaged with? A message in the Slack channel for a project the user edited documents in this morning scores high. A message in a channel the user has not engaged with in two weeks scores low. Relevance is scored against the live context model.

**The decision-requirement axis:** Does this require input, or can it proceed without one? A thread asking for approval blocks progress and requires the user's attention. A thread where someone else has already made the decision the user was waiting on is informational, not decision-requiring. These need different surfacing treatments.

![A focused meeting where decisions are being made efficiently](https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80)

## The Scoring Algorithm

The three axes are scored independently on a 0-1 scale and combined into a surfacing decision.

The rule is simple: score high on two of three axes, and the item is surfaced passively (visible in the context sidebar without interruption). Score high on all three axes, and the item is surfaced actively (push notification or highlighted card in the current tool).

Score high on only one axis, or low on all, and the item is logged but not surfaced. It remains accessible through query but does not interrupt.

This creates four behavioral zones:
- High urgency, high relevance, decision-required: active interrupt
- Any two of three high: passive surface
- Only one high: queue for batch review
- None high: log silently

The threshold calibration determines the character of the product. Too sensitive and you have a noisy system. Too conservative and you miss things. The initial calibration is set from research into knowledge worker notification tolerance, and refines over time from individual user behavior.

## How Urgency Is Determined

Urgency is the most objectively measurable of the three axes.

A hard deadline within four hours scores maximum urgency. The same deadline four days out scores low urgency  -  there is time to act. A message from your most-frequently-messaged contact in the last 30 days scores higher than a message from a contact you have received one message from. A direct @mention scores higher than a channel notification.

Urgency also has a rate-of-escalation component. A thread that has generated five messages in the last 30 minutes is escalating and scores higher than a thread that has generated five messages over the last week.

## The Interruption UX

The form of the surfacing matters as much as the threshold.

Tellus distinguishes between passive cards  -  which appear in the context sidebar of whatever tool you are currently using and can be read when your attention reaches them naturally  -  and active push notifications, which arrive as a notification and demand attention.

Passive cards are used for high-relevance, non-urgent items. You will see them when you naturally glance at the sidebar. They do not break flow.

Active push notifications are reserved for the all-three-high case: urgent, relevant, decision-required. These are the signals that genuinely cannot wait. Because the threshold is high, the ratio of active notifications to passive cards should be roughly 1:5 in a well-calibrated system.

## Deep Work Protection

When a user signals focus mode  -  either manually or through behavioral inference (sustained typing, no tool-switching for 20+ minutes)  -  Tellus automatically raises the threshold for active interruptions.

During deep work mode, only items scoring maximum on all three axes break through. Everything else is queued and presented as a batch when the focus session ends. The batch summary includes what arrived and a brief assessment of what (if anything) requires immediate attention.

![A remote worker in deep focus at their workspace](https://images.unsplash.com/photo-1616587226157-48e49175ee20?w=1200&q=80)

## Learning From Dismissals

When a user dismisses a surfaced notification without acting on it, that dismissal is a signal. It means the system's relevance scoring overestimated this item's importance to this user.

Dismissals calibrate the model in two ways. At the item level: this specific type of item from this source in this context was overestimated. At the pattern level: items with this combination of signals tend to be overestimated for this user.

Over time, the model learns individual user patterns. A user who consistently dismisses Slack notifications from a particular channel because they monitor it manually will see that channel's notifications weighted lower. A user who consistently acts on alerts about a particular type of client message will see those weighted higher.

The goal is a system that, after 30 days of use, has learned your signal-to-noise preferences well enough that you trust every notification that breaks through to actually matter. That trust is the product.

## Comparing to Existing Approaches

Slack notification settings are user-configured rules: all messages, @mentions only, keywords. They are static, binary, and they do not account for context. An @mention in a dormant project is not the same as an @mention in an active one.

Email filters are user-configured rules applied to inbound messages. They reduce volume but not intelligently  -  a filter that sends newsletters to a folder is useful, but it does not know that the newsletter you subscribed to last year contains something relevant to a decision you are making today.

Calendar reminders are time-based triggers. They are good at what they do but entirely context-blind.

Tellus is the only layer in a standard knowledge worker tool stack that makes notification decisions based on a live model of current work context. That is not a small difference. It is the difference between a system that interrupts you based on rules and a system that interrupts you based on judgment.

## The Notification Crisis in Modern Work

The average knowledge worker in 2025 receives notification stimuli every few minutes across email, messaging platforms, mobile apps, and now AI systems. The majority of these notifications do not require immediate attention. But each one arrives with the same urgency signal — a banner, a sound, a badge — creating an environment where workers are perpetually interrupted by stimuli that rarely justify the interruption.

Research on cognitive performance consistently shows that deep work — the focused, uninterrupted thinking that produces the most valuable knowledge work outputs — is inversely correlated with notification frequency. Each notification has a cost beyond the time it takes to read it: the disruption of concentration and the time required to re-establish the cognitive state that the interruption broke.

This creates the central design challenge for Tellus: the system needs to surface important information proactively, but doing so creates notification overhead that itself degrades the productivity it's designed to improve. Getting this balance wrong — in either direction — undermines the product's core value.

**Too few notifications:** Important things are missed. Urgent deadlines are overlooked. Critical messages go unread. The AI assistant fails its most basic function.

**Too many notifications:** The user starts ignoring all notifications. The AI becomes another noise source. The false alarm rate causes real alarms to be missed. The cognitive overhead cancels the productivity gain.

![Notification frequency graph showing sweet spot between too few and too many alerts for productivity](https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=1200&q=80)

## Machine Learning in Notification Relevance

Static rules for notification relevance — "notify if urgent, don't notify if not urgent" — fail because urgency is contextual and personal. A message marked high priority from a client is urgent on a Monday before a meeting, less urgent on a Friday afternoon after deliverables are submitted.

Tellus approaches notification relevance as a machine learning problem. The system observes which notifications the user responds to immediately and which they defer or ignore, building a model of what this specific user treats as genuinely urgent. Over time, the notification relevance model becomes personalised — calibrated not to a generic definition of urgency but to this user's observed priority pattern.

The model factors:
- **Sender relationship:** Messages from frequent contacts whose messages are consistently acted on quickly score higher relevance.
- **Content signals:** References to upcoming deadlines, financial amounts above threshold, explicit urgency language, and names of projects currently in active status all increase relevance scores.
- **Timing context:** A message at 8am on a Monday before a project deadline has different relevance than the same message at 6pm on a Friday.
- **Current activity:** Notifications arriving during detected focus time (when the user hasn't switched applications or sent any outbound messages for an extended period) are held until focus time ends unless they exceed a high relevance threshold.

## User Control as a Core Feature

No machine learning model is perfect. Users need meaningful control over notification behaviour — not buried in settings menus, but surfaced in the natural interaction flow.

Telling Tellus "I don't need to be notified about this type of thing" should immediately update the model. Telling it "this was important and I shouldn't have missed it" should update in the other direction. These direct feedback signals are incorporated into the personalised model in real time.

Beyond direct feedback, users can set focus modes that suppress all but the most critical notifications during designated work periods. They can configure specific senders or projects as always-high-priority. They can view a queue of held notifications that can be reviewed in a batch at a chosen time rather than as individual interruptions.

The goal is a notification system that, through a combination of intelligent defaults and responsive personalisation, eventually requires no manual management at all — one that has learned enough about the user's priorities to handle the filtering autonomously while the user maintains confidence that genuinely important things won't be missed.

## The Business Case for Getting This Right

Organisations that successfully implement intelligent notification filtering see measurable productivity improvements that go beyond the obvious reduction in interruptions. When professionals trust that their notification system is filtering intelligently, they can enter deep work states with confidence — knowing they will be alerted if something genuinely urgent arrives and that silence means they can focus.

This trust is the hardest thing to establish and the most valuable thing the system can provide. It requires a track record of correct filtering — genuinely important notifications delivered promptly, genuinely unimportant ones filtered — over a long enough period that the user has stopped second-guessing the system.

For Kenyan professionals operating across multiple communication channels simultaneously — WhatsApp, email, Slack, SMS, LinkedIn — the problem is acute. The volume of incoming messages across these channels during a typical Nairobi work day is high enough that manual filtering is itself a significant time cost. Tellus's cross-channel notification intelligence reduces this cognitive load in a way that single-channel tools cannot.

The competitive advantage of deep, uninterrupted focus work — the kind that produces the highest-quality outputs — is available to professionals who solve this notification problem. Tellus is built to make that advantage accessible.
`;
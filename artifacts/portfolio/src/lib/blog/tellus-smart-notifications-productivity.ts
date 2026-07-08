export const coverImage = "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80";

export const content = `## Smart Notifications vs. Notification Overload: How Tellus Decides What You Need to Know

The notification has become one of the most contested experiences in modern professional life. Every app wants to notify you. Every platform has decided that your attention is a resource they have a claim on. The result  -  for most Kenyan professionals managing WhatsApp, email, Slack, Twitter/X, Instagram, news apps, and a dozen other platforms simultaneously  -  is a constant low-level interruption that fragments attention, prevents deep work, and paradoxically makes it harder to stay on top of what actually matters.

The problem is not notifications. It's undiscriminating notifications. A message from a key client in the same notification stream as a promotional offer from a loyalty programme. An urgent deadline reminder buried beneath a weekly newsletter. Critical information competing for attention against noise.

Tellus is built around a specific thesis: that the value of an AI assistant is not in showing you everything, but in surfacing the right things at the right times while filtering the noise. This article explains the philosophy behind Tellus's notification approach and the technical architecture that makes it work.

![Smart phone showing notification alerts and management](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80)

## The Notification Problem Is an Attention Allocation Problem

When we say we have too many notifications, what we actually mean is that too many notifications are demanding attention that they don't deserve. The underlying resource being misallocated is not time  -  you can manage notifications quickly. The resource being misallocated is attention.

Attention is not infinitely renewable. Cognitive research consistently shows that attention switches between tasks carry a mental cost that accumulates. Every time you check a notification and switch back to your primary work, there's a recovery period before you return to full concentration. In a work day punctuated by dozens of notifications, these recovery costs add up to hours of reduced productivity.

**The two failure modes:**

*Over-notification* (the more common problem): Everything is a notification. You're constantly interrupted. Nothing stands out because everything demands equal attention. You start ignoring all notifications, which means you miss the genuinely important ones.

*Under-notification:* The fear of over-notification causes aggressive notification suppression. You turn everything off. You miss genuinely time-sensitive information. You find out about important developments late.

The goal is neither maximum notifications nor minimum notifications  -  it's the right notifications. Surfacing things that genuinely require your attention, at the right time, while filtering the rest.

## How Tellus Approaches Notification Intelligence

Tellus's notification layer operates on a principle it calls "contextual relevance"  -  whether a piece of information deserves to interrupt you at this moment depends not just on the information itself, but on:

**Your current context.** Are you in a meeting? Driving? Working on a deadline-sensitive task? The same piece of information might warrant an interrupt at one moment and a quiet addition to your review queue at another.

**The information's time-sensitivity.** Some information has a window within which it's actionable  -  a meeting reminder 15 minutes before the meeting has value; 2 hours before, it's premature; after the meeting starts, it's useless. Tellus considers time-sensitivity in determining when to surface information.

**The sender or source's priority.** A message from your most important client warrants different treatment than a promotional email. Tellus learns priority relationships from your communication patterns  -  who you respond to quickly, who initiates critical conversations, which information sources prove reliably important.

**The information's relationship to active work.** If you're in the middle of a project for a specific client, information related to that project has higher contextual relevance than information about something unrelated. Tellus tracks what's active in your work context and weights information accordingly.

**Historical action patterns.** If every previous message from a particular person in a particular format has turned out to require action within 2 hours, Tellus learns that pattern and prioritises future messages from that person in similar contexts.

## The Technical Architecture: How Context-Awareness Works

Building notification intelligence that actually works requires understanding both the content of communications and the context in which they're received.

**Message classification layer:**

Every incoming message  -  from WhatsApp, email, Slack, or other integrated channels  -  passes through a classification layer that identifies:
- Sender priority (determined by historical communication patterns and explicit priority settings)
- Content urgency signals (language indicating time pressure: "urgent," "ASAP," "by end of day," specific deadline references)
- Action requirement (does this message require a response or decision, or is it informational?)
- Topic categorisation (which projects, clients, or areas does this relate to?)

**Context inference layer:**

Tellus infers your current context from multiple signals:
- Calendar events (are you in a scheduled meeting right now?)
- Communication patterns (high message frequency suggests you're in active work mode)
- Time of day and day of week (Tellus learns your typical patterns)
- Recent focus signals (if you've been in deep work for 45 minutes without checking messages, an interrupt has high cost)

**The notification decision:**

Combining message classification and context inference, Tellus makes a notification decision:
- Immediate interrupt (high priority, time-sensitive, context permits)
- Delayed notification (important but not time-sensitive; surface at your next natural review point)
- Digest inclusion (lower priority; batched with other information into a scheduled digest)
- Silent ingestion (purely informational, no action required; added to accessible memory)

**Your preferences override:**

All intelligent defaults can be overridden. A Tellus user can configure: specific senders who always get immediate interrupt treatment, topics that should never interrupt during specified hours, contexts where no interruptions are permitted (focus mode), and digest timing and format preferences.

![Professional managing notifications on laptop effectively](https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&q=80)

## The Digest: Making Non-Urgent Information Accessible Without Interruption

For information that's important but not time-critical, Tellus produces digests  -  summarised collections of related information delivered at scheduled intervals or at natural break points in your work day.

A Tellus digest might include:
- Summary of email threads you haven't responded to but are not urgent
- Actions requested from you in various channels that don't have immediate deadlines
- Updates from monitored information sources (industry news, competitor activity, relevant market data)
- Non-urgent status updates from team members or clients
- Reminders about tasks that have upcoming (but not immediate) deadlines

The digest format means you can review 20 pieces of information in 5 minutes rather than being interrupted 20 times throughout the day. The information reaches you; it just doesn't disrupt your work pattern unnecessarily.

**Digest timing matters:** Tellus learns when your natural break points occur  -  end of meetings, between tasks, mid-morning and mid-afternoon lulls  -  and schedules digest delivery for these moments when the interrupt cost is lowest.

## The Proactive Alert vs. Reactive Notification Distinction

There's a meaningful distinction between two types of Tellus notifications:

**Reactive notifications:** Information that has just arrived (a new message, a new email, a new update) and may or may not require your attention.

**Proactive alerts:** Information that Tellus has inferred you'll need before you've received a message about it. This is where Tellus's most distinctive capability operates.

Examples of proactive alerts:
- "You have a call with [client] in 30 minutes. Here's the summary of your last three interactions with them."
- "The deadline you set for [project] is tomorrow. Your last update on this was three days ago  -  you may want to check in."
- "The document you shared with [colleague] last week hasn't been opened yet. You mentioned this was time-sensitive."
- "Based on your typical Tuesday patterns, this is likely when you'll want a summary of your morning messages."

Proactive alerts require a significantly deeper model of your work and context than reactive notifications. They represent the direction Tellus is developing toward  -  an assistant that's genuinely anticipating what you need rather than passively routing what arrives.

## Managing Notification Settings in Tellus

The Tellus notification system is configurable to match your working style and preferences:

**Priority contacts:** You define which contacts always receive immediate interrupt treatment regardless of context. Your manager, your most important clients, your partner  -  these people's messages always get through.

**Focus mode:** Configurable periods where only the highest-priority interrupts reach you. Useful for protecting deep work time. Can be triggered manually ("Tellus, focus mode for 2 hours") or scheduled automatically.

**Do not disturb:** Complete notification suppression for defined periods. Tellus continues to receive and classify information during DND; it delivers a digest when DND ends.

**Channel-specific settings:** Different notification rules for different channels. WhatsApp messages from key clients: immediate. Newsletter emails: digest only. Team Slack: depends on channel.

**Digest preferences:** Timing, frequency, and format of digest delivery. Some Tellus users prefer one morning digest and one end-of-day digest; others prefer four smaller digests throughout the day; others prefer digest delivery at natural break points in their calendar.

## The Cost of Getting Notification Strategy Wrong

Organisations and individuals who give no thought to notification management pay a productivity cost that is real but diffuse  -  hard to attribute to a specific cause, easy to dismiss as "just how busy work is."

A professional who is interrupted 30 times per day by notifications, where 20 of those interruptions turn out to be low or zero value, is paying:
- 20 interruption-recovery cycles (estimated 10 - 15 minutes of effective focus lost per interruption recovery)
- 20 attention switches that fragment concentration
- A cumulative cognitive load from constant partial awareness of the notification stream

If each low-value notification interruption costs a cumulative 5 minutes of productive capacity (optimistically), 20 interruptions costs 100 minutes  -  1 hour 40 minutes of productivity  -  per day.

Across a 20-person team: 33 hours of productive capacity lost daily to unnecessary notification interruptions. Per year, at a modest KES 1,000/hour value of professional time: KES 6.6 million in productive capacity lost to notification noise.

This is not a hypothetical. It's a measurement-based estimate of a real cost that most organisations are not paying attention to.

Tellus's notification intelligence is designed to recover as much of this lost productive capacity as possible. Not through notification minimisation, but through notification precision: making sure the right information reaches you at the right time, and the wrong information doesn't reach you at all.

## From Notification Inbox to Attention Management System

The dominant mental model for notifications is inbox-like: things arrive, you process them, you move on. This model fails for one fundamental reason: the rate of arrival exceeds the cognitive capacity to process each item as it arrives. The result is a permanent backlog — a growing list of things you've acknowledged but not acted on.

Tellus is designed around a different mental model: attention management. Rather than delivering all notifications to a single inbox for the user to process, Tellus routes items to three distinct queues based on their attention requirement:

**Immediate attention required:** Items that genuinely cannot wait — an urgent client message, a deadline that expires today, a payment that requires authorisation. These surface immediately regardless of what the user is doing. The bar for this queue is deliberately high; items in it should always justify the interruption.

**Requires attention today:** Items that need to be addressed before the day ends but don't require interrupting current work. These are held and presented at the next natural break in the user's focus pattern — typically when they complete a task or switch contexts.

**When you have a moment:** Items that have no time pressure but represent genuine work that needs to be done eventually — emails to reply to, documents to review, decisions to make. These are batched and presented as a curated work queue at intervals the user configures, removing them from the ambient distraction space entirely.

This routing structure is the practical implementation of the proactive-without-noisy design principle. The user is never overwhelmed by a single notification stream; instead, they interact with a system that has already sorted the incoming by urgency and presents each category at the appropriate moment.

![Smart notification routing showing three-queue system for immediate, daily, and deferred attention items](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80)

## Integration With the Kenyan Professional's Work Pattern

Kenyan professional work patterns have specific characteristics that smart notification systems need to accommodate.

**Unpredictable availability windows:** Nairobi traffic, frequent meetings, and variable connectivity create work patterns that are less regular than the 9-to-5 structure that most productivity tools assume. Smart notifications need to adapt to actual availability rather than assuming a fixed daily schedule.

**WhatsApp as the primary professional communication channel:** Many Kenyan professionals manage significant professional communication through personal WhatsApp, not through enterprise messaging platforms. A notification system that doesn't integrate with WhatsApp misses a substantial portion of the communications that require attention management.

**Cross-device usage patterns:** Kenyan professionals often switch frequently between mobile and desktop, using whichever is most accessible at a given moment. Notification delivery needs to be device-aware — not duplicating notifications across all devices simultaneously, but routing to the device the user is currently active on.

**Connectivity variability:** Standard Wi-Fi in Kenyan offices is reliable for most users in Nairobi. But field work, travel between cities, and meetings in buildings with poor signal create connectivity gaps. A notification system that loses notifications during connectivity gaps — rather than queuing and delivering when connection is restored — creates gaps in attention management that undermine its value.

Tellus's mobile application is designed specifically for this Kenyan professional context: WhatsApp integration that monitors professional channels, smart device routing, offline-capable notification queuing, and attention management that fits the irregular availability patterns of a professional working in Nairobi's real environment rather than in a controlled productivity-lab setting.

`;
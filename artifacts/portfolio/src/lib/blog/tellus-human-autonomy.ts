export const coverImage = "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=80";

export const content = `## Building AI That Knows Its Place: Why Tellus Will Always Ask Before Acting

There is a fantasy that circulates in certain corners of the AI productivity space. It goes like this: you wake up, make coffee, and by the time you sit down at your desk your AI assistant has already processed your inbox, declined three meeting requests that conflicted with deep work blocks, moved four tasks to done, sent follow-up emails to three clients, and filed the contract that arrived last night into the right folder. You arrive to a clean slate, ready to think.

It sounds wonderful. It is, on reflection, a description of a system that has taken dozens of consequential actions on your behalf while you were asleep  -  without your knowledge, without your judgment, and without any opportunity for you to consider the context that the AI could not have known.

This is not a product we would build. This post explains why, and what we built instead.

## The Accountability Problem

Every action taken in a professional context carries an implicit commitment. When you decline a meeting, you are making a social and professional statement about your priorities. When you send an email, you are putting words into the world under your name. When you mark a task as done, you are representing that a piece of work has been completed.

These are not neutral, mechanical operations. They are acts that can help or harm relationships, reputation, and organizational function. They carry accountability  -  if the action was wrong, you are the one who answers for it.

An action taken without your awareness is an action you are responsible for but cannot explain. The meeting was declined. You do not know why the AI decided to decline it. You do not know whether it considered that the person who sent the invite is someone your CEO is trying to build a relationship with, or that the project it referenced had been reprioritised last week in a conversation the AI did not have context for.

You cannot explain the decision because you did not make it. But the consequences are yours.

![A team in a thoughtful discussion about an important decision](https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=80)

## The Specific Ways Autonomous AI Actions Create Surprises

These are not hypothetical edge cases. They are the categories of failure that emerge predictably when autonomous AI systems act on partial context.

**The scheduling error.** An AI schedules a meeting at a time that is technically available on the calendar, but not given the context. It does not know you planned to have a sensitive conversation with a direct report before that meeting. It does not know the two attendees recently had a difficult interaction. The calendar said yes. The context said no.

**The premature resolution.** An AI marks a task as resolved because the criteria appeared to be met based on a thread update. But the thread update was a provisional conclusion, and the actual sign-off had not happened. The task falls off the board. No one follows up. The thing does not get done.

**The declined relationship.** An AI declines a meeting request because the calendar was full and the request looked low-priority based on the sender's communication history. The sender is a former colleague who is now in a senior position at a potential partner company. The decline lands as a slight. The relationship is damaged.

In each case, the AI made a locally-reasonable decision with incomplete global context. The damage is real. The recovery is expensive.

## Tellus's Explicit Action Boundary

Tellus maintains a hard separation between internal and external actions.

**Internal actions  -  always autonomous.** Monitoring integrated tools for new signals. Updating the context model. Summarising threads and documents. Connecting information across silos. Pre-computing context for upcoming interactions. Generating suggested responses and drafts. All of these happen continuously, automatically, and without requiring your confirmation.

These actions are invisible to the world. They cannot harm relationships, misrepresent your commitments, or take your name in vain. They are the observation and synthesis layer, and they are safe to automate fully.

**External actions  -  always require confirmation.** Sending any message via email or Slack. Updating a task status in any project management tool. Scheduling, rescheduling, or declining any calendar event. Creating, modifying, or deleting any record in any connected tool. These never happen without your explicit confirmation on that specific action.

The line is: anything that changes something in the world requires your approval. Anything that changes only what you see and know can happen automatically.

## The UX of Confirmation

If confirmation is required for every external action, the confirmation experience itself has to be efficient. A confirmation flow that takes 45 seconds defeats the purpose  -  the overhead of confirming is almost as bad as doing the thing manually.

Tellus designs confirmation modals to take under 10 seconds. The modal shows: what action is proposed, why it was proposed (the trigger event and the reasoning), and two options  -  confirm or dismiss. No additional navigation. No settings to check. One tap to confirm, one tap to dismiss.

For common action patterns  -  "send this follow-up to a client two days after they go quiet"  -  Tellus can propose and you confirm or dismiss in a single gesture. The confirmation is low-friction because the AI has done the drafting and reasoning work, and you are exercising final judgment, not doing the work from scratch.

![A professional reviewing an action before confirming it](https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&q=80)

## Why "Always Confirm" Is a Design Principle, Not a Limitation

The confirmation requirement is sometimes framed as a limitation  -  as if the truly advanced version of Tellus would not need it. We disagree.

Trust between a person and a system  -  just like trust between a person and another person  -  is built through predictability. The action boundary is the most predictable thing about Tellus. You know, without having to remember or check, that Tellus will never send a message without your confirmation. That predictability is what makes it safe to give Tellus broad visibility into your work. You can connect all your tools knowing with certainty what it can and cannot do.

An AI that sometimes acts autonomously and sometimes asks, based on its own assessment of the situation, is an AI you have to supervise. You cannot give it visibility and then stop watching. The unpredictability of autonomous action creates a monitoring burden that consumes the time the automation was supposed to save.

## How This Will Evolve

The action boundary is not permanent for all users. It is the right default for a new working relationship with a system that has not yet established trust.

As users build familiarity with how Tellus makes decisions  -  and as Tellus builds a more accurate model of a specific user's preferences  -  specific action types can be graduated to autonomous with explicit user opt-in.

The model is the same as how trust is established in human working relationships. You give a new assistant clear constraints and frequent check-ins. After six months of working together, you understand their judgment, they understand your preferences, and you extend more autonomy because it has been earned. After three years, you say "handle my calendar" and know it will be handled correctly.

Tellus is designed for that trajectory. But it starts in the right place  -  with confirmation, with predictability, and with the user's judgment as the final authority on every action that reaches the world.
`;

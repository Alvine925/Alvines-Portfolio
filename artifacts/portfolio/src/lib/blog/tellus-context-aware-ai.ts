export const coverImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80";

export const content = `## Context-Aware AI: Why Tellus Knows What You Need Before You Ask It

Most AI assistants are very good at answering questions. Type something in, get something back. The experience is genuinely impressive if you have not used these tools before, and genuinely useful even if you have. But there is a ceiling. The ceiling is this: you have to know what to ask.

If you already know what to ask, you are already most of the way there. The hard part of knowledge work is not finding information once you know you need it. The hard part is knowing what you need before you have thought to ask for it.

This is the problem Tellus is built to solve. Not reactive assistance. Proactive intelligence.

## The Reactive-to-Proactive Spectrum

Think of AI assistance as a spectrum. At one end is a search bar  -  you provide the query, the system retrieves results. One step forward is an FAQ bot  -  it answers a defined set of questions, and the interaction is still fully user-initiated. Further still is a reactive assistant  -  it handles open-ended queries, uses reasoning, returns thoughtful responses, but still waits to be asked. At the far end is a proactive assistant  -  it monitors, it maintains a model of your context, and it surfaces relevant information before you have formulated a question.

The first three points on that spectrum describe most AI products on the market today. ChatGPT, Claude, Gemini, Copilot  -  these are reactive assistants of varying capability. They are powerful. They are useful. They are not proactive.

Tellus is designed to occupy the proactive end of the spectrum. This is not a marketing distinction. It is a fundamental architectural difference that changes what the system can do for you.

## What Maintaining a Context Model Requires

Building a proactive assistant means building and maintaining a model of what the user is currently working on  -  not a historical record, but a live, continuously updated representation of the present state of their work.

This requires three things technically.

**State persistence across sessions.** A reactive assistant can be stateless. Each conversation is its own context window. A proactive assistant cannot be stateless. It needs to remember, across days and sessions, which projects are active, which threads are in-progress, which decisions are pending. The context model is a persistent data structure, not a conversation history.

**Event-driven updates.** The context model goes stale the moment it stops being updated. Tellus receives event signals from integrated tools  -  a new email, a Slack message, a calendar event created, a task status changed  -  and processes each against the existing context model to determine whether the model should be updated and whether something should be surfaced.

**Relevance scoring.** Not every event is equally relevant. A new email from a regular correspondent about an active project is highly relevant. A marketing newsletter is not. A Slack message in a channel you have not engaged with in three weeks is low signal. Relevance scoring determines what enters the context model and what is filtered out.

![A data dashboard showing interconnected signals and patterns](https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80)

## How Tellus Knows What You Are Working On

Tellus does not ask you to declare your priorities each morning. It infers them from your behavior across integrated tools.

**Document signals.** Which Google Docs or Notion pages have you opened or edited in the last 48 hours? These are the documents that matter right now. A document you edited three weeks ago and have not touched since is not currently active.

**Thread activity.** Which Slack channels and email threads have had recent back-and-forth? A thread with five messages in the last two hours is live. A thread with 80 messages where the last one was three weeks ago is dormant.

**Calendar events.** What is coming up in the next 24-48 hours? If you have a meeting about Project Horizon in three hours, Project Horizon is relevant right now. This seems obvious but most tools do not connect calendar context to communication context.

**Task recency and status.** Are there Linear or Asana tasks associated with a project that are overdue or recently updated? An overdue task on an otherwise quiet project is a signal that something needs attention.

The synthesis of these signals produces a ranked model of what matters to you right now. Not what mattered last month. Not what you have the most tasks about historically. What you are actually engaged with today.

## The Context Decay Model

Context is time-sensitive. A project that dominated your attention three weeks ago may be completely dormant today. The context model has to reflect this.

Tellus implements a context decay function. Each signal in the context model carries a recency weight that decreases over time following an exponential decay curve. A document edited this morning has full weight. A document edited five days ago has partial weight. A document not touched in three weeks has near-zero weight unless a new signal refreshes it.

The time constants are calibrated empirically. Most active work cycles have a relevant horizon of about 72 hours for daily signals  -  things that matter today are usually things that have been active in the last three days. Slower-moving projects have a longer relevant horizon, which the model learns from engagement patterns.

When a new signal arrives  -  a new email mentioning a project name, a Slack message in a channel associated with an initiative  -  it acts as a refresh, restoring weight to that context. The model continuously learns which signals are refresh-worthy and which are noise.

## Connecting Information Across Silos

The most valuable thing the context model enables is not better responses to your questions. It is the automatic connection of information across tools that live in separate silos.

Here is the specific pattern. You receive an email about Project Horizon. In isolation, that email is one data point. But in the context model, Project Horizon has associated entities  -  a Slack channel where the team communicates, three Linear tasks that are outstanding, a meeting on Thursday, and a Google Doc that is the current working spec.

When the email arrives, Tellus surfaces all of this. Not because you asked. Because the system knows the connection exists and knows you are about to need it.

This cross-silo connection is what no single-tool AI assistant can do. Copilot knows your Teams conversations and your Outlook email. It does not know your Linear tasks or your Slack threads. Notion AI knows your Notion documents. It does not know your email or your calendar. Tellus is tool-agnostic and cross-silo by design.

![A view of connected messaging threads across platforms](https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=1200&q=80)

## Proactive Surfacing in Practice

Here is what Monday morning looks like with Tellus for a senior manager.

Without Tellus: Open Slack, scan 12 channels, read 47 unread messages. Open Gmail, triage 31 emails from the weekend. Check Linear, look at the sprint board. Open Notion, check the project tracker. Check calendar. Attempt to synthesise all of this into a mental model of what needs attention today. This process takes 45 minutes to an hour and requires significant cognitive effort.

With Tellus: Open your laptop. Tellus has been monitoring since Friday. It presents a briefing: three items need your attention today. First, the Q3 planning document has a comment from the head of engineering that requires a decision before Thursday's meeting. Second, a client email from Friday remains unanswered and the client has a meeting with your CEO on Wednesday. Third, a Slack thread in the product channel reached a decision yesterday that affects an overdue task in your name.

Everything else  -  the 47 Slack messages, the 31 emails  -  is visible if you want it, but Tellus has determined it does not require your attention.

This is what proactive assistance looks like. Not answering questions better. Changing what you have to do to stay informed.

## The Privacy Design

Proactive monitoring raises an obvious question: what is being read, and by whom?

Tellus operates on a clear privacy model. The system monitors metadata and structure  -  who sent what, when, in which thread, referencing which project  -  more heavily than content. It does read content to determine relevance and surface summaries, but the goal is minimum necessary access.

Specifically: Tellus never reads personal emails marked as personal in your email client. It never monitors direct messages between individuals unless you explicitly grant that integration scope. It processes content to extract signals, and those signals are stored in your personal context model  -  they are never used to train shared models or shared with other Tellus users.

Data lives in your account's context store. Tellus employees do not have access to your message content. The context model is yours and remains yours.

## When the System Deliberately Stays Silent

A proactive system that interrupts constantly is worse than no proactive system. The value of proactive surfacing depends entirely on the relevance threshold being high enough that you trust every surface to matter.

Tellus maintains relevance thresholds. If an incoming signal does not score above threshold on the combined relevance model, it is not surfaced. It is logged, and remains accessible if you query for it, but it does not interrupt.

During deep work mode  -  which you can signal manually or which Tellus can infer from a period of sustained focused activity  -  the threshold is raised further. Only urgent, high-relevance items break through.

During user-set quiet hours, Tellus does not surface anything. Items are queued and presented as a batch summary when quiet hours end.

The chief of staff analogy is apt here. A great chief of staff does not interrupt the CEO with every piece of information that comes in. They carry the information, filter it continuously, and interrupt only when the interruption is genuinely necessary. The rest, they handle or hold.

That is the model Tellus is built on.

## Why Context Is the Most Underrated AI Capability

Most discussions of AI capability focus on language fluency, factual accuracy, and reasoning ability. Context awareness — the ability to use knowledge about the specific situation, user, and history to produce more relevant responses — is rarely foregrounded in product marketing, but it drives more of the practical value difference between AI tools than any other capability.

A context-unaware AI assistant gives the same answer to "what should I do about the delayed project?" regardless of whether the project is a small internal report or a major client deliverable, regardless of the relationship with the stakeholder, and regardless of what was discussed about this project yesterday. A context-aware AI gives a different, more useful answer in each of these situations.

Building genuine context awareness requires three components: memory of relevant history, understanding of the user's role and priorities, and the ability to weight that context appropriately when generating responses. Each component is technically non-trivial. Getting all three right is what separates genuinely useful AI assistants from expensive autocomplete.

![Context-aware AI assistant showing personalised response based on user history and role](https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80)

## How Tellus Builds Context Over Time

Tellus approaches context as an accumulated asset that grows with usage. From the first interaction, Tellus begins building a model of the user's priorities, communication style, key relationships, and recurring challenges. This model shapes every subsequent interaction.

**Priority calibration:** Through observed patterns — what the user acts on immediately versus what they defer, what they escalate versus what they handle independently — Tellus builds a model of relative priority that informs which information to surface proactively.

**Communication style adaptation:** Users vary significantly in how they prefer information delivered. Some want bullet points, others prefer narrative. Some want all options, others want a single recommendation. Tellus adapts to observed preferences rather than forcing users to specify their style in settings.

**Relationship awareness:** Professional communication is deeply relationship-specific. An update to a long-term client requires different framing than the same update to a new one. A message to a direct report requires a different register than the same content to a senior stakeholder. Context-aware AI recognises these relationship dimensions from conversation history.

**Project and thread continuity:** For professionals managing multiple parallel projects, maintaining thread-level context is essential. Tellus maintains the ability to pick up project-related conversations from where they left off, without requiring the user to re-establish context at the start of each interaction.

## The Privacy Architecture of Context Collection

Context accumulation requires data collection, which raises legitimate privacy questions. Tellus's privacy architecture addresses these directly.

All context data is stored under the user's control. Users can inspect what Tellus knows about them — the priority model, relationship notes, communication preferences — at any time through the context management interface. Any component of the context model can be edited or deleted.

Context data is never shared across users or organisations without explicit consent. Each user's context model is isolated. In team settings, shared context — project information, client histories — is governed by permission settings that the team's administrator controls.

The context model is used exclusively to improve the relevance of Tellus's responses for the individual user. It is not used for advertising, training general AI models, or any purpose outside the product's direct function of improving professional productivity.

Tellus's approach to context is the practical foundation of its value proposition: an AI assistant that gets more useful over time because it genuinely learns what matters to you.

`;
export const coverImage = "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80";

export const content = `# Why We Built Tellus: The Manifesto Against Productivity Theater

There is a particular kind of exhaustion that knowledge workers know well. It is not the exhaustion of having done too much work. It is the exhaustion of having spent an entire day managing the *system* that is supposed to help you do work  -  and feeling, at 6pm, that you have nothing to show for it.

I spent six months trying to solve this problem with tools. This is the story of what I found, what I built, and why I believe the entire productivity software category has been asking the wrong question.

## The Six-Month Experiment

In January, I committed to doing what every productivity writer recommends: build the perfect system. Use the best tools. Be disciplined. Give it time to work.

Here is what I used and what I learned from each:

**Notion** is genuinely impressive as a knowledge management tool. The flexibility is real. But within three weeks, I had built a second job maintaining it. Pages needed updating. Databases needed new fields. Templates needed revision. The system became a project in itself, and I found myself spending 45 minutes per day inside Notion doing metadata work  -  tagging, reorganising, linking  -  rather than actual thinking.

**Linear** is the best project tracking tool I have used. It is fast, opinionated, and aesthetically considered. But it is a project tracker. It knows about issues and cycles. It does not know about the Slack conversation where the decision to deprioritise that issue was made, or the email thread where the deadline got moved. Linear tracks what you tell it. The gap between what Linear knows and what is actually happening is filled by meetings.

**Slack** is where your team actually communicates. It is also an extremely efficient machine for generating anxiety. The unread count is always there. The mentions pile up. The channels multiply. I was a member of 34 channels. I had messages going back years. Slack is a real-time communication tool masquerading as a knowledge base, and it is bad at the latter.

**Asana** is what you use when your team insists on a task manager that is not Linear. The task lists are fine. The timeline views are useful occasionally. But tasks in Asana age quickly. By the time a task has been sitting in a project for three weeks, it has usually either been done informally or been superseded by a conversation that happened elsewhere.

**Loom** promised to replace meetings with async video. And for a narrow set of use cases  -  explaining a complex process, giving feedback on a design  -  it delivers. But watching a 7-minute Loom is still watching a 7-minute Loom. You cannot search it. You cannot skim it. You cannot link to the moment where the important thing was said.

**Superhuman** made email feel fast. Keyboard shortcuts, triage workflows, split inbox. The experience of processing email improved meaningfully. But processing email faster is not the same as receiving less email, and it is not the same as email being less necessary. I cleared my inbox faster. Then it filled up again.

**Cron** (now Notion Calendar) is a beautiful calendar application. Scheduling links, smart time zone handling, the ability to see multiple calendars clearly. Good product. But a calendar is a reflection of your commitments, and the problem I had was not with how my commitments looked  -  it was with how many I had, and how much coordination work surrounded each one.

![A person surrounded by multiple screens and notification panels](https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&q=80)

## The Pattern

By month three, I had seven premium tool subscriptions and a worse working life than when I started. The reason was not that any of these tools was bad. They are, in their domains, genuinely well-built products.

The reason was that each tool created its own gravity. Each had its own inbox. Its own notification surface. Its own interface to check. Its own data model that did not speak to the others. And crucially, maintaining each tool required its own ongoing investment of time and attention  -  or the tool degraded into uselessness.

I was not being more productive. I was performing productivity. I had built an elaborate stage set of organised work without actually getting more done.

## The 40% Calculation

I want to give this a number, because it is too easy to dismiss as a feeling.

Run this experiment for one week. At the end of each day, categorise how you spent your time into two buckets. Bucket one: work that directly advances the thing you are trying to build, write, decide, or create. Bucket two: coordination work  -  the status updates, the scheduling, the inbox triage, the tool maintenance, the searching for information, the following up, the clarifying.

I did this audit rigorously for a week, tracking in 15-minute increments. My split: 38% actual work, 62% coordination overhead.

I was not an outlier. I surveyed 23 people across different roles and company sizes. The average across the group was 41% actual work. A software engineer at a 40-person startup was spending 3.1 hours per day in coordination overhead before writing a line of code. A head of marketing at a growth-stage company had 11 recurring meetings per week, each of which had a pre-call and a recap email.

The $200,000 senior hire is spending 60% of her time doing work that a good system should eliminate.

## The Chief of Staff Frame

Here is the thought experiment that unlocked how I thought about the problem.

Think about what an outstanding chief of staff does for a senior executive. They do not give the executive more tools. They do not build better filing systems. What they do is act as a contextual intelligence layer. They know what projects are in flight. They know who has not responded to what. They know that the meeting on Tuesday is actually about the restructuring decision, not the project review it says on the calendar. They know which of the 80 emails that came in today require the executive's attention and which can be handled, delegated, or ignored.

The chief of staff does not reduce the amount of work that exists. They reduce the amount of cognitive overhead the executive has to carry to navigate that work. They filter, anticipate, connect context, and surface what matters before being asked.

No productivity tool does this. Every productivity tool is a structured place to put information. None of them reads the information you are already generating across your existing tools and tells you what matters.

![A collaborative team meeting with clear communication](https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80)

## What Tellus Is Not

Before explaining what Tellus is, let me be specific about what it is not.

**Tellus is not a project manager.** We are not building another Jira, Asana, or Linear. We are not competing with those tools. If your team uses Linear, Tellus integrates with it. Your issues stay in Linear.

**Tellus is not a chat tool.** We are not building another Slack or Teams or Discord. We have no intention of asking your team to move their conversations. Your conversations stay in Slack.

**Tellus is not a note-taking app.** We are not building another Notion or Obsidian or Roam. We do not want to be where your documents live.

**Tellus is not a task list.** We are not building another to-do app. We do not want to be the place where tasks are created and tracked.

The productivity tool category has spent 20 years building progressively more sophisticated places to put information. That is not the problem. You already have places to put information. The problem is that the information is siloed across those places, and navigating the silos is consuming your working life.

## The Product Thesis

Tellus is a context-aware, proactive assistant that lives inside your existing tools and reduces what you have to track.

Every word of that sentence is intentional.

**Context-aware** means Tellus understands what you are working on  -  not because you told it, but because it pays attention to what you are doing. Which threads have recent activity. Which documents have been opened. Which meetings are coming up. Which tasks are overdue.

**Proactive** means Tellus surfaces relevant information before you ask. When you open an email about Project Horizon, you do not need to go look up the Slack channel, the relevant tasks, and the last meeting notes. Tellus brings that to you.

**Lives in your existing tools** means you do not use Tellus by going to Tellus. You see it in the tools you already use  -  a sidebar in Slack, a panel in Gmail, a context layer in your calendar.

**Reduces what you have to track** is the promise. After using Tellus, the cognitive load of staying on top of your work decreases, not because there is less work but because the system is carrying more of the overhead.

## How Tellus Differs From What Exists

Microsoft Copilot is impressive. It can summarise your email, draft documents, and recap meetings. But it is a tool you use, not a system that operates. You have to ask it. It does not surface things you did not know to ask about. And it is deeply tied to the Microsoft ecosystem  -  it works well if everything you do is in Teams and Outlook and SharePoint. If you use Slack and Gmail and Linear, it is not for you.

Notion AI is an excellent writing assistant inside Notion. But it only knows what is in Notion. It has no awareness of your Slack conversations, your Gmail threads, your Linear issues. The context it operates on is a narrow slice of where your work actually lives.

Claude and ChatGPT are powerful, flexible AI assistants. But they are chat interfaces. You talk to them, they respond. They do not monitor your work environment, they do not maintain state across sessions, and they certainly do not push relevant information to you proactively. They are brilliant on demand. Tellus is designed for the moments you did not know you needed help.

![An AI-powered interface showing connected information threads](https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80)

## What "Context-Aware" Actually Means

In marketing, "context-aware" means the product knows your name and what you last clicked on.

In product terms  -  in the terms that matter  -  context-aware means something harder:

The system maintains a continuously-updated model of what you are working on. It knows that you are in the middle of closing a customer deal, that the deal has a specific conversation thread in Slack, that two tasks in Linear are outstanding for it, that there is a meeting on Thursday about it, and that the last email in the Gmail thread was unanswered for four days.

When something new happens  -  a new email, a Slack message, a task status change  -  the system can evaluate it against that model and determine whether it is relevant, urgent, and worth surfacing.

That is context-awareness in product terms. Not memory of a single session. Not personalization based on past behavior. A live, maintained model of your current working state, continuously updated, continuously queried.

Building that is hard. It requires persistent state management, event-driven updates from multiple systems, a relevance model that learns your patterns, and a delivery layer that does not become another inbox.

But the hard version is the only version that actually solves the problem.

## The Commitment

Productivity theater is expensive. It wastes the most talented people's most valuable resource  -  their focused attention  -  on work that systems should be doing for them. It generates coordination overhead that compounds as teams grow. It creates the illusion of busyness while hollowing out the time available for actual thinking.

We built Tellus because we believe the productivity software category needs to take a different direction. Not more places to put information. A system that understands the information you already have, across the tools you already use, and reduces what you personally have to carry in your head.

That is the thesis. That is the product.

For people who move fast and hate productivity theater.
`;

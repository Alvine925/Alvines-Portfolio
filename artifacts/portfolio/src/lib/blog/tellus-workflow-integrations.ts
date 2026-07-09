export const title = "How Tellus Lives Inside Your Existing Workflow Without Disrupting It";
export const date = "2025-05-25";
export const excerpt = "Every tool that asks you to change your workflow is making a bet that the value exceeds the switching cost. Tellus doesn't ask you to change anything. Here's how that works.";
export const tags = ["Tellus", "Product", "Integration"];

export const coverImage = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80";

export const content = `## How Tellus Lives Inside Your Existing Workflow Without Asking You to Change It

The graveyard of productivity tools is full of products that had the right idea and the wrong adoption strategy. The idea: centralise your work in one place, get clarity, move faster. The adoption strategy: migrate everything, retrain your team, and give it six weeks to stick.

It never sticks. Not because the tool was bad  -  often the tool was genuinely well-built  -  but because changing how people work is one of the hardest behavior change problems in consumer psychology. The cost of habit disruption is paid immediately and in full. The benefit of the new system arrives slowly, if at all. The math rarely works out.

Tellus is designed around a different premise: meet people where they are.

## Why "Meet People Where They Are" Is Harder Than It Sounds

The phrase is easy to say. Building it is a different matter.

When you build a platform that integrates with existing tools, you are not building in a clean environment. You are building against ten different data models, each with its own schema, its own authentication patterns, its own rate limits, its own webhook format (or absence of one), and its own approach to permissions.

An email in Gmail has a different data structure than an email in Outlook. A task in Jira has different fields, relationships, and status logic than a task in Asana or Linear. A Slack message has threading and reaction metadata that has no equivalent in Teams. Normalizing these into a coherent context model requires an integration layer that is, frankly, a significant engineering investment.

Then there is permission management. Each integration requires OAuth authorization from the user. Each integration has different OAuth scopes with different levels of access. Managing which permissions have been granted, which are necessary for which features, and how to handle partially-authorized states gracefully  -  this is unglamorous engineering that users never see but that determines whether the product feels trustworthy.

The tools that ask you to migrate everything avoid this complexity. The complexity is real and the shortcut is tempting. We chose not to take it.

![A diverse team collaborating effectively in a modern office](https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80)

## The Integration Philosophy: Push, Not Pull

Most integration-heavy tools operate on a pull model. They connect to your tools, pull your data into their platform, and present it through their own interface. You go to the tool to see your unified information.

Tellus operates on a push model. Instead of pulling everything to a central hub that you visit, Tellus pushes relevant information to you in context  -  in the tool you are already using.

When you are in Gmail, Tellus surfaces context from your other tools inside a Gmail sidebar. When you are in Slack, Tellus surfaces related email context and calendar events in a Slack app. When you open your calendar, Tellus surfaces background context for each upcoming meeting.

You do not go to Tellus. Tellus comes to you, in the tool where you already are.

This is harder to build. A sidebar in Gmail, a Slack app, a browser extension  -  each is a separate surface with separate technical constraints. But it is dramatically easier to adopt, because adoption requires nothing. You install the integration, and Tellus begins appearing in the tools you were already using.

## The Technical Integration Layer

Behind the push model is an integration layer with consistent patterns applied across every connected tool.

**Authentication:** Tellus uses OAuth 2.0 for every integration. Users authenticate through the standard OAuth flow for each tool. No passwords are stored. Tokens are encrypted at rest and in transit.

**Updates:** Where a tool offers webhooks  -  real-time event notifications when something changes  -  Tellus uses them. Gmail webhooks, Slack Event API, Calendar push notifications, Linear webhooks. For tools that do not offer webhooks or where webhooks are unreliable, Tellus falls back to scheduled polling at intervals calibrated to signal importance.

**Permissions:** Tellus requests read access by default and treats write access as a separately-granted capability. The integration will tell you when email arrives, but it will never send email unless you have explicitly granted send permission and explicitly confirmed the specific send action. These are separated because the privacy and trust implications are categorically different.

## The Current Integration Map

Tellus currently integrates with the following tool categories:

**Email:** Gmail and Outlook. Message content is read for context extraction and relevance scoring. Tellus identifies project-related threads, extracts key information, and connects email threads to associated Slack discussions and tasks.

**Team messaging:** Slack. Channel membership and message content in joined channels are monitored. Tellus summarises active threads, identifies decisions made, and surfaces relevant channel context when email or calendar events reference the same project.

**Calendar:** Google Calendar and Outlook Calendar. Event titles, attendees, descriptions, and timing are used for context. Tellus connects calendar events to related communication threads and surfaces background context before meetings.

**Project management:** Jira, Linear, and Asana. Task status, assignees, due dates, and project associations are monitored. Overdue tasks and recently-updated issues are incorporated into the context model.

**Documents:** Google Drive and Notion. Recently-opened and recently-edited documents are treated as active context signals. Document content is indexed for search and reference within Tellus context surfaces.

![A professional workspace with multiple tools open simultaneously](https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&q=80)

## The Principle of Least Privilege

Tellus requests the minimum permissions necessary for the feature set, and makes the permission model transparent to users.

For email, Tellus requests read access to messages and threads. It does not request the ability to delete messages, send messages, or modify labels unless you explicitly enable features that require those capabilities.

For calendar, Tellus requests read access to events and attendee information. It does not request the ability to create events, decline invitations, or modify existing events unless you explicitly enable scheduling features.

For project management tools, Tellus requests read access to tasks and project data. It does not request the ability to create tasks, update statuses, or modify projects unless you explicitly enable those write features.

This means the base Tellus installation is entirely read-only. It cannot take any action that changes anything in your tools. This is a deliberate design choice. Trust is established first by demonstrating value through observation and surfacing, before any write capabilities are introduced.

## What Teams Experience at Onboarding

The Tellus onboarding experience for a new team takes roughly 20 minutes.

Each team member connects their existing tools through the OAuth flows. No data migration. No new workflow to learn. No new tool to check each morning. Within minutes of completing setup, Tellus begins monitoring the connected tools and populating the context model.

By end of day one, most users see their first proactive context surface  -  usually the experience of opening an email and seeing the associated Slack thread and relevant tasks appear without having gone to find them.

The adoption curve for Tellus is different from almost every other productivity tool because there is no behavior change required to start seeing value. Value appears within hours of installation, inside the tools people were already using.

## The Tradeoffs of Integration-First

Integration-first has real tradeoffs worth being honest about.

What you gain: no migration cost, no team retraining, complementary value with every existing tool, faster time-to-value. The product gets out of the way and adds value where the work already happens.

What you give up: a deeper data model. A purpose-built platform that owns all your data can build richer relationships between data entities than an integration layer that reads from multiple sources. Some patterns visible in a native platform are invisible when you are observing from outside.

We made this tradeoff deliberately. The enemy of productivity tool adoption is not features  -  it is friction. The best features in the world do not matter if teams do not use the tool. By integrating with existing tools rather than replacing them, Tellus can deliver value to teams who are unwilling to change their core workflows. That is most teams.

## The Integration Landscape for Kenyan Business Tools

Every Kenyan business operates across a set of tools — accounting software, customer management systems, payment processing, communication platforms, and productivity applications. The value of any individual tool is determined partly by how well it connects to the others. A system that keeps accurate customer data but can't share it with the communication platform creates duplication; a platform that processes payments but can't update accounting automatically creates reconciliation work.

Integration — the technical and process work of connecting these tools — is where most of the operational leverage in Kenyan businesses is hidden.

**The integration complexity ladder:** At the bottom, manual data re-entry between systems. Higher up, CSV export-import between systems. Higher still, real-time webhook connections between systems. At the top, bi-directional API integrations with business logic sitting between systems. Most Kenyan businesses operate at the first two rungs; moving up delivers significant productivity gains.

**High-value integration points in Kenyan businesses:**

*M-Pesa to accounting:* When an M-Pesa payment arrives, automatically creating a payment record in QuickBooks or Sage eliminates the manual payment entry that consumes accounting time and introduces errors.

*WhatsApp to CRM:* When a customer sends a WhatsApp message, automatically creating or updating their CRM record ensures that customer communication history is captured without manual data entry.

*Order to inventory:* When an order is confirmed, automatically updating inventory levels prevents overselling and enables accurate stock management without manual counting.

*Delivery to invoicing:* When delivery is confirmed, automatically generating and sending an invoice eliminates the billing delay that affects cash flow for many Kenyan service businesses.

![Integration diagram showing connected Kenyan business tools including M-Pesa, WhatsApp, CRM, and accounting](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&q=80)

## Tellus Workflow Integrations: What Connects and How

Tellus's integration architecture is built around the tools Kenyan professionals and businesses actually use. Rather than a generic integration platform, Tellus provides curated, pre-built integrations with the specific tools in the Kenyan professional ecosystem.

**Communication integrations:** Gmail and Outlook for email monitoring and draft generation. WhatsApp Business API for customer-facing communication. Slack and Microsoft Teams for internal team communication. These integrations give Tellus visibility into the information streams that require professional attention — and the ability to draft responses that the professional reviews and sends.

**Productivity integrations:** Google Workspace (Calendar, Drive, Docs, Sheets) for schedule awareness and document context. Notion and Confluence for knowledge management. Trello, Asana, and Jira for project and task management. These integrations allow Tellus to understand project status, deadlines, and context without requiring the professional to re-explain their work situation in each interaction.

**Business operations integrations:** QuickBooks and Xero for financial context. Salesforce and HubSpot for CRM context. Calendly for scheduling automation. These integrations extend Tellus's context into the business operations dimensions that shape professional priorities.

**Kenya-specific integrations:** M-Pesa payment monitoring and reconciliation. MPESA statements processing. Safaricom business API connections. These Kenya-specific integrations recognise that the Kenyan business context has specific tools and processes that international AI assistants don't address.

## Building Custom Integrations

Not every tool a Kenyan business uses has a pre-built Tellus integration. For tools with public APIs, Tellus provides a webhook and HTTP integration framework that allows custom connections to be built and maintained.

The framework handles authentication, retry logic, error handling, and data transformation — the common infrastructure that custom integrations require. Teams with technical resources can build custom integrations using Tellus's SDK, connecting specialised vertical software, internal systems, and Kenya-specific tools that don't have standardised integration platforms.

For businesses without technical resources to build custom integrations, Tellus's professional services team provides integration development as a service — scoping, building, and documenting custom connections that are then maintained as part of the business's Tellus deployment.

The integration philosophy underlying all of this is consistent: the goal is not to move data into Tellus. It is to give Tellus the context it needs to be genuinely useful in the professional's actual work environment — wherever that data currently lives.

`;
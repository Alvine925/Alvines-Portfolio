export const title = "Zero UI: Why We Removed the Dashboard and Replaced It with a Conversation";
export const date = "2025-05-10";
export const excerpt = "Every dashboard we designed got thrown out. Not because the designs were bad  -  because they were solving the wrong problem. Here's the case for Zero UI and what it means in practice.";
export const tags = ["MyJoyfulDay", "Design", "WhatsApp"];

export const coverImage = "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=1200&q=80";

export const content = `
## Zero UI: Why We Deleted the Dashboard and Never Looked Back

The first version of the MyJoyfulDay dashboard took six weeks to build. It had a sidebar with icons, an event list view, an edit modal, a guest list table with filters, and a metrics panel showing RSVP counts over time. We were proud of it. It looked like a real product. It had hover states and loading skeletons and a responsive layout that worked on mobile.

Fifteen percent of users opened it. Of those, the median session was 47 seconds. The modal edit form was abandoned 71% of the time it was opened.

We rebuilt it. The second version was simpler  -  fewer features, cleaner layout, better mobile optimisation. We spent four weeks on it. Engagement improved marginally. The open rate climbed to 19%. Median session duration: 52 seconds.

We stopped rebuilding it and started asking why people were not using it.

### What the Analytics Showed

The analytics told a clear story, once we were willing to hear it. Users created events through Jitabi  -  the WhatsApp bot  -  and then returned to WhatsApp to share the link and communicate with guests. The dashboard was a detour. It required opening a browser, navigating to a URL, possibly logging in, and then performing actions that could be accomplished by typing a message to Jitabi instead.

The 85% of users who never opened the dashboard were not confused or disengaged. They had found a more efficient path. They were asking Jitabi "how many people are coming to my party?" and getting the answer in two seconds. Opening the dashboard to see the same information took fifteen seconds and required leaving WhatsApp.

The users were smarter than the product team. They had already figured out that the bot was the right interface. We had just not caught up yet.

![Conversational interface design](https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=80)

### The Zero UI Principle

Zero UI, as we practice it, is not the absence of interface. It is the absence of *new* interface. Every product capability is expressed through a conversational state rather than a screen state. If something can be accomplished by sending a message to Jitabi, it should not require opening a dashboard to do it.

Translating product states to conversation states requires a different kind of design thinking. Instead of asking "what should this screen show?" you ask "what message would a user naturally send in this situation?" and then design the system's response to that message.

Here is how the core product states map:

- **Event creation** → Jitabi conversation: "Birthday party for Amara, Saturday, Karen"
- **Checking RSVP count** → Jitabi query: "How many people are coming to my party?"
- **Updating event details** → Jitabi update: "Change the time to 4pm"
- **Sending a reminder** → Jitabi command: "Remind everyone about tomorrow"
- **Viewing the guest list** → Jitabi query: "Who has confirmed for Saturday?"
- **Cancelling an event** → Jitabi command: "Cancel my event this Friday"

Each of these is a natural message a person might send. The system's job is to understand intent and execute correctly. The user's job is to communicate as they normally would.

### The Conversation State Machine

Behind every Jitabi interaction is a finite state machine that tracks where a user is in each active workflow. For event creation, the states are:

**INIT** → The user has sent a message. Intent has been classified as event creation. Extraction begins.

**COLLECTING** → Extraction is running. High-confidence fields are being populated. The system is determining whether clarification is needed.

**CLARIFYING** → One or more fields are below the confidence threshold. A single clarification question has been sent. The system is waiting for response.

**CONFIRMING** → All fields meet the confidence threshold. A confirmation summary has been sent to the user. Waiting for approval or correction.

**PUBLISHED** → The event record has been written, the page has been generated, and the URL has been delivered. The session is complete.

**EDITING** → The user has returned to modify a published event. The system identifies which fields the user wants to change and updates the record.

The state machine is stored in Supabase keyed on the user's phone number plus a session ID. Sessions expire after 24 hours of inactivity but can be resumed if the user returns before expiry. When a session is resumed, Jitabi briefly recaps the current state: "You were creating a birthday party for Amara on Saturday. Want to continue?"

### Quick-Reply Buttons as Conversational Guardrails

One tension in conversational design is between openness and structure. A fully open conversation is expressive but error-prone. A fully structured conversation is reliable but feels robotic. Quick-reply buttons are the balance point.

At key decision moments  -  confirming event details, choosing whether to add a map link, selecting a reminder timing  -  Jitabi presents two or three quick-reply options as WhatsApp buttons. These serve as guardrails. They prevent the most common errors without constraining the user. If the user ignores the buttons and types a free-text response instead, the system handles that too.

The quick-reply rate  -  the percentage of decision moments where users tap a button rather than type  -  is 74%. The 26% who type free responses are disproportionately power users who have learned the system well enough to prefer direct input. Both paths work. The buttons just make the happy path more accessible.

![Dashboard versus conversational design](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80)

### Measuring Conversational Product Quality

Traditional product metrics  -  DAU, session duration, feature adoption  -  do not map cleanly onto conversational products. A long session is not necessarily good (it might mean the user is confused). Feature adoption is meaningless when there are no features to adopt, only conversation flows.

The metrics we use instead:

- **Task completion rate**: What percentage of initiated event creation conversations result in a published event? Currently 92%.
- **Clarification rate**: What percentage of creation attempts require at least one clarification round? Currently 18%.
- **Time-to-published**: Median time from first message to live URL. Currently 34 seconds (including any clarification rounds).
- **Return usage**: What percentage of users who create one event create another within 90 days? Currently 43%.
- **Conversation abandonment point**: At which state do users most commonly abandon? Currently CLARIFYING  -  suggesting we should continue to improve extraction to reduce clarification frequency.

These metrics tell a coherent story about product quality. When extraction improves, the clarification rate drops, time-to-published decreases, and task completion rate increases. The metrics are causally connected in ways that make them genuinely useful for prioritisation.

### What Errors Look Like in a Zero UI Product

In a traditional UI, errors surface as validation messages, error states, and empty states. In a conversational product, errors surface as confusing responses, infinite loops, and user frustration expressed in text.

The most common error pattern is what we call the **understanding gap**: Jitabi responds in a way that does not match what the user intended, and the user sends a corrective message that the system also misunderstands. Without careful monitoring, these gaps can become multi-message spirals that end in abandonment.

We detect understanding gaps by monitoring message sequences where the user sends three or more consecutive messages without the session advancing to a new state. When this pattern is detected, the system sends an escape hatch: "I want to make sure I'm getting this right. Here's what I've captured so far  -  [summary]. Does this look correct, or would you like to start over?"

The escape hatch resolves 68% of detected understanding gaps. The remaining 32% result in abandonment  -  but even those users often return later and complete the creation successfully, once the frustration of the loop has passed.

### The 15% Who Still Want the Dashboard

The dashboard was not deleted. It was demoted. It still exists, it is still maintained, and approximately 15% of users use it regularly. These users tend to be event creators managing complex events  -  weddings, corporate functions, fundraisers  -  where they want a structured view of the guest list, the ability to export data, and a visual overview of event status.

For these users, the dashboard is genuinely the right interface. The goal was never to eliminate choice. It was to eliminate the assumption that the dashboard was the primary interface for all users. For most users, it is not  -  and those users should not have to navigate through a dashboard to access a product that works better as a conversation.

Zero UI is not dogma. It is a default. The default is conversation. For the users who need more, the screen is still there.

## The Dashboard We Built Twice and Abandoned Twice

The first dashboard iteration for MyJoyfulDay was a standard web application: a clean interface where event creators could see all their events, edit details, view RSVPs, manage guest lists, and access vendor recommendations. We built it in six weeks. Usage data from the first month showed that 92% of users who created events never once opened the dashboard.

The second iteration was a redesign addressing the first dashboard's identified problems: too many features visible at once, navigation was confusing, mobile experience was poor. We rebuilt it in four weeks. Usage from the next two months: 87% of event creators still never opened it.

The insight was not that the dashboard was badly designed. The second dashboard was genuinely better than the first. The insight was that the dashboard answered questions users were not asking in the way users were not asking them. Event creators were in WhatsApp. Their guests were in WhatsApp. Their reminder that they had an event coming up was a WhatsApp message from Jitabi. Leaving WhatsApp to check a web dashboard required a context switch that no amount of good UI design could make worthwhile.

The dashboard exists today - it is available at the MyJoyfulDay web app for the 13% of users who access it - but it is no longer the primary interface. The primary interface is Jitabi.

![MyJoyfulDay dashboard usage data showing 87 percent of users exclusively using WhatsApp interface](https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80)

## The Conversation State Machine in Detail

Replacing the dashboard with a conversation required a formal model of what states a Jitabi conversation can be in and what transitions are valid between states. This state machine is the core of Jitabi's conversational architecture.

**INIT:** The conversation begins. Jitabi has received a new message from a phone number that is either new or has no active conversation context. The system parses the incoming message for event intent. If event intent is detected, transition to EXTRACTING. If no event intent is detected, transition to HELP.

**EXTRACTING:** Jitabi runs the LLM extraction on the incoming message and scores confidence across all required event fields. If all fields meet confidence threshold, transition to CONFIRMING. If one or more fields fall below threshold, transition to CLARIFYING.

**CLARIFYING:** Jitabi asks a single question to resolve the lowest-confidence field. The next incoming message is processed in the context of this specific question rather than as a new event creation attempt. After the clarification is processed, return to EXTRACTING with the updated field values.

**CONFIRMING:** Jitabi presents the extracted event summary and asks for confirmation before publishing. Quick replies: "Looks good, publish" and "Let me edit something". If confirmed, transition to PUBLISHING. If edit requested, transition to EDITING.

**PUBLISHING:** Jitabi calls the page generation pipeline. On success, transition to PUBLISHED and send the URL. On failure, retry once and if still failing, notify the user and transition to FAILED.

**PUBLISHED:** The event exists and the URL has been sent. Subsequent messages from this phone number in the next 48 hours are processed as potential edits to the existing event.

**EDITING:** Jitabi accepts updates to the published event. Each update goes through extraction and confirmation before being applied to the live page.

## Measuring Conversational Quality

Replacing a visual interface with a conversation introduces different quality metrics. The standard software metrics - page load time, error rate, time on screen - do not apply to conversational experiences. New metrics were needed.

**Task completion rate:** The percentage of users who initiated an event creation (sent any message to Jitabi with event intent) who ended up with a published event URL. Early versions ran at 71%. Current version runs at 89%. The 18-point improvement came primarily from better extraction models (fewer required clarifications) and better error recovery paths.

**Clarification rate:** The percentage of event creations that required at least one clarification question. Target is under 20%. Current rate is 18%. This number reflects the quality of the extraction model - a good extraction model that confidently identifies fields from natural language rarely needs to ask clarifying questions.

**Time to published:** Median time from first message to event URL delivery. Target is under 90 seconds including human response time to clarification questions. The technical pipeline time is consistently under 10 seconds. The 90-second metric includes the time users take to respond to clarification questions, which is outside Jitabi's control but reflects the overall experience.

![Jitabi conversational interface metrics dashboard showing task completion and clarification rates](https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&q=80)

## The 15 Percent Who Use the Dashboard

The users who regularly access the MyJoyfulDay web dashboard tend to have specific characteristics: they are planning more complex events (multi-day events, events with paid tickets, events coordinating multiple vendors), they have larger guest lists where the guest management tools are genuinely valuable, and they are often repeat users who have created five or more events and have learned the full platform.

This segment generates a disproportionate share of revenue - they are the users most likely to have events with vendor needs, most likely to use premium features, and most likely to refer other serious event planners. The dashboard serves them well, and maintaining it for this segment is worth the ongoing engineering cost.

The product principle this illustrates: Zero UI does not mean no UI for anyone. It means making the WhatsApp interface so capable that the web dashboard is optional rather than required. Users who want the additional control the dashboard provides can access it. Users who never want to leave WhatsApp never have to.

`;
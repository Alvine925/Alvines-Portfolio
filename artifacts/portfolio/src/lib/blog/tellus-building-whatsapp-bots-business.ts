export const coverImage = "https://images.unsplash.com/photo-1617791160588-241658c0f566?w=1200&q=80";

export const content = `## Building WhatsApp Bots for Business: The Complete Technical and Strategic Guide

WhatsApp bots are the most impactful technology investment most Kenyan businesses can make. The combination of WhatsApp's near-universal adoption in Kenya, the 24/7 availability that bots enable, and the automation of the repetitive communication work that consumes business operations makes WhatsApp bot implementation one of the clearest ROI cases in business technology.

This guide covers both the strategic decisions (when does a WhatsApp bot make sense, what should it do, how do you design good conversation flows) and the technical implementation (the different approaches to building, the tools and platforms, the infrastructure considerations). Whether you're a business owner evaluating the investment or a developer implementing it, this guide provides what you need.

![WhatsApp chatbot interface on smartphone screen](https://images.unsplash.com/photo-1617791160588-241658c0f566?w=1200&q=80)

## Strategic Decisions: Before You Build

**Is your business ready for a WhatsApp bot?**

A WhatsApp bot is appropriate when:
- You receive more than 30 repetitive WhatsApp inquiries per day
- A significant portion of those inquiries have predictable, consistent answers
- Your business has either a WhatsApp Business App number or budget for the WhatsApp Business API
- You have someone (or a partner like Tellus) who can implement and maintain the bot

A WhatsApp bot is premature when:
- Your inquiry volume is low (manual handling is adequate)
- Your customer interactions are highly varied and require constant human judgment
- Your business doesn't have clear FAQ answers or defined processes for the bot to follow

**What should the bot do?**

This is the most important strategic decision in bot design. A bot that tries to do everything does everything mediocrely. A bot designed around the 5–7 things your customers most commonly ask delivers excellent results on those cases.

To identify what your bot should do, analyse your last 200 WhatsApp messages:
- What categories of inquiry are most common?
- Which of these have consistent, factual answers?
- Which require human judgment or sensitive handling?
- What percentage of total volume would automation address?

The categories that consistently top Kenyan businesses' inquiry lists:
1. Pricing and product information
2. Business hours and location
3. Order status
4. Payment confirmation
5. Appointment/booking
6. Delivery information
7. Return/refund initiation

**Defining the escalation policy:**

Your bot design must include explicit escalation logic — when does the bot hand off to a human? This is not just a technical decision but a customer experience decision.

Design your escalation triggers:
- After N rounds of conversation without resolution
- When the customer explicitly asks for a human
- For specific inquiry categories (complaints, sensitive matters)
- When detected emotion suggests frustration or urgency
- After a failed payment or a disputed transaction

## Three Approaches to Building WhatsApp Bots

**Approach 1: WhatsApp Business App with Quick Replies (No Code)**

The WhatsApp Business App (the free mobile app) allows you to set up:
- Away messages (automatic reply when you're not available)
- Greeting messages (automatic reply to new contacts)
- Quick replies (saved responses triggered by keyboard shortcuts)

This is not a bot in the full sense — you still need to manually respond to most messages. But it provides basic automation at zero cost.

Best for: Very small businesses with low inquiry volumes wanting basic automation.

**Approach 2: WhatsApp Bot Platforms (Low Code / No Code)**

Several platforms provide bot-building tools on top of the WhatsApp Business API:

*WATI:* Kenyan-accessible platform with visual chatbot builder. Plan from ~$49/month. Good for businesses without developers who need proper bot functionality.

*Freshchat:* Customer messaging platform with WhatsApp integration. More expensive but includes full CRM and team inbox capability.

*Intercom:* Enterprise-grade customer communication; WhatsApp integration available. Expensive; appropriate for companies with significant customer service budgets.

*ChatFuel:* Primarily a Facebook Messenger bot builder with WhatsApp capabilities. Accessible pricing.

*Manychat:* Popular with digital marketers; WhatsApp integration maturing. Good for sales-focused bot flows.

These platforms provide visual interfaces for building conversation flows, managing contacts, and monitoring performance — without writing code.

Best for: SMEs that want full bot capability without a developer.

**Approach 3: Custom Development (Full Code)**

Building a WhatsApp bot directly on the WhatsApp Business API through custom development provides maximum flexibility:
- Fully customised conversation flows
- Deep integration with any business system
- Custom AI integration (OpenAI, Claude, Gemini)
- M-Pesa payment integration within the conversation
- Custom data handling and privacy controls

This approach requires developer investment but produces bots that are genuinely differentiated — not limited by what a generic platform supports.

This is the approach Tellus takes for client implementations. The result is a bot that behaves exactly as the business needs, integrates deeply with business systems, and can handle complex flows that platform limitations don't allow.

Best for: Businesses with meaningful bot investment and specific requirements that platforms can't satisfy.

## Designing Good Conversation Flows

Conversation design is where most WhatsApp bots fail. Technical implementation can be perfect; poor conversation design produces a bot that frustrates rather than helps.

**Core conversation design principles:**

*Short messages:* WhatsApp is a mobile-first medium. People read on phones, often while doing other things. Messages longer than 150 words are too long. Break long answers into multiple messages with a brief pause between them.

*One question at a time:* Never ask multiple questions in a single message. "What is your name, phone number, and order reference?" is three questions that will be answered incompletely or confusingly. Ask one, receive the answer, then ask the next.

*Natural language, not bot language:* "Please select option 1, 2, or 3 from the following menu" is bot language. "To check your order, just send your order number" is natural language. Design messages that sound like a helpful person, not a phone tree.

*Confirmation before action:* Before taking any action on the customer's behalf (placing an order, initiating a refund, booking an appointment), show them a summary and ask for confirmation. "Just to confirm: you want to book the 2pm slot on Thursday, July 17. Reply YES to confirm or NO to change." This prevents errors and builds trust.

*Graceful failure:* When the bot doesn't understand a message, the response matters enormously. "I didn't understand that. Here's what I can help with: [short list]" is far better than "Sorry, I don't understand" with no forward path.

*Early exit to human:* Give customers an easy way to reach a human at any point. "At any time, you can type HUMAN to speak with our team directly."

![Developer building chatbot flow on whiteboard](https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&q=80)

## Technical Architecture for a Custom WhatsApp Bot

For developers building custom WhatsApp bots on the Daraja + WhatsApp Business API stack common in Kenya:

**The core components:**

*Webhook handler:* Receives incoming WhatsApp messages from Meta's servers. Validates the request, parses the message content, and routes to the appropriate handler.

*Conversation state management:* Tracks the state of each user's conversation — what stage of the flow they're in, what data has been collected. This is typically stored in Redis (for speed) or a database.

*Message router:* Determines which handler should process the message based on the current conversation state and the message content.

*Intent classification:* For AI-powered bots, classifies the user's message intent. For rule-based bots, keyword matching or menu selection handles routing.

*Response generator:* Produces the appropriate response based on the handler's output and the user's context.

*Business logic layer:* The actual business logic — checking inventory, retrieving order status, initiating M-Pesa payments, booking appointments.

*WhatsApp API client:* Sends messages back to the user through the WhatsApp Business API.

**Basic Node.js webhook handler structure:**

The webhook receives messages from WhatsApp, verifies the request, extracts the message data, and calls the appropriate conversation handler. Each handler returns the response to send back to the user.

State management ensures that a user who started a multi-step flow (like an order process) is returned to the right step when they send their next message, even if time has passed between messages.

## AI Integration: Making Your Bot Smarter

Rule-based bots handle defined flows well but fail gracefully only when they're well-designed. AI-powered bots — using language models like GPT-4 or Claude — can handle natural language inputs that don't fit predefined patterns.

The architecture for AI-powered WhatsApp bots:

1. Incoming message → AI classifies intent and extracts entities (product name, quantity, date, etc.)
2. Intent and entities → route to appropriate handler (order, inquiry, booking, etc.)
3. Handler fetches relevant data and formats a prompt
4. AI generates contextually appropriate response
5. Response sent back to user via WhatsApp API

The AI layer handles the unpredictability of human language; the handler layer ensures business logic is correct; the WhatsApp API layer handles delivery.

For most Kenyan business use cases, the AI doesn't need to be fully autonomous — it can classify intent and extract key information, leaving the business logic and response generation to structured handlers. This provides the language flexibility of AI without the hallucination risks of a fully autonomous AI agent.

## Tellus's WhatsApp Bot Building Approach

Tellus builds WhatsApp bots for Kenyan businesses using custom development on the WhatsApp Business API. Our approach:

**Discovery:** We spend time understanding your business — your products, your customers, your inquiry patterns, your operational systems. The bot design emerges from this understanding, not from a generic template.

**Conversation design first:** Before any code, we design and iterate on conversation flows. We show you the conversation paths visually so you can identify gaps, errors, and improvements before implementation.

**Integration with your systems:** Your bot connects to your actual business data — inventory, order records, customer database, booking system. Responses reflect real business state, not cached or approximate information.

**M-Pesa integration:** For Kenyan businesses where WhatsApp interactions lead to transactions, we integrate M-Pesa payments directly into the conversation flow.

**Testing with real conversations:** Before launch, we test the bot with real business scenarios — common inquiries, edge cases, escalation situations — and iterate based on what the testing reveals.

**Ongoing improvement:** Bot performance improves with use. We monitor the conversations your bot handles, identify where customers are falling through to humans unnecessarily, and update the conversation design accordingly.

Building a WhatsApp bot is one of the highest-ROI investments available to Kenyan businesses with meaningful WhatsApp inquiry volume. Tellus makes the implementation straightforward so that business owners can focus on defining what they need rather than figuring out how to build it.`;

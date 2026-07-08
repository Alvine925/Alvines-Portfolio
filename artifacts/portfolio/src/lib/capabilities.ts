export interface Capability {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  proof: string;
  whatYouGet: string[];
  whoIsThisFor: string;
  tools: string[];
  // Detail page fields
  overview: string;
  process: { step: string; title: string; detail: string }[];
  deepDive: { heading: string; body: string }[];
  outcomes: string[];
}

export const capabilities: Capability[] = [
  {
    slug: "whatsapp-ai-bot-development",
    number: "01",
    title: "WhatsApp AI Bot Development",
    tagline: "Turn WhatsApp into a full product interface.",
    description:
      "Most businesses treat WhatsApp like a notification channel. I build it as a complete interface — forms, dashboards, sign-up flows, all replaced by a conversation. I've done this at scale with Jitabi, a bot that created 50K+ events and reached 1M+ guests without a single user downloading an app.",
    proof: "Jitabi (MyJoyfulDay) — 50K+ events created, 1M+ guests reached.",
    whatYouGet: [
      "Custom conversational flows designed around your actual users",
      "Meta WhatsApp Cloud API integration and verification",
      "NLP and LLM-powered understanding of natural language inputs",
      "Fallback handling, retry logic, and edge-case recovery",
      "Real-time pipelines that trigger backend actions from a message",
      "Ongoing bot training and flow iteration",
    ],
    whoIsThisFor:
      "Businesses whose customers are already on WhatsApp — which in Kenya is almost everyone. If you're losing leads because your funnel requires a download or a form, this solves it.",
    tools: ["Meta WhatsApp Cloud API", "OpenAI API", "n8n", "Node.js", "Supabase"],
    overview:
      "WhatsApp is Kenya's operating system for business. With over 97% smartphone penetration on WhatsApp in Kenya's urban markets, your customers are already there — the question is whether your business is actually present in a useful way, or just sending broadcast messages into the void. I build WhatsApp bots that function as complete product interfaces: sign-up flows, booking systems, dashboards, event creation tools, and transactional pipelines — all driven entirely through conversation, without your users needing to visit a website, download an app, or fill in a form.",
    process: [
      {
        step: "01",
        title: "Flow mapping & user journey design",
        detail:
          "Before a single line of code is written, I map every conversational state your bot needs to handle. This includes happy paths, edge cases, fallback states, and the handoff points where a human needs to take over. Most WhatsApp bots fail because the conversation design is an afterthought. I make it the foundation.",
      },
      {
        step: "02",
        title: "Meta Business API setup & verification",
        detail:
          "Getting a WhatsApp Business API account approved by Meta involves business verification, phone number registration, and message template approval — a process that trips up most developers unfamiliar with Meta's compliance requirements. I've navigated this process repeatedly and handle it end-to-end, including template copywriting optimised for approval.",
      },
      {
        step: "03",
        title: "Backend integration & pipeline build",
        detail:
          "The bot is only as useful as the data it connects to. I wire every conversational action to a backend event — database writes, CRM updates, payment triggers, email notifications, spreadsheet logs. When a user confirms a booking through WhatsApp, the confirmation, the calendar entry, the payment request, and the CRM update all happen automatically.",
      },
      {
        step: "04",
        title: "LLM integration for natural language",
        detail:
          "Rule-based bots break the moment a user phrases something unexpected. I layer GPT-4 or Claude into the bot's intent detection so it can understand what a user means even when they don't use the expected phrasing. This makes the difference between a bot users trust and one they abandon after the first confusing response.",
      },
      {
        step: "05",
        title: "Testing, iteration, and launch",
        detail:
          "Every conversational flow is tested against real user behaviour before launch. I run the bot through hundreds of input variations, fix the edge cases, and iterate on the phrasing until the experience feels natural. Post-launch, I monitor drop-off points and continue iterating based on real usage data.",
      },
    ],
    deepDive: [
      {
        heading: "Why WhatsApp bots fail — and how mine don't",
        body:
          "The most common failure mode is a bot that works perfectly in the demo and falls apart in production. This happens because the demo uses scripted inputs. Real users are unpredictable — they typo, they skip steps, they send voice notes, they go silent for three days and come back expecting the conversation to resume. I build bots with explicit state management that persists across sessions, robust fallback chains that recover from unexpected inputs, and human handoff logic that escalates gracefully when the bot genuinely can't help. The result is a bot that your users trust because it handles their actual behaviour, not an idealised version of it.",
      },
      {
        heading: "Building for Kenya's WhatsApp culture",
        body:
          "Kenyan WhatsApp users interact differently from the use-cases most WhatsApp bot tutorials are written for. Voice notes are common. Mixed-language inputs (Swahili, Sheng, English in the same message) are normal. Users expect to negotiate, to ask follow-up questions, to get a human on the line quickly if the bot can't help. I design for this context explicitly — with Swahili language support, voice note transcription via Whisper API, and escalation paths that feel culturally appropriate rather than frustrating.",
      },
      {
        heading: "The economics of replacing a form with a conversation",
        body:
          "Conversion rate is the metric that matters most for acquisition-focused bots. A WhatsApp conversation has a response rate 5-8x higher than a landing page form in the Kenyan market — because it meets users where they already are. For Jitabi, replacing the event creation form with a WhatsApp conversation increased completion rate from under 20% (typical for multi-step web forms) to over 80%. The same logic applies to lead capture, onboarding, surveys, and booking flows. If your current funnel requires a click out of WhatsApp, you're losing the majority of your potential conversions.",
      },
    ],
    outcomes: [
      "A production-ready WhatsApp bot approved and live on Meta's platform",
      "Complete conversational flows covering every user journey you need",
      "Backend integrations connecting the bot to your actual business systems",
      "Natural language understanding that handles real user inputs, not just scripted ones",
      "Documentation and training so your team can manage the bot post-launch",
      "Post-launch monitoring and iteration support",
    ],
  },
  {
    slug: "workflow-automation",
    number: "02",
    title: "Workflow Automation",
    tagline: "Eliminate the work your team does by hand every day.",
    description:
      "I've run operations at Kisumu Hub while building products in parallel — the only way that works is ruthless automation. I've automated member onboarding, event coordination, reporting, CRM tagging, and more. If you can describe a repetitive process, I can automate it.",
    proof: "Kisumu Hub: full member onboarding, event logistics, and weekly reporting — all automated, zero manual steps.",
    whatYouGet: [
      "End-to-end workflow mapping and documentation",
      "n8n and Make (Integromat) automation builds",
      "OpenAI API integration into existing business processes",
      "CRM, email, WhatsApp, and calendar connections",
      "Trigger-based pipelines that run without human input",
      "Monitoring and error-alert setup",
    ],
    whoIsThisFor:
      "Teams doing the same tasks manually every week. Founders spending hours on admin instead of growth. Operations managers who know something is automatable but don't know how to start.",
    tools: ["n8n", "Make / Integromat", "OpenAI API", "Zapier", "Airtable", "Google Workspace"],
    overview:
      "The most expensive thing in a growing business is not software — it is the time your best people spend on tasks that a well-designed system could do automatically. I map your operations, identify every repetitive step, and replace manual work with trigger-based automations that run without human input. The automations I build aren't fragile Zapier chains that break on the first edge case — they're robust pipelines with error handling, retry logic, and monitoring that your team can actually rely on.",
    process: [
      {
        step: "01",
        title: "Operations audit",
        detail:
          "I start by documenting every manual process your team runs regularly. Not what they think they run, but what actually happens — including the workarounds, the exceptions, and the tasks that live in someone's head but aren't written down anywhere. This audit typically surfaces 30-50% more automation opportunity than clients initially expect.",
      },
      {
        step: "02",
        title: "Priority mapping",
        detail:
          "Not every process should be automated — some are complex enough that automation introduces more risk than it removes. I score each candidate process by frequency, time cost, error rate, and automation complexity, then build a prioritised roadmap that delivers the highest ROI first.",
      },
      {
        step: "03",
        title: "Tool selection and architecture",
        detail:
          "I choose automation tools based on your specific stack and constraints — n8n for complex multi-step workflows with custom logic, Make for visual integrations between SaaS tools, Zapier where simplicity matters more than power. I also build custom webhook receivers and API integrations where off-the-shelf tools can't handle the complexity.",
      },
      {
        step: "04",
        title: "Build, test, and edge-case hunt",
        detail:
          "Every automation is built against real data, tested with real edge cases, and validated by the team members who previously did the task manually. The people who know the process best are also the best at finding the cases an automation will miss — I involve them in testing deliberately.",
      },
      {
        step: "05",
        title: "Monitoring and handover",
        detail:
          "An automation your team doesn't trust is one they'll route around. I set up monitoring dashboards and error alerts so failures surface immediately rather than silently corrupting data, document every workflow thoroughly, and train the responsible team members on how to maintain and modify automations as business needs change.",
      },
    ],
    deepDive: [
      {
        heading: "The hidden cost of manual operations",
        body:
          "Manual operations don't just consume time — they create compounding costs that most businesses dramatically underestimate. Every manual step is a potential error point: a spreadsheet entry in the wrong row, a WhatsApp message sent to the wrong group, a follow-up email that didn't go out because someone forgot. These errors consume resolution time, damage customer relationships, and — in the case of financial processes — create liability. Beyond errors, manual operations cap your growth: you can only process as many orders, onboard as many customers, or run as many events as your team has hours for. Automation removes that ceiling.",
      },
      {
        heading: "What I've automated at Kisumu Hub",
        body:
          "At Kisumu Hub, I ran a coworking space, events programme, and training business with a lean team. The only way to keep quality high across all three while also building digital products was to automate everything that didn't require human judgment. Member onboarding went from a 45-minute manual process to a 3-minute automated flow triggered by payment confirmation. Event registration, reminder sequences, and post-event feedback collection were entirely automated. Weekly financial reports compiled themselves and landed in the right people's inboxes without anyone having to build them. This is the operating model I replicate for clients.",
      },
      {
        heading: "AI-augmented automation",
        body:
          "The most powerful automation workflows now incorporate LLMs for tasks that previously required human judgment — categorising incoming customer messages, drafting response suggestions, extracting structured data from unstructured documents, and routing support tickets to the right team. I integrate OpenAI's API into automation pipelines to handle these semi-structured tasks, creating workflows that handle a far wider range of real-world inputs than traditional rule-based automations can manage.",
      },
    ],
    outcomes: [
      "A documented map of every automatable process in your business",
      "Production-ready automations covering your highest-priority workflows",
      "Error handling and monitoring so failures surface immediately",
      "Time recovered per week, quantified and tracked",
      "Team training and documentation for sustainable long-term maintenance",
      "A roadmap for the next phase of automation as your business grows",
    ],
  },
  {
    slug: "web-platform-development",
    number: "03",
    title: "Web & Platform Development",
    tagline: "Sites that work, not just sites that look good.",
    description:
      "I build full web products — event platforms, job boards, AI-powered tools, e-commerce stores. Not templates. Not page builders that fall apart under real traffic. Platforms with real architecture, real integrations, and real users. Every project ships with domain, hosting, and payment setup included.",
    proof: "5 shipped products across event tech, job platforms, AI communications, and e-commerce.",
    whatYouGet: [
      "Full-stack web applications from brief to deployment",
      "React and Next.js builds for performance-critical products",
      "WordPress and Wix sites for content-driven or marketing pages",
      "API design and backend service integration",
      "Domain, hosting, SSL, and deployment handled",
      "Mobile-first design optimized for Kenyan network conditions",
    ],
    whoIsThisFor:
      "Businesses with no online presence, or businesses whose current site isn't converting. Founders who need a real product built, not a landing page dressed up as one.",
    tools: ["React", "Next.js", "WordPress", "Wix", "Tailwind CSS", "Supabase", "Vercel"],
    overview:
      "Every digital product I've built has gone through the same crucible: real users, real traffic, real edge cases. I don't build demos. I build platforms that handle the messy reality of production — variable network conditions, unexpected user behaviour, payment failures, and scale. Whether you need a polished marketing site that converts, a complex platform with user accounts and data pipelines, or something in between, I bring the same approach: understand the problem first, then build the right solution for it.",
    process: [
      {
        step: "01",
        title: "Discovery and scoping",
        detail:
          "I spend significant time upfront understanding your business context, your users, and what success actually looks like. Most briefs I receive describe features. I work back from outcomes — who is this for, what do they need to accomplish, and what would make them choose this over not using it at all.",
      },
      {
        step: "02",
        title: "Technical architecture decision",
        detail:
          "The choice between React/Next.js, WordPress, or a custom stack isn't a preference — it's a business decision based on your content volume, update frequency, performance requirements, and long-term maintenance needs. I make this choice explicitly and explain the tradeoffs before writing a line of code.",
      },
      {
        step: "03",
        title: "Design and UX",
        detail:
          "I work with a mobile-first, performance-conscious design approach optimised for Kenyan network conditions. A site that loads in 1.2 seconds on fibre and 8 seconds on a Safaricom 3G connection is effectively unusable for half your audience. I test on real devices and real connections, not just a Chrome DevTools throttle.",
      },
      {
        step: "04",
        title: "Build and integration",
        detail:
          "Development happens in iterative cycles with regular demos so you can see and respond to real progress. Every external integration — payments, email, CRM, WhatsApp, analytics — is implemented and tested against real APIs, not mocked. By the time we reach deployment, the product has been through real conditions.",
      },
      {
        step: "05",
        title: "Launch and handover",
        detail:
          "I handle domain configuration, hosting setup, SSL certificates, and deployment pipelines. I also provide training and documentation so your team can manage content and handle routine operations without needing me for every change.",
      },
    ],
    deepDive: [
      {
        heading: "Building for Kenyan network realities",
        body:
          "A web product built for Kenya needs to perform on Safaricom 4G in Westlands and on a slow connection in Kisumu equally well. This means aggressive image optimisation, lazy loading, minimal JavaScript bundles, and server-side rendering for critical content. It also means testing on real Android devices — because your users aren't on MacBooks with a fibre connection — and optimising for the browsers that actually dominate Kenyan mobile usage.",
      },
      {
        heading: "When to build vs when to buy",
        body:
          "Not every business need requires custom development. A content-heavy site with infrequent updates is better served by a well-configured WordPress build than a custom React app that requires a developer to change the homepage. Conversely, a platform with complex user permissions, real-time data, and payment flows needs proper engineering — not a no-code tool stretched beyond its design limits. I make these calls honestly, which sometimes means I recommend a simpler (and cheaper) solution than you initially requested.",
      },
      {
        heading: "Post-launch is where most sites fail",
        body:
          "The work doesn't end at launch. The majority of web projects I've taken over from other developers failed post-launch because there was no handover, no documentation, no performance monitoring, and no plan for what happens when something breaks at 11pm on a Saturday. Every project I deliver includes monitoring setup, documented runbooks, and a defined support arrangement so your business isn't held hostage by the availability of any single person.",
      },
    ],
    outcomes: [
      "A production-ready website or platform deployed to your domain",
      "Mobile-optimised performance tested on real Kenyan network conditions",
      "All integrations (payments, email, CRM, analytics) live and tested",
      "Admin training and content management documentation",
      "Monitoring and alerting so you know about problems before your users do",
      "A clear maintenance and support arrangement",
    ],
  },
  {
    slug: "ecommerce-kenyan-payments",
    number: "04",
    title: "E-commerce & Kenyan Payments",
    tagline: "Sell online, the way Kenyans actually pay.",
    description:
      "Most e-commerce setups built outside Kenya get payments wrong. M-Pesa has to be the primary flow, not an afterthought. I've built full e-commerce experiences for Kenyan retailers: product catalogs, smart filtering, combo deals, M-Pesa and card integration, all optimized for mobile-first shoppers on variable connections.",
    proof: "Autoshine — full e-commerce storefront with M-Pesa integration, live product catalog, and combo deal engine.",
    whatYouGet: [
      "WooCommerce and custom e-commerce builds",
      "M-Pesa STK Push and Daraja API integration",
      "Card payment gateway setup (Stripe, Flutterwave, Paystack)",
      "Product catalog with filtering, search, and categories",
      "Inventory management and order flow configuration",
      "Performance optimization for 3G users",
    ],
    whoIsThisFor:
      "Kenyan retailers with offline sales who want to sell online. Businesses losing customers because their checkout doesn't support M-Pesa. Anyone who needs a Kenyan-market e-commerce setup that actually converts.",
    tools: ["WooCommerce", "M-Pesa Daraja API", "Flutterwave", "WordPress", "Stripe"],
    overview:
      "E-commerce in Kenya has a distinct set of requirements that most international platforms and most Kenyan developers trained on international tutorials get wrong. M-Pesa must be the primary payment method, not an add-on. The checkout must work on a KES 15,000 Android phone on a Safaricom 4G connection. The product experience must handle the specific purchasing behaviours of Kenyan consumers — price sensitivity, trust signals, and the expectation of negotiation. I've built e-commerce for the Kenyan market specifically, and the difference shows in the conversion numbers.",
    process: [
      {
        step: "01",
        title: "Catalogue and category architecture",
        detail:
          "How you organise your products determines whether customers find what they want quickly or leave in frustration. I design catalogue architecture based on how your customers think about your products — not how your internal team categorises them — and implement filtering and search that surfaces the right products on the first attempt.",
      },
      {
        step: "02",
        title: "M-Pesa integration via Daraja API",
        detail:
          "M-Pesa STK Push (Lipa Na M-Pesa) is the gold standard for Kenyan e-commerce checkout — the payment request goes directly to the customer's phone, confirmation is automatic, and the order is fulfilled without any manual payment verification. I implement the full Daraja API flow including callback handling, order status updates, payment reconciliation, and the edge cases (timeout handling, duplicate payment prevention) that most implementations miss.",
      },
      {
        step: "03",
        title: "Card and alternative payment setup",
        detail:
          "Beyond M-Pesa, Kenyan e-commerce needs to support Visa/Mastercard (for corporate buyers and diaspora customers), Airtel Money, and buy-now-pay-later options where relevant. I implement Flutterwave or Paystack for card payments, with full 3DS2 authentication and fraud prevention configured for the Kenyan market.",
      },
      {
        step: "04",
        title: "Order management and fulfilment flow",
        detail:
          "A payment is just the beginning. The order management system needs to handle inventory updates, picking lists, delivery tracking, and customer communication automatically. I connect payment confirmation to inventory deduction, generate automated fulfilment instructions, and set up customer SMS/WhatsApp notifications at every stage of the order journey.",
      },
      {
        step: "05",
        title: "Performance optimisation and launch",
        detail:
          "An e-commerce site that loads slowly costs sales directly. I optimise for Core Web Vitals, compress every image, implement lazy loading throughout, and test checkout completion on throttled mobile connections before any product goes live.",
      },
    ],
    deepDive: [
      {
        heading: "The M-Pesa checkout experience",
        body:
          "The STK Push flow — where a payment prompt appears directly on the customer's phone the moment they confirm their order — has a dramatically higher completion rate than any alternative. Customers trust it because it's the same M-Pesa interface they use every day. The implementation challenge is the asynchronous callback: you need to hold the order in a pending state while waiting for Safaricom's callback confirming payment, handle timeouts gracefully if the customer doesn't respond, and deduplicate callbacks if Safaricom delivers the same notification more than once. I've built this flow multiple times and know exactly where the edge cases hide.",
      },
      {
        heading: "Trust signals for Kenyan consumers",
        body:
          "Online shopping trust in Kenya is earned differently than in more mature markets. Customers want to see: a real phone number they can call, a physical location even if you also sell online, M-Pesa payment confirmation that matches the Paybill number on the website, and reviews from people who could plausibly be Kenyan. I design e-commerce experiences with these trust signals built into every stage of the purchase journey — not bolted on as an afterthought.",
      },
      {
        heading: "Combo deals and upsell mechanics",
        body:
          "Kenyan retail culture is deeply comfortable with bundles, combos, and deals. A well-implemented combo deal engine — one that presents the right complementary products at the right stage of the purchase journey — consistently lifts average order value. For Autoshine, the combo engine that suggested complementary car care products at checkout increased AOV by over 30%. I implement these mechanics based on your actual product relationships, not generic 'customers also bought' algorithms that surface irrelevant recommendations.",
      },
    ],
    outcomes: [
      "A fully functional e-commerce store with M-Pesa as the primary payment flow",
      "Card payment gateway live and tested with real Kenyan bank cards",
      "Automated order management from payment confirmation to fulfilment instructions",
      "Customer communication via WhatsApp/SMS at every stage of the order journey",
      "Performance optimised for mobile-first shoppers on variable connections",
      "Sales analytics and inventory reporting configured and working",
    ],
  },
  {
    slug: "ai-llm-integration",
    number: "05",
    title: "AI & LLM Integration",
    tagline: "Practical AI that connects to your real business operations.",
    description:
      "I don't build AI demos. I build AI pipelines that run in production: CV matching engines, cover letter generators, conversational assistants, content extraction layers. The gap between an AI proof-of-concept and something your users actually trust is engineering discipline and Kenyan market context. I bring both.",
    proof: "TellusJobs — AI-powered CV matching and auto cover letter generation for the Kenyan job market.",
    whatYouGet: [
      "OpenAI API integration (GPT-4, embeddings, function calling)",
      "Prompt engineering and system prompt design",
      "LLM-powered document processing and extraction",
      "Semantic search and matching pipelines",
      "AI output validation and confidence handling",
      "Context-aware conversational flows",
    ],
    whoIsThisFor:
      "Businesses who've tried AI tools and found them too generic. Founders who want to add intelligence to an existing product without starting from scratch. Anyone who needs AI that understands Kenyan context.",
    tools: ["OpenAI API", "LangChain", "Supabase pgvector", "n8n", "Python", "Node.js"],
    overview:
      "Every business is experimenting with AI. Most of those experiments are either ChatGPT wrappers that could be replaced by a direct ChatGPT subscription, or proof-of-concepts that work beautifully in demos and collapse when exposed to real user data. I build the third thing: AI integrations that are genuinely connected to your business logic, trained on your context, and engineered to handle the variance of real-world inputs. The difference is prompt engineering discipline, retrieval-augmented generation, output validation, and an understanding of what Kenyan users actually need from an AI system.",
    process: [
      {
        step: "01",
        title: "Use case qualification",
        detail:
          "Not every business problem is well-suited for LLM integration. I start by assessing whether the problem you're trying to solve is genuinely an AI problem — or whether a well-designed rule system, a better search implementation, or a simpler data pipeline would serve you better. This honesty is what distinguishes good AI integration from AI-washing.",
      },
      {
        step: "02",
        title: "Data and context architecture",
        detail:
          "An LLM is only as useful as the context it has access to. For most business applications, this means implementing a retrieval system — embedding your business documents, customer data, product information, and historical context into a vector database that the model can query at inference time. I design this retrieval architecture to surface the right context for each query without overwhelming the model's context window.",
      },
      {
        step: "03",
        title: "Prompt engineering and system design",
        detail:
          "System prompts determine how an LLM behaves — its persona, its constraints, its output format, and its handling of edge cases. I treat prompt engineering with the same rigour as software engineering: version controlled, tested against a suite of adversarial inputs, and iterated based on real failure cases. A well-engineered prompt is the difference between an AI that's occasionally useful and one your users rely on.",
      },
      {
        step: "04",
        title: "Output validation and safety layers",
        detail:
          "LLMs hallucinate. Any production AI integration needs validation layers that catch outputs that are factually wrong, out-of-scope, or potentially harmful before they reach users. I implement structured output parsing, confidence scoring, and content filtering appropriate to your use case and user base.",
      },
      {
        step: "05",
        title: "Integration, testing, and iteration",
        detail:
          "The AI component gets integrated into your existing product or workflow, tested against real user inputs (not synthetic examples), and iterated until the quality bar is met. Post-launch, I monitor output quality and refine prompts and retrieval as edge cases surface in production.",
      },
    ],
    deepDive: [
      {
        heading: "Building AI for Kenyan context",
        body:
          "General-purpose AI models are trained predominantly on English-language, Western-context data. This creates real limitations for Kenyan applications: they don't understand Kenyan regulatory frameworks, they misspell Kenyan place names, they produce salary benchmarks that are off by an order of magnitude, and they don't understand Swahili idioms or code-switching. For TellusJobs, I built a CV matching system that understands Kenyan educational institutions, Kenyan job market norms, and Kenyan industry contexts — because an AI that doesn't know the difference between a Strathmore MBA and a Harvard MBA in the Kenyan market isn't actually useful for Kenyan hiring.",
      },
      {
        heading: "The semantic search advantage",
        body:
          "Traditional search fails when users don't know the exact keywords. Semantic search — using text embeddings to match meaning rather than keywords — allows a user to search for 'a job that involves working with rural communities' and find positions tagged with 'community development', 'grassroots engagement', and 'field officer' even without those exact terms in the query. I've implemented semantic search for job matching, document retrieval, and product discovery, and the improvement in user satisfaction is immediately measurable.",
      },
      {
        heading: "Function calling and agentic workflows",
        body:
          "The most powerful AI integrations go beyond question-and-answer — they allow the model to take actions on your behalf. OpenAI's function calling allows an LLM to query your database, update a CRM record, send a WhatsApp message, or trigger a workflow based on what the user needs. I design agentic workflows that give the model access to the tools it needs to be genuinely useful, with appropriate guardrails to ensure it only takes actions it has permission to take.",
      },
    ],
    outcomes: [
      "A production-ready AI integration connected to your real business data",
      "Prompt engineering suite version-controlled and documented",
      "Output validation and safety layers appropriate to your use case",
      "Performance monitoring and quality tracking post-launch",
      "Ongoing prompt refinement as real-world edge cases surface",
      "A team capable of understanding and maintaining the integration",
    ],
  },
  {
    slug: "business-operations-systems",
    number: "06",
    title: "Business Operations & Systems Design",
    tagline: "The strategic layer behind every tool I build.",
    description:
      "Two years running Kisumu Hub while building products taught me something most tech people miss: the bottleneck is rarely the code. It's the process the code is supposed to serve. I map operations before I build anything, so the systems I build actually solve the right problems.",
    proof: "Kisumu Hub: managed full coworking operations, member lifecycle, events, and finance while building 5 digital products in parallel.",
    whatYouGet: [
      "Operations audit to find what's actually causing bottlenecks",
      "Process documentation and workflow design",
      "Tool selection advice (build vs buy vs automate)",
      "KPI identification and reporting setup",
      "Systems that scale without proportional headcount",
      "Ongoing advisory for founders who want a thinking partner",
    ],
    whoIsThisFor:
      "Founders who are busy but not growing. Teams where everyone is working hard but the business isn't moving. Operators who want someone who understands both business and technology in the same sentence.",
    tools: ["Notion", "Airtable", "Google Workspace", "n8n", "Slack", "HubSpot"],
    overview:
      "Most businesses that bring me in for technology work have a process problem disguised as a technology problem. The new software they want built won't fix the issue because the issue is that no one has agreed on how the process should work in the first place. I bring an operations lens to every engagement — mapping how work actually flows through your business, identifying where value is being lost, and designing the process before selecting the tools to run it. This is what separates systems that transform a business from tools that collect dust.",
    process: [
      {
        step: "01",
        title: "Shadow the actual work",
        detail:
          "I don't start with interviews — I start by observing. How does work actually enter your business? How does it move between people? Where does it get stuck? The gap between how a founder describes their process and how it actually runs is where most of the problems live.",
      },
      {
        step: "02",
        title: "Bottleneck identification",
        detail:
          "Every business has a constraint — one step in the value chain that limits the throughput of everything else. Most businesses are trying to optimise the wrong steps because they haven't identified the actual constraint. I use Theory of Constraints methodology to find the real bottleneck before recommending any solutions.",
      },
      {
        step: "03",
        title: "Process design",
        detail:
          "Once the bottleneck is identified, I design the process that should replace the current one — with explicit decision rules, clear ownership, defined handoff points, and measurable outputs. The process design happens on paper before any tool is selected, because the tool should serve the process, not constrain it.",
      },
      {
        step: "04",
        title: "Tool selection and implementation",
        detail:
          "Given a well-defined process, tool selection becomes straightforward. I recommend the simplest tool that reliably handles the process — sometimes that's Notion, sometimes it's a custom database, sometimes it's a no-code automation platform. I'm not paid by any tool vendor and have no incentive to recommend complexity.",
      },
      {
        step: "05",
        title: "KPI setup and ongoing advisory",
        detail:
          "A system you can't measure is a system you can't improve. I identify the two to five metrics that actually tell you whether your business is healthy, build the reporting that surfaces them automatically, and provide ongoing advisory to interpret what the numbers mean and what to do about them.",
      },
    ],
    deepDive: [
      {
        heading: "What running Kisumu Hub taught me",
        body:
          "Kisumu Hub was an experiment in constraint. I was running a coworking space, managing 100+ members, running a weekly events programme, and building digital products — simultaneously, with a small team. The only way to do that without burning out was to design every system to run without my constant attention. Member onboarding had to work when I wasn't there. Event logistics had to be reliable when I was focused on a product build. Financial reporting had to happen automatically. This experience gave me a visceral understanding of what makes systems actually work in practice: they have to be simple enough that people follow them, documented well enough that new people can be onboarded, and automated enough that they run when no one is paying attention.",
      },
      {
        heading: "The tool trap",
        body:
          "Kenya's startup and SME ecosystem is in the middle of a productivity-tool explosion. Every week there's a new app that promises to organise your business. Most of these implementations fail — not because the tools are bad, but because the process they're meant to run hasn't been designed. Teams end up with five project management tools running in parallel, each being used differently by different people, with no single source of truth and more time spent managing the tools than the work. I help businesses escape this trap by designing the process first and selecting the minimum tool set needed to run it.",
      },
      {
        heading: "Systems that scale",
        body:
          "The test of a good system is whether it still works when the business doubles in size. A process that requires the founder to be in every decision loop can't scale. A Notion database that works for 20 records and breaks at 2,000 can't scale. I design systems with explicit scale assumptions — knowing where a system will need to be upgraded as the business grows, and building that upgrade path into the design rather than discovering it in a crisis.",
      },
    ],
    outcomes: [
      "A documented map of how your business actually operates versus how it should",
      "Identified bottleneck and a concrete plan to address it",
      "Process documentation that new hires can follow without handholding",
      "Tool selection recommendation with honest tradeoff analysis",
      "KPI dashboard that updates automatically",
      "Ongoing advisory relationship for strategic operational decisions",
    ],
  },
  {
    slug: "business-development",
    number: "07",
    title: "Business Development",
    tagline: "Build the relationships and pipelines that actually grow revenue.",
    description:
      "Business development is where strategy meets execution — identifying the right partners, clients, and channels, then doing the sustained work of converting those relationships into revenue. I've built partnerships, sales pipelines, and growth programmes across the tech and coworking sectors in Kenya. I bring both the strategic thinking and the operational discipline to make business development actually produce results.",
    proof: "Kisumu Hub: built the partnerships, corporate client relationships, and training pipeline that sustained the business.",
    whatYouGet: [
      "Partnership identification and outreach strategy",
      "Sales pipeline design and CRM configuration",
      "Proposal and pitch deck development",
      "Pricing strategy and revenue model refinement",
      "B2B outreach sequences and follow-up systems",
      "Strategic advisory on market entry and expansion",
    ],
    whoIsThisFor:
      "Founders who are great at building products but struggle to build the commercial relationships that turn a product into a business. Teams with good market traction who need to formalise and scale the sales process. Businesses entering a new market or segment in Kenya who need strategic guidance on how to approach it.",
    tools: ["HubSpot", "Notion", "LinkedIn Sales Navigator", "Google Workspace", "Apollo.io"],
    overview:
      "Most founders in Kenya's tech ecosystem are excellent builders and poor sellers — not because they lack ambition, but because business development is a discipline that requires a different skillset and a different operating cadence than product development. Good business development is systematic: it identifies the right targets, builds genuine relationships over time, creates compelling value propositions, and converts interest into signed contracts. It is not a one-time pitch campaign or a LinkedIn connection request. I've built BD functions from scratch in the Kenyan market and understand both the relationship norms and the commercial realities that determine whether an approach succeeds or falls flat.",
    process: [
      {
        step: "01",
        title: "Market mapping and target identification",
        detail:
          "Effective BD starts with knowing exactly who you're selling to and why they would buy. I map the addressable market — identifying the companies, institutions, and individuals most likely to become customers — and segment them by revenue potential, ease of conversion, and strategic value. This prevents the common failure mode of chasing every opportunity with equal energy and winning none of them.",
      },
      {
        step: "02",
        title: "Value proposition sharpening",
        detail:
          "Most businesses have a value proposition that is accurate but not compelling. 'We help businesses grow with technology' is true and useless. A sharp value proposition names the specific problem, the specific outcome, and the specific reason your solution produces that outcome better than alternatives. I work with founders to develop value propositions that resonate with specific buyer personas in the Kenyan market — accounting for local commercial culture, procurement processes, and decision-making dynamics.",
      },
      {
        step: "03",
        title: "Outreach system design",
        detail:
          "BD outreach without a system is just hoping. I design outreach sequences that combine email, LinkedIn, WhatsApp, and phone touchpoints at the right cadence, with the right message at each stage. Every sequence is built around genuine value delivery — sharing relevant insights, making warm introductions, offering something useful before asking for anything — because in the Kenyan market, trust precedes transaction.",
      },
      {
        step: "04",
        title: "Pipeline management and CRM setup",
        detail:
          "A BD effort without a pipeline is a collection of untracked conversations. I configure a CRM (HubSpot, Notion, Airtable — whichever fits your stack) with the right stages, the right fields, and the right automation so that every prospect is tracked, every follow-up is scheduled, and no opportunity falls through the cracks. I also set up the reporting that tells you where deals are stalling and why.",
      },
      {
        step: "05",
        title: "Partnership and channel development",
        detail:
          "The fastest way to reach new customers in Kenya is often through a partner who already has their trust. I identify the complementary businesses, industry associations, and community networks that can refer customers to you, design partnership structures that create genuine value for both sides, and manage the relationship-building process that converts a cold introduction into an active referral partner.",
      },
    ],
    deepDive: [
      {
        heading: "Business development in the Kenyan market context",
        body:
          "Kenya's commercial culture has specific characteristics that determine whether a BD approach works or wastes time. Relationships precede transactions more clearly here than in many markets — a cold email from an unknown sender rarely closes a deal, but a warm introduction from a mutual contact often does. Decision-making in Kenyan enterprises often involves more stakeholders than the formal org chart suggests, and proposals frequently need to navigate procurement committees with specific documentation requirements. Meeting culture is important: in-person meetings are expected for significant deals, and showing up demonstrates commitment in a way that a Zoom call doesn't replicate. I design BD strategies that work with these cultural realities rather than against them.",
      },
      {
        heading: "The difference between busy BD and productive BD",
        body:
          "One of the most common traps in business development is measuring activity instead of progress. Sending 200 cold emails, attending 15 networking events, and having 30 initial conversations feels like momentum. But if none of those activities is converting to qualified opportunities, the BD function is producing noise, not revenue. I design BD systems around conversion metrics — not vanity metrics — and build in regular review processes that identify which channels, messages, and target segments are actually producing results and which are consuming time without return.",
      },
      {
        heading: "Strategic partnerships as BD leverage",
        body:
          "The highest-leverage BD activity for most early-stage businesses in Kenya is not direct sales — it's strategic partnerships. A well-structured partnership with a complementary business that has established customer relationships can generate more qualified leads in a month than a year of direct outreach. I've built partnerships for Kisumu Hub with corporate training departments, government agencies, and industry associations that created sustained revenue streams. The key is designing partnership structures where the referral partner has genuine incentive and where the mechanics of the referral relationship are documented and managed rather than left to goodwill.",
      },
    ],
    outcomes: [
      "A clearly defined target market and ICP (Ideal Customer Profile) for your business",
      "A sharpened value proposition tested against real buyer personas",
      "An operational outreach system with sequences, templates, and follow-up cadences",
      "A configured CRM pipeline with the right stages and reporting",
      "Identified partnership opportunities with a structured approach to each",
      "A BD playbook your team can execute without you in every conversation",
    ],
  },
  {
    slug: "business-idea-generation-validation",
    number: "08",
    title: "Business Idea Generation & Validation",
    tagline: "Find the idea worth building — before you spend a year on the wrong one.",
    description:
      "Most business ideas that fail don't fail in execution — they fail because the fundamental assumption was wrong from the start. A problem no one has urgently enough, a solution customers won't pay for, a market too small to sustain a business. I help founders pressure-test their ideas before committing significant time and money, and help those without an idea yet find the opportunity worth pursuing in Kenya's specific market context.",
    proof: "Validated the product assumptions behind MyJoyfulDay and TellusJobs before building — both found paying users within weeks of launch.",
    whatYouGet: [
      "Structured idea generation workshops using proven frameworks",
      "Market sizing and opportunity assessment for Kenyan context",
      "Customer discovery interview design and facilitation",
      "Assumption mapping and risk prioritisation",
      "Rapid prototype and landing page for demand testing",
      "Go/no-go recommendation with documented evidence",
    ],
    whoIsThisFor:
      "Aspiring founders who have a general direction but haven't found the specific idea worth building. Entrepreneurs with multiple ideas who need to choose the right one. Existing businesses exploring a new product line or market segment. Anyone who wants to reduce the risk of starting before they're sure.",
    tools: ["Notion", "Typeform", "Figma", "Google Trends", "Meta Ads Manager", "Airtable"],
    overview:
      "The most important decision in any venture is what to build. Everything that comes after — the team, the funding, the execution — is downstream of whether the fundamental idea is sound. Yet most founders spend enormous energy validating execution (can we build this?) while under-validating the market (does anyone want this enough to pay for it?). I run structured validation processes that stress-test the core assumptions behind a business idea — the problem severity, the solution fit, the willingness to pay, and the competitive dynamics — and produce a clear evidence-based recommendation on whether to proceed, pivot, or pursue a different opportunity.",
    process: [
      {
        step: "01",
        title: "Idea landscape mapping",
        detail:
          "For founders without a specific idea yet, I start by mapping the landscape of opportunities in their domain of interest — identifying underserved needs, inefficient markets, and technology gaps in Kenya's current business environment. I use structured frameworks (Jobs-to-be-Done, Problem-Solution fit maps, market timing analysis) to surface ideas with genuine potential rather than me-too iterations on existing solutions.",
      },
      {
        step: "02",
        title: "Assumption inventory",
        detail:
          "Every business idea rests on a stack of assumptions — about who the customer is, what they care about most, how they currently solve the problem, how much they'd pay for a better solution, and how they'd hear about it. I make these assumptions explicit and visible, then rank them by how much the business depends on them being true. The riskiest assumptions — the ones where being wrong would kill the business — get tested first.",
      },
      {
        step: "03",
        title: "Customer discovery",
        detail:
          "The only way to validate assumptions about customers is to talk to actual customers. I design and facilitate customer discovery interviews that produce honest signal — not the polite encouragement that most founders receive when they describe their idea to potential customers. The difference is asking about past behaviour rather than hypothetical future behaviour, and creating interview conditions where the interviewee feels safe saying the idea won't work for them.",
      },
      {
        step: "04",
        title: "Demand signal testing",
        detail:
          "Interviews tell you what people say they'll do. A landing page or a simple prototype tells you what they actually do when given the opportunity to take action. I build minimum viable demand tests — a landing page with a clear value proposition and a call to action, or a WhatsApp bot that walks users through a simulated experience — and drive targeted traffic to measure real conversion intent before a line of product code is written.",
      },
      {
        step: "05",
        title: "Validation report and decision",
        detail:
          "The process ends with a documented validation report: the assumptions tested, the evidence gathered, the remaining risks, and a clear recommendation. This document becomes the founding thesis of the business — the reason why you believe this idea will work — and provides the framework for tracking whether that thesis holds as you execute.",
      },
    ],
    deepDive: [
      {
        heading: "The Kenyan market opportunity landscape",
        body:
          "Kenya has a set of structural characteristics that create specific categories of high-potential business opportunity. Mobile-first infrastructure: 95%+ smartphone penetration in urban areas, M-Pesa dominance, and WhatsApp as the primary business communication channel create distribution advantages for mobile-native businesses that don't exist in markets with fragmented payment and communication infrastructure. Leapfrogging dynamics: Kenya's relative youth in formal institutions means solutions can jump directly to the best modern approach rather than being constrained by legacy infrastructure — the same dynamic that made M-Pesa possible is creating opportunities in health, education, logistics, and agriculture. Underserved middle market: the segment between informal micro-enterprise and large formal business is large, growing, and poorly served by existing software and service providers. These structural characteristics make Kenya one of the highest-potential startup markets in Africa — for founders who understand the market specifically rather than applying a generic playbook.",
      },
      {
        heading: "Why customer discovery interviews usually fail",
        body:
          "Most customer discovery interviews produce false positives — people telling founders what they want to hear rather than what they actually think. The three main causes: the founder presents the idea too early and too enthusiastically, creating social pressure to be supportive; the questions are hypothetical ('would you use this?') rather than behavioural ('tell me about the last time you tried to solve this'); and the interviewee is someone in the founder's network who doesn't want to damage the relationship with honest feedback. I design discovery interviews to eliminate these biases — cold-recruiting interviewees from the actual target market, structuring questions entirely around past behaviour, and creating explicit permission structures where the most valuable feedback a participant can give is to explain why the idea won't work.",
      },
      {
        heading: "The difference between product and business validation",
        body:
          "Many founders validate that users want their product without validating that they've found a business. A product users love but won't pay for is a hobby. A product users pay for but that costs more to deliver than the revenue it generates is a charity. Real business validation tests four things simultaneously: does the problem exist and is it felt urgently enough? Will the solution I'm proposing solve it well enough? Will customers pay enough for the solution to sustain a business? And can I reach those customers efficiently enough that the acquisition cost doesn't exceed the lifetime value? I design validation processes that test all four dimensions — because passing three out of four still produces a failed business.",
      },
    ],
    outcomes: [
      "A clear, specific idea with documented evidence of market need",
      "An assumption map showing what must be true for the business to succeed",
      "Customer discovery findings from real potential customers — honest signal, not polite encouragement",
      "A demand test result showing real conversion intent, not stated intention",
      "A go/no-go recommendation with documented reasoning",
      "If go: the founding thesis and earliest product hypothesis to test in build",
    ],
  },
  {
    slug: "business-plan-review",
    number: "09",
    title: "Business Plan Review",
    tagline: "An honest read from someone who's built in the Kenyan market.",
    description:
      "A business plan is only useful if someone reads it critically — challenging the assumptions, stress-testing the financial model, and identifying the gaps before an investor, bank, or partner does. I review business plans with the eye of an operator who's built businesses in Kenya, not a consultant who's read about them. My feedback is specific, direct, and designed to make the plan fundable and executable.",
    proof: "Reviewed and strengthened plans that went on to secure funding and operational approval in Kenyan and East African markets.",
    whatYouGet: [
      "Full written feedback on every section of the business plan",
      "Financial model review and assumption stress-testing",
      "Market sizing methodology audit",
      "Competitive analysis critique and gap identification",
      "Kenya-specific regulatory and operational risk assessment",
      "Investor-ready revision recommendations",
    ],
    whoIsThisFor:
      "Entrepreneurs preparing to approach investors, banks, or grant bodies. Founders who've written their first business plan and want an honest assessment before it's in front of decision-makers. Business owners seeking formal credit who need a plan that meets lender requirements. Anyone who wants a critical read from someone with actual operating experience in Kenya.",
    tools: ["Google Workspace", "Excel / Google Sheets", "Notion", "Pitch", "PowerPoint"],
    overview:
      "Most business plans have the same weaknesses: market sizing that mistakes TAM for addressable market, financial projections built on optimistic assumptions with no sensitivity analysis, competitive analysis that lists competitors without honestly assessing their strengths, and operational plans that describe what the business will do without explaining how it will actually do it. I review business plans the way a sharp investor or an experienced banker would — with specific, direct feedback on every section, a line-by-line challenge of the financial model's assumptions, and a clear prioritised list of what needs to change before the plan is ready to put in front of the people whose yes you need.",
    process: [
      {
        step: "01",
        title: "Initial read and first impressions",
        detail:
          "I read the plan once without stopping to annotate — noting the overall narrative arc, the strength of the executive summary, and whether the plan answers the fundamental investor question: why this, why now, why you? First impressions matter because the people you're submitting to will form theirs in the first three pages.",
      },
      {
        step: "02",
        title: "Section-by-section deep review",
        detail:
          "I go through every section in detail: executive summary, market analysis, product/service description, business model, marketing and sales strategy, operations plan, management team, financial projections, and funding ask. Each section gets written feedback identifying what's working, what's missing, what's unsupported, and what's likely to draw pushback from a sophisticated reader.",
      },
      {
        step: "03",
        title: "Financial model audit",
        detail:
          "The financial model is where most business plans are weakest and where investors spend the most scrutiny. I review the revenue model logic, the cost structure assumptions, the growth rate justifications, and the cash flow timeline — testing whether the numbers are internally consistent, whether the assumptions are defensible, and whether the model includes the sensitivity analysis needed to show you understand the risks.",
      },
      {
        step: "04",
        title: "Kenya-specific context review",
        detail:
          "A plan that looks solid in the abstract may have blind spots specific to operating in Kenya: regulatory requirements from relevant sectoral authorities (CBK, CMA, KEBS, CAK), M-Pesa transaction cost implications at scale, procurement realities for B2G businesses, HR cost assumptions that don't reflect Nairobi market rates, or logistics cost assumptions that underestimate the real cost of last-mile delivery in secondary cities. I flag these specifically.",
      },
      {
        step: "05",
        title: "Revision guidance and follow-up",
        detail:
          "The review isn't a one-way document — it's a working session. I deliver written feedback, then schedule a call to walk through the most critical issues and answer your questions. After revisions, I'm available for a follow-up read to confirm the changes have addressed the gaps identified.",
      },
    ],
    deepDive: [
      {
        heading: "What investors in Kenya are actually looking for",
        body:
          "Kenya's investor landscape in 2025 spans angel investors, early-stage VCs (Chandaria Capital, Novastar, Saviu Ventures), impact investors (Acumen, GSMA Innovation Fund), development finance institutions (IFC, British International Investment), and traditional banks offering SME credit. Each of these audiences reads a business plan differently and weighs different factors. Angels care most about the founding team and the idea quality. VCs care about market size and growth trajectory. Impact investors care about measurable social outcomes alongside financial returns. Banks care about cash flow predictability and collateral. A plan written for one of these audiences is often not appropriate for another. I review plans with the specific audience in mind and advise on positioning accordingly.",
      },
      {
        heading: "The market sizing mistake that kills most plans",
        body:
          "The most common mistake in business plan market sizing is confusing Total Addressable Market (TAM) with the market the business will actually reach. Claiming a $50 billion TAM when you're a Nairobi-based startup targeting Kenyan SMEs is not compelling to any sophisticated investor — it signals that the founder hasn't thought seriously about their actual go-to-market. The credible approach is a bottom-up serviceable market estimate: how many customers in your specific target segment exist, how many can you realistically reach with your go-to-market in the first two to three years, and what revenue does that produce at your projected price point? This bottom-up model, supported by customer discovery evidence, is far more compelling than a top-down TAM calculation pulled from a market research report.",
      },
      {
        heading: "Building a defensible financial model",
        body:
          "A financial model is not a set of numbers — it's a set of arguments. Every line in the P&L is an argument about how the business works: revenue grows at X% because of Y driver; COGS are Z% of revenue because of the specific unit economics of the delivery model; marketing spend produces customer acquisition at a cost that is lower than the lifetime value by a defensible margin. A model that can't be explained at the assumption level isn't a model — it's a spreadsheet with aspirational numbers. I review models by asking 'what would have to be true for this to be accurate?' for every material line item, and identifying where the answer is 'something we don't yet know' — which is where the real business risk lives.",
      },
    ],
    outcomes: [
      "Full written review with section-by-section feedback — specific, direct, and prioritised",
      "Financial model audit with specific assumption challenges and recommended improvements",
      "Kenya-specific risk identification covering regulatory, operational, and market factors",
      "Investor-audience calibration — advice on positioning for your specific target funders",
      "A clear ranked list of changes needed before the plan is ready to submit",
      "One follow-up review session after revisions to confirm improvements",
    ],
  },
];

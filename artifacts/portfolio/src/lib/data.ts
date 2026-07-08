import myjoyfulldayImg from "@assets/screenshots/myjoyfullday_com.png";
import tellusjobsImg from "@assets/screenshots/tellusjobs_site.png";
import autoshineImg from "@assets/screenshots/autoshine_co_ke.png";
import tellusImg from "@assets/screenshots/site_tellusplatform_site.png";

// ── New MyJoyfulDay blog posts ─────────────────────────────────────────────
import * as mjdWedding from "./blog/myjoyfullday-wedding-planning-kenya";
import * as mjdBirthday from "./blog/myjoyfullday-birthday-party-kenya";
import * as mjdBabyShower from "./blog/myjoyfullday-baby-shower-planning";
import * as mjdCorporate from "./blog/myjoyfullday-corporate-events-kenya";
import * as mjdVenues from "./blog/myjoyfullday-nairobi-venues";
import * as mjdMpesa from "./blog/myjoyfullday-mpesa-event-payments";
import * as mjdPhotography from "./blog/myjoyfullday-event-photography-kenya";
import * as mjdCatering from "./blog/myjoyfullday-catering-services-kenya";
import * as mjdDecoration from "./blog/myjoyfullday-event-decoration-kenya";
import * as mjdKisumu from "./blog/myjoyfullday-kisumu-event-planning";
import * as mjdWhatsappInvitations from "./blog/myjoyfullday-whatsapp-invitations";
import * as mjdBudgeting from "./blog/myjoyfullday-event-budgeting-kenya";
import * as mjdHouseParty from "./blog/myjoyfullday-house-party-planning";
import * as mjdEngagement from "./blog/myjoyfullday-engagement-strategy";

// ── New TellusJobs blog posts ─────────────────────────────────────────────
import * as tjSalary from "./blog/tellusjobs-salary-negotiation-kenya";
import * as tjRemote from "./blog/tellusjobs-remote-work-kenya";
import * as tjInterview from "./blog/tellusjobs-interview-tips-kenya";
import * as tjResume from "./blog/tellusjobs-resume-writing-kenya";
import * as tjTech from "./blog/tellusjobs-tech-jobs-kenya-2025";
import * as tjNgo from "./blog/tellusjobs-ngo-jobs-kenya";
import * as tjCareerChange from "./blog/tellusjobs-career-change-kenya";
import * as tjLinkedin from "./blog/tellusjobs-linkedin-profile-kenya";
import * as tjEntry from "./blog/tellusjobs-entry-level-jobs-kenya";
import * as tjGraduate from "./blog/tellusjobs-graduate-jobs-kenya";
import * as tjBanking from "./blog/tellusjobs-banking-finance-jobs-kenya";
import * as tjFreelance from "./blog/tellusjobs-remote-freelance-kenya";
import * as tjNetwork from "./blog/tellusjobs-professional-network-kenya";
import * as tjJobStrategy from "./blog/tellusjobs-job-search-strategy-kenya";
import * as tjWorkplaceSkills from "./blog/tellusjobs-workplace-skills-kenya";

// ── New Tellus blog posts ─────────────────────────────────────────────────
import * as tAiProductivity from "./blog/tellus-ai-productivity-kenya";
import * as tWhatsappApi from "./blog/tellus-whatsapp-business-api";
import * as tN8n from "./blog/tellus-n8n-workflow-automation";
import * as tMpesa from "./blog/tellus-mpesa-api-integration";
import * as tSmallBiz from "./blog/tellus-automation-small-business-kenya";
import * as tFutureWork from "./blog/tellus-future-of-work-kenya";
import * as tCxAutomation from "./blog/tellus-customer-support-automation";
import * as tEcommerce from "./blog/tellus-ecommerce-automation-kenya";
import * as tAiTools from "./blog/tellus-ai-tools-kenyan-business";
import * as tWaBots from "./blog/tellus-building-whatsapp-bots-business";
import * as tSmartNotif from "./blog/tellus-smart-notifications-productivity";
import * as tTechStack from "./blog/tellus-startup-tech-stack-kenya";
import * as tPrivacy from "./blog/tellus-data-privacy-africa";
import * as tAiVsTraditional from "./blog/tellus-ai-vs-traditional-tools";

// ── AutoShine blog posts ──────────────────────────────────────────────────
import * as asNairobiGuide from "./blog/autoshine-car-wash-nairobi-guide";
import * as asDetailing from "./blog/autoshine-car-detailing-kenya";
import * as asMobile from "./blog/autoshine-mobile-car-wash-kenya";
import * as asMaintenance from "./blog/autoshine-car-maintenance-tips-kenya";
import * as asCeramic from "./blog/autoshine-ceramic-coating-kenya";
import * as asInterior from "./blog/autoshine-car-interior-cleaning";
import * as asWaterless from "./blog/autoshine-waterless-car-wash";
import * as asPolishWax from "./blog/autoshine-car-polish-wax-kenya";
import * as asFleet from "./blog/autoshine-fleet-car-washing-kenya";
import * as asStartBiz from "./blog/autoshine-start-car-wash-business-kenya";
import * as asEco from "./blog/autoshine-eco-friendly-car-wash";
import * as asScratch from "./blog/autoshine-car-scratch-removal-kenya";
import * as asWindshield from "./blog/autoshine-windshield-care-kenya";
import * as asTyres from "./blog/autoshine-tyre-care-kenya";
import * as asRainy from "./blog/autoshine-rainy-season-car-care";
import * as asFrequency from "./blog/autoshine-car-wash-frequency-kenya";
import * as asLuxury from "./blog/autoshine-luxury-car-detailing-kenya";
import * as asTraffic from "./blog/autoshine-nairobi-car-care-traffic";
import * as asSubscription from "./blog/autoshine-subscription-car-wash";
import * as asProducts from "./blog/autoshine-best-car-wash-products-kenya";

export const projects = [
  {
    slug: "myjoyfullday",
    title: "MyJoyfulDay",
    url: "https://myjoyfullday.com",
    shortDescription: "Event platform + WhatsApp AI bot serving 50K+ events and 1M+ guests.",
    description:
      "Event planning is already stressful. Adding a new tool to learn makes it worse. MyJoyfulDay removes the friction entirely, powered by Jitabi, a WhatsApp AI bot I built on Meta's Cloud API that lets anyone create a full event website by simply sending a message. No dashboard. No forms. No learning curve.",
    problem:
      "Event planning platforms assume you have time to learn a new tool. Most people planning a birthday or wedding in Kenya are doing it on the side, on their phone, in between everything else. They needed a website for their event but couldn't navigate a dashboard  -  and weren't going to download yet another app for a one-time occasion.",
    solution:
      "Built Jitabi, a WhatsApp AI bot that creates a fully live event website from a single message. Send 'I'm having Amara's birthday on Saturday at my house' and get a live event page, RSVP link and all, back in under 10 seconds. Zero dashboard, zero learning curve  -  it meets users exactly where they already are.",
    stats: ["50K+ events created", "1M+ guests reached", "4.9 rating"],
    tech: ["WhatsApp Cloud API", "AI / LLM", "Next.js", "Supabase", "Tailwind CSS"],
    colors: { primary: "#D4A735", bg: "#FBF9F4", text: "#111111" },
    challenges: [
      "Building a reliable real-time pipeline from a WhatsApp message to a published website, handling ambiguous inputs, retries, and edge cases in natural language.",
      "Designing Jitabi's conversational flow so it feels human, not robotic, guiding users through dialogue instead of forms.",
      "Scaling a vendor marketplace on both sides of the network effect problem simultaneously.",
    ],
    keyFeatures: [
      "Jitabi  -  WhatsApp AI event-planning bot (Meta Cloud API)",
      "Zero-UI website creation via conversation",
      "Vendor marketplace for weddings & events",
      "Live RSVP and guest management",
      "Multi-language support",
    ],
    image: myjoyfulldayImg,
  },
  {
    slug: "tellusjobs",
    title: "TellusJobs",
    url: "https://tellusjobs.site",
    shortDescription: "AI-powered job matching for Kenya. Upload your CV. Get matched. Auto-apply.",
    description:
      "The Kenyan job market is fragmented across dozens of portals: LinkedIn, NGO boards, bank career pages, government listings. Job seekers waste hours copy-pasting the same application. TellusJobs consolidates everything, matches your CV to real vacancies using AI, and drafts ready-to-send application packs automatically.",
    problem:
      "A qualified candidate has to visit LinkedIn, NGO boards, bank career pages, and government sites separately, then copy-paste the same CV and write a fresh cover letter for each role. The effort falls entirely on the job seeker, and most good candidates simply run out of time.",
    solution:
      "TellusJobs aggregates jobs from 10+ Kenyan portals daily, matches your CV against live vacancies using AI, and generates ready-to-send application packs automatically. One upload. Multiple matches. Applications drafted before you finish your tea.",
    keyFeatures: [
      "CV upload with instant AI-powered job matching",
      "Auto-generated cover letters tuned to each role",
      "Aggregates jobs from 10+ Kenyan portals daily",
      "Relevancy scoring so you apply where it counts",
      "Workspace sync to manage all applications in one place",
    ],
    tech: ["Next.js", "AI / LLM", "n8n Automation", "Supabase", "Tailwind CSS"],
    colors: { primary: "#FD5D28", bg: "#0F172B", text: "#FFFFFF" },
    challenges: [
      "Scraping and normalizing unstructured job data from portals with zero API access, handling layout changes, auth walls, and inconsistent formats.",
      "Fine-tuning LLMs for accurate CV-to-job matching in Kenyan market context, where job titles don't follow global norms.",
      "Generating cover letters that sound human enough that people actually submit them.",
    ],
    image: tellusjobsImg,
  },
  {
    slug: "tellus",
    title: "Tellus",
    url: "https://site.tellusplatform.site/",
    shortDescription: "AI-powered communications platform. Think faster. Write better. Act sooner.",
    description:
      "Tellus is the platform under everything: an AI assistant that doesn't just answer questions but anticipates what you need next. It sits at the intersection of communication, productivity, and intelligent automation. Built for people who think in systems and move fast.",
    problem:
      "Teams waste hours on communication overhead: drafting follow-ups, tracking what was said where, figuring out what actually needs attention. Most productivity tools add features without removing friction, which means they add noise instead of clarity.",
    solution:
      "An AI-powered communications platform that anticipates what you need next. Context-aware, proactive without being noisy, and designed for people who are already moving fast. Tellus sits inside existing workflows rather than demanding you build new ones around it.",
    keyFeatures: [
      "Context-aware AI assistant for teams and individuals",
      "Intelligent task prioritization and follow-up drafting",
      "Deep integrations with existing communication workflows",
      "Proactive suggestions without being noisy",
      "Designed for people who are already moving fast",
    ],
    tech: ["Next.js", "AI / LLM", "Tailwind CSS", "Supabase"],
    colors: { primary: "#10B981", bg: "#064E3B", text: "#ECFDF5" },
    challenges: [
      "Designing a latency-free AI interaction pattern, because users feel every millisecond of lag when they're in flow.",
      "Balancing proactive intelligence with user autonomy: an assistant that suggests without interrupting.",
      "Maintaining state and context across complex, long-running threads without losing coherence.",
    ],
    image: tellusImg,
  },
  {
    slug: "autoshine",
    title: "Autoshine",
    url: "https://autoshine.co.ke",
    shortDescription: "E-commerce storefront for a Kenyan car-care retailer with catalog, filtering, and payments.",
    description:
      "Autoshine needed more than a brochure site. They needed a storefront that could move product. Built a full e-commerce experience with a complete product catalog, smart filtering, recently-viewed features, combo deals, and integrated M-Pesa and card payment setup. The kind of site that earns its keep.",
    problem:
      "Autoshine had a great product range but no online presence that could actually convert. Customers had no way to browse the catalog, check what was in stock, or pay online. Sales were entirely walk-in, which capped growth to whoever walked through the door.",
    solution:
      "Built a full e-commerce storefront with a product catalog, smart category filtering, combo deal promotions, recently-viewed recommendations, and integrated M-Pesa and card payment flows. A site designed to move product from day one, optimized for mobile users on variable connections.",
    keyFeatures: [
      "Full product catalog with category filtering",
      "Combo deal promotions and savings engine",
      "Recently-viewed and recommendation features",
      "M-Pesa and card payment integration",
      "Mobile-first responsive design",
    ],
    tech: ["WordPress", "WooCommerce", "M-Pesa API", "E-commerce"],
    colors: { primary: "#F59E0B", bg: "#1C1C1C", text: "#FFFFFF" },
    challenges: [
      "Translating a physical retail experience into a digital one, organizing products in a way that matches how customers actually think about car care.",
      "Payment setup for the Kenyan market: integrating M-Pesa and card options reliably.",
      "Performance optimization so the catalog stays fast even with a large product count.",
    ],
    image: autoshineImg,
  },
  {
    slug: "derivchampions",
    title: "Deriv Champions",
    url: "https://derivchampions.com",
    shortDescription: "Conversion-focused site for a Kenyan forex mentor with 500+ traders trained.",
    description:
      "Deriv Champions is the online home of a Kenyan forex mentor with a proven track record: 500+ traders trained. The site needed to do one thing above all else, convert visitors into students. Built a focused, credibility-first website that communicates authority and drives enrollment.",
    problem:
      "Forex education in Kenya carries a trust problem. Potential students arrive skeptical, and with good reason  -  the space has its share of scams. A generic landing page wasn't going to convert anyone. The mentor had genuine credibility; the site wasn't showing it.",
    solution:
      "Designed a credibility-first conversion funnel: verifiable track record upfront, real student testimonials, clear program details, and a frictionless enrollment flow. The site does the persuading so the mentor can focus on teaching. Optimized for mobile users on slower connections, the core audience.",
    keyFeatures: [
      "Conversion-focused landing page architecture",
      "Testimonials and social proof sections",
      "Course enrollment and lead capture flows",
      "Fast load times for mobile-first Kenyan users",
      "Full domain, hosting, and payment setup",
    ],
    tech: ["WordPress", "Conversion Design", "Payment Integration"],
    colors: { primary: "#F0B429", bg: "#0F1923", text: "#FFFFFF" },
    challenges: [
      "Building credibility fast: forex is a trust-sensitive space and visitors decide in seconds whether to stay.",
      "Structuring content to guide a visitor from skeptic to enrolled student without friction.",
      "Optimizing for mobile users on slow connections, the core audience in Kenya.",
    ],
    image: null,
  },
];

export const blogPosts = [
  // ─── MyJoyfulDay series ───────────────────────────────────────────────────

  {
    slug: "myjoyfullday-whatsapp-event-website",
    title: "How Jitabi Creates a Live Event Website from a Single WhatsApp Message",
    date: "2025-06-15",
    excerpt:
      "Send one message. Get a live event website back in under ten seconds. Here's the exact technical pipeline that makes it happen  -  and why it's harder than it sounds.",
    tags: ["MyJoyfulDay", "WhatsApp", "AI"],
    content: `Building a product that converts a WhatsApp message into a published event website in under ten seconds sounds like a neat party trick. It's actually one of the harder engineering problems I've worked on.

Here's the full pipeline behind Jitabi.

**Step 1: The message arrives**

A user sends something like "I'm having Amara's birthday on Saturday at my place, everyone's welcome." That message hits Meta's WhatsApp Cloud API, which delivers it to our webhook endpoint in real time. From the moment the message is received, the clock starts.

**Step 2: Intent classification and entity extraction**

The raw text goes into an LLM-powered extraction layer. The model's job is to pull structured data from unstructured language: event name, date, location, time, event type, host name, and any additional details the user volunteered. The tricky part is handling ambiguity. "Saturday" means different things depending on when you ask. "My place" isn't a parseable location. The model is prompted to flag low-confidence extractions and queue them for clarification rather than guessing.

**Step 3: Clarification flow (when needed)**

If the extraction confidence falls below threshold on critical fields  -  date and location  -  Jitabi sends back a single targeted question. Not a list. Not a form. One question at a time. "Which Saturday do you mean  -  July 12 or July 19?" The user replies, and the pipeline resumes with the updated data.

**Step 4: Event record creation**

Once all required fields are confirmed, the data is written to Supabase. An event record is created with a generated slug, metadata from the extraction, and status set to "draft."

**Step 5: Page generation**

The event page is generated using a template system that hydrates a pre-built Next.js page with the event data. This is pre-rendered and served statically, which is critical for load speed. The URL is assigned, the page goes live, and status is updated to "published."

**Step 6: Response**

Jitabi sends the user their event URL  -  typically within 8 - 12 seconds of their original message. The URL is live, shareable, and ready for RSVPs immediately.

**What makes this hard**

The pipeline involves five external systems: Meta's API, the LLM, Supabase, the page generation service, and the delivery webhook. Each is a potential failure point. We handle this with idempotent writes, retry logic on the LLM and page generation steps, and a fallback that queues failed events for manual review rather than silently dropping them.

The result is a system that feels like magic to the user and feels like serious engineering underneath.`,
  },
  {
    slug: "myjoyfullday-no-app-needed",
    title: "The Best App for Event Planning in Kenya Is Already on Your Phone",
    date: "2025-06-01",
    excerpt:
      "The hardest part of building MyJoyfulDay wasn't the technology. It was accepting that the best product we could build would never ask anyone to download anything.",
    tags: ["MyJoyfulDay", "Product", "Kenya"],
    content: `Before I built the first line of Jitabi, I did something most product builders skip: I watched how people actually planned events in Kenya.

What I saw killed the idea of a traditional app immediately.

**The behaviour**

People planning birthdays and weddings in Kisumu and Nairobi are doing it on the side. On their lunch break, in a matatu, between meetings. They're using WhatsApp because WhatsApp is always open. When they want to tell people about their event, they share a link. When they need to collect RSVPs, they ask in a group chat.

Nobody was going to download a new app for a one-time event. App stores in Kenya have the same friction they have everywhere: find the app, create an account, confirm your email, navigate a new UI, learn the features, then finally do the one thing you needed to do. That's five steps before the product has delivered any value.

**The distribution insight**

WhatsApp has a penetration rate in Kenya that no app we could build would ever match. Every single person planning an event already has it installed. They already trust it. They already know how to use it. The question wasn't "how do we build a better event app?" It was "how do we build our product inside the app they're already using?"

**What Zero UI actually means**

When I say Jitabi has no UI, I don't mean the experience is bad. I mean we replaced every form, every sign-up screen, every dashboard with a conversation. A conversation that happens inside an app the user has opened a hundred times today.

The event page Jitabi creates does have a UI  -  it's a proper web page with the event details, a photo, a map, and an RSVP button. But the creator never has to interact with that UI to build it. They just talk.

**The results**

50,000+ events created. 1 million+ guests reached. A 4.9 rating from users who, in their reviews, consistently say the same thing: "I didn't expect it to be this easy."

No download required.`,
  },
  {
    slug: "myjoyfullday-50000-events",
    title: "50,000 Events Later: What Building an Event Platform in Kenya Taught Me",
    date: "2025-05-20",
    excerpt:
      "We hit 50,000 events created on MyJoyfulDay. Here's what the data revealed, what surprised us, and what we'd build differently if we started over today.",
    tags: ["MyJoyfulDay", "Product", "Kenya"],
    content: `Fifty thousand events is a number that sounds big in a press release. What it actually represents is fifty thousand conversations our WhatsApp AI bot Jitabi had with real people planning real occasions. That's a lot of signal.

Here's what we learned from it.

**Most events are personal, not professional**

We expected the platform to skew toward weddings and large formal gatherings. The reality: birthday parties are the single biggest category, followed by house parties, baby showers, and small community gatherings. Formal weddings are there, but they're not the core use case. This changed how we prioritized features  -  simpler flows matter more than advanced vendor coordination.

**People share their event page within minutes**

We tracked how quickly event creators shared their URL after creation. The median was under four minutes. People weren't creating the page and sitting on it  -  they were immediately sharing it in WhatsApp groups. This told us the page had to be beautiful and load instantly, because it was going to be judged by a group chat full of the creator's friends within seconds.

**Ambiguity is the most common failure point**

When we looked at events that stalled  -  where a user started the creation flow but never got a published page  -  the overwhelming cause was ambiguity in the initial message. Dates without years. Locations without addresses. Events with names that could be interpreted multiple ways. We spent a significant engineering effort on our clarification flow to reduce stalls, and it worked.

**The vendor marketplace has a cold-start advantage we didn't expect**

We assumed onboarding vendors (caterers, photographers, decorators) would be the hard part. It turned out event creators wanted vendor recommendations so badly that they were actively asking Jitabi for them  -  even before we had fully built the marketplace. Demand preceded supply by three weeks.

**What we'd do differently**

Start with the RSVP experience. We underinvested in the guest-side experience early on, focusing on the creator-side flows. RSVPs should have felt as smooth as the creation experience. We caught up eventually, but guests deserve as much design attention as creators.

Fifty thousand events is a milestone. The real metric is what happens at event 100,000  -  and the lessons above are shaping everything we build toward it.`,
  },
  {
    slug: "myjoyfullday-zero-ui-design",
    title: "Zero UI: Why We Removed the Dashboard and Replaced It with a Conversation",
    date: "2025-05-10",
    excerpt:
      "Every dashboard we designed got thrown out. Not because the designs were bad  -  because they were solving the wrong problem. Here's the case for Zero UI and what it means in practice.",
    tags: ["MyJoyfulDay", "Design", "WhatsApp"],
    content: `Zero UI is a design principle that's talked about a lot and practiced almost nowhere. The idea is simple: the best interface is no interface. The execution is genuinely hard.

For MyJoyfulDay, it wasn't a design philosophy we started with. It was a conclusion we arrived at after building two dashboard versions that our target users never used.

**The dashboard problem**

The first version of MyJoyfulDay had a web dashboard. It was clean. It had a great UX. Users could create events, customise their page, manage RSVPs, and contact vendors  -  all in a well-designed interface.

Nobody used it.

Not because they couldn't find it. We tracked this carefully. People would open the link, look at it, and close it. Then they'd go back to WhatsApp to ask us questions. The dashboard existed. The users didn't want it.

**The insight**

The people planning events in Kenya aren't looking for a new tool to learn. They're already managing everything through WhatsApp  -  conversations with family, chats with vendors, reminders in group chats. Adding a dashboard to their workflow meant adding context switching, a new login, a new mental model. It was more friction, not less.

**What Zero UI means in practice**

Zero UI doesn't mean zero product. It means zero new interface. The conversation becomes the interface. Every state in the product  -  "what's my event page URL?", "how many RSVPs have I gotten?", "can I change the date?"  -  is accessed through a message, not a menu.

This required rethinking everything. Forms became questions. Navigation became intent recognition. Status screens became proactive messages ("You have 23 RSVPs so far!"). Every feature had to be translatable into a natural language interaction.

**The hard parts**

The hardest thing about Zero UI is that users can say anything. A dashboard has buttons and menus that constrain the interaction space. A conversation does not. You need to handle the full surface area of what users might ask, including things you didn't design for.

We built a fallback pattern: when Jitabi doesn't understand a request, it asks one clarifying question and tries again. If it fails twice, it offers a small set of options as quick replies. This gives users a guardrail without destroying the conversational feel.

The dashboard still exists, but it's optional. For the 85% of users who never open it, Jitabi is the entire product.`,
  },
  {
    slug: "myjoyfullday-vendor-marketplace",
    title: "Building a Two-Sided Marketplace for Kenyan Weddings from Zero",
    date: "2025-04-28",
    excerpt:
      "The cold-start problem is real. Here's how we built both sides of the MyJoyfulDay vendor marketplace simultaneously  -  without faking supply or subsidizing demand.",
    tags: ["MyJoyfulDay", "Product", "Kenya"],
    content: `Two-sided marketplaces are notoriously hard to start. You need vendors to attract event planners. You need event planners to attract vendors. The classic chicken-and-egg problem.

For MyJoyfulDay's vendor marketplace, we had an unusual advantage: Jitabi gave us organic demand signals before we even launched the marketplace.

**How we saw demand before we had supply**

Event creators using Jitabi to set up their wedding pages kept asking the same question: "Can you recommend a photographer in Kisumu?" or "Where can I find a good caterer for 200 people?" These were free-text messages to a WhatsApp bot, unguided, unprompted. People wanted vendor recommendations so naturally that they were asking our AI before we'd built anywhere to store the answer.

This became our supply acquisition pitch. When we reached out to vendors, we could show them actual demand from real event creators, not projections.

**Supply onboarding**

We onboarded the first 50 vendors manually. Direct outreach to photographers, caterers, decorators, and event coordinators in Nairobi and Kisumu. We helped them set up their profiles, took photos where needed, and gave them early placement in recommendations.

We didn't charge them for early access. The value proposition was straightforward: reach people actively planning events right now, from their WhatsApp.

**Demand activation**

On the event creator side, we made vendor discovery feel like a natural part of the Jitabi conversation. After a wedding page was created, Jitabi would ask: "Would you like me to suggest some photographers available on your date?" This felt like a helpful next step, not an upsell.

**What the first 6 months showed**

Conversion from "vendor suggested" to "vendor contacted" ran at about 22%. That's meaningful. It means that roughly 1 in 5 event creators who got a vendor recommendation followed up with that vendor directly.

The marketplace is still early. Two-sided networks take time to reach liquidity. But starting with real demand signals and a direct supply relationship meant we avoided the ghost town problem that kills most marketplace attempts.`,
  },
  {
    slug: "myjoyfullday-rsvp-guest-management",
    title: "How MyJoyfulDay Manages RSVPs for Over a Million Guests Without Sign-Up Forms",
    date: "2025-04-15",
    excerpt:
      "One million guests reached, zero sign-up forms. Here's how we designed an RSVP system that works for guests who won't create an account, on devices you can't control.",
    tags: ["MyJoyfulDay", "Product", "Design"],
    content: `Every event platform faces the same tension: you need to track guest RSVPs, but guests won't create accounts for a one-time event.

The standard solution  -  "just make them sign up"  -  trades platform certainty for user friction. When you force a guest to create an account to RSVP to a birthday party, a significant portion of them don't. Not because they don't want to come  -  because signing up is more effort than the occasion deserves.

MyJoyfulDay needed a different approach.

**The design constraints**

Guests arrive at an event page via a shared link  -  typically from a WhatsApp forward. They're on mobile. They don't have an account. The event creator wants to know who's coming. The guest wants to say yes without jumping through hoops.

We had three requirements: the RSVP had to work with zero account creation, it had to capture enough data to be useful to the event creator, and it had to work reliably on low-bandwidth mobile connections.

**What we built**

The RSVP flow is a single form: name and phone number, nothing else. No email. No password. No confirmation email. You fill it in, tap "I'm coming," and you're done in under 15 seconds.

The phone number serves as the guest identifier  -  it's unique, it's already known to the user, and it lets us send a WhatsApp confirmation to the guest after they RSVP. That confirmation message doubles as a reminder mechanism: we send a follow-up the day before the event.

**For the event creator**

The creator sees a live RSVP count and a guest list in real time  -  accessible both from their event page and from Jitabi. They can ask "How many people are coming?" in a WhatsApp message and get an immediate count back.

**The reliability layer**

RSVP writes are idempotent. If a guest submits twice  -  network hiccup, double-tap  -  we deduplicate on phone number. The form submission is optimistic: it shows success immediately and syncs to the server in the background. This makes the experience feel instant even on slow connections.

One million guests later, we've had fewer than 200 duplicate complaints. The system works.`,
  },
  {
    slug: "myjoyfullday-natural-language-events",
    title: "Teaching Jitabi to Understand 'Saturday at My Place'",
    date: "2025-04-02",
    excerpt:
      "Natural language event parsing sounds straightforward. It's not. Here's what we learned from thousands of ambiguous messages and how we built a bot that handles them gracefully.",
    tags: ["MyJoyfulDay", "AI", "WhatsApp"],
    content: `"Saturday at my place" is four words. It contains a relative date, an undefined location, and no event name. For a human, it's clear enough in context. For an AI that needs to create a published event page, it's missing everything.

This is the natural language parsing problem at the core of Jitabi, and solving it taught us more about conversational AI than any course could.

**What users actually send**

Before building Jitabi, I assumed users would send reasonably structured messages. I was wrong. Here's a representative sample of real inputs:

- "Birthday on the 14th"
- "I'm throwing a thing for my sister next weekend, come"
- "House party Friday night, you're all invited"
- "Mama's 60th on Saturday afternoon, Kisumu, the usual place"

"The usual place" is my favourite. It contains a location only the sender's close friends would know.

**The extraction model**

We use an LLM with structured output to extract: event name, event type, date, time, location, host name, and notes. Each field comes back with a confidence score. Fields below 0.7 confidence are flagged for clarification.

The model handles relative dates ("next Friday," "this weekend," "the 14th") by resolving them against the current date at the time of the message. It handles event type inference  -  if you say "birthday" without saying "birthday party," it infers a party. It handles plurals and alternates.

**The clarification protocol**

When confidence is low, Jitabi asks exactly one question. Not a list. One targeted question about the field with the lowest confidence. If the user answers and introduces new ambiguity, Jitabi asks another single question. We capped this at three clarification rounds  -  if we still don't have a parseable event after three exchanges, we give the user a structured template to fill in.

In practice, 78% of events are created with zero clarification questions. Another 18% need one. Only 4% need two or more.

**The hardest case**

The hardest inputs are ones that look complete but aren't. "Birthday party for Amara, Saturday, Kisumu" looks fine. But Kisumu is a city, not a venue. We handle this by accepting the location as-is and showing it on the event page as the user provided it  -  then prompting the creator to add a specific address if they want map integration. Respecting the user's intent even when the data is imperfect is better than blocking them.`,
  },
  {
    slug: "myjoyfullday-whatsapp-cloud-api",
    title: "Why We Built Jitabi on Meta's WhatsApp Cloud API (Not Twilio or 360dialog)",
    date: "2025-03-20",
    excerpt:
      "There are three main paths to building a WhatsApp bot for business. We evaluated all of them. Here's why we chose Meta's own Cloud API and what the tradeoffs look like.",
    tags: ["MyJoyfulDay", "WhatsApp", "Technical"],
    content: `When we started building Jitabi, there were three credible options for WhatsApp business integration: Meta's WhatsApp Business Cloud API (self-hosted), Twilio's WhatsApp API, and third-party business solution providers like 360dialog or Vonage.

We spent two weeks evaluating all three before committing. Here's what we found.

**Option 1: Meta WhatsApp Business Cloud API**

This is Meta's own hosted API  -  direct. You apply for access, get approved, connect your phone number, and communicate directly with Meta's servers. No intermediary.

Pricing: message-based, charged by conversation type (service conversations, utility conversations, marketing conversations). The cost per conversation varies by country.

Pros: lowest per-message cost, direct integration with Meta's infrastructure, fastest delivery, most control.

Cons: steeper initial setup, approval process takes time, support is self-service documentation.

**Option 2: Twilio**

Twilio adds an abstraction layer on top of Meta's API. They handle the technical integration and give you a clean REST API to work with.

Pros: excellent documentation, reliable infrastructure, good support.

Cons: markup on per-message pricing (you pay Twilio's rate, not Meta's rate), slightly higher latency through the proxy.

**Option 3: 360dialog and similar BSPs**

Business Solution Providers like 360dialog sit between you and Meta and offer additional features: a management dashboard, analytics, template management, multi-agent inbox.

Pros: easier setup, management tools.

Cons: highest cost per message, less control, dependency on a third-party that could change pricing or terms.

**Our decision: Meta Cloud API**

For Jitabi's volume  -  tens of thousands of conversations monthly  -  the per-message cost differential between Meta Direct and a BSP is significant. More importantly, for a product where the WhatsApp interface is the entire product, we needed the closest possible integration with Meta's infrastructure. Every millisecond of latency matters when the promise is a 10-second event creation.

The setup was harder. The approval took longer. The support is self-serve. We accepted all of that for the cost, control, and performance advantages of going direct.

If you're building a WhatsApp bot for a small business with low volume and want the easiest path, a BSP is fine. If you're building WhatsApp as infrastructure at scale, Meta Cloud API is the right call.`,
  },
  {
    slug: "myjoyfullday-event-tech-kenya",
    title: "What Global Event Platforms Get Wrong About Kenya",
    date: "2025-03-05",
    excerpt:
      "Eventbrite, Meetup, and every other global event platform is available in Kenya. None of them dominate. Here's why  -  and what it reveals about building for local markets.",
    tags: ["MyJoyfulDay", "Kenya", "Product"],
    content: `Eventbrite works in Kenya. So does Meetup. So does Google Forms for RSVPs. The tools exist. The penetration doesn't.

If you look at how events are actually organized in Kenya outside of corporate settings, the dominant tool is WhatsApp. Groups are created, dates are shared, photos from the last event are circulated, RSVP confirmations happen in thread. The entire event lifecycle lives in a chat app.

Why didn't the global platforms win?

**The download problem**

Eventbrite requires an app or a web account. For a guest attending a birthday party, neither is a compelling proposition. The friction of "download app or sign up" kills conversion among people who aren't event planners by profession. In a market where the average smartphone has limited storage and data is metered, every extra megabyte is a consideration.

**The payment problem**

Global event platforms handle payments via credit cards and Stripe. In Kenya, the dominant payment method is M-Pesa. An event ticketing platform that doesn't integrate M-Pesa from day one is asking users to do something they almost never do.

**The trust problem**

Kenyan internet users are appropriately cautious about entering personal or payment information into unfamiliar platforms. A platform with no local brand recognition, no local customer support, and no local social proof faces a trust deficit that no UX can fully overcome.

**The context problem**

Most global event platforms are designed for professional organizers: conferences, concerts, corporate events. The interface assumes the person running the event has time to navigate a feature-rich tool. Kenyan event planners are mostly people planning personal occasions  -  birthdays, weddings, funerals, graduations  -  while holding down jobs and managing families.

MyJoyfulDay was built from the ground up for that context. WhatsApp as the interface. M-Pesa for payments. A local brand that Kenyan users can trust. An experience designed for one-time event planners, not professional organizers.

Global platforms can enter any market. Understanding that market is a different project.`,
  },
  {
    slug: "myjoyfullday-jitabi-conversational-ux",
    title: "Designing Conversational UX That Doesn't Feel Like Talking to a Robot",
    date: "2025-02-20",
    excerpt:
      "Most chatbots feel like filling out a form one field at a time. Jitabi had to feel different. Here are the design principles that separate a good conversational experience from a bad one.",
    tags: ["MyJoyfulDay", "Design", "AI"],
    content: `There's a version of a WhatsApp event bot that works like this: "What is the event name? What is the date? What is the location?" Three questions, one at a time, in sequence. It's technically functional. It's conversationally horrible.

Users describe that experience as "talking to a form." They're not wrong. It's a form in disguise  -  a linear sequence of required fields dressed up as a conversation.

Jitabi was designed to be different. Here's what that meant in practice.

**Principle 1: Extract first, ask second**

Instead of asking questions upfront, Jitabi listens to what the user volunteers first. "I'm having Amara's birthday on Saturday at Karen." Jitabi extracts name, date, and location from that single message and only asks about what's missing. If the user gave you enough, you don't ask for anything.

This feels dramatically different to users. The bot heard them. It understood. It only interrupted when it had to.

**Principle 2: One question at a time, always**

If Jitabi needs to clarify, it asks one targeted question. Never multiple questions. Never a bulleted list of things it needs. The moment you send a list of questions, you've created a form. A single question feels like a conversation.

**Principle 3: Acknowledge before asking**

Before every clarification, Jitabi acknowledges what it understood. "Got it  -  Amara's birthday at Karen. One thing: which Saturday do you mean?" This pattern signals that the bot is listening and has processed the input, not just pattern-matching to a question sequence.

**Principle 4: Offer recovery paths without abandoning the conversation**

When users go off-script (and they do), Jitabi tries to interpret intent rather than saying "I don't understand." If it can't parse the message after one clarification attempt, it offers three quick-reply options to get the user back on track  -  without breaking the conversational context.

**Principle 5: Celebrate the win**

When the event page is created, Jitabi doesn't just send the URL. It sends a short message that names the event and confirms what's been set up. "Amara's birthday page is live! Here's your link to share." The language is warm, the confirmation is specific, and the call to action is clear.

Good conversational UX requires the same discipline as good screen UX. Fewer words. Clearer intent. Celebration of the user's success, not the bot's capability.`,
  },

  // ─── TellusJobs series ────────────────────────────────────────────────────

  {
    slug: "tellusjobs-kenyan-job-market",
    title: "The Kenyan Job Market Is Fragmented. TellusJobs Is the Fix",
    date: "2025-07-01",
    excerpt:
      "A qualified candidate in Kenya has to check LinkedIn, BrighterMonday, NGO boards, bank career pages, and government sites  -  every day. TellusJobs consolidates all of it so you don't have to.",
    tags: ["TellusJobs", "Kenya", "AI"],
    content: `If you're looking for work in Kenya, your morning routine probably looks like this: check LinkedIn. Check BrighterMonday. Check the NGO board for whichever sector you're targeting. Check the websites of the specific companies you want to work for. Maybe check a government jobs portal if you're open to public sector. Maybe check three or four more platforms depending on your field.

That's not a job search. That's a second job.

**The fragmentation problem**

The Kenyan job market is distributed across dozens of platforms, each with its own posting ecosystem, its own search interface, and its own update cadence. There's no single authoritative source. Jobs posted exclusively on a company's own careers page  -  which describes most large Kenyan employers  -  don't show up on aggregators at all.

The result: qualified candidates miss opportunities because they weren't checking the right platform on the right day. And employers get a fraction of the applicant pool they deserve because most qualified candidates never see the posting.

**What TellusJobs does**

TellusJobs aggregates job listings from over 10 Kenyan portals and company career pages daily. Not just the public API feeds  -  actual postings, scraped, normalized, and deduplicated. We match these against your uploaded CV using AI to surface the roles where your profile is the strongest fit.

You don't change your job search. You change your starting point.

**Beyond aggregation**

Aggregation solves the discovery problem. But finding a job and applying for it are two different challenges. For each matched role, TellusJobs generates a tailored application pack: a formatted CV and a cover letter written for that specific job description, based on your actual experience.

The goal is to take you from "I found a role that fits" to "my application is ready to send" in minutes, not hours.

**Who it's for**

TellusJobs is built for job seekers in Kenya who are serious, qualified, and running out of time to do this manually. It's not a passive job alert tool  -  it's an active application assistant.

If you've ever calculated how many hours a week your job search is costing you and felt the number was too high, TellusJobs is built for you.`,
  },
  {
    slug: "tellusjobs-ai-cv-matching",
    title: "How AI Reads Your CV and Matches You to Jobs in Seconds",
    date: "2025-06-20",
    excerpt:
      "Keyword matching is how 2015 job sites worked. TellusJobs uses embedding-based semantic matching to understand what you've done and compare it to what employers actually want.",
    tags: ["TellusJobs", "AI", "Technical"],
    content: `When you upload your CV to most job platforms, here's what happens: a system extracts keywords (Java, Project Management, MBA) and matches them against keywords in job postings. If your CV contains the same words as the job description, you match. If it doesn't, you don't.

This approach has three problems. First, it penalizes people who describe their experience accurately instead of gaming keywords. Second, it misses semantic similarity  -  "revenue growth" and "sales performance" mean the same thing but don't match as keywords. Third, it ignores the context of experience  -  five years of senior project management is very different from five years of entry-level project management, but keyword matching doesn't distinguish them.

TellusJobs uses a different approach.

**Semantic embeddings**

When you upload your CV, we convert it into a high-dimensional vector  -  a numerical representation of the meaning and content of your experience, not just the words on the page. Job descriptions go through the same process. Matching is then a similarity calculation between vectors, not a keyword intersection.

This means "programme officer at an international NGO" and "project manager at a development organisation" are recognized as similar roles, even though the words are different. Your actual experience is what's being measured.

**Role context scoring**

We don't just match on content  -  we score on fit. A 90% match doesn't mean your CV has 90% of the same words as the job description. It means your professional profile is 90% aligned with the role profile, taking into account seniority, sector experience, skill set, and stated requirements.

This is especially important in the Kenyan market, where job titles are less standardised than in markets with longer corporate history.

**What you see**

When you log in, you see your top matches ranked by fit score. Each match shows which aspects of your profile are strongest for that role and which gaps exist. You decide which ones to apply for. TellusJobs generates the application pack. You review and send.

The AI does the search. You do the judgment. That's the right division of labour.`,
  },
  {
    slug: "tellusjobs-scraping-portals",
    title: "We Scraped 10 Kenyan Job Portals. Here's What the Data Showed",
    date: "2025-06-10",
    excerpt:
      "Building TellusJobs meant collecting data from every major Kenyan job portal. Here's what we found  -  about posting volumes, duplication rates, exclusive listings, and where the real jobs are hiding.",
    tags: ["TellusJobs", "Kenya", "Data"],
    content: `Building a job aggregator means living inside job portal data. For the last year, we've been ingesting, cleaning, and analysing postings from over 10 Kenyan job sources daily. The picture that emerged was more interesting than we expected.

**Portal 1: LinkedIn**

LinkedIn is the most visible platform but not the most comprehensive for Kenya. International roles and corporate Kenya are well-represented. Local SME postings, NGO roles, and government-adjacent opportunities are significantly underrepresented. LinkedIn's algorithm also means many postings don't reach most candidates unless they're actively following the right company pages.

**Portal 2: BrighterMonday**

The largest Kenya-specific job board by posting volume. Strong coverage of formal sector employment, especially banking, FMCG, and professional services. Reliable update cadence.

**NGO and development sector boards**

Reliefweb, Devex, and sector-specific boards carry a significant volume of high-paying Kenyan roles that don't appear on mainstream platforms. A development sector professional who's only checking LinkedIn and BrighterMonday is missing a substantial portion of relevant opportunities.

**Company career pages**

This was the biggest finding. A majority of the roles posted by Kenya's largest private employers  -  banks, telcos, large corporates  -  are posted exclusively on their own career pages. They don't appear on any aggregator. Our scraping of company career pages surfaces a category of opportunity that's effectively invisible to most job seekers.

**Duplication rates**

Across aggregated sources, approximately 23% of postings are duplicates  -  the same role posted on multiple platforms. We deduplicate aggressively, normalising on employer name, role title, and posting date.

**The cadence insight**

Most Kenyan employers post roles on Tuesday and Wednesday mornings. The worst time to check for new postings is Friday afternoon  -  posting activity drops significantly. If you're doing a manual daily job search, optimise for Tuesday and Wednesday.

TellusJobs runs daily ingestion across all sources so you don't have to think about timing. But the data is useful context for anyone doing this manually.`,
  },
  {
    slug: "tellusjobs-cover-letters-ai",
    title: "How TellusJobs Writes Cover Letters That Don't Sound Like AI Wrote Them",
    date: "2025-05-28",
    excerpt:
      "Generic AI cover letters are easy to spot and immediately disqualifying. Here's how we built a cover letter system that sounds like the candidate wrote it  -  because in the ways that matter, they did.",
    tags: ["TellusJobs", "AI", "Writing"],
    content: `Every recruiter in Kenya has, by now, read an AI-generated cover letter. They know it when they see it: generic language, no specificity, phrases like "I am a highly motivated professional with a passion for excellence" that could describe anyone or no one.

A cover letter that sounds like it was generated by a generic AI is worse than no cover letter. It signals that the candidate didn't bother.

TellusJobs generates cover letters that pass the "did a human write this?" test. Here's how.

**The foundation: your actual experience**

The cover letter starts from your CV  -  your specific experience, your actual job titles, your real accomplishments. Not a generic template filled with your name. Your specifics become the substance of the letter.

**The job description as the lens**

We analyse the job description for its actual priorities: what skills appear multiple times, what language the employer uses to describe the role, what they seem to value most. The cover letter is then structured to speak to those priorities in the employer's language, using the candidate's real experience as evidence.

If the job description emphasises "stakeholder management" and your CV mentions "coordinating with government departments and NGO partners," the cover letter explicitly surfaces that connection. Not by swapping buzzwords, but by showing how your experience maps to their need.

**The tone layer**

We've trained our generation pipeline on successful Kenyan cover letters across sectors  -  professional, formal but not stiff, confident but not arrogant. The output doesn't read like a Silicon Valley tech cover letter, because Kenyan hiring contexts aren't Silicon Valley.

**What you review before sending**

The cover letter you get from TellusJobs is a first draft, not a final product. We expect you to read it, adjust the tone to match your voice, and add anything personal that the system couldn't know  -  a connection at the company, a specific project the role would let you continue, a detail from a recent interaction with the employer's product.

The AI does 80% of the work. The 20% you add is what makes it yours.`,
  },
  {
    slug: "tellusjobs-beyond-linkedin",
    title: "Why LinkedIn Alone Won't Land You a Job in Kenya",
    date: "2025-05-15",
    excerpt:
      "LinkedIn is necessary but not sufficient for job seekers in Kenya. Here's the full picture of where Kenyan jobs actually live  -  and what a complete search strategy looks like.",
    tags: ["TellusJobs", "Kenya", "Career"],
    content: `LinkedIn is the professional platform of record globally. In Kenya, it's important. It's also not enough  -  and treating it as your only job search channel is costing you opportunities.

Here's the honest breakdown of where Kenyan jobs actually live.

**What LinkedIn is good for in Kenya**

LinkedIn is strong for: multinationals with Kenyan offices, large Kenyan corporates with sophisticated HR functions, roles in finance, consulting, and technology, and any role where international visibility is part of the job (development sector, international NGOs). If you're looking for these kinds of roles, LinkedIn is essential.

LinkedIn is also the right place for professional visibility. A well-maintained profile with a clear headline and recent activity makes it easier for recruiters to find you passively. This matters for senior roles especially.

**Where LinkedIn falls short**

SMEs  -  which employ the majority of formal sector workers in Kenya  -  post sparsely on LinkedIn if at all. The platform's cost structure (posting a job is not free) and the complexity of its interface mean many smaller Kenyan employers simply don't use it.

NGO and development sector roles are better found on Reliefweb, Devex, and sector-specific boards. A programme manager who relies only on LinkedIn will miss most of the relevant postings in their field.

Government and parastatal roles are posted through official government channels, not LinkedIn. If public sector is on your radar, you need a different monitoring system entirely.

And as noted above, a significant portion of roles at large Kenyan private employers  -  banks, telcos, large manufacturers  -  are posted exclusively on their own careers pages.

**A complete Kenya job search strategy**

A comprehensive search covers: LinkedIn (check daily, keep your profile current), BrighterMonday (check 2-3x per week), sector-specific boards relevant to your field, the career pages of the 15-20 companies you most want to work for, and a tool like TellusJobs to aggregate and alert on everything you're not directly monitoring.

It sounds like a lot. That's exactly why we built TellusJobs.`,
  },
  {
    slug: "tellusjobs-application-workflow",
    title: "From CV Upload to Interview Invitation: The TellusJobs Workflow Explained",
    date: "2025-05-05",
    excerpt:
      "A step-by-step walkthrough of what actually happens from the moment you upload your CV to the moment your application is in an employer's inbox.",
    tags: ["TellusJobs", "Product", "Kenya"],
    content: `TellusJobs is designed so that the hardest work  -  scanning dozens of job portals, matching your profile against hundreds of roles, writing application documents  -  happens automatically. Here's exactly what that looks like in practice.

**Step 1: Upload your CV**

You upload your CV in PDF or Word format. Our parser extracts your experience, skills, education, and accomplishments. You review the extracted profile for accuracy and add anything the parser missed  -  languages, certifications, specific achievements that weren't prominently featured.

This takes about 5 minutes for a well-formatted CV.

**Step 2: Set your search parameters**

You tell us what you're looking for: sectors you're open to, seniority level, preferred locations, salary range if you have one. These parameters don't limit the matching  -  they're weights that influence how roles are ranked in your feed.

**Step 3: The daily match**

Every morning, TellusJobs runs your profile against that day's new postings from all monitored sources. New matches are ranked by fit score and delivered to your dashboard. You get a summary notification if there are high-confidence matches (above 85% fit).

**Step 4: Review and select**

You open your dashboard and review the matched roles. Each role shows a fit score, a summary of the job requirements, the employer, the deadline, and a "why this matches" explanation. You select the ones you want to apply for.

**Step 5: Application generation**

For each selected role, TellusJobs generates a tailored application pack within 60 seconds: a formatted CV with your most relevant experience emphasised for this specific role, and a cover letter written for this specific job description.

**Step 6: Review and personalise**

You read the generated documents. You adjust tone, add personal details, make any corrections. This step matters  -  the AI does the structural work, but your voice and judgment improve the output.

**Step 7: Submit**

You submit the application through the employer's preferred channel  -  their website, email, or whatever the posting specified. TellusJobs tracks what you've applied for and when.

That's the full workflow. Most candidates go from "new match appeared" to "application submitted" in under 30 minutes.`,
  },
  {
    slug: "tellusjobs-job-title-problem",
    title: "Why 'Business Development Executive' Means 10 Different Things in Kenya",
    date: "2025-04-22",
    excerpt:
      "Job title standardisation is a solved problem in Silicon Valley and an active one in Kenya. Here's how TellusJobs handles the messiness of Kenyan job taxonomy.",
    tags: ["TellusJobs", "AI", "Kenya"],
    content: `In a mature corporate job market, job titles follow established conventions. A "Senior Software Engineer" at one company means roughly the same thing as a "Senior Software Engineer" at another. Job descriptions are structured, requirements are explicit, and an AI matching system can make confident inferences.

The Kenyan job market doesn't work this way.

**The taxonomy problem**

"Business Development Executive" in Kenya can mean: a sales representative expected to cold-call SMEs, a corporate partnerships manager dealing with Fortune 500 clients, an entry-level account manager at a telecom, or a C-suite adjacent role in a small company where the founder does all actual strategy.

The same title. Four completely different jobs. An AI that matches on title similarity will confidently match a senior business development professional to an entry-level door-to-door sales role and vice versa.

**Why Kenya's market is different**

Kenya's formal corporate sector is younger than its equivalents in Europe or North America. Title conventions haven't had decades to standardise. Smaller companies in particular create bespoke titles that reflect their specific org structure rather than any market convention. And the development/NGO sector  -  a major employer in Kenya  -  uses entirely different title conventions from the private sector.

**How we handle it**

TellusJobs doesn't match on titles. We match on content: what the job description says the role actually involves, and what the CV demonstrates the candidate has actually done. The embedding approach treats titles as weak signals and experience content as strong signals.

When we see "Business Development Executive" in a job description, we parse what the role requires  -  client acquisition, partnership management, revenue targets, team leadership  -  and match that against demonstrated experience. A candidate who spent three years managing corporate partnerships at a bank will match strongly to a corporate BD role and weakly to a field sales role, regardless of how either is titled.

This is why semantic matching outperforms keyword matching in the Kenyan context. The words don't always tell the truth. The experience description does.`,
  },
  {
    slug: "tellusjobs-vs-job-boards",
    title: "TellusJobs vs BrighterMonday vs LinkedIn: An Honest Comparison for Kenyan Job Seekers",
    date: "2025-04-10",
    excerpt:
      "What does each platform actually do well, and where does each fall short? An unsparing comparison of the main options for Kenyan job seekers.",
    tags: ["TellusJobs", "Kenya", "Career"],
    content: `Choosing where to spend your job search energy is itself a strategic decision. Different platforms serve different needs, and understanding those differences can save you weeks of wasted effort.

Here's an honest breakdown.

**BrighterMonday**

Strengths: largest Kenya-specific posting volume, strong coverage of formal sector employment, free to use for job seekers, well-established in the Kenyan market.

Weaknesses: search and filtering is basic, no intelligent matching, high volume means high noise, many postings are outdated before they're removed.

Best for: broad scanning of formal sector Kenyan opportunities, especially in banking, FMCG, and professional services.

**LinkedIn**

Strengths: strongest professional network and visibility, essential for passive job seeking, good for multinationals and large Kenyan corporates, recruiter outreach.

Weaknesses: most relevant Kenyan SME, NGO, and government roles aren't posted here, posting costs mean smaller employers don't use it, the feed algorithm means you see what LinkedIn wants you to see.

Best for: senior roles, multinational companies, being found by recruiters, professional network maintenance.

**Other Kenya-specific boards**

MyJobMag, Career Point Kenya, Job Webkenya  -  each has a slice of the market. None has comprehensive coverage. Each requires separate daily monitoring.

Best for: sector-specific opportunities that don't appear on the bigger platforms.

**TellusJobs**

Strengths: aggregates from all the above and more, AI-powered matching saves hours of manual review, auto-generated application documents, one platform to cover most of the market.

Weaknesses: newer platform, smaller brand recognition, matching quality depends on how well your CV communicates your experience (garbage in, garbage out), personal connections and referrals  -  the most effective job search mechanism  -  are outside our scope.

Best for: efficient high-volume job searching, people who want to apply quickly to multiple roles, candidates who lose opportunities because they can't monitor all platforms daily.

**The real answer**

Use all of them. TellusJobs for daily monitoring and application efficiency. LinkedIn for visibility and network. BrighterMonday for Kenya-specific coverage. Sector boards for your niche. They're not competing. They're complementary.`,
  },
  {
    slug: "tellusjobs-hidden-cost",
    title: "The Real Cost of Applying for Jobs Manually in Kenya (It's Not Just Time)",
    date: "2025-03-28",
    excerpt:
      "We calculated what a manual job search actually costs a Kenyan professional. The number is higher than you think  -  and it's not just measured in hours.",
    tags: ["TellusJobs", "Kenya", "Career"],
    content: `Job searching is usually framed as something people do in their spare time. The implicit assumption is that it's free. It's not.

Here's the honest accounting of what a manual job search costs a Kenyan professional.

**Time cost**

The average Kenyan professional doing a serious job search spends 2-3 hours per day monitoring platforms, identifying relevant roles, preparing application materials, and tracking submissions. At 5 days per week over a 3-month search, that's 180-270 hours of active search time.

At Kenya's median professional salary of approximately KES 80,000/month, your time is worth roughly KES 500/hour. A 3-month job search costs 90,000-135,000 KES in time value  -  almost two months of salary.

**Cognitive cost**

This is harder to measure but more damaging. Decision fatigue from reviewing dozens of irrelevant postings daily. The emotional weight of rejection. The cognitive overhead of tracking applications, follow-ups, and deadlines across multiple platforms. These aren't just productivity costs  -  they affect the quality of applications you submit and the mental energy you bring to interviews.

**The application quality cost**

When you're applying manually under time pressure, cover letter quality drops. The third cover letter you write in a day is worse than the first. Generic language creeps in. Personalisation goes out. This directly reduces your conversion rate from application to interview.

**Opportunity cost**

The time spent on manual job searching is time not spent on skill development, professional networking, or doing excellent work in your current role. All of these affect your medium-term career trajectory.

**What the arithmetic suggests**

The total cost of a manual job search  -  in time, cognitive load, and opportunity cost  -  is significant enough to justify investment in tools that reduce it. TellusJobs is designed to collapse the time cost from 2-3 hours per day to 20-30 minutes: review your matches, approve your application documents, submit. The cognitive overhead drops with it, because you're not sorting through noise.

The goal isn't to automate your job search entirely. It's to make the human parts of it  -  judgment, relationships, preparation  -  the only parts you have to do.`,
  },
  {
    slug: "tellusjobs-what-employers-want",
    title: "What Kenyan Employers Are Actually Looking For in 2025",
    date: "2025-03-15",
    excerpt:
      "We analysed thousands of Kenyan job postings. Here's what employers say they want  -  and more importantly, what the patterns reveal about the skills that actually matter.",
    tags: ["TellusJobs", "Kenya", "Career"],
    content: `Reading enough job descriptions gives you a picture of what employers think they want. Analysing patterns across thousands of them gives you a picture of what they actually value. The two aren't always the same.

Here's what our analysis of Kenyan job postings in 2025 revealed.

**What appears in almost every posting**

"Strong communication skills." "Team player." "Self-starter." "Attention to detail." These phrases appear in roughly 80% of Kenyan job postings regardless of role, level, or sector. This is employer boilerplate  -  it's not a signal of what they're actually selecting for.

**What employers are genuinely filtering on**

The language that appears in postings where employers invest significant space  -  multiple bullet points, detailed descriptions  -  is more revealing:

Technology literacy is now a baseline, not a differentiator. Employers across sectors expect candidates to be comfortable with digital tools, even for non-technical roles. What differentiates candidates is proficiency with specific tools relevant to the sector  -  SAP for finance, Salesforce for sales, specific sector platforms for development roles.

Project management and execution credibility matters more than credentials. Employers describe wanting "someone who has done this before" far more than "someone with a degree in this area." Demonstrated execution  -  specific projects, measurable outcomes  -  is the signal that lands interviews.

Local market understanding is a stated differentiator for most roles. Kenyan employers aren't looking for generic professionals. They're looking for people who understand the specific dynamics of doing business in Kenya  -  M-Pesa integration, regulatory environment, customer behaviour.

**The 2025 shifts**

AI-adjacent skills are appearing more frequently  -  not necessarily AI engineering, but comfort with AI tools: using AI writing assistants, working with AI-generated outputs, understanding what AI can and can't do. This isn't about being a data scientist. It's about being someone who's integrated AI into their workflow.

Hybrid and remote work skills  -  async communication, documentation, self-direction  -  have become standard asks rather than special conditions.

**What this means for your applications**

Lead with specifics. Metrics. Named projects. Demonstrable outcomes. Generic language in a cover letter or CV gets filtered out before it's read carefully. The data from employer postings suggests that specificity  -  "managed a KES 12M portfolio" rather than "managed large portfolios"  -  is what gets applications through the first review.`,
  },

  // ─── Tellus Platform series ───────────────────────────────────────────────

  {
    slug: "tellus-why-we-built-it",
    title: "Why We Built Tellus: The Case Against Another Productivity Tool",
    date: "2025-07-05",
    excerpt:
      "Most productivity tools make you more productive at using productivity tools. Tellus was built to be the last tool you add  -  not another app to manage.",
    tags: ["Tellus", "AI", "Productivity"],
    content: `Before I built Tellus, I spent six months using every major productivity and team communication tool I could find. Notion. Linear. Slack. Asana. Loom. Superhuman. Cron. Each one solved something and created something new. A new inbox. A new notification surface. A new thing to keep up with.

By month three, I was spending roughly 40% of my productive hours managing my productivity system. That's not ironic. That's a product design failure at scale.

**The pattern I kept seeing**

Every productivity tool I used was designed to organise information or coordinate tasks. None of them were designed to help me think. None of them anticipated what I needed to do next. None of them reduced the overhead of communication  -  they just gave that overhead a better interface.

The smartest people I worked with were not the ones with the best systems. They were the ones who spent the least time on coordination overhead and the most time on the actual work that required their judgment.

**The Tellus insight**

Productivity isn't a filing problem. It's an attention problem. The question isn't "where should this information live?"  -  it's "what needs my attention right now, and what can wait?"

Tellus was designed to answer that question. Not by giving you a better inbox or a smarter task list  -  but by understanding the context of what you're working on well enough to surface what matters and suppress what doesn't.

**What this means in practice**

Tellus doesn't replace your existing tools. It doesn't ask you to move your data. It sits at the intersection of your communication and work context and does the filtering that you're currently doing manually.

Proactive without being noisy. Context-aware without being creepy. Useful without being yet another thing to maintain.

That's what we set out to build. That's what Tellus is.`,
  },
  {
    slug: "tellus-context-aware-ai",
    title: "Context-Aware AI: Why Tellus Knows What You Need Before You Ask",
    date: "2025-06-25",
    excerpt:
      "Most AI assistants are reactive. You ask, they answer. Tellus is designed to be proactive  -  surfacing what you need before you realise you need it. Here's how that works.",
    tags: ["Tellus", "AI", "Technical"],
    content: `There's a meaningful difference between an AI that answers questions and an AI that anticipates them.

An AI that answers questions is a search bar with more words. Useful. Not transformative. You still have to know what to ask, know when to ask it, and remember to ask it at all.

An AI that anticipates questions is something different. It requires the system to maintain a model of what you care about, what state your work is in, and what's likely to need your attention next.

Tellus is designed to do the second thing.

**What context-awareness requires**

To anticipate what you need, a system needs at minimum: an understanding of what you're working on right now, a sense of what's changed since the last time it had your attention, and a model of what kinds of changes require your input versus what can proceed without you.

This is harder than it sounds. Most AI systems process each query in isolation  -  they don't maintain state between interactions. Tellus maintains a context model that persists across sessions, updating as new information arrives.

**What this looks like in practice**

If you're in the middle of a project with a deadline approaching, Tellus surfaces the deadline and any blockers proactively  -  not because you asked, but because the system's context model flagged it as relevant.

If a team member sent you a message that references a decision you made three weeks ago, Tellus can surface that context when you're reviewing the message  -  so you're not reconstructing it from memory.

If two conversations on different threads are about the same thing, Tellus can connect them and present them together rather than requiring you to hold the connection in your head.

**The boundary**

Context-awareness has a failure mode: surveillance. A system that monitors everything and surfaces everything becomes noise. Tellus is designed with a relevance threshold  -  information is surfaced only when the system's confidence that it requires your attention is above a set level. You can adjust this threshold. More proactive or less proactive, depending on your working style.

The goal isn't omniscience. It's the kind of attentiveness a good chief of staff provides: aware of everything, but only escalating what matters.`,
  },
  {
    slug: "tellus-latency-problem",
    title: "Why AI Assistants Feel Slow (and What We Did About It)",
    date: "2025-06-15",
    excerpt:
      "Latency in AI interactions isn't just inconvenient  -  it breaks flow. Here's how we designed Tellus to feel instant even when the underlying computation isn't.",
    tags: ["Tellus", "Technical", "AI"],
    content: `When you're in flow  -  genuinely focused, thinking fast, building toward something  -  every interruption has a cost. Not just the seconds the interruption takes. The cost of re-establishing the mental state that made the flow possible.

An AI assistant with 3-second response times isn't just slow. It's a flow-breaker. Each interaction carries a context-switching tax that compounds across a working day.

This was a non-negotiable design constraint for Tellus: interactions had to feel instant, or they would make the experience worse, not better.

**Why AI responses are slow**

LLM inference is computationally expensive. A typical GPT-4 class model responds in 1-4 seconds for a moderate-length response. That's not a solvable problem at the model level  -  it's a physics constraint given current hardware.

What is solvable is perceived latency. The gap between when you ask something and when you feel like the system is responding.

**Technique 1: Streaming**

Tellus starts displaying text the moment the first tokens are generated  -  before the full response is ready. This brings perceived response time from "time to first full response" (3-4 seconds) to "time to first token" (typically under 500ms). The response appears to grow in real time, which feels conversational rather than computational.

**Technique 2: Speculative rendering**

For common interactions where we can predict the likely output structure  -  a follow-up question, a summary, an action list  -  we begin rendering the skeleton of the response before the content is complete. The interface doesn't wait for the full response to start showing shape.

**Technique 3: Pre-computation for known patterns**

For interactions that are triggered by predictable events  -  a new message arriving, a deadline approaching, a document being updated  -  Tellus pre-computes the likely response context so the information is ready before you ask for it.

**The result**

Most Tellus interactions feel sub-second to the user. The underlying inference is happening in the same 1-3 second range as any other LLM system. The architecture collapses the gap between computation time and perceived response time.

Flow matters. We built for it.`,
  },
  {
    slug: "tellus-proactive-vs-noisy",
    title: "The Line Between Helpful and Annoying: How Tellus Decides When to Interrupt You",
    date: "2025-06-05",
    excerpt:
      "A proactive AI assistant that interrupts you at the wrong moment is worse than no assistant at all. Here's how Tellus distinguishes between what needs your attention and what doesn't.",
    tags: ["Tellus", "Design", "AI"],
    content: `The most common complaint about notification systems  -  from email to Slack to every productivity app ever built  -  is that there are too many of them. Each one asks for your attention. Each one has a cost. And most of them don't deserve what they're asking for.

An AI assistant that generates proactive notifications faces the same risk at higher stakes. If Tellus interrupts you every time it has something to say, it becomes another noise source  -  just a smarter-sounding one.

The design challenge: how does a system decide what rises to the level of interruption?

**The two failure modes**

Under-notify: Tellus misses something important, you find out later, and you wonder what the point of having an AI assistant was.

Over-notify: Tellus surfaces too much, you start ignoring everything it says, and the false alarm rate means you miss the things that actually matter.

Both failures destroy trust. Under-notify means the system isn't valuable. Over-notify means the system isn't trustworthy. You want neither.

**The classification approach**

Tellus evaluates potential notifications against three axes:

Urgency: Does this require action before a specific time? A deadline in four hours is different from a deadline in four days.

Relevance: Is this directly connected to work the user is actively engaged in? A thread about a project you haven't touched in two weeks is less urgent than a thread about a project you're working on today.

Decision requirement: Does this require a decision from the user, or can it proceed without one? Information updates can often wait. Blockers cannot.

**The interruption threshold**

A proactive notification from Tellus requires high scores on at least two of three axes. An urgent, relevant item that doesn't require a decision might still generate a gentle flag  -  visible but not intrusive. An urgent item that requires a decision gets a real notification, regardless of relevance.

**User control**

You can calibrate this. More sensitive means more notifications, fewer missed things. Less sensitive means fewer interruptions, higher risk of missing something. The default is tuned for "professional with a full calendar who doesn't want to be disturbed without good reason."`,
  },
  {
    slug: "tellus-workflow-integrations",
    title: "How Tellus Lives Inside Your Existing Workflow Without Disrupting It",
    date: "2025-05-25",
    excerpt:
      "Every tool that asks you to change your workflow is making a bet that the value exceeds the switching cost. Tellus doesn't ask you to change anything. Here's how that works.",
    tags: ["Tellus", "Product", "Integration"],
    content: `The graveyard of productivity tools is full of products that had great features and required you to change your habits to access them. Habit change is expensive. Most people don't do it.

Tellus was designed with a different premise: meet people in the workflow they already have, rather than asking them to build a new one.

**What this means technically**

Tellus integrates with the tools you're already using  -  email, Slack, calendar, project management  -  rather than asking you to migrate to a new platform. The integration is read-aware and action-capable: Tellus can observe what's happening across your connected tools and take actions on your behalf when instructed.

The data stays where it is. Tellus doesn't require you to move everything into a new system.

**The integration philosophy**

Most integrations work by pulling data into a central hub. You see everything in one place, but the one place is now another thing to check.

Tellus inverts this. Instead of pulling everything to one place, it pushes relevant information to you in context  -  when you're in the middle of a relevant task, Tellus surfaces what you need, from wherever it lives.

If you're reviewing an email about a project, Tellus can surface the relevant Slack threads and calendar events connected to that project  -  without you switching apps to find them.

**The no-migration principle**

We made a deliberate decision not to build Tellus as a communication platform. We don't want to replace Slack or email. We don't want your conversations to happen inside Tellus. We want Tellus to make your existing conversations more productive by adding context and reducing overhead.

This is a narrower product vision than "replace everything." It's also one that doesn't require you to change anything about how you work. The value is additive, not disruptive.

**The tradeoff**

The integration-first approach means Tellus is only as good as the integrations available. A team that works across obscure tools with no APIs gets less value than a team on standard modern tools. We're building integrations continuously, and we publish our roadmap so teams can see what's coming.`,
  },
  {
    slug: "tellus-human-autonomy",
    title: "Building AI That Knows Its Place: Human Autonomy in AI Assistants",
    date: "2025-05-12",
    excerpt:
      "The most dangerous AI assistant is one that makes decisions without telling you. Here's how Tellus is designed to support human judgment rather than replace it.",
    tags: ["Tellus", "AI", "Design"],
    content: `There's a version of an AI assistant that's maximally helpful: it reads everything, understands everything, makes decisions, sends messages, files things, schedules meetings, and updates projects on your behalf  -  all without asking. You come back at the end of the day and everything is done.

This version terrifies me.

Not because AI can't do these things reliably  -  increasingly it can. But because decisions made without human awareness create problems that surface later and look like your fault. An AI that sent a reply you didn't review. An AI that declined a meeting without understanding the relationship context. An AI that flagged something as resolved that wasn't.

**The autonomy design principle in Tellus**

Tellus is designed to surface, suggest, and draft  -  not to decide and act. Everything it does that affects the outside world requires explicit user confirmation. This is a deliberate constraint.

Internally, Tellus takes many autonomous actions: monitoring, summarising, connecting threads, preparing context. These are read operations. They don't have external consequences and don't require your review.

For write operations  -  sending messages, updating tasks, scheduling meetings  -  Tellus prepares and presents but doesn't execute without confirmation.

**Why this matters for trust**

An AI assistant you don't fully trust is an AI assistant you're afraid to use. The cognitive overhead of "what might it be doing without me knowing?" is itself a productivity cost. Tellus is designed so that question never has to enter your mind.

You know what it does autonomously (monitoring, summarising, connecting). You know what it always asks before doing (anything with external impact). The boundary is clear and consistent.

**The tradeoff**

This design means Tellus is less autonomous than a maximally aggressive AI assistant. For some users, that's frustrating  -  they want more things to happen without their involvement.

For the users Tellus is designed for  -  people who are already moving fast and making judgment calls constantly  -  maintaining control over what goes out under their name is worth the extra confirmation step.`,
  },
  {
    slug: "tellus-communication-overhead",
    title: "Communication Overhead Is a Hidden Tax on Your Team's Productivity",
    date: "2025-05-01",
    excerpt:
      "Research shows knowledge workers spend up to 40% of their time on internal communication. Most of that time doesn't produce decisions, alignment, or forward motion. Here's the receipt.",
    tags: ["Tellus", "Productivity", "Teams"],
    content: `Knowledge work has a dirty secret: most of what fills a knowledge worker's calendar isn't the actual knowledge work.

The average knowledge worker spends roughly 2-3 hours per day on email. Another 1-2 hours on instant messaging. An additional 2+ hours in meetings, a significant portion of which are status updates that could have been asynchronous messages. That's 5-7 hours per day on communication, in a typical 8-hour workday.

That leaves 1-3 hours for the work that required hiring you.

**Where the time goes**

Status updates. "Can you give me an update on X?" is a question that exists because someone doesn't have visibility into X without asking. If X's status were visible without asking, this conversation doesn't happen.

Coordination overhead. "Can we find a time to sync?" is a question that exists because scheduling is hard and people default to verbal coordination. Better tools and asynchronous defaults eliminate most of this.

Information retrieval. "Where did we land on this?" and "What was the decision about Y?" are questions that exist because decisions aren't documented where people can find them. Better documentation practices eliminate most of this.

Follow-up loops. "Just checking in on my previous message" is a question that exists because people don't respond to messages that don't require urgent action. Better communication norms and systems reduce this.

**The compounding problem**

Communication overhead compounds. Each interruption costs more than the time it takes because of the context restoration cost  -  the time required to get back to where you were before the interruption. Research from the University of California, Irvine suggests this is approximately 23 minutes per deep-work interruption.

A day with 15 interruptions doesn't just cost 15 times the average interruption duration. It costs substantially more.

**What Tellus changes**

Tellus reduces communication overhead by making information available without asking  -  context surfaced proactively, status visible without status meetings, threads connected without manual cross-referencing. The goal isn't zero communication. It's eliminating the communication that exists only because the alternative was worse.`,
  },
  {
    slug: "tellus-thread-coherence",
    title: "The Context Problem: How Tellus Keeps Long Conversations Coherent",
    date: "2025-04-20",
    excerpt:
      "Long threads lose coherence. Decisions get buried. Context gets lost. Here's how Tellus maintains thread coherence across conversations that span days or weeks.",
    tags: ["Tellus", "Technical", "AI"],
    content: `Every team has a thread that got out of hand. It started as a focused question. Replies came. Side discussions branched off. Decisions were made and then revisited. The original question is now 47 messages back and nobody can remember what was decided.

Thread coherence  -  the ability to understand the current state and key decisions of a long conversation without reading everything from the beginning  -  is one of the most undervalued features a communication tool can have.

It's also one of the hardest to build well.

**Why long threads lose coherence**

Threads naturally accumulate noise as they grow: tangential discussions, social niceties, corrections to earlier messages, questions that were answered inline. The signal-to-noise ratio decreases over time. Important information becomes harder to find relative to unimportant information.

LLMs face an additional problem: context window limits. Most AI systems have a maximum amount of text they can process at once. A thread that exceeds that limit can't be processed as a unit  -  the AI has to choose what to include, and that choice introduces potential blind spots.

**How Tellus handles this**

Tellus maintains a structured summary of each active thread that's updated incrementally as new messages arrive. Rather than re-reading the entire thread each time, the system updates its model of the thread's state: key decisions made, open questions, participants, timeline, and current blocking issues.

This summary is queryable. "What was decided about the Q3 timeline?" returns the relevant decision from the thread summary, not the full thread. "What's still unresolved?" returns the open questions the system has tracked.

**The coherence guarantee**

For threads Tellus is monitoring, the system guarantees that a user joining the thread late  -  or returning to it after a gap  -  can get the essential context without reading back through everything. The summary is always current, because it's updated message-by-message rather than generated on demand.

This changes the relationship to long threads. Instead of dreading them, you can let them grow knowing the coherence layer is maintained automatically.`,
  },
  {
    slug: "tellus-async-future",
    title: "Why the Best Teams Are Going Async (and How AI Makes It Work)",
    date: "2025-04-08",
    excerpt:
      "Asynchronous communication is better for deep work, better for distributed teams, and better for individual autonomy. The only reason it hasn't fully won is that it creates coordination overhead. AI removes that overhead.",
    tags: ["Tellus", "Teams", "Productivity"],
    content: `The case for asynchronous team communication is strong and has been well-made by others. Deep work requires long uninterrupted periods. Synchronous communication  -  meetings, real-time messaging  -  is the enemy of those periods. The teams doing the most intellectually demanding work find ways to protect deep work time, which means reducing synchronous communication requirements.

The case for synchronous communication is also real: coordination is genuinely hard to do asynchronously. Nuanced discussions are easier in person. Relationship-building requires real-time presence. Quick questions are faster to ask out loud than to write.

The high-performing team solution isn't fully async or fully sync  -  it's async by default with sync for the specific things that genuinely require it.

**Where async breaks down**

The practical failure mode of async-first teams is information loss and coordination friction. If you send a message that requires input before you can proceed, and the person you sent it to sees it eight hours later, you've created an 8-hour block in your workflow.

This is why many teams abandon async: the overhead of waiting, following up, and keeping track of what's pending becomes more painful than just scheduling a meeting.

**How AI changes the async equation**

AI changes three things about async work that have historically made it hard:

Information availability. Questions like "where did we land on this?" and "what's the current status of X?"  -  which often prompted synchronous check-ins  -  can be answered by a well-connected AI assistant instantly, without involving the person you'd otherwise ask.

Follow-up management. The cognitive overhead of tracking who's waiting on what gets offloaded to the AI. Tellus knows what messages are pending responses and can surface them appropriately  -  without requiring the sender to maintain that tracking manually.

Context for people joining late. Someone returning from leave or joining a project mid-stream no longer has to read back through weeks of thread history. The AI provides structured context.

These aren't total solutions to async coordination challenges. But they remove the specific friction points that make async harder than sync for most teams.`,
  },
  {
    slug: "tellus-meetings-cut-in-half",
    title: "How to Cut Your Team's Meeting Time Without Losing Alignment",
    date: "2025-03-25",
    excerpt:
      "Most teams have more meetings than they need. The reason is usually information asymmetry, not genuine coordination requirements. Here's how to identify which meetings are real and which are symptoms.",
    tags: ["Tellus", "Teams", "Productivity"],
    content: `If you audit your team's calendar and ask "what decision does this meeting produce?" for each meeting, you'll find that most meetings don't produce decisions. They produce updates.

Status updates. Progress reports. "Alignment" sessions that really mean "making sure everyone has heard the same thing." These meetings exist because the alternative  -  trusting that information has been communicated and understood without verification  -  feels risky.

The risk isn't imaginary. Information does get lost. People do have different understandings of the same situation. Alignment does break down. Meetings are a reliable, if expensive, way to address this.

But they're not the only way.

**Category 1: Meetings that should be documents**

Status updates, project reviews, and progress reports are almost always better as written documents. A well-written update takes 30 minutes to write and 5 minutes to read. A meeting covering the same content takes 45-60 minutes, produces worse information density, and leaves no searchable record.

If a meeting's primary function is information transfer, it should be a document.

**Category 2: Meetings that should be threads**

Discussions that don't require real-time response  -  "what should we do about X?"  -  are almost always better as asynchronous threads. The reasons: written responses are better considered than immediate verbal responses. People who need to research before responding can do so. The discussion is automatically documented.

If a meeting's primary function is gathering input, it should be a thread.

**Category 3: Meetings that are actually meetings**

Decisions with genuine ambiguity that benefit from real-time clarification. Relationship-building and team cohesion. Sensitive conversations. Creative sessions where energy is generative. These are actually meetings, and they deserve real-time presence.

**What Tellus enables**

Tellus makes Categories 1 and 2 work reliably: documents are findable and current, threads are coherent even when they get long, and missing context is surfaced automatically. When the alternative to a meeting works, people take the alternative.

The meetings that remain are the ones that should remain. That's the goal.`,
  },

  // ─── Original 3 posts ─────────────────────────────────────────────────────

  {
    slug: "whatsapp-as-infrastructure",
    title: "WhatsApp Is Infrastructure: Stop Treating It Like a Marketing Channel",
    date: "2025-03-10",
    excerpt:
      "250 million Kenyans don't use your app. But almost all of them have WhatsApp. Here's how I stopped building dashboards and started building bots.",
    tags: ["WhatsApp", "Automation"],
    content: `Most founders build an app and then think about how to get users to download it. I flipped that.

When I was building MyJoyfulDay, the hardest insight wasn't technical  -  it was distribution. Our target users (people planning weddings and birthdays in Kenya) weren't going to download a new app for a one-time event. But every single one of them had WhatsApp open already.

So we moved the entire product into WhatsApp.

Jitabi  -  our event-planning bot  -  lets anyone create a live event website by sending a message. No download. No sign-up. No dashboard. Just: "I'm having Amara's birthday on Saturday at my house" → live event page, published, URL sent back in under 10 seconds.

Here's what building Jitabi taught me about WhatsApp as infrastructure:

**1. It's not a chatbot, it's an interface.**
The mistake most builders make is treating a WhatsApp bot like a FAQ answerer. Jitabi is an interface  -  a replacement for a form, a dashboard, a signup flow. Design it that way. Every message is a UI state.

**2. Ambiguity is the hard problem.**
"Saturday" could mean this Saturday or next. "My place" could mean anything. You need an extraction layer (LLM) plus a recovery flow for when confidence is low. Jitabi asks one clarifying question at a time  -  never a list of questions, always a conversation.

**3. WhatsApp has business infrastructure built in.**
Read receipts, delivery confirmation, phone number verification, push notifications  -  all included, all trusted by users. You don't have to build any of it.

WhatsApp isn't just where your users are. It's where trust already lives. Build there.`,
  },
  {
    slug: "automation-before-hiring",
    title: "Before You Hire, Automate: What Two Years in Operations Taught Me",
    date: "2025-01-18",
    excerpt:
      "Running a coworking space while building products taught me something most founders miss. The best headcount is the one you never added.",
    tags: ["Automation", "Operations"],
    content: `I ran Kisumu Hub while simultaneously building digital products. That sounds impossible. It wasn't  -  but it required one hard rule: never do manually what can be automated.

Here's what that looked like in practice:

**Member onboarding:** Instead of manually sending welcome emails, access instructions, and introductions, I built a workflow in n8n that triggered the moment someone signed up. It sent the right information at the right time, tagged them in our CRM, and added them to the right WhatsApp group. Zero manual steps.

**Event coordination:** Booking confirmations, reminders, venue prep checklists  -  all automated. The only human in the loop was the part that genuinely required human judgment.

**Reporting:** Weekly member stats, revenue summaries, occupancy rates  -  pulled, formatted, and delivered to my inbox every Monday morning. I didn't produce these reports. I read them.

The result: I could run meaningful operations with far less overhead than you'd expect  -  because I wasn't doing the work that shouldn't need a human.

**What automation can't do:**
It can't build relationships. It can't handle the member who shows up in a bad mood and needs a real conversation. It can't make judgment calls in ambiguous situations.

The formula: automate the repeatable, protect your time for the irreplaceable.

Every business has more automatable work than they realize. The first step is simply watching yourself work for a week and asking: "why am I doing this by hand?"`,
  },
  {
    slug: "building-for-kenya",
    title: "Building for Kenya: Why Context Is a Feature",
    date: "2024-11-05",
    excerpt:
      "Every product decision looks different when your users are on 3G, pay with M-Pesa, and trust WhatsApp more than any app you could build.",
    tags: ["Product", "Kenya"],
    content: `I've built products for a specific context: Kenya. And that context changes everything.

When I was building the Autoshine e-commerce site, I couldn't just follow the standard WooCommerce playbook. My users are on mobile, often on slower connections, and they expect M-Pesa as a payment option  -  not a bolt-on, but the primary flow. A site that loads in 2 seconds on fiber in Nairobi might take 8 seconds on 3G in Kisumu. That 6-second difference is the difference between a sale and a bounce.

When I built Deriv Champions for a forex mentor, I couldn't just copy a generic "online course" template. Forex in Kenya carries specific trust challenges  -  there are a lot of scams. The site had to lead with credibility signals, real testimonials, verifiable track record, before asking anyone to enroll. Context isn't just UX. It's the entire product strategy.

**The things that change when you build for Kenya:**

- **Payment:** M-Pesa first, cards second. Integrate what people actually use.
- **Connectivity:** Assume mobile, assume variable bandwidth. Lazy load everything. Keep bundles small. Test on real devices.
- **Trust:** Your credibility has to be visible in seconds. Social proof, recognizable partners, clear contact info.
- **Language:** Even English-speaking users code-switch. Your copy needs to feel locally grounded, not imported.

The biggest mistake I see from builders here is importing a Silicon Valley product playbook unchanged. The fundamentals of good product thinking travel  -  but the specifics don't.

Context is not a constraint to work around. It's a feature that, if you design for it, becomes your competitive advantage.`,
  },

  // ─── New MyJoyfulDay posts ────────────────────────────────────────────────

  {
    slug: "myjoyfullday-wedding-planning-kenya",
    title: "Wedding Planning in Kenya: The Complete Guide for 2025",
    date: "2025-07-01",
    excerpt: "Planning a Kenyan wedding involves vendors, venues, budgets, and family expectations. Here's the complete guide to pulling it off beautifully  -  and how MyJoyfulDay makes the whole process easier.",
    tags: ["MyJoyfulDay", "Wedding", "Kenya"],
    coverImage: mjdWedding.coverImage,
    content: mjdWedding.content,
  },
  {
    slug: "myjoyfullday-birthday-party-kenya",
    title: "Birthday Party Planning in Kenya: How to Throw a Celebration People Will Remember",
    date: "2025-07-02",
    excerpt: "From intimate house parties to large venue celebrations, planning a birthday in Kenya requires the right vendors, the right venue, and a guest experience that reflects the occasion.",
    tags: ["MyJoyfulDay", "Birthday", "Kenya"],
    coverImage: mjdBirthday.coverImage,
    content: mjdBirthday.content,
  },
  {
    slug: "myjoyfullday-baby-shower-planning",
    title: "Baby Shower Planning in Kenya: The Modern Guide",
    date: "2025-07-03",
    excerpt: "Baby showers in Kenya have evolved. Here's how to plan one that celebrates the mother-to-be, works for every budget, and creates a genuinely memorable experience.",
    tags: ["MyJoyfulDay", "Baby Shower", "Kenya"],
    coverImage: mjdBabyShower.coverImage,
    content: mjdBabyShower.content,
  },
  {
    slug: "myjoyfullday-corporate-events-kenya",
    title: "Corporate Events in Kenya: Planning That Reflects Well on Your Organisation",
    date: "2025-07-04",
    excerpt: "Corporate events in Kenya  -  product launches, team builds, annual dinners  -  are high-stakes. Here's how to plan them well and what separates forgettable events from ones people talk about.",
    tags: ["MyJoyfulDay", "Corporate", "Events"],
    coverImage: mjdCorporate.coverImage,
    content: mjdCorporate.content,
  },
  {
    slug: "myjoyfullday-nairobi-venues",
    title: "The Best Event Venues in Nairobi: A Practical Guide for Every Budget",
    date: "2025-07-05",
    excerpt: "Nairobi's venue landscape spans hotel ballrooms, garden spaces, rooftop terraces, and community halls. Here's how to find the right one for your event and what to look out for.",
    tags: ["MyJoyfulDay", "Venues", "Nairobi"],
    coverImage: mjdVenues.coverImage,
    content: mjdVenues.content,
  },
  {
    slug: "myjoyfullday-mpesa-event-payments",
    title: "M-Pesa for Event Payments: How to Collect Guest Contributions and Vendor Fees",
    date: "2025-07-06",
    excerpt: "From harambee contributions to vendor deposits, M-Pesa is how Kenyans handle event money. Here's how to set it up properly  -  and how MyJoyfulDay automates the whole process.",
    tags: ["MyJoyfulDay", "M-Pesa", "Payments"],
    coverImage: mjdMpesa.coverImage,
    content: mjdMpesa.content,
  },
  {
    slug: "myjoyfullday-event-photography-kenya",
    title: "Event Photography in Kenya: Finding the Right Photographer and Getting the Most from Them",
    date: "2025-07-07",
    excerpt: "Your event photos are the only thing that survives the day. Here's how to find a Kenyan event photographer who will deliver, what to look for, and how to brief them properly.",
    tags: ["MyJoyfulDay", "Photography", "Kenya"],
    coverImage: mjdPhotography.coverImage,
    content: mjdPhotography.content,
  },
  {
    slug: "myjoyfullday-catering-services-kenya",
    title: "Event Catering in Kenya: How to Feed Your Guests Well Without Breaking the Budget",
    date: "2025-07-08",
    excerpt: "Food is remembered at every event. Here's how to choose a caterer, plan a menu, and manage catering logistics for Kenyan events from 20 to 500 guests.",
    tags: ["MyJoyfulDay", "Catering", "Kenya"],
    coverImage: mjdCatering.coverImage,
    content: mjdCatering.content,
  },
  {
    slug: "myjoyfullday-event-decoration-kenya",
    title: "Event Decoration in Kenya: Creating the Look Your Event Deserves",
    date: "2025-07-09",
    excerpt: "Décor sets the tone before a single guest arrives. Here's how Kenyan event decorators work, what different decoration styles cost, and how to get a beautiful result on any budget.",
    tags: ["MyJoyfulDay", "Decoration", "Events"],
    coverImage: mjdDecoration.coverImage,
    content: mjdDecoration.content,
  },
  {
    slug: "myjoyfullday-kisumu-event-planning",
    title: "Event Planning in Kisumu: The Guide for Kenya's Lakeside City",
    date: "2025-07-10",
    excerpt: "Kisumu has a thriving events scene with its own distinct character. Here's how to plan events in the lakeside city  -  venues, vendors, logistics, and the things that make Kisumu events unique.",
    tags: ["MyJoyfulDay", "Kisumu", "Events"],
    coverImage: mjdKisumu.coverImage,
    content: mjdKisumu.content,
  },
  {
    slug: "myjoyfullday-whatsapp-invitations",
    title: "WhatsApp Event Invitations: The Smart Way to Invite Guests in Kenya",
    date: "2025-07-11",
    excerpt: "Printed cards are fading. WhatsApp invitations are how Kenyans actually invite guests. Here's how to do it well  -  and how MyJoyfulDay creates shareable digital invitations automatically.",
    tags: ["MyJoyfulDay", "WhatsApp", "Invitations"],
    coverImage: mjdWhatsappInvitations.coverImage,
    content: mjdWhatsappInvitations.content,
  },
  {
    slug: "myjoyfullday-event-budgeting-kenya",
    title: "Event Budgeting in Kenya: A Realistic Guide to Planning Costs",
    date: "2025-07-12",
    excerpt: "Kenyan events frequently run over budget  -  not because people are careless, but because the true costs aren't clear at the start. Here's how to budget accurately and where to find savings.",
    tags: ["MyJoyfulDay", "Budget", "Events"],
    coverImage: mjdBudgeting.coverImage,
    content: mjdBudgeting.content,
  },
  {
    slug: "myjoyfullday-house-party-planning",
    title: "House Party Planning in Kenya: How to Host at Home Without the Stress",
    date: "2025-07-13",
    excerpt: "A well-run house party is one of the best event experiences you can create. Here's how to plan one in Kenya  -  from invitations and catering to managing the guest list and the morning after.",
    tags: ["MyJoyfulDay", "House Party", "Kenya"],
    coverImage: mjdHouseParty.coverImage,
    content: mjdHouseParty.content,
  },
  {
    slug: "myjoyfullday-engagement-strategy",
    title: "Event Engagement That Lasts: How to Build Excitement Before, During, and After Your Event",
    date: "2025-07-15",
    excerpt: "Sending an invitation is the start of the conversation, not the end. Here's how to build genuine engagement with your guests from save-the-date to the morning after.",
    tags: ["MyJoyfulDay", "Events", "Kenya"],
    coverImage: mjdEngagement.coverImage,
    content: mjdEngagement.content,
  },

  // ─── New TellusJobs posts ─────────────────────────────────────────────────

  {
    slug: "tellusjobs-salary-negotiation-kenya",
    title: "Salary Negotiation in Kenya: How to Get Paid What You're Worth",
    date: "2025-07-01",
    excerpt: "Most Kenyan professionals accept the first offer. The ones who negotiate  -  using the right tactics, with the right data  -  consistently earn more. Here's the complete guide.",
    tags: ["TellusJobs", "Salary", "Career"],
    coverImage: tjSalary.coverImage,
    content: tjSalary.content,
  },
  {
    slug: "tellusjobs-remote-work-kenya",
    title: "Remote Work in Kenya: Opportunities, Challenges, and How to Succeed",
    date: "2025-07-02",
    excerpt: "Remote work has opened up global opportunities for Kenyan professionals. Here's how to find remote roles, build the right setup, and compete effectively for international positions.",
    tags: ["TellusJobs", "Remote Work", "Kenya"],
    coverImage: tjRemote.coverImage,
    content: tjRemote.content,
  },
  {
    slug: "tellusjobs-interview-tips-kenya",
    title: "Job Interview Tips for Kenya: How to Walk In Confident and Walk Out With an Offer",
    date: "2025-07-03",
    excerpt: "Kenyan job interviews have their own dynamics. Here's what hiring managers actually look for, the most common mistakes, and how to prepare so thoroughly that nerves become irrelevant.",
    tags: ["TellusJobs", "Interview", "Career"],
    coverImage: tjInterview.coverImage,
    content: tjInterview.content,
  },
  {
    slug: "tellusjobs-resume-writing-kenya",
    title: "CV Writing for Kenya: How to Write a CV That Gets You Interviews",
    date: "2025-07-04",
    excerpt: "Kenyan hiring managers see hundreds of CVs. Most are forgettable. Here's how to write one that stands out  -  what to include, what to cut, and how AI is changing the game.",
    tags: ["TellusJobs", "CV", "Career"],
    coverImage: tjResume.coverImage,
    content: tjResume.content,
  },
  {
    slug: "tellusjobs-tech-jobs-kenya-2025",
    title: "Tech Jobs in Kenya 2025: What's Hiring, What's Paying, and How to Get In",
    date: "2025-07-05",
    excerpt: "Kenya's tech sector is one of Africa's most active. Here's the state of tech hiring in 2025  -  the roles in demand, realistic salaries, the top employers, and how to break in.",
    tags: ["TellusJobs", "Tech Jobs", "Kenya"],
    coverImage: tjTech.coverImage,
    content: tjTech.content,
  },
  {
    slug: "tellusjobs-ngo-jobs-kenya",
    title: "NGO Jobs in Kenya: How to Break In and Build a Career in the Development Sector",
    date: "2025-07-06",
    excerpt: "Kenya's development sector employs tens of thousands. Here's how to find NGO jobs, what hiring looks for, the realistic salary picture, and how TellusJobs aggregates development sector vacancies.",
    tags: ["TellusJobs", "NGO", "Career"],
    coverImage: tjNgo.coverImage,
    content: tjNgo.content,
  },
  {
    slug: "tellusjobs-career-change-kenya",
    title: "Career Change in Kenya: How to Switch Industries Without Starting from Zero",
    date: "2025-07-07",
    excerpt: "Changing careers in Kenya feels daunting. The professionals who do it successfully share common approaches. Here's the practical guide to making a deliberate career change work.",
    tags: ["TellusJobs", "Career Change", "Kenya"],
    coverImage: tjCareerChange.coverImage,
    content: tjCareerChange.content,
  },
  {
    slug: "tellusjobs-linkedin-profile-kenya",
    title: "LinkedIn Profile Optimisation for Kenyan Professionals: The Complete Guide",
    date: "2025-07-08",
    excerpt: "LinkedIn is how Kenyan professionals get found by recruiters. Here's how to optimise every section of your profile to attract the right opportunities  -  with Kenya-specific advice.",
    tags: ["TellusJobs", "LinkedIn", "Career"],
    coverImage: tjLinkedin.coverImage,
    content: tjLinkedin.content,
  },
  {
    slug: "tellusjobs-entry-level-jobs-kenya",
    title: "Entry Level Jobs in Kenya: The Honest Guide for Fresh Graduates",
    date: "2025-07-09",
    excerpt: "Breaking into the Kenyan job market without experience is genuinely hard. Here's the honest picture  -  where entry-level roles actually are, how to compete, and how to get your first break.",
    tags: ["TellusJobs", "Entry Level", "Graduate"],
    coverImage: tjEntry.coverImage,
    content: tjEntry.content,
  },
  {
    slug: "tellusjobs-graduate-jobs-kenya",
    title: "Graduate Jobs in Kenya: What to Expect and How to Land Your First Role",
    date: "2025-07-10",
    excerpt: "University graduation in Kenya is both an achievement and the start of a competitive journey. Here's how to navigate the graduate job market with strategy rather than hope.",
    tags: ["TellusJobs", "Graduate", "Kenya"],
    coverImage: tjGraduate.coverImage,
    content: tjGraduate.content,
  },
  {
    slug: "tellusjobs-banking-finance-jobs-kenya",
    title: "Banking and Finance Jobs in Kenya: Salaries, Requirements, and How to Get Hired",
    date: "2025-07-11",
    excerpt: "Kenya's banking sector is one of the most active employers of graduates. Here's the full picture of banking and finance careers in Kenya  -  roles, salaries, requirements, and hiring patterns.",
    tags: ["TellusJobs", "Banking", "Finance"],
    coverImage: tjBanking.coverImage,
    content: tjBanking.content,
  },
  {
    slug: "tellusjobs-remote-freelance-kenya",
    title: "Remote Freelancing for Kenyan Professionals: How to Earn Internationally from Kenya",
    date: "2025-07-12",
    excerpt: "Kenyan freelancers are earning international rates from Nairobi, Mombasa, and Kisumu. Here's how to build a freelance career that crosses borders  -  platforms, rates, payment, and positioning.",
    tags: ["TellusJobs", "Freelance", "Remote Work"],
    coverImage: tjFreelance.coverImage,
    content: tjFreelance.content,
  },
  {
    slug: "tellusjobs-professional-network-kenya",
    title: "Professional Networking in Kenya: Building the Relationships That Build Your Career",
    date: "2025-07-13",
    excerpt: "Who you know is a statistically significant variable in Kenyan career outcomes. Here's how to build a professional network that actually opens doors  -  on LinkedIn, at events, and in WhatsApp groups.",
    tags: ["TellusJobs", "Networking", "Career"],
    coverImage: tjNetwork.coverImage,
    content: tjNetwork.content,
  },
  {
    slug: "tellusjobs-job-search-strategy-kenya",
    title: "How to Build a Job Search Strategy That Works in Kenya",
    date: "2025-07-14",
    excerpt: "Checking LinkedIn and BrighterMonday daily is not a strategy. Here's the structured three-layer approach that produces better results in Kenya's unique job market.",
    tags: ["TellusJobs", "Job Search", "Kenya"],
    coverImage: tjJobStrategy.coverImage,
    content: tjJobStrategy.content,
  },
  {
    slug: "tellusjobs-workplace-skills-kenya",
    title: "The Skills Kenyan Employers Are Actually Looking For in 2025",
    date: "2025-07-15",
    excerpt: "Beyond the CV buzzwords  -  here's what hiring managers across Kenya's major sectors consistently say they need and consistently struggle to find. Including what's changed in the last two years.",
    tags: ["TellusJobs", "Skills", "Career"],
    coverImage: tjWorkplaceSkills.coverImage,
    content: tjWorkplaceSkills.content,
  },

  // ─── New Tellus posts ─────────────────────────────────────────────────────

  {
    slug: "tellus-ai-productivity-kenya",
    title: "How AI Is Transforming Productivity for Kenyan Professionals",
    date: "2025-07-01",
    excerpt: "AI is compressing the productivity gap in ways that matter specifically for Kenya's business landscape. Here's where the gains are largest and how Kenyan businesses are capturing them.",
    tags: ["Tellus", "AI", "Productivity"],
    coverImage: tAiProductivity.coverImage,
    content: tAiProductivity.content,
  },
  {
    slug: "tellus-whatsapp-business-api",
    title: "WhatsApp Business API in Kenya: What It Is, How It Works, and How to Use It",
    date: "2025-07-02",
    excerpt: "The WhatsApp Business API is categorically different from the WhatsApp Business App. Here's everything Kenyan businesses need to know to access it, use it, and comply with its requirements.",
    tags: ["Tellus", "WhatsApp", "API"],
    coverImage: tWhatsappApi.coverImage,
    content: tWhatsappApi.content,
  },
  {
    slug: "tellus-n8n-workflow-automation",
    title: "n8n Workflow Automation for Kenyan Businesses: A Complete Guide",
    date: "2025-07-03",
    excerpt: "n8n is one of the most powerful and affordable workflow automation platforms for Kenyan SMEs. Here's what it is, how it works, and the automation patterns that produce the highest returns.",
    tags: ["Tellus", "n8n", "Automation"],
    coverImage: tN8n.coverImage,
    content: tN8n.content,
  },
  {
    slug: "tellus-mpesa-api-integration",
    title: "M-Pesa API Integration (Daraja): A Developer's Guide for Kenyan Applications",
    date: "2025-07-04",
    excerpt: "The Daraja API is the most important payment integration any Kenyan developer can build. Here's the complete guide  -  from account setup through STK Push implementation and common gotchas.",
    tags: ["Tellus", "M-Pesa", "API"],
    coverImage: tMpesa.coverImage,
    content: tMpesa.content,
  },
  {
    slug: "tellus-automation-small-business-kenya",
    title: "Automation for Small Businesses in Kenya: Where to Start and What to Prioritise",
    date: "2025-07-05",
    excerpt: "Practical, affordable automation is more accessible to Kenyan SMEs than ever. Here's where automation delivers the most value, which tools work, and how to start without being overwhelmed.",
    tags: ["Tellus", "Automation", "SME"],
    coverImage: tSmallBiz.coverImage,
    content: tSmallBiz.content,
  },
  {
    slug: "tellus-future-of-work-kenya",
    title: "The Future of Work in Kenya: AI, Automation, and What It Means for Kenyan Professionals",
    date: "2025-07-06",
    excerpt: "Which roles are most exposed to AI? Which are protected? What new work is being created? A grounded assessment of how AI and automation are changing work in Kenya.",
    tags: ["Tellus", "AI", "Future of Work"],
    coverImage: tFutureWork.coverImage,
    content: tFutureWork.content,
  },
  {
    slug: "tellus-customer-support-automation",
    title: "Customer Support Automation for Kenyan Businesses: Scale Without Scaling Headcount",
    date: "2025-07-07",
    excerpt: "Automation lets Kenyan businesses handle 3 - 5x the inquiry volume with the same team  -  because it handles repetitive inquiries while humans focus on the conversations that actually need them.",
    tags: ["Tellus", "Customer Support", "Automation"],
    coverImage: tCxAutomation.coverImage,
    content: tCxAutomation.content,
  },
  {
    slug: "tellus-ecommerce-automation-kenya",
    title: "E-Commerce Automation in Kenya: From Order to Delivery Without Manual Effort",
    date: "2025-07-08",
    excerpt: "Manual e-commerce operations don't scale. Here's how automation transforms every stage of the Kenyan e-commerce order lifecycle  -  from M-Pesa payment to delivery confirmation.",
    tags: ["Tellus", "E-Commerce", "Automation"],
    coverImage: tEcommerce.coverImage,
    content: tEcommerce.content,
  },
  {
    slug: "tellus-ai-tools-kenyan-business",
    title: "The Best AI Tools for Kenyan Businesses in 2025: A Practical Evaluation",
    date: "2025-07-09",
    excerpt: "A clear-eyed assessment of which AI tools are worth using for Kenyan businesses  -  what each does well, what it costs, and how it fits the Kenyan context.",
    tags: ["Tellus", "AI Tools", "Kenya"],
    coverImage: tAiTools.coverImage,
    content: tAiTools.content,
  },
  {
    slug: "tellus-building-whatsapp-bots-business",
    title: "Building WhatsApp Bots for Business: The Complete Technical and Strategic Guide",
    date: "2025-07-10",
    excerpt: "WhatsApp bots are the most impactful technology investment most Kenyan businesses can make. Here's everything  -  strategic decisions, technical approaches, and conversation design principles.",
    tags: ["Tellus", "WhatsApp", "Chatbot"],
    coverImage: tWaBots.coverImage,
    content: tWaBots.content,
  },
  {
    slug: "tellus-smart-notifications-productivity",
    title: "Smart Notifications vs. Notification Overload: How Tellus Decides What You Need to Know",
    date: "2025-07-11",
    excerpt: "The problem isn't notifications  -  it's undiscriminating notifications. Here's the philosophy behind Tellus's notification intelligence and the architecture that makes context-awareness work.",
    tags: ["Tellus", "Productivity", "Notifications"],
    coverImage: tSmartNotif.coverImage,
    content: tSmartNotif.content,
  },
  {
    slug: "tellus-startup-tech-stack-kenya",
    title: "The Kenyan Startup Tech Stack in 2025: What to Build With and Why",
    date: "2025-07-12",
    excerpt: "Technology stack decisions made early create the foundation for everything else. Here's the stack that most Kenyan startups should use  -  and the principles that should guide the choice.",
    tags: ["Tellus", "Tech Stack", "Startup"],
    coverImage: tTechStack.coverImage,
    content: tTechStack.content,
  },
  {
    slug: "tellus-data-privacy-africa",
    title: "Data Privacy in Africa: What Kenyan Businesses and Professionals Need to Know",
    date: "2025-07-13",
    excerpt: "Kenya's Data Protection Act places clear legal obligations on organisations that process personal data. Here's what the law requires and how AI and automation tools fit within it.",
    tags: ["Tellus", "Data Privacy", "Kenya"],
    coverImage: tPrivacy.coverImage,
    content: tPrivacy.content,
  },
  {
    slug: "tellus-ai-vs-traditional-tools",
    title: "AI Tools vs. Traditional Business Software: What Kenyan Businesses Should Actually Use",
    date: "2025-07-14",
    excerpt: "AI is not always the answer. A clear-eyed view of where AI genuinely outperforms traditional tools, where traditional tools are still better, and where combining both produces the best outcomes.",
    tags: ["Tellus", "AI", "Business Tools"],
    coverImage: tAiVsTraditional.coverImage,
    content: tAiVsTraditional.content,
  },

  // ─── AutoShine posts ──────────────────────────────────────────────────────

  {
    slug: "autoshine-car-wash-nairobi-guide",
    title: "The Complete Guide to Car Wash Services in Nairobi: Finding the Best, Knowing What to Expect",
    date: "2025-07-01",
    excerpt: "Nairobi's car wash ecosystem spans everything from informal roadside operators to professional detailing studios. Here's how to navigate it and why AutoShine makes it easier.",
    tags: ["AutoShine", "Nairobi", "Car Wash"],
    coverImage: asNairobiGuide.coverImage,
    content: asNairobiGuide.content,
  },
  {
    slug: "autoshine-car-detailing-kenya",
    title: "Car Detailing in Kenya: What It Is, Why It Matters, and What to Expect",
    date: "2025-07-02",
    excerpt: "Car detailing goes far beyond a car wash. Here's what professional detailing actually involves in Kenya, the different service levels available, and how to find a genuinely qualified detailer.",
    tags: ["AutoShine", "Detailing", "Kenya"],
    coverImage: asDetailing.coverImage,
    content: asDetailing.content,
  },
  {
    slug: "autoshine-mobile-car-wash-kenya",
    title: "Mobile Car Wash Services in Kenya: Convenience That Comes to You",
    date: "2025-07-03",
    excerpt: "AutoShine's mobile car wash brings professional-quality washing to your home, office, or parking lot. Here's how it works, what services are available, and why it's the smart choice for Nairobi drivers.",
    tags: ["AutoShine", "Mobile", "Car Wash"],
    coverImage: asMobile.coverImage,
    content: asMobile.content,
  },
  {
    slug: "autoshine-car-maintenance-tips-kenya",
    title: "Car Maintenance Tips for Kenyan Drivers: Keeping Your Vehicle in Top Condition",
    date: "2025-07-04",
    excerpt: "Kenya's roads, climate, and driving conditions create maintenance demands that standard schedules don't anticipate. Here's the practical maintenance guide every Kenyan car owner needs.",
    tags: ["AutoShine", "Maintenance", "Kenya"],
    coverImage: asMaintenance.coverImage,
    content: asMaintenance.content,
  },
  {
    slug: "autoshine-ceramic-coating-kenya",
    title: "Ceramic Coating in Kenya: The Complete Guide to Long-Term Paint Protection",
    date: "2025-07-05",
    excerpt: "Ceramic coating is the most significant advancement in automotive paint protection of the past two decades. Here's everything about it  -  what it does, what it costs, and how to get it done right in Kenya.",
    tags: ["AutoShine", "Ceramic Coating", "Detailing"],
    coverImage: asCeramic.coverImage,
    content: asCeramic.content,
  },
  {
    slug: "autoshine-car-interior-cleaning",
    title: "Car Interior Cleaning in Kenya: A Professional's Guide to a Truly Clean Cabin",
    date: "2025-07-06",
    excerpt: "Professional interior cleaning transforms the driving experience and protects upholstery value. Here's what it actually involves and why 'vacuum included' often means very little.",
    tags: ["AutoShine", "Interior", "Detailing"],
    coverImage: asInterior.coverImage,
    content: asInterior.content,
  },
  {
    slug: "autoshine-waterless-car-wash",
    title: "Waterless Car Wash: What It Is, When to Use It, and the Truth About Kenyan Roads",
    date: "2025-07-07",
    excerpt: "Waterless washing is genuinely useful in the right situations and genuinely damaging in the wrong ones. Here's the honest guide for Kenyan car owners.",
    tags: ["AutoShine", "Waterless", "Car Wash"],
    coverImage: asWaterless.coverImage,
    content: asWaterless.content,
  },
  {
    slug: "autoshine-car-polish-wax-kenya",
    title: "Car Polishing and Waxing in Kenya: Understanding Paint Enhancement and Protection",
    date: "2025-07-08",
    excerpt: "Polish and wax are two of the most confused concepts in car care. Here's what each actually does, when you need which, and the products worth using in Kenya.",
    tags: ["AutoShine", "Polish", "Wax"],
    coverImage: asPolishWax.coverImage,
    content: asPolishWax.content,
  },
  {
    slug: "autoshine-fleet-car-washing-kenya",
    title: "Fleet Car Washing in Kenya: Managing Vehicle Presentation Across a Corporate Fleet",
    date: "2025-07-09",
    excerpt: "Corporate vehicle presentation is a dimension of brand management that many Kenyan businesses underinvest in. Here's how professional fleet washing programmes work and why they're worth it.",
    tags: ["AutoShine", "Fleet", "Corporate"],
    coverImage: asFleet.coverImage,
    content: asFleet.content,
  },
  {
    slug: "autoshine-start-car-wash-business-kenya",
    title: "How to Start a Car Wash Business in Kenya: A Complete Guide",
    date: "2025-07-10",
    excerpt: "Car washing is one of Kenya's most accessible and resilient businesses. Here's the complete guide from initial planning through operation  -  models, costs, location, equipment, staffing, and pricing.",
    tags: ["AutoShine", "Business", "Kenya"],
    coverImage: asStartBiz.coverImage,
    content: asStartBiz.content,
  },
  {
    slug: "autoshine-eco-friendly-car-wash",
    title: "Eco-Friendly Car Washing in Kenya: Water Conservation and Environmental Responsibility",
    date: "2025-07-11",
    excerpt: "Kenya faces real water stress. Here's how eco-friendly car washing reduces water consumption, what products minimise environmental impact, and how AutoShine approaches environmental responsibility.",
    tags: ["AutoShine", "Eco-Friendly", "Water"],
    coverImage: asEco.coverImage,
    content: asEco.content,
  },
  {
    slug: "autoshine-car-scratch-removal-kenya",
    title: "Car Scratch Removal in Kenya: What Can Be Fixed, What Can't, and How to Fix It",
    date: "2025-07-12",
    excerpt: "Many scratches that look serious can be polished away. Others require professional bodywork. Here's how to assess what you're dealing with and what your options are.",
    tags: ["AutoShine", "Scratch", "Paint"],
    coverImage: asScratch.coverImage,
    content: asScratch.content,
  },
  {
    slug: "autoshine-windshield-care-kenya",
    title: "Windshield and Glass Care for Kenyan Drivers: Seeing Clearly and Staying Safe",
    date: "2025-07-13",
    excerpt: "Your windshield is your most critical safety component after your brakes. Here's how to clean it properly, deal with chips promptly, and keep glass in condition to see Kenya's roads clearly.",
    tags: ["AutoShine", "Windshield", "Safety"],
    coverImage: asWindshield.coverImage,
    content: asWindshield.content,
  },
  {
    slug: "autoshine-tyre-care-kenya",
    title: "Tyre Care for Kenyan Drivers: Safety, Maintenance, and Making the Right Choice",
    date: "2025-07-14",
    excerpt: "Tyres are the only contact between your vehicle and Kenya's demanding roads. Here's the complete guide to tyre pressure, tread depth, selection, rotation, and what AutoShine checks at every service.",
    tags: ["AutoShine", "Tyres", "Safety"],
    coverImage: asTyres.coverImage,
    content: asTyres.content,
  },
  {
    slug: "autoshine-rainy-season-car-care",
    title: "Car Care During Kenya's Rainy Season: What Every Driver Needs to Know",
    date: "2025-07-15",
    excerpt: "Rain doesn't clean your car  -  it deposits acidic compounds that etch paint if left to dry. Here's the complete guide to protecting your vehicle through Kenya's long and short rains.",
    tags: ["AutoShine", "Rainy Season", "Kenya"],
    coverImage: asRainy.coverImage,
    content: asRainy.content,
  },
  {
    slug: "autoshine-car-wash-frequency-kenya",
    title: "How Often Should You Wash Your Car in Kenya? A Practical Guide",
    date: "2025-07-16",
    excerpt: "The answer depends on where you drive and how. Here's the specific washing frequency for every Kenyan driving situation  -  from daily Nairobi commuters to coastal residents to rural drivers.",
    tags: ["AutoShine", "Car Wash", "Kenya"],
    coverImage: asFrequency.coverImage,
    content: asFrequency.content,
  },
  {
    slug: "autoshine-luxury-car-detailing-kenya",
    title: "Luxury Car Detailing in Kenya: White Glove Care for High-Value Vehicles",
    date: "2025-07-17",
    excerpt: "Luxury vehicles require specialist knowledge, techniques, and products. Here's how AutoShine's luxury detailing service handles Nairobi's most valuable vehicles  -  and what makes it different.",
    tags: ["AutoShine", "Luxury", "Detailing"],
    coverImage: asLuxury.coverImage,
    content: asLuxury.content,
  },
  {
    slug: "autoshine-nairobi-car-care-traffic",
    title: "How Nairobi Traffic Affects Your Car: What to Know and How to Protect Your Vehicle",
    date: "2025-07-18",
    excerpt: "Stop-and-go Nairobi traffic is harder on vehicles than most drivers realise  -  mechanically, externally, and for interior air quality. Here's what's happening and how to counteract it.",
    tags: ["AutoShine", "Nairobi", "Traffic"],
    coverImage: asTraffic.coverImage,
    content: asTraffic.content,
  },
  {
    slug: "autoshine-subscription-car-wash",
    title: "AutoShine Subscription Car Wash Plans: Regular Care Without the Hassle",
    date: "2025-07-19",
    excerpt: "AutoShine subscriptions make professional car care automatic  -  set your frequency, set your location, and your vehicle gets washed on schedule with no booking effort required.",
    tags: ["AutoShine", "Subscription", "Car Wash"],
    coverImage: asSubscription.coverImage,
    content: asSubscription.content,
  },
  {
    slug: "autoshine-best-car-wash-products-kenya",
    title: "The Best Car Wash Products in Kenya: A Professional's Guide to What Actually Works",
    date: "2025-07-20",
    excerpt: "An honest assessment of car care products available in Kenya  -  what categories matter, what to look for, which brands are worth the price, and where to source professional products in Nairobi.",
    tags: ["AutoShine", "Products", "Car Care"],
    coverImage: asProducts.coverImage,
    content: asProducts.content,
  },
];

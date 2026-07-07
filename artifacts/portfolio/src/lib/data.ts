import myjoyfulldayImg from "@assets/screenshots/myjoyfullday_com.png";
import tellusjobsImg from "@assets/screenshots/tellusjobs_site.png";

export const projects = [
  {
    slug: "myjoyfullday",
    title: "MyJoyfulDay",
    url: "https://myjoyfullday.com",
    shortDescription: "Create stunning event websites directly from WhatsApp in 60 seconds.",
    description:
      "Event planning is overwhelming. Adding a new tool to learn makes it worse. MyJoyfulDay removes the friction entirely — you create a full event website by sending a WhatsApp message. No dashboard. No forms. No learning curve. Just your event, live in 60 seconds.",
    stats: ["50K+ events created", "1M+ guests reached", "4.9 rating"],
    tech: ["Next.js", "Supabase", "WhatsApp API", "Tailwind CSS"],
    colors: { primary: "#D4A735", bg: "#FBF9F4", text: "#111111" },
    challenges: [
      "Building a reliable real-time pipeline from a WhatsApp message to a published website — handling edge cases, retries, and ambiguous inputs.",
      "Designing a vendor marketplace that scales without becoming a ghost town — solving both sides of the network effect problem.",
      "Multi-language support in a conversational interface, where users express the same thing in a hundred different ways.",
    ],
    keyFeatures: [
      "Zero-UI website creation via WhatsApp",
      "Vendor marketplace for weddings & events",
      "Live event page with RSVP and guest management",
      "Multi-language support",
      "50K+ events. No dashboard needed.",
    ],
    image: myjoyfulldayImg,
  },
  {
    slug: "tellusjobs",
    title: "TellusJobs",
    url: "https://tellusjobs.site",
    shortDescription:
      "AI-powered job matching for Kenya. Upload your CV. Get matched. Auto-apply.",
    description:
      "The Kenyan job market is fragmented across dozens of portals — LinkedIn, NGO boards, bank career pages, government listings. Job seekers waste hours copy-pasting the same application. TellusJobs consolidates it all, matches your CV to real vacancies, and drafts ready-to-send application packs. Automatically.",
    keyFeatures: [
      "CV upload → instant AI-powered job matching",
      "Auto-generated cover letters tuned to each role",
      "Aggregates jobs from 10+ Kenyan job portals daily",
      "Relevancy scoring so you apply where it counts",
      "Workspace sync — manage all your applications in one place",
    ],
    tech: ["Next.js", "AI / LLM", "Web Scraping", "Supabase", "Tailwind CSS"],
    colors: { primary: "#FD5D28", bg: "#0F172B", text: "#FFFFFF" },
    challenges: [
      "Scraping and normalizing unstructured job data from portals with zero API access — handling layout changes, auth walls, and inconsistent formats.",
      "Fine-tuning LLMs for accurate CV-to-job matching in Kenyan market context, where job titles and requirements don't follow global norms.",
      "Generating cover letters that sound human, not robotic — quality that makes people actually submit the application.",
    ],
    image: tellusjobsImg,
  },
  {
    slug: "tellus",
    title: "Tellus",
    url: "https://tellus.site",
    shortDescription:
      "AI-powered communications platform. Think faster. Write better. Act sooner.",
    description:
      "Tellus is the platform under everything — an AI assistant that doesn't just answer questions but anticipates what you need next. It sits at the intersection of communication, productivity, and intelligent automation. Built for people who think in systems and move fast.",
    keyFeatures: [
      "Context-aware AI assistant for teams and individuals",
      "Intelligent task prioritization and follow-up drafting",
      "Deep integrations with existing communication workflows",
      "Proactive suggestions without being noisy",
      "Designed for people who are already moving fast",
    ],
    tech: ["Next.js", "AI / LLM", "Tailwind CSS", "Supabase"],
    colors: { primary: "#064E3B", bg: "#FAFAF8", text: "#1A1A1A" },
    challenges: [
      "Designing a latency-free AI interaction pattern — users feel every millisecond of lag when they're in flow.",
      "Balancing proactive intelligence with user autonomy — an assistant that suggests without interrupting.",
      "Maintaining state and context across complex, long-running threads without losing coherence.",
    ],
    image: null,
  },
];

export const blogPosts = [
  {
    slug: "vibe-coding-with-ai",
    title: "Vibe Coding Is Real — Here's How I Actually Do It",
    date: "2025-03-10",
    excerpt:
      "It's not about ignoring architecture. It's about entering a state where you and the AI are finishing each other's sentences — and shipping before doubt sets in.",
    tags: ["AI", "Productivity"],
    content: `Vibe coding isn't a meme to me. It's a real methodology.

The idea is simple: when you're building, there are two modes — deliberation and flow. Most developers spend too much time in deliberation mode, second-guessing structure, naming conventions, whether to use a library or roll their own. Vibe coding collapses deliberation by making the stakes feel lower.

Here's what it looks like in practice:

I open a new file. I describe what I want in plain English to the AI, not as a spec but as a conversation. The AI gives me something close. I reshape it. We go back and forth until I feel something click. That click is the vibe.

The key insight: the AI handles the mechanical certainty (syntax, patterns, boilerplate) so I can hold the creative uncertainty (what should this actually do? what would a real user feel here?). 

The work is still mine. The ideas are still mine. The AI just means I spend less time in the gap between "I know what I want" and "I've typed enough to see it."

Ship first. Understand it later. Usually you were right.`,
  },
  {
    slug: "building-myjoyfullday",
    title: "How I Built a Website Builder That Lives Inside WhatsApp",
    date: "2025-01-18",
    excerpt:
      "The best UI is no UI. Here's what happened when I moved an entire website creation flow into a conversation.",
    tags: ["Case Study", "Product"],
    content: `The original insight was uncomfortable: people planning weddings and birthdays don't want another tool. They want their event to exist online. Those are different things.

Every website builder asks you to learn something — templates, blocks, drag and drop. We decided to ask for nothing. Just send us a WhatsApp message and we'll do the rest.

The technical challenge was deceptively hard. A WhatsApp message is unstructured. "I'm having Amara's birthday on Saturday at my place" needs to become a live webpage with the right name, date, time, and venue. You need to parse intent, not just text.

We built a pipeline:
1. Inbound webhook catches the message
2. LLM extracts structured event data with a high-confidence threshold
3. Template selection happens based on inferred event type
4. Page is generated and published
5. URL sent back over WhatsApp in under 10 seconds

The failure cases were the real work. Ambiguous messages. Incomplete details. Users who tested the system by sending "hello." We built a recovery flow where the bot asks one clarifying question at a time — never a form, always a conversation.

50K events later, the thing I'm most proud of isn't the technology. It's that people who've never heard the word "frontend" are publishing websites.`,
  },
  {
    slug: "shipping-three-products",
    title: "What Three Shipped Products Taught Me About When to Launch",
    date: "2024-11-05",
    excerpt:
      "Not 'launch early and often.' Something harder: knowing the exact moment your product earns the right to be seen.",
    tags: ["Product", "Lessons"],
    content: `Every piece of startup advice says launch early. They're right and also completely unhelpful.

Early is relative. Early for a two-sided marketplace looks different from early for a tool. The question isn't "is it early?" It's "is the core loop working?"

After shipping MyJoyfulDay, TellusJobs, and Tellus, I have one rule: you can launch with rough edges everywhere except the main thing. If the main thing is "create an event website from WhatsApp in 60 seconds," that 60-second experience needs to be smooth. Everything else — the dashboard, the profile page, the settings — can be ugly.

The second thing I learned: distribution is not marketing. Distribution is the structural answer to "how does the next user hear about this?" For MyJoyfulDay, every person who receives an event invitation is a potential builder. That's built-in distribution. For TellusJobs, every person who gets a job is a testimonial. I was thinking about distribution before I wrote a single line of code.

The third thing: don't optimize what you haven't validated. I spent two weeks perfecting a feature in TellusJobs that users never asked for and never used. Those two weeks hurt. Build the hypothesis. Ship it. Look at the data. Then refine.

Shipping is a skill. You get better at it by doing it. The first one is always the hardest. Make it count — not by making it perfect, but by making the thing that matters most work exactly right.`,
  },
];

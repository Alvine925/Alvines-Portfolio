import myjoyfulldayImg from "@assets/screenshots/myjoyfullday_com.png";
import tellusjobsImg from "@assets/screenshots/tellusjobs_site.png";
import autoshineImg from "@assets/screenshots/autoshine_co_ke.png";
import tellusImg from "@assets/screenshots/site_tellusplatform_site.png";

export const projects = [
  {
    slug: "myjoyfullday",
    title: "MyJoyfulDay",
    url: "https://myjoyfullday.com",
    shortDescription: "Event platform + WhatsApp AI bot serving 50K+ events and 1M+ guests.",
    description:
      "Event planning is already stressful. Adding a new tool to learn makes it worse. MyJoyfulDay removes the friction entirely — powered by Jitabi, a WhatsApp AI bot I built on Meta's Cloud API that lets anyone create a full event website by simply sending a message. No dashboard. No forms. No learning curve.",
    stats: ["50K+ events created", "1M+ guests reached", "4.9 rating"],
    tech: ["WhatsApp Cloud API", "AI / LLM", "Next.js", "Supabase", "Tailwind CSS"],
    colors: { primary: "#D4A735", bg: "#FBF9F4", text: "#111111" },
    challenges: [
      "Building a reliable real-time pipeline from a WhatsApp message to a published website — handling ambiguous inputs, retries, and edge cases in natural language.",
      "Designing Jitabi's conversational flow so it feels human, not robotic — guiding users through dialogue, not forms.",
      "Scaling a vendor marketplace on both sides of the network effect problem simultaneously.",
    ],
    keyFeatures: [
      "Jitabi — WhatsApp AI event-planning bot (Meta Cloud API)",
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
      "The Kenyan job market is fragmented across dozens of portals — LinkedIn, NGO boards, bank career pages, government listings. Job seekers waste hours copy-pasting the same application. TellusJobs consolidates everything, matches your CV to real vacancies using AI, and drafts ready-to-send application packs automatically.",
    keyFeatures: [
      "CV upload → instant AI-powered job matching",
      "Auto-generated cover letters tuned to each role",
      "Aggregates jobs from 10+ Kenyan portals daily",
      "Relevancy scoring so you apply where it counts",
      "Workspace sync — manage all applications in one place",
    ],
    tech: ["Next.js", "AI / LLM", "n8n Automation", "Supabase", "Tailwind CSS"],
    colors: { primary: "#FD5D28", bg: "#0F172B", text: "#FFFFFF" },
    challenges: [
      "Scraping and normalizing unstructured job data from portals with zero API access — handling layout changes, auth walls, and inconsistent formats.",
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
      "Tellus is the platform under everything — an AI assistant that doesn't just answer questions but anticipates what you need next. It sits at the intersection of communication, productivity, and intelligent automation. Built for people who think in systems and move fast.",
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
      "Designing a latency-free AI interaction pattern — users feel every millisecond of lag when they're in flow.",
      "Balancing proactive intelligence with user autonomy — an assistant that suggests without interrupting.",
      "Maintaining state and context across complex, long-running threads without losing coherence.",
    ],
    image: tellusImg,
  },
  {
    slug: "autoshine",
    title: "Autoshine",
    url: "https://autoshine.co.ke",
    shortDescription: "E-commerce storefront for a Kenyan car-care retailer — catalog, filtering, and payments.",
    description:
      "Autoshine needed more than a brochure site — they needed a storefront that could move product. Built a full e-commerce experience with a complete product catalog, smart filtering, recently-viewed features, combo deals, and integrated M-Pesa + card payment setup. The kind of site that earns its keep.",
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
      "Translating a physical retail experience into a digital one — organizing products in a way that matches how customers actually think about car care.",
      "Payment setup for the Kenyan market — integrating M-Pesa and card options reliably.",
      "Performance optimization so the catalog stays fast even with a large product count.",
    ],
    image: autoshineImg,
  },
  {
    slug: "derivchampions",
    title: "Deriv Champions",
    url: "https://derivchampions.com",
    shortDescription: "Conversion-focused site for a Kenyan forex mentor — 500+ traders trained.",
    description:
      "Deriv Champions is the online home of a Kenyan forex mentor with a proven track record — 500+ traders trained. The site needed to do one thing above all else: convert visitors into students. Built a focused, credibility-first website that communicates authority and drives enrollment.",
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
      "Building credibility fast — forex is a trust-sensitive space and visitors decide in seconds whether to stay.",
      "Structuring content to guide a visitor from 'skeptic' to 'enrolled student' without friction.",
      "Optimizing for mobile users on slow connections — the core audience in Kenya.",
    ],
    image: null,
  },
];

export const blogPosts = [
  {
    slug: "whatsapp-as-infrastructure",
    title: "WhatsApp Is Infrastructure — Stop Treating It Like a Marketing Channel",
    date: "2025-03-10",
    excerpt:
      "250 million Kenyans don't use your app. But almost all of them have WhatsApp. Here's how I stopped building dashboards and started building bots.",
    tags: ["WhatsApp", "Automation"],
    content: `Most founders build an app and then think about how to get users to download it. I flipped that.

When I was building MyJoyfulDay, the hardest insight wasn't technical — it was distribution. Our target users (people planning weddings and birthdays in Kenya) weren't going to download a new app for a one-time event. But every single one of them had WhatsApp open already.

So we moved the entire product into WhatsApp.

Jitabi — our event-planning bot — lets anyone create a live event website by sending a message. No download. No sign-up. No dashboard. Just: "I'm having Amara's birthday on Saturday at my house" → live event page, published, URL sent back in under 10 seconds.

Here's what building Jitabi taught me about WhatsApp as infrastructure:

**1. It's not a chatbot, it's an interface.**
The mistake most builders make is treating a WhatsApp bot like a FAQ answerer. Jitabi is an interface — a replacement for a form, a dashboard, a signup flow. Design it that way. Every message is a UI state.

**2. Ambiguity is the hard problem.**
"Saturday" could mean this Saturday or next. "My place" could mean anything. You need an extraction layer (LLM) plus a recovery flow for when confidence is low. Jitabi asks one clarifying question at a time — never a list of questions, always a conversation.

**3. WhatsApp has business infrastructure built in.**
Read receipts, delivery confirmation, phone number verification, push notifications — all included, all trusted by users. You don't have to build any of it.

WhatsApp isn't just where your users are. It's where trust already lives. Build there.`,
  },
  {
    slug: "automation-before-hiring",
    title: "Before You Hire, Automate: What Two Years in Operations Taught Me",
    date: "2025-01-18",
    excerpt:
      "Running a coworking space while building products taught me something most founders miss — the best headcount is the one you never added.",
    tags: ["Automation", "Operations"],
    content: `I ran Kisumu Hub while simultaneously building digital products. That sounds impossible. It wasn't — but it required one hard rule: never do manually what can be automated.

Here's what that looked like in practice:

**Member onboarding** — Instead of manually sending welcome emails, access instructions, and introductions, I built a workflow in n8n that triggered the moment someone signed up. It sent the right information at the right time, tagged them in our CRM, and added them to the right WhatsApp group. Zero manual steps.

**Event coordination** — Booking confirmations, reminders, venue prep checklists — all automated. The only human in the loop was the part that genuinely required human judgment.

**Reporting** — Weekly member stats, revenue summaries, occupancy rates — pulled, formatted, and delivered to my inbox every Monday morning. I didn't produce these reports. I read them.

The result: I could run meaningful operations with far less overhead than you'd expect — because I wasn't doing the work that shouldn't need a human.

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

When I was building the Autoshine e-commerce site, I couldn't just follow the standard WooCommerce playbook. My users are on mobile, often on slower connections, and they expect M-Pesa as a payment option — not a bolt-on, but the primary flow. A site that loads in 2 seconds on fiber in Nairobi might take 8 seconds on 3G in Kisumu. That 6-second difference is the difference between a sale and a bounce.

When I built Deriv Champions for a forex mentor, I couldn't just copy a generic "online course" template. Forex in Kenya carries specific trust challenges — there are a lot of scams. The site had to lead with credibility signals, real testimonials, verifiable track record, before asking anyone to enroll. Context isn't just UX. It's the entire product strategy.

**The things that change when you build for Kenya:**

- **Payment**: M-Pesa first, cards second. Integrate what people actually use.
- **Connectivity**: Assume mobile, assume variable bandwidth. Lazy load everything. Keep bundles small. Test on real devices.
- **Trust**: Your credibility has to be visible in seconds. Social proof, recognizable partners, clear contact info.
- **Language**: Even English-speaking users code-switch. Your copy needs to feel locally grounded, not imported.

The biggest mistake I see from builders here is importing a Silicon Valley product playbook unchanged. The fundamentals of good product thinking travel — but the specifics don't.

Context is not a constraint to work around. It's a feature that, if you design for it, becomes your competitive advantage.`,
  },
];

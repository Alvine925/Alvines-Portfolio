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

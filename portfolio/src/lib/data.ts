import myjoyfulldayImg from "/screenshots/myjoyfullday_com.png";
import tellusjobsImg from "/screenshots/tellusjobs_site.png";
import autoshineImg from "/screenshots/autoshine_co_ke.png";
import tellusImg from "/screenshots/site_tellusplatform_site.png";
import lunarCmsImg from "/screenshots/lunar-cms-light.svg";
import derivChampionsImg from "/screenshots/derivchampions.svg";

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
    title: "Tellus Platform",
    url: "https://site.tellusplatform.site/",
    shortDescription: "One dashboard. All your databases. Link, query, and manage everything from a single place.",
    description:
      "Tellus is a database unifier platform — connect Postgres, MySQL, MongoDB, Supabase, PlanetScale, or any database you already use, and manage all of them from a single dashboard. No more switching between five different DB clients, re-entering credentials, or losing context between environments. Tellus gives you one place to query, inspect, and govern every database across every project.",
    problem:
      "Developers and teams running multiple projects end up managing databases in isolation: different tools for different engines, credentials scattered across .env files, no single view of what's live where. As the stack grows, the cognitive overhead of context-switching between database clients becomes a real drag on velocity.",
    solution:
      "Tellus lets you link any number of databases — across engines and environments — and interact with all of them from one unified dashboard. Connect once, then query, browse, and manage across every linked database without switching tools. Supports multiple database types out of the box and is designed to grow with your stack.",
    keyFeatures: [
      "Link multiple databases across any engine (Postgres, MySQL, MongoDB, Supabase, and more)",
      "Unified dashboard — manage every connected DB from one interface",
      "Visual table browser with inline data editing",
      "Query runner with multi-database context switching",
      "Environment management: dev, staging, and production side by side",
      "Access control — invite collaborators with role-based permissions",
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "MongoDB", "MySQL", "Tailwind CSS"],
    colors: { primary: "#10B981", bg: "#064E3B", text: "#ECFDF5" },
    challenges: [
      "Normalizing schema introspection across wildly different database engines — what Postgres calls a 'table', MongoDB calls a 'collection', and they behave differently in every meaningful way.",
      "Building a query interface that feels fast even when connected to remote databases with variable latency.",
      "Secure credential storage: connection strings contain secrets and need to be stored and transmitted carefully across environments.",
    ],
    image: tellusImg,
  },
  {
    slug: "lunar-cms",
    title: "Lunar CMS",
    url: "#",
    shortDescription: "Headless CMS with REST API delivery, social media auto-posting, and full content lifecycle management.",
    description:
      "Lunar is a headless CMS built for teams who want their content to live in one place and appear everywhere. Write once: your blog posts, news articles, product listings, FAQs, and announcements render on any site via REST API. Lunar also auto-publishes to your social media channels — Instagram, X, Facebook, LinkedIn — the moment content goes live. One dashboard to write, schedule, publish, and track engagement across every channel.",
    problem:
      "Most businesses manage content in three or four different places: a CMS for the website, a scheduling tool for social media, a separate product catalog, and a spreadsheet for FAQs. Every piece of content gets adapted and posted manually, which means delays, inconsistencies, and a lot of copy-pasting. Teams end up doing the same work four times.",
    solution:
      "Lunar centralises the entire content lifecycle. Manage blogs, news, articles, products, FAQs, and custom content types from one dashboard. Every content type is available via REST API, so your site — regardless of framework — pulls live data. When you publish, Lunar can automatically format and post to your connected social channels. Engagement metrics from all platforms flow back into the same dashboard.",
    keyFeatures: [
      "REST API delivery — render content on any site or app",
      "Auto-post to Instagram, X, Facebook, and LinkedIn on publish",
      "Manage blogs, news, articles, products, FAQs, and custom content types",
      "Content scheduling — write now, publish at the right time",
      "Engagement dashboard — likes, comments, reach, and clicks in one view",
      "Media library with image optimisation built in",
      "Multi-author with role-based access (Editor, Publisher, Admin)",
    ],
    tech: ["Next.js", "Node.js", "REST API", "Supabase", "Social APIs", "Tailwind CSS"],
    colors: { primary: "#818CF8", bg: "#0F0F1A", text: "#E0E7FF" },
    challenges: [
      "Social media API rate limits and approval requirements vary wildly per platform — Instagram's API alone requires a business account, app review, and webhook setup before a single post goes out.",
      "Designing a content schema flexible enough to handle blogs, products, and FAQs without forcing teams into rigid templates.",
      "Real-time engagement aggregation across multiple social APIs with different data models, rate limits, and auth flows.",
    ],
    image: lunarCmsImg,
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
    image: derivChampionsImg,
  },
];

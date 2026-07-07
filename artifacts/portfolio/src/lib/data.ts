import { z } from "zod";
import myjoyfulldayImg from "@assets/screenshots/myjoyfullday_com.png";
import tellusjobsImg from "@assets/screenshots/tellusjobs_site.png";

export const projects = [
  {
    slug: "myjoyfullday",
    title: "MyJoyfulDay",
    url: "https://myjoyfullday.com",
    shortDescription: "Create stunning event websites directly from WhatsApp in 60 seconds.",
    description: "An event website builder that lets anyone create stunning event websites directly from WhatsApp in 60 seconds. Targets weddings, birthdays, graduations. Includes a vendor marketplace.",
    stats: ["50K+ events created", "1M+ guests reached", "4.9 rating"],
    tech: ["Next.js", "Supabase", "WhatsApp API", "Tailwind CSS"],
    colors: { primary: "#D4A735", bg: "#FBF9F4", text: "#111111" },
    challenges: [
      "Building a reliable real-time WhatsApp to website generation pipeline.",
      "Structuring a scalable vendor marketplace architecture.",
      "Implementing seamless multi-language support for diverse user bases."
    ],
    image: myjoyfulldayImg,
  },
  {
    slug: "tellusjobs",
    title: "TellusJobs",
    url: "https://tellusjobs.site",
    shortDescription: "AI-powered job matching platform designed for the Kenyan market.",
    description: "An AI-powered job matching platform for Kenya. Consolidates active vacancies from top Kenyan job portals (LinkedIn Kenya, Safaricom Careers, NGO Vacancies, etc.), matches them to your CV, and auto-drafts application packs.",
    keyFeatures: [
      "CV upload for instant job matching",
      "Auto-generated cover letters & emails",
      "Daily personalized updates",
      "Relevancy scoring",
      "Workspace synchronization"
    ],
    tech: ["Next.js", "AI/LLM", "Web Scraping", "Tailwind CSS", "Supabase"],
    colors: { primary: "#FD5D28", bg: "#0F172B", text: "#FFFFFF" },
    challenges: [
      "Scraping and normalizing unstructured job data from dozens of fragmented portals.",
      "Fine-tuning LLMs for accurate CV-to-job matching within local contexts.",
      "Ensuring high-quality auto-drafted application materials."
    ],
    image: tellusjobsImg,
  },
  {
    slug: "tellus",
    title: "Tellus Platform",
    url: "https://tellus.site",
    shortDescription: "The core AI-powered productivity and communications tool.",
    description: "The core Tellus platform — an AI-powered productivity and communications tool acting as a smart assistant for both teams and individuals.",
    keyFeatures: [
      "Intelligent task prioritization",
      "Context-aware communication drafting",
      "Deep integrations with existing workflows"
    ],
    tech: ["Next.js", "AI/LLM integrations", "Tailwind CSS"],
    colors: { primary: "#064E3B", bg: "#FAFAF8", text: "#1A1A1A" },
    challenges: [
      "Designing a latency-free AI assistant interaction pattern.",
      "Balancing proactive suggestions with user autonomy.",
      "Maintaining state and context across complex, long-running threads."
    ],
    image: null,
  }
];

export const blogPosts = [
  {
    slug: "vibe-coding-with-ai",
    title: "Vibe Coding: The Future of Shipping Fast",
    date: "2024-10-15",
    excerpt: "How leaning into the flow state with AI pairs can 10x your output.",
    tags: ["Productivity", "AI", "Engineering"],
    content: "Vibe coding isn't about ignoring architecture; it's about trusting your intuition and letting AI handle the boilerplate. When you can articulate the 'what' and 'why', the 'how' becomes a conversation rather than a chore. In this post, I explore how shifting from a pure implementation mindset to a directorial one has allowed me to ship products like TellusJobs in record time."
  },
  {
    slug: "building-myjoyfullday",
    title: "From WhatsApp to Web: Building MyJoyfulDay",
    date: "2024-08-22",
    excerpt: "The technical challenges of creating a zero-UI website builder.",
    tags: ["Next.js", "Architecture", "Case Study"],
    content: "The best UI is no UI. MyJoyfulDay was born from a simple observation: people organizing events are already overwhelmed, and asking them to learn a new dashboard is too much friction. By moving the entire creation flow into WhatsApp—a platform they already live in—we reduced drop-off by 80%. Here's how we orchestrated the webhooks and generation pipeline."
  },
  {
    slug: "indie-hacking-lessons",
    title: "Three Lessons from Shipping Three Products",
    date: "2024-06-10",
    excerpt: "What I learned about distribution, scoping, and knowing when to launch.",
    tags: ["Indie Hacking", "Product", "Lessons"],
    content: "If you aren't slightly embarrassed by your first release, you launched too late. But there's a difference between a rough MVP and a broken one. Through Tellus, TellusJobs, and MyJoyfulDay, I learned that polish should be applied surgically: make the core loop flawless, and let the edge cases be rough. Perfection is the enemy of feedback."
  }
];

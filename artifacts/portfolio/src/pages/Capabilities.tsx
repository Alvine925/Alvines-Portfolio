import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
  }),
};

const capabilities = [
  {
    number: "01",
    title: "WhatsApp AI Bot Development",
    tagline: "Turn WhatsApp into a full product interface.",
    description:
      "Most businesses treat WhatsApp like a notification channel. I build it as a complete interface  -  forms, dashboards, sign-up flows, all replaced by a conversation. I've done this at scale with Jitabi, a bot that created 50K+ events and reached 1M+ guests without a single user downloading an app.",
    proof: "Jitabi (MyJoyfulDay)  -  50K+ events created, 1M+ guests reached.",
    whatYouGet: [
      "Custom conversational flows designed around your actual users",
      "Meta WhatsApp Cloud API integration and verification",
      "NLP and LLM-powered understanding of natural language inputs",
      "Fallback handling, retry logic, and edge-case recovery",
      "Real-time pipelines that trigger backend actions from a message",
      "Ongoing bot training and flow iteration",
    ],
    whoIsThisFor:
      "Businesses whose customers are already on WhatsApp  -  which in Kenya is almost everyone. If you're losing leads because your funnel requires a download or a form, this solves it.",
    tools: ["Meta WhatsApp Cloud API", "OpenAI API", "n8n", "Node.js", "Supabase"],
  },
  {
    number: "02",
    title: "Workflow Automation",
    tagline: "Eliminate the work your team does by hand every day.",
    description:
      "I've run operations at Kisumu Hub while building products in parallel  -  the only way that works is ruthless automation. I've automated member onboarding, event coordination, reporting, CRM tagging, and more. If you can describe a repetitive process, I can automate it.",
    proof: "Kisumu Hub: full member onboarding, event logistics, and weekly reporting  -  all automated, zero manual steps.",
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
  },
  {
    number: "03",
    title: "Web & Platform Development",
    tagline: "Sites that work, not just sites that look good.",
    description:
      "I build full web products  -  event platforms, job boards, AI-powered tools, e-commerce stores. Not templates. Not page builders that fall apart under real traffic. Platforms with real architecture, real integrations, and real users. Every project ships with domain, hosting, and payment setup included.",
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
  },
  {
    number: "04",
    title: "E-commerce & Kenyan Payments",
    tagline: "Sell online, the way Kenyans actually pay.",
    description:
      "Most e-commerce setups built outside Kenya get payments wrong. M-Pesa has to be the primary flow, not an afterthought. I've built full e-commerce experiences for Kenyan retailers: product catalogs, smart filtering, combo deals, M-Pesa and card integration, all optimized for mobile-first shoppers on variable connections.",
    proof: "Autoshine  -  full e-commerce storefront with M-Pesa integration, live product catalog, and combo deal engine.",
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
  },
  {
    number: "05",
    title: "AI & LLM Integration",
    tagline: "Practical AI that connects to your real business operations.",
    description:
      "I don't build AI demos. I build AI pipelines that run in production: CV matching engines, cover letter generators, conversational assistants, content extraction layers. The gap between an AI proof-of-concept and something your users actually trust is engineering discipline and Kenyan market context. I bring both.",
    proof: "TellusJobs  -  AI-powered CV matching and auto cover letter generation for the Kenyan job market.",
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
  },
  {
    number: "06",
    title: "Business Operations & Systems Design",
    tagline: "The strategic layer behind every tool I build.",
    description:
      "Two years running Kisumu Hub while building products taught me something most tech people miss: the bottleneck is rarely the code. It's the process the code is supposed to serve. I map operations before I build anything, so the systems I build actually solve the right problems. This is what makes my work different from someone who just codes what they're told.",
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
  },
];

const proofPoints = [
  { num: "1M+", label: "People reached across products" },
  { num: "50K+", label: "Events on MyJoyfulDay" },
  { num: "500+", label: "Traders trained via Deriv Champions" },
  { num: "5", label: "Products shipped from 0 to live" },
];

export function Capabilities() {
  return (
    <Layout>
      <SEO
        canonical="/capabilities"
        title="Capabilities  -  WhatsApp Bots, Automation, Web Dev & AI Integration"
        description="Six proven capabilities: WhatsApp AI bots, workflow automation with n8n, web and platform development, e-commerce with M-Pesa, AI/LLM integration, and business operations. All backed by shipped products with real users."
        keywords="WhatsApp AI bot services Kenya, workflow automation services Kenya, web development services Kisumu, M-Pesa integration developer, n8n automation Kenya, AI integration Kenya, e-commerce Kenya developer"
      />
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">

        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-20">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-6">
            What I actually do
          </p>
          <h1 className="font-serif text-2xl md:text-3xl font-bold leading-snug mb-6 max-w-2xl">
            Six capabilities. All proven in production.<br />
            <span className="text-muted-foreground font-normal">Not side projects. Real users, real scale.</span>
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
            Every capability listed here is backed by something I've actually built and shipped. I don't pitch
            services I haven't delivered. If you see it here, I've done it for real.
          </p>
        </motion.div>

        {/* Proof strip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-b border-border/40 py-8 mb-20 flex flex-wrap gap-10 md:gap-16"
        >
          {proofPoints.map(({ num, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <p className="font-serif text-2xl md:text-3xl font-bold text-foreground">{num}</p>
              <p className="text-xs text-muted-foreground mt-1 max-w-[130px] leading-snug">{label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Capabilities list */}
        <div className="space-y-0 divide-y divide-border/40">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.number}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.05}
              className="py-16"
              data-testid={`capability-${cap.number}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">

                {/* Left: number + title */}
                <div className="lg:col-span-1">
                  <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase block mb-3">
                    {cap.number}
                  </span>
                  <h2 className="font-serif text-xl md:text-2xl font-bold mb-2">{cap.title}</h2>
                  <p className="text-sm text-primary font-medium italic mb-5">{cap.tagline}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cap.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs text-muted-foreground border border-border/50 rounded px-2 py-0.5 font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: detail */}
                <div className="lg:col-span-2 space-y-7">
                  <p className="text-base text-muted-foreground leading-relaxed">{cap.description}</p>

                  {/* Proof point */}
                  <div className="border-l-2 border-primary/40 pl-4">
                    <p className="text-xs font-semibold tracking-wide text-primary uppercase mb-1">Proven by</p>
                    <p className="text-sm text-foreground font-medium">{cap.proof}</p>
                  </div>

                  {/* What you get */}
                  <div>
                    <p className="text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase mb-4">
                      What you get
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {cap.whatYouGet.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 size={13} className="text-primary mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Who this is for */}
                  <div className="bg-muted/40 rounded-lg px-4 py-4">
                    <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase mb-1.5">
                      Who this is for
                    </p>
                    <p className="text-sm text-foreground leading-relaxed">{cap.whoIsThisFor}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-border/40 pt-16 mt-4"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div className="max-w-lg">
              <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-4">Ready to work</p>
              <h2 className="font-serif text-xl md:text-2xl font-bold leading-snug mb-3">
                Know which capability you need? Let's talk about it.
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I work best on clear problems. Come with the problem, I'll tell you honestly whether I can solve it and how.
              </p>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 h-11 px-8 bg-primary text-primary-foreground text-sm font-semibold rounded-md hover:bg-primary/90 transition-colors"
              >
                Get in touch <ArrowRight size={14} />
              </Link>
              <Link
                href="/projects"
                className="text-xs text-center text-muted-foreground hover:text-primary transition-colors"
              >
                See the work first
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}

import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const skills = [
  { name: "Next.js", group: "Frontend" },
  { name: "React", group: "Frontend" },
  { name: "TypeScript", group: "Frontend" },
  { name: "Tailwind CSS", group: "Frontend" },
  { name: "Vite", group: "Frontend" },
  { name: "Node.js", group: "Backend" },
  { name: "Supabase", group: "Backend" },
  { name: "PostgreSQL", group: "Backend" },
  { name: "Drizzle ORM", group: "Backend" },
  { name: "AI / LLM", group: "AI" },
  { name: "Prompt Engineering", group: "AI" },
  { name: "Vibe Coding", group: "Method" },
];

const timeline = [
  {
    year: "2025",
    title: "Tellus",
    description:
      "Launched Tellus — an AI-powered communications and productivity platform. Designing intelligent assistants that feel like an extension of your thinking.",
    active: true,
  },
  {
    year: "2024",
    title: "TellusJobs",
    description:
      "Built and shipped TellusJobs, solving the fragmented Kenyan job market with AI-matching and auto-apply. Real users. Real applications. Real impact.",
    active: false,
  },
  {
    year: "2023",
    title: "MyJoyfulDay",
    description:
      "Created a zero-friction event website builder via WhatsApp. Grew to 50K+ events and over a million guests. Proved that the best UI is sometimes no UI.",
    active: false,
  },
  {
    year: "Before",
    title: "Learning to Ship",
    description:
      "Years of frontend engineering, product thinking, and watching ideas die in Notion. One day decided to just build the thing. Haven't stopped since.",
    active: false,
  },
];

export function About() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-20 md:py-28">

        {/* Intro */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-4 flex items-center gap-2">
            <span className="w-6 h-px bg-primary inline-block" />
            The person behind the code
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-8">
            Hi, I'm Alvine.<br />
            <span className="italic text-muted-foreground font-normal">I build what I believe in.</span>
          </h1>
          <div className="space-y-5 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            <p>
              I'm a vibe coder and product builder based in Kenya. I don't wait for
              permission, budget, or a co-founder — I start with a problem that matters
              and build until it works.
            </p>
            <p>
              My edge is speed without sloppiness. I move fast because I've built enough
              to know what corners are safe to cut and which ones aren't. I use AI as a
              creative partner, not a crutch. The ideas are mine. The craft is mine.
            </p>
            <p>
              I'm most energized when a product solves a real pain in a context that
              people say "can't be done here." Africa, WhatsApp, manual job applications —
              I see infrastructure gaps as product opportunities.
            </p>
          </div>
        </motion.div>

        {/* Philosophy callout */}
        <motion.blockquote
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.1}
          className="relative border-l-4 border-primary pl-6 my-16 py-2"
        >
          <p className="font-serif text-2xl md:text-3xl text-foreground leading-snug italic">
            "Ship it. Refine it. Ship it again. The product is never done — only paused."
          </p>
          <cite className="block mt-4 text-sm text-muted-foreground not-italic">
            — Alvine, every single time
          </cite>
        </motion.blockquote>

        {/* Skills */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.05}
          className="mb-20"
        >
          <h2 className="font-serif text-2xl font-bold mb-8">Tools I Reach For</h2>
          <div className="flex flex-wrap gap-2.5">
            {skills.map((skill, i) => (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, scale: 0.88 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.28, delay: i * 0.04 }}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                data-testid={`tag-skill-${i}`}
              >
                {skill.group === "AI" && (
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                )}
                {skill.name}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.05}
        >
          <h2 className="font-serif text-2xl font-bold mb-10">How I got here</h2>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-12 pl-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="relative"
                  data-testid={`timeline-item-${i}`}
                >
                  <div
                    className={`absolute -left-10 top-1 w-4 h-4 rounded-full ring-4 ring-background flex-shrink-0 ${
                      item.active ? "bg-primary" : "bg-border"
                    }`}
                  />
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="text-xs font-bold tracking-widest text-primary uppercase">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.1}
          className="mt-20 pt-12 border-t border-border/60 flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/projects"
            data-testid="link-about-to-projects"
            className="inline-flex h-12 items-center gap-2 rounded-md bg-primary px-7 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:gap-3"
          >
            See what I've built <ArrowRight size={15} />
          </Link>
          <Link
            href="/contact"
            data-testid="link-about-to-contact"
            className="inline-flex h-12 items-center rounded-md border border-border px-7 text-sm font-semibold transition-colors hover:bg-secondary"
          >
            Get in touch
          </Link>
        </motion.div>
      </div>
    </Layout>
  );
}

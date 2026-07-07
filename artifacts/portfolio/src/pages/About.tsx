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
  { name: "WhatsApp Cloud API" },
  { name: "AI Bot Development" },
  { name: "n8n Automation" },
  { name: "Make (Integromat)" },
  { name: "OpenAI API" },
  { name: "WordPress" },
  { name: "Wix" },
  { name: "Next.js" },
  { name: "React" },
  { name: "Tailwind CSS" },
  { name: "Supabase" },
  { name: "E-commerce" },
  { name: "Business Operations" },
  { name: "Community Building" },
];

const timeline = [
  {
    year: "Now",
    title: "Builder & Automation Specialist",
    description:
      "Building WhatsApp AI bots, web platforms, and workflow automations for businesses that want to move faster without hiring more people. Projects across event tech, e-commerce, forex, and beyond.",
    active: true,
  },
  {
    year: "2023–2025",
    title: "Hub Manager — Kisumu Hub",
    description:
      "Ran daily operations at one of Kisumu's most vibrant coworking spaces. Managed community, logistics, and growth while simultaneously building digital systems on the side — proving you can run operations and ship products at the same time.",
    active: false,
  },
  {
    year: "2023",
    title: "MyJoyfulDay — First big launch",
    description:
      "Built Jitabi, the WhatsApp AI event-planning bot powering MyJoyfulDay. Watching it reach 50K+ events and over a million guests proved that WhatsApp is infrastructure, not just a chat app.",
    active: false,
  },
  {
    year: "Before",
    title: "Strategy, systems, and learning to ship",
    description:
      "Business strategy, operations thinking, and an obsession with removing friction from how organizations work. Started seeing technology not as a tool but as a lever — and decided to become the person who pulls it.",
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
            <span className="italic text-muted-foreground font-normal">Operations meets automation.</span>
          </h1>
          <div className="space-y-5 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            <p>
              I'm passionate about business and the systems that make it work — strategy, growth,
              operations, and the technology that ties it all together. Based in Kenya, I bring a
              blend of strategic thinking, hands-on execution, and a bias toward building things that
              actually get used.
            </p>
            <p>
              Over the last two years I've worn two hats simultaneously: running operations at
              Kisumu Hub — one of Kisumu's leading coworking spaces — while building digital systems
              for businesses that wanted to move faster. WhatsApp AI bots. Workflow automations.
              Full-stack web platforms. Not as separate things — as one interconnected practice.
            </p>
            <p>
              My mission is simple: remove friction. Free up human time. Help good businesses scale
              using automation and smart tooling, not headcount.
            </p>
          </div>
        </motion.div>

        {/* What I build */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.05}
          className="mb-20 grid md:grid-cols-3 gap-6"
        >
          {[
            {
              title: "WhatsApp AI Bots",
              desc: "Conversational flows, automated customer support, and AI-powered assistants built on Meta's WhatsApp Cloud API. Real businesses. Real conversations. Zero extra staff.",
            },
            {
              title: "Workflow Automation",
              desc: "Connecting apps and eliminating repetitive work using n8n and Make. Integrating OpenAI and other AI APIs into processes that used to eat hours every week.",
            },
            {
              title: "Websites & Platforms",
              desc: "From event platforms to e-commerce stores to conversion-focused business sites — WordPress, Wix, and custom builds with full domain, hosting, and payment setup.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="p-6 rounded-xl border border-border bg-card"
              data-testid={`card-service-${i}`}
            >
              <div className="w-8 h-1 bg-primary rounded mb-4" />
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.1}
          className="relative border-l-4 border-primary pl-6 my-16 py-2"
        >
          <p className="font-serif text-2xl md:text-3xl text-foreground leading-snug italic">
            "Operations without automation is just managed chaos. Automation without operations context is just expensive chaos."
          </p>
          <cite className="block mt-4 text-sm text-muted-foreground not-italic">
            — Alvine, figuring this out in real time
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
          <h2 className="font-serif text-2xl font-bold mb-8">Tools & Technologies</h2>
          <div className="flex flex-wrap gap-2.5">
            {skills.map((skill, i) => (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, scale: 0.88 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.28, delay: i * 0.04 }}
                className="inline-flex items-center px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                data-testid={`tag-skill-${i}`}
              >
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
          className="mb-20"
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

        {/* Currently open to */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.05}
          className="mb-16 p-6 rounded-xl border border-primary/30 bg-primary/5"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-primary uppercase">Currently open to</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "Hybrid Operations + Tech Roles",
              "Automation Specialist",
              "WhatsApp / AI Bot Developer",
              "Web Developer",
              "Business Operations Manager",
              "Freelance Projects",
            ].map((role) => (
              <span
                key={role}
                className="text-sm px-3 py-1.5 bg-background border border-border rounded-full text-foreground font-medium"
              >
                {role}
              </span>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Remote or hybrid. Kenya-based.{" "}
            <a
              href="mailto:otienoalvine925@gmail.com"
              className="text-primary hover:underline font-medium"
            >
              otienoalvine925@gmail.com
            </a>
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.1}
          className="pt-8 border-t border-border/60 flex flex-col sm:flex-row gap-4"
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

import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const skills = [
  "WhatsApp Cloud API", "AI Bot Development", "n8n Automation",
  "Make (Integromat)", "OpenAI API", "WordPress", "Wix",
  "Next.js", "React", "Tailwind CSS", "Supabase", "E-commerce",
  "Business Operations", "Community Building",
];

const timeline = [
  {
    year: "Now",
    title: "Builder & Automation Specialist",
    description: "Building WhatsApp AI bots, web platforms, and workflow automations for businesses that want to move faster without hiring more people.",
    active: true,
  },
  {
    year: "2023–2025",
    title: "Hub Manager — Kisumu Hub",
    description: "Ran daily operations at one of Kisumu's most vibrant coworking spaces — while simultaneously building digital systems on the side.",
    active: false,
  },
  {
    year: "2023",
    title: "MyJoyfulDay — First big launch",
    description: "Built Jitabi, the WhatsApp AI event-planning bot. Watching it reach 50K+ events proved that WhatsApp is infrastructure, not just a chat app.",
    active: false,
  },
  {
    year: "Before",
    title: "Strategy, systems & learning to ship",
    description: "Business strategy, operations thinking, and an obsession with removing friction. Started seeing technology as a lever — and decided to become the person who pulls it.",
    active: false,
  },
];

export function About() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-32">

        {/* Intro */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-24">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-8">
            The person behind the work
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.04] tracking-tight mb-12">
            Hi, I'm Alvine.<br />
            <em className="italic font-normal text-muted-foreground">Operations meets automation.</em>
          </h1>
          <div className="grid md:grid-cols-2 gap-8 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm passionate about business and the systems that make it work — strategy, growth,
              operations, and the technology that ties it all together. Based in Kisumu, Kenya, I
              bring a blend of strategic thinking, hands-on execution, and a bias toward building
              things that actually get used.
            </p>
            <p>
              Over the last two years I've worn two hats simultaneously: running operations at
              Kisumu Hub while building digital systems for businesses that wanted to move faster.
              WhatsApp AI bots. Workflow automations. Full web platforms. Not as separate things —
              as one interconnected practice.
            </p>
          </div>
        </motion.div>

        {/* Large quote */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.05}
          className="border-t border-border/40 py-20 mb-24"
        >
          <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] max-w-3xl">
            "Operations without automation is managed chaos. Automation without operations context is expensive chaos."
          </blockquote>
          <cite className="block mt-6 text-sm text-muted-foreground not-italic tracking-wide">
            — Alvine, figuring this out in real time
          </cite>
        </motion.div>

        {/* What I do — three columns, no cards */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.05}
          className="border-t border-border/40 py-20 mb-24"
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-12">What I do</p>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                num: "01",
                title: "WhatsApp AI Bots",
                desc: "Conversational flows, automated support, and AI-powered assistants on Meta's WhatsApp Cloud API. Real businesses. Real conversations. Zero extra staff.",
              },
              {
                num: "02",
                title: "Workflow Automation",
                desc: "Connecting apps and eliminating repetitive work with n8n and Make. Integrating OpenAI and other AI APIs into processes that used to eat hours every week.",
              },
              {
                num: "03",
                title: "Websites & Platforms",
                desc: "From event platforms to e-commerce stores — WordPress, Wix, and custom builds with full domain, hosting, and payment setup included.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-testid={`service-${i}`}
              >
                <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-4 block">
                  {item.num}
                </span>
                <h3 className="font-serif text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.05}
          className="border-t border-border/40 py-20 mb-24"
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-10">Tools & Technologies</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="text-base md:text-lg font-medium text-foreground/80 hover:text-foreground transition-colors cursor-default"
                data-testid={`skill-${i}`}
              >
                {skill}
                {i < skills.length - 1 && <span className="ml-6 text-border">·</span>}
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
          className="border-t border-border/40 py-20 mb-24"
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-12">How I got here</p>
          <div className="space-y-14">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="grid md:grid-cols-4 gap-4 md:gap-12"
                data-testid={`timeline-item-${i}`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${item.active ? "bg-primary" : "bg-border"}`}
                  />
                  <span className="text-xs font-bold tracking-[0.15em] text-primary uppercase pt-0.5">
                    {item.year}
                  </span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Open to */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.05}
          className="border-t border-border/40 py-20 mb-20"
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Currently open to</p>
          </div>
          <div className="flex flex-wrap gap-3 mb-6">
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
                className="text-sm font-medium text-muted-foreground border-b border-border/60 pb-0.5 hover:text-foreground hover:border-foreground transition-colors cursor-default"
              >
                {role}
              </span>
            ))}
          </div>
          <a
            href="mailto:otienoalvine925@gmail.com"
            className="text-sm text-primary hover:underline font-medium"
          >
            otienoalvine925@gmail.com
          </a>
        </motion.div>

        {/* CTA */}
        <div className="border-t border-border/40 pt-12 flex flex-col sm:flex-row gap-4">
          <Link
            href="/projects"
            data-testid="link-about-to-projects"
            className="inline-flex items-center gap-2 text-base font-semibold text-foreground hover:text-primary transition-colors group"
          >
            See what I've built
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <span className="hidden sm:inline text-border">·</span>
          <Link
            href="/contact"
            data-testid="link-about-to-contact"
            className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Get in touch →
          </Link>
        </div>
      </div>
    </Layout>
  );
}

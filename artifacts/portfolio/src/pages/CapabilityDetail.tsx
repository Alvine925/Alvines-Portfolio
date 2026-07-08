import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { capabilities } from "@/lib/capabilities";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
  }),
};

export function CapabilityDetail() {
  const { slug } = useParams();
  const cap = capabilities.find((c) => c.slug === slug);

  if (!cap) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-6 py-32 text-center">
          <h1 className="font-serif text-4xl font-bold mb-4">Capability not found</h1>
          <p className="mb-8 text-muted-foreground">
            The capability you're looking for doesn't exist or has been removed.
          </p>
          <Link href="/capabilities" className="text-primary hover:underline text-sm font-medium">
            ← Back to capabilities
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        canonical={`/capabilities/${cap.slug}`}
        title={`${cap.title} — Capability`}
        description={cap.description}
        keywords={`${cap.title}, ${cap.tools.join(", ")}, Kenya, Alvine`}
      />

      {/* Hero */}
      <div className="w-full relative overflow-hidden border-b border-border/30" style={{ minHeight: "480px" }}>
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={cap.heroImage}
            alt={cap.heroImageAlt}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay — dark at bottom, semi-dark at top */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-black/80" />
        </div>

        {/* Content on top of image */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 md:py-36">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <Link
              href="/capabilities"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider mb-10 text-white/60 hover:text-white transition-colors"
            >
              <ArrowLeft size={13} /> All Capabilities
            </Link>
            <p className="text-xs font-semibold tracking-[0.2em] text-emerald-400 uppercase mb-5">
              Capability {cap.number}
            </p>
            <h1 className="font-serif text-2xl md:text-4xl font-bold leading-snug mb-5 max-w-3xl text-white">
              {cap.title}
            </h1>
            <p className="text-lg md:text-xl text-white/75 font-medium italic mb-8 max-w-2xl">
              {cap.tagline}
            </p>
            <div className="flex flex-wrap gap-2">
              {cap.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-xs text-white/70 border border-white/20 rounded px-2.5 py-1 font-medium backdrop-blur-sm bg-white/5"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20">

          {/* Main content */}
          <div className="lg:col-span-2 space-y-20">

            {/* Overview */}
            <motion.section
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-6">Overview</p>
              <p className="text-base text-muted-foreground leading-relaxed">{cap.overview}</p>
            </motion.section>

            {/* Proof point */}
            <motion.section
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="border-l-2 border-primary/40 pl-5">
                <p className="text-xs font-semibold tracking-wide text-primary uppercase mb-2">Proven by</p>
                <p className="text-sm text-foreground font-medium leading-relaxed">{cap.proof}</p>
              </div>
            </motion.section>

            {/* Process */}
            <motion.section
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-10">How it works</p>
              <div className="space-y-10">
                {cap.process.map((step) => (
                  <div key={step.step} className="grid grid-cols-[3rem_1fr] gap-5">
                    <span className="font-serif text-3xl font-bold text-primary/20 leading-none pt-1">
                      {step.step}
                    </span>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Deep dive sections */}
            {cap.deepDive.map((section, i) => (
              <motion.section
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2 className="font-serif text-xl font-bold mb-5">{section.heading}</h2>
                <p className="text-base text-muted-foreground leading-relaxed">{section.body}</p>
              </motion.section>
            ))}
          </div>

          {/* Sidebar */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="space-y-12"
          >
            {/* CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 bg-primary text-primary-foreground text-sm font-semibold rounded-md hover:bg-primary/90 transition-colors w-full"
            >
              Work with me <ArrowRight size={14} />
            </Link>

            {/* What you get */}
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase mb-5">
                What you get
              </p>
              <ul className="space-y-3">
                {cap.whatYouGet.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 size={13} className="text-primary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcomes */}
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase mb-5">
                Outcomes
              </p>
              <ul className="space-y-3">
                {cap.outcomes.map((outcome) => (
                  <li key={outcome} className="text-sm text-muted-foreground flex gap-2.5">
                    <span className="text-primary mt-1 flex-shrink-0 font-bold text-xs">→</span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>

            {/* Who this is for */}
            <div className="bg-muted/40 rounded-lg p-4">
              <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase mb-2">
                Who this is for
              </p>
              <p className="text-sm text-foreground leading-relaxed">{cap.whoIsThisFor}</p>
            </div>

            {/* Tools */}
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase mb-4">
                Tools & stack
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {cap.tools.map((t) => (
                  <span key={t} className="text-sm text-foreground/70 font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Back link */}
        <div className="mt-20 pt-12 border-t border-border/40">
          <Link
            href="/capabilities"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={14} /> Back to all capabilities
          </Link>
        </div>
      </div>
    </Layout>
  );
}

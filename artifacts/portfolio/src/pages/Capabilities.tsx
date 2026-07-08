import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { capabilities } from "@/lib/capabilities";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
  }),
};

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
        title="Capabilities — WhatsApp Bots, Automation, Web Dev, AI & Business Advisory"
        description="Nine proven capabilities: WhatsApp AI bots, workflow automation, web and platform development, e-commerce with M-Pesa, AI/LLM integration, business operations, business development, idea validation, and business plan review."
        keywords="WhatsApp AI bot services Kenya, workflow automation services Kenya, web development services Kisumu, M-Pesa integration developer, n8n automation Kenya, AI integration Kenya, business development Kenya, business plan review Kenya"
      />
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">

        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-20">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-6">
            What I actually do
          </p>
          <h1 className="font-serif text-2xl md:text-3xl font-bold leading-snug mb-6 max-w-2xl">
            Nine capabilities. All proven in practice.<br />
            <span className="text-muted-foreground font-normal">Technology, operations, and business strategy — in one person.</span>
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
            Every capability listed here is backed by something I've actually built, advised, or run. I don't pitch
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
              className="relative overflow-hidden py-16"
              data-testid={`capability-${cap.number}`}
            >
              {/* Subtle background image */}
              <div className="absolute inset-0 pointer-events-none">
                <img
                  src={cap.heroImage}
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-cover"
                  style={{ opacity: 0.055 }}
                />
                {/* Fade edges so the image blends into the page */}
                <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
                <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/60" />
              </div>

              {/* Content above image */}
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">

                {/* Left: number + title */}
                <div className="lg:col-span-1">
                  <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase block mb-3">
                    {cap.number}
                  </span>
                  <h2 className="font-serif text-xl md:text-2xl font-bold mb-2">{cap.title}</h2>
                  <p className="text-sm text-primary font-medium italic mb-5">{cap.tagline}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {cap.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs text-muted-foreground border border-border/50 rounded px-2 py-0.5 font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/capabilities/${cap.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                  >
                    Full detail <ArrowRight size={12} />
                  </Link>
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

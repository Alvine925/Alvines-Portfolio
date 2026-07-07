import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout";
import { projects } from "@/lib/data";
import alvinePhoto from "@assets/713531308_2391480708041703_8942490288083047707_n_1783423380935.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-12 md:pt-28 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16 items-center">
          {/* Left — text */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="md:col-span-3">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary/20 flex-shrink-0">
                <img
                  src={alvinePhoto}
                  alt="Alvine Otieno"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                Alvine Otieno — Builder & Automation Specialist
              </p>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.02] tracking-tight mb-8">
              I remove<br />
              friction.<br />
              <em className="text-primary not-italic">Businesses scale.</em>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg mb-10 font-light">
              WhatsApp AI bots, workflow automation, and web platforms that do the work businesses are still doing by hand.
            </p>
            <div className="flex flex-wrap items-center gap-8">
              <Link
                href="/projects"
                data-testid="link-view-work"
                className="inline-flex items-center gap-2 text-base font-semibold text-foreground hover:text-primary transition-colors group"
              >
                See my work
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                data-testid="link-contact-cta-hero"
                className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Get in touch →
              </Link>
            </div>
          </motion.div>

          {/* Right — hero portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="md:col-span-2 flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-sm md:max-w-none">
              {/* Green accent behind photo */}
              <div className="absolute -inset-3 rounded-3xl bg-primary/8 -z-10" />
              <div className="overflow-hidden rounded-2xl aspect-[3/4] w-full">
                <img
                  src={alvinePhoto}
                  alt="Alvine Otieno"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-background border border-border/60 rounded-xl px-4 py-3 shadow-sm">
                <p className="text-xs font-semibold text-primary uppercase tracking-wide">Kisumu, Kenya</p>
                <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Available for work
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-t border-b border-border/40">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-wrap gap-12 md:gap-20">
          {[
            { num: "1M+", label: "People reached across projects" },
            { num: "50K+", label: "Events on MyJoyfulDay" },
            { num: "500+", label: "Traders trained via Deriv Champions" },
            { num: "5", label: "Products shipped" },
          ].map(({ num, label }, i) => (
            <motion.div
              key={label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.08}
            >
              <p className="font-serif text-3xl md:text-4xl font-bold text-foreground">{num}</p>
              <p className="text-sm text-muted-foreground mt-1 max-w-[140px] leading-snug">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured projects — editorial list */}
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="flex items-baseline justify-between mb-16">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-3">Selected Work</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">Products I've built</h2>
          </div>
          <Link
            href="/projects"
            className="hidden md:flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
            data-testid="link-all-projects"
          >
            All projects <ArrowRight size={13} />
          </Link>
        </div>

        <div className="space-y-0 divide-y divide-border/40">
          {projects.slice(0, 3).map((project, i) => (
            <motion.div
              key={project.slug}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.1}
              className="group grid grid-cols-1 md:grid-cols-5 gap-8 py-12 items-center"
              data-testid={`row-project-${project.slug}`}
            >
              {/* Image */}
              <div className="md:col-span-2 overflow-hidden rounded-lg aspect-[16/9]">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center rounded-lg"
                    style={{ backgroundColor: project.colors?.bg || "#1e293b" }}
                  >
                    <span
                      className="font-serif text-2xl font-bold"
                      style={{ color: project.colors?.primary || "#fff" }}
                    >
                      {project.title}
                    </span>
                  </div>
                )}
              </div>

              {/* Text */}
              <div className="md:col-span-3">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="text-xs text-muted-foreground font-medium tracking-wide">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-lg">
                  {project.shortDescription}
                </p>
                <div className="flex items-center gap-8">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-3 transition-all"
                    data-testid={`link-project-detail-${project.slug}`}
                  >
                    Case study <ArrowRight size={14} />
                  </Link>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-project-live-${project.slug}`}
                  >
                    Live site ↗
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="pt-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            View all 5 projects <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/40">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-4">Open to Work</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight">
              Got something worth building?
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            <Link
              href="/contact"
              data-testid="link-contact-cta"
              className="inline-flex items-center gap-2 h-12 px-8 bg-primary text-primary-foreground text-sm font-semibold rounded-md hover:bg-primary/90 transition-colors"
            >
              Let's talk <ArrowRight size={15} />
            </Link>
            <a
              href="mailto:otienoalvine925@gmail.com"
              className="text-xs text-center text-muted-foreground hover:text-primary transition-colors"
            >
              otienoalvine925@gmail.com
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

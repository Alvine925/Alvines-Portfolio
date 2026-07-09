import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { capabilities } from "@/lib/capabilities";

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { projects } from "@/lib/data";
import alvinePhoto from "@assets/713531308_2391480708041703_8942490288083047707_n_1783423380935.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
  }),
};

export function Home() {
  return (
    <Layout>
      <SEO
        canonical="/"
        title="WhatsApp AI Bots, Workflow Automation & Web Development · Kisumu, Kenya"
        description="Alvine Otieno builds WhatsApp AI bots, workflow automations, and web platforms for businesses in Kenya and beyond. Based in Kisumu. Available for work."
        keywords="WhatsApp AI bot developer Kenya, workflow automation Kisumu, web developer Kenya, AI chatbot builder, M-Pesa integration developer, business automation Kenya, WhatsApp business bot, n8n automation Kenya"
      />
      {/* Hero */}
      <section
        className="relative w-full min-h-[90vh] flex items-center overflow-hidden"
        style={{
          backgroundImage: `url(${alvinePhoto})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/75 to-background/20" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-36 w-full">
          {/* Left  -  text */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="max-w-2xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary/40 flex-shrink-0">
                <img
                  src={alvinePhoto}
                  alt="Alvine Otieno"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                Alvine Otieno · Vibe Coder
              </p>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold leading-snug tracking-tight mb-6 text-foreground">
              Not a developer.<br />
              A vibe coder.<br />
              <em className="text-primary not-italic">Big difference.</em>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg mb-4 font-light">
              I describe the problem. AI writes the code. Humans review every line.
              Somehow that's produced 5 products real businesses use daily — including
              a WhatsApp bot that's handled 50,000+ events.
            </p>
            <p className="text-sm text-muted-foreground/70 leading-relaxed max-w-md mb-10 italic">
              Unorthodox? Sure. But the software ships, the businesses scale, and nobody's
              doing it by hand anymore.
            </p>
            {/* Vibe-coder badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3 py-1.5 mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-[11px] font-semibold text-primary tracking-wide uppercase">
                AI-assisted · Human-reviewed · Actually works
              </span>
            </div>
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
              <a
                href="https://wa.me/254110486677"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-base font-medium text-[#25D366] hover:text-[#1ebe5d] transition-colors"
              >
                <WhatsAppIcon size={18} />
                +254 110 486 677
              </a>
            </div>

            {/* Floating badge */}
            <div className="inline-flex mt-12 bg-background/80 backdrop-blur-sm border border-border/60 rounded-xl px-4 py-3 shadow-sm">
              <p className="text-xs font-semibold text-primary uppercase tracking-wide">Kisumu, Kenya</p>
              <span className="mx-3 text-border">·</span>
              <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Available for work
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-t border-b border-border/40">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-wrap gap-12 md:gap-20">
          {[
            { num: "50K+", label: "Events on MyJoyfulDay" },
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
              <p className="font-serif text-xl md:text-2xl font-bold text-foreground">{num}</p>
              <p className="text-xs text-muted-foreground mt-1 max-w-[140px] leading-snug">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services teaser */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="flex items-baseline justify-between mb-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-3">What I do</p>
            <h2 className="font-serif text-xl md:text-2xl font-bold">How I can help</h2>
          </div>
          <Link
            href="/capabilities"
            className="hidden md:flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            All capabilities <ArrowRight size={13} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/30 rounded-xl overflow-hidden border border-border/30">
          {capabilities.slice(0, 4).map((cap, i) => (
            <motion.div
              key={cap.slug}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.07}
            >
              <Link
                href={`/capabilities/${cap.slug}`}
                className="group flex flex-col h-full bg-background p-6 hover:bg-muted/50 transition-colors"
              >
                <span className="font-serif text-3xl font-bold text-border/60 group-hover:text-primary/30 transition-colors mb-4 leading-none select-none">
                  {cap.number}
                </span>
                <h3 className="font-serif text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                  {cap.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
                  {cap.tagline}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {cap.tools.slice(0, 3).map((tool) => (
                    <span
                      key={tool}
                      className="text-[10px] font-medium text-muted-foreground bg-muted/80 px-2 py-0.5 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
                  Learn more <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Also:{" "}
            {capabilities.slice(4).map((cap, i) => (
              <span key={cap.slug}>
                <Link href={`/capabilities/${cap.slug}`} className="hover:text-primary transition-colors underline underline-offset-2">
                  {cap.title}
                </Link>
                {i < capabilities.slice(4).length - 1 && ", "}
              </span>
            ))}
          </p>
          <Link
            href="/capabilities"
            className="md:hidden flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            All <ArrowRight size={13} />
          </Link>
        </div>
      </section>

      {/* Featured projects  -  editorial list */}
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-32 border-t border-border/40">
        <div className="flex items-baseline justify-between mb-16">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-3">Selected Work</p>
            <h2 className="font-serif text-xl md:text-2xl font-bold">Products I've built</h2>
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
                <h3 className="font-serif text-lg md:text-xl font-bold mb-3 group-hover:text-primary transition-colors">
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
            <h2 className="font-serif text-xl md:text-2xl font-bold leading-tight">
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

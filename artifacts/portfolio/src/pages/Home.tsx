import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout";
import { projects } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-32 md:pt-36 md:pb-44">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-6 flex items-center gap-2">
            <span className="w-8 h-px bg-primary inline-block" />
            Alvine — Maker & Builder
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-8">
            I don't wait for<br className="hidden md:block" /> permission{" "}
            <span className="italic text-primary">to ship.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-12">
            I'm Alvine — a vibe coder, product builder, and creative technologist. I turn ideas
            into working products fast. Real users. Real problems. Real code.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              data-testid="link-view-work"
              className="inline-flex h-12 items-center gap-2 rounded-md bg-primary px-7 text-sm font-semibold text-primary-foreground shadow transition-all hover:bg-primary/90 hover:gap-3"
            >
              See My Work <ArrowRight size={16} />
            </Link>
            <Link
              href="/about"
              data-testid="link-about-me"
              className="inline-flex h-12 items-center rounded-md border border-border bg-transparent px-7 text-sm font-semibold transition-colors hover:bg-secondary hover:text-foreground"
            >
              About Me
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Divider with numbers */}
      <section className="border-y border-border/60">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-3 gap-4 text-center divide-x divide-border/60">
          {[
            { num: "3", label: "Products Shipped" },
            { num: "1M+", label: "People Reached" },
            { num: "0", label: "Waiting for investors" },
          ].map(({ num, label }, i) => (
            <motion.div
              key={label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.1}
              className="py-2"
            >
              <p className="font-serif text-3xl md:text-4xl font-bold text-foreground">{num}</p>
              <p className="text-sm text-muted-foreground mt-1">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Selected Projects */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-2">
              Selected Work
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Things I've shipped
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            data-testid="link-all-projects"
          >
            All projects <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.12}
              className="group relative flex flex-col rounded-xl border border-border bg-card overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 duration-300"
              data-testid={`card-project-${project.slug}`}
            >
              {project.image ? (
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div
                  className="aspect-[16/9] flex items-center justify-center"
                  style={{ backgroundColor: project.colors?.bg || "#1e293b" }}
                >
                  <span
                    className="font-serif text-2xl font-bold opacity-80"
                    style={{ color: project.colors?.primary || "#fff" }}
                  >
                    {project.title}
                  </span>
                </div>
              )}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {project.shortDescription}
                </p>
                <div className="flex items-center justify-between mt-5 pt-4 border-t border-border/50">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-sm font-semibold text-primary inline-flex items-center gap-1 hover:gap-2 transition-all"
                    data-testid={`link-project-detail-${project.slug}`}
                  >
                    Case study <ArrowRight size={13} />
                  </Link>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-project-live-${project.slug}`}
                  >
                    Live ↗
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="border-t border-border/60 bg-primary/5">
        <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">
              Have an idea worth building?
            </h2>
            <p className="text-muted-foreground">
              I'm always open to a sharp conversation about real problems.
            </p>
          </div>
          <Link
            href="/contact"
            data-testid="link-contact-cta"
            className="flex-shrink-0 inline-flex h-12 items-center gap-2 rounded-md bg-primary px-8 text-sm font-semibold text-primary-foreground shadow transition-all hover:bg-primary/90 hover:gap-3"
          >
            Let's talk <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}

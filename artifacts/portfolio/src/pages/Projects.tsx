import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout";
import { projects } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export function Projects() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-32">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-20">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-6">
            Real Products. Real Users.
          </p>
          <h1 className="font-serif text-2xl md:text-3xl font-bold leading-snug mb-8">
            Things I've built<br className="hidden md:block" /> and shipped.
          </h1>
          <p className="text-xl text-muted-foreground max-w-xl leading-relaxed font-light">
            Every project started as a gap I saw and refused to wait for someone else to fill.
            No VC funding. No big team. Sharp thinking and fast execution.
          </p>
        </motion.div>

        <div className="space-y-0 divide-y divide-border/40">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.08}
              className="group grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 py-16 items-center"
              data-testid={`row-project-${project.slug}`}
            >
              {/* Alternate image side */}
              <div className={`${i % 2 === 1 ? "md:order-2" : ""} overflow-hidden rounded-xl aspect-[16/10]`}>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div
                    className="w-full h-full rounded-xl flex flex-col items-center justify-center"
                    style={{ backgroundColor: project.colors?.bg || "#1e293b" }}
                  >
                    <p
                      className="font-serif text-3xl font-bold"
                      style={{ color: project.colors?.primary || "#fff" }}
                    >
                      {project.title}
                    </p>
                    <div
                      className="w-12 h-px mt-4 opacity-40"
                      style={{ backgroundColor: project.colors?.primary || "#fff" }}
                    />
                  </div>
                )}
              </div>

              {/* Text */}
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <div className="flex flex-wrap gap-3 mb-5">
                  {project.tech.slice(0, 4).map((t) => (
                    <span key={t} className="text-xs text-muted-foreground font-medium tracking-wide">
                      {t}
                    </span>
                  ))}
                </div>
                <h2 className="font-serif text-xl md:text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  {project.description}
                </p>

                {project.stats && (
                  <div className="flex flex-wrap gap-6 mb-8">
                    {project.stats.map((stat) => (
                      <span key={stat} className="text-sm font-semibold text-foreground">
                        {stat}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-8">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-3 transition-all group/link"
                    data-testid={`link-project-detail-${project.slug}`}
                  >
                    Full case study
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
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
      </div>
    </Layout>
  );
}

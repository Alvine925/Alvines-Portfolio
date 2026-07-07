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
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-4 flex items-center gap-2">
            <span className="w-6 h-px bg-primary inline-block" />
            Real Products. Real Users.
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-5 leading-tight">
            Things I've built<br className="hidden md:block" /> and shipped.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-16 leading-relaxed">
            Every project here started as a conviction — a gap I saw and refused to wait for someone
            else to fill. No VC funding. No big team. Just sharp thinking, fast execution, and a lot
            of iteration.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.1}
              className="group grid grid-cols-1 md:grid-cols-5 rounded-2xl border border-border bg-card overflow-hidden transition-all hover:shadow-lg hover:-translate-y-0.5 duration-300"
              data-testid={`card-project-${project.slug}`}
            >
              {/* Thumbnail */}
              <div className="md:col-span-2 aspect-[4/3] md:aspect-auto relative overflow-hidden min-h-[200px]">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ backgroundColor: project.colors?.bg || "#1e293b" }}
                  >
                    <div className="text-center p-8">
                      <p
                        className="font-serif text-3xl font-bold mb-2"
                        style={{ color: project.colors?.primary || "#fff" }}
                      >
                        {project.title}
                      </p>
                      <div
                        className="w-10 h-px mx-auto opacity-40"
                        style={{ backgroundColor: project.colors?.primary || "#fff" }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="md:col-span-3 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="text-xs font-medium px-2.5 py-1 bg-secondary text-secondary-foreground rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {project.stats && (
                    <div className="flex flex-wrap gap-4 mb-6">
                      {project.stats.map((stat) => (
                        <div key={stat} className="text-sm">
                          <span className="font-semibold text-foreground">{stat}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-6 pt-4 border-t border-border/50">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                    data-testid={`link-project-detail-${project.slug}`}
                  >
                    Full case study <ArrowRight size={14} />
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

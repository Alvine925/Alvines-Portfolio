import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { projects } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
  }),
};

export function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-6 py-32 text-center">
          <h1 className="font-serif text-4xl font-bold mb-4">Project not found</h1>
          <p className="mb-8 text-muted-foreground">
            The project you're looking for doesn't exist or has been removed.
          </p>
          <Link href="/projects" className="text-primary hover:underline text-sm font-medium">
            ← Back to projects
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        canonical={`/projects/${project.slug}`}
        title={`${project.title}  -  Case Study`}
        description={project.shortDescription}
        keywords={`${project.title}, ${project.tech.join(", ")}, web developer Kenya, AI developer Kenya, case study`}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.title, href: `/projects/${project.slug}` },
        ]}
        project={{
          name: project.title,
          description: project.shortDescription,
          url: `https://alvineotieno.com/projects/${project.slug}`,
        }}
      />
      {/* Hero  -  colored band without card */}
      <div
        className="w-full py-28 md:py-36 border-b border-border/30"
        style={{
          backgroundColor: project.colors?.bg || "var(--color-muted)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider mb-10 opacity-60 hover:opacity-100 transition-opacity"
              style={{ color: project.colors?.text || "inherit" }}
            >
              <ArrowLeft size={13} /> All Projects
            </Link>
            <p
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-6 opacity-60"
              style={{ color: project.colors?.primary || "inherit" }}
            >
              Case Study
            </p>
            <h1
              className="font-serif text-2xl md:text-3xl font-bold leading-snug mb-6 max-w-3xl"
              style={{ color: project.colors?.text || "inherit" }}
            >
              {project.title}
            </h1>
            <p
              className="text-xl md:text-2xl max-w-xl leading-relaxed opacity-75"
              style={{ color: project.colors?.text || "inherit" }}
            >
              {project.shortDescription}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
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
              <p className="text-base text-muted-foreground leading-relaxed">{project.description}</p>
            </motion.section>

            {/* Problem */}
            {project.problem && (
              <motion.section
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-6">The Problem</p>
                <div className="border-l-2 border-destructive/40 pl-5">
                  <p className="text-base text-muted-foreground leading-relaxed">{project.problem}</p>
                </div>
              </motion.section>
            )}

            {/* Solution */}
            {project.solution && (
              <motion.section
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-6">The Solution</p>
                <div className="border-l-2 border-primary/40 pl-5">
                  <p className="text-base text-muted-foreground leading-relaxed">{project.solution}</p>
                </div>
              </motion.section>
            )}

            {/* Screenshot */}
            {project.image && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="overflow-hidden rounded-xl"
              >
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-auto"
                />
              </motion.div>
            )}

            {/* No screenshot  -  styled visual */}
            {!project.image && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full aspect-[16/9] rounded-xl flex flex-col overflow-hidden"
                style={{ backgroundColor: project.colors?.bg || "#1e293b" }}
              >
                <div className="h-9 border-b border-white/10 flex items-center px-4 gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="mx-auto text-xs font-mono opacity-40 text-white">
                    {project.url.replace("https://", "")}
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
                  <h3
                    className="font-serif text-2xl font-bold mb-4"
                    style={{ color: project.colors?.primary || "#fff" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="max-w-sm opacity-60 text-sm leading-relaxed"
                    style={{ color: project.colors?.text || "#fff" }}
                  >
                    {project.shortDescription}
                  </p>
                </div>
              </motion.div>
            )}

            {/* Challenges */}
            {project.challenges && (
              <motion.section
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-8">
                  Challenges & Learnings
                </p>
                <div className="space-y-8">
                  {project.challenges.map((challenge, i) => (
                    <div key={i} className="grid grid-cols-[2rem_1fr] gap-4" data-testid={`challenge-${i}`}>
                      <span className="font-serif text-2xl font-bold text-primary/30 leading-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-muted-foreground leading-relaxed">{challenge}</p>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}
          </div>

          {/* Sidebar  -  no card, just structured text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="space-y-12"
          >
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-12 px-8 bg-primary text-primary-foreground text-sm font-semibold rounded-md hover:bg-primary/90 transition-colors w-full justify-center"
            >
              Visit Live Site <ArrowRight size={14} />
            </a>

            {project.stats && (
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase mb-5">
                  Impact
                </p>
                <ul className="space-y-3">
                  {project.stats.map((stat) => (
                    <li key={stat} className="font-semibold text-foreground text-lg">
                      {stat}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.keyFeatures && (
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase mb-5">
                  Key Features
                </p>
                <ul className="space-y-3">
                  {project.keyFeatures.map((feature) => (
                    <li key={feature} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1.5 flex-shrink-0">·</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase mb-5">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {project.tech.map((t) => (
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
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={14} /> Back to all projects
          </Link>
        </div>
      </div>
    </Layout>
  );
}

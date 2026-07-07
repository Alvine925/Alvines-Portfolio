import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { projects } from "@/lib/data";

export function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-6 py-32 text-center">
          <h1 className="font-serif text-4xl font-bold mb-4">Project not found</h1>
          <p className="mb-8 text-muted-foreground">The project you're looking for doesn't exist or has been removed.</p>
          <Link href="/projects" className="text-primary hover:underline">← Back to projects</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div 
        className="w-full py-24 border-b"
        style={{ 
          backgroundColor: project.colors?.bg || 'var(--color-muted)',
          borderColor: 'var(--color-border)'
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 mb-6">
              Case Study
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6" style={{ color: project.colors?.text || 'inherit' }}>
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl opacity-80" style={{ color: project.colors?.text || 'inherit' }}>
              {project.shortDescription}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main content */}
          <div className="lg:col-span-2 space-y-16">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-serif text-3xl font-bold mb-6">Overview</h2>
              <div className="prose prose-lg dark:prose-invert text-muted-foreground">
                <p>{project.description}</p>
              </div>
            </motion.section>

            {project.image ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-xl overflow-hidden border shadow-lg"
              >
                <img src={project.image} alt={`${project.title} preview`} className="w-full h-auto" />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full aspect-[16/9] rounded-xl shadow-lg flex flex-col border border-border overflow-hidden"
                style={{ backgroundColor: project.colors?.bg || '#1e293b' }}
              >
                <div className="h-10 bg-black/10 border-b border-black/5 flex items-center px-4 space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="mx-auto px-4 py-1 rounded bg-white/20 text-xs font-mono text-white/80 w-1/3 text-center truncate">
                    {project.url.replace('https://', '')}
                  </div>
                </div>
                <div className="flex-1 p-6 flex flex-col items-center justify-center text-center">
                  <h3 className="font-serif text-4xl font-bold mb-4" style={{ color: project.colors?.primary || '#fff' }}>
                    {project.title}
                  </h3>
                  <p className="max-w-md opacity-70" style={{ color: project.colors?.text || '#fff' }}>
                    {project.description}
                  </p>
                </div>
              </motion.div>
            )}

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-serif text-3xl font-bold mb-6">Challenges & Learnings</h2>
              <ul className="space-y-4">
                {project.challenges?.map((challenge, i) => (
                  <li key={i} className="flex gap-4 p-4 rounded-lg bg-secondary/50 border border-border/50">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary font-bold text-sm">
                      {i + 1}
                    </span>
                    <span className="text-muted-foreground">{challenge}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full inline-flex h-14 items-center justify-center rounded-lg bg-primary px-8 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 mb-8"
              >
                Visit Live Site ↗
              </a>

              <div className="p-6 rounded-xl border border-border bg-card shadow-sm space-y-8">
                {project.stats && (
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Impact</h3>
                    <ul className="space-y-3">
                      {project.stats.map(stat => (
                        <li key={stat} className="font-medium text-foreground">{stat}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {project.keyFeatures && (
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Key Features</h3>
                    <ul className="space-y-3">
                      {project.keyFeatures.map(feature => (
                        <li key={feature} className="text-sm text-foreground flex gap-2">
                          <span className="text-primary">•</span> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs font-medium px-2.5 py-1 bg-secondary text-secondary-foreground rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </Layout>
  );
}

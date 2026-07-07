import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-16">
            A selection of products I've built, launched, and scaled. Ranging from zero-UI workflows to AI matching engines.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div 
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-md h-full"
              >
                <div className="aspect-[4/3] bg-muted relative overflow-hidden flex items-center justify-center p-6">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                  ) : (
                    <div 
                      className="w-full h-full rounded-xl shadow-lg flex flex-col"
                      style={{ backgroundColor: project.colors?.bg || '#1e293b' }}
                    >
                      <div className="h-8 border-b border-white/10 flex items-center px-4 space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                      <div className="flex-1 p-6 flex items-center justify-center">
                        <span className="font-serif text-2xl font-bold opacity-80" style={{ color: project.colors?.primary || '#fff' }}>
                          {project.title}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-col flex-1 p-6">
                  <h2 className="font-serif text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    <Link href={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-muted-foreground mb-6 flex-1">
                    {project.shortDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 3).map(t => (
                      <span key={t} className="text-xs font-medium px-2.5 py-1 bg-secondary text-secondary-foreground rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                    <Link href={`/projects/${project.slug}`} className="text-sm font-medium text-primary hover:underline">
                      View details
                    </Link>
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Visit site ↗
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}

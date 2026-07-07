import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { projects } from "@/lib/data";

export function Home() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
            Building digital <br className="hidden md:block"/> products with soul.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
            I'm a vibe coder and creative technologist. I build fast, design with intention, and ship real products that people use.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/projects" className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
              View Work
            </Link>
            <Link href="/about" className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
              About Me
            </Link>
          </div>
        </motion.div>

        <div className="mt-40">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-serif text-3xl font-bold">Selected Projects</h2>
            <Link href="/projects" className="text-primary font-medium hover:underline">View all →</Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div 
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative flex flex-col items-start justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex items-center gap-x-4 text-xs mb-4">
                  <span className="relative z-10 rounded-full bg-secondary px-3 py-1.5 font-medium text-secondary-foreground">
                    {project.tech[0]}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-xl font-bold font-serif text-foreground group-hover:text-primary transition-colors">
                    <Link href={`/projects/${project.slug}`}>
                      <span className="absolute inset-0" />
                      {project.title}
                    </Link>
                  </h3>
                  <p className="mt-4 line-clamp-3 text-sm leading-6 text-muted-foreground">
                    {project.shortDescription}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

import { motion } from "framer-motion";
import { Layout } from "@/components/layout";

export function About() {
  const skills = [
    "Next.js", "React", "Vite", "TypeScript", "Tailwind CSS", 
    "Supabase", "Node.js", "AI/LLM tooling", "Vibe Coding"
  ];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-8">About</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none mb-16 text-muted-foreground">
            <p>
              I'm an indie builder and creative technologist who focuses on shipping real products. 
              I believe in vibe coding — entering a flow state where intuition, rapid iteration, and 
              AI collaboration combine to create software at the speed of thought.
            </p>
            <p>
              Over the past few years, I've designed and engineered platforms that solve concrete problems. 
              From an AI-powered job matching engine in Kenya to a zero-UI website builder via WhatsApp, 
              I prioritize utility without sacrificing aesthetics.
            </p>
            <p>
              When I'm not writing code, I'm thinking about the intersection of human creativity and 
              machine intelligence.
            </p>
          </div>

          <h2 className="font-serif text-2xl font-bold mb-6">Skills & Technologies</h2>
          <div className="flex flex-wrap gap-3 mb-16">
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>

          <h2 className="font-serif text-2xl font-bold mb-6">Experience</h2>
          <div className="space-y-8 border-l border-border pl-6 relative">
            <div className="absolute top-0 bottom-0 left-0 w-px bg-border"></div>
            
            <div className="relative">
              <div className="absolute -left-8 top-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-background"></div>
              <h3 className="text-xl font-bold">Independent Builder</h3>
              <p className="text-sm text-primary mb-2">2023 - Present</p>
              <p className="text-muted-foreground">
                Conceptualizing, building, and launching multiple successful products including MyJoyfulDay and TellusJobs. Full-stack development from database schema to marketing landing pages.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -left-8 top-1.5 w-4 h-4 rounded-full border-2 border-border bg-background ring-4 ring-background"></div>
              <h3 className="text-xl font-bold text-muted-foreground">Senior Frontend Engineer</h3>
              <p className="text-sm text-muted-foreground mb-2">2020 - 2023</p>
              <p className="text-muted-foreground">
                Led frontend architecture for enterprise SaaS products. Advocated for design systems, accessibility, and performance optimizations.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}

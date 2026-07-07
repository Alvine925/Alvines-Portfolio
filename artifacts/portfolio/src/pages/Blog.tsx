import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { blogPosts } from "@/lib/data";

export function Blog() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Writing</h1>
          <p className="text-xl text-muted-foreground mb-16">
            Thoughts on software engineering, product design, and building in public.
          </p>

          <div className="space-y-12">
            {blogPosts.map((post, i) => (
              <motion.article 
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative border-b border-border pb-12 last:border-0"
              >
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </time>
                  <span>•</span>
                  <div className="flex gap-2">
                    {post.tags.map(tag => (
                      <span key={tag} className="text-primary font-medium">{tag}</span>
                    ))}
                  </div>
                </div>
                
                <h2 className="font-serif text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-muted-foreground text-lg mb-4">
                  {post.excerpt}
                </p>
                
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  Read article →
                </span>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}

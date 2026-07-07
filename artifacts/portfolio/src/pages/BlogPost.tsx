import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { blogPosts } from "@/lib/data";

export function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-6 py-32 text-center">
          <h1 className="font-serif text-4xl font-bold mb-4">Post not found</h1>
          <p className="mb-8 text-muted-foreground">The article you're looking for doesn't exist.</p>
          <Link href="/blog" className="text-primary hover:underline">← Back to blog</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="max-w-[65ch] mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/blog" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-10 inline-block">
            ← All articles
          </Link>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
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
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-10 leading-tight">
            {post.title}
          </h1>
          
          <div className="prose prose-lg dark:prose-invert prose-headings:font-serif prose-a:text-primary max-w-none text-foreground leading-relaxed">
            {/* Split by paragraph simply for the mock content */}
            {post.content.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </article>
    </Layout>
  );
}

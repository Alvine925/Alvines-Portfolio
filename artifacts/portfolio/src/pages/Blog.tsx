import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { blogPosts } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export function Blog() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-16">
          <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-4 flex items-center gap-2">
            <span className="w-6 h-px bg-primary inline-block" />
            Writing
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-5 leading-tight">
            Thoughts I couldn't keep to myself.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I write about building fast, shipping real things, and what happens when you
            combine AI with genuine conviction. No fluff. No newsletter bait. Just things I
            actually believe.
          </p>
        </motion.div>

        <div className="space-y-0 divide-y divide-border/60">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.1}
              className="group relative py-10 first:pt-0"
              data-testid={`article-blog-${post.slug}`}
            >
              <span className="absolute inset-0" />
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
                <span className="w-1 h-1 rounded-full bg-border" />
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-primary font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors leading-snug">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>

              <Link
                href={`/blog/${post.slug}`}
                className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1"
                data-testid={`link-blog-post-${post.slug}`}
              >
                Read →
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </Layout>
  );
}

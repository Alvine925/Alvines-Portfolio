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
      <div className="max-w-4xl mx-auto px-6 py-20 md:py-32">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-20">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-6">
            Writing
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.04] mb-8">
            Thoughts I couldn't<br className="hidden md:block" /> keep to myself.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-lg">
            Building fast, shipping real things, and what happens when you combine AI with genuine conviction.
            No fluff. Just things I actually believe.
          </p>
        </motion.div>

        <div className="space-y-0 divide-y divide-border/40">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.1}
              className="group py-14"
              data-testid={`article-blog-${post.slug}`}
            >
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-5">
                <time dateTime={post.date} className="font-medium">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
                <span className="w-1 h-1 rounded-full bg-border" />
                {post.tags.map((tag) => (
                  <span key={tag} className="text-primary font-semibold tracking-wide uppercase text-[11px]">
                    {tag}
                  </span>
                ))}
              </div>

              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-5 leading-tight group-hover:text-primary transition-colors">
                <Link href={`/blog/${post.slug}`} data-testid={`link-blog-post-${post.slug}`}>
                  {post.title}
                </Link>
              </h2>

              <p className="text-muted-foreground leading-relaxed text-lg mb-6 max-w-2xl">
                {post.excerpt}
              </p>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground group-hover:text-primary transition-colors"
              >
                Read article
                <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </Layout>
  );
}

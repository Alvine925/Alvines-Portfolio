import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { blogPosts } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
  }),
};

export function Blog() {
  return (
    <Layout>
      <SEO
        canonical="/blog"
        title="Writing  -  WhatsApp Bots, Automation & Building in Kenya"
        description="Alvine Otieno writes about WhatsApp AI bots, workflow automation, product development in Kenya, and what it actually takes to build and ship. No fluff. Just things worth reading."
        keywords="WhatsApp automation blog Kenya, AI developer writing Kenya, building products Kenya, tech blog Kisumu, workflow automation tips, WhatsApp bot development guide"
      />
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-32">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-20">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-6">
            Writing
          </p>
          <h1 className="font-serif text-2xl md:text-3xl font-bold leading-snug mb-8">
            Thoughts I couldn't<br className="hidden md:block" /> keep to myself.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-lg">
            Building fast, shipping real things, and what happens when you combine AI with genuine conviction.
            No fluff. Just things I actually believe.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.05}
              className="group flex flex-col"
              data-testid={`article-blog-${post.slug}`}
            >
              {/* Thumbnail */}
              <Link href={`/blog/${post.slug}`} className="block overflow-hidden rounded-xl mb-5 aspect-[16/9] bg-muted flex-shrink-0">
                {post.coverImage ? (
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                      {post.tags[0]}
                    </span>
                  </div>
                )}
              </Link>

              {/* Meta */}
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                <time dateTime={post.date} className="font-medium">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
                <span className="w-1 h-1 rounded-full bg-border flex-shrink-0" />
                <span className="text-primary font-semibold tracking-wide uppercase text-[11px] truncate">
                  {post.tags[0]}
                </span>
              </div>

              {/* Title */}
              <h2 className="font-serif text-lg font-bold mb-3 leading-snug group-hover:text-primary transition-colors">
                <Link href={`/blog/${post.slug}`} data-testid={`link-blog-post-${post.slug}`}>
                  {post.title}
                </Link>
              </h2>

              {/* Excerpt */}
              <p className="text-muted-foreground leading-relaxed text-sm mb-4 flex-1 line-clamp-3">
                {post.excerpt}
              </p>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground group-hover:text-primary transition-colors mt-auto"
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

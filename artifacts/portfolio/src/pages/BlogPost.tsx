import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Zap } from "lucide-react";
import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { blogPosts } from "@/lib/data";
import alvinePhoto from "@assets/713531308_2391480708041703_8942490288083047707_n_1783423380935.jpg";

// ─── Inline markdown renderers ────────────────────────────────────────────────

function InlineMd({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i}>{part.slice(2, -2)}</strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

function parseImageBlock(block: string): { alt: string; url: string } | null {
  const match = block.trim().match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
  if (!match) return null;
  return { alt: match[1], url: match[2] };
}

function ContentBlock({ block }: { block: string }) {
  const trimmed = block.trim();

  const img = parseImageBlock(trimmed);
  if (img) {
    return (
      <figure className="my-10 -mx-4 md:-mx-10">
        <img src={img.url} alt={img.alt} className="w-full rounded-xl object-cover max-h-[480px]" loading="lazy" />
        {img.alt && (
          <figcaption className="text-center text-sm text-muted-foreground mt-3 italic">{img.alt}</figcaption>
        )}
      </figure>
    );
  }

  if (trimmed.startsWith("## ")) {
    return <h2 className="font-serif text-2xl font-bold mt-14 mb-5 text-foreground">{trimmed.slice(3)}</h2>;
  }

  if (trimmed.startsWith("### ")) {
    return <h3 className="font-serif text-xl font-bold mt-10 mb-4 text-foreground">{trimmed.slice(4)}</h3>;
  }

  const lines = trimmed.split("\n");
  if (lines.every((l) => l.startsWith("- "))) {
    return (
      <ul className="list-none space-y-2.5 my-7 pl-0">
        {lines.map((item, i) => (
          <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
            <span className="text-primary mt-1.5 flex-shrink-0 font-bold text-lg leading-none">·</span>
            <InlineMd text={item.slice(2)} />
          </li>
        ))}
      </ul>
    );
  }

  if (lines.every((l) => /^\d+\.\s/.test(l))) {
    return (
      <ol className="list-none space-y-2.5 my-7 pl-0">
        {lines.map((item, i) => (
          <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
            <span className="text-primary font-bold font-serif flex-shrink-0 w-6 text-right">{i + 1}.</span>
            <InlineMd text={item.replace(/^\d+\.\s/, "")} />
          </li>
        ))}
      </ol>
    );
  }

  if (trimmed.startsWith("> ")) {
    return (
      <blockquote className="border-l-4 border-primary/40 pl-5 my-8 italic text-muted-foreground text-lg leading-relaxed">
        {trimmed.slice(2)}
      </blockquote>
    );
  }

  if (!trimmed) return null;

  return (
    <p className="text-muted-foreground leading-[1.9] my-5 text-[1.05rem]">
      <InlineMd text={trimmed} />
    </p>
  );
}

// ─── Related posts ─────────────────────────────────────────────────────────────

function getRelatedPosts(currentSlug: string, currentTags: string[], count = 3) {
  return blogPosts
    .filter((p) => p.slug !== currentSlug)
    .map((p) => ({
      post: p,
      score: p.tags.filter((t) => currentTags.includes(t)).length,
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || new Date(b.post.date).getTime() - new Date(a.post.date).getTime())
    .slice(0, count)
    .map(({ post }) => post);
}

function tagColor(tag: string) {
  const map: Record<string, string> = {
    MyJoyfulDay: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
    WhatsApp: "bg-green-500/10 text-green-600 dark:text-green-400",
    AI: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
    Automation: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    TellusJobs: "bg-sky-500/10 text-sky-600 dark:text-sky-400",
    Tellus: "bg-sky-500/10 text-sky-600 dark:text-sky-400",
    Autoshine: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    Kenya: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    Product: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
    SEO: "bg-teal-500/10 text-teal-600 dark:text-teal-400",
    Design: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
  };
  return map[tag] ?? "bg-primary/10 text-primary";
}

// ─── Component ────────────────────────────────────────────────────────────────

export function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Layout>
        <SEO title="Post Not Found" description="The article you are looking for does not exist." noindex />
        <div className="max-w-4xl mx-auto px-6 py-32 text-center">
          <h1 className="font-serif text-4xl font-bold mb-4">Post not found</h1>
          <p className="mb-8 text-muted-foreground">The article you're looking for doesn't exist.</p>
          <Link href="/blog" className="text-primary hover:underline">← Back to blog</Link>
        </div>
      </Layout>
    );
  }

  const blocks = post.content.split(/\n\n+/);
  const related = getRelatedPosts(post.slug, post.tags);

  return (
    <Layout>
      <SEO
        title={post.title}
        description={post.excerpt}
        keywords={[...post.tags, "Alvine Otieno", "Kenya", "Kisumu"].join(", ")}
        canonical={`/blog/${post.slug}`}
        type="article"
        article={{ publishedTime: post.date, tags: post.tags }}
      />

      {/* Cover image */}
      {post.coverImage && (
        <div className="w-full max-h-[520px] overflow-hidden">
          <img src={post.coverImage} alt={post.title} className="w-full object-cover max-h-[520px]" />
        </div>
      )}

      <article className="max-w-[72ch] mx-auto px-6 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link
            href="/blog"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-10 inline-block"
          >
            ← All articles
          </Link>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </time>
            <span>•</span>
            <div className="flex gap-2 flex-wrap">
              {post.tags.map((tag) => (
                <span key={tag} className={`text-xs font-semibold px-2 py-0.5 rounded-full ${tagColor(tag)}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-6 leading-tight text-foreground">
            {post.title}
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed mb-12 font-light border-b border-border/40 pb-12">
            {post.excerpt}
          </p>

          {/* Content */}
          <div>
            {blocks.map((block, i) => (
              <ContentBlock key={i} block={block} />
            ))}
          </div>

          {/* ── Author bio ─────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-20 border-t border-border/40 pt-12"
          >
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              {/* Photo */}
              <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-primary/30 flex-shrink-0">
                <img src={alvinePhoto} alt="Alvine Otieno" className="w-full h-full object-cover object-top" />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-1">
                  Written by
                </p>
                <p className="font-serif text-lg font-bold text-foreground mb-0.5">Alvine Otieno</p>
                <p className="text-sm text-primary font-medium mb-3">
                  Business Operations & Automation Specialist · Kisumu, Kenya
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-lg">
                  I build WhatsApp AI bots, workflow automations, and web platforms that remove the friction businesses
                  still handle by hand. I've shipped 5 products used across Kenya — including Jitabi, which has handled
                  50K+ events through a WhatsApp conversation, and TellusJobs, which matches Kenyan job seekers to roles
                  using AI.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/capabilities"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-primary transition-colors group"
                  >
                    <Zap size={13} className="text-primary" />
                    See what I build
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Mail size={13} />
                    Work with me
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Related posts ───────────────────────────────────────────────── */}
          {related.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-16 border-t border-border/40 pt-12"
            >
              <div className="flex items-baseline justify-between mb-8">
                <h2 className="font-serif text-lg font-bold text-foreground">Continue reading</h2>
                <Link
                  href="/blog"
                  className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  All articles →
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((rel, i) => (
                  <motion.div
                    key={rel.slug}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                  >
                    <Link href={`/blog/${rel.slug}`} className="group block">
                      {/* Thumbnail */}
                      <div className="aspect-[16/9] overflow-hidden rounded-lg mb-4 bg-muted">
                        {rel.coverImage ? (
                          <img
                            src={rel.coverImage}
                            alt={rel.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                              {rel.tags[0]}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Meta */}
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${tagColor(rel.tags[0])}`}>
                          {rel.tags[0]}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {new Date(rel.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                        </span>
                      </div>

                      <h3 className="text-sm font-semibold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2 mb-1.5">
                        {rel.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{rel.excerpt}</p>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Back link */}
          <div className="mt-14 pt-8 border-t border-border/40">
            <Link href="/blog" className="text-sm font-semibold text-primary hover:underline">
              ← More articles
            </Link>
          </div>
        </motion.div>
      </article>
    </Layout>
  );
}

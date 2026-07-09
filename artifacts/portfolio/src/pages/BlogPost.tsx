import { useState, useEffect } from "react";
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Zap, Loader2 } from "lucide-react";
import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { blogMetadata } from "@/lib/blog_metadata";
import alvinePhoto from "@assets/713531308_2391480708041703_8942490288083047707_n_1783423380935.jpg";

// ─── Inline markdown renderers ────────────────────────────────────────────────

// Renders **bold** and plain text within a single line/paragraph.
function InlineMd({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className="font-semibold text-foreground">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

// Detects a markdown image block: ![alt](url)
function parseImageBlock(block: string): { alt: string; src: string } | null {
  const match = block.trim().match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
  if (!match) return null;
  return { alt: match[1], src: match[2] };
}

// Renders a single markdown "block" (split on blank lines) as the
// appropriate element: heading, image, bullet list, or paragraph.
function ContentBlock({ block }: { block: string }) {
  const trimmed = block.trim();
  if (!trimmed) return null;

  const image = parseImageBlock(trimmed);
  if (image) {
    return (
      <div className="my-8 rounded-xl overflow-hidden">
        <img src={image.src} alt={image.alt} className="w-full object-cover" loading="lazy" />
      </div>
    );
  }

  if (trimmed.startsWith("### ")) {
    return (
      <h3 className="font-serif text-lg font-bold mt-10 mb-3 text-foreground">
        <InlineMd text={trimmed.slice(4)} />
      </h3>
    );
  }
  if (trimmed.startsWith("## ")) {
    return (
      <h2 className="font-serif text-xl font-bold mt-12 mb-4 text-foreground">
        <InlineMd text={trimmed.slice(3)} />
      </h2>
    );
  }

  const lines = trimmed.split("\n");
  const isList = lines.every((l) => l.trim().startsWith("- ") || l.trim().startsWith("* "));
  if (isList) {
    return (
      <ul className="list-disc pl-5 space-y-2 my-5 text-muted-foreground leading-relaxed">
        {lines.map((l, i) => (
          <li key={i}>
            <InlineMd text={l.trim().replace(/^[-*]\s+/, "")} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <p className="text-muted-foreground leading-relaxed mb-6">
      <InlineMd text={trimmed} />
    </p>
  );
}

const TAG_COLORS = [
  "bg-primary/10 text-primary",
  "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  "bg-rose-500/10 text-rose-600 dark:text-rose-400",
  "bg-violet-500/10 text-violet-600 dark:text-violet-400",
];

function tagColor(tag: string): string {
  let hash = 0;
  for (let i = 0; i < tag.length; i++) {
    hash = (hash * 31 + tag.charCodeAt(i)) | 0;
  }
  return TAG_COLORS[Math.abs(hash) % TAG_COLORS.length];
}

// ─── Component ────────────────────────────────────────────────────────────────

export function BlogPost() {
  const { slug } = useParams();
  const [content, setContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  
  const meta = blogMetadata.find((p) => p.slug === slug);

  useEffect(() => {
    if (meta) {
      setLoading(true);
      // Dynamic import of the blog module
      import(`@/lib/blog/${slug}.ts`)
        .then((module) => {
          setContent(module.content);
          setLoading(false);
          window.scrollTo(0, 0);
        })
        .catch((err) => {
          console.error("Failed to load blog content:", err);
          setLoading(false);
        });
    }
  }, [slug, meta]);

  if (!meta) {
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

  const blocks = content ? content.split(/\n\n+/) : [];
  const related = blogMetadata
    .filter((p) => p.slug !== slug && p.tags.some(t => meta.tags.includes(t)))
    .slice(0, 3);

  return (
    <Layout>
      <SEO
        title={meta.title}
        description={meta.excerpt}
        keywords={[...meta.tags, "Alvine Otieno", "Kenya", "Kisumu"].join(", ")}
        canonical={`/blog/${meta.slug}`}
        type="article"
        article={{ publishedTime: meta.date, tags: meta.tags }}
      />

      {/* Cover image */}
      {meta.coverImage && (
        <div className="w-full max-h-[520px] overflow-hidden">
          <img src={meta.coverImage} alt={meta.title} className="w-full object-cover max-h-[520px]" />
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
            <time dateTime={meta.date}>
              {new Date(meta.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </time>
            <span>•</span>
            <div className="flex gap-2 flex-wrap">
              {meta.tags.map((tag) => (
                <span key={tag} className={`text-xs font-semibold px-2 py-0.5 rounded-full ${tagColor(tag)}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-6 leading-tight text-foreground">
            {meta.title}
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed mb-12 font-light border-b border-border/40 pb-12">
            {meta.excerpt}
          </p>

          {/* Content */}
          <div className="min-h-[300px] relative">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
                <Loader2 className="w-6 h-6 animate-spin mb-4 text-primary" />
                <p className="text-sm animate-pulse">Loading story...</p>
              </div>
            ) : (
              blocks.map((block, i) => (
                <ContentBlock key={i} block={block} />
              ))
            )}
          </div>

          {/* ── Author bio ─────────────────────────────────────────────────── */}
          {/* ... same as before */}

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

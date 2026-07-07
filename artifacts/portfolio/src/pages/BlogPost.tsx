import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { blogPosts } from "@/lib/data";

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

// Parses ![Caption](url) image blocks
function parseImageBlock(block: string): { alt: string; url: string } | null {
  const match = block.trim().match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
  if (!match) return null;
  return { alt: match[1], url: match[2] };
}

function ContentBlock({ block }: { block: string }) {
  const trimmed = block.trim();

  // Image
  const img = parseImageBlock(trimmed);
  if (img) {
    return (
      <figure className="my-10 -mx-4 md:-mx-10">
        <img
          src={img.url}
          alt={img.alt}
          className="w-full rounded-xl object-cover max-h-[480px]"
          loading="lazy"
        />
        {img.alt && (
          <figcaption className="text-center text-sm text-muted-foreground mt-3 italic">
            {img.alt}
          </figcaption>
        )}
      </figure>
    );
  }

  // H2
  if (trimmed.startsWith("## ")) {
    return (
      <h2 className="font-serif text-2xl font-bold mt-14 mb-5 text-foreground">
        {trimmed.slice(3)}
      </h2>
    );
  }

  // H3
  if (trimmed.startsWith("### ")) {
    return (
      <h3 className="font-serif text-xl font-bold mt-10 mb-4 text-foreground">
        {trimmed.slice(4)}
      </h3>
    );
  }

  // Unordered list (- item)
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

  // Ordered list (1. item)
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

  // Block quote (> text)
  if (trimmed.startsWith("> ")) {
    return (
      <blockquote className="border-l-4 border-primary/40 pl-5 my-8 italic text-muted-foreground text-lg leading-relaxed">
        {trimmed.slice(2)}
      </blockquote>
    );
  }

  // Empty
  if (!trimmed) return null;

  // Regular paragraph
  return (
    <p className="text-muted-foreground leading-[1.9] my-5 text-[1.05rem]">
      <InlineMd text={trimmed} />
    </p>
  );
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
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full object-cover max-h-[520px]"
          />
        </div>
      )}

      <article className="max-w-[72ch] mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/blog" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-10 inline-block">
            ← All articles
          </Link>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </time>
            <span>•</span>
            <div className="flex gap-2 flex-wrap">
              {post.tags.map((tag) => (
                <span key={tag} className="text-primary font-medium">{tag}</span>
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

          {/* Footer */}
          <div className="mt-20 pt-10 border-t border-border/40 flex flex-col sm:flex-row gap-6 items-start justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-1">Written by</p>
              <p className="font-medium text-foreground">Alvine Otieno</p>
              <p className="text-sm text-muted-foreground">Builder & Automation Specialist · Kisumu, Kenya</p>
            </div>
            <Link href="/blog" className="text-sm font-semibold text-primary hover:underline">
              ← More articles
            </Link>
          </div>
        </motion.div>
      </article>
    </Layout>
  );
}

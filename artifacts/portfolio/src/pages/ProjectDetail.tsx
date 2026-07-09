import { useParams, Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, MessageSquare, X, Send, CheckCircle2, Loader2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { projects } from "@/lib/data";

const FORMSPREE_URL = "https://formspree.io/f/mldbvkyb";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
  }),
};

// ─── Comment modal ────────────────────────────────────────────────────────────

type FormState = "idle" | "submitting" | "success" | "error";

const FOCUSABLE = 'a[href],button:not([disabled]),input:not([disabled]),textarea:not([disabled]),select:not([disabled]),[tabindex]:not([tabindex="-1"])';

function CommentModal({
  projectTitle,
  onClose,
  openerRef,
}: {
  projectTitle: string;
  onClose: () => void;
  openerRef: React.RefObject<HTMLButtonElement | null>;
}) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const nameRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  // Initial focus
  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  // Restore focus to opener on unmount
  useEffect(() => {
    const opener = openerRef.current;
    return () => { opener?.focus(); };
  }, [openerRef]);

  // Focus trap + Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { onClose(); return; }
      if (e.key !== "Tab") return;
      const panel = panelRef.current;
      if (!panel) return;
      const els = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (!els.length) return;
      const first = els[0];
      const last = els[els.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!comment.trim()) return;
    setState("submitting");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Project comment: ${projectTitle}`,
          name: name.trim() || "Anonymous",
          project: projectTitle,
          comment: comment.trim(),
        }),
      });
      setState(res.ok ? "success" : "error");
    } catch {
      setState("error");
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Leave a comment on ${projectTitle}`}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Panel */}
      <motion.div
        ref={panelRef}
        className="relative w-full max-w-md bg-background border border-border/60 rounded-2xl shadow-2xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Header */}
        <div className="flex items-start justify-between px-6 pt-6 pb-5 border-b border-border/40">
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] text-primary uppercase mb-1">
              {projectTitle}
            </p>
            <h2 className="font-serif text-lg font-bold text-foreground">Leave a comment</h2>
            <p className="text-xs text-muted-foreground mt-1">
              Thoughts, questions, or feedback — I read every one.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors flex-shrink-0 ml-4"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          {state === "success" ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center text-center py-6 gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle2 size={22} className="text-primary" />
              </div>
              <div>
                <p className="font-serif text-base font-bold text-foreground mb-1">Comment sent!</p>
                <p className="text-sm text-muted-foreground">
                  Thanks for taking the time — I'll read it and reply if you left your name.
                </p>
              </div>
              <button
                onClick={onClose}
                className="mt-2 text-sm font-semibold text-primary hover:underline"
              >
                Close
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="comment-name" className="block text-xs font-semibold text-muted-foreground mb-1.5">
                  Your name <span className="font-normal opacity-60">(optional)</span>
                </label>
                <input
                  id="comment-name"
                  ref={nameRef}
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Sarah Wanjiku"
                  className="w-full h-10 px-3 rounded-md border border-border/60 bg-muted/40 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition-colors"
                  disabled={state === "submitting"}
                />
              </div>

              <div>
                <label htmlFor="comment-body" className="block text-xs font-semibold text-muted-foreground mb-1.5">
                  Comment <span className="text-destructive">*</span>
                </label>
                <textarea
                  id="comment-body"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="What do you think about this project? Any questions or ideas?"
                  rows={4}
                  required
                  className="w-full px-3 py-2.5 rounded-md border border-border/60 bg-muted/40 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition-colors resize-none leading-relaxed"
                  disabled={state === "submitting"}
                />
              </div>

              {/* aria-live status for screen readers */}
              <div ref={statusRef} aria-live="polite" aria-atomic="true" className="sr-only">
                {state === "success" && "Comment sent successfully."}
                {state === "error" && "Something went wrong sending your comment. Please try again."}
              </div>

              {state === "error" && (
                <p className="text-xs text-destructive" role="alert">
                  Something went wrong. Please try again or reach out via the contact page.
                </p>
              )}

              <div className="flex items-center gap-3 pt-1">
                <button
                  type="submit"
                  disabled={state === "submitting" || !comment.trim()}
                  className="inline-flex items-center gap-2 h-10 px-5 bg-primary text-primary-foreground text-sm font-semibold rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state === "submitting" ? (
                    <>
                      <Loader2 size={13} className="animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={13} />
                      Send comment
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [commentOpen, setCommentOpen] = useState(false);
  const commentBtnRef = useRef<HTMLButtonElement>(null);

  if (!project) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-6 py-32 text-center">
          <h1 className="font-serif text-4xl font-bold mb-4">Project not found</h1>
          <p className="mb-8 text-muted-foreground">
            The project you're looking for doesn't exist or has been removed.
          </p>
          <Link href="/projects" className="text-primary hover:underline text-sm font-medium">
            ← Back to projects
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        canonical={`/projects/${project.slug}`}
        title={`${project.title}  -  Case Study`}
        description={project.shortDescription}
        keywords={`${project.title}, ${project.tech.join(", ")}, web developer Kenya, AI developer Kenya, case study`}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.title, href: `/projects/${project.slug}` },
        ]}
        project={{
          name: project.title,
          description: project.shortDescription,
          url: `https://alvineotieno.com/projects/${project.slug}`,
        }}
      />

      {/* Comment modal */}
      <AnimatePresence>
        {commentOpen && (
          <CommentModal
            projectTitle={project.title}
            onClose={() => setCommentOpen(false)}
            openerRef={commentBtnRef}
          />
        )}
      </AnimatePresence>

      {/* Hero  -  colored band, image background when available */}
      <div
        className="w-full py-28 md:py-36 border-b border-border/30 relative overflow-hidden"
        style={
          project.image
            ? {
                backgroundImage: `url(${project.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center top",
              }
            : { backgroundColor: project.colors?.bg || "var(--color-muted)" }
        }
      >
        {project.image && (
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, ${project.colors?.bg || "#0f172a"}F5 40%, ${project.colors?.bg || "#0f172a"}99 70%, ${project.colors?.bg || "#0f172a"}33 100%)`,
            }}
          />
        )}
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider mb-10 opacity-60 hover:opacity-100 transition-opacity"
              style={{ color: project.colors?.text || "inherit" }}
            >
              <ArrowLeft size={13} /> All Projects
            </Link>
            <p
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-6 opacity-60"
              style={{ color: project.colors?.primary || "inherit" }}
            >
              Case Study
            </p>
            <h1
              className="font-serif text-2xl md:text-3xl font-bold leading-snug mb-6 max-w-3xl"
              style={{ color: project.colors?.text || "inherit" }}
            >
              {project.title}
            </h1>
            <p
              className="text-xl md:text-2xl max-w-xl leading-relaxed opacity-75"
              style={{ color: project.colors?.text || "inherit" }}
            >
              {project.shortDescription}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20">

          {/* Main content */}
          <div className="lg:col-span-2 space-y-20">

            {/* Overview */}
            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-6">Overview</p>
              <p className="text-base text-muted-foreground leading-relaxed">{project.description}</p>
            </motion.section>

            {/* Problem */}
            {project.problem && (
              <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-6">The Problem</p>
                <div className="border-l-2 border-destructive/40 pl-5">
                  <p className="text-base text-muted-foreground leading-relaxed">{project.problem}</p>
                </div>
              </motion.section>
            )}

            {/* Solution */}
            {project.solution && (
              <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-6">The Solution</p>
                <div className="border-l-2 border-primary/40 pl-5">
                  <p className="text-base text-muted-foreground leading-relaxed">{project.solution}</p>
                </div>
              </motion.section>
            )}

            {/* Screenshot */}
            {project.image ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="overflow-hidden rounded-xl"
              >
                <img src={project.image} alt={`${project.title} preview`} className="w-full h-auto" />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full aspect-[16/9] rounded-xl flex flex-col overflow-hidden"
                style={{ backgroundColor: project.colors?.bg || "#1e293b" }}
              >
                <div className="h-9 border-b border-white/10 flex items-center px-4 gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="mx-auto text-xs font-mono opacity-40 text-white">
                    {project.url.replace("https://", "")}
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
                  <h3
                    className="font-serif text-2xl font-bold mb-4"
                    style={{ color: project.colors?.primary || "#fff" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="max-w-sm opacity-60 text-sm leading-relaxed"
                    style={{ color: project.colors?.text || "#fff" }}
                  >
                    {project.shortDescription}
                  </p>
                </div>
              </motion.div>
            )}

            {/* Challenges */}
            {project.challenges && (
              <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-8">
                  Challenges &amp; Learnings
                </p>
                <div className="space-y-8">
                  {project.challenges.map((challenge, i) => (
                    <div key={i} className="grid grid-cols-[2rem_1fr] gap-4" data-testid={`challenge-${i}`}>
                      <span className="font-serif text-2xl font-bold text-primary/30 leading-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-muted-foreground leading-relaxed">{challenge}</p>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}
          </div>

          {/* Sidebar */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="space-y-4"
          >
            {/* CTA buttons */}
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-12 px-8 bg-primary text-primary-foreground text-sm font-semibold rounded-md hover:bg-primary/90 transition-colors w-full justify-center"
            >
              Visit Live Site <ArrowRight size={14} />
            </a>

            <button
              ref={commentBtnRef}
              onClick={() => setCommentOpen(true)}
              className="inline-flex items-center gap-2 h-12 px-8 border border-border/60 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-border hover:bg-muted/40 rounded-md transition-colors w-full justify-center"
            >
              <MessageSquare size={14} />
              Leave a comment
            </button>

            {/* Rest of sidebar */}
            <div className="pt-8 space-y-12">
              {project.stats && (
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase mb-5">
                    Impact
                  </p>
                  <ul className="space-y-3">
                    {project.stats.map((stat) => (
                      <li key={stat} className="font-semibold text-foreground text-lg">
                        {stat}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.keyFeatures && (
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase mb-5">
                    Key Features
                  </p>
                  <ul className="space-y-3">
                    {project.keyFeatures.map((feature) => (
                      <li key={feature} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1.5 flex-shrink-0">·</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase mb-5">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-sm text-foreground/70 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Back link */}
        <div className="mt-20 pt-12 border-t border-border/40">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={14} /> Back to all projects
          </Link>
        </div>
      </div>
    </Layout>
  );
}

import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Home, BookOpen, FolderOpen, Mail } from "lucide-react";
import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";

const quickLinks = [
  { href: "/projects", label: "View my work", icon: FolderOpen },
  { href: "/capabilities", label: "What I do", icon: BookOpen },
  { href: "/contact", label: "Get in touch", icon: Mail },
];

export default function NotFound() {
  return (
    <Layout>
      <SEO title="404 — Page Not Found" noindex={true} />
      <div className="min-h-[70vh] flex items-center justify-center px-6">
        <div className="max-w-lg w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-serif text-[8rem] md:text-[10rem] font-bold leading-none text-border/60 select-none mb-2">
              404
            </p>
            <h1 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-3">
              This page doesn't exist
            </h1>
            <p className="text-sm text-muted-foreground mb-10 max-w-sm mx-auto">
              The link might be broken, or the page may have moved. Here's where you can go instead.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 h-10 px-6 bg-primary text-primary-foreground text-sm font-semibold rounded-md hover:bg-primary/90 transition-colors"
              >
                <Home size={14} /> Back home
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 h-10 px-6 border border-border text-sm font-medium rounded-md hover:text-primary transition-colors"
              >
                Contact me <ArrowRight size={14} />
              </Link>
            </div>

            <div className="border-t border-border/40 pt-8">
              <p className="text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase mb-4">
                Or explore
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                {quickLinks.map(({ href, label, icon: Icon }) => (
                  <Link
                    key={href}
                    href={href}
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Icon size={13} />
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}

import { ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";

export function Navbar() {
  const [location] = useLocation();

  const links = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl font-bold tracking-tight text-foreground hover:text-primary transition-colors">
          Portfolio.
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${location.startsWith(link.href) ? "text-primary" : "text-muted-foreground"}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu could be added here, keeping it simple for now */}
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Indie Builder. Crafted with intention.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">GitHub</a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Twitter</a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background text-foreground font-sans">
      <Navbar />
      <main className="flex-1 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="h-full"
        >
          {children}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

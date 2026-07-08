import { useState, useEffect } from "react";
import { ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail, MapPin } from "lucide-react";
import { FaXTwitter, FaLinkedinIn, FaFacebookF, FaWhatsapp } from "react-icons/fa6";

const socialLinks = [
  {
    href: "https://x.com/AlvineOtieno14",
    label: "Twitter / X",
    icon: FaXTwitter,
    testId: "twitter",
  },
  {
    href: "https://ke.linkedin.com/in/alvine-otieno-0351a2286",
    label: "LinkedIn",
    icon: FaLinkedinIn,
    testId: "linkedin",
  },
  {
    href: "https://www.facebook.com/profile.php?id=61591047677884",
    label: "Facebook",
    icon: FaFacebookF,
    testId: "facebook",
  },
  {
    href: "https://wa.me/254700000000",
    label: "WhatsApp",
    icon: FaWhatsapp,
    testId: "whatsapp",
  },
];

export function Navbar() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  // Close sidebar on route change
  useEffect(() => { setOpen(false); }, [location]);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const links = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/capabilities", label: "Capabilities" },
    { href: "/blog", label: "Writing" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-serif text-lg font-bold tracking-tight text-foreground hover:text-primary transition-colors"
            data-testid="link-home"
          >
            Alvine.
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-testid={`link-nav-${link.label.toLowerCase()}`}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.startsWith(link.href)
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 pl-4 border-l border-border/50">
              {socialLinks.map(({ href, label, icon: Icon, testId }) => (
                <a
                  key={testId}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  data-testid={`link-nav-${testId}`}
                  className="text-primary hover:text-primary/70 transition-colors"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <button
            className="md:hidden text-foreground p-1"
            onClick={() => setOpen(true)}
            data-testid="button-mobile-menu"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile sidebar */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
            />

            {/* Sidebar panel */}
            <motion.div
              key="sidebar"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed top-0 right-0 z-50 h-full w-[80vw] max-w-xs bg-background border-l border-border/50 flex flex-col md:hidden"
            >
              {/* Top bar */}
              <div className="flex items-center justify-between px-6 h-16 border-b border-border/50 flex-shrink-0">
                <span className="font-serif text-base font-bold text-foreground">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav links */}
              <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-1">
                {links.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.06, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between py-3.5 border-b border-border/30 text-base font-medium transition-colors hover:text-primary group ${
                        location.startsWith(link.href)
                          ? "text-primary"
                          : "text-foreground"
                      }`}
                    >
                      <span>{link.label}</span>
                      {location.startsWith(link.href) && (
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      )}
                    </Link>
                  </motion.div>
                ))}

                {/* Contact info */}
                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.38, duration: 0.3 }}
                  className="mt-8"
                >
                  <p className="text-[10px] font-bold tracking-[0.18em] text-muted-foreground uppercase mb-4">
                    Contact
                  </p>
                  <div className="flex flex-col gap-3">
                    <a
                      href="mailto:otienoalvine925@gmail.com"
                      className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors"
                    >
                      <Mail size={14} className="text-primary flex-shrink-0" />
                      otienoalvine925@gmail.com
                    </a>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <MapPin size={14} className="text-primary flex-shrink-0" />
                      Kisumu, Kenya
                    </div>
                  </div>
                </motion.div>

                {/* Social links */}
                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.46, duration: 0.3 }}
                  className="mt-8"
                >
                  <p className="text-[10px] font-bold tracking-[0.18em] text-muted-foreground uppercase mb-4">
                    Follow
                  </p>
                  <div className="flex flex-col gap-3">
                    {socialLinks.map(({ href, label, icon: Icon, testId }) => (
                      <a
                        key={testId}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid={`link-mobile-${testId}`}
                        className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors"
                      >
                        <Icon size={14} className="text-primary flex-shrink-0" />
                        {label}
                      </a>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Bottom CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="px-6 py-6 border-t border-border/50 flex-shrink-0"
              >
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center w-full h-11 bg-primary text-primary-foreground text-sm font-semibold rounded-md hover:bg-primary/90 transition-colors"
                >
                  Get in touch
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Alvine. Built from scratch, shipped with pride.
        </p>
        <div className="flex items-center gap-5">
          {socialLinks.map(({ href, label, icon: Icon, testId }) => (
            <a
              key={testId}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              data-testid={`link-footer-${testId}`}
              className="flex items-center gap-2 text-primary hover:text-primary/70 transition-colors group"
            >
              <Icon size={16} />
              <span className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors hidden sm:inline">
                {label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background text-foreground font-sans">
      <Navbar />
      <main className="flex-1 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="h-full"
        >
          {children}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

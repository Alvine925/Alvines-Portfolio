import { motion } from "framer-motion";
import { Download, Mail, MapPin, Phone, Linkedin, ExternalLink } from "lucide-react";
import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
  }),
};

const Section = ({ title, children, delay = 0 }: { title: string; children: React.ReactNode; delay?: number }) => (
  <motion.section
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    custom={delay}
    className="mb-12"
  >
    <div className="flex items-center gap-3 mb-5">
      <h2 className="font-serif text-lg font-bold text-foreground tracking-tight">{title}</h2>
      <div className="flex-1 h-px bg-border/50" />
    </div>
    {children}
  </motion.section>
);

export function Resume() {
  return (
    <Layout>
      <SEO
        canonical="/resume"
        title="Resume — Alvine Otieno | Business Operations & Automation Specialist"
        description="CV of Alvine Otieno — Business Operations & Automation Specialist, Hub Manager, WhatsApp Bot Developer, and Workflow Automation Engineer based in Kisumu, Kenya."
        keywords="Alvine Otieno CV, Alvine Otieno resume, WhatsApp bot developer Kenya CV, automation specialist Kisumu, hire Alvine Otieno"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Resume", href: "/resume" },
        ]}
      />

      <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">

        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-12">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-3">Curriculum Vitae</p>
              <h1 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-1">Alvine Otieno</h1>
              <p className="text-base text-muted-foreground font-medium">
                Business Operations & Automation Specialist · Hub Manager · Web & Bot Developer
              </p>

              <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
                <a href="mailto:otienoalvine925@gmail.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                  <Mail size={13} className="text-primary" />
                  otienoalvine925@gmail.com
                </a>
                <a href="https://wa.me/254110486677" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                  <Phone size={13} className="text-primary" />
                  +254 110 486 677
                </a>
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-primary" />
                  Kisumu, Kenya
                </span>
                <a
                  href="https://ke.linkedin.com/in/alvine-otieno-0351a2286"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-primary transition-colors"
                >
                  <Linkedin size={13} className="text-primary" />
                  linkedin.com/in/alvine-otieno-0351a2286
                </a>
              </div>
            </div>

            {/* Download button */}
            <a
              href="/alvine-otieno-cv.pdf"
              download="Alvine_Otieno_CV.pdf"
              className="flex-shrink-0 inline-flex items-center gap-2 h-10 px-5 border border-primary text-primary text-sm font-semibold rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Download size={14} />
              Download PDF
            </a>
          </div>
        </motion.div>

        {/* Professional Summary */}
        <Section title="Professional Summary">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Results-driven business graduate with hands-on experience managing operations, finances, community programs,
            and digital systems. Combines strong operational leadership with practical technical skills in WhatsApp Cloud API
            bot development, workflow automation (n8n, Make), and website design on WordPress and Wix. Proven track
            record of growing revenue, improving member satisfaction, and introducing systems that increase efficiency.
            Seeking a hybrid operations and technology role where I can streamline business processes, automate repetitive
            work, and deliver measurable growth.
          </p>
        </Section>

        {/* Core Competencies */}
        <Section title="Core Competencies" delay={0.05}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "Business Operations & Strategy",
              "Revenue Growth & Financial Oversight",
              "Budgeting, Petty Cash & Supplier Management",
              "Program & Event Coordination",
              "Training & Workshop Facilitation",
              "Community Engagement & Member Onboarding",
              "Marketing Support & Social Media Content",
              "Leadership & Team Management",
              "Process Improvement & Internal Systems Design",
              "Written & Verbal Communication",
            ].map((c) => (
              <div key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                {c}
              </div>
            ))}
          </div>
        </Section>

        {/* Technical Skills */}
        <Section title="Technical Skills" delay={0.1}>
          <div className="space-y-4">
            {[
              {
                area: "WhatsApp Bot Development",
                detail: "Meta WhatsApp Cloud API, conversational flows, AI-powered assistants, automated customer support",
              },
              {
                area: "AI & Generative Tools",
                detail: "ChatGPT, Claude, Gemini for content, research, and productivity; OpenAI & AI APIs integration into automated workflows; AI-assisted design and marketing asset creation",
              },
              {
                area: "Workflow Automation",
                detail: "n8n, Make (Integromat), multi-app integrations, AI-driven workflows, API connections, scheduled jobs",
              },
              {
                area: "Website Design & CMS",
                detail: "WordPress, Wix, e-commerce stores, landing pages, booking flows, domain and hosting setup",
              },
              {
                area: "E-commerce",
                detail: "Product catalog setup, payment integration, order management, customer-facing storefronts",
              },
              {
                area: "Tools & Platforms",
                detail: "Google Workspace, Microsoft 365, Mailchimp, Canva, Asana, ClickUp, Meta Business Suite, Social media platforms",
              },
            ].map(({ area, detail }) => (
              <div key={area} className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 text-sm">
                <span className="font-semibold text-foreground">{area}</span>
                <span className="sm:col-span-2 text-muted-foreground">{detail}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Selected Projects */}
        <Section title="Selected Projects" delay={0.12}>
          <div className="space-y-6">
            {[
              {
                name: "My Joyfullday — Event Planning Platform & WhatsApp Bot",
                url: "https://myjoyfullday.com",
                detail: 'Designed and built a full event-planning web platform serving 50K+ events and 1M+ guests, featuring 50+ customizable templates, guest management, RSVP tracking, and gift registry. Additionally developed a WhatsApp-based customer support and AI event-assistant bot ("Jitabi") that lets users plan and manage events entirely through WhatsApp, reducing support load and onboarding friction.',
              },
              {
                name: "AutoShine Kenya — E-commerce Store",
                url: "https://autoshine.co.ke",
                detail: "Built a complete e-commerce website for a car-care retailer selling dashboard cleaners, spray paints, and detailing products. Implemented product catalog, filtering, sorting (price, rating, newest), and a recently-viewed section, giving the business a professional online storefront and direct sales channel.",
              },
              {
                name: "Deriv Champions — Forex Trainer Website",
                url: "https://derivchampions.com",
                detail: "Designed and deployed the official website for a Kenyan forex trading mentor (500+ traders trained), including booking flow, Deriv affiliate integration, programme structure pages, and conversion-focused landing sections. Site positions the trainer as a credible authority and drives session bookings.",
              },
            ].map(({ name, url, detail }) => (
              <div key={name} className="border-l-2 border-border/40 pl-4">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-sm font-semibold text-foreground">{name}</h3>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary hover:underline flex items-center gap-1"
                  >
                    {url.replace("https://", "")} <ExternalLink size={10} />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Work Experience */}
        <Section title="Work Experience" delay={0.14}>
          <div className="space-y-8">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                <div>
                  <h3 className="text-sm font-bold text-foreground">Kisumu Hub Manager</h3>
                  <p className="text-xs text-primary font-medium">Kisumu Hub · Kisumu, Kenya</p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">Nov 2023 – May 2025</span>
              </div>
              <ul className="space-y-1.5">
                {[
                  "Grew hub revenue by 50% in Year 1 and an additional 30% in Year 2 through improved member acquisition, retention, and operational efficiency.",
                  "Managed daily operations of the coworking space, ensuring a clean, reliable, and professional environment that consistently met member expectations.",
                  "Onboarded new members and delivered fast, friendly customer service, resolving issues quickly and improving overall member satisfaction.",
                  "Coordinated space bookings and managed internet, equipment, and shared resources, significantly reducing service disruptions and booking conflicts.",
                  "Handled supplier relations, paid bills on time, tracked petty cash, and maintained clear financial records, strengthening accountability and cost control.",
                  "Organized and facilitated multiple events, training sessions, and community meetups that boosted engagement and strengthened the hub's visibility in Kisumu.",
                  "Introduced lightweight internal systems including member sign-in processes, routine maintenance tracking, and usage logs, improving operational efficiency and reporting.",
                  "Supported marketing efforts by producing and sharing social media updates and content, helping attract new members and promote hub activities.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-2 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                <div>
                  <h3 className="text-sm font-bold text-foreground">Business Development Intern</h3>
                  <p className="text-xs text-primary font-medium">Pamela Steele Associates</p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">Oct 2023 – Nov 2023</span>
              </div>
              <ul className="space-y-1.5">
                {[
                  "Supported the business development team in identifying potential clients and new market opportunities.",
                  "Prepared, formatted, and proofread marketing proposals and reports for client-facing use.",
                  "Assisted with research and outreach activities that strengthened the company's pipeline of leads.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-2 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                <div>
                  <h3 className="text-sm font-bold text-foreground">Supply Chain Game Coordinator (Internship)</h3>
                  <p className="text-xs text-primary font-medium">Pamela Steele Associates</p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">Jul 2023 – Oct 2023</span>
              </div>
              <ul className="space-y-1.5">
                {[
                  "Led the planning and execution of a supply chain simulation game designed to teach participants real-world logistics, procurement, and decision-making.",
                  "Recruited and managed participants including small business owners, students, and professionals.",
                  "Coordinated all logistics — venue setup, materials preparation, and session timing — to ensure smooth delivery.",
                  "Worked closely with facilitators and subject matter experts to ensure content was clear, engaging, and aligned with learning objectives.",
                  "Collected participant feedback and prepared a short report with recommendations to improve future sessions.",
                  "Designed and distributed promotional content to raise awareness and attract attendees.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-2 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Education */}
        <Section title="Education" delay={0.16}>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <div>
                <h3 className="text-sm font-bold text-foreground">Bachelor of Entrepreneurship — Second Class Honours (Upper Division)</h3>
                <p className="text-xs text-primary font-medium">Egerton University</p>
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap">2019 – 2023</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <div>
                <h3 className="text-sm font-bold text-foreground">Kenya Certificate of Secondary Education (KCSE) — Mean Grade C+</h3>
                <p className="text-xs text-primary font-medium">Barding Boys High School · Kamnara Mixed Secondary School</p>
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap">2014 – 2018</span>
            </div>
          </div>
        </Section>

        {/* Languages */}
        <Section title="Languages" delay={0.18}>
          <div className="flex gap-6">
            {[{ lang: "English", level: "Fluent" }, { lang: "Kiswahili", level: "Fluent" }].map(({ lang, level }) => (
              <div key={lang} className="text-sm">
                <span className="font-semibold text-foreground">{lang}</span>
                <span className="text-muted-foreground ml-2">— {level}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Download CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
          className="border-t border-border/40 pt-10 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground">Want a copy for your records?</p>
          <a
            href="/alvine-otieno-cv.pdf"
            download="Alvine_Otieno_CV.pdf"
            className="inline-flex items-center gap-2 h-10 px-6 bg-primary text-primary-foreground text-sm font-semibold rounded-md hover:bg-primary/90 transition-colors"
          >
            <Download size={14} />
            Download PDF
          </a>
        </motion.div>

      </div>
    </Layout>
  );
}

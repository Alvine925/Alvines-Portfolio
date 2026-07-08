import { motion } from "framer-motion";
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

export function PrivacyPolicy() {
  const lastUpdated = "8 July 2025";

  return (
    <Layout>
      <SEO
        canonical="/privacy"
        title="Privacy Policy — Alvine Otieno"
        description="Privacy Policy for alvineotieno.com — how personal data submitted via the contact form is collected, stored, and used."
        noindex={false}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy", href: "/privacy" },
        ]}
      />

      <div className="max-w-2xl mx-auto px-6 py-20 md:py-28">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-4">Legal</p>
          <h1 className="font-serif text-2xl md:text-3xl font-bold mb-3">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.08}
          className="prose prose-sm max-w-none text-muted-foreground space-y-8"
        >
          <section>
            <h2 className="font-serif text-base font-bold text-foreground mb-2">1. Who I am</h2>
            <p>
              This website is operated by <strong className="text-foreground">Alvine Otieno</strong>, a freelance
              developer and automation specialist based in Kisumu, Kenya. You can reach me at{" "}
              <a href="mailto:otienoalvine925@gmail.com" className="text-primary hover:underline">
                otienoalvine925@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-serif text-base font-bold text-foreground mb-2">2. What data I collect</h2>
            <p>
              The only personal data this site collects is what you voluntarily submit through the contact form:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Your name</li>
              <li>Your email address</li>
              <li>The message you write</li>
            </ul>
            <p className="mt-3">
              No tracking pixels, advertising cookies, or third-party analytics scripts are loaded on this site.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-base font-bold text-foreground mb-2">3. How I use your data</h2>
            <p>
              Your contact form submission is sent through{" "}
              <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Formspree
              </a>{" "}
              to my email inbox. I use it solely to respond to your enquiry. I do not:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Sell or share your data with third parties</li>
              <li>Add you to any mailing list without your explicit consent</li>
              <li>Use your data for any purpose other than replying to you</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-base font-bold text-foreground mb-2">4. Data storage</h2>
            <p>
              Form submissions are processed by Formspree (see their{" "}
              <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                privacy policy
              </a>
              ) and delivered to my email. I retain email correspondence only as long as necessary to manage
              our professional relationship.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-base font-bold text-foreground mb-2">5. Cookies</h2>
            <p>
              This site does not use cookies for tracking or analytics. Essential browser storage may be used
              by the React application for UI state only — no personally identifiable information is stored.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-base font-bold text-foreground mb-2">6. Your rights</h2>
            <p>
              Under the Kenya Data Protection Act 2019 and applicable international regulations, you have the
              right to access, correct, or request deletion of any personal data I hold about you. To exercise
              these rights, email me at{" "}
              <a href="mailto:otienoalvine925@gmail.com" className="text-primary hover:underline">
                otienoalvine925@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-serif text-base font-bold text-foreground mb-2">7. External links</h2>
            <p>
              This site contains links to external websites (LinkedIn, GitHub, project URLs). I am not
              responsible for the privacy practices of those sites.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-base font-bold text-foreground mb-2">8. Changes to this policy</h2>
            <p>
              If I make material changes to this policy I will update the "last updated" date above. Continued
              use of the site after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-base font-bold text-foreground mb-2">9. Contact</h2>
            <p>
              Questions about this policy? Email{" "}
              <a href="mailto:otienoalvine925@gmail.com" className="text-primary hover:underline">
                otienoalvine925@gmail.com
              </a>
              .
            </p>
          </section>
        </motion.div>
      </div>
    </Layout>
  );
}

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

export function Terms() {
  const lastUpdated = "8 July 2025";

  return (
    <Layout>
      <SEO
        canonical="/terms"
        title="Terms of Use — Alvine Otieno"
        description="Terms of use for alvineotieno.com — the conditions under which this portfolio site and its content may be used."
        noindex={false}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Terms of Use", href: "/terms" },
        ]}
      />

      <div className="max-w-2xl mx-auto px-6 py-20 md:py-28">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-4">Legal</p>
          <h1 className="font-serif text-2xl md:text-3xl font-bold mb-3">Terms of Use</h1>
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
            <h2 className="font-serif text-base font-bold text-foreground mb-2">1. Acceptance of terms</h2>
            <p>
              By accessing <strong className="text-foreground">alvineotieno.com</strong> you agree to these
              terms. If you do not agree, please do not use this site.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-base font-bold text-foreground mb-2">2. Intellectual property</h2>
            <p>
              All content on this site — including text, images, project descriptions, and code — is the
              intellectual property of Alvine Otieno unless otherwise stated. You may not reproduce, distribute,
              or commercially exploit any content without prior written permission. Sharing links to the site is
              always welcome.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-base font-bold text-foreground mb-2">3. Use of the contact form</h2>
            <p>
              The contact form is provided for legitimate professional enquiries. You agree not to use it to
              send spam, unsolicited marketing, or any content that is unlawful, defamatory, or harmful.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-base font-bold text-foreground mb-2">4. Accuracy of information</h2>
            <p>
              I make reasonable efforts to keep information on this site accurate and up-to-date. However, I
              make no warranties — express or implied — about the completeness, accuracy, or fitness for any
              particular purpose of the content.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-base font-bold text-foreground mb-2">5. External links</h2>
            <p>
              This site links to third-party websites for context. I have no control over their content and
              accept no responsibility for them. Links do not imply endorsement.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-base font-bold text-foreground mb-2">6. Limitation of liability</h2>
            <p>
              To the maximum extent permitted by law, Alvine Otieno shall not be liable for any direct,
              indirect, incidental, or consequential loss arising from your use of this site or the information
              on it.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-base font-bold text-foreground mb-2">7. Governing law</h2>
            <p>
              These terms are governed by the laws of the Republic of Kenya. Any disputes shall be subject to
              the exclusive jurisdiction of the courts of Kenya.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-base font-bold text-foreground mb-2">8. Changes</h2>
            <p>
              I reserve the right to update these terms at any time. The "last updated" date at the top will
              reflect the most recent revision. Continued use of the site constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-base font-bold text-foreground mb-2">9. Contact</h2>
            <p>
              Questions about these terms? Email{" "}
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

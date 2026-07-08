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

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-serif text-base font-bold text-foreground mb-3 mt-10 first:mt-0">{children}</h2>
);

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-sm font-bold text-foreground mb-2 mt-6">{children}</h3>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{children}</p>
);

const UL = ({ children }: { children: React.ReactNode }) => (
  <ul className="list-disc pl-5 space-y-1.5 mb-3 text-sm text-muted-foreground">{children}</ul>
);

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

        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.08}>

          <H2>1. Introduction</H2>
          <P>
            This Privacy Policy explains how <strong className="text-foreground">Alvine Otieno</strong> ("I", "me", or "my"),
            operating this personal portfolio website at <strong className="text-foreground">alvineotieno.com</strong>,
            collects, uses, stores, and protects personal information you provide when interacting with this site.
          </P>
          <P>
            I am committed to protecting your privacy and handling your data in an open and transparent manner.
            This policy applies to all visitors, clients, and anyone who contacts me through this website.
            By using this website you agree to the collection and use of information in accordance with this policy.
          </P>
          <P>
            If you have questions or concerns, you can reach me at any time at{" "}
            <a href="mailto:otienoalvine925@gmail.com" className="text-primary hover:underline">
              otienoalvine925@gmail.com
            </a>{" "}
            or via WhatsApp on{" "}
            <a href="https://wa.me/254110486677" className="text-primary hover:underline">
              +254 110 486 677
            </a>
            .
          </P>

          <H2>2. Who I Am (Data Controller)</H2>
          <P>
            The data controller for this website is:
          </P>
          <div className="border border-border/40 rounded-md p-4 mb-4 text-sm text-muted-foreground space-y-1">
            <p><strong className="text-foreground">Name:</strong> Alvine Otieno</p>
            <p><strong className="text-foreground">Role:</strong> Business Operations & Automation Specialist / Freelance Developer</p>
            <p><strong className="text-foreground">Location:</strong> Kisumu, Kenya</p>
            <p><strong className="text-foreground">Email:</strong>{" "}
              <a href="mailto:otienoalvine925@gmail.com" className="text-primary hover:underline">
                otienoalvine925@gmail.com
              </a>
            </p>
            <p><strong className="text-foreground">Phone / WhatsApp:</strong>{" "}
              <a href="https://wa.me/254110486677" className="text-primary hover:underline">
                +254 110 486 677
              </a>
            </p>
            <p><strong className="text-foreground">Website:</strong> https://alvineotieno.com</p>
          </div>

          <H2>3. What Personal Data I Collect</H2>

          <H3>3.1 Data You Provide Directly</H3>
          <P>
            The only personal data this site collects is what you voluntarily submit through the contact form.
            That includes:
          </P>
          <UL>
            <li><strong className="text-foreground">Full name</strong> — to address you properly in my response</li>
            <li><strong className="text-foreground">Email address</strong> — to reply to your enquiry</li>
            <li><strong className="text-foreground">Phone number</strong> — in case you prefer to be contacted by phone or WhatsApp</li>
            <li><strong className="text-foreground">Service interest</strong> — the type of service you are enquiring about (e.g. WhatsApp bot development, workflow automation)</li>
            <li><strong className="text-foreground">Preferred contact method</strong> — whether you'd like a reply by email, phone call, or WhatsApp message</li>
            <li><strong className="text-foreground">Message content</strong> — the details of your enquiry or project</li>
          </UL>
          <P>
            Providing this information is entirely voluntary. However, since all fields are required to submit the form,
            choosing not to provide them means I will not be able to respond to your enquiry.
          </P>

          <H3>3.2 Data Collected Automatically</H3>
          <P>
            This website does <strong className="text-foreground">not</strong> use Google Analytics, Facebook Pixel,
            or any other third-party analytics or advertising tracking scripts. No cookies are set for tracking
            purposes. No fingerprinting or behavioural profiling takes place.
          </P>
          <P>
            Standard server access logs (IP address, browser type, page visited, timestamp) may be retained briefly
            by the hosting provider (Replit) for security and diagnostic purposes, but these are not processed by me
            for any marketing or profiling purpose.
          </P>

          <H3>3.3 Sensitive Data</H3>
          <P>
            I do not knowingly collect sensitive personal data (special category data) such as health information,
            financial account details, national ID numbers, or data relating to minors. Please do not include such
            information in your message.
          </P>

          <H2>4. How I Use Your Data</H2>
          <P>I use the information you submit through the contact form for the following purposes:</P>
          <UL>
            <li>To respond to your enquiry via your preferred contact method (email, phone, or WhatsApp)</li>
            <li>To understand what service you need so I can give you a relevant and useful reply</li>
            <li>To send you a quote, proposal, or follow-up related to your project</li>
            <li>To manage our professional relationship if you become a client</li>
          </UL>
          <P>
            I will <strong className="text-foreground">never</strong>:
          </P>
          <UL>
            <li>Sell your personal data to any third party</li>
            <li>Share your data with advertisers or data brokers</li>
            <li>Add you to any newsletter or marketing list without your explicit consent</li>
            <li>Use your data for any purpose other than responding to your enquiry and managing any resulting professional relationship</li>
            <li>Send you unsolicited marketing messages</li>
          </UL>

          <H2>5. Legal Basis for Processing</H2>
          <P>
            Under the <strong className="text-foreground">Kenya Data Protection Act, 2019 (No. 24 of 2019)</strong>,
            I process your personal data on the following legal bases:
          </P>
          <UL>
            <li>
              <strong className="text-foreground">Consent</strong> — by submitting the contact form, you consent to
              me processing your data in order to respond to your enquiry. You may withdraw this consent at any time
              by contacting me via email.
            </li>
            <li>
              <strong className="text-foreground">Legitimate interests</strong> — managing client enquiries and
              professional communications is a legitimate business interest.
            </li>
            <li>
              <strong className="text-foreground">Contract</strong> — if you engage me for a project, processing
              your contact details is necessary to fulfil our contractual obligations.
            </li>
          </UL>

          <H2>6. How Your Data Is Stored and Processed</H2>

          <H3>6.1 Formspree</H3>
          <P>
            Contact form submissions are processed by{" "}
            <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Formspree Inc.
            </a>
            , a US-based form processing service. When you submit the form, Formspree receives your data and
            forwards it to my email inbox. Formspree may briefly store form submissions on its servers.
            Please review{" "}
            <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Formspree's Privacy Policy
            </a>{" "}
            for details on how they handle your data. I rely on Formspree's standard data processing agreement
            for GDPR and international data transfer compliance.
          </P>

          <H3>6.2 Email</H3>
          <P>
            After Formspree delivers the submission, it arrives in my email inbox (Gmail / Google Workspace).
            Google's standard privacy policy applies to data stored in Gmail. I retain email correspondence
            only for as long as needed to manage your enquiry or professional relationship, and no longer
            than 3 years after our last communication unless legal obligations require longer retention.
          </P>

          <H3>6.3 WhatsApp</H3>
          <P>
            If you select WhatsApp as your preferred contact method, I will contact you via WhatsApp using
            your phone number. WhatsApp is operated by Meta Platforms Inc. and governed by{" "}
            <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              WhatsApp's Privacy Policy
            </a>
            . I do not store your phone number in any database beyond what is recorded in the form submission
            email and my phone's contacts if we proceed to work together.
          </P>

          <H3>6.4 Security</H3>
          <P>
            All data transmitted through this site is sent over HTTPS (TLS encryption). I take reasonable
            technical and organisational measures to protect your data from unauthorised access, loss, or
            disclosure. However, no internet transmission is 100% secure, and I cannot guarantee absolute security.
          </P>

          <H2>7. Data Retention</H2>
          <P>
            I retain personal data only for as long as necessary:
          </P>
          <UL>
            <li>
              <strong className="text-foreground">Enquiries that do not lead to a project:</strong> I will delete
              or anonymise your data within 12 months of our last communication.
            </li>
            <li>
              <strong className="text-foreground">Client project data:</strong> Retained for up to 5 years after
              project completion for legal and accounting purposes, then securely deleted.
            </li>
            <li>
              <strong className="text-foreground">Formspree submissions:</strong> Subject to Formspree's own
              retention policy (see their privacy policy). You may also request deletion directly from Formspree.
            </li>
          </UL>
          <P>
            If you want your data deleted earlier, simply email me and I will act within 30 days.
          </P>

          <H2>8. Sharing of Personal Data</H2>
          <P>
            I do not sell, trade, rent, or share your personal data with third parties for marketing purposes.
            The only third-party processors that may handle your data are:
          </P>
          <UL>
            <li><strong className="text-foreground">Formspree Inc.</strong> — form processing (see Section 6.1)</li>
            <li><strong className="text-foreground">Google LLC (Gmail)</strong> — email delivery and storage</li>
            <li><strong className="text-foreground">Replit Inc.</strong> — website hosting (may process server logs)</li>
          </UL>
          <P>
            All third-party processors are used on the basis that they maintain adequate data protection standards.
            I will never transfer your data to parties outside these service providers without your explicit consent,
            except where required to do so by law or court order.
          </P>

          <H2>9. Cookies and Tracking Technologies</H2>
          <P>
            This website does not set tracking, advertising, or analytics cookies. The React application may use
            browser <code className="text-xs bg-muted px-1 py-0.5 rounded">sessionStorage</code> or{" "}
            <code className="text-xs bg-muted px-1 py-0.5 rounded">localStorage</code> for UI state only
            (such as the current page or theme preference). No personally identifiable information is stored in
            browser storage.
          </P>
          <P>
            If you are visiting from a region where cookie consent is legally required (EU, UK, etc.), you should
            be aware that this site does not require cookie consent because no non-essential cookies are used.
          </P>

          <H2>10. Your Rights Under the Kenya Data Protection Act, 2019</H2>
          <P>
            Under the Kenya Data Protection Act, 2019 and (where applicable) the EU General Data Protection
            Regulation (GDPR), you have the following rights regarding your personal data:
          </P>
          <UL>
            <li>
              <strong className="text-foreground">Right of access:</strong> You may request a copy of the personal
              data I hold about you.
            </li>
            <li>
              <strong className="text-foreground">Right to rectification:</strong> You may request that I correct
              inaccurate or incomplete data.
            </li>
            <li>
              <strong className="text-foreground">Right to erasure ("right to be forgotten"):</strong> You may
              request that I delete your personal data, subject to any legal retention obligations.
            </li>
            <li>
              <strong className="text-foreground">Right to restrict processing:</strong> You may request that I
              stop processing your data while a dispute about its accuracy or use is resolved.
            </li>
            <li>
              <strong className="text-foreground">Right to data portability:</strong> You may request a copy of
              your data in a commonly used, machine-readable format.
            </li>
            <li>
              <strong className="text-foreground">Right to object:</strong> You may object to processing based on
              legitimate interests at any time.
            </li>
            <li>
              <strong className="text-foreground">Right to withdraw consent:</strong> Where processing is based on
              your consent, you may withdraw it at any time without affecting the lawfulness of processing carried
              out before withdrawal.
            </li>
          </UL>
          <P>
            To exercise any of these rights, email me at{" "}
            <a href="mailto:otienoalvine925@gmail.com" className="text-primary hover:underline">
              otienoalvine925@gmail.com
            </a>
            . I will respond within 30 days. I may need to verify your identity before fulfilling a request.
          </P>

          <H2>11. Children's Privacy</H2>
          <P>
            This website is not directed at children under the age of 13. I do not knowingly collect personal
            data from children. If you believe a child has submitted information through this site, please contact
            me immediately and I will delete it.
          </P>

          <H2>12. Links to External Websites</H2>
          <P>
            This site contains links to external platforms including LinkedIn, Twitter/X, Facebook, GitHub,
            WhatsApp, and client project websites. These links are provided for convenience and context.
            I am not responsible for the privacy practices or content of those external sites. I encourage you
            to read the privacy policy of any site you visit.
          </P>

          <H2>13. International Data Transfers</H2>
          <P>
            Some of my service providers (Formspree, Google, Replit) are based in the United States. When data
            is transferred internationally, I rely on those providers' standard contractual clauses, Privacy
            Shield successors, or other approved transfer mechanisms to ensure adequate protection. By submitting
            the contact form, you acknowledge that your data may be processed outside Kenya.
          </P>

          <H2>14. Changes to This Policy</H2>
          <P>
            I may update this Privacy Policy from time to time to reflect changes in how I handle data, new
            legal requirements, or improvements to my practices. When I make material changes, I will update
            the "last updated" date at the top of this page. I encourage you to check this page periodically.
            Continued use of the website after changes are posted constitutes your acceptance of the revised policy.
          </P>

          <H2>15. How to Contact Me or Make a Complaint</H2>
          <P>
            If you have questions, concerns, or complaints about how I handle your personal data, please contact me:
          </P>
          <UL>
            <li><strong className="text-foreground">Email:</strong>{" "}
              <a href="mailto:otienoalvine925@gmail.com" className="text-primary hover:underline">
                otienoalvine925@gmail.com
              </a>
            </li>
            <li><strong className="text-foreground">WhatsApp:</strong>{" "}
              <a href="https://wa.me/254110486677" className="text-primary hover:underline">
                +254 110 486 677
              </a>
            </li>
          </UL>
          <P>
            If you are not satisfied with my response, you have the right to lodge a complaint with the
            {" "}<strong className="text-foreground">Office of the Data Protection Commissioner of Kenya (ODPC)</strong>{" "}
            at{" "}
            <a href="https://www.odpc.go.ke" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              www.odpc.go.ke
            </a>
            . If you are located in the EU/EEA, you may also contact your local supervisory authority.
          </P>

        </motion.div>
      </div>
    </Layout>
  );
}

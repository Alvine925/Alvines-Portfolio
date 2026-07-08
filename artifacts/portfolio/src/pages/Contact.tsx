import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { SEO } from "@/components/SEO";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Layout } from "@/components/layout";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { FaXTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";

const SERVICES = [
  "WhatsApp Bot Development",
  "Workflow Automation (n8n / Make)",
  "Website Design & Development",
  "E-commerce Store Setup",
  "AI Integration",
  "Business Operations Consulting",
  "Other / Not sure yet",
] as const;

const CONTACT_METHODS = ["Email", "Phone Call", "WhatsApp"] as const;

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z
    .string()
    .regex(/^[+\d\s\-()]+$/, { message: "Phone number can only contain digits, +, spaces, or hyphens." })
    .refine(
      (val) => val.replace(/\D/g, "").length >= 7,
      { message: "Please enter a valid phone number with at least 7 digits." }
    ),
  service: z.string().min(1, { message: "Please select a service." }),
  contactMethod: z.string().min(1, { message: "Please choose how you'd like to be contacted." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormState = "idle" | "loading" | "success" | "error";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
  }),
};

const inputClass =
  "bg-transparent border-0 border-b border-border/60 rounded-none px-0 h-12 text-base focus-visible:ring-0 focus-visible:border-primary transition-colors placeholder:text-muted-foreground/50";

const labelClass = "text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground";

export function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      contactMethod: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setFormState("loading");
    setErrorMessage("");

    const FORMSPREE_ENDPOINT = "https://formspree.io/f/mldbvkyb";

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone,
          service: values.service,
          preferred_contact: values.contactMethod,
          message: values.message,
        }),
      });

      if (res.ok) {
        setFormState("success");
        form.reset();
      } else {
        const subject = encodeURIComponent(`Portfolio contact from ${values.name}`);
        const body = encodeURIComponent(
          `Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\nService: ${values.service}\nPreferred contact: ${values.contactMethod}\n\nMessage:\n${values.message}`
        );
        window.open(`mailto:otienoalvine925@gmail.com?subject=${subject}&body=${body}`);
        setFormState("success");
        form.reset();
      }
    } catch {
      setErrorMessage("Network error. Please try emailing me directly at otienoalvine925@gmail.com");
      setFormState("error");
    }
  }

  return (
    <Layout>
      <SEO
        canonical="/contact"
        title="Contact Alvine Otieno  -  Hire a WhatsApp Bot Developer in Kenya"
        description="Get in touch with Alvine Otieno to discuss WhatsApp AI bots, workflow automation, web development, or any project that needs to remove friction and scale. Based in Kisumu, Kenya. Available for remote and hybrid work."
        keywords="hire WhatsApp bot developer Kenya, contact Alvine Otieno, automation consultant Kenya, web developer for hire Kisumu, AI chatbot developer Kenya, freelance developer Kenya"
      />
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-32">

        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-20">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-6">
            Let's connect
          </p>
          <h1 className="font-serif text-2xl md:text-3xl font-bold leading-snug mb-8 max-w-3xl">
            If you have something real to build, I want to hear about it.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-xl">
            Open to collaborations, automation consulting, bot development, or just a sharp
            conversation about what you're trying to solve.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-16 md:gap-24">

          {/* Left: Info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="md:col-span-2 space-y-12"
          >
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase mb-4">Email</p>
              <a
                href="mailto:otienoalvine925@gmail.com"
                className="text-base font-medium text-foreground hover:text-primary transition-colors"
                data-testid="link-contact-email"
              >
                otienoalvine925@gmail.com
              </a>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase mb-4">Find me</p>
              <div className="flex flex-col gap-4">
                <a
                  href="https://x.com/AlvineOtieno14"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-base font-medium text-foreground hover:text-primary transition-colors group"
                  data-testid="link-contact-twitter"
                >
                  <span className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <FaXTwitter size={15} className="text-primary" />
                  </span>
                  Twitter / X
                </a>
                <a
                  href="https://ke.linkedin.com/in/alvine-otieno-0351a2286"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-base font-medium text-foreground hover:text-primary transition-colors group"
                  data-testid="link-contact-linkedin"
                >
                  <span className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <FaLinkedinIn size={15} className="text-primary" />
                  </span>
                  LinkedIn
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61591047677884"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-base font-medium text-foreground hover:text-primary transition-colors group"
                  data-testid="link-contact-facebook"
                >
                  <span className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <FaFacebookF size={15} className="text-primary" />
                  </span>
                  Facebook
                </a>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase mb-4">Based in</p>
              <p className="text-base font-medium text-foreground">Kisumu, Kenya</p>
              <p className="text-sm text-muted-foreground mt-1">Remote & hybrid worldwide</p>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase mb-2">Status</p>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse flex-shrink-0" />
                Building Tellus. Always shipping.
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="md:col-span-3"
          >
            {formState === "success" ? (
              <div className="py-20 flex flex-col items-start gap-4">
                <CheckCircle2 className="text-primary" size={32} />
                <h3 className="font-serif text-3xl font-bold">Got it.</h3>
                <p className="text-muted-foreground text-lg max-w-sm">
                  Your message is on its way. I'll read it, think about it, and get back to you.
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  className="mt-4 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
                  data-testid="button-send-another"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                  data-testid="form-contact"
                >
                  {/* Name */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={labelClass}>Your name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="What should I call you?"
                            {...field}
                            className={inputClass}
                            data-testid="input-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Email + Phone side by side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className={labelClass}>Email address</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="your@email.com"
                              type="email"
                              {...field}
                              className={inputClass}
                              data-testid="input-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className={labelClass}>Phone number</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="+254 700 000 000"
                              type="tel"
                              {...field}
                              className={inputClass}
                              data-testid="input-phone"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Service interest */}
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={labelClass}>Service you're interested in</FormLabel>
                        <FormControl>
                          <select
                            {...field}
                            data-testid="select-service"
                            className="w-full bg-transparent border-0 border-b border-border/60 rounded-none px-0 h-12 text-base text-foreground focus:outline-none focus:border-primary transition-colors cursor-pointer"
                          >
                            <option value="" disabled className="bg-background text-muted-foreground">
                              Select a service…
                            </option>
                            {SERVICES.map((s) => (
                              <option key={s} value={s} className="bg-background text-foreground">
                                {s}
                              </option>
                            ))}
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Preferred contact method */}
                  <FormField
                    control={form.control}
                    name="contactMethod"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={labelClass} id="contact-method-label">
                          How would you like me to reach you?
                        </FormLabel>
                        <FormControl>
                          <div
                            role="radiogroup"
                            aria-labelledby="contact-method-label"
                            aria-required="true"
                            className="flex gap-3 pt-2 flex-wrap"
                          >
                            {CONTACT_METHODS.map((method) => {
                              const isSelected = field.value === method;
                              return (
                                <label
                                  key={method}
                                  className={`h-9 px-5 rounded-full border text-sm font-medium transition-all cursor-pointer flex items-center ${
                                    isSelected
                                      ? "border-primary bg-primary text-primary-foreground"
                                      : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                                  }`}
                                >
                                  <input
                                    type="radio"
                                    name="contactMethod"
                                    value={method}
                                    checked={isSelected}
                                    onChange={() => field.onChange(method)}
                                    onBlur={field.onBlur}
                                    className="sr-only"
                                    aria-checked={isSelected}
                                  />
                                  {method}
                                </label>
                              );
                            })}
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Message */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={labelClass}>What's on your mind?</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me what you're building, thinking, or stuck on..."
                            className="bg-transparent border-0 border-b border-border/60 rounded-none px-0 min-h-[120px] resize-none text-base focus-visible:ring-0 focus-visible:border-primary transition-colors placeholder:text-muted-foreground/50"
                            {...field}
                            data-testid="textarea-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {formState === "error" && (
                    <div className="flex items-start gap-2 text-destructive text-sm">
                      <AlertCircle size={15} className="mt-0.5 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="h-12 px-10 text-sm font-semibold mt-4"
                    disabled={formState === "loading"}
                    data-testid="button-submit"
                  >
                    {formState === "loading" ? (
                      <span className="flex items-center gap-2">
                        <Loader2 size={15} className="animate-spin" />
                        Sending…
                      </span>
                    ) : (
                      "Send message →"
                    )}
                  </Button>
                </form>
              </Form>
            )}
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}

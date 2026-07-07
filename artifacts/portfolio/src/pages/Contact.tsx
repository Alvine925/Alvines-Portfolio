import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
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
import { CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export function Contact() {
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsSuccess(true);
    form.reset();
  }

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-4 flex items-center gap-2">
              <span className="w-6 h-px bg-primary inline-block" />
              Let's connect
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
              If you have something real to build, I want to hear about it.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              I'm open to collaborations, consulting on product ideas, or just a good
              conversation about what you're trying to solve. I don't do small talk — but
              I do do sharp thinking.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  Find me online
                </h3>
                <div className="flex gap-6 flex-wrap">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-foreground hover:text-primary transition-colors"
                    data-testid="link-contact-github"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-foreground hover:text-primary transition-colors"
                    data-testid="link-contact-twitter"
                  >
                    Twitter / X
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-foreground hover:text-primary transition-colors"
                    data-testid="link-contact-linkedin"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                  Based in
                </h3>
                <p className="font-medium text-foreground">Kenya — available worldwide.</p>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                  Currently
                </h3>
                <p className="text-muted-foreground">
                  Building Tellus. Always shipping something.{" "}
                  <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="bg-card border border-border rounded-2xl p-8 shadow-sm"
          >
            {isSuccess ? (
              <div className="min-h-[320px] flex flex-col items-center justify-center text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <CheckCircle2 className="text-primary" size={28} />
                </div>
                <h3 className="font-serif text-2xl font-bold">Got it.</h3>
                <p className="text-muted-foreground max-w-xs">
                  Your message is in. I'll read it, think about it, and get back to you.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setIsSuccess(false)}
                  className="mt-2"
                  data-testid="button-send-another"
                >
                  Send another
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                  data-testid="form-contact"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="What should I call you?"
                            {...field}
                            className="bg-background"
                            data-testid="input-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="your@email.com"
                            type="email"
                            {...field}
                            className="bg-background"
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>What's on your mind?</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me what you're building, thinking, or stuck on..."
                            className="min-h-[140px] resize-none bg-background"
                            {...field}
                            data-testid="textarea-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full h-12 text-sm font-semibold"
                    data-testid="button-submit"
                  >
                    Send it
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

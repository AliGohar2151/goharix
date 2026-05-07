"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(values);
    setIsSubmitting(false);
    setIsSuccess(true);
    form.reset();
  }

  return (
    <div className="py-32 relative min-h-screen">
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_100%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Let&apos;s Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Together</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Fill out the form below and our engineering team will get back to you within 24 hours to discuss your project requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-[#11182E]/50 backdrop-blur-xl border border-white/5 rounded-3xl p-8 flex items-start gap-5 group hover:border-primary/30 transition-colors duration-500">
              <div className="p-4 bg-primary/10 rounded-2xl text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-1 text-foreground">Email Us</h3>
                <p className="text-muted-foreground font-light">hello@goharix.com</p>
              </div>
            </div>
            
            <div className="bg-[#11182E]/50 backdrop-blur-xl border border-white/5 rounded-3xl p-8 flex items-start gap-5 group hover:border-secondary/30 transition-colors duration-500">
              <div className="p-4 bg-secondary/10 rounded-2xl text-secondary group-hover:scale-110 group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-1 text-foreground">Visit Us</h3>
                <p className="text-muted-foreground font-light leading-relaxed">123 Tech Boulevard<br/>San Francisco, CA 94107</p>
              </div>
            </div>
            
            <div className="bg-[#11182E]/50 backdrop-blur-xl border border-white/5 rounded-3xl p-8 flex items-start gap-5 group hover:border-indigo-400/30 transition-colors duration-500">
              <div className="p-4 bg-indigo-400/10 rounded-2xl text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-400 group-hover:text-white transition-all duration-300">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-1 text-foreground">Call Us</h3>
                <p className="text-muted-foreground font-light">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-[#11182E]/70 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.3)]">
              {isSuccess ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold mb-3">Message Sent!</h3>
                  <p className="text-muted-foreground text-lg font-light">We&apos;ve received your request and will be in touch shortly.</p>
                  <Button className="mt-10 rounded-full h-12 px-8" onClick={() => setIsSuccess(false)} variant="outline">
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground ml-1">Full Name</label>
                      <input 
                        {...form.register("name")} 
                        className="w-full h-14 px-4 rounded-2xl bg-black/20 border border-white/10 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50 text-foreground" 
                        placeholder="John Doe"
                      />
                      {form.formState.errors.name && <p className="text-sm text-red-400 ml-1">{form.formState.errors.name.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground ml-1">Email Address</label>
                      <input 
                        {...form.register("email")} 
                        className="w-full h-14 px-4 rounded-2xl bg-black/20 border border-white/10 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50 text-foreground" 
                        placeholder="john@example.com"
                      />
                      {form.formState.errors.email && <p className="text-sm text-red-400 ml-1">{form.formState.errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground ml-1">Company (Optional)</label>
                    <input 
                      {...form.register("company")} 
                      className="w-full h-14 px-4 rounded-2xl bg-black/20 border border-white/10 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50 text-foreground" 
                      placeholder="Acme Inc."
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground ml-1">Project Details</label>
                    <textarea 
                      {...form.register("message")} 
                      className="w-full min-h-[160px] p-4 rounded-2xl bg-black/20 border border-white/10 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none placeholder:text-muted-foreground/50 text-foreground" 
                      placeholder="Tell us about your project requirements, timeline, and goals..."
                    />
                    {form.formState.errors.message && <p className="text-sm text-red-400 ml-1">{form.formState.errors.message.message}</p>}
                  </div>

                  <Button type="submit" className="w-full rounded-2xl h-14 text-lg font-medium shadow-[0_0_30px_rgba(79,70,229,0.2)] hover:shadow-[0_0_40px_rgba(79,70,229,0.4)] transition-all group" disabled={isSubmitting}>
                    {isSubmitting ? "Sending Request..." : "Send Message"}
                    {!isSubmitting && <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

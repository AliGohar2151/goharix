import { Metadata } from "next";
import CTA from "@/components/sections/CTA";
import { Sparkles, Target, Zap, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Goharix",
  description:
    "Learn about Goharix, our mission, and our approach to enterprise software development.",
};

export default function AboutPage() {
  return (
    <div className="pb-24 relative">
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_100%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-40 right-1/4 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="pt-32 pb-20 text-center container mx-auto px-4 relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Goharix
          </span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
          We are an elite software engineering team focused on delivering
          high-impact digital solutions.
        </p>
      </div>

      <div className="container mx-auto px-4 max-w-5xl mb-32 relative z-10">
        <div className="bg-[#11182E]/50 backdrop-blur-xl border border-white/5 rounded-[3rem] p-10 md:p-16 shadow-[0_0_50px_rgba(0,0,0,0.2)]">
          <div className="prose prose-invert prose-lg md:prose-xl max-w-none font-light leading-relaxed text-muted-foreground">
            <p className="text-2xl text-foreground font-medium mb-12 text-center max-w-3xl mx-auto leading-snug">
              At Goharix, we believe that software should be an asset, not a
              liability. We specialize in building custom, high-performance web
              applications, internal tools, and AI integrations that help
              enterprises scale, automate, and dominate their industries.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
              <div className="space-y-6">
                <div className="inline-flex h-14 w-14 rounded-2xl bg-primary/10 items-center justify-center text-primary mb-2 border border-primary/20">
                  <Target className="h-7 w-7" />
                </div>
                <h2 className="text-3xl font-bold text-foreground m-0">
                  Our Philosophy
                </h2>
                <p className="m-0 text-lg">
                  We don&apos;t just write code; we engineer solutions. Our
                  approach is deeply rooted in understanding your business
                  objectives first, then architecting a technical solution that
                  perfectly aligns with those goals. We prioritize clean code,
                  modern architecture, and exceptional user experiences.
                </p>
              </div>

              <div className="space-y-6">
                <div className="inline-flex h-14 w-14 rounded-2xl bg-secondary/10 items-center justify-center text-secondary mb-2 border border-secondary/20">
                  <Sparkles className="h-7 w-7" />
                </div>
                <h2 className="text-3xl font-bold text-foreground m-0">
                  Why Choose Us?
                </h2>
                <ul className="m-0 space-y-4 list-none p-0">
                  <li className="flex items-start gap-4">
                    <Zap className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <span>
                      <strong className="text-foreground">
                        Technical Excellence:
                      </strong>{" "}
                      Modern frameworks and robust cloud infrastructure.
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <Sparkles className="h-6 w-6 text-secondary shrink-0 mt-1" />
                    <span>
                      <strong className="text-foreground">
                        Design-Driven:
                      </strong>{" "}
                      Premium UI/UX practices ensuring high user adoption.
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <Shield className="h-6 w-6 text-indigo-400 shrink-0 mt-1" />
                    <span>
                      <strong className="text-foreground">
                        Enterprise Reliability:
                      </strong>{" "}
                      Built with security, testing, and CI/CD pipelines.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTA />
    </div>
  );
}

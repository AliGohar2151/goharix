import { Metadata } from "next";
import CTA from "@/components/sections/CTA";
import { Code, Monitor, ShoppingCart, LayoutDashboard, Package, CreditCard, Cpu, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Goharix",
  description: "Explore our enterprise software development services including web apps, AI, and internal tools.",
};

const servicesList = [
  { id: "custom-web", icon: Code, title: "Custom Web Development", desc: "We build blazing fast, SEO-optimized, and highly secure websites tailored to represent your enterprise brand." },
  { id: "applications", icon: Monitor, title: "Web-Based Applications", desc: "From SaaS platforms to complex enterprise portals, we engineer scalable applications using Next.js and React." },
  { id: "ecommerce", icon: ShoppingCart, title: "Ecommerce Stores", desc: "Headless commerce and Shopify solutions optimized for conversions and rapid load times." },
  { id: "internal-tools", icon: LayoutDashboard, title: "Internal Tools & Dashboards", desc: "Bespoke software to automate your operations, visualize data, and manage your business efficiently." },
  { id: "inventory", icon: Package, title: "Inventory Management Systems", desc: "Custom inventory tracking solutions integrated directly into your existing operational workflows." },
  { id: "pos", icon: CreditCard, title: "POS Systems", desc: "Cloud-based point of sale solutions customized for retail, restaurant, or service businesses." },
  { id: "ai", icon: Cpu, title: "AI Solutions", desc: "Leverage LLMs, custom machine learning models, and intelligent automation to gain a competitive edge." },
  { id: "deployment", icon: Wrench, title: "Deployment & Maintenance", desc: "CI/CD pipelines, cloud infrastructure management (AWS/Vercel), and 24/7 monitoring." },
];

export default function ServicesPage() {
  return (
    <div className="pb-24 relative">
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_100%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="pt-32 pb-24 text-center container mx-auto px-4 relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Services</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
          Comprehensive engineering solutions designed to scale your enterprise and dominate your industry.
        </p>
      </div>

      <div className="container mx-auto px-4 space-y-32 mb-32 relative z-10">
        {servicesList.map((service, index) => {
          const Icon = service.icon;
          const isEven = index % 2 === 0;
          return (
            <div key={service.id} id={service.id} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center group`}>
              <div className="w-full md:w-1/2">
                <div className="relative h-80 w-full rounded-[2.5rem] bg-[#11182E]/50 backdrop-blur-xl border border-white/5 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-[0_0_50px_-10px_rgba(79,70,229,0.3)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Icon className="relative z-10 h-32 w-32 text-white/10 group-hover:text-primary/30 transition-colors duration-500 group-hover:scale-110" />
                  {/* Decorative glowing orb inside card */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/20 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <div className="inline-flex h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/10 items-center justify-center text-primary shadow-[0_0_20px_rgba(79,70,229,0.15)] border border-white/5">
                  <Icon className="h-8 w-8" />
                </div>
                <h2 className="text-4xl font-bold tracking-tight">{service.title}</h2>
                <p className="text-xl text-muted-foreground leading-relaxed font-light">{service.desc}</p>
                <ul className="space-y-4 text-muted-foreground mt-8">
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(6,182,212,0.8)]" /> 
                    <span className="font-medium">Modern Tech Stack</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_rgba(79,70,229,0.8)]" /> 
                    <span className="font-medium">Scalable Architecture</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.8)]" /> 
                    <span className="font-medium">Secure & Reliable</span>
                  </li>
                </ul>
              </div>
            </div>
          )
        })}
      </div>

      <CTA />
    </div>
  );
}

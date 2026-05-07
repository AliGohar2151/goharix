"use client";
import { motion } from "framer-motion";
import { Code, Monitor, ShoppingCart, LayoutDashboard, Package, CreditCard, Cpu, Wrench, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  { icon: Code, title: "Custom Web Development", desc: "High-performance websites tailored to your brand." },
  { icon: Monitor, title: "Web-Based Applications", desc: "Scalable SaaS platforms and enterprise applications." },
  { icon: ShoppingCart, title: "Ecommerce Stores", desc: "Conversion-optimized digital storefronts." },
  { icon: LayoutDashboard, title: "Internal Tools & Dashboards", desc: "Custom software to streamline your operations." },
  { icon: Package, title: "Inventory Management", desc: "Track and manage stock efficiently across locations." },
  { icon: CreditCard, title: "POS Systems", desc: "Modern point-of-sale solutions for retail." },
  { icon: Cpu, title: "AI Solutions", desc: "Integrate intelligent automation and machine learning." },
  { icon: Wrench, title: "Deployment & Maintenance", desc: "Reliable hosting, monitoring, and ongoing support." },
];

export default function ServicesList() {
  return (
    <section className="py-32 relative z-10">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Our Expertise
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-xl max-w-2xl mx-auto font-light"
          >
            Comprehensive software engineering services designed for modern enterprises.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className="group relative p-8 rounded-3xl bg-[#11182E]/60 backdrop-blur-xl border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden hover:shadow-[0_0_40px_-10px_rgba(79,70,229,0.2)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:text-secondary transition-all duration-500 border border-white/5">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-light">
                    {service.desc}
                  </p>
                  <Link href="/services" className="text-primary text-sm font-medium flex items-center group/link mt-auto w-fit">
                    Learn more 
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}

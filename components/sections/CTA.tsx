"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5" />
      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-[#11182E]/80 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-10 md:p-20 text-center max-w-5xl mx-auto shadow-[0_0_100px_rgba(79,70,229,0.15)] relative overflow-hidden"
        >
          {/* Decorative glowing blobs */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/30 rounded-full blur-[100px]" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]" />
          
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Ready to transform your <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">digital presence?</span>
            </h2>
            <p className="text-muted-foreground text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Let&apos;s discuss how Goharix can engineer the perfect software solution for your specific business needs.
            </p>
            <Button size="lg" className="rounded-full h-14 px-10 text-lg shadow-[0_0_40px_rgba(79,70,229,0.3)] hover:shadow-[0_0_60px_rgba(79,70,229,0.5)] transition-all duration-300 group" asChild>
              <Link href="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1.5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

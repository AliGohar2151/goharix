"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-32 lg:pt-48 lg:pb-40 min-h-[90vh] flex items-center justify-center">
      {/* Dynamic Backgrounds */}
      <div className="absolute inset-0 bg-[#0B1020]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute top-0 -translate-y-12 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/30 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 translate-y-1/3 right-0 w-[600px] h-[600px] bg-secondary/20 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container relative mx-auto px-4 flex flex-col items-center text-center z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.15)]"
        >
          <Sparkles className="h-4 w-4" />
          <span className="font-medium tracking-wide">Next-Gen Enterprise Solutions</span>
          <ChevronRight className="h-4 w-4 ml-1 opacity-50" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter max-w-5xl text-foreground mb-8 leading-[1.1]"
        >
          Engineer the Future with <br className="hidden md:block" />
          <span className="relative inline-block mt-2">
            <span className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary blur-2xl opacity-20 animate-pulse" />
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#818cf8] to-secondary">
              Goharix
            </span>
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-2xl text-muted-foreground/90 max-w-3xl mb-12 leading-relaxed font-light"
        >
          We architect highly scalable, conversion-focused digital platforms and intelligent automation to dominate your industry.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto items-center"
        >
          <Button size="lg" asChild className="group relative overflow-hidden rounded-full h-14 px-8 text-base shadow-[0_0_40px_rgba(79,70,229,0.4)] hover:shadow-[0_0_60px_rgba(79,70,229,0.6)] transition-all duration-300">
            <Link href="/contact">
              <span className="relative z-10 flex items-center font-semibold tracking-wide">
                Start a Project 
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1.5" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 -translate-x-[150%] skew-x-[-45deg] group-hover:animate-[shimmer_1.5s_infinite]" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="rounded-full h-14 px-8 text-base border-white/10 hover:bg-white/5 backdrop-blur-md transition-all duration-300">
            <Link href="/services">Explore Services</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

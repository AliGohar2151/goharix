"use client";
import Link from 'next/link';
import { Button } from '../ui/button';
import { Menu, X, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-[#0B1020]/70 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]' : 'bg-transparent border-b border-transparent'}`}>
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-[0_0_20px_rgba(79,70,229,0.3)] group-hover:scale-105 transition-all">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-foreground">Goharix</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground group py-2">
              {link.label}
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </Link>
          ))}
          <Button asChild className="rounded-full shadow-[0_0_15px_rgba(79,70,229,0.2)] hover:shadow-[0_0_25px_rgba(79,70,229,0.4)] transition-all">
            <Link href="/contact">Get Started</Link>
          </Button>
        </nav>

        <button className="md:hidden text-foreground p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 w-full bg-[#0B1020]/95 backdrop-blur-2xl border-b border-white/10 p-6 flex flex-col gap-6 shadow-2xl"
          >
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors" onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Button asChild className="w-full rounded-full mt-2 h-12">
              <Link href="/contact" onClick={() => setIsOpen(false)}>Get Started</Link>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

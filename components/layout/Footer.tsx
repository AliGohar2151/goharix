import Link from 'next/link';
import { Code2 } from 'lucide-react';

const Twitter = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Github = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/50 backdrop-blur-lg pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold tracking-tight">Goharix</span>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            Enterprise-grade software development, automation, and AI solutions to scale your business.
          </p>
          <div className="flex items-center gap-4 text-muted-foreground pt-2">
            <Link href="#" className="hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></Link>
            <Link href="#" className="hover:text-primary transition-colors"><Github className="h-5 w-5" /></Link>
            <Link href="#" className="hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></Link>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold mb-4 text-foreground">Services</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/services#custom-web" className="hover:text-primary transition-colors">Custom Web Development</Link></li>
            <li><Link href="/services#applications" className="hover:text-primary transition-colors">Web-Based Applications</Link></li>
            <li><Link href="/services#ecommerce" className="hover:text-primary transition-colors">Ecommerce Stores</Link></li>
            <li><Link href="/services#ai" className="hover:text-primary transition-colors">AI Solutions</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-foreground">Company</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Careers</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Goharix. All rights reserved.
      </div>
    </footer>
  );
}

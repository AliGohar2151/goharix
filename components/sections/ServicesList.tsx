import { Code, Monitor, ShoppingCart, LayoutDashboard, Package, CreditCard, Cpu, Wrench, LucideIcon, ArrowRight } from "lucide-react";
import Link from "next/link";
import { getServices, Service } from "@/lib/api";

// Map the icon string stored in the DB to the actual Lucide component
const ICON_MAP: Record<string, LucideIcon> = {
  Code,
  Monitor,
  ShoppingCart,
  LayoutDashboard,
  Package,
  CreditCard,
  Cpu,
  Wrench,
};

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = ICON_MAP[service.icon] ?? Code;

  return (
    <div
      className="group relative p-8 rounded-3xl bg-[#11182E]/60 backdrop-blur-xl border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden hover:shadow-[0_0_40px_-10px_rgba(79,70,229,0.2)]"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:text-secondary transition-all duration-500 border border-white/5">
          <Icon className="h-7 w-7" />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-light">
          {service.description}
        </p>
        <Link
          href="/services"
          className="text-primary text-sm font-medium flex items-center group/link mt-auto w-fit"
        >
          Learn more
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}

export default async function ServicesList() {
  let services: Service[] = [];

  try {
    services = await getServices();
  } catch {
    // Backend may be offline during build/dev — render empty gracefully
    console.warn("ServicesList: could not fetch services from API.");
  }

  return (
    <section className="py-32 relative z-10">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Our Expertise
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-light">
            Comprehensive software engineering services designed for modern enterprises.
          </p>
        </div>

        {services.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            <p>Services are loading — please make sure the backend is running.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

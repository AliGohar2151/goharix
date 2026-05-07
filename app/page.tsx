import Hero from "@/components/sections/Hero";
import ServicesList from "@/components/sections/ServicesList";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ServicesList />
      <CTA />
    </div>
  );
}

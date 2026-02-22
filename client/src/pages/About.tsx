import { Section } from "@/components/Section";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const industries = [
    "Oil & Gas & Petrochemical Companies",
    "Mining & Drilling Contractors",
    "EPC & Infrastructure Projects",
    "Power, Water & Utilities",
    "Metro & Transportation Projects",
    "Fabrication & Manufacturing Industries",
    "Aviation & Defense Establishments",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-muted py-24 relative overflow-hidden">
         <div className="absolute inset-0 tech-grid-bg opacity-30" />
         {/* Background Image */}
         <div 
           className="absolute inset-0 bg-cover bg-center opacity-20"
           style={{
             backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80)',
           }}
         />
         <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
         <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="text-primary font-bold tracking-widest uppercase mb-4 block">
            About Promec Industrial
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Specialized Industrial Solutions for Process Industries
          </h1>
           <p className="text-xl text-gray-400">
            Established in 2026, Promec Industrial for Trading optimizes procurement, inventory, and supply-chain efficiency for Qatar and the Middle East.
           </p>
         </div>
      </section>

      <Section>
        {/* 1. Company Overview */}
        <div className="mb-16">
          <h2 className="text-3xl text-white font-bold mb-6">Company Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Promec Industrial for Trading is a specialized industrial solutions company focused on optimizing procurement, inventory, and supply-chain efficiency for process industries and infrastructure projects.
             </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                With strong roots in Middle East industrial markets, we combine technical understanding, commercial intelligence, and execution excellence to deliver reliable, compliant, and cost-effective procurement solutions.
             </p>
           </div>
           <div className="bg-muted/30 border border-white/5 p-8 rounded-lg overflow-hidden relative">
             <div 
               className="absolute inset-0 bg-cover bg-center opacity-10"
               style={{
                 backgroundImage: 'url(https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80)',
               }}
             />
             <div className="relative z-10">
              <h3 className="text-xl text-white font-bold mb-4">Our Approach</h3>
              <p className="text-gray-300 leading-relaxed">
                Our approach is consultative, transparent, and performance-oriented—ensuring our clients achieve maximum uptime, reduced total cost of ownership, and uninterrupted operations.
              </p>
             </div>
            </div>
           </div>
        </div>

        {/* 2. Industries We Serve */}
        <div className="border-t border-white/10 pt-12">
          <h2 className="text-3xl text-white font-bold mb-4 text-center">
            Industries We Serve
          </h2>
          <p className="text-gray-400 text-base md:text-lg text-center max-w-3xl mx-auto mb-10">
            Promec Industrial supports asset-intensive sectors across Qatar and the Middle East where operational continuity, safety, and compliance are critical.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {industries.map((ind, idx) => (
              <div
                key={idx}
                className="bg-muted/40 border border-white/5 rounded px-4 py-3 flex items-center gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-gray-100 text-sm md:text-base">{ind}</span>
           </div>
            ))}
           </div>
        </div>
      </Section>
    </div>
  );
}

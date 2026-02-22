import { Section } from "@/components/Section";
import { Link } from "wouter";
import { ArrowLeft, Fuel, Factory, Zap, Droplet } from "lucide-react";

export default function Industries() {
  const industries = [
    {
      title: "Oil & Gas",
      desc: "Upstream exploration to downstream refining. We support critical operations with explosion-proof equipment, high-pressure valves, and corrosion-resistant materials.",
      icon: Fuel,
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=800" 
      // industrial oil refinery pipes
    },
    {
      title: "Petrochemical & Chemical",
      desc: "Safety-critical solutions for hazardous environments. Process control instrumentation, chemical pumps, and specialized sealing technologies.",
      icon: Factory,
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
      // modern factory control room
    },
    {
      title: "Power & Water",
      desc: "Supporting Qatar's utilities infrastructure. Turbine components, water treatment systems, and high-voltage transmission equipment.",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1473341304170-5799ed149cb7?auto=format&fit=crop&q=80&w=800"
      // electrical power transmission
    },
    {
      title: "District Cooling",
      desc: "Efficiency-focused solutions for cooling plants. Large-scale valves, VFDs for pumps, and energy metering systems.",
      icon: Droplet,
      image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80&w=800"
      // industrial piping system
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-muted py-20 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid-bg opacity-30" />
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/" className="inline-flex items-center text-gray-400 hover:text-primary mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
          <h1 className="text-5xl font-bold text-white mb-6">Industries Served</h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            Deep domain expertise across Qatar's vital industrial sectors. We understand the specific compliance, safety, and technical requirements of your industry.
          </p>
        </div>
      </section>

      <Section>
        <div className="space-y-24">
          {industries.map((ind, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
              {/* Image side */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-video bg-muted rounded overflow-hidden border border-white/10 group">
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay" />
                  {/* Unsplash image with descriptive comment */}
                  {/* Industrial sector representation */}
                  <img 
                    src={ind.image} 
                    alt={ind.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute bottom-0 left-0 p-6 z-20">
                     <div className="w-16 h-16 bg-primary/90 flex items-center justify-center text-background">
                        <ind.icon className="w-8 h-8" />
                     </div>
                  </div>
                </div>
              </div>
              
              {/* Content side */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-3xl font-bold text-white mb-6">{ind.title}</h3>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed border-l-2 border-primary/30 pl-6">
                  {ind.desc}
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded border border-white/5">
                    <span className="block text-primary font-bold text-sm uppercase mb-1">Key Focus</span>
                    <span className="text-gray-300 text-sm">Reliability & Uptime</span>
                  </div>
                  <div className="bg-white/5 p-4 rounded border border-white/5">
                    <span className="block text-primary font-bold text-sm uppercase mb-1">Compliance</span>
                    <span className="text-gray-300 text-sm">ISO / API Standards</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

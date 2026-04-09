import { motion } from "framer-motion";
import { ArrowRight, Box, Cpu, ShieldCheck, Truck, BarChart3, Globe2 } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/components/LanguageContext";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image - Mobile (vertical) */}
        <div 
          className="md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/bgver.webp)',
          }}
        />
        {/* Background Image - Desktop (horizontal) */}
        <div 
          className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/bghor.webp)',
          }}
        />
        
        {/* Dark Overlay - Animated from transparent to visible */}
        <motion.div 
          className="absolute inset-0 bg-black/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5, ease: "easeInOut" }}
        />
        
        {/* Gradient Overlay - Animated from transparent to visible */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5, ease: "easeInOut" }}
        />
        
        {/* Decorative Elements */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl filter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-secondary/10 rounded-full blur-3xl filter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.7, duration: 1 }}
        />

        {/* Text Content - Pops in after overlay transition */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.8, duration: 0.8, ease: "easeOut" }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm"
          >
            <span className="text-primary text-sm font-bold tracking-widest uppercase">Global Standards • Local Presence</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.0, duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight max-w-5xl mx-auto"
          >
            Reduce Maintenance Costs & Improve Uptime Through Strategic Procurement
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2, duration: 0.8, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-200 mb-5 max-w-3xl mx-auto font-medium"
          >
            We help industrial businesses in Qatar reduce costs and improve operational efficiency through strategic MRO management, vendor-managed inventory, and tailored logistics solutions.
          </motion.p>
          
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 3.4, duration: 0.8, ease: "easeOut" }}
             className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-background font-bold px-8 h-14 rounded-none text-lg">
                Request a Quote
              </Button>
            </Link>
            <Link href="/procurement">
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/5 font-medium px-8 h-14 rounded-none text-lg">
                View Our Solutions
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* VALUE STRIP */}
      <section className="border-y border-white/5 bg-background/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[
              { icon: Globe2, title: "Global Network", desc: "Access to 500+ OEMs worldwide" },
              { icon: ShieldCheck, title: "Certified Quality", desc: "ISO 9001:2015 Compliant Processes" },
              { icon: Truck, title: "Rapid Logistics", desc: "Streamlined import & customs clearance" },
            ].map((item, idx) => (
              <div key={idx} className="p-8 flex items-start space-x-4 hover:bg-white/5 transition-colors group">
                <item.icon className="w-8 h-8 text-primary opacity-70 group-hover:opacity-100 transition-opacity mt-1" />
                <div>
                  <h3 className="text-white text-lg font-bold mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS PREVIEW */}
      <Section className="bg-muted/30">
        <div className="mb-16">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-widest uppercase mb-2 block">Our Services</span>
            <h2 className="text-4xl text-white mb-4">Procurement & Supply Chain Solutions</h2>
            <p className="text-gray-400 text-lg">
              Complete industrial procurement services designed to reduce costs, improve uptime, and simplify your supply chain.
            </p>
          </div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { title: "Electrical & Instrumentation", icon: Cpu, desc: "Sensors, PLCs, Drives, & Controls" },
            { title: "Mechanical MRO", icon: Box, desc: "Bearings, Seals, Belts, & Transmissions" },
            { title: "Flow Control", icon: BarChart3, desc: "Valves, Actuators, & Piping Systems" },
            { title: "Safety & PPE", icon: ShieldCheck, desc: "Industrial Safety Gear & Protection" },
          ].map((solution, i) => (
            <motion.div variants={item} key={i} className="group relative bg-muted border border-white/5 p-8 hover:border-primary/50 transition-colors overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                 <solution.icon className="w-24 h-24 text-primary" />
               </div>
               <div className="relative z-10 h-full flex flex-col">
                 <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-background transition-colors">
                   <solution.icon className="w-6 h-6" />
                 </div>
                 <h3 className="text-xl text-white font-bold mb-2">{solution.title}</h3>
                 <p className="text-gray-400 text-sm mb-6 flex-grow">{solution.desc}</p>
               </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* WHY PROMEC – QUICK VALUE PROPOSITION */}
      <Section className="bg-background">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="text-primary font-bold tracking-widest uppercase mb-2 block">
            Why Promec Industrial
          </span>
          <h2 className="text-3xl md:text-4xl text-white mb-4">
            Why Choose Promec Industrial
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Five key advantages that help industrial businesses reduce costs, improve uptime, and simplify procurement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {[
            "Deep understanding of industrial operations & criticality",
            "Proven expertise in VMI, MRO & Project Procurement",
            "Transparent, ethical, data-driven purchasing",
            "Faster turnaround with reduced procurement burden",
            "Strong regional & global supplier ecosystem",
          ].map((point, idx) => (
            <div
              key={idx}
              className="bg-muted/40 border border-white/5 rounded-lg p-6 flex items-start gap-3"
            >
              <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <p className="text-gray-200 text-sm md:text-base text-left">
                {point}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/why-choose-us">
            <Button className="bg-primary hover:bg-primary/90 text-background font-bold px-8 h-12">
              Discover Why Promec Is Different
            </Button>
          </Link>
        </div>
      </Section>

      {/* PROCUREMENT HIGHLIGHT */}
      {/* <Section id="procurement" gridBg>
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
               <span className="text-primary font-bold tracking-widest uppercase mb-2 block">Why Choose Us</span>
               <h2 className="text-4xl text-white mb-6">More Than Trading. Complete Procurement Simplified.</h2>
               <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                 Traditional procurement is complex and fragmented. We act as your single strategic partner, handling everything from sourcing and compliance to logistics and last-mile delivery.
               </p>
               
               <ul className="space-y-4 mb-10">
                 {[
                   "Single Vendor Registration for Multiple Brands",
                   "Technical Verification by In-House Engineers",
                   "Consolidated Shipping to Reduce Costs",
                   "Real-Time Tracking & Updates"
                 ].map((point, i) => (
                   <li key={i} className="flex items-center text-white">
                     <div className="w-1.5 h-1.5 bg-primary rounded-full mr-4" />
                     {point}
                   </li>
                 ))}
               </ul>
               
               <Link href="/procurement">
                 <Button className="bg-primary hover:bg-primary/90 text-background font-bold">Learn Our Process</Button>
               </Link>
            </div>
            
            <div className="relative">
              <div className="relative aspect-square bg-muted rounded-2xl overflow-hidden border border-white/10 p-8 flex items-center justify-center">
                 <div className="absolute inset-0 tech-grid-bg opacity-50" />
                 
                 <div className="grid grid-cols-2 gap-4 w-full relative z-10">
                    <div className="bg-background/80 p-6 rounded border border-white/5 backdrop-blur-sm">
                       <div className="text-primary text-4xl font-bold mb-1">50+</div>
                       <div className="text-xs text-gray-400 uppercase tracking-wider">Brands</div>
                    </div>
                    <div className="bg-background/80 p-6 rounded border border-white/5 backdrop-blur-sm">
                       <div className="text-primary text-4xl font-bold mb-1">15+</div>
                       <div className="text-xs text-gray-400 uppercase tracking-wider">Countries</div>
                    </div>
                    <div className="col-span-2 bg-primary/10 p-6 rounded border border-primary/20 backdrop-blur-sm flex items-center justify-between">
                       <div>
                         <div className="text-white text-xl font-bold">1 Partner</div>
                         <div className="text-xs text-primary uppercase tracking-wider">Promec Industrial</div>
                       </div>
                       <ShieldCheck className="w-8 h-8 text-primary" />
                    </div>
                 </div>
              </div>
            </div>
         </div>
      </Section> */}

      {/* Social Proof / Trust Section */}
      <Section className="bg-background">
        <div className="text-center mb-12">
          <span className="text-primary font-bold tracking-widest uppercase mb-3 block text-sm">
            Trusted By Industry Leaders
          </span>
          <h2 className="text-3xl md:text-4xl text-white font-bold mb-4">
            Why Industrial Companies Choose Promec
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We deliver measurable results that improve operational efficiency and reduce costs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              metric: "30%+",
              label: "Cost Reduction",
              description: "Average savings through strategic MRO procurement"
            },
            {
              metric: "99%+",
              label: "On-Time Delivery",
              description: "Reliable logistics and supply chain management"
            },
            {
              metric: "500+",
              label: "Global Suppliers",
              description: "Access to certified manufacturers worldwide"
            }
          ].map((stat, idx) => (
            <div key={idx} className="bg-muted/30 border border-white/5 p-8 rounded-lg text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-3">{stat.metric}</div>
              <h3 className="text-xl text-white font-bold mb-2">{stat.label}</h3>
              <p className="text-gray-400 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </Section>
      
      {/* CTA BANNER */}
      <section className="py-24 bg-primary text-background relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5 tech-grid-bg" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-background">Ready to Reduce Costs & Improve Uptime?</h2>
          <p className="text-xl text-background/80 mb-10 max-w-2xl mx-auto">Speak to our procurement experts today. Get a customized quote for your industrial requirements.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-background text-primary hover:bg-background/90 font-bold px-8 h-14 text-lg border-2 border-transparent">
                Request a Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-background/30 text-background hover:bg-background/10 font-bold px-8 h-14 text-lg">
                Speak to Our Experts
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

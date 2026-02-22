import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { CheckCircle2, Package, Globe, DollarSign, Headphones, Handshake, TrendingUp, MapPin, Building2, Shield, Target, Zap } from "lucide-react";

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

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Package,
      title: "Wide range of industrial products under one roof",
      description: "From Personal Protective Equipment to Power Tools, Pipes, Valves & Actuators - we offer comprehensive industrial solutions all in one place, saving you time and simplifying your procurement process.",
      image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80"
    },
    {
      icon: Globe,
      title: "Trusted sourcing from approved global manufacturers",
      description: "We partner with certified and approved manufacturers worldwide, ensuring you receive only the highest quality products that meet international standards and compliance requirements.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
    },
    {
      icon: DollarSign,
      title: "Competitive pricing and timely delivery",
      description: "Our strategic partnerships and efficient supply chain management allow us to offer competitive pricing without compromising on quality, with reliable delivery schedules that keep your projects on track.",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80"
    },
    {
      icon: Headphones,
      title: "Technical support and customer-focused approach",
      description: "Our team of technical experts is always ready to assist with product selection, compatibility verification, and after-sales support, ensuring you get the right solution for your specific needs.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
    },
    {
      icon: Handshake,
      title: "Reliable partner for long-term industrial supply contracts",
      description: "We build lasting partnerships with our clients, offering consistent supply, flexible terms, and dedicated account management for your long-term industrial procurement needs.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-muted py-24 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid-bg opacity-30" />
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="text-primary font-bold tracking-widest uppercase mb-4 block">Why Choose Us</span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">Your Trusted Industrial Procurement Partner</h1>
          <p className="text-xl text-gray-400">
            At Promec Industrial, we go beyond just supplying products. We provide comprehensive solutions that drive your business forward.
          </p>
        </div>
      </section>

      <Section>
        {/* Strategic Differentiators Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <span className="text-primary font-bold tracking-widest uppercase mb-3 block text-sm">
              Why Promec
            </span>
            <h2 className="text-4xl md:text-5xl text-white font-bold mb-4">
              Strategic Differentiators
            </h2>
            <p className="text-xl text-primary font-semibold mb-8">What Sets Us Apart</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: TrendingUp,
                text: "Proven leadership in industrial business development"
              },
              {
                icon: MapPin,
                text: "Deep Middle East market intelligence"
              },
              {
                icon: Building2,
                text: "Strong OEM & supplier relationships"
              },
              {
                icon: Target,
                text: "Experience in VMI, Street Buying & Large Industrial Contracts"
              },
              {
                icon: Shield,
                text: "Transparent, ethical procurement model"
              },
              {
                icon: Zap,
                text: "Execution-focused, not transactional"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-muted/40 border border-white/10 rounded-lg p-6 hover:border-primary/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-200 font-medium leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <p className="text-2xl md:text-3xl text-white font-bold italic max-w-3xl mx-auto">
              We don't just supply products — we solve procurement challenges.
            </p>
          </motion.div>
        </motion.div>

        {/* Existing Reasons Section */}
        <div className="border-t border-white/10 pt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-white font-bold mb-4">
              Our Core Advantages
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover what makes Promec Industrial your ideal procurement partner
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-muted/30 border border-white/5 rounded-lg hover:border-primary/30 transition-colors overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row gap-0">
                {/* Image Section */}
                <div className="lg:w-80 xl:w-96 flex-shrink-0 relative overflow-hidden">
                  <img 
                    src={reason.image} 
                    alt={reason.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent lg:hidden" />
                </div>
                {/* Content Section */}
                <div className="flex-1 p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                        <reason.icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-start mb-3">
                        <CheckCircle2 className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <h3 className="text-2xl text-white font-bold">{reason.title}</h3>
                      </div>
                      <p className="text-gray-400 text-lg leading-relaxed ml-9">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 bg-primary/10 border border-primary/20 p-12 rounded-lg text-center">
          <h2 className="text-3xl text-white font-bold mb-4">Ready to Experience the Difference?</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Let us show you how our comprehensive approach to industrial procurement can streamline your operations and reduce costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-block">
              <button className="bg-primary hover:bg-primary/90 text-background font-bold px-8 py-3 rounded transition-colors">
                Get in Touch
              </button>
            </a>
            <a href="/products" className="inline-block">
              <button className="border border-white/20 text-white hover:bg-white/5 font-medium px-8 py-3 rounded transition-colors">
                View Our Products
              </button>
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}


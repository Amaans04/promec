import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import {
  CheckCircle2,
  TrendingUp,
  Activity,
  Gauge,
  Settings,
  RefreshCw,
  Search,
  FileCheck,
  ShoppingCart,
  Truck,
  Package,
  ClipboardList,
  Wrench,
  Hammer,
  ChevronUp,
} from "lucide-react";

interface FlowStep {
  title: string;
  icon?: any;
}

interface SolutionSectionProps {
  id?: string;
  number: string;
  title: string;
  subtitle: string;
  intro: string;
  howItWorks?: string[];
  flowSteps: FlowStep[];
  benefits: string[];
  ctaLabel: string;
  ctaHref: string;
  brochureHref?: string;
  brochureLabel?: string;
  insightBox?: {
    title: string;
    content: string;
  };
  valuePromise?: string[];
  ourSupport?: string[];
  scopeIncludes?: string[];
  equipmentCovered?: string[];
  ourExpertise?: string[];
  subsection?: {
    title: string;
    description: string;
    improvements: string[];
  };
}

function SolutionSection({
  id,
  number,
  title,
  subtitle,
  intro,
  howItWorks,
  flowSteps,
  benefits,
  ctaLabel,
  ctaHref,
  brochureHref,
  brochureLabel,
  insightBox,
  valuePromise,
  ourSupport,
  scopeIncludes,
  equipmentCovered,
  ourExpertise,
  subsection,
}: SolutionSectionProps) {
  return (
    <Section id={id} className="bg-background">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center">
            <span className="text-primary font-bold text-lg">{number}</span>
          </div>
          <h2 className="text-3xl md:text-4xl text-white font-bold">{title}</h2>
        </div>
        <p className="text-xl text-primary mb-4">{subtitle}</p>
        <p className="text-gray-300 text-lg leading-relaxed max-w-4xl">
            {intro}
          </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 items-start">
        {/* Left Column */}
        <div className="lg:sticky lg:top-24">
          {howItWorks && (
            <>
              <h3 className="text-xl text-white font-semibold mb-4">How It Works</h3>
              <ul className="space-y-3 mb-8">
                {howItWorks.map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          {valuePromise && (
            <>
              <h3 className="text-xl text-white font-semibold mb-4">Our Value Promise</h3>
              <ul className="space-y-3 mb-8">
                {valuePromise.map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          {ourSupport && (
            <>
              <h3 className="text-xl text-white font-semibold mb-4">Our Support Includes</h3>
              <ul className="space-y-3 mb-8">
                {ourSupport.map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          {scopeIncludes && (
            <>
              <h3 className="text-xl text-white font-semibold mb-4">Scope Includes</h3>
              <ul className="space-y-3 mb-8">
                {scopeIncludes.map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          {equipmentCovered && (
            <>
              <h3 className="text-xl text-white font-semibold mb-4">Equipment Covered</h3>
              <ul className="space-y-3 mb-8">
                {equipmentCovered.map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          {ourExpertise && (
            <>
              <h3 className="text-xl text-white font-semibold mb-4">Our Expertise</h3>
              <ul className="space-y-3 mb-8">
                {ourExpertise.map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          {subsection && (
            <div className="bg-primary/10 border border-primary/20 p-6 rounded-lg mb-8">
              <h3 className="text-xl text-white font-semibold mb-3">{subsection.title}</h3>
              <p className="text-gray-300 mb-4">{subsection.description}</p>
              <ul className="space-y-2">
                {subsection.improvements.map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-300">
                    <TrendingUp className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <h3 className="text-xl text-white font-semibold mb-4">Client Benefits</h3>
          <ul className="space-y-3 mb-8">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href={ctaHref}>
              <Button className="bg-primary hover:bg-primary/90 text-background font-bold px-8 h-12">
                {ctaLabel}
              </Button>
            </Link>
            {brochureHref && (
              <a href={brochureHref} download className="inline-flex">
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/5 font-medium px-8 h-12"
                >
                  {brochureLabel ?? "Download Brochure"}
                </Button>
              </a>
            )}
          </div>
         </div>

        {/* Right Column - Flow */}
        <div className="bg-muted/30 border border-white/10 rounded-lg p-6 lg:p-8 self-start">
          <h3 className="text-xl font-semibold text-white mb-8">Process Flow</h3>
          <div className="relative pl-2">
            <div className="space-y-8">
              {flowSteps.map((step, idx) => {
                const StepIcon = step.icon || Activity;
                return (
                  <div key={idx} className="relative flex items-start gap-4">
                    {/* Step number circle with icon */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-transparent border-2 border-primary/30 flex items-center justify-center">
                        <StepIcon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                    
                    {/* Step content */}
                    <div className="flex-1 pt-1">
                      <div className="mb-1">
                        <span className="text-primary font-bold text-xs uppercase tracking-widest">STEP {idx + 1}</span>
                      </div>
                      <h4 className="text-white font-bold text-base md:text-lg leading-tight uppercase tracking-wide">
                    {step.title}
                  </h4>
                </div>
              </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {insightBox && (
        <div className="bg-accent/10 border border-accent/20 p-6 rounded-lg mt-8">
          <h4 className="text-lg text-white font-semibold mb-2">{insightBox.title}</h4>
          <p className="text-gray-300">{insightBox.content}</p>
        </div>
      )}
    </Section>
  );
}

export default function Procurement() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Offset for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const solutions = [
    { id: "vmi", number: "1", title: "Vendor Managed Inventory (VMI)" },
    { id: "street-buying", number: "2", title: "Street Buying Services" },
    { id: "mro", number: "3", title: "MRO – Maintenance, Repair & Operations Supplies" },
    { id: "projects", number: "4", title: "Project Supplies for EPC Contractors" },
    { id: "pre-commissioning", number: "5", title: "Pre-Commissioning of Electrical & Mechanical Workshops" },
    { id: "retrofitting", number: "6", title: "Machine Tool Retrofitting & Repair" },
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
            backgroundImage: 'url(https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold text-white mb-6">
            Procurement Simplified – Strategic Solutions
          </h1>
          <p className="text-xl text-gray-400">
            Promec Industrial integrates Vendor Managed Inventory, street buying, MRO support,
            project procurement, and engineering services into one coherent, execution-focused
            procurement model.
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <Section className="bg-background border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl text-white font-bold mb-6">Our Solutions</h2>
          <ul className="space-y-3">
            {solutions.map((solution) => (
              <li key={solution.id}>
                <button
                  onClick={() => scrollToSection(solution.id)}
                  className="w-full text-left group flex items-start gap-4 p-4 rounded-lg hover:bg-muted/30 hover:border-primary/30 border border-white/5 transition-all"
                >
                  <span className="text-primary font-bold text-lg flex-shrink-0 mt-0.5">{solution.number}.</span>
                  <span className="text-gray-300 group-hover:text-white text-base md:text-lg transition-colors flex-1">
                    {solution.title}
                  </span>
                  <ChevronUp className="w-5 h-5 text-gray-400 group-hover:text-primary rotate-[-90deg] flex-shrink-0 mt-1 transition-colors" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 1. Vendor Managed Inventory (VMI) */}
      <SolutionSection
        id="vmi"
        number="1"
        title="Vendor Managed Inventory (VMI)"
        subtitle="Ensuring 24/7 Availability of Critical & Non-Critical Items"
        intro="Promec's Vendor Managed Inventory (VMI) solution ensures uninterrupted availability of essential items directly at the client site."
        howItWorks={[
          "We conduct joint consumption analysis with client teams",
          "Identify critical & non-critical fast-moving items",
          "Create an approved item master & min–max levels",
          "Freeze pricing for 12 months",
          "Stock items at client-provided warehouse space",
          "Deploy Promec representative on-site (daytime)",
          "On-call support during nights & emergencies",
        ]}
        flowSteps={[
          { title: "Consumption Study", icon: Activity },
          { title: "Item Criticality Classification", icon: Gauge },
          { title: "Price Freeze Agreement (12 Months)", icon: FileCheck },
          { title: "On-Site Inventory Setup", icon: Settings },
          { title: "Daily Issue & Auto Replenishment", icon: RefreshCw },
          { title: "Monthly Consumption Reporting", icon: ClipboardList },
        ]}
        benefits={[
          "Zero stock-outs",
          "Reduced working capital",
          "Price stability",
          "Full transparency",
          "Improved maintenance efficiency",
        ]}
        ctaLabel="View VMI in Detail"
        ctaHref="/contact?interest=vmi"
        brochureHref="/Brochers/Promec_IndustrialVendingMachines.pdf"
        brochureLabel="Download VMI Brochure"
      />

      {/* 2. Street Buying Services */}
      <SolutionSection
        id="street-buying"
        number="2"
        title="Street Buying Services"
        subtitle="Low-Value, High-Impact Procurement"
        intro="Low-value purchases often result in high hidden costs due to internal processing, approvals, manpower, and logistics. Promec's Street Buying Service eliminates this inefficiency."
        howItWorks={[
          "Direct coordination with authorized end users",
          "Market survey with minimum 3 competitive quotes",
          "Purchase from best-value supplier",
          "Same-day delivery wherever possible",
          "Complete price & markup transparency",
        ]}
        flowSteps={[
          { title: "End User Requirement", icon: ClipboardList },
          { title: "Market Survey (3 Best Prices)", icon: Search },
          { title: "Quality & Compliance Check", icon: FileCheck },
          { title: "Immediate Purchase", icon: ShoppingCart },
          { title: "Same-Day Delivery", icon: Truck },
          { title: "Transparent Invoice (Cost + Agreed Markup)", icon: Package },
        ]}
        benefits={[
          "Reduced internal workload",
          "Faster availability",
          "No procurement bottlenecks",
          "Full cost transparency",
        ]}
        ctaLabel="Learn More About Street Buying"
        ctaHref="/contact?interest=street-buying"
        brochureHref="/Brochers/Promec_SmartSmall-ValueSourcing.pdf"
        brochureLabel="Download Street Buying Brochure"
        insightBox={{
          title: "Procurement Cost Reality",
          content: "A $5 item can cost over $40 when internal procurement cycles are considered. Promec eliminates this waste.",
        }}
      />

      {/* 3. MRO – Maintenance, Repair & Operations Supplies */}
      <SolutionSection
        id="mro"
        number="3"
        title="MRO – Maintenance, Repair & Operations Supplies"
        subtitle="The Backbone of Reliable Operations"
        intro="Promec specializes in MRO equipment, tools & consumables—ensuring smooth day-to-day plant operations."
        ourSupport={[
          "Industrial tools & hand tools",
          "Lubricants & chemicals",
          "Safety & PPE solutions",
          "Electrical & mechanical spares",
          "Cleaning & maintenance consumables",
        ]}
        flowSteps={[
          { title: "Consumption Analysis", icon: Activity },
          { title: "Approved Product Selection", icon: FileCheck },
          { title: "Vendor Optimization", icon: Settings },
          { title: "Inventory Planning", icon: Gauge },
          { title: "Timely Supply & Reporting", icon: Package },
        ]}
        valuePromise={[
          "Right product",
          "Right price",
          "Right time",
          "Zero compromise on quality",
        ]}
        benefits={[
          "Reduced stockouts on safety- and production-critical items",
          "Lower working capital locked in slow-moving or duplicate inventory",
          "Improved visibility on usage, obsolescence, and supplier performance",
          "Less time spent by your team on routine reordering and follow-up",
        ]}
        ctaLabel="Explore Our MRO Solutions"
        ctaHref="/contact?interest=mro"
        brochureHref="/Brochers/Promec_MRO.pdf"
        brochureLabel="Download MRO Brochure"
      />

      {/* 4. Project Supplies for EPC Contractors */}
      <SolutionSection
        id="projects"
        number="4"
        title="Project Supplies for EPC Contractors"
        subtitle="End-to-End Procurement for Projects"
        intro="Promec supports EPC contractors from site establishment to project completion."
        scopeIncludes={[
          "Industrial equipment & tools",
          "Consumables & accessories",
          "Temporary site offices & furniture",
          "Daily office stationery",
          "Safety & compliance items",
        ]}
        flowSteps={[
          { title: "Project Kick-Off", icon: Activity },
          { title: "BOQ & Site Requirement Mapping", icon: ClipboardList },
          { title: "Supplier Finalization", icon: FileCheck },
          { title: "Scheduled Deliveries", icon: Truck },
          { title: "Ongoing Project Support", icon: RefreshCw },
        ]}
        benefits={[
          "Improved alignment between procurement, planning, and site construction teams",
          "Reduced risk of late deliveries and documentation rework",
          "Single interface for multiple manufacturers and disciplines",
          "Better visibility on project procurement status for management reporting",
        ]}
        ctaLabel="View Project Supply Capabilities"
        ctaHref="/contact?interest=projects"
        brochureHref="/Brochers/Promec_IntegratedProjectSupply.pdf"
        brochureLabel="Download Project Supply Brochure"
      />

      {/* 5. Pre-Commissioning of Electrical & Mechanical Workshops */}
      <SolutionSection
        id="pre-commissioning"
        number="5"
        title="Pre-Commissioning of Electrical & Mechanical Workshops"
        subtitle="Operational Readiness Before Day One"
        intro="We assist clients in setting up workshops before commissioning, ensuring readiness, safety, and compliance."
        ourSupport={[
          "Tool & equipment selection",
          "Workshop layout planning",
          "Storage & racking solutions",
          "Measuring & calibration instruments",
          "Multi-purpose tool optimization",
        ]}
        flowSteps={[
          { title: "Site & Scope Assessment", icon: Search },
          { title: "Equipment & Tool Selection", icon: Wrench },
          { title: "Layout & Storage Planning", icon: Settings },
          { title: "Installation & Validation", icon: Hammer },
          { title: "Operational Readiness", icon: CheckCircle2 },
        ]}
        benefits={[
          "Workshops ready for safe and compliant operations from day one",
          "Reduced start-up delays caused by missing or unsuitable equipment",
          "Standardized tooling across fleets and facilities",
          "Clear documentation and training for internal teams",
        ]}
        ctaLabel="Read More on Pre-Commissioning Services"
        ctaHref="/contact?interest=pre-commissioning"
      />

      {/* 6. Machine Tool Retrofitting & Repair */}
      <SolutionSection
        id="retrofitting"
        number="6"
        title="Machine Tool Retrofitting & Repair"
        subtitle="Maximize ROI on Existing Assets"
        intro="Avoid heavy capital expenditure on new machines. Promec delivers expert retrofitting & maintenance services to extend asset life."
        equipmentCovered={[
          "Lathe Machines",
          "Milling Machines",
          "Boring Machines",
          "Drilling Machines",
          "Grinding Machines & more",
        ]}
        flowSteps={[
          { title: "Site Survey & Condition Assessment", icon: Search },
          { title: "Retrofit Proposal & Scope Definition", icon: FileCheck },
          { title: "Execution, Testing & Calibration", icon: Wrench },
          { title: "Handover & Documentation", icon: Package },
        ]}
        ourExpertise={[
          "Manual & CNC specialists",
          "25+ years combined experience",
          "Cost-effective modernization",
        ]}
        benefits={[
          "Extended asset life with lower capex than full replacement",
          "Improved accuracy, repeatability, and safety of critical machines",
          "Ability to modernize selected assets via Manual to CNC conversion",
          "Structured, documented retrofit process suitable for audited environments",
        ]}
        ctaLabel="Explore Retrofitting & CNC Conversion"
        ctaHref="/contact?interest=retrofitting"
        subsection={{
          title: "Manual to CNC Conversion",
          description: "Upgrade manual machines to high-precision CNC systems, improving:",
          improvements: [
            "Accuracy",
            "Productivity",
            "Repeatability",
            "Automation",
          ],
        }}
      />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-primary hover:bg-primary/90 text-background rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}

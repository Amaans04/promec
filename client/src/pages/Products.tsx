import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";
import { Package, Search, Wrench } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

interface Product {
  id: number;
  name: string;
  categoryId: number;
  description: string;
  specifications: string[] | null;
  image: string | null;
}

interface Category {
  id: number;
  name: string;
  description: string | null;
}

const categories: Category[] = [
  { id: 1, name: "Personal Protective Equipment (PPE)", description: "Safety equipment for industrial workers" },
  { id: 2, name: "Hand Tools", description: "Essential manual tools for industrial operations" },
  { id: 3, name: "Power Tools", description: "Electric and cordless power tools" },
  { id: 4, name: "Industrial & MRO Supplies", description: "Maintenance, repair, and operations supplies" },
  { id: 5, name: "Pipes, Valves & Actuators", description: "Flow control and piping systems" }
];

const products: Product[] = [
  // PPE Products
  { id: 1, name: "Industrial Safety Helmet with Face Shield", categoryId: 1, description: "High-impact resistant safety helmet with integrated face shield for comprehensive head and face protection. Meets ANSI Z89.1 and EN 397 standards.", specifications: ["Material: HDPE", "Weight: 450g", "Color: White/Yellow", "Adjustable headband", "UV resistant"], image: null },
  { id: 2, name: "Steel Toe Safety Boots", categoryId: 1, description: "Durable steel toe safety boots with slip-resistant sole. Perfect for construction and industrial environments.", specifications: ["Steel toe cap", "Slip-resistant sole", "Waterproof", "Sizes: 7-12", "EN ISO 20345 certified"], image: null },
  
  // Hand Tools Products
  { id: 3, name: "Professional Socket Set (1/2 inch drive)", categoryId: 2, description: "Comprehensive 32-piece socket set with ratchet, extensions, and various socket sizes for automotive and industrial applications.", specifications: ["32 pieces", "1/2 inch drive", "Chrome vanadium steel", "Metric and SAE sizes", "Lifetime warranty"], image: null },
  { id: 4, name: "Precision Digital Caliper", categoryId: 2, description: "High-precision digital caliper for accurate measurements in manufacturing and quality control applications.", specifications: ["Range: 0-150mm", "Accuracy: ±0.02mm", "LCD display", "IP54 rated", "Battery included"], image: null },
  
  // Power Tools Products
  { id: 5, name: "Heavy-Duty Angle Grinder 230mm", categoryId: 3, description: "Professional-grade angle grinder with 2400W motor for cutting, grinding, and polishing applications in metalworking and construction.", specifications: ["2400W motor", "230mm disc", "Variable speed", "Spindle lock", "Safety guard included"], image: null },
  { id: 6, name: "Cordless Impact Driver Kit 18V", categoryId: 3, description: "Powerful cordless impact driver with brushless motor, ideal for fastening and drilling in construction and maintenance work.", specifications: ["18V battery", "Brushless motor", "Max torque: 180Nm", "LED worklight", "2x 5.0Ah batteries"], image: null },
  
  // Industrial & MRO Supplies
  // { id: 7, name: "Stainless Steel Fastener Kit", categoryId: 4, description: "Comprehensive assortment of stainless steel bolts, nuts, washers, and screws in various sizes for industrial maintenance and assembly.", specifications: ["316 stainless steel", "200+ pieces", "Metric sizes M4-M12", "Corrosion resistant", "Organized storage case"], image: null },
  // { id: 8, name: "Industrial Welding Machine 200A", categoryId: 4, description: "Multi-process welding machine capable of MIG, TIG, and stick welding for versatile metal fabrication and repair work.", specifications: ["200A output", "MIG/TIG/Stick", "Dual voltage 110V/220V", "Digital display", "Thermal overload protection"], image: null },
  
  // Pipes, Valves & Actuators
  { id: 9, name: "Stainless Steel Ball Valve 2 inch", categoryId: 5, description: "Full port ball valve in 316 stainless steel, suitable for high-pressure applications in oil & gas and petrochemical industries.", specifications: ["2 inch (DN50)", "316 SS", "PN40 rating", "Full port", "Fire-safe design"], image: null },
  { id: 10, name: "Pneumatic Actuator with Positioner", categoryId: 5, description: "Pneumatic quarter-turn actuator with integrated positioner for precise valve control in automated industrial systems.", specifications: ["90° rotation", "4-20mA signal", "Air pressure: 3-7 bar", "IP65 rated", "Mounting kit included"], image: null }
];

const categorySubcategories: Record<number, string[]> = {
  1: [
    "Safety Helmets, Caps & Face Shields",
    "Industrial Safety Shoes & Gumboots",
    "Protective Gloves (Leather, Nitrile, Cut Resistant)",
    "Coveralls, Reflective Vests & Workwear",
    "Respiratory Protection & Safety Masks",
    "Eye & Hearing Protection",
    "Fall Protection & Safety Harnesses"
  ],
  2: [
    "Spanners, Wrenches & Socket Sets",
    "Screwdrivers & Hex Keys",
    "Pliers, Cutters & Crimping Tools",
    "Hammers, Chisels & Punches",
    "Measuring Tools (Calipers, Tapes, Gauges)",
    "Tool Storage Boxes & Cabinets"
  ],
  3: [
    "Electric Drills & Impact Drivers",
    "Angle Grinders & Cut-Off Machines",
    "Rotary Hammers & Demolition Tools",
    "Cordless Power Tools & Accessories",
    "Grinding, Cutting & Drilling Consumables"
  ],
  4: [
    "Fasteners, Bolts, Nuts & Washers",
    "Adhesives, Sealants & Lubricants",
    "Bearings, Belts & Mechanical Spares",
    "Welding Machines, Electrodes & Accessories",
    "Lifting Tools & Material Handling Equipment"
  ],
  5: [
    "Carbon Steel, Stainless Steel & Alloy Steel Pipes",
    "Ball Valves, Gate Valves, Globe & Check Valves",
    "Butterfly Valves & Control Valves",
    "Pneumatic & Electric Actuators",
    "Pipe Fittings, Flanges & Gaskets"
  ]
};

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === null || product.categoryId === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-muted py-24 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid-bg opacity-30" />
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="text-primary font-bold tracking-widest uppercase mb-4 block">Our Products</span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">Comprehensive Industrial Solutions</h1>
          <p className="text-xl text-gray-400">
            Browse our extensive catalog of industrial products, tools, and equipment
          </p>
        </div>
      </section>

      <Section>
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background border-white/10 text-white placeholder:text-gray-600"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-8">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-2 rounded border transition-colors ${
                selectedCategory === null
                  ? "bg-primary text-background border-primary"
                  : "bg-muted/30 border-white/10 text-white hover:border-primary/50"
              }`}
            >
              All Categories
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded border transition-colors ${
                  selectedCategory === category.id
                    ? "bg-primary text-background border-primary"
                    : "bg-muted/30 border-white/10 text-white hover:border-primary/50"
                }`}
              >
                {category.name.split(" (")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Category Info */}
        {selectedCategory && (
          <div className="mb-8 bg-muted/30 border border-white/5 p-6 rounded-lg">
            <h2 className="text-2xl text-white font-bold mb-4">
              {categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className="text-gray-400 mb-4">
              {categories.find(c => c.id === selectedCategory)?.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {categorySubcategories[selectedCategory]?.map((subcat, idx) => (
                <div key={idx} className="flex items-center text-gray-300 text-sm">
                  <Package className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                  <span>{subcat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Products Grid */}
        <motion.div
          key={`${selectedCategory}-${searchQuery}`}
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
        >
          {(selectedCategory === null || selectedCategory === 4) && (
            <motion.div variants={item} className="h-full flex">
              <Link href="/products/mro" className="h-full w-full flex">
                <Card className="bg-muted/30 border-white/5 hover:border-primary/30 transition-colors h-full w-full flex flex-col cursor-pointer group hover:shadow-lg hover:shadow-primary/5 duration-300">
                  <CardHeader className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Wrench className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-white text-xl mb-2 group-hover:text-primary transition-colors">MRO</CardTitle>
                    <CardDescription className="text-gray-400">
                      Maintenance, Repair & Operations Supplies
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col min-h-0 pt-0">
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 flex-1">
                      Bearings, belts, hand tools, motors, power tools, and PPE. Comprehensive MRO equipment and industrial supply for maintenance and operations.
                    </p>
                    <span className="inline-block w-full mt-4 bg-primary/10 hover:bg-primary/20 text-primary font-medium py-2 px-4 rounded transition-colors border border-primary/20 text-center shrink-0">
                      View MRO Products
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          )}
          {filteredProducts.map((product) => (
            <motion.div key={product.id} variants={item} className="h-full flex">
              <Card className="bg-muted/30 border-white/5 hover:border-primary/30 transition-colors h-full w-full flex flex-col">
                <CardHeader className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Package className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-white text-xl mb-2 line-clamp-2">{product.name}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {categories.find(c => c.id === product.categoryId)?.name}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col min-h-0 pt-0">
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 flex-1">{product.description}</p>
                  <button className="w-full mt-4 bg-primary/10 hover:bg-primary/20 text-primary font-medium py-2 px-4 rounded transition-colors border border-primary/20 shrink-0">
                    Request Quote
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <Package className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">No products found matching your criteria</p>
          </div>
        )}
      </Section>
    </div>
  );
}


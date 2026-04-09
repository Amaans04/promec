import { Section } from "@/components/Section";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { PageSEO } from "@/components/PageSEO";
import { MROProductCard, type MROProduct } from "@/components/MROProductCard";
import mroProducts from "@/data/mroProducts.json";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const products = mroProducts as MROProduct[];

const MRO_LIST_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "MRO Products – Maintenance, Repair & Operations Supplies",
  description: "Industrial MRO product categories: Bearings, Belts, Hand Tools, Motors, Power Tools, and PPE. Promec Industrial Qatar.",
  url: "https://promec-industrial.com/products/mro",
  numberOfItems: products.length,
  itemListElement: products.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: p.name,
    url: `https://promec-industrial.com/products/mro/${p.slug}`,
  })),
};

export default function ProductsMro() {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="MRO Products – Maintenance, Repair & Operations Supplies | Promec Industrial"
        description="Browse MRO products from Promec Industrial: bearings, belts, hand tools, motors, power tools, and PPE. Industrial maintenance and repair supplies for Qatar and the Gulf."
        keywords={[
          "MRO products",
          "maintenance repair operations",
          "industrial bearings",
          "industrial belts",
          "hand tools",
          "power tools",
          "PPE Qatar",
          "industrial supply Qatar",
        ]}
        canonicalPath="/products/mro"
        jsonLd={MRO_LIST_JSON_LD}
      />

      <section className="bg-muted py-24 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid-bg opacity-30" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1920&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <Link
            href="/products"
            className="inline-flex items-center text-gray-400 hover:text-primary mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Products
          </Link>
          <span className="text-primary font-bold tracking-widest uppercase mb-4 block">
            MRO
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Maintenance, Repair & Operations Supplies
          </h1>
          <p className="text-xl text-gray-400">
            Industrial MRO equipment and maintenance products for Qatar. From bearings and belts to hand tools, motors, power tools, and PPE—we supply what you need to keep operations running.
          </p>
        </div>
      </section>

      <Section>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {products.map((product) => (
            <MROProductCard key={product.id} product={product} variants={item} />
          ))}
        </motion.div>
      </Section>
    </div>
  );
}

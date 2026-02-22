import { useQuery, useMutation } from "@tanstack/react-query";
import type { BlogPost as BlogPostType, InsertInquiry } from "@shared/schema";
import { api } from "@shared/routes";

// ============================================
// BLOG HOOKS – STATIC DEMO CONTENT
// ============================================

const demoBlogPosts: BlogPostType[] = [
  {
    id: 1,
    slug: "reliable-industrial-procurement-qatar-oil-gas",
    title: "Why Reliable Industrial Procurement Is Critical for Oil & Gas Projects in Qatar",
    excerpt:
      "Unplanned shutdowns, delayed turnarounds, and non-compliant materials can turn a profitable oil & gas project into a cost overrun. This article explains why structured, reliable procurement is a core risk-control function—not an administrative task.",
    content: [
      "Qatar’s oil & gas projects operate in environments where every hour of downtime carries a measurable cost. In this context, procurement is not simply about placing purchase orders—it is about securing the availability, traceability, and compliance of every component that feeds the asset lifecycle.",
      "",
      "Reliable industrial procurement ensures that critical spares, MRO items, and project materials are sourced from approved manufacturers, backed by documentation, and delivered within the project’s schedule constraints. When this process is fragmented across multiple traders, the result is higher risk: inconsistent lead times, variable quality, and poor visibility.",
      "",
      "A strategic procurement partner builds structured supplier networks, maintains technical data for long-tail and obsolete items, and understands how each line item maps back to safety, production, and maintenance KPIs. For Qatar’s oil & gas operators, this means:",
      "",
      "- Fewer last-minute expedites and emergency airfreight",
      "- Better alignment between material specifications and OEM requirements",
      "- Clear audit trails for HSE and regulatory compliance",
      "- Reduced total cost of ownership rather than short-term unit price savings",
      "",
      "Promec Industrial positions procurement as a managed process rather than a reactive activity. By combining vendor identification, technical verification, documentation management, and logistics coordination, we help project and maintenance teams focus on execution while procurement risk is systematically controlled.",
    ].join("\n"),
    coverImage: "",
    publishedAt: new Date().toISOString(),
    isFeatured: true,
  },
  {
    id: 2,
    slug: "industrial-safety-equipment-standards-qatar",
    title:
      "Industrial Safety Equipment Standards in Qatar: What Every Project Must Know",
    excerpt:
      "From PPE to welding protection, safety equipment in Qatar’s industrial projects is governed by international and local standards. Using the wrong specification is more than a quality issue—it is a compliance risk.",
    content: [
      "Safety equipment in Qatar’s industrial environment is specified against both international benchmarks and client-specific HSE frameworks. Whether it is PPE, respiratory protection, fall arrest systems, or welding shields, each category is governed by standards that define performance, testing, and labelling requirements.",
      "",
      "For project and maintenance teams, the challenge is not only to source equipment that carries the correct certifications, but also to match those certifications to the exact risk profile of the job. A generic “safety glove” or “helmet” description is no longer sufficient in complex facilities.",
      "",
      "A structured procurement approach focuses on:",
      "",
      "- Translating HSE requirements into material specifications",
      "- Verifying that proposed brands hold valid and recognized certifications",
      "- Ensuring consistency of supply across project and maintenance scopes",
      "- Maintaining documentation for audits and incident investigations",
      "",
      "By working with approved manufacturers and global safety brands, Promec Industrial helps clients avoid fragmented purchasing of mixed-quality safety items. Our role is to align technical data sheets, certification records, and end-user requirements so that every line item issued to site is both fit-for-purpose and defensible from a compliance perspective.",
    ].join("\n"),
    coverImage: "",
    publishedAt: new Date().toISOString(),
    isFeatured: false,
  },
  {
    id: 3,
    slug: "mro-vs-emergency-purchasing-heavy-industry",
    title:
      "MRO vs Emergency Purchasing: How Planned Procurement Saves Costs in Heavy Industry",
    excerpt:
      "Emergency purchasing is sometimes unavoidable—but when it becomes the norm, cost, risk, and complexity escalate. Structured MRO procurement creates stability for both operations and finance.",
    content: [
      "In many industrial facilities, a significant share of annual spend is consumed by unplanned, urgent purchases. While these transactions keep equipment running in the short term, they also introduce premium freight charges, higher unit prices, and increased administrative workload.",
      "",
      "Planned MRO procurement takes the opposite approach. Instead of treating every breakdown as a unique event, it maps recurring consumption patterns, critical spare lists, and OEM recommendations into a structured sourcing and stocking strategy.",
      "",
      "Key differences between emergency and planned MRO procurement include:",
      "",
      "- **Lead time**: emergency purchases rely on what is immediately available; planned MRO leverages negotiated lead times and framework agreements.",
      "- **Pricing**: reactive buys often accept whatever price is available; planned MRO uses volume, forecasting, and vendor consolidation to secure better commercial terms.",
      "- **Risk**: ad-hoc sourcing increases the chance of incorrect or non-genuine parts; structured MRO builds approved vendor lists and material masters.",
      "",
      "Promec Industrial supports clients in shifting spend from emergency mode into managed MRO programs. Through vendor managed inventory, catalog consolidation, and long-term agreements, we help heavy industry operators reduce total cost while improving reliability and transparency across their supply chain.",
    ].join("\n"),
    coverImage: "",
    publishedAt: new Date().toISOString(),
    isFeatured: false,
  },
];

export function useBlogPosts() {
  return useQuery({
    queryKey: ["blog-posts"],
    queryFn: async () => demoBlogPosts,
    staleTime: Infinity,
  });
}

export function useBlogPost(slug: string) {
  return useQuery({
    queryKey: ["blog-post", slug],
    queryFn: async () => {
      const post = demoBlogPosts.find((p) => p.slug === slug);
      return post ?? null;
    },
    enabled: !!slug,
    staleTime: Infinity,
  });
}

// ============================================
// INQUIRY HOOKS
// ============================================

export function useCreateInquiry() {
  return useMutation({
    mutationFn: async (data: InsertInquiry) => {
      const validated = api.inquiries.create.input.parse(data);
      const res = await fetch(api.inquiries.create.path, {
        method: api.inquiries.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });
      
      if (!res.ok) {
        if (res.status === 400) {
          const error = api.inquiries.create.responses[400].parse(
            await res.json(),
          );
          throw new Error(error.message);
        }
        throw new Error("Failed to send inquiry");
      }
      return api.inquiries.create.responses[201].parse(await res.json());
    },
  });
}

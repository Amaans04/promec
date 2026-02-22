import { useRoute, Link } from "wouter";
import { Section } from "@/components/Section";
import { ArrowLeft, CheckCircle2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageSEO } from "@/components/PageSEO";
import { useState, useEffect, useCallback } from "react";
import mroProducts from "@/data/mroProducts.json";
import { type MROProduct } from "@/components/MROProductCard";
import { useDiscoveredImageCount } from "@/hooks/useDiscoveredImageCount";
import { getImageSrc, getImageAlt } from "@/lib/mro-images";

const SITE_URL = "https://promec-industrial.com";

const products = mroProducts as MROProduct[];

export default function ProductMroDetail() {
  const [, params] = useRoute("/products/mro/:slug");
  const slug = params?.slug ?? "";
  const product = products.find((p) => p.slug === slug);

  const imageCount = useDiscoveredImageCount(
    product?.imagePath ?? "",
    product?.imageCount
  );
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  useEffect(() => {
    if (!product || imageCount <= 1) return;
    const t = setInterval(() => {
      setGalleryIndex((prev) => (prev + 1) % imageCount);
    }, 3000);
    return () => clearInterval(t);
  }, [product, imageCount]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") setLightboxIndex((i) => (i - 1 + imageCount) % imageCount);
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i + 1) % imageCount);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxOpen, imageCount, closeLightbox]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center px-4">
        <h1 className="text-3xl font-bold text-white mb-4">Product not found</h1>
        <p className="text-gray-400 mb-8">
          The MRO product you are looking for does not exist or has been moved.
        </p>
        <Link href="/products/mro">
          <Button variant="outline" className="border-primary/30 text-primary">
            Back to MRO Products
          </Button>
        </Link>
      </div>
    );
  }

  const metaDescription =
    product.shortDescription.slice(0, 157) +
    (product.shortDescription.length > 157 ? "…" : "");

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.longDescription,
    url: `${SITE_URL}/products/mro/${product.slug}`,
    image: Array.from({ length: imageCount }, (_, i) =>
      getImageSrc(product.imagePath, i).startsWith("http")
        ? getImageSrc(product.imagePath, i)
        : `${SITE_URL}${getImageSrc(product.imagePath, i)}`
    ),
    brand: {
      "@type": "Brand",
      name: "Promec Industrial",
    },
    category: "MRO – Maintenance, Repair & Operations",
  };

  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title={`${product.name} – MRO Supplies | Promec Industrial`}
        description={metaDescription}
        keywords={product.keywords}
        canonicalPath={`/products/mro/${product.slug}`}
        ogImage={`${SITE_URL}${getImageSrc(product.imagePath, 0)}`}
        ogType="product"
        jsonLd={productJsonLd}
      />

      <article>
        <section className="bg-muted py-24 relative overflow-hidden">
          <div className="absolute inset-0 tech-grid-bg opacity-30" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link
              href="/products/mro"
              className="inline-flex items-center text-gray-400 hover:text-primary mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to MRO Products
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              {product.name}
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl">
              {product.shortDescription}
            </p>
          </div>
        </section>

        <Section className="py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                  Overview
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {product.longDescription}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                  Key features
                </h2>
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <aside className="space-y-8">
              <section>
                <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wide sr-only lg:not-sr-only">
                  Gallery
                </h2>
                <button
                  type="button"
                  onClick={() => openLightbox(galleryIndex)}
                  className="relative aspect-[4/3] w-full rounded-lg overflow-hidden bg-muted/50 border border-white/10 block text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                  aria-label="Enlarge image"
                >
                  <img
                    src={getImageSrc(product.imagePath, galleryIndex)}
                    alt={getImageAlt(product.name, galleryIndex, imageCount)}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover cursor-zoom-in"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                      const next = target.nextElementSibling as HTMLElement | null;
                      if (next) next.style.display = "flex";
                    }}
                  />
                  <div
                    className="absolute inset-0 bg-muted/80 flex items-center justify-center"
                    style={{ display: "none" }}
                    aria-hidden
                  >
                    <span className="text-muted-foreground text-sm font-medium uppercase">
                      {product.name}
                    </span>
                  </div>
                </button>
                <div className="flex gap-2 mt-3 flex-wrap">
                  {Array.from({ length: imageCount }, (_, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`View image ${i + 1}`}
                      onClick={() => setGalleryIndex(i)}
                      className={`h-2 flex-1 min-w-0 rounded transition-colors max-w-[2rem] ${
                        i === galleryIndex ? "bg-primary" : "bg-white/20 hover:bg-white/30"
                      }`}
                    />
                  ))}
                </div>
              </section>

              {lightboxOpen && (
                <div
                  className="fixed inset-0 z-50 flex flex-col bg-black/90 pt-24 pb-8 px-4"
                  role="dialog"
                  aria-modal="true"
                  aria-label="Enlarged image"
                  onClick={(e) => e.target === e.currentTarget && closeLightbox()}
                >
                  {/* Content area below navbar: max height so everything stays in view */}
                  <div className="relative flex-1 flex items-center justify-center min-h-0 max-w-5xl mx-auto w-full">
                    <button
                      type="button"
                      onClick={closeLightbox}
                      className="absolute top-0 right-0 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                      aria-label="Close"
                    >
                      <X className="w-6 h-6" />
                    </button>
                    {imageCount > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={(e) => { e.stopPropagation(); setLightboxIndex((i) => (i - 1 + imageCount) % imageCount); }}
                          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="w-8 h-8" />
                        </button>
                        <button
                          type="button"
                          onClick={(e) => { e.stopPropagation(); setLightboxIndex((i) => (i + 1) % imageCount); }}
                          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                          aria-label="Next image"
                        >
                          <ChevronRight className="w-8 h-8" />
                        </button>
                      </>
                    )}
                    <img
                      src={getImageSrc(product.imagePath, lightboxIndex)}
                      alt={getImageAlt(product.name, lightboxIndex, imageCount)}
                      className="max-w-full max-h-[calc(100vh-14rem)] w-auto h-auto object-contain"
                      onClick={(e) => e.stopPropagation()}
                    />
                    <p className="absolute bottom-0 left-1/2 -translate-x-1/2 text-white/80 text-sm">
                      {lightboxIndex + 1} / {imageCount}
                    </p>
                  </div>
                </div>
              )}

              <section className="bg-muted/30 border border-white/5 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">
                  Request a quote
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  Get pricing and availability for {product.name}. Our team will respond shortly.
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-background font-bold">
                    Enquiry / Contact
                  </Button>
                </Link>
              </section>
            </aside>
          </div>
        </Section>
      </article>
    </div>
  );
}

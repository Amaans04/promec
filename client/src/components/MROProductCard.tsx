import { Link } from "wouter";
import { motion, type Variants } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { useDiscoveredImageCount } from "@/hooks/useDiscoveredImageCount";
import { getImageSrc, getImageAlt } from "@/lib/mro-images";

const CYCLE_INTERVAL_MS = 2800;

export interface MROProduct {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  keywords: string[];
  imagePath: string;
  /** Optional: number of images (1.webp, 2.webp, ...). If omitted, count is discovered automatically. */
  imageCount?: number;
}

interface MROProductCardProps {
  product: MROProduct;
  variants?: Variants;
}

export function MROProductCard({ product, variants }: MROProductCardProps) {
  const imageCount = useDiscoveredImageCount(product.imagePath, product.imageCount);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (imageCount <= 1) return;
    const t = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % imageCount);
    }, CYCLE_INTERVAL_MS);
    return () => clearInterval(t);
  }, [imageCount]);

  const imageSrc = getImageSrc(product.imagePath, currentImageIndex);
  const imageAlt = getImageAlt(product.name, currentImageIndex, imageCount);

  const cardContent = (
    <Card className="bg-muted/30 border-white/5 hover:border-primary/30 transition-colors h-full overflow-hidden group hover:shadow-lg hover:shadow-primary/5 duration-300">
      <CardHeader className="p-0">
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted/50">
          <img
            src={imageSrc}
            alt={imageAlt}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-opacity duration-500"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = "none";
              const fallback = target.nextElementSibling as HTMLElement | null;
              if (fallback) fallback.style.display = "flex";
            }}
          />
          <div
            className="absolute inset-0 bg-muted/80 flex items-center justify-center"
            style={{ display: "none" }}
            aria-hidden
          >
            <span className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
              {product.name}
            </span>
          </div>
        </div>
        <div className="p-6 pb-0">
          <CardTitle className="text-white text-xl mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </CardTitle>
          <CardDescription className="text-gray-400 text-sm">
            MRO · Industrial supply
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 mb-4">
          {product.shortDescription}
        </p>
        <span className="inline-block w-full text-center bg-primary/10 hover:bg-primary/20 text-primary font-medium py-2 px-4 rounded transition-colors border border-primary/20">
          View details
        </span>
      </CardContent>
    </Card>
  );

  const wrapper = variants ? (
    <motion.div variants={variants}>
      <Link href={`/products/mro/${product.slug}`} className="block h-full">
        {cardContent}
      </Link>
    </motion.div>
  ) : (
    <Link href={`/products/mro/${product.slug}`} className="block h-full">
      {cardContent}
    </Link>
  );

  return wrapper;
}

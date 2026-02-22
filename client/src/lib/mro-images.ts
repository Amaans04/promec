/**
 * MRO product image path and count utilities.
 * Images are stored at: public/products/mro/<imagePath>/1.webp, 2.webp, ...
 */

export const MAX_DISCOVERED_IMAGES = 50;

export function getImageSrc(imagePath: string, index: number): string {
  return `/products/mro/${imagePath}/${index + 1}.webp`;
}

export function getImageAlt(productName: string, index: number, total: number): string {
  if (index === 0) return `${productName} – industrial MRO product, main view`;
  if (index === 1) return `${productName} – detail or application view`;
  if (total > 2 && index === total - 1) return `${productName} – alternative view`;
  return `${productName} – image ${index + 1} of ${total}`;
}

import { useState, useEffect, useRef } from "react";
import { getImageSrc, MAX_DISCOVERED_IMAGES } from "@/lib/mro-images";

/**
 * Returns the number of images for a product.
 * If explicitCount is provided (e.g. from JSON), use it.
 * Otherwise discover by loading 1.webp, 2.webp, ... until one fails or we hit MAX_DISCOVERED_IMAGES.
 */
export function useDiscoveredImageCount(
  imagePath: string,
  explicitCount?: number
): number {
  const [count, setCount] = useState(() => Math.max(1, explicitCount ?? 1));
  const triedRef = useRef(false);

  useEffect(() => {
    if (explicitCount != null && explicitCount >= 1) {
      setCount(Math.max(1, explicitCount));
      return;
    }

    let cancelled = false;

    function tryLoad(index: number) {
      if (cancelled || index >= MAX_DISCOVERED_IMAGES) return;
      const img = new Image();
      img.onload = () => {
        if (cancelled) return;
        setCount(index + 1);
        tryLoad(index + 1);
      };
      img.onerror = () => {
        /* discovery done */
      };
      img.src = getImageSrc(imagePath, index);
    }

    if (!triedRef.current) {
      triedRef.current = true;
      tryLoad(0);
    }

    return () => {
      cancelled = true;
    };
  }, [imagePath, explicitCount]);

  if (explicitCount != null && explicitCount >= 1) {
    return Math.max(1, explicitCount);
  }

  return count;
}

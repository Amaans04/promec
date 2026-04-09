import { useEffect, useRef } from "react";

const SITE_URL = "https://promec-industrial.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/big_logo.png`;

export interface PageSEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalPath?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "product";
  jsonLd?: object | object[];
}

export function PageSEO({
  title,
  description,
  keywords = [],
  canonicalPath = "",
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  jsonLd,
}: PageSEOProps) {
  const jsonLdScriptId = useRef<string | null>(null);

  useEffect(() => {
    const fullTitle = title.includes("Promec") ? title : `${title} | Promec Industrial`;
    document.title = fullTitle;

    const setMeta = (attr: "name" | "property", key: string, value: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    setMeta("name", "description", description);
    if (keywords.length) setMeta("name", "keywords", keywords.join(", "));

    const canonicalUrl = canonicalPath ? `${SITE_URL}${canonicalPath}` : SITE_URL;
    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.rel = "canonical";
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = canonicalUrl;

    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:image", ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`);
    setMeta("property", "og:type", ogType);

    if (jsonLd) {
      const id = "json-ld-" + Math.random().toString(36).slice(2);
      jsonLdScriptId.current = id;
      const script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(Array.isArray(jsonLd) ? jsonLd : jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      if (jsonLdScriptId.current) {
        const script = document.getElementById(jsonLdScriptId.current);
        if (script) script.remove();
        jsonLdScriptId.current = null;
      }
    };
  }, [title, description, keywords, canonicalPath, ogImage, ogType, jsonLd]);

  return null;
}

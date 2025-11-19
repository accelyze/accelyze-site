// Collection of constants to refer throughout the SITE

import ogImageSrc from "@images/accelyze.png";

export const SITE = {
  title: "Accelyze",
  tagline: "AI that ships.",
  description:
    "Accelyze takes AI to production with hardened platforms, shipping sprints, and applied advisory.",
  description_short:
    "AI that ships. Applied engineering from prototype to production.",
  url: "https://accelyze.ai",
  author: "Accelyze",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title} · AI that ships`,
  description: "Production AI services, accelerators, and advisory built by the team that keeps shipping.",
  image: ogImageSrc,
};

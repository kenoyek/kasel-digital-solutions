import type { Metadata } from "next";

export const SITE_URL = "https://kaseldigitalsolutions.com";
export const SITE_NAME = "KASEL Digital Solutions";
export const BUSINESS_NAME = "KASEL DIGITAL SOLUTIONS LTD";
export const HOME_TITLE = "KASEL Digital Solutions | Precision in Motion";
export const HOME_DESCRIPTION =
  "KASEL Digital Solutions builds high-performing websites, digital products, brands and automation systems that help businesses move faster and grow.";
export const SOCIAL_IMAGE = "/kasel-social-preview.png";

export const principalServices = [
  "Web and mobile development",
  "UI/UX and brand design",
  "Video and digital content",
  "Workflow automation",
  "Cloud solutions",
  "Data and analytics",
  "IT strategy and consulting",
  "Digital transformation",
];

export const sharedMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: HOME_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: HOME_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: SOCIAL_IMAGE,
        width: 1200,
        height: 630,
        alt: "KASEL Digital Solutions orb logo with Precision in Motion brand message",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [SOCIAL_IMAGE],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  other: {
    "codex-preview": "development",
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  alternateName: BUSINESS_NAME,
  url: SITE_URL,
  description: HOME_DESCRIPTION,
  publisher: {
    "@type": "Organization",
    name: BUSINESS_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/kasel-orb.png`,
  },
};

export const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: BUSINESS_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/kasel-orb.png`,
  image: `${SITE_URL}${SOCIAL_IMAGE}`,
  slogan: "Precision in Motion",
  description:
    "KASEL Digital Solutions helps businesses build smarter, move faster, and stand out through practical digital solutions.",
  email: "hello@kasel.digital",
  telephone: "+2347075042166",
  makesOffer: {
    "@type": "OfferCatalog",
    name: "Digital solution services",
    itemListElement: principalServices.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service,
        provider: {
          "@type": "Organization",
          name: BUSINESS_NAME,
          url: SITE_URL,
        },
      },
    })),
  },
};

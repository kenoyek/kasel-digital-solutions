import { SITE_URL, SOCIAL_IMAGE } from "../seo";

export type CaseStudy = {
  slug: string;
  name: string;
  client: string;
  category: string;
  heroEyebrow?: string;
  heroHeading?: string;
  heroSummary?: string;
  services: string[];
  summary: string;
  challenge: string;
  solution: string;
  capabilities: string[];
  technologies: string[];
  outcome: string;
  websiteLinks?: {
    label: string;
    url: string;
  }[];
  relatedSlugs: string[];
  focusAreas?: {
    title: string;
    description: string;
    items?: string[];
  }[];
  visualAlt: string;
  accent: "lime" | "teal" | "sky" | "signal";
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "teacheasy-lms",
    name: "TeachEasy LMS",
    client: "LearnEasy Academy",
    category: "Education Technology / Learning Management System",
    services: [
      "Product strategy",
      "UX/UI design",
      "Full-stack development",
      "Cloud infrastructure",
      "Workflow automation",
      "Platform maintenance",
    ],
    summary:
      "TeachEasy is a multi-tenant learning management platform built to help tutoring academies manage students, parents, tutors, classes and academic operations from one central system.",
    challenge:
      "Managing tutoring operations across separate scheduling, classroom, payment and communication tools can create unnecessary administrative complexity.",
    solution:
      "Kasel shaped and built a role-based academy platform with dedicated portals for administrators, tutors, students and parents, bringing core learning operations into one structured product.",
    capabilities: [
      "Multi-tenant academy architecture",
      "Administrator, tutor, student and parent portals",
      "One-time and recurring class scheduling",
      "Live online classrooms",
      "Assessments, attendance and lesson records",
      "Payments, subscriptions and communication history",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Row Level Security",
      "Jitsi",
      "Resend",
      "Cloud deployment",
    ],
    outcome:
      "TeachEasy brings the core operational tools needed by an online academy into one structured platform, reducing dependence on disconnected scheduling, communication and classroom tools.",
    websiteLinks: [
      {
        label: "Visit TeachEasy LMS",
        url: "https://teacheasylms.com",
      },
    ],
    relatedSlugs: ["1vet", "reframe"],
    visualAlt:
      "Designed interface preview representing TeachEasy LMS academy portals, live classes and lesson records.",
    accent: "lime",
  },
  {
    slug: "1vet",
    name: "1Vet",
    client: "Varifarms",
    category: "Veterinary Technology / Pet Healthcare / Pet HMO",
    services: [
      "Product architecture",
      "UX/UI design",
      "Full-stack development",
      "Healthcare workflows",
      "Marketplace development",
      "Payment integration",
    ],
    summary:
      "1Vet is an online veterinary care and pet health platform designed for pet owners, livestock farmers, veterinarians, clinics and other animal-care providers.",
    challenge:
      "Animal-care journeys can involve separate records, providers, service bookings, emergency support, payment flows and commerce needs.",
    solution:
      "Kasel developed a multi-role platform architecture that connects veterinary consultations, pet records, provider directories, service bookings, healthcare plans and pet-related commerce.",
    capabilities: [
      "Pet and livestock profiles",
      "Veterinary consultations and provider bookings",
      "Pet healthcare and HMO plans",
      "Digital pet health records",
      "Marketplace and vendor dashboards",
      "Emergency care support and payment integration",
    ],
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Supabase Realtime",
      "Edge Functions",
      "TanStack React Query",
      "Paystack",
    ],
    outcome:
      "1Vet creates a connected digital environment where pet owners and animal-care professionals can manage healthcare, services and pet-related transactions more efficiently.",
    websiteLinks: [
      {
        label: "Visit 1Vet",
        url: "https://1vet.store",
      },
    ],
    relatedSlugs: ["asele", "teacheasy-lms"],
    visualAlt:
      "Designed interface preview representing 1Vet pet records, provider bookings, healthcare plans and marketplace workflows.",
    accent: "teal",
  },
  {
    slug: "asele",
    name: "Asele",
    client: "Asele",
    category: "Women's Health Technology",
    services: [
      "Mobile product development",
      "UX/UI implementation",
      "Backend development",
      "Health-tracking systems",
      "Notifications",
      "Internationalisation",
      "Application deployment",
    ],
    summary:
      "Asele is a women's cycle and wellness application designed to help users understand and manage their menstrual health through cycle tracking, personalised reminders, wellness insights and private health records.",
    challenge:
      "Personal health tracking needs to feel private, clear and timely while supporting reminders, insights, language needs and secure access.",
    solution:
      "Kasel worked on the mobile product experience, notification systems, multilingual support, authentication and health-tracking functionality for a privacy-focused cycle and wellness app.",
    capabilities: [
      "Menstrual cycle tracking",
      "Period and fertility-window predictions",
      "PMS, wellness and birth-control reminders",
      "Personal trends and health insights",
      "Notification centre and recurring health reminders",
      "Multilingual and right-to-left language support",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Capacitor",
      "Supabase",
      "Firebase Cloud Messaging",
      "Mobile deep linking",
      "Google authentication",
      "Multilingual architecture",
    ],
    outcome:
      "Asele gives users a structured and private way to track their cycle, recognise personal health patterns and receive timely wellness reminders.",
    websiteLinks: [
      {
        label: "Visit Asele",
        url: "https://www.asele.health",
      },
    ],
    relatedSlugs: ["1vet", "reframe"],
    visualAlt:
      "Designed mobile interface preview representing Asele cycle tracking, reminders and private wellness records.",
    accent: "sky",
  },
  {
    slug: "reframe",
    name: "Reframe",
    client: "Reframe",
    category: "Community Technology / Social Impact Platform / Mobile Application",
    heroEyebrow: "Community Technology",
    heroHeading: "Bringing Reframe's community platform to mobile",
    heroSummary:
      "Reframe connects people, campaigns and collective-action initiatives through a digital community platform. Kasel worked on translating its existing web ecosystem into a connected mobile experience for Android and iOS.",
    services: [
      "Existing-platform technical audit",
      "Mobile application development",
      "Mobile UX implementation",
      "REST API integration",
      "Community-feed development",
      "Authentication integration",
      "Deep-link configuration",
      "Android and iOS deployment preparation",
      "Mobile branding and application icon implementation",
      "Testing and platform stabilisation",
    ],
    summary:
      "A mobile community experience connecting users with conversations, campaigns, resources and collective-action initiatives through Reframe's existing digital platform.",
    challenge:
      "Reframe already had web-based community and campaign experiences, but delivering those capabilities through a reliable mobile application required careful integration with the existing authentication, API, navigation, payment and content systems.",
    solution:
      "Kasel worked on a mobile application architecture that connects to Reframe's existing platform, presents community content in a mobile-friendly interface and prepares key workflows for Android and iOS use.",
    capabilities: [
      "Community newsfeed",
      "Public and authenticated community content",
      "User posts and individual post pages",
      "Likes, reactions, comments and engagement counts",
      "Community profiles",
      "Campaign discovery and Collective Change initiatives",
      "Educational and campaign resources",
      "Google authentication and guest access",
      "Donations and Stripe payment flows",
      "Infinite feed pagination and pull-to-refresh",
      "Mobile navigation and deep-link support",
      "Android and iOS application support",
      "Mobile application branding",
      "Loading skeletons and user feedback states",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Capacitor",
      "Existing PHP REST API",
      "Next.js community frontend",
      "PHP backend",
      "Auth.js or NextAuth",
      "Stripe-hosted donation flows",
    ],
    outcome:
      "The mobile experience makes Reframe's community discussions, campaigns, resources and collective-action tools more accessible to users beyond the desktop website.",
    websiteLinks: [
      {
        label: "Visit Reframe",
        url: "https://reframe.network",
      },
      {
        label: "Explore the Reframe Community",
        url: "https://community.reframe.network",
      },
    ],
    relatedSlugs: ["asele", "teacheasy-lms"],
    focusAreas: [
      {
        title: "Platform structure",
        description:
          "Reframe operates across a public website for information, profiles, resources and donations, plus a community experience for newsfeed, campaigns, collective-change features and authentication.",
        items: ["reframe.network", "community.reframe.network"],
      },
      {
        title: "API and platform integration",
        description:
          "The mobile client connects to the existing Reframe REST API so community content, campaign workflows and user interactions stay aligned with the established platform.",
        items: [
          "Existing REST API integration",
          "Community-feed development",
          "Post pages and engagement counts",
          "Infinite pagination",
        ],
      },
      {
        title: "Authentication and deep-link work",
        description:
          "Kasel worked on authentication integration, guest access and mobile deep-link configuration so users can move between community content and mobile app routes more reliably.",
        items: ["Google authentication", "Guest access", "Deep-link support", "Mobile navigation"],
      },
      {
        title: "Application branding and icon system",
        description:
          "Kasel implemented mobile branding and application icon preparation as part of the Android and iOS deployment work.",
        items: ["Mobile application branding", "Application icon implementation", "Android support", "iOS support"],
      },
    ],
    visualAlt:
      "Designed mobile interface preview representing Reframe community feeds, campaigns, collective-action tools and deep links.",
    accent: "signal",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}

export function getRelatedCaseStudies(slug: string) {
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    return caseStudies.slice(0, 2);
  }

  return caseStudy.relatedSlugs
    .map((relatedSlug) => getCaseStudy(relatedSlug))
    .filter((related): related is CaseStudy => Boolean(related));
}

export const workMetadata = {
  title: "Digital Products Built by Kasel | Web, Mobile and AI Projects",
  description:
    "Explore selected digital products built by Kasel, including education technology, veterinary care, women's health and community technology platforms.",
  path: "/work",
};

export const caseStudyMetadata: Record<
  string,
  { title: string; description: string; path: string }
> = {
  "teacheasy-lms": {
    title: "TeachEasy LMS Case Study | Education Platform by Kasel",
    description:
      "See how Kasel worked on TeachEasy LMS, a multi-tenant learning management platform for tutoring academy operations.",
    path: "/work/teacheasy-lms",
  },
  "1vet": {
    title: "1Vet Case Study | Veterinary and Pet HMO Platform by Kasel",
    description:
      "See how Kasel worked on 1Vet, a veterinary care, pet HMO, provider booking and pet-commerce platform.",
    path: "/work/1vet",
  },
  asele: {
    title: "Asele Case Study | Women's Health Application by Kasel",
    description:
      "See how Kasel worked on Asele, a private cycle tracking and women's wellness mobile application.",
    path: "/work/asele",
  },
  reframe: {
    title: "Reframe Case Study | Community Mobile Platform by Kasel",
    description:
      "See how Kasel worked on Reframe, a mobile community and social-impact platform connected to an existing web ecosystem.",
    path: "/work/reframe",
  },
};

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

export function socialImageUrl() {
  return absoluteUrl(SOCIAL_IMAGE);
}

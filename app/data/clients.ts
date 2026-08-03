export type Client = {
  caseStudyHref: string;
  displayName?: string;
  logoKind?: "icon" | "text" | "wordmark";
  name: string;
  logo?: string;
};

export const CLIENT_LOGO_CAROUSEL_ENABLED = true;

// Approved client logos supplied for the KASEL DIGITAL SOLUTIONS LTD website.
// Add future clients here only when their name and logo asset are approved.
export const clients: Client[] = [
  {
    caseStudyHref: "/work/teacheasy-lms",
    displayName: "LearnEasy",
    logoKind: "wordmark",
    name: "LearnEasy Academy",
    logo: "/clients/learneasy-academy.png",
  },
  {
    caseStudyHref: "/work/1vet",
    displayName: "Varifarms",
    logoKind: "wordmark",
    name: "Varifarms",
    logo: "/clients/varifarms.svg",
  },
  {
    caseStudyHref: "/work/asele",
    logoKind: "icon",
    name: "Asele",
    logo: "/clients/asele.png",
  },
  {
    caseStudyHref: "/work/reframe",
    logoKind: "wordmark",
    name: "Reframe",
    logo: "/clients/reframe-wordmark.png",
  },
];

export const clientLogoDimensions: Record<
  string,
  { height: number; width: number }
> = {
  "/clients/asele.png": {
    height: 512,
    width: 512,
  },
  "/clients/learneasy-academy.png": {
    height: 257,
    width: 731,
  },
  "/clients/reframe-wordmark.png": {
    height: 170,
    width: 720,
  },
  "/clients/varifarms.svg": {
    height: 543,
    width: 3157,
  },
};

export type Client = {
  name: string;
  logo: string;
  website?: string;
};

export const CLIENT_LOGO_CAROUSEL_ENABLED = true;

// Approved client logos supplied for the KASEL DIGITAL SOLUTIONS LTD website.
// Add future clients here only when their name and logo asset are approved.
export const clients: Client[] = [
  {
    name: "Asele",
    logo: "/clients/asele.png",
  },
  {
    name: "LearnEasy Academy",
    logo: "/clients/learneasy-academy.png",
  },
  {
    name: "reframe",
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
};

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The requested KASEL Digital Solutions page could not be found. Return home to explore our digital services and contact options.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="tag">— 404</p>
      <h1>Page not found.</h1>
      <p>
        This page is unavailable, but the path back to KASEL Digital Solutions is
        still clear.
      </p>
      <Link className="btn green" href="/">
        Return home
      </Link>
    </main>
  );
}

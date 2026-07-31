import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kasel Digital Solutions Ltd | Build Smarter. Move Faster.",
  description: "Kasel Digital Solutions creates websites, mobile apps, brand experiences, digital content and technology solutions for ambitious businesses.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

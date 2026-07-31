import type { Metadata } from "next";
import WhatsAppButton from "./components/WhatsAppButton";
import "./globals.css";
import { sharedMetadata } from "./seo";

export const metadata: Metadata = sharedMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { PixelCursorTrail } from "@/components/ui/pixel-trail";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const siteUrl = "https://charlsz.tech";

export const metadata: Metadata = {
  title: "Charlie",
  description: "Carlos Galvis - Portfolio",
  metadataBase: new URL(siteUrl),
  icons: {
    icon: "/images/logo.png",
  },
  openGraph: {
    title: "Carlos Galvis",
    description: "Born in Cartagena, Colombia. Software Engineer & Designer",
    url: siteUrl,
    siteName: "Charlie",
    images: [{ url: "/images/charlie.png"}],
  },
  twitter: {
    title: "Carlos Galvis",
    description: "Born in Cartagena, Colombia. Software Engineer & Designer",
    images: "/images/charlie.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
        <Analytics />
        <PixelCursorTrail />
      </body>
    </html>
  );
}

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
    icon: "/images/cgalvislogo.png",
  },
  openGraph: {
    title: "Charlie",
    description: "Carlos Galvis - Portfolio",
    url: siteUrl,
    siteName: "Charlie",
    images: [{ url: "/images/urlpicture.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/urlpicture.png"],
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

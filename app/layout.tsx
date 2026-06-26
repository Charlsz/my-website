import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { PixelCursorTrail } from "@/components/ui/pixel-trail";
import BackgroundStars from "@/components/ui/backgroundstars";
import BackgroundStars2 from "@/components/ui/backgroundstars2";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const siteUrl = "https://charlsz.tech";

export const metadata: Metadata = {
  title: "Charlie's site",
  description: "Carlos Galvis — Portfolio",
  metadataBase: new URL(siteUrl),
  icons: {
    icon: "/images/cgalvislogo.png",
  },
  openGraph: {
    title: "Charlie's site",
    description: "Carlos Galvis — Portfolio",
    url: siteUrl,
    siteName: "Charlie's site",
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
        <div className="bg-stars-left">
          <BackgroundStars />
        </div>
        <div className="bg-stars-right">
          <BackgroundStars2 />
        </div>
      </body>
    </html>
  );
}

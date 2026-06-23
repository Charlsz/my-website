import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PixelCursorTrail } from "@/components/ui/pixel-trail";
import BackgroundStars from "@/components/ui/backgroundstars";
import BackgroundStars2 from "@/components/ui/backgroundstars2";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Charlie's site",
  description: "Carlos Galvis — Portfolio",
  icons: {
    icon: "/my-website/images/frieren-staff.png",
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

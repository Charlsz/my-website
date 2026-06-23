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
        <div style={{ 
            position: "fixed", 
            bottom: 0, 
            left: 0, 
            width: "70vw", 
            height: "90vh", 
            zIndex: -1, 
            pointerEvents: "none", 
            opacity: 0.28,
            backdropFilter: "blur(10px)", // Agrega el desenfoque al fondo
            WebkitBackdropFilter: "blur(10px)" // Compatibilidad con Safari
          }}>

          <BackgroundStars />
        </div>
        <div style={{ 
            position: "fixed", 
            top: "-10vh", 
            right: "-25vw", 
            width: "70vw", 
            height: "90vh", 
            zIndex: -1, 
            pointerEvents: "none", 
            opacity: 0.28,
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)"
          }}>
          <BackgroundStars2 />
        </div>
      </body>
    </html>
  );
}

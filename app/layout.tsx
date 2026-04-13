import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "@/app/globals.css";

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
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

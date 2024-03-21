import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Providers } from "./providers";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Bracketed",
  keywords:
    "Bracketed, Tech, React, Website, Web, Desktop, Mobile, Web App, Application, Next js, Tailwind",
  description:
    "Bracketed: Learn new skills, solve problems, and stay ahead of the curve in the programming world.",
  icons: {
    icon: "https://blog.bracketed.tech/uploads/bracketed_favicon_black_5d343f064e.png",
  },
  openGraph: {
    title: "Bracketed",
    description:
      "Bracketed: Learn new skills, solve problems, and stay ahead of the curve in the programming world.",
    images: ["https://blog.bracketed.tech/uploads/bracketed_5cedd374d7.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bracketed",
    description:
      "Bracketed: Learn new skills, solve problems, and stay ahead of the curve in the programming world.",
    images: ["https://blog.bracketed.tech/uploads/bracketed_5cedd374d7.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

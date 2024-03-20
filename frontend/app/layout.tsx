import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Providers } from "./providers";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Bracketed",
  description: "Tech Blog",
  icons: {
    icon: "https://blog.bracketed.tech/uploads/bracketed_high_resolution_logo_black_transparent_f63d4ea087.png",
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

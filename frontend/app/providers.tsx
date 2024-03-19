// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Header from "./_components/Header";
import { Footer } from "./_components/Footer";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <Header />
        {children}
        <Footer />
      </NextThemesProvider>
    </NextUIProvider>
  );
}

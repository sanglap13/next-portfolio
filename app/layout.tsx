import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

//components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
//themeprovider
import ThemeProvider from "@/components/theme/ThemeProvider";

import { Analytics } from "@vercel/analytics/react";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sanglap Mridha",
  description: "Portfolio of Sanglap Mridha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";

import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AWP",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <ScrollToTop />
        <footer className="py-4 text-center bg-white text-gray-900 backdrop-blur-sm">
          <p className="text-gray-700">
            2023 © Africa West Paper. All rights reserved • Made by{" "}
            <Link
              href="https://astraweb.ma/"
              className="font-bold hover:text-green-600"
            >
              Astraweb.ma
            </Link>
          </p>
        </footer>
      </body>
    </html>
  );
}

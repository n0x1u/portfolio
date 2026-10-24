import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { site, hero } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Título y descripción que aparecen en la pestaña del navegador y en Google.
export const metadata: Metadata = {
  title: `${site.name} | Desarrollo web y apps para empresas`,
  description: hero.subtitle,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}

// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "DevHub - Create Your Developer Portfolio",
    template: "%s | DevHub",
  },
  description:
    "AI-powered CV and Portfolio platform for developers. Connect GitHub, generate professional CV in minutes.",
  keywords: ["developer portfolio", "CV generator", "GitHub resume", "developer CV"],
  authors: [{ name: "DevHub" }],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: process.env.NEXT_PUBLIC_APP_URL,
    siteName: "DevHub",
    title: "DevHub - Create Your Developer Portfolio",
    description: "AI-powered CV and Portfolio platform for developers.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <SessionProvider>
          {children}
          <Toaster />
        </SessionProvider>
      </body>
    </html>
  );
}

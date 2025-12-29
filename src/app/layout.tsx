import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PT LAWENTCO - Konstruksi Gedung Industri & Meta Ads Specialist",
  description: "PT LAWENTCO - Spesialis konstruksi gedung industri dengan solusi Meta Ads yang inovatif untuk pertumbuhan bisnis Anda",
  keywords: ["konstruksi gedung industri", "PT LAWENTCO", "meta ads", "konstruksi", "bangunan industri", "iklan digital"],
  authors: [{ name: "PT LAWENTCO" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "PT LAWENTCO - Konstruksi Gedung Industri & Meta Ads Specialist",
    description: "Spesialis konstruksi gedung industri dengan solusi Meta Ads yang inovatif",
    url: "https://pt-lawentco.vercel.app",
    siteName: "PT LAWENTCO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT LAWENTCO - Konstruksi Gedung Industri & Meta Ads Specialist",
    description: "Spesialis konstruksi gedung industri dengan solusi Meta Ads yang inovatif",
  },
  other: {
    "facebook-domain-verification": "95fev6yhixpsuz92xw1tylzt9hxuxz",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="facebook-domain-verification" content="95fev6yhixpsuz92xw1tylzt9hxuxz" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

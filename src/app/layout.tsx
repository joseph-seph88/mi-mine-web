import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/lib/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3001'),
  title: "MIMINE WEB",
  description: "JOSEPH88's Mi-Mine Web",
  authors: [{ name: "JOSEPH88" }],
  openGraph: {
    title: "Mi-Mine Web",
    description: "JOSEPH88's Mi-Mine Web",
    type: "website",
    url: "https://github.com/joseph-seph88/mi-mine-web",
    images: ["/images/mimine-web.png"],
    siteName: "MiMine",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}

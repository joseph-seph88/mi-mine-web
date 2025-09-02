import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "나를 찾아 떠나는 특별한 여행 | 개인 포트폴리오",
  description: "사진, 영상, 그리고 이야기로 채워진 나만의 공간에서 진정한 나를 발견하는 시간을 가져보세요. 여행 경험과 개인 스토리를 공유합니다.",
  keywords: "여행, 포트폴리오, 개인브랜딩, 사진, 영상, 블로그, 여행기록",
  authors: [{ name: "여행자" }],
  openGraph: {
    title: "나를 찾아 떠나는 특별한 여행",
    description: "사진, 영상, 그리고 이야기로 채워진 나만의 공간",
    type: "website",
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
        {children}
      </body>
    </html>
  );
}

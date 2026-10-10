import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DevHub — Nền tảng Portfolio & CV cho Lập trình viên",
  description:
    "Biến hồ sơ GitHub thành Portfolio và CV lập trình viên chuyên nghiệp. Nhập dự án tự động, nâng tầm nội dung với AI, chọn giao diện mẫu tinh tế và xuất bản chỉ trong vài phút.",
  keywords: ["portfolio", "developer", "github", "cv", "resume", "lập trình viên"],
  authors: [{ name: "DevHub Team" }],
  openGraph: {
    title: "DevHub — Nền tảng Portfolio & CV cho Lập trình viên",
    description: "Xây dựng Portfolio giúp bạn luôn nổi bật.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="vi"
      className={`${geist.variable} ${geistMono.variable} ${inter.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-on-surface">
        {children}
      </body>
    </html>
  );
}

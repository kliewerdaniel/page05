import type { Metadata } from "next";
import { Share_Tech_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import PageTransitionWrapper from "@/components/page-transition-wrapper";

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  variable: "--font-share-tech-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daniel Kliewer",
  description: "A modern developer portfolio built with Next.js, Tailwind CSS, and Framer Motion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${shareTechMono.variable} font-mono antialiased flex flex-col min-h-screen`}
        suppressHydrationWarning={true}
      >
        <Header />
        <main className="flex-grow">
          <PageTransitionWrapper>{children}</PageTransitionWrapper>
        </main>
        <Footer />
      </body>
    </html>
  );
}

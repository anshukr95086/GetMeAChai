import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Get Me A Chai - Fund your projects",
  description: "A Website for crowdfunding for developers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" type="image/svg" href="/favicon.svg" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionWrapper>
        <Navbar />
        <div className="fixed top-0 z-[-2] w-full h-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
        <div className="min-h-[90vh] text-white"> {children}</div>
        <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}

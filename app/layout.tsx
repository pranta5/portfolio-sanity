import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pranta's portfolio",
  description: "Pranta's portfolio managed by Sanity.io",
  openGraph: {
    // images: "add-your-open-graph-image-url-here",
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
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

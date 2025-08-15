import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap"
})

export const metadata: Metadata = {
  title: "Mochi",
  description: "Url Shortener",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scrollbar-hide">
      <body
        className={`${inter.variable} font-inter antialiased px-2.5 relative overflow-x-hidden overflow-y-auto pt-52`}
      >
        {children}
        <div className="select-none pointer-events-none top-[-10px] left-0 absolute -z-10 w-full h-full bg-background bg-[linear-gradient(to_right,#efefef_1px,transparent_1px),linear-gradient(to_bottom,#efefef_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
        <Footer/>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


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
    <html lang="en">
      <body
        className={`${inter.variable} font-inter antialiased px-5 pt-44`}
      >
        {children}
      </body>
    </html>
  );
}

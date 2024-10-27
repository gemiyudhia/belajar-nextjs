"use client"

import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const disableNavbar = ['/login', '/register']

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
const pathname = usePathname()

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {!disableNavbar.includes(pathname) && <Navbar />}
        {children}
      </body>
    </html>
  );
}

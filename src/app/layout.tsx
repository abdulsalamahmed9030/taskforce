import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald, Open_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans", // ✅ Open Sans setup
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Task Force Interior",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome CDN for icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-xxx"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} ${openSans.variable} font-openSans antialiased`} // ✅ Sets Open Sans as default font
      >
        {children}
      </body>
    </html>
  );
}

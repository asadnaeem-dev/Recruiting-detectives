import type { Metadata } from "next";
import { Spline_Sans, Newsreader } from "next/font/google";
import "./globals.css";

const splineSans = Spline_Sans({
  variable: "--font-spline-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "The Frantic Switchboard",
  description: "A 1930s Noir Detective Web Experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${splineSans.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="bg-background text-on-background selection:bg-primary-container selection:text-white overflow-x-hidden min-h-full flex flex-col">
        <div className="grainy-overlay"></div>
        {children}
      </body>
    </html>
  );
}

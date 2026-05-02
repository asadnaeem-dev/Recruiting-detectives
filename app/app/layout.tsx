import type { Metadata } from "next";
import { Limelight, Newsreader, Playfair_Display, Special_Elite } from "next/font/google";
import "./globals.css";

const limelight = Limelight({
  variable: "--font-limelight",
  subsets: ["latin"],
  weight: "400",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

const specialElite = Special_Elite({
  variable: "--font-special-elite",
  subsets: ["latin"],
  weight: "400",
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
      className={`dark ${limelight.variable} ${newsreader.variable} ${playfair.variable} ${specialElite.variable} h-full antialiased`}
    >
      <body className="bg-background text-on-background selection:bg-primary-container selection:text-white overflow-x-hidden min-h-full flex flex-col font-body-md">
        <div className="grainy-overlay"></div>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Fraunces, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { sbcConfig } from "@/config/sbc";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const bebas = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${sbcConfig.name} • ${sbcConfig.institution}`,
  description: `${sbcConfig.aboutSection.officialDescription}`,
  keywords: [
    "Startup Bootcamp 9.0",
    "E-Cell IIT Kharagpur",
    "IIT Kharagpur startup mentorship",
    "venture acceleration",
    "student startups",
    "IIT KGP alumni mentors"
  ],
  openGraph: {
    title: `${sbcConfig.name} | ${sbcConfig.institution}`,
    description: `${sbcConfig.aboutSection.officialDescription}`,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${bebas.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#FAF4E8] text-[#141010] antialiased selection:bg-[#8B2635] selection:text-white flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}

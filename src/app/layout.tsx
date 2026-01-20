import ContactModal from "@/components/contact/contact-modal";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar/nav";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const shareTechMono = Share_Tech_Mono({
  variable: "--font-share-tech-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "TechHertz - Digital Innovation & Web Development Agency",
  description: "Transform your ideas into stunning digital experiences. Expert web development, UI/UX design, and digital solutions that drive growth.",
  keywords: ["web development", "UI/UX design", "digital agency", "software development", "brand strategy"],
  authors: [{ name: "TechHertz" }],
  openGraph: {
    title: "TechHertz - Digital Innovation & Web Development Agency",
    description: "Transform your ideas into stunning digital experiences. Expert web development, UI/UX design, and digital solutions that drive growth.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechHertz - Digital Innovation & Web Development Agency",
    description: "Transform your ideas into stunning digital experiences.",
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
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} ${shareTechMono.variable} antialiased`}
      >
        <Navbar/>
        <ContactModal />
        {children}
        <Footer />
      </body>
    </html>
  );
}

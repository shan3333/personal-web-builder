import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shan Liu | Software Engineer & Builder",
  description: "Software Engineer and builder based in the Netherlands, specializing in backend systems, APIs, automation, performance engineering, and AI-assisted product development.",
  keywords: ["Shan Liu", "Software Engineer", "Backend Engineer", "Software Engineer Netherlands", "Remote Software Engineer", "Symfony Engineer", "Automation Engineer", "AI-assisted Development"],
  openGraph: { title: "Shan Liu | Software Engineer & Builder", description: "Reliable backend systems, automation tools, and small products for real-world problems.", type: "website", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Shan Liu — Software Engineer & Builder" }] },
  twitter: { card: "summary_large_image", title: "Shan Liu | Software Engineer & Builder", description: "Reliable backend systems, automation tools, and small products for real-world problems.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geist.variable} ${mono.variable}`}>{children}</body></html>;
}

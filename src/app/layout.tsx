import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Jashanpreet Singh | Software Developer & DevOps",
  description:
    "Portfolio of Jashanpreet Singh — DevOps and Backend Engineer building containerized microservices in Go, Docker, AWS, Jenkins, Terraform, and active Spotify music artist.",
  keywords: [
    "Jashanpreet Singh",
    "Software Developer",
    "DevOps",
    "Backend Developer",
    "Portfolio",
    "Go",
    "Docker",
    "AWS",
    "Spotify Artist",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth" suppressHydrationWarning>
      <body
        className="min-h-full flex flex-col bg-cream text-charcoal antialiased"
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}

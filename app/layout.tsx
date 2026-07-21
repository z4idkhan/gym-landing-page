import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: `${siteConfig.gymName} - Premium Fitness Center in Gorakhpur`,
  description: `${siteConfig.gymName} offers state-of-the-art facilities, expert trainers, and diverse fitness classes to help you achieve your health goals. Join our fitness community today!`,
  icons: [
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
  openGraph: {
    title: `${siteConfig.gymName} - Premium Fitness Center`,
    description: `${siteConfig.gymName} offers state-of-the-art facilities, expert trainers, and diverse fitness classes to help you achieve your health goals. Join our fitness community today!`,
    url: 'https://powerhousefitness.gorakhpur.in', // Update with actual domain
    images: [
      {
        url: 'https://powerhousefitness.gorakhpur.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${siteConfig.gymName} Logo`,
      },
    ],
    siteName: siteConfig.gymName,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.gymName} - Premium Fitness Center`,
    description: `${siteConfig.gymName} offers state-of-the-art facilities, expert trainers, and diverse fitness classes to help you achieve your health goals. Join our fitness community today!`,
    images: ['https://powerhousefitness.gorakhpur.in/twitter-card.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Header */}
        <Header config={siteConfig} />
        {/* Page content */}
        {children}
        {/* Footer */}
        <Footer config={siteConfig} />
      </body>
    </html>
  );
}
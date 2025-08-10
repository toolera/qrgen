import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Free QR Code Generator - Create QR Codes Instantly Online",
  description: "Generate QR codes for free! Create QR codes for URLs, text, emails, phone numbers, and more. Fast, secure, and mobile-friendly QR code generator with instant download.",
  keywords: "QR code generator, free QR code, generate QR code online, QR code maker, barcode generator, URL to QR code",
  authors: [{ name: "QR Generator Team" }],
  creator: "QR Generator",
  publisher: "QR Generator",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://qrgen.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Free QR Code Generator - Create QR Codes Instantly",
    description: "Generate QR codes for free! Create QR codes for URLs, text, emails, and more. Fast, secure, and mobile-friendly.",
    url: '/',
    siteName: 'QR Code Generator',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Free QR Code Generator',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Free QR Code Generator - Create QR Codes Instantly",
    description: "Generate QR codes for free! Create QR codes for URLs, text, emails, and more.",
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Free QR Code Generator",
    "description": "Generate QR codes for free! Create QR codes for URLs, text, emails, phone numbers, and more.",
    "url": "https://qrgen.vercel.app",
    "applicationCategory": "Utility",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Generate QR codes instantly",
      "Support for URLs, text, emails",
      "High quality PNG download",
      "Mobile responsive design",
      "No registration required"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

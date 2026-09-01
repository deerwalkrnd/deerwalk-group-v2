import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, Manrope, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://deerwalkgroup.com"),
  title: {
    default: "Deerwalk Group",
    template: "%s | Deerwalk Group",
  },
  description:
    "Deerwalk Group is a Nepali family of institutions in education, technology, and community development, united by a mission to grow capable future leaders.",
  applicationName: "Deerwalk Group",
  keywords: [
    "Deerwalk Group",
    "Nepal education",
    "schools in Nepal",
    "technology institute Nepal",
    "community development Nepal",
    "Deerwalk foundation",
    "Deerwalk learning center",
  ],
  authors: [{ name: "Deerwalk Group" }],
  creator: "Deerwalk Group",
  publisher: "Deerwalk Group",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://deerwalkgroup.com/",
    title: "Deerwalk Group",
    description:
      "A Nepali family of institutions in education, technology, and community development.",
    siteName: "Deerwalk Group",
    images: [
      {
        url: "/images/dwg/hero.webp",
        width: 1200,
        height: 630,
        alt: "Deerwalk Group institutions and community",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deerwalk Group",
    description: "A Nepali family of institutions",
    images: ["/images/dwg/hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f5288",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} ${roboto.variable} ${fraunces.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

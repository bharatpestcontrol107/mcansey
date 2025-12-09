
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter } from 'next/font/google'

import USNavbar from "./components/USNavbar";
import USFooter from "./components/USFooter";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "MCANSEY IT Services & Consulting Pvt Ltd",
  description: "MCANSEY IT Services is a leading software development company that's empowering 100+ organizations across the globe with innovative solutions.",
  keywords: "MCANSEY, Mcansey, MCANSEY IT Services, Mcansey company,  Mcansey IT consulting company, Mcansey Software Development Company, Mcansey Mobile App Development Company, Mcansey Website Development Company, It service company, it consulting company",
  alternates: {
    canonical: 'https://www.mcansey.com',
    languages: {
      'en-US': 'https://www.mcansey.com',
    },
  },
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    type: 'article',
    locale: 'en_US',
    url: 'https://www.mcansey.com',
    siteName: 'MCANSEY IT Services & Consulting Pvt LTD',
    images: 'https://www.mcansey.com/_next/static/media/Mcansey%20100X100.c2291536.svg',
  },
  icons: [
    { rel: "icon", url: "https://www.mcansey.com/_next/static/media/Mcansey%20100X100.c2291536.svg" },
    { rel: "apple-touch-icon", url: 'https://www.mcansey.com/_next/static/media/Mcansey%20100X100.c2291536.svg' }
  ],
  other: {
    'geo.country': 'India',
    'geo.state': 'Maharashtra',
    'geo.placename': 'Mcansey',
    'geo.position': '19.286494085066657, 72.88160862883541',
    'geo.region': 'Mumbai',
    'google-site-verification': '3oCiYOOuCAKrcnIig2rwlsdhlcHG0-inkEO_qMd1PPo',
  },
};

export default function UsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <USNavbar /> {/* US-specific Navbar */}
      <main>{children}</main>
      
    </>
  );
}


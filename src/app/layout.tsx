
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter } from 'next/font/google'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ShopifyNavbar from "./components/ShopifyPage/ShopifyNavbar";

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
  keywords: "MCANSEY, Mcansey, MCANSEY IT Services, Mcansey company, Mcansey IT consulting company, Mcansey Software Development Company, Mcansey Mobile App Development Company, Mcansey Website Development Company, It service company, it consulting company",
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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MCANSEY IT Services & Consulting Pvt Ltd",
  url: "https://www.mcansey.com",
  logo: "https://www.mcansey.com/_next/static/media/Mcansey%20100X100.c2291536.svg",
  sameAs: [
    "https://www.facebook.com/your-facebook-page",
    "https://twitter.com/your-twitter-handle",
    "https://www.linkedin.com/company/your-linkedin-page",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "MCANSEY IT Services & Consulting Pvt Ltd",
  url: "https://www.mcansey.com",
  telephone: "+91-123-456-7890",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Your Street Address",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400001",
    addressCountry: "India",
  },
  openingHours: "Mo-Fr 09:00-18:00",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "MCANSEY IT Services",
  url: "https://www.mcansey.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.mcansey.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth focus:scroll-auto">
     <head>
  <meta name="google-site-verification" content="3oCiYOOuCAKrcnIig2rwlsdhlcHG0-inkEO_qMd1PPo" />
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-4SRY7770N2"></script>
  <script
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-4SRY7770N2', {
          page_path: window.location.pathname,
        });

        const disableInspect = () => {
          document.addEventListener('contextmenu', (e) => e.preventDefault());
          document.addEventListener('keydown', (e) => {
            if (
              e.key === 'F12' ||
              (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
              (e.ctrlKey && e.key === 'U')
            ) {
              e.preventDefault();
            }
          });
        };

        // Execute immediately for early loading
        disableInspect();

        // Reapply on DOM content load
        document.addEventListener('DOMContentLoaded', disableInspect);
      `,
    }}
  />
  <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16643037203"></script>
  <script
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-16643037203');
      `,
    }}
  />

<script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
</head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}
      >
     
        {children}
       
      </body>
    </html>
  );
}


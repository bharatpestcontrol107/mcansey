import { Metadata } from 'next';
import BlogPage from '../components/Blogs/BlogPost';
type Props = {
  params: { slug: string };
};


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Resources | MCANSEY ",
    description: "Resources to help you grow your business. Learn about digital solutions, web design, innovation, digital marketing, strategic development, cloud technology, and more.",
    keywords: "mcansey resources, mcansey blogs, mcansey articles, mcansey digital solutions, mcansey web design, mcansey innovation,",
    alternates: {
      canonical: 'https://www.mcansey.com/resources',
      languages: {
        'en-IN': 'https://www.mcansey.com/resources',
      },
    },
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    openGraph: {
      type: 'article',
      locale: 'en_IN',
      url: 'https://www.mcansey.com/resources',
      siteName: 'MCANSEY',
      images: 'https://www.mcansey.com/_next/static/media/Mcansey%20100X100.c2291536.svg',
    },
    icons: [
      { rel: "icon", url: "https://www.mcansey.com/_next/static/media/Mcansey%20100X100.c2291536.svg" },
      { rel: "apple-touch-icon", url: 'https://www.mcansey.com/_next/static/media/Mcansey%20100X100.c2291536.svg' }
    ],
    other: {
      'geo.country': 'India',
      'geo.state': 'Maharashtra',
      'geo.placename': 'MCANSEY',
      'geo.position': '19.286494085066657, 72.88160862883541',
      'geo.region': 'Mumbai',
      'google-site-verification': '3oCiYOOuCAKrcnIig2rwlsdhlcHG0-inkEO_qMd1PPo',
    },
  };
}


const Page = async ({ params }: Props) => {

  return <BlogPage  />;
};
export default Page; 
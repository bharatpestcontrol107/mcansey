import { MetadataRoute } from 'next';
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.mcansey.com";

  export const revalidate = 60;
  export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const staticPaths = [
      "/",
      "/about/",
      "/website-design-company/",
      "/mobile-app-development-company/",
      "/cloud-application-development/",
      "/digital-marketing-company/",
      "/software-development-company/",
      "/data-analytics-company/",
      "/product-ideation-and-conceptulization/",
      "/cyber-security-services/",
      "/it-consulting-services-company/",
      "/portfolio/",
      "/resources/",
      "/contact-us/",
      "/culture/",
      "/career/",
      "/leadership/",
      "/culture/",
      "/healthcare-software-development-services/",
      "/software-development-services/",
      "/it-solutions-for-public-sector/",
      "/industrial-and-manufacturing-development-services/",
      "/banking-it-services/",
      "/travel-application-development-services/",
      "/education-software-development-services/",
      "/media-and-entertainment-software-solutions/",
      "/real-estate-software-development-services/",
      "/fintech-software-development/",

    ];

    return staticPaths.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date().toISOString(),
      priority: path === "/" ? 1 : 0.6,
    }));
  }

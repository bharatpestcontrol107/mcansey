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
    "/jobs/aem-architect/",
    "/jobs/aem-developer/",
    "/jobs/it-field-sales-executive-job/",
    "/jobs/it-sales-executive-job/",
    "/jobs/nodejs-developer-job/",
    "/jobs/php-laravel-job/",
    "/jobs/react-native-developer-job/",
    "/jobs/reactjs-developer-job/",
    "/jobs/seo-job/",
    "/jobs/ui-ux-designer-job/",
    "/it-staff-augmentation-job/",
    "/aem-development-company-job/",
    "/aem-outsourcing-company-job/",
    "/resources/",
  ];

  return staticPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString(),
    priority: path === "/" ? 1 : 0.6,
  }));
}

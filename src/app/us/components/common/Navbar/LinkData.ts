type LinkOption = {
  name: string;
  href: string;
  subOptions?: LinkOption[];
};
type LinkData = {
  name: string;
  href: string;
  modal?: string;
  isButton?: boolean;
  options: LinkOption[];
};
export const links: LinkData[] = [
  {
    name: 'Discover MCANSEY',
    href: '',
    modal: 'about',
    options: [
      { name: 'About Mcansey ', href: '/us/about', subOptions: [] },
      { name: 'Our Culture', href: '/us/culture', subOptions: [] },
      {
        name: 'Careers', href: '/us/career', subOptions: [

        ]
      },
      { name: 'Leadership Team', href: '/us/leadership', subOptions: [] },
      { name: 'Download Brochures', href: '/us/', subOptions: [] },
    ]
  },
  {
    name: 'Services',
    href: '',
    modal: 'services',
    options: [
      {
        name: 'Product Ideation & Conceptualization', href: '/us/product-ideation-and-conceptulization/', subOptions: [
          { name: 'Ideation & Feasibility Study', href: '/us/product-ideation-and-conceptulization/' },
          { name: 'Prototyping & MVP Development', href: '/us/product-ideation-and-conceptulization' },
          { name: 'Product Lifecycle Management', href: '/us/product-ideation-and-conceptulization' },
        ]
      },
      {
        name: 'Website Design & Development', href: '/us/website-design-company', subOptions: [
          { name: 'Custom web development', href: '/us/website-design-company' },
          { name: 'CMS Website Solutions', href: '/us/website-design-company' },
          { name: 'eCommerce Development', href: '/us/website-design-company' },
          { name: 'Responsive & Adaptive Design', href: '/us/website-design-company' },
          { name: 'Progressive Web Apps (PWA)', href: '/us/website-design-company' },
          { name: 'Website Maintenance & Support', href: '/us/website-design-company' },
          { name: 'Website Redesign & Revamp', href: '/us/website-design-company' },
          { name: 'Performance optimization', href: '/us/website-design-company' },
        ]
      },
      {
        name: 'Mobile App Development', href: '/us/mobile-app-development-company', subOptions: [
          { name: 'iOS App Development', href: '/us/mobile-app-development-company' },
          { name: 'Android App Development', href: '/us/mobile-app-development-company' },
          { name: 'Cross-Platform Apps', href: '/us/mobile-app-development-company' },
          { name: 'Progressive Web Apps (PWA)', href: '/us/mobile-app-development-company' },
          { name: 'App Maintenance & Updates', href: '/us/mobile-app-development-company' },
          { name: 'Mobile App UI/UX Design', href: '/us/mobile-app-development-company' },
          { name: 'App Store Optimization (ASO)', href: '/us/mobile-app-development-company' },
        ]
      },
      { name: 'Cloud and DevOps', href: '/us/cloud-application-development', subOptions: [] },
      { name: 'Data & Analytics', href: '/us/data-analytics-company/', subOptions: [] },
      { name: 'Cybersecurity', href: '/us/cyber-security-services/', subOptions: [] },
      {
        name: 'Software Development', href: 'us/software-development', subOptions: [
          { name: 'Enterprise Software Development', href: 'us/software-development' },
          { name: 'SaaS Development', href: 'us/software-development' },
          { name: 'Custom CRM Development', href: 'us/software-development' },
          { name: 'ERP Solutions', href: 'us/software-development' },
          { name: 'API Development & Integration', href: 'us/software-development' },
          { name: 'Legacy Software Modernization', href: 'us/software-development' },
          { name: 'AI & Machine Learning Solutions', href: 'us/software-development' },
          { name: 'Blockchain Development', href: 'us/software-development' },
          { name: 'Quality Assurance & Testing', href: 'us/software-development' },
        ]
      },
      { name: 'IT Consulting', href: '/us/it-consulting', subOptions: [] },
      { name: 'Digital Marketing', href: '/us/digital-marketing-company', subOptions: [] },
    ]
  },
  {
    name: 'Industries', href: '', modal: 'industries', options: [
      { name: 'Healthcare ', href: '/us/healthcare-software-development-services', subOptions: [] },
      { name: 'Fintech', href: '/us/us/fintech-software-development', subOptions: [] },
      { name: 'Public Sector', href: '/us/it-solutions-for-public-sector', subOptions: [] },
      { name: 'Industrial & Manufacturing', href: '/us/industrial-and-manufacturing-development-services', subOptions: [] },
      { name: 'Real Estate', href: '/us/real-estate-software-development-services', subOptions: [] },
      { name: 'Software & Technology', href: '/us/software-development-services', subOptions: [] },
      { name: 'Media & Entertainment', href: '/us/media-and-entertainment-software-solutions', subOptions: [] },
      { name: 'Banking', href: '/us/banking-it-services', subOptions: [] },
      { name: 'Travel & Transportation', href: '/us/travel-application-development-services', subOptions: [] },
      { name: 'Education', href: '/education-software-development-services', subOptions: [] },
    ]
  },
  { name: 'Portfolio', href: '/us/portfolio', modal: '', options: [] },
  { name: 'Resources', href: '/us/resources', modal: '', options: [] },
  { name: 'Contact Us', href: '/us/contact-us', isButton: true, options: [] },
];
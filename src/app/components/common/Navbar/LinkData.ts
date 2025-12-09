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
      { name: 'About Mcansey ', href: '/about', subOptions: [] },
      { name: 'Our Culture', href: '/culture', subOptions: [] },
      {
        name: 'Careers', href: '/career', subOptions: [

        ]
      },
      { name: 'Leadership Team', href: '/leadership', subOptions: [] },
      { name: 'Download Brochures', href: '/', subOptions: [] },
    ]
  },
  {
    name: 'Services',
    href: '',
    modal: 'services',
    options: [
      {
        name: 'Product Ideation & Conceptualization', href: '/product-ideation-and-conceptulization/', subOptions: [
          { name: 'Ideation & Feasibility Study', href: '/product-ideation-and-conceptulization/' },
          { name: 'Prototyping & MVP Development', href: '/product-ideation-and-conceptulization' },
          { name: 'Product Lifecycle Management', href: '/product-ideation-and-conceptulization' },
        ]
      },
      {
        name: 'Website Design & Development', href: '/website-design-company', subOptions: [
          { name: 'Custom web development', href: '/website-design-company' },
          { name: 'CMS Website Solutions', href: '/website-design-company' },
          { name: 'eCommerce Development', href: '/website-design-company' },
          { name: 'Responsive & Adaptive Design', href: '/website-design-company' },
          { name: 'Progressive Web Apps (PWA)', href: '/website-design-company' },
          { name: 'Website Maintenance & Support', href: '/website-design-company' },
          { name: 'Website Redesign & Revamp', href: '/website-design-company' },
          { name: 'Performance optimization', href: '/website-design-company' },
        ]
      },
      {
        name: 'Mobile App Development', href: '/mobile-app-development-company', subOptions: [
          { name: 'iOS App Development', href: '/mobile-app-development-company' },
          { name: 'Android App Development', href: '/mobile-app-development-company' },
          { name: 'Cross-Platform Apps', href: '/mobile-app-development-company' },
          { name: 'Progressive Web Apps (PWA)', href: '/mobile-app-development-company' },
          { name: 'App Maintenance & Updates', href: '/mobile-app-development-company' },
          { name: 'Mobile App UI/UX Design', href: '/mobile-app-development-company' },
          { name: 'App Store Optimization (ASO)', href: '/mobile-app-development-company' },
        ]
      },
      { name: 'Cloud and DevOps', href: '/cloud-application-development', subOptions: [] },
      { name: 'Data & Analytics', href: '/data-analytics-company/', subOptions: [] },
      { name: 'Cybersecurity', href: '/cyber-security-services/', subOptions: [] },
      {
        name: 'Software Development', href: '/software-development', subOptions: [
          { name: 'Enterprise Software Development', href: '/software-development' },
          { name: 'SaaS Development', href: '/software-development' },
          { name: 'Custom CRM Development', href: '/software-development' },
          { name: 'ERP Solutions', href: '/software-development' },
          { name: 'API Development & Integration', href: '/software-development' },
          { name: 'Legacy Software Modernization', href: '/software-development' },
          { name: 'AI & Machine Learning Solutions', href: '/software-development' },
          { name: 'Blockchain Development', href: '/software-development' },
          { name: 'Quality Assurance & Testing', href: '/software-development' },
        ]
      },
      { name: 'IT Consulting', href: '/it-consulting', subOptions: [] },
      { name: 'Digital Marketing', href: '/digital-marketing-company', subOptions: [] },
    ]
  },
  {
    name: 'Industries', href: '', modal: 'industries', options: [
      { name: 'Healthcare ', href: '/healthcare-software-development-services', subOptions: [] },
      { name: 'Fintech', href: '/fintech-software-development', subOptions: [] },
      { name: 'Public Sector', href: '/it-solutions-for-public-sector', subOptions: [] },
      { name: 'Industrial & Manufacturing', href: '/industrial-and-manufacturing-development-services', subOptions: [] },
      { name: 'Real Estate', href: '/real-estate-software-development-services', subOptions: [] },
      { name: 'Software & Technology', href: '/software-development-services', subOptions: [] },
      { name: 'Media & Entertainment', href: '/media-and-entertainment-software-solutions', subOptions: [] },
      { name: 'Banking', href: '/banking-it-services', subOptions: [] },
      { name: 'Travel & Transportation', href: '/travel-application-development-services', subOptions: [] },
      { name: 'Education', href: '/education-software-development-services', subOptions: [] },
    ]
  },
  { name: 'Portfolio', href: '/portfolio', modal: '', options: [] },
  { name: 'Resources', href: '/resources', modal: '', options: [] },
  { name: 'Contact Us', href: '/contact-us', isButton: true, options: [] },
];
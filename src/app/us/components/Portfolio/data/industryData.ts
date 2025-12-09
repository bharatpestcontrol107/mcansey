type Industry = 'All Industries' | 'Industrial & Manufacturing' | 'Real Estate' | 'Education' | 'Media & Entertainment'| 'Finance & Accounting' | 'Staffing & Recruitment' | 'Travel & Transportation';

export const industryCards: Record<Industry, { id: number; title: string; description: string; imageUrl: string; link:string }[]> = {
  'All Industries': [
   
  ],
  'Industrial & Manufacturing': [
    { id: 3, title: 'Industrial & Manufacturing Project 1', description: 'E-commerce platform for digital products', imageUrl: '/Home/OurWork/mcansey-manufacturing-industrial-website-design-company.webp', link:'/mcansey-portfolio' },
    { id: 4, title: 'Industrial & Manufacturing Project 2', description: 'Online marketplace development', imageUrl: '/portfolio/images/mcansey-manufacturing-website-design-company.webp', link:'/mcansey-portfolio' },
    { id: 4, title: 'Industrial & Manufacturing Project 3', description: 'Online marketplace development', imageUrl: '/portfolio/images/mcansey-solar-website-design-company.webp', link:'/mcansey-portfolio' },
    { id: 12, title: 'Industrial & Manufacturing Project 4', description: 'Online marketplace development', imageUrl: '/portfolio/images/mcansey-pharma-website-design-company.webp', link:'/mcansey-portfolio' },
    { id: 13, title: 'Industrial & Manufacturing Project 5', description: 'Online marketplace development', imageUrl: '/portfolio/images/mcansey-battery-manufacturing-website-design-company.webp', link:'/mcansey-portfolio' },
    { id: 14, title: 'Industrial & Manufacturing Project 6', description: 'Online marketplace development', imageUrl: '/portfolio/images/mcansey-automotive-website-design-company.webp', link:'/mcansey-portfolio' },
  ],
  'Real Estate': [
    { id: 5, title: 'Real Estate Project 1', description: 'Platform for financial services', imageUrl: '/portfolio/images/mcansey-real-estate-website-design-company.webp', link:'/mcansey-portfolio' },
    { id: 6, title: 'Real Estate Project 2', description: 'Financial transaction management system', imageUrl: '/portfolio/images/mcansey-real-estate-design-company.png', link:'/mcansey-portfolio' },
    { id: 15, title: 'Real Estate Project 3', description: 'Real estate transaction management system', imageUrl: '/portfolio/images/real-estate-website-company.webp', link:'/mcansey-portfolio' },
    { id: 16, title: 'Real Estate Project 4', description: 'Real estate transaction management system', imageUrl: '/portfolio/images/mcansey-real-estate-company-4.webp', link:'/mcansey-portfolio' },
    { id: 17, title: 'Real Estate Project 5', description: 'Real estate transaction management system', imageUrl: '/portfolio/images/real-estate-website-design-company5.webp', link:'/mcansey-portfolio' },
    { id: 18, title: 'Real Estate Project 6', description: 'Real estate transaction management system', imageUrl: '/portfolio/images/real-estate-website-design-company7.webp', link:'/mcansey-portfolio' },
  ],
  'Education': [
    { id: 8, title: 'Education Project 1', description: 'Online marketplace development', imageUrl: '/Home/OurWork/school-colleges-institute-website-design-company.webp', link:'/mcansey-portfolio' },
    { id: 7, title: 'Education Project 2', description: 'E-commerce platform for digital products', imageUrl: '/portfolio/images/mcansey-education-website-design-company.webp', link:'/mcansey-portfolio' },
    { id: 11, title: 'Education Project 3', description: 'Online marketplace development', imageUrl: '/portfolio/images/mcansey-play-school-website-design-company.webp', link:'/mcansey-portfolio' },
   
  ],
  'Media & Entertainment': [
    { id: 9, title: 'Media & Entertainment 1', description: 'Platform for financial services', imageUrl: '/Home/OurWork/mcansey-entertainment-website-design-company.webp', link:'/mcansey-portfolio' },
    { id: 10, title: 'Media & Entertainment 2', description: 'Media & Entertainment', imageUrl: '/portfolio/images/mcansey-media-&-entertainment-company.webp', link:'/mcansey-portfolio' },
    { id: 17, title: 'Media & Entertainment 3', description: 'Media & Entertainment', imageUrl: '/portfolio/images/mcansey-media-&-entertainment-company2.webp', link:'/mcansey-portfolio' },
    { id: 18, title: 'Media & Entertainment 4', description: 'Media & Entertainment', imageUrl: '/portfolio/images/mcansey-media-&-entertainment-company3.webp', link:'/mcansey-portfolio' },
    { id: 19, title: 'Media & Entertainment 5', description: 'Media & Entertainment', imageUrl: '/portfolio/images/mcansey-media-&-entertainment-company4.webp', link:'/mcansey-portfolio' },
    // { id: 10, title: 'Media & Entertainment 6', description: 'Financial transaction management system', imageUrl: '/portfolio/Cover-Image-25.webp', link:'/mcansey-portfolio' },
  ],
  'Finance & Accounting': [
    { id: 9, title: 'finance & accounting 1', description: 'Platform for financial services 1', imageUrl: '/portfolio/images/mcansey-finance-website-company-1.webp', link:'/mcansey-portfolio' },
    { id: 10, title: 'finance & accounting 2', description: 'Financial transaction management system', imageUrl: '/portfolio/images/mcansey-finance-website-company-2.webp', link:'/mcansey-portfolio' },
    { id: 10, title: 'finance & accounting 3', description: 'Financial transaction management system', imageUrl: '/portfolio/images/mcansey-fintech-website-company.webp', link:'/mcansey-portfolio' },
  ],
  'Staffing & Recruitment': [
    { id: 20, title: 'Staffing & Recuirting 1', description: 'Platform for financial services', imageUrl: '/portfolio/images/mcansey-staffing-recruitment-company-1.webp', link:'/mcansey-portfolio' },
    { id: 21, title: 'Staffing & Recuirting 2', description: 'Financial transaction management system', imageUrl: '/portfolio/images/mcansey-staffing-recruitment-company-2.webp', link:'/mcansey-portfolio' },
    { id: 22, title: 'Staffing & Recuirting 3', description: 'Platform for financial services', imageUrl: '/portfolio/images/mcansey-staffing-recruitment-company-3.webp', link:'/mcansey-portfolio' },
    { id: 23, title: 'Staffing & Recuirting 4', description: 'Financial transaction management system', imageUrl: '/portfolio/images/mcansey-staffing-recruitment-company-4.webp', link:'/mcansey-portfolio' },
    { id: 24, title: 'Staffing & Recuirting 5', description: 'Platform for financial services', imageUrl: '/portfolio/images/mcansey-staffing-recruitment-company-5.webp', link:'/mcansey-portfolio' },
    { id: 25, title: 'Staffing & Recuirting 6', description: 'Financial transaction management system', imageUrl: '/portfolio/images/mcansey-staffing-recruitment-company-6.webp', link:'/mcansey-portfolio' },

  ],
  'Travel & Transportation': [
    { id: 36, title: 'Travel Project 1', description: 'shipbase-design', imageUrl: '/portfolio/images/mcansey-shipbase-design-company.png', link:'/mcansey-portfolio',  },
    { id: 35, title: 'Travel Project 2', description: 'E-commerce platform for digital products', imageUrl: '/portfolio/images/mcansey-travel-and-transport-2.webp', link:'/mcansey-portfolio' },
    { id: 34, title: 'Travel Project 3', description: 'E-commerce platform for digital products', imageUrl: '/portfolio/images/mcansey-online-delivery-website-design-company.webp', link:'/mcansey-portfolio' },

  ],
};

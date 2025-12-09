
type Expertise = 'All Expertise Types' | 'Website UI_UX' | 'Ecommerce' | 'Mobile App' | 'Software' | 'Digital Marketing';

export const expertiseCards: Record<Expertise, { id: number; title: string; description: string; imageUrl: string, link: string }[]> = {
  'All Expertise Types': [

  ],
  'Website UI_UX': [
    { id: 1, title: 'manufacturing industrial company', description: 'Machine learning model for data predictions', imageUrl: '/Home/OurWork/mcansey-manufacturing-industrial-website-design-company.webp', link: '/mcansey-portfolio' },
    { id: 4, title: 'automative-website-company', description: 'website designs for automative', imageUrl: '/Home/OurWork/mcansey-automotive-website-design-company.webp', link: '/mcansey-portfolio' },
    { id: 2, title: 'interior designing company', description: 'Machine learning model for data predictions', imageUrl: '/Home/OurWork/mcansey-interior designing website design company.png', link: '/mcansey-portfolio' },
    { id: 3, title: 'entertainment website company', description: 'AI platform for predictive analysis', imageUrl: '/Home/OurWork/mcansey-entertainment-website-design-company.webp', link: '/mcansey-portfolio' },
   
  ],
  'Ecommerce': [
    { id: 5, title: 'Ecommerce Project 1', description: ' ecommerce-fashion-and-apparel-website', imageUrl: '/Home/OurWork/online shoping clothes ecommerce website design company.png', link: '/mcansey-portfolio' },
    { id: 6, title: 'Ecommerce Project 2', description: 'ecommerce-online-clothing-fashion-website', imageUrl: '/portfolio/images/home-decor-website-design-company.webp', link: '/mcansey-portfolio' },
    { id: 7, title: 'Ecommerce Project 3', description: 'online beauty products ecommerce website', imageUrl: '/Home/OurWork/mcansey-apparels-website-design-company.png', link: '/mcansey-portfolio' },
    { id: 26, title: 'Ecommerce Project 4', description: 'online machine selling ecommerce website', imageUrl: '/portfolio/images/mcansey-ecommerce-website-design-company.webp', link: '/mcansey-portfolio' },
    { id: 8, title: 'Ecommerce Project 5', description: 'online machine selling ecommerce website', imageUrl: '/portfolio/images/mcansey-decor-website-design-company.webp', link: '/mcansey-portfolio' },
    { id: 22, title: 'Ecommerce Project 6', description: ' online-cake-shop-ecommerce-website', imageUrl: '/portfolio/images/ayurvedic-products-website-design-company.webp', link: '/mcansey-portfolio' },
    { id: 27, title: 'Ecommerce Project 7', description: 'online ecommerce website-design-', imageUrl: '/portfolio/images/mcansey-ecommerce-website-company-5.webp', link: '/mcansey-portfolio' },
    { id: 23, title: 'Ecommerce Project 8', description: 'spiritual-products-ecommerce-website', imageUrl: '/portfolio/images/mcansey-handcrafted-products-website-design-company.webp', link: '/mcansey-portfolio' },
    { id: 24, title: 'Ecommerce Project 9', description: 'online ecommerce website-design-', imageUrl: '/Home/OurWork/mcansey ecommerce-online-clothing-fashion-website-design-company.png', link: '/mcansey-portfolio' },
    { id: 25, title: 'Ecommerce Project 10', description: 'online shoping clothes ecommerce website', imageUrl: '/portfolio/images/mcansey-jwellery-website-design-company.webp', link: '/mcansey-portfolio' },
  ],
  'Mobile App': [
    { id: 9, title: 'Mobile App Project 1', description: 'chat-app-development', imageUrl: '/Home/OurWork/MobileApp/mcansey-chat-app-development-company.png', link: '/mcansey-portfolio' },
    { id: 10, title: 'Mobile App Project 2', description: 'real-estate-app', imageUrl: '/Home/OurWork/MobileApp/mcansey-real-estate-app-development-company (1).png', link: '/mcansey-portfolio' },
    { id: 11, title: 'Mobile App Project 3', description: 'service-booking-app', imageUrl: '/Home/OurWork/MobileApp/mcansey-service-booking-app-development-company.png', link: '/mcansey-portfolio' },
    { id: 12, title: 'Mobile App Project 4', description: 'dental-mobile-app', imageUrl: '/Home/OurWork/MobileApp/mcansey-dental-mobile-app-development-company.png', link: '/mcansey-portfolio' },
    { id: 26, title: 'Mobile App Project 5', description: 'restaurant-mobile-app', imageUrl: '/Home/OurWork/MobileApp/mcansey-restaurant-mobile-app-development-company.png', link: '/mcansey-portfolio' },
  ],
  'Software': [
    { id: 13, title: 'Software project 1', description: 'AI platform for predictive analysis', imageUrl: '/portfolio/images/mcansey-software-company.webp', link: '/mcansey-portfolio' },
    { id: 14, title: 'Software project 2', description: 'crm-development-website', imageUrl: '/portfolio/images/mcansey-software-company1.webp', link: '/mcansey-portfolio' },
    { id: 15, title: 'Software project 3', description: 'erp-development-website', imageUrl: '/portfolio/images/mcansey-software-company-3.webp', link: '/mcansey-portfolio' },
    { id: 16, title: 'Software project 4', description: 'education-software-website', imageUrl: '/portfolio/images/mcansey-software-company-4.webp', link: '/mcansey-portfolio' },
    { id: 17, title: 'Software project 5', description: 'fintech-software-development-website', imageUrl: '/portfolio/images/mcansey-online-delivery-website-design-company.webp', link: '/mcansey-portfolio' },
  ],
  'Digital Marketing': [
    { id: 18, title: 'Digital Marketing project 1', description: ' Finance & Accounting website for Digital Marketing', imageUrl: '/Home/OurWork/Mcansey Finance & Accounting website design company.png', link: '/mcansey-portfolio' },
    { id: 19, title: 'Digital Marketing project 2', description: 'healthcare training institute website with digital marketing', imageUrl: '/Home/OurWork/mcansey healthcare training institute website design company.png', link: '/mcansey-portfolio' },
    { id: 20, title: 'Digital Marketing project 3', description: 'event-speakers-website with digital marketing', imageUrl: '/Home/OurWork/mcansey-event-speakers-website-design-company.png', link: '/mcansey-portfolio' },
    { id: 21, title: 'Digital Marketing project 4', description: 'hospitality-services-website with digital marketing', imageUrl: '/Home/OurWork/mcansey-hospitality-services-website-design-company.png', link: '/mcansey-portfolio' },
  ],
};

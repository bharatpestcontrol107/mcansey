// types.ts
export interface Card {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
  }
  
export type Industry = 'All Industries' | 'Industrial & Manufacturing' | 'Real Estate' | 'Education' | 'Media & Entertainment' | 'Finance & Accounting' | 'Staffing & Recruitment' | 'Travel & Transportation';
export type Expertise = 'All Expertise Types' | 'Website UI_UX' | 'Ecommerce' | 'Mobile App' | 'Software' | 'Digital Marketing';
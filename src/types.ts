export interface Product {
  id: string;
  name: string;
  chineseName?: string;
  brand: string;
  origin: string;
  category: 'tire-changer' | 'balancer' | 'aligner' | 'lift' | 'maintenance';
  image: string;
  description: string;
  detailedSpecs: Record<string, string>;
  bestFor: string;
  certifications?: string[];
  features?: string[];
}

export interface Course {
  id: string;
  title: string;
  chineseTitle: string;
  duration: string;
  audience: string;
  level: 'Basic' | 'Intermediate' | 'Advanced';
  description: string;
  syllabus: string[];
  upcomingDates: string[];
  capacity: number;
  registeredCount: number;
}

export interface MaintenanceItem {
  id: string;
  name: string;
  chineseName: string;
  brand: string;
  category: 'oils' | 'pumps' | 'consumables' | 'tools';
  packSize: string;
  description: string;
  specs: Record<string, string>;
  image: string;
}

export interface QuoteRequest {
  businessName: string;
  contactPerson: string;
  email: string;
  phone: string;
  selectedProducts: string[];
  workshopSize: 'small' | 'medium' | 'large';
  powerSupply: '220V Single Phase' | '380V Three Phase';
  notes?: string;
}

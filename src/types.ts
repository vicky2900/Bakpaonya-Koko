export type BaoCategory = 'all' | 'savory' | 'sweet' | 'cheese' | 'spicy';

export interface BaoProduct {
  id: string;
  name: string;
  badge: {
    text: string;
    type: 'best' | 'viral' | 'kids' | 'tradisi' | 'pedas' | 'nusantara' | 'special';
  };
  price: number;
  priceFormatted: string;
  description: string;
  image: string;
  category: 'savory' | 'sweet' | 'cheese' | 'spicy';
  tags: string[];
  features?: string[];
  fillingRatio?: string;
  eggYolk?: boolean;
}

export interface Testimonial {
  id: string;
  rating: number;
  text: string;
  name: string;
  role: string;
  initials: string;
}

export interface Outlet {
  id: string;
  name: string;
  tagline: string;
  address: string;
  hours: string;
  phone: string;
  whatsapp: string;
  mapsUrl: string;
  status: 'Buka Sekarang' | 'Tutup';
}

export interface CartItem {
  product: BaoProduct;
  quantity: number;
}

// Service Type
export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
}

// Brand Type
export interface Brand {
  name: string;
  image: string;
}

// Navigation Item Type
export interface NavItem {
  href: string;
  label: string;
}

// Company Address Type
export interface Address {
  street: string;
  postalCode: string;
  city: string;
  country: string;
}

// Company Contact Type
export interface Contact {
  email: string;
  phone: string;
  orgNr: string;
}

// Opening Hours Type
export interface OpeningHours {
  weekdays: string;
  weekend: string;
}

// Company Info Type
export interface CompanyInfo {
  name: string;
  fullName: string;
  owner: string;
  founder: string;
  foundedYear: string;
  address: Address;
  contact: Contact;
  openingHours: OpeningHours;
}

// Banner Props
export interface BannerProps {
  title: string;
  subtitle?: string;
  variant?: 'brown' | 'green' | 'white';
  className?: string;
  children?: React.ReactNode;
}

// Service Card Props
export interface ServiceCardProps {
  service: Service;
  showLink?: boolean;
  linkHref?: string;
  linkText?: string;
}

// Category Card Props
export interface CategoryCardProps {
  category: string;
  brandName?: string;
}


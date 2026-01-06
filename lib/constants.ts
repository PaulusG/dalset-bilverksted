// Company Information
export const COMPANY = {
  name: 'DALSET BILVERKSTED',
  fullName: 'DALSET BILVERKSTED Ingebrigt Dalset',
  owner: 'Ingebrigt Dalset',
  founder: 'Ingebrigt Dalset sen.',
  foundedYear: '1963',
  address: {
    street: 'Dalsetvegen 22',
    postalCode: '6350',
    city: 'Eidsbygda',
    country: 'NO',
  },
  contact: {
    email: 'post@dalsetbilverksted.no',
    phone: '98658834',
    orgNr: '959 662 010',
  },
  openingHours: {
    weekdays: '08:00 - 16:00',
    weekend: 'Stengt',
  },
} as const;

// Navigation Items
export const NAV_ITEMS = [
  { href: '/', label: 'Forsiden' },
  { href: '/kontakt', label: 'Kontakt' },
  { href: '/tjenester', label: 'Tjenester' },
  { href: '/salgsside', label: 'Salgsside' },
  { href: '/historie', label: 'Historie' },
] as const;

// Services
export const SERVICES = [
  {
    id: 'landbruksmekanikk',
    title: 'Landbruksmekanikk og sveis',
    subtitle: 'For traktor og redskapreparasjon',
    description: 'Vi tilbyr profesjonell reparasjon og vedlikehold av traktorer og jordbruksredskap. Våre mekanikere har lang erfaring med alle typer landbruksmaskiner.',
    image: 'https://images.unsplash.com/photo-1631460257929-afc8b8c7ae28?w=600&h=400&fit=crop',
    imageAlt: 'Landbruksmekanikk og sveis',
  },
  {
    id: 'servicepunkt',
    title: 'Servicepunkt',
    subtitle: 'For Orkel og Lilleseth kramp',
    description: 'Vi er autorisert servicepunkt for Orkel og Lilleseth kramp. Vi kan utføre service, reparasjoner og leverer reservedeler for disse merkene.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop',
    imageAlt: 'Servicepunkt',
  },
  {
    id: 'liftutleie',
    title: 'Liftutleie',
    subtitle: 'Profesjonelle løftere til utleie',
    description: 'Vi tilbyr utleie av løftere for ditt behov. Kontakt oss for å høre om tilgjengelighet og priser.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
    imageAlt: 'Liftutleie',
  },
] as const;

// Product Categories
export const CATEGORIES = [
  'Forbruksvarer',
  'Hydraulikk',
  'Slangepresser',
  'Dekk',
  'Batteri',
  'Kjetting',
  'Olje',
] as const;

// Brands
export const BRANDS = [
  {
    name: 'Orkel',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop',
  },
  {
    name: 'Dutz',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=600&fit=crop',
  },
  {
    name: 'Zetor',
    image: 'https://images.unsplash.com/photo-1631460257929-afc8b8c7ae28?w=800&h=600&fit=crop',
  },
] as const;

// Stock Images
export const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&h=600&fit=crop',
  mapPlaceholder: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=600&fit=crop',
  history: {
    section1: 'https://images.unsplash.com/photo-1631460257929-afc8b8c7ae28?w=800&h=600&fit=crop',
    section2: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop',
    section3: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
  },
} as const;

// Company History Text
export const HISTORY_TEXT = {
  short: 'Ingebr. Dalset Bilverksted startet 1963 av Ingebrigt Dalset sen. og drives som et familiefirma. Vi har over 40 års erfaring med Zetor traktorer.',
  tagline: 'Over 40 års erfaring med traktorreparasjon',
} as const;


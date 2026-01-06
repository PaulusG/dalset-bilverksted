import { COMPANY, BRANDS, CATEGORIES } from './constants';

// LocalBusiness Schema (for homepage)
export function getLocalBusinessSchema(url?: string, imageUrl?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: COMPANY.fullName,
    image: imageUrl || '',
    '@id': url || '',
    url: url || '',
    telephone: COMPANY.contact.phone,
    email: COMPANY.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY.address.street,
      addressLocality: COMPANY.address.city,
      postalCode: COMPANY.address.postalCode,
      addressCountry: COMPANY.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '',
      longitude: '',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '16:00',
    },
    priceRange: '$$',
    areaServed: {
      '@type': 'Country',
      name: 'Norway',
    },
  };
}

// Service Schema (for tjenester page)
export function getServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Traktorreparasjon og Landbruksmekanikk',
    provider: {
      '@type': 'LocalBusiness',
      name: COMPANY.fullName,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Norway',
    },
  };
}

// ContactPage Schema (for kontakt page)
export function getContactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: COMPANY.fullName,
      address: {
        '@type': 'PostalAddress',
        streetAddress: COMPANY.address.street,
        addressLocality: COMPANY.address.city,
        postalCode: COMPANY.address.postalCode,
        addressCountry: COMPANY.address.country,
      },
      telephone: COMPANY.contact.phone,
      email: COMPANY.contact.email,
    },
  };
}

// Product List Schema (for salgsside page)
export function getProductListSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: BRANDS.flatMap((brand, brandIndex) =>
      CATEGORIES.map((category, catIndex) => ({
        '@type': 'Product',
        position: brandIndex * CATEGORIES.length + catIndex + 1,
        name: `${brand.name} - ${category}`,
        brand: {
          '@type': 'Brand',
          name: brand.name,
        },
        category: category,
        seller: {
          '@type': 'LocalBusiness',
          name: COMPANY.fullName,
        },
      }))
    ),
  };
}

// AboutPage Schema (for historie page)
export function getAboutPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: COMPANY.fullName,
      foundingDate: COMPANY.foundedYear,
      founder: {
        '@type': 'Person',
        name: COMPANY.founder,
      },
    },
  };
}

// JSON-LD Script Component Helper
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}


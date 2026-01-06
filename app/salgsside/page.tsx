import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Salgsside | DALSET BILVERKSTED',
  description: 'Vi fører reservedeler og forbruksvarer for Orkel, Dutz og Zetor. Hydraulikk, slangepresser, dekk, batteri, kjetting, olje og mer.',
};

const categories = [
  'Forbruksvarer',
  'Hydraulikk',
  'Slangepresser',
  'Dekk',
  'Batteri',
  'Kjetting',
  'Olje',
];

const brands = [
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
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: brands.flatMap((brand, brandIndex) =>
    categories.map((category, catIndex) => ({
      '@type': 'Product',
      position: brandIndex * categories.length + catIndex + 1,
      name: `${brand.name} - ${category}`,
      brand: {
        '@type': 'Brand',
        name: brand.name,
      },
      category: category,
      seller: {
        '@type': 'LocalBusiness',
        name: 'DALSET BILVERKSTED Ingebrigt Dalset',
      },
    }))
  ),
};

export default function SalgssidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="w-full bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Reservedeler og forbruksvarer
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Vi fører reservedeler for Orkel, Dutz og Zetor. Kontakt oss for tilgjengelighet og priser.
          </p>
        </div>
      </section>

      {/* Brands */}
      <section className="w-full bg-gray-50 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {brands.map((brand, brandIndex) => (
            <div
              key={brand.name}
              className={`mb-16 ${brandIndex === brands.length - 1 ? 'mb-0' : ''}`}
            >
              {/* Brand Header */}
              <div className="mb-8">
                <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                  <div className="relative h-32 w-32 rounded-lg overflow-hidden">
                    <Image
                      src={brand.image}
                      alt={`${brand.name} logo`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-black">
                    {brand.name}
                  </h2>
                </div>
              </div>

              {/* Categories Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categories.map((category) => (
                  <div
                    key={category}
                    className="bg-white border border-gray-200 rounded-lg p-6 transition-all duration-300 ease-in-out hover:shadow-lg hover:border-primary-brown"
                  >
                    <h3 className="text-xl font-bold text-black mb-2">
                      {category}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Reservedeler og forbruksvarer
                    </p>
                    <div className="mt-4">
                      <a
                        href="/kontakt"
                        className="text-primary-brown hover:text-primary-brown-dark text-sm font-medium transition-all duration-300"
                      >
                        Kontakt oss →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full bg-primary-brown py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Har du spørsmål om reservedeler?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Kontakt oss gjerne for å høre om tilgjengelighet, priser eller bestilling av reservedeler.
          </p>
          <a
            href="/kontakt"
            className="inline-block bg-white text-primary-brown px-8 py-3 rounded font-semibold transition-all duration-300 ease-in-out hover:bg-gray-100"
          >
            Kontakt oss
          </a>
        </div>
      </section>
    </>
  );
}


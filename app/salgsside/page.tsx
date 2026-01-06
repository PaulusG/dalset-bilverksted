import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Banner, Section, CategoryCard } from '@/components/ui';
import { BRANDS, CATEGORIES } from '@/lib/constants';
import { getProductListSchema, JsonLd } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Salgsside | DALSET BILVERKSTED',
  description: 'Vi fører reservedeler og forbruksvarer for Orkel, Dutz og Zetor. Hydraulikk, slangepresser, dekk, batteri, kjetting, olje og mer.',
};

export default function SalgssidePage() {
  return (
    <>
      <JsonLd data={getProductListSchema()} />

      {/* Hero Section */}
      <Section background="white">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Reservedeler og forbruksvarer
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Vi fører reservedeler for Orkel, Dutz og Zetor. Kontakt oss for tilgjengelighet og priser.
          </p>
        </div>
      </Section>

      {/* Brands */}
      <Section background="gray">
        {BRANDS.map((brand, brandIndex) => (
          <div
            key={brand.name}
            className={`mb-16 ${brandIndex === BRANDS.length - 1 ? 'mb-0' : ''}`}
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
              {CATEGORIES.map((category) => (
                <CategoryCard key={`${brand.name}-${category}`} category={category} />
              ))}
            </div>
          </div>
        ))}
      </Section>

      {/* Call to Action */}
      <Banner
        title="Har du spørsmål om reservedeler?"
        subtitle="Kontakt oss gjerne for å høre om tilgjengelighet, priser eller bestilling av reservedeler."
        variant="brown"
      >
        <div className="mt-8">
          <Link
            href="/kontakt"
            className="inline-block bg-white text-primary-brown px-8 py-3 rounded font-semibold transition-all duration-300 ease-in-out hover:bg-gray-100"
          >
            Kontakt oss
          </Link>
        </div>
      </Banner>
    </>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Section } from '@/components/ui';
import { COMPANY, SERVICES, IMAGES, HISTORY_TEXT } from '@/lib/constants';
import { getLocalBusinessSchema, JsonLd } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: `${COMPANY.name} | ${COMPANY.owner} - Traktorreparasjon og Landbruksmekanikk`,
  description: `Over 40 års erfaring med traktorreparasjon, landbruksmekanikk og sveis. Servicepunkt for Orkel og Lilleseth kramp. ${COMPANY.name} - Din pålitelige partner siden ${COMPANY.foundedYear}.`,
  openGraph: {
    title: `${COMPANY.name} | ${COMPANY.owner}`,
    description: 'Over 40 års erfaring med traktorreparasjon, landbruksmekanikk og sveis.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={getLocalBusinessSchema()} />
      
      {/* Hero Section */}
      <Section background="white">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
            {COMPANY.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            {HISTORY_TEXT.tagline}
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            {HISTORY_TEXT.short}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tjenester"
              className="bg-primary-brown text-white px-8 py-3 rounded transition-all duration-300 ease-in-out hover:bg-primary-brown-dark"
            >
              Våre tjenester
            </Link>
            <Link
              href="/kontakt"
              className="bg-primary-green text-white px-8 py-3 rounded transition-all duration-300 ease-in-out hover:bg-primary-green-dark"
            >
              Kontakt oss
            </Link>
          </div>
        </div>
      </Section>

      {/* Hero Image */}
      <section className="w-full">
        <div className="relative h-64 md:h-96 w-full">
          <Image
            src={IMAGES.hero}
            alt="Traktorreparasjon og landbruksmekanikk"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Services Preview */}
      <Section background="white">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
          Våre tjenester
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-gray-200 rounded-lg p-6 transition-all duration-300 ease-in-out hover:shadow-lg hover:border-primary-brown"
            >
              <div className="relative h-48 w-full mb-4 rounded">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.subtitle}</p>
              <Link
                href="/tjenester"
                className="text-primary-brown hover:text-primary-brown-dark transition-all duration-300"
              >
                Les mer →
              </Link>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

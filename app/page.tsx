import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DALSET BILVERKSTED | Ingebrigt Dalset - Traktorreparasjon og Landbruksmekanikk',
  description: 'Over 40 års erfaring med traktorreparasjon, landbruksmekanikk og sveis. Servicepunkt for Orkel og Lilleseth kramp. Dalset Bilverksted - Din pålitelige partner siden 1963.',
  openGraph: {
    title: 'DALSET BILVERKSTED | Ingebrigt Dalset',
    description: 'Over 40 års erfaring med traktorreparasjon, landbruksmekanikk og sveis.',
    type: 'website',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'DALSET BILVERKSTED Ingebrigt Dalset',
  image: '',
  '@id': '',
  url: '',
  telephone: '98658834',
  email: 'post@dalsetbilverksted.no',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Dalsetvegen 22',
    addressLocality: 'Eidsbygda',
    postalCode: '6350',
    addressCountry: 'NO',
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

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Hero Section */}
      <section className="w-full bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              DALSET BILVERKSTED
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Over 40 års erfaring med traktorreparasjon
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Ingebr. Dalset Bilverksted startet 1963 av Ingebrigt Dalset sen. og drives som et familiefirma. 
              Vi har over 40 års erfaring med Zetor traktorer.
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
        </div>
      </section>

      {/* Hero Image */}
      <section className="w-full">
        <div className="relative h-64 md:h-96 w-full">
          <Image
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&h=600&fit=crop"
            alt="Traktorreparasjon og landbruksmekanikk"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Services Preview */}
      <section className="w-full bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
            Våre tjenester
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 transition-all duration-300 ease-in-out hover:shadow-lg hover:border-primary-brown">
              <div className="relative h-48 w-full mb-4 rounded">
                <Image
                  src="https://images.unsplash.com/photo-1631460257929-afc8b8c7ae28?w=600&h=400&fit=crop"
                  alt="Landbruksmekanikk"
                  fill
                  className="object-cover rounded"
                />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">
                Landbruksmekanikk
              </h3>
              <p className="text-gray-600 mb-4">
                Reparasjon og vedlikehold av traktorer og redskap
              </p>
              <Link
                href="/tjenester"
                className="text-primary-brown hover:text-primary-brown-dark transition-all duration-300"
              >
                Les mer →
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 transition-all duration-300 ease-in-out hover:shadow-lg hover:border-primary-brown">
              <div className="relative h-48 w-full mb-4 rounded">
                <Image
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop"
                  alt="Servicepunkt"
                  fill
                  className="object-cover rounded"
                />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">
                Servicepunkt
              </h3>
              <p className="text-gray-600 mb-4">
                Servicepunkt for Orkel og Lilleseth kramp
              </p>
              <Link
                href="/tjenester"
                className="text-primary-brown hover:text-primary-brown-dark transition-all duration-300"
              >
                Les mer →
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 transition-all duration-300 ease-in-out hover:shadow-lg hover:border-primary-brown">
              <div className="relative h-48 w-full mb-4 rounded">
                <Image
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop"
                  alt="Liftutleie"
                  fill
                  className="object-cover rounded"
                />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">
                Liftutleie
              </h3>
              <p className="text-gray-600 mb-4">
                Utleie av profesjonelle løftere
              </p>
              <Link
                href="/tjenester"
                className="text-primary-brown hover:text-primary-brown-dark transition-all duration-300"
              >
                Les mer →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

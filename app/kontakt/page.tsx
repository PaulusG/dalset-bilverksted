import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt | DALSET BILVERKSTED',
  description: 'Kontakt Dalset Bilverksted. Dalsetvegen 22, 6350 Eidsbygda. Telefon: 98658834. E-post: post@dalsetbilverksted.no',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'DALSET BILVERKSTED Ingebrigt Dalset',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Dalsetvegen 22',
      addressLocality: 'Eidsbygda',
      postalCode: '6350',
      addressCountry: 'NO',
    },
    telephone: '98658834',
    email: 'post@dalsetbilverksted.no',
  },
};

export default function KontaktPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero/Banner Section */}
      <section className="w-full bg-primary-brown py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Kontakt oss
          </h1>
          <p className="text-xl text-white/90">
            Vi hjelper deg gjerne med dine behov
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="w-full bg-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-8">
              DALSET BILVERKSTED
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  Ingebrigt Dalset
                </h3>
                <p className="text-gray-700">
                  Dalsetvegen 22<br />
                  6350 Eidsbygda
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  Kontaktinformasjon
                </h3>
                <p className="text-gray-700">
                  E-post: <a href="mailto:post@dalsetbilverksted.no" className="text-primary-brown hover:underline">post@dalsetbilverksted.no</a>
                  <br />
                  Mobil: <a href="tel:98658834" className="text-primary-brown hover:underline">98658834</a>
                  <br />
                  Org.nr: 959 662 010
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Placeholder */}
      <section className="w-full bg-white py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden border border-gray-300">
            <Image
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=600&fit=crop"
              alt="Kart visning av Dalsetvegen 22, 6350 Eidsbygda - Google Maps vil bli installert senere"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="bg-white/90 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-600">
                  Google Maps vil bli installert her
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Dalsetvegen 22, 6350 Eidsbygda
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Banner */}
      <section className="w-full bg-primary-green py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Vår historie
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Ingebr. Dalset Bilverksted startet 1963 av Ingebrigt Dalset sen. og drives som et familiefirma. 
              Vi har over 40 års erfaring med Zetor traktorer.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}


import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Historie | DALSET BILVERKSTED',
  description: 'Historien om Dalset Bilverksted - Et familiefirma siden 1963 med over 40 års erfaring med traktorreparasjon og landbruksmekanikk.',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'DALSET BILVERKSTED Ingebrigt Dalset',
    foundingDate: '1963',
    founder: {
      '@type': 'Person',
      name: 'Ingebrigt Dalset sen.',
    },
  },
};

export default function HistoriePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="w-full bg-primary-brown py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Vår historie
          </h1>
          <p className="text-xl text-white/90">
            Et familiefirma siden 1963
          </p>
        </div>
      </section>

      {/* History Section 1 */}
      <section className="w-full bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1631460257929-afc8b8c7ae28?w=800&h=600&fit=crop"
                alt="Historisk bilde"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Starten i 1963
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-lg text-gray-700">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section 2 */}
      <section className="w-full bg-gray-50 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                40 års erfaring
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-lg text-gray-700">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden order-1 md:order-2">
              <Image
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop"
                alt="Erfaring og kompetanse"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* History Section 3 */}
      <section className="w-full bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop"
                alt="Familiefirma"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Et familiefirma
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-lg text-gray-700">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="w-full bg-primary-green py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Vår reise
          </h2>
          <div className="space-y-8">
            <div className="text-center">
              <div className="inline-block bg-white/20 rounded-full px-6 py-3 mb-4">
                <span className="text-white font-bold text-lg">1963</span>
              </div>
              <p className="text-white/90 text-lg">
                Ingebr. Dalset Bilverksted startet av Ingebrigt Dalset sen.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-block bg-white/20 rounded-full px-6 py-3 mb-4">
                <span className="text-white font-bold text-lg">40+ år</span>
              </div>
              <p className="text-white/90 text-lg">
                Erfaring med Zetor traktorer
              </p>
            </div>
            <div className="text-center">
              <div className="inline-block bg-white/20 rounded-full px-6 py-3 mb-4">
                <span className="text-white font-bold text-lg">I dag</span>
              </div>
              <p className="text-white/90 text-lg">
                Fortsatt et familiefirma som tilbyr kvalitetstjenester
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


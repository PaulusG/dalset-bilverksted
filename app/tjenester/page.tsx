import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tjenester | DALSET BILVERKSTED',
  description: 'Landbruksmekanikk, sveis, servicepunkt for Orkel og Lilleseth kramp, og liftutleie. Vi tilbyr fleksible løsninger for dine reparasjonsbehov.',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Traktorreparasjon og Landbruksmekanikk',
  provider: {
    '@type': 'LocalBusiness',
    name: 'DALSET BILVERKSTED Ingebrigt Dalset',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Norway',
  },
};

export default function TjenesterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Flexibility Banner */}
      <section className="w-full bg-primary-brown py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Fleksible løsninger for dine behov
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Vi tilpasser våre tjenester etter dine behov. Med over 40 års erfaring kan vi hjelpe deg med alt fra rutineservice til komplekse reparasjoner.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="w-full bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
            Våre hovedtjenester
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Service Card 1 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:border-primary-brown">
              <div className="relative h-64 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1631460257929-afc8b8c7ae28?w=600&h=400&fit=crop"
                  alt="Landbruksmekanikk og sveis"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black mb-4">
                  Landbruksmekanikk og sveis
                </h3>
                <p className="text-gray-600 mb-4">
                  For traktor og redskapreparasjon
                </p>
                <p className="text-gray-600">
                  Vi tilbyr profesjonell reparasjon og vedlikehold av traktorer og jordbruksredskap. 
                  Våre mekanikere har lang erfaring med alle typer landbruksmaskiner.
                </p>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:border-primary-brown">
              <div className="relative h-64 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop"
                  alt="Servicepunkt"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black mb-4">
                  Servicepunkt
                </h3>
                <p className="text-gray-600 mb-4">
                  For 'Orkel' og 'Lilleseth kramp'
                </p>
                <p className="text-gray-600">
                  Vi er autorisert servicepunkt for Orkel og Lilleseth kramp. 
                  Vi kan utføre service, reparasjoner og leverer reservedeler for disse merkene.
                </p>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:border-primary-brown">
              <div className="relative h-64 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop"
                  alt="Liftutleie"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black mb-4">
                  Liftutleie
                </h3>
                <p className="text-gray-600 mb-4">
                  Profesjonelle løftere til utleie
                </p>
                <p className="text-gray-600">
                  Vi tilbyr utleie av løftere for ditt behov. Kontakt oss for å høre om tilgjengelighet og priser.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Banner - Servicepunkt */}
      <section className="w-full bg-primary-green py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop"
                alt="Servicepunkt for Orkel og Lilleseth kramp"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Servicepunkt for 'Orkel' og 'Lilleseth kramp'
              </h3>
              <p className="text-lg text-white/90 mb-6">
                Vi er autorisert servicepunkt for Orkel og Lilleseth kramp. Våre fagfolk kjenner disse merkene godt og kan utføre alle typer service og reparasjoner.
              </p>
              <p className="text-lg text-white/90">
                Kontakt oss for serviceavtale eller hvis du trenger reservedeler for dine maskiner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Banner - Liftutleie */}
      <section className="w-full bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden order-2 md:order-1">
              <Image
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop"
                alt="Liftutleie"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Liftutleie
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Trenger du en løfter for et prosjekt? Vi tilbyr utleie av profesjonelle løftere. 
                Våre løftere er vedlikeholdt og klare for bruk.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Kontakt oss for å høre om tilgjengelighet, priser og levering.
              </p>
              <div className="mt-6">
                <a
                  href="/kontakt"
                  className="inline-block bg-primary-brown text-white px-6 py-3 rounded transition-all duration-300 ease-in-out hover:bg-primary-brown-dark"
                >
                  Kontakt oss
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


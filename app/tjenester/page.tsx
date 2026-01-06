import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Banner, Section, ServiceCard } from '@/components/ui';
import { SERVICES } from '@/lib/constants';
import { getServiceSchema, JsonLd } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Tjenester | DALSET BILVERKSTED',
  description: 'Landbruksmekanikk, sveis, servicepunkt for Orkel og Lilleseth kramp, og liftutleie. Vi tilbyr fleksible løsninger for dine reparasjonsbehov.',
};

export default function TjenesterPage() {
  return (
    <>
      <JsonLd data={getServiceSchema()} />

      {/* Flexibility Banner */}
      <Banner
        title="Fleksible løsninger for dine behov"
        subtitle="Vi tilpasser våre tjenester etter dine behov. Med over 40 års erfaring kan vi hjelpe deg med alt fra rutineservice til komplekse reparasjoner."
        variant="brown"
      />

      {/* Main Services */}
      <Section background="white">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
          Våre hovedtjenester
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Section>

      {/* Additional Banner - Servicepunkt */}
      <section className="w-full bg-primary-green py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden">
              <Image
                src={SERVICES[1].image}
                alt="Servicepunkt for Orkel og Lilleseth kramp"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Servicepunkt for Orkel og Lilleseth kramp
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
      <Section background="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden order-2 md:order-1">
            <Image
              src={SERVICES[2].image}
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
              <Link
                href="/kontakt"
                className="inline-block bg-primary-brown text-white px-6 py-3 rounded transition-all duration-300 ease-in-out hover:bg-primary-brown-dark"
              >
                Kontakt oss
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

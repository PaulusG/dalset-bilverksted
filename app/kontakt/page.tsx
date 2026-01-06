import Image from 'next/image';
import type { Metadata } from 'next';
import { Banner, Section } from '@/components/ui';
import { COMPANY, IMAGES, HISTORY_TEXT } from '@/lib/constants';
import { getContactPageSchema, JsonLd } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: `Kontakt | ${COMPANY.name}`,
  description: `Kontakt ${COMPANY.name}. ${COMPANY.address.street}, ${COMPANY.address.postalCode} ${COMPANY.address.city}. Telefon: ${COMPANY.contact.phone}. E-post: ${COMPANY.contact.email}`,
};

export default function KontaktPage() {
  return (
    <>
      <JsonLd data={getContactPageSchema()} />

      {/* Hero/Banner Section */}
      <Banner
        title="Kontakt oss"
        subtitle="Vi hjelper deg gjerne med dine behov"
        variant="brown"
      />

      {/* Contact Information */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-8">
              {COMPANY.name}
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  {COMPANY.owner}
                </h3>
                <p className="text-gray-700">
                  {COMPANY.address.street}<br />
                  {COMPANY.address.postalCode} {COMPANY.address.city}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  Kontaktinformasjon
                </h3>
                <p className="text-gray-700">
                  E-post: <a href={`mailto:${COMPANY.contact.email}`} className="text-primary-brown hover:underline">{COMPANY.contact.email}</a>
                  <br />
                  Mobil: <a href={`tel:${COMPANY.contact.phone}`} className="text-primary-brown hover:underline">{COMPANY.contact.phone}</a>
                  <br />
                  Org.nr: {COMPANY.contact.orgNr}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Google Map Placeholder */}
      <section className="w-full bg-white py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden border border-gray-300">
            <Image
              src={IMAGES.mapPlaceholder}
              alt={`Kart visning av ${COMPANY.address.street}, ${COMPANY.address.postalCode} ${COMPANY.address.city} - Google Maps vil bli installert senere`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="bg-white/90 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-600">
                  Google Maps vil bli installert her
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {COMPANY.address.street}, {COMPANY.address.postalCode} {COMPANY.address.city}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Banner */}
      <Banner
        title="Vår historie"
        subtitle={HISTORY_TEXT.short}
        variant="green"
      />
    </>
  );
}

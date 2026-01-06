import Image from 'next/image';
import type { Metadata } from 'next';
import { Banner, Section } from '@/components/ui';
import { COMPANY, IMAGES, HISTORY_TEXT } from '@/lib/constants';
import { getAboutPageSchema, JsonLd } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: `Historie | ${COMPANY.name}`,
  description: `Historien om ${COMPANY.name} - Et familiefirma siden ${COMPANY.foundedYear} med over 40 års erfaring med traktorreparasjon og landbruksmekanikk.`,
};

const historySections = [
  {
    title: `Starten i ${COMPANY.foundedYear}`,
    image: IMAGES.history.section1,
    imageAlt: 'Historisk bilde',
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ],
    imagePosition: 'left',
  },
  {
    title: '40 års erfaring',
    image: IMAGES.history.section2,
    imageAlt: 'Erfaring og kompetanse',
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ],
    imagePosition: 'right',
  },
  {
    title: 'Et familiefirma',
    image: IMAGES.history.section3,
    imageAlt: 'Familiefirma',
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ],
    imagePosition: 'left',
  },
];

const timelineItems = [
  { year: COMPANY.foundedYear, text: `Ingebr. Dalset Bilverksted startet av ${COMPANY.founder}.` },
  { year: '40+ år', text: 'Erfaring med Zetor traktorer' },
  { year: 'I dag', text: 'Fortsatt et familiefirma som tilbyr kvalitetstjenester' },
];

export default function HistoriePage() {
  return (
    <>
      <JsonLd data={getAboutPageSchema()} />

      {/* Hero Section */}
      <Banner
        title="Vår historie"
        subtitle={`Et familiefirma siden ${COMPANY.foundedYear}`}
        variant="brown"
      />

      {/* History Sections */}
      {historySections.map((section, index) => (
        <Section key={section.title} background={index % 2 === 0 ? 'white' : 'gray'}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className={`relative h-64 md:h-96 w-full rounded-lg overflow-hidden ${section.imagePosition === 'right' ? 'order-2 md:order-1' : ''}`}>
              <Image
                src={section.image}
                alt={section.imageAlt}
                fill
                className="object-cover"
              />
            </div>
            <div className={section.imagePosition === 'right' ? 'order-1 md:order-2' : ''}>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph, pIndex) => (
                <p key={pIndex} className="text-lg text-gray-700 mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Section>
      ))}

      {/* Timeline Section */}
      <section className="w-full bg-primary-green py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Vår reise
          </h2>
          <div className="space-y-8">
            {timelineItems.map((item) => (
              <div key={item.year} className="text-center">
                <div className="inline-block bg-white/20 rounded-full px-6 py-3 mb-4">
                  <span className="text-white font-bold text-lg">{item.year}</span>
                </div>
                <p className="text-white/90 text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

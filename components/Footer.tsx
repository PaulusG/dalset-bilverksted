import { COMPANY } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">{COMPANY.name}</h3>
            <p className="text-sm">
              {COMPANY.owner}
              <br />
              {COMPANY.address.street}
              <br />
              {COMPANY.address.postalCode} {COMPANY.address.city}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Kontakt</h3>
            <p className="text-sm">
              E-post: {COMPANY.contact.email}
              <br />
              Mobil: {COMPANY.contact.phone}
              <br />
              Org.nr: {COMPANY.contact.orgNr}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Åpningstider</h3>
            <p className="text-sm">
              Man-Fre: {COMPANY.openingHours.weekdays}
              <br />
              Lør-Søn: {COMPANY.openingHours.weekend}
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {COMPANY.name}. Alle rettigheter reservert.</p>
        </div>
      </div>
    </footer>
  );
}

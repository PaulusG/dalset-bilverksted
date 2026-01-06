export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">DALSET BILVERKSTED</h3>
            <p className="text-sm">
              Ingebrigt Dalset
              <br />
              Dalsetvegen 22
              <br />
              6350 Eidsbygda
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Kontakt</h3>
            <p className="text-sm">
              E-post: post@dalsetbilverksted.no
              <br />
              Mobil: 98658834
              <br />
              Org.nr: 959 662 010
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Åpningstider</h3>
            <p className="text-sm">
              Man-Fre: 08:00 - 16:00
              <br />
              Lør-Søn: Stengt
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Dalset Bilverksted. Alle rettigheter reservert.</p>
        </div>
      </div>
    </footer>
  );
}


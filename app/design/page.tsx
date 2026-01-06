import Image from 'next/image';
import Link from 'next/link';

// NOTE: This page can be removed later by deleting the app/design/ folder
// It showcases all reusable UI elements for design reference

export default function DesignPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Design System Showcase
          </h1>
          <p className="text-lg text-gray-600">
            Dette er en designvisningsside som kan fjernes senere. Alle gjenbrukbare UI-elementer vises her.
          </p>
        </div>

        {/* Colors */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-6">Farger</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="bg-black h-24 rounded mb-2"></div>
              <p className="text-sm font-semibold">Svart</p>
              <p className="text-xs text-gray-600">#000000</p>
            </div>
            <div>
              <div className="bg-white border-2 border-gray-300 h-24 rounded mb-2"></div>
              <p className="text-sm font-semibold">Hvit</p>
              <p className="text-xs text-gray-600">#FFFFFF</p>
            </div>
            <div>
              <div className="bg-primary-brown h-24 rounded mb-2"></div>
              <p className="text-sm font-semibold">Brun</p>
              <p className="text-xs text-gray-600">#8B6F47</p>
            </div>
            <div>
              <div className="bg-primary-green h-24 rounded mb-2"></div>
              <p className="text-sm font-semibold">Grønn</p>
              <p className="text-xs text-gray-600">#6B8E23</p>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-6">Typografi</h2>
          <div className="space-y-4">
            <div>
              <h1 className="text-5xl font-bold text-black">Heading 1</h1>
              <p className="text-sm text-gray-600">h1 - 5xl font-bold</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-black">Heading 2</h2>
              <p className="text-sm text-gray-600">h2 - 4xl font-bold</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-black">Heading 3</h3>
              <p className="text-sm text-gray-600">h3 - 3xl font-bold</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-black">Heading 4</h4>
              <p className="text-sm text-gray-600">h4 - 2xl font-bold</p>
            </div>
            <div>
              <h5 className="text-xl font-bold text-black">Heading 5</h5>
              <p className="text-sm text-gray-600">h5 - xl font-bold</p>
            </div>
            <div>
              <h6 className="text-lg font-semibold text-black">Heading 6</h6>
              <p className="text-sm text-gray-600">h6 - lg font-semibold</p>
            </div>
            <div>
              <p className="text-base text-gray-700">
                Body text - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-sm text-gray-600">p - base text-gray-700</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Small text - Dette er mindre tekst</p>
              <p className="text-xs text-gray-500">p - sm text-gray-600</p>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-6">Knapper</h2>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary-brown text-white px-6 py-3 rounded transition-all duration-300 ease-in-out hover:bg-primary-brown-dark">
              Primær knapp
            </button>
            <button className="bg-primary-green text-white px-6 py-3 rounded transition-all duration-300 ease-in-out hover:bg-primary-green-dark">
              Sekundær knapp
            </button>
            <button className="bg-white text-black border-2 border-black px-6 py-3 rounded transition-all duration-300 ease-in-out hover:bg-black hover:text-white">
              Outline knapp
            </button>
            <button className="text-primary-brown hover:text-primary-brown-dark transition-all duration-300 font-medium">
              Tekst knapp
            </button>
          </div>
        </section>

        {/* Cards */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-6">Kort</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 transition-all duration-300 ease-in-out hover:shadow-lg hover:border-primary-brown">
              <h3 className="text-xl font-bold text-black mb-2">Service kort</h3>
              <p className="text-gray-600">Dette er et eksempel på et service kort med hover-effekt.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:border-primary-brown">
              <div className="relative h-48 w-full bg-gray-200">
                <Image
                  src="https://images.unsplash.com/photo-1631460257929-afc8b8c7ae28?w=400&h=300&fit=crop"
                  alt="Kort med bilde"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-2">Kort med bilde</h3>
                <p className="text-gray-600">Dette kortet har et bilde og hover-effekt.</p>
              </div>
            </div>
            <div className="bg-primary-brown text-white rounded-lg p-6 transition-all duration-300 ease-in-out hover:bg-primary-brown-dark">
              <h3 className="text-xl font-bold mb-2">Farget kort</h3>
              <p className="text-white/90">Dette er et kort med farget bakgrunn.</p>
            </div>
          </div>
        </section>

        {/* Forms */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-6">Skjema-elementer</h2>
          <div className="max-w-2xl space-y-6">
            <div>
              <label className="block text-sm font-medium text-black mb-2">Tekstfelt</label>
              <input
                type="text"
                placeholder="Skriv inn tekst..."
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary-brown"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-2">Tekstområde</label>
              <textarea
                placeholder="Skriv inn melding..."
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary-brown"
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-2">Nedtrekksliste</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary-brown">
                <option>Velg et alternativ</option>
                <option>Alternativ 1</option>
                <option>Alternativ 2</option>
                <option>Alternativ 3</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm text-black">Checkbox 1</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm text-black">Checkbox 2</span>
              </label>
            </div>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="radio" name="radio" className="mr-2" />
                <span className="text-sm text-black">Radio 1</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="radio" className="mr-2" />
                <span className="text-sm text-black">Radio 2</span>
              </label>
            </div>
          </div>
        </section>

        {/* Banners */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-6">Bannere</h2>
          <div className="space-y-6">
            <div className="bg-primary-brown py-8 px-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Fullbredde banner</h3>
              <p className="text-white/90">Dette er et eksempel på en farget banner.</p>
            </div>
            <div className="bg-primary-green py-8 px-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Grønn banner</h3>
              <p className="text-white/90">Alternativ farget banner.</p>
            </div>
            <div className="bg-gray-100 border border-gray-300 py-8 px-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-black mb-2">Nøytral banner</h3>
              <p className="text-gray-700">Banner med nøytral bakgrunn.</p>
            </div>
          </div>
        </section>

        {/* Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-6">Lenker</h2>
          <div className="space-y-4">
            <div>
              <Link href="/" className="text-primary-brown hover:text-primary-brown-dark transition-all duration-300">
                Standard lenke med hover-effekt
              </Link>
            </div>
            <div>
              <Link href="/" className="text-black hover:text-primary-brown transition-all duration-300 underline">
                Understreket lenke
              </Link>
            </div>
            <div>
              <Link href="/" className="text-primary-brown hover:text-primary-brown-dark transition-all duration-300 font-medium">
                Lenke med pil →
              </Link>
            </div>
          </div>
        </section>

        {/* Spacing Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-6">Spacing-eksempler</h2>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded">
              <p className="text-sm text-gray-600 mb-2">p-4 (medium spacing)</p>
              <div className="bg-primary-brown h-8 rounded"></div>
            </div>
            <div className="bg-gray-100 p-6 rounded">
              <p className="text-sm text-gray-600 mb-2">p-6 (medium spacing)</p>
              <div className="bg-primary-brown h-8 rounded"></div>
            </div>
            <div className="bg-gray-100 p-8 rounded">
              <p className="text-sm text-gray-600 mb-2">p-8 (medium spacing)</p>
              <div className="bg-primary-brown h-8 rounded"></div>
            </div>
          </div>
        </section>

        {/* Navigation Example */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-6">Navigasjonskomponenter</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <nav className="flex space-x-6">
              <Link href="/" className="text-black hover:text-primary-brown transition-all duration-300">
                Forsiden
              </Link>
              <Link href="/kontakt" className="text-primary-brown border-b-2 border-primary-brown transition-all duration-300">
                Kontakt
              </Link>
              <Link href="/tjenester" className="text-black hover:text-primary-brown transition-all duration-300">
                Tjenester
              </Link>
            </nav>
            <p className="text-sm text-gray-600 mt-4">Eksempel på navigasjon med aktiv tilstand</p>
          </div>
        </section>

        {/* Footer Elements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-6">Footer-elementer</h2>
          <div className="bg-black text-white p-6 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold mb-2">Kontakt</h3>
                <p className="text-sm text-gray-400">E-post: post@dalsetbilverksted.no</p>
                <p className="text-sm text-gray-400">Telefon: 98658834</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Adresse</h3>
                <p className="text-sm text-gray-400">Dalsetvegen 22</p>
                <p className="text-sm text-gray-400">6350 Eidsbygda</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Åpningstider</h3>
                <p className="text-sm text-gray-400">Man-Fre: 08:00 - 16:00</p>
                <p className="text-sm text-gray-400">Lør-Søn: Stengt</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}


# Dalset Bilverksted Website

Website for Dalset Bilverksted - Et familiefirma siden 1963 med over 40 års erfaring med traktorreparasjon og landbruksmekanikk.

## Teknologi

- **Next.js 14+** med App Router
- **TypeScript** for typesikkerhet
- **Tailwind CSS** for styling
- **Static Site Generation (SSG)** for optimal ytelse

## Installasjon

1. Installer avhengigheter:
```bash
npm install
```

2. Kjør utviklingsserver:
```bash
npm run dev
```

Åpne [http://localhost:3000](http://localhost:3000) i nettleseren for å se resultatet.

## Bygging for produksjon

```bash
npm run build
```

Dette genererer en statisk versjon av nettsiden i `out/` mappen som kan deployes til Netlify eller annen statisk hosting.

## Sider

- **Forsiden** (`/`) - Hjemmeside med hero-seksjon og tjenesteoversikt
- **Tjenester** (`/tjenester`) - Oversikt over alle tjenester
- **Kontakt** (`/kontakt`) - Kontaktinformasjon og Google Maps placeholder
- **Salgsside** (`/salgsside`) - Reservedeler organisert etter merke (Orkel, Dutz, Zetor)
- **Historie** (`/historie`) - Firmahistorie siden 1963
- **Design** (`/design`) - Designvisningsside (kan fjernes senere)

## Design System

- **Farger**: Hovedfarger er svart og hvit, med jordtoner (brun og grønn) som aksenter
- **Spacing**: Medium spacing (Tailwind default)
- **Responsivt**: Mobile-first design med breakpoints for tablet (md:) og desktop
- **Hover-effekter**: 300ms smooth fade-in transitions på knapper og kort

## Deployment

Nettsiden er konfigurert for deployment til Netlify. Byggkommando og publiseringsmappe er konfigurert i `netlify.toml`.

For GitHub deployment:
1. Push koden til GitHub repository
2. Koble til Netlify og velg repository
3. Netlify vil automatisk bygge og deploye nettsiden

## Strukturert Data

Alle sider inneholder strukturert data (JSON-LD) for SEO:
- Forside: LocalBusiness schema
- Tjenester: Service schema
- Kontakt: ContactPage schema
- Salgsside: Product schema
- Historie: AboutPage schema

## Notater

- Design-siden kan fjernes ved å slette `app/design/` mappen
- Google Maps placeholder på kontaktsiden skal erstattes med faktisk Google Maps embed senere
- Alle bilder bruker stock images fra Unsplash


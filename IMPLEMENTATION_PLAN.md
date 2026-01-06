# Dalset Bilverksted Website Implementation Plan

## Overview

Create a Next.js website for Dalset Bilverksted with 5 pages (Forside, Tjenester, Kontakt, Salgsside, Historie), Tailwind CSS, SEO optimization with structured data, and a design showcase page. The site will be Norwegian-only with a black/white design and earth tone accents.

## Project Structure

Using Next.js 14+ with App Router for modern routing, React Server Components, and improved SEO.

### File Structure

```
app/
├── layout.tsx              # Root layout with navigation, footer
├── page.tsx                # Forside (Homepage)
├── tjenester/
│   └── page.tsx           # Services page
├── kontakt/
│   └── page.tsx           # Contact page
├── salgsside/
│   └── page.tsx           # Sales page
├── historie/
│   └── page.tsx           # History page
├── design/
│   └── page.tsx           # Design showcase (removable later)
└── globals.css             # Root CSS with color variables
```

## Design System

### Colors (in root CSS)

- **Main**: Black (`#000000`) and White (`#FFFFFF`)
- **Accents** (earth tones):
  - Browns: `#8B6F47`, `#6B5B3D`, `#A0826D`
  - Greens: `#556B2F`, `#6B8E23`, `#7A8B5A`
- Colors defined as CSS variables for easy theme changes

### Typography

- Primary font: System font stack (Norwegian-friendly)
- Heading hierarchy: Bold, clear hierarchy

### Spacing & Layout

- **Mobile-first approach**: Design starts from mobile, scales up
- **Spacing**: Medium spacing using Tailwind default (p-4, p-6, gap-6, gap-8, etc.)
- **Full-width sections**: Sections span full width with container padding inside
- **Breakpoints**: 
  - Mobile: Default (< 640px)
  - Tablet: `md:` (768px+)
  - Desktop: `lg:` (1024px+) and `xl:` (1280px+)

### Interactions & Animations

- **Hover effects**: Applied to buttons and cards
- **Transition duration**: 300ms for smooth fade-ins
- **Transition type**: `transition-all duration-300 ease-in-out`
- Elements affected: Buttons, service cards, product cards, navigation items

### Components to Build

1. Navigation (desktop/mobile, with hover states)
2. Footer
3. Service cards (with hover effects)
4. Banner components
5. Contact form/info sections
6. Product brand sections (with hover effects)
7. Design showcase elements (ALL reusable components)

## Pages Implementation

### 1. Forside (Homepage) - `app/page.tsx`

- Hero section with company name
- Brief introduction/summary
- Links to main sections
- **Structured Data**: Schema.org `LocalBusiness`
  - Company name, address, phone, email, org.nr
  - Opening hours (if applicable)
  - Services offered

### 2. Tjenester (Services) - `app/tjenester/page.tsx`

- **Top banner**: Flexibility-focused banner (separate, full-width)
- **3 Service Cards**:
  - a. Landbruksmekanikk og sveis for traktor og redskapreparasjon
  - b. Servicepunkt for 'Orkel' og 'Lilleseth kramp'
  - c. Liftutleie
- Each card: Image, header, description (few lines)
- **Additional banners**:
  - Servicepunkt for 'Orkel' og 'Lilleseth kramp' banner
  - Liftutleie banner
- **Structured Data**: Schema.org `Service`

### 3. Kontakt (Contact) - `app/kontakt/page.tsx`

- **Structure based on mokkis.no/kontakt/**:
  - Banner/hero section
  - "Kontakt oss" heading
  - Contact information display:
    - Company: DALSET BILVERKSTED Ingebrigt Dalset
    - Address: Dalsetvegen 22, 6350 Eidsbygda
    - Org.nr: 959 662 010
    - Email: post@dalsetbilverksted.no
    - Mobile: 98658834
- **Google Map placeholder**: 
  - Static placeholder image (map screenshot style)
  - Positioned after contact information section
  - Contained within content area (matching contact info width)
  - For demonstration purposes - will be replaced with actual Google Maps embed later
  - Shows location: Dalsetvegen 22, 6350 Eidsbygda
- **History banner**: Company history text
  - "Ingebr. Dalset Bilverksted startet 1963 av Ingebrigt Dalset sen. og drives som et familiefirma. Vi har over 40 års erfaring med Zetor traktorer."
- **Structured Data**: Schema.org `ContactPage`

### 4. Salgsside (Sales) - `app/salgsside/page.tsx`

- **Organized by Brand** (3 brands):
  1. **Orkel**
  2. **Dutz**
  3. **Zetor**
- Each brand displays **all 7 categories**:
  - Forbruksvarer
  - Hydraulikk
  - Slangepresser
  - Dekk
  - Batteri
  - Kjetting
  - Olje
- Layout: Brand section with category grid/list
- **Structured Data**: Schema.org `Product` (for each brand/category)

### 5. Historie (History) - `app/historie/page.tsx`

- **Own design**: Image + text layout
- Multiple sections with stock images
- Lorem ipsum placeholder text (as requested)
- Timeline or story-based layout
- **Structured Data**: Schema.org `AboutPage`

### 6. Design Page - `app/design/page.tsx`

- **Showcase ALL reusable elements**:
  - Buttons (primary, secondary, variants with hover states)
  - Typography (all heading levels h1-h6, body text, labels)
  - Form elements (inputs, textareas, selects, checkboxes, radio buttons)
  - Banners (full-width, contained, various styles)
  - Cards (service cards, info cards, product cards - all with hover effects)
  - Navigation components (desktop, mobile hamburger)
  - Footer components
  - Color swatches (all colors from design system)
  - Spacing examples (showing medium spacing scale)
  - Layout examples (container, grid, flex patterns)
  - Image components
  - Link styles
  - Section dividers
- **Removable later** (clearly marked in comments)

## Technical Implementation

### Dependencies

- `next`: Latest version (14+)
- `react`, `react-dom`: Latest compatible
- `tailwindcss`: Latest
- `autoprefixer`, `postcss`: For Tailwind
- `next-seo` or manual metadata: For SEO

### Configuration Files

- `tailwind.config.ts`: Tailwind setup with custom colors from CSS variables
- `next.config.js`: Next.js configuration
- `tsconfig.json`: TypeScript config
- `package.json`: Dependencies

### SEO Implementation

- Metadata API (Next.js App Router)
- Open Graph tags
- Twitter Card tags
- Structured data (JSON-LD) on all pages
- Semantic HTML5
- Proper heading hierarchy
- Alt text for all images

### Image Handling

- Next.js Image component for optimization
- Stock images from Unsplash/Pexels
- Agricultural/industrial/tractor themes

### Navigation

- Main navigation menu: Forsiden, Kontakt, Tjenester, Salgsside, Historie
- **Mobile-first responsive**: Hamburger menu on mobile, full menu on tablet+
- Active state highlighting
- Hover effects with 300ms transitions

### Static Site Generation (SSG)

- **All pages use SSG**: Pages are statically generated at build time
- Since content changes infrequently, SSG provides optimal performance
- Next.js automatically generates static HTML for all routes
- No runtime data fetching needed

## Deployment Setup

### GitHub Integration

- Initialize git repository
- `.gitignore` for Next.js
- README with setup instructions

### Netlify Configuration

- `netlify.toml` for build settings
- Environment variables (if needed)
- Build command: `npm run build`
- Publish directory: `.next`

## Implementation Order

1. Project setup (Next.js, Tailwind, dependencies)
2. Root CSS with color variables
3. Root layout with navigation/footer
4. Homepage (Forside) with structured data
5. Services page (Tjenester) with cards and banners
6. Contact page (Kontakt) with mokkis.no structure
7. Sales page (Salgsside) organized by brands
8. History page (Historie) with own design
9. Design showcase page
10. SEO optimization across all pages
11. Responsive design testing
12. GitHub repository setup

## Implementation Tasks

- [ ] Initialize Next.js project with App Router, install Tailwind CSS and dependencies, configure TypeScript
- [ ] Create globals.css with color variables (black, white, brown/green earth tones)
- [ ] Build root layout with navigation menu (Forsiden, Kontakt, Tjenester, Salgsside, Historie) and footer
- [ ] Create Forside (homepage) with hero section, brief intro, and LocalBusiness structured data
- [ ] Build Tjenester page with flexibility banner, 3 service cards, and additional service banners
- [ ] Create Kontakt page based on mokkis.no structure with contact info, Google Map placeholder image (for demonstration), and history banner
- [ ] Build Salgsside organized by 3 brands (Orkel, Dutz, Zetor) with 7 categories each
- [ ] Create Historie page with custom design, stock images, and lorem ipsum text
- [ ] Build design showcase page with all UI elements (buttons, typography, forms, banners, cards, navigation)
- [ ] Add SEO metadata and structured data (JSON-LD) to all pages with appropriate Schema.org types
- [ ] Implement mobile-first responsive design with tablet breakpoints (md:), full-width sections with container padding, medium spacing throughout
- [ ] Add 300ms smooth fade-in hover effects to all buttons and cards throughout the site
- [ ] Initialize git repository, create .gitignore, add README with setup instructions, prepare for GitHub deployment

## Notes

- All text content in Norwegian
- Colors easily changeable via root CSS variables
- Design page can be removed by deleting `app/design/` folder
- Stock images used throughout (agricultural/industrial theme)
- Structured data validated using Google Rich Results Test
- **Static pages**: All pages are static with minimal expected changes after publication
- **Mobile-first**: Design and development starts from mobile, scales up to tablet and desktop
- **Full-width sections**: All major sections are full-width with internal container padding for content
- **Reusable components**: All reusable UI elements are shown on the design page for reference


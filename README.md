# Africa West Paper (AWP) website

French-language marketing website for **Africa West Paper**, a maker of paper hygiene products (toilet paper, paper towels, tissues). The site presents the company and its three brands: **Celline**, **Rysh** and **AWP Pro**.

## Pages

| Route | Content |
| --- | --- |
| `/` | Hero, company presentation ("Qui sommes-nous"), brand logos, values ("Nos Valeurs") and contact form |
| `/celline` | Celline brand page with a product slideshow and product tabs |
| `/rysh` | Rysh brand page with a product slideshow and product tabs |
| `/awp` | AWP Pro (professional range) page with product details |
| `/RejoignezNous` | "Join us" page with an application form |

The contact and "Rejoignez nous" forms are front-end only. They post to `#` and nothing handles their submissions.

## Tech stack

- [Next.js](https://nextjs.org/) 13 (App Router), React 18, TypeScript/JSX
- Tailwind CSS
- `react-icons`, `next-themes`
- Carousel and slideshow libraries: `swiper`, `react-slick` / `slick-carousel`, `react-slideshow-image`, `react-responsive-carousel`, `react-image-gallery`

## Project structure

```
src/
  app/
    page.tsx                 # Home page
    layout.tsx               # Root layout (header, scroll-to-top, footer)
    celline/ rysh/ awp/      # Brand pages
    RejoignezNous/           # Recruitment / contact form page
    images/                  # Product and brand images imported by pages
  components/
    Header/                  # Navigation (menuData.tsx), theme toggler
    Celline/ Rysh/ Awp/      # Brand-specific sections, slideshows, tabs
    Marques/ Values/ Contact/ About/ Footer/ Common/ ...
  types/                     # Shared TypeScript types
public/
  images/, marques/          # Static images and brand logos
```

## Getting started

Requirements: Node.js 18 or later.

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts: `npm run build`, `npm start`, `npm run lint`.

No environment variables are needed.

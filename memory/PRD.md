# SK Sweets Food Court — Website PRD

## Original problem statement
Build the official premium website for SK Sweets Food Court, a family-owned Indian sweet shop and food court in Dombivli East since 1999. Must feel like a luxury heritage brand — premium, elegant, traditional yet modern, warm and family-friendly. Uses real store photographs (never altered), custom brand palette (cream/ivory/burgundy/gold/copper/charcoal), Cormorant Garamond serif + Manrope sans. No prices anywhere — ordering through WhatsApp, Swiggy or phone. 9 pages, sticky nav with transparent→solid transition, premium mobile drawer, searchable/filterable catalogue with no prices, static curated testimonials, FAQ accordion, gallery lightbox.

## Architecture
- React SPA (react-router-dom v7) with Tailwind CSS + custom brand tokens (no shadcn primitives used for site sections)
- Cormorant Garamond + Manrope via Google Fonts
- lucide-react icons
- Frontend-only ordering via WhatsApp `wa.me` deep links, Swiggy URL, `tel:` links, Google Maps and Instagram external links
- Backend: unchanged FastAPI boilerplate (only /api/ hello + /api/status). No auth. No forms.

## Personas
- Existing loyal customer looking to place a quick WhatsApp order for a favourite (peda, samosa, khakhra)
- Celebration planner (birthday photo cake, wedding hamper, corporate gift)
- New visitor / discovery — arrives via Google Maps or Instagram, needs to trust the brand quickly
- Mobile-first shopper on smartphone using WhatsApp

## What has been implemented (Feb 2026)
- 9 pages: Home, About, Signature, Catalogue, Fast Food, Celebrations, Gallery, Reviews, Contact
- Home flow (Hero → Brand Story → Signature → Favourites → Categories → Fast Food → Celebration → Gallery Preview → Why Us → Testimonials → FAQ → Visit Us → Footer)
- Sticky nav with transparent-over-hero → solid ivory-glass on scroll (>60px). Solid immediately on non-home routes.
- Premium mobile drawer nav (>lg) with serif oversized links and CTAs
- Hero with 3 CTAs (WhatsApp / Swiggy / Directions), 5 trust badges, scroll indicator
- Signature bento (6 cards) + Kaju Katli variants chips (6 flavours) + WA CTA
- Catalogue: 85 products, 16 categories, live search + filter chips + deep-link ?category=. NO PRICES anywhere. WhatsApp order CTA on every product card.
- Fast Food menu: 6 groups (Dosas, Uttappas, South Indian, Sandwiches, Snacks, Beverages)
- Celebrations: 3 occasion cards + 6 celebration services + WA/phone CTAs
- Gallery: 8-tile bento with lightbox
- Reviews: 6 curated testimonials + Google Business CTA
- FAQ: 6 questions, accordion (one open at a time)
- Visit Us: full address + hours + phone + WhatsApp + Get Directions
- Footer: brand, social icons, sitemap, address, hours
- Floating WhatsApp + Call buttons on every page
- Real store photos used untouched (only crop / zoom hover). Logo PDF extracted → PNG mark + full versions.

## Backlog (Prioritized)
### P1 (soon)
- Add more product-specific close-up photos as they are uploaded (currently many products share counter photos)
- Google Maps embed on Contact page (interactive iframe)
- Wire up a real Swiggy restaurant URL when available (currently uses search query fallback)
- Instagram feed embed on Gallery page

### P2 (nice-to-have)
- Live Google Reviews via Places API (needs API key)
- Contact form → WhatsApp lead capture endpoint (MongoDB) for enquiries at night
- Blog / press page for coverage & recipes
- Multi-language (Marathi) toggle
- Structured data (LocalBusiness / Product) for SEO
- Newsletter opt-in with resend integration for festival announcements

## Test credentials
None — no auth in this site.


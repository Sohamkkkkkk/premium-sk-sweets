import { ChevronDown, Star, Award, Truck, MapPin, Cake } from "lucide-react";
import { HERO_IMAGE, SITE, waLink } from "@/data/site";

const BADGES = [
  { icon: Star, label: "Rated 4.8 on Google" },
  { icon: Award, label: "Since 1999" },
  { icon: Cake, label: "Custom Cakes" },
  { icon: Truck, label: "Home Delivery" },
  { icon: MapPin, label: "Dombivli East" },
];

export default function Hero() {
  return (
    <section
      data-testid="hero-section"
      className="relative min-h-[100svh] w-full overflow-hidden flex items-end"
    >
      {/* Hero background — the ONLY uploaded store photograph used outside Gallery */}
      <img
        src={HERO_IMAGE}
        alt="SK Sweets Food Court interior — chandelier, product shelves and khakhra aisle"
        className="absolute inset-0 h-full w-full object-cover scale-105"
        loading="eager"
        fetchPriority="high"
      />
      {/* Layered dark vignette for legibility */}
      <div className="absolute inset-0 hero-vignette" aria-hidden="true" />
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none" aria-hidden="true" />

      {/* Gold hairline flourish */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-gold-light/60 to-transparent hidden md:block" />

      <div className="container-luxe relative z-10 pb-24 md:pb-32 pt-40 md:pt-44">
        <div className="max-w-3xl stagger">
          <div className="inline-flex items-center gap-3 text-gold-light">
            <span className="h-px w-10 bg-gold-light/70" />
            <span className="overline text-gold-light">Est. 1999 · Dombivli East</span>
            <span className="h-px w-10 bg-gold-light/70" />
          </div>
          <h1 className="mt-8 font-serif text-[44px] sm:text-6xl md:text-7xl lg:text-[92px] leading-[0.98] tracking-[-0.015em] text-cream text-balance">
            Crafting Sweet<br />
            <span className="italic text-gold-light">Memories</span> Since 1999
          </h1>
          <p className="mt-8 max-w-2xl text-cream/85 text-lg md:text-xl leading-relaxed font-light tracking-wide">
            From handcrafted sweets and premium dry-fruit delicacies to custom celebration
            cakes, authentic fast food and everyday favourites — serving quality, freshness
            and happiness for over two decades.
          </p>
          <div className="mt-12 flex flex-wrap gap-3">
            <a
              href={waLink("Hello SK Sweets, I would like to place an order.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              data-testid="hero-cta-whatsapp"
            >
              Order on WhatsApp
            </a>
            <a
              href={SITE.swiggy}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-swiggy"
              data-testid="hero-cta-swiggy"
            >
              Order on Swiggy
            </a>
            <a
              href={SITE.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-gold text-cream border-cream/40 hover:bg-cream hover:text-burgundy"
              data-testid="hero-cta-directions"
            >
              Get Directions
            </a>
          </div>

          {/* Trust badges */}
          <ul className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3">
            {BADGES.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 text-cream/90 text-[13px] tracking-wide"
              >
                <Icon className="h-4 w-4 text-gold-light" strokeWidth={1.5} />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute left-1/2 bottom-8 -translate-x-1/2 flex flex-col items-center text-cream/70 gap-2 z-10 animate-fade-in">
        <span className="text-[10px] uppercase tracking-[0.36em]">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" strokeWidth={1.5} />
      </div>
    </section>
  );
}

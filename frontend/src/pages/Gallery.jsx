import { useState } from "react";
import { X } from "lucide-react";
import SiteLayout from "@/components/site/SiteLayout";
import { IMG } from "@/data/site";

const GALLERY = [
  { src: IMG.interior, alt: "SK Sweets Food Court interior aisle with chandelier and khakhra shelves" },
  { src: IMG.sweetCounter, alt: "Peda, barfi and mewa bite counter display" },
  { src: IMG.bengaliCounter, alt: "Bengali sweets hot counter — rasmalai, gulab jamun and kala jamun" },
  { src: IMG.cakesRasmalai, alt: "Fresh cream cakes and rasmalai" },
  { src: IMG.desiCounter, alt: "Balusahi, Mysore pak and traditional desi sweets" },
  { src: IMG.imported, alt: "Imported chocolates, biscuits and choco pies" },
  { src: IMG.beverages, alt: "Beverage fridge with juices, coconut water and soft drinks" },
  { src: IMG.logoWall, alt: "SK Sweets marble and gold logo wall" },
];

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <SiteLayout>
      <section className="bg-cream pt-40 md:pt-44 pb-6">
        <div className="container-luxe max-w-3xl">
          <span className="overline">Gallery</span>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-charcoal">
            Step inside<br />
            <span className="italic text-burgundy">the store</span>.
          </h1>
          <p className="mt-6 text-lg text-charcoal/80 leading-relaxed">
            A glimpse of what awaits at Mahavir Pride — every counter thoughtfully arranged,
            every sweet freshly presented.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="container-luxe">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5" data-testid="gallery-grid">
            {GALLERY.map((g, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                data-testid={`gallery-item-${i}`}
                className={`img-zoom relative overflow-hidden rounded-[16px] md:rounded-[20px] border border-copper/10 shadow-premium hover:shadow-premium-hover transition-shadow ${
                  i % 5 === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-[4/5]"
                }`}
              >
                <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-charcoal/85 backdrop-blur-md p-6 md:p-10 animate-fade-in"
          onClick={() => setActive(null)}
          data-testid="gallery-lightbox"
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setActive(null); }}
            className="absolute top-6 right-6 h-12 w-12 rounded-full bg-cream text-burgundy inline-flex items-center justify-center hover:scale-105 transition-transform"
            aria-label="Close"
            data-testid="gallery-lightbox-close"
          >
            <X className="h-5 w-5" strokeWidth={1.75} />
          </button>
          <img
            src={GALLERY[active].src}
            alt={GALLERY[active].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-full max-w-full rounded-[20px] object-contain shadow-premium-hover"
          />
        </div>
      )}
    </SiteLayout>
  );
}

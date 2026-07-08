import { useState, useMemo, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import SiteLayout from "@/components/site/SiteLayout";
import { GALLERY, GALLERY_CATEGORIES } from "@/data/gallery";

export default function Gallery() {
  const [active, setActive] = useState("all");
  const [lightbox, setLightbox] = useState(null); // index or null

  const items = useMemo(
    () => (active === "all" ? GALLERY : GALLERY.filter((g) => g.category === active)),
    [active]
  );

  const close = useCallback(() => setLightbox(null), []);
  const next = useCallback(
    () => setLightbox((i) => (i === null ? null : (i + 1) % items.length)),
    [items.length]
  );
  const prev = useCallback(
    () =>
      setLightbox((i) => (i === null ? null : (i - 1 + items.length) % items.length)),
    [items.length]
  );

  // Keyboard nav
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, next, prev]);

  return (
    <SiteLayout>
      <section className="bg-cream pt-40 md:pt-44 pb-6">
        <div className="container-luxe max-w-3xl">
          <span className="overline">Gallery</span>
          <h1 className="mt-5 font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-charcoal tracking-[-0.015em]">
            Step inside<br />
            <span className="italic text-burgundy">the store</span>.
          </h1>
          <p className="mt-6 text-lg text-charcoal/80 leading-[1.75]">
            A glimpse of what awaits at Mahavir Pride — every counter thoughtfully arranged,
            every sweet freshly presented. Real photographs of our Dombivli East flagship.
          </p>
        </div>
      </section>

      {/* Category filters */}
      <section className="bg-cream pt-8">
        <div className="container-luxe">
          <div
            className="flex gap-2.5 overflow-x-auto no-scrollbar -mx-6 px-6"
            data-testid="gallery-filters"
          >
            {GALLERY_CATEGORIES.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setActive(c.id)}
                data-testid={`gallery-filter-${c.id}`}
                className={`shrink-0 inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium tracking-wide border transition-all duration-300 ${
                  active === c.id
                    ? "bg-burgundy text-cream border-burgundy shadow-premium"
                    : "bg-white text-charcoal border-copper/20 hover:border-burgundy hover:text-burgundy"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry grid via CSS columns */}
      <section className="bg-cream py-14 md:py-20">
        <div className="container-luxe">
          <div
            className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-5 [column-fill:_balance]"
            data-testid="gallery-grid"
          >
            {items.map((img, i) => (
              <button
                key={img.id}
                type="button"
                onClick={() => setLightbox(i)}
                data-testid={`gallery-item-${i}`}
                className="group relative mb-4 md:mb-5 block w-full break-inside-avoid overflow-hidden rounded-[18px] md:rounded-[22px] border border-copper/15 shadow-premium hover:shadow-premium-hover transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
              >
                <div className="img-zoom">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 md:p-5 flex items-end justify-between text-cream opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-gold-light">
                      {GALLERY_CATEGORIES.find((g) => g.id === img.category)?.label}
                    </div>
                    <div className="font-serif text-lg md:text-xl mt-1">{img.label}</div>
                  </div>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cream text-burgundy">
                    <Expand className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && items[lightbox] && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-charcoal/92 backdrop-blur-md animate-fade-in"
          onClick={close}
          data-testid="gallery-lightbox"
        >
          {/* Close */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            className="absolute top-5 right-5 md:top-8 md:right-8 h-12 w-12 rounded-full bg-cream text-burgundy inline-flex items-center justify-center hover:scale-105 hover:bg-white transition-all"
            aria-label="Close"
            data-testid="gallery-lightbox-close"
          >
            <X className="h-5 w-5" strokeWidth={1.75} />
          </button>
          {/* Prev */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-3 md:left-8 h-12 w-12 md:h-14 md:w-14 rounded-full bg-cream/95 text-burgundy inline-flex items-center justify-center hover:scale-105 hover:bg-white transition-all"
            aria-label="Previous image"
            data-testid="gallery-lightbox-prev"
          >
            <ChevronLeft className="h-6 w-6" strokeWidth={1.75} />
          </button>
          {/* Next */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 md:right-8 h-12 w-12 md:h-14 md:w-14 rounded-full bg-cream/95 text-burgundy inline-flex items-center justify-center hover:scale-105 hover:bg-white transition-all"
            aria-label="Next image"
            data-testid="gallery-lightbox-next"
          >
            <ChevronRight className="h-6 w-6" strokeWidth={1.75} />
          </button>

          <div
            className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={items[lightbox].src}
              alt={items[lightbox].alt}
              className="max-h-[80vh] max-w-full rounded-[22px] object-contain shadow-premium-hover"
            />
            <div className="mt-5 text-center text-cream">
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold-light">
                {GALLERY_CATEGORIES.find((g) => g.id === items[lightbox].category)?.label}
              </div>
              <div className="font-serif text-2xl mt-1">{items[lightbox].label}</div>
              <div className="text-[11px] text-cream/60 mt-2">
                {lightbox + 1} / {items.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </SiteLayout>
  );
}

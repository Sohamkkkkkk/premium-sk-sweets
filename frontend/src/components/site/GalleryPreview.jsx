import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { GALLERY } from "@/data/gallery";

export default function GalleryPreview() {
  // Show first 5 store photos as a teaser leading to /gallery
  const items = GALLERY.slice(0, 5);
  return (
    <section
      data-testid="gallery-preview-section"
      className="relative bg-cream py-28 md:py-40"
    >
      <div className="container-luxe">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div className="max-w-2xl">
            <span className="overline">Inside The Store</span>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.02] tracking-[-0.015em]">
              A quiet luxury,<br />
              <span className="italic text-burgundy">on display</span>.
            </h2>
            <p className="mt-6 text-charcoal-muted text-[15px] md:text-base leading-[1.75] max-w-xl">
              A curated glimpse into the counters, shelves and interiors of our Dombivli East
              flagship. All real. All ours.
            </p>
          </div>
          <Link to="/gallery" className="btn-secondary" data-testid="gallery-view-all">
            View Full Gallery
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {items.map((img, i) => (
            <Link
              to="/gallery"
              key={img.id}
              className={`img-zoom overflow-hidden rounded-[20px] border border-copper/15 shadow-premium hover:shadow-premium-hover transition-shadow duration-500 block ${
                i === 0 ? "col-span-2 md:col-span-2 md:row-span-2 aspect-square md:aspect-auto md:h-full" : "aspect-[4/5]"
              }`}
              data-testid={`gallery-tile-${i}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

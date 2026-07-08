import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { IMG } from "@/data/site";

const IMAGES = [
  { src: IMG.sweetCounter, alt: "Sweet counter with pedas and barfis", tall: true },
  { src: IMG.bengaliCounter, alt: "Bengali sweets — rasmalai and gulab jamun", tall: false },
  { src: IMG.desiCounter, alt: "Balusahi, mysore pak and desi ghee sweets", tall: false },
  { src: IMG.cakesRasmalai, alt: "Fresh cream cakes and rasmalai", tall: true },
  { src: IMG.imported, alt: "Imported chocolates and biscuits", tall: false },
];

export default function GalleryPreview() {
  return (
    <section
      data-testid="gallery-preview-section"
      className="relative bg-cream py-24 md:py-32"
    >
      <div className="container-luxe">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-2xl">
            <span className="overline">Inside The Store</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.05]">
              A quiet luxury,<br />
              <span className="italic text-burgundy">on display</span>.
            </h2>
          </div>
          <Link to="/gallery" className="btn-secondary" data-testid="gallery-view-all">
            View Full Gallery
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {IMAGES.map((img, i) => (
            <div
              key={i}
              className={`img-zoom overflow-hidden rounded-[16px] md:rounded-[20px] border border-copper/10 shadow-premium hover:shadow-premium-hover transition-shadow duration-500 ${
                img.tall ? "row-span-2 aspect-[3/5]" : "aspect-[4/5]"
              } ${i === 0 ? "col-span-2 md:col-span-2 md:row-span-2" : ""}`}
              data-testid={`gallery-tile-${i}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

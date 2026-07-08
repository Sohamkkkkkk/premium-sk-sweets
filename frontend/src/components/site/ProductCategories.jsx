import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { IMG } from "@/data/site";

const FEATURED = [
  {
    id: "signature",
    label: "Signature Specialties",
    tagline: "House Creations",
    image: IMG.sweetCounter,
  },
  {
    id: "bengali",
    label: "Bengali Sweets",
    tagline: "Rasmalai · Kala Jamun",
    image: IMG.bengaliCounter,
  },
  {
    id: "cakes",
    label: "Premium Cakes",
    tagline: "Photo · Theme · Wedding",
    image: IMG.cakesRasmalai,
  },
  {
    id: "desi",
    label: "Desi & Traditional",
    tagline: "Balusahi · Imarti · Mysore Pak",
    image: IMG.desiCounter,
  },
  {
    id: "imported-chocolate",
    label: "Imported Collection",
    tagline: "Chocolates · Biscuits · Coffee",
    image: IMG.imported,
  },
  {
    id: "beverages",
    label: "Beverages",
    tagline: "Juices · Coconut Water · Soft Drinks",
    image: IMG.beverages,
  },
];

export default function ProductCategories() {
  return (
    <section
      data-testid="categories-section"
      className="relative bg-ivory py-24 md:py-32"
    >
      <div className="container-luxe">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-2xl">
            <span className="overline">Explore The Store</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.05]">
              A curated house<br />
              <span className="italic text-burgundy">of flavours</span>.
            </h2>
          </div>
          <Link to="/catalogue" className="btn-primary" data-testid="categories-view-all">
            Browse Catalogue
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {FEATURED.map((c) => (
            <Link
              key={c.id}
              to={`/catalogue?category=${c.id}`}
              data-testid={`category-card-${c.id}`}
              className="group relative overflow-hidden rounded-[20px] border border-copper/10 shadow-premium hover:shadow-premium-hover transition-shadow duration-500 h-[320px] md:h-[360px]"
            >
              <div className="img-zoom absolute inset-0">
                <img
                  src={c.image}
                  alt={c.label}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-7 flex items-end justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold-light">
                    {c.tagline}
                  </div>
                  <div className="font-serif text-cream text-2xl md:text-3xl mt-1.5">
                    {c.label}
                  </div>
                </div>
                <span className="h-11 w-11 rounded-full bg-cream/95 text-burgundy inline-flex items-center justify-center group-hover:bg-gold-light group-hover:scale-105 transition-all">
                  <ArrowUpRight className="h-5 w-5" strokeWidth={1.75} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

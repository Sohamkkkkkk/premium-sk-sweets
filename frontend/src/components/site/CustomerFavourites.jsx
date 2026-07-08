import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { CUSTOMER_FAVOURITES } from "@/data/products";

export default function CustomerFavourites() {
  return (
    <section
      data-testid="customer-favourites-section"
      className="relative bg-cream py-24 md:py-32"
    >
      <div className="container-luxe">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-12">
          <div className="max-w-2xl">
            <span className="overline">Customer Favourites</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.05]">
              Something for<br />
              <span className="italic text-burgundy">every moment</span>.
            </h2>
          </div>
          <Link
            to="/catalogue"
            className="btn-secondary self-start md:self-end"
            data-testid="favourites-view-all"
          >
            View Full Catalogue
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6">
          {CUSTOMER_FAVOURITES.map((c) => (
            <Link
              key={c.id}
              to={`/catalogue?category=${c.id}`}
              data-testid={`favourite-card-${c.id}`}
              className="group relative overflow-hidden rounded-[20px] border border-copper/10 bg-white shadow-premium hover:shadow-premium-hover transition-shadow duration-500"
            >
              <div className="img-zoom aspect-[4/5]">
                <img
                  src={c.image}
                  alt={c.label}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 bg-gradient-to-t from-black/75 via-black/25 to-transparent">
                <h3 className="font-serif text-cream text-xl md:text-[22px] leading-tight">
                  {c.label}
                </h3>
                <p className="mt-1 text-cream/80 text-xs md:text-[13px] leading-snug line-clamp-2">
                  {c.copy}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

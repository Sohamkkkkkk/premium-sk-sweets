import { Link } from "react-router-dom";
import { ArrowRight, Utensils } from "lucide-react";
import { FAST_FOOD_MENU } from "@/data/products";
import { PIMG, SITE, waLink } from "@/data/site";

export default function FastFoodSection() {
  return (
    <section
      data-testid="fast-food-section"
      className="relative bg-ivory py-28 md:py-40"
    >
      <div className="container-luxe">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
          {/* Left visual */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="img-zoom aspect-[4/5] rounded-[24px] overflow-hidden shadow-premium border border-copper/15">
                <img
                  src={PIMG.fastFood}
                  alt="Freshly prepared South Indian fast food platter"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -top-5 -right-5 hidden md:flex items-center gap-2 bg-burgundy text-cream px-5 py-3 rounded-full shadow-premium-hover border border-gold/25">
                <Utensils className="h-4 w-4 text-gold-light" strokeWidth={1.5} />
                <span className="text-[11px] tracking-[0.28em] uppercase font-medium">
                  Hot & Fresh
                </span>
              </div>
              {/* Second decorative image */}
              <div className="absolute -bottom-10 -right-4 md:-right-8 hidden md:block w-40 lg:w-56">
                <div className="img-zoom rounded-[20px] overflow-hidden aspect-square border border-copper/15 shadow-premium">
                  <img src={PIMG.samosa} alt="Signature samosa" loading="lazy" className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
          </div>

          {/* Menu */}
          <div className="lg:col-span-7">
            <span className="overline">The Fast Food Counter</span>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.02] tracking-[-0.015em]">
              Hot dosas.<br />
              <span className="italic text-burgundy">Honest flavours</span>.
            </h2>
            <p className="mt-6 text-[15px] md:text-lg text-charcoal-muted leading-[1.75] max-w-xl">
              Freshly prepared South Indian classics, house-recipe sandwiches and our
              legendary signature samosa — served all day, every day.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
              {FAST_FOOD_MENU.map((group) => (
                <div key={group.heading} data-testid={`ff-group-${group.heading.toLowerCase()}`}>
                  <h3 className="font-serif text-2xl text-burgundy border-b border-copper/25 pb-3">
                    {group.heading}
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {group.items.map((i) => (
                      <li key={i} className="flex items-start gap-3 text-[15px] text-charcoal/85">
                        <span className="mt-[9px] h-1 w-1 rounded-full bg-gold" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-14 flex flex-wrap gap-3">
              <a
                href={waLink("Hi SK Sweets, I would like to place a fast food order.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                data-testid="ff-cta-whatsapp"
              >
                Order on WhatsApp
              </a>
              <a
                href={SITE.swiggy}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-swiggy"
                data-testid="ff-cta-swiggy"
              >
                Order on Swiggy
              </a>
              <Link to="/catalogue?category=fast-food" className="btn-secondary" data-testid="ff-view-menu">
                View Full Menu
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

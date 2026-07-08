import { Link } from "react-router-dom";
import { Cake, Gift, Users, PartyPopper, Sparkles, Boxes } from "lucide-react";
import { PIMG, SITE, waLink, telLink } from "@/data/site";

const SERVICES = [
  { icon: Cake, label: "Birthday Cakes" },
  { icon: Sparkles, label: "Photo Cakes" },
  { icon: PartyPopper, label: "Theme Cakes" },
  { icon: Users, label: "Wedding Orders" },
  { icon: Gift, label: "Corporate Gifting" },
  { icon: Boxes, label: "Bulk Sweet Orders" },
];

export default function CelebrationOrders() {
  return (
    <section
      data-testid="celebration-section"
      className="relative py-28 md:py-40 overflow-hidden bg-burgundy text-cream"
    >
      {/* Decorative premium cake image */}
      <img
        src={PIMG.celebrationCake}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-luminosity"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-burgundy/90 via-burgundy/95 to-burgundy" />
      <div className="absolute inset-0 bg-noise opacity-15" />

      <div className="container-luxe relative">
        <div className="max-w-3xl">
          <span className="overline text-gold-light">Celebration Orders</span>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.02] text-cream tracking-[-0.015em]">
            Plan your celebration<br />
            with <span className="italic text-gold-light">SK Sweets</span>.
          </h2>
          <p className="mt-7 text-lg text-cream/80 leading-[1.75]">
            Weddings, birthdays, anniversaries, corporate hampers and festival orders —
            our celebration desk designs every detail with the care your special day deserves.
          </p>
        </div>

        <ul className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {SERVICES.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="group rounded-[20px] border border-gold/25 bg-cream/5 backdrop-blur-sm p-6 md:p-7 hover:bg-cream/10 hover:-translate-y-1 transition-all duration-500"
              data-testid={`celebration-service-${label.toLowerCase().replace(/\s/g, "-")}`}
            >
              <Icon className="h-6 w-6 text-gold-light" strokeWidth={1.5} />
              <div className="mt-8 font-serif text-cream text-xl leading-tight">
                {label}
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-16 flex flex-wrap gap-3">
          <a
            href={waLink("Hi SK Sweets, I would like to plan a celebration order.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            data-testid="celebration-cta-whatsapp"
          >
            Contact on WhatsApp
          </a>
          <a
            href={SITE.swiggy}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-swiggy"
            data-testid="celebration-cta-swiggy"
          >
            Order on Swiggy
          </a>
          <a
            href={telLink()}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-light/60 text-cream px-7 py-3 text-sm font-medium tracking-wide bg-transparent hover:bg-cream hover:text-burgundy transition-all duration-300"
            data-testid="celebration-cta-call"
          >
            Call {SITE.phoneDisplay}
          </a>
          <Link
            to="/celebrations"
            className="inline-flex items-center justify-center gap-2 rounded-full text-gold-light hover:text-cream px-4 py-3 text-sm font-medium tracking-wide transition-colors"
            data-testid="celebration-view-all"
          >
            Explore Celebrations →
          </Link>
        </div>
      </div>
    </section>
  );
}

import SiteLayout from "@/components/site/SiteLayout";
import CelebrationOrders from "@/components/site/CelebrationOrders";
import { Cake, PartyPopper, Users } from "lucide-react";
import { waLink, telLink, SITE } from "@/data/site";

const OCCASIONS = [
  {
    icon: Cake,
    title: "Birthdays & Anniversaries",
    body: "Photo cakes, theme cakes and celebration hampers — designed around the person you love.",
  },
  {
    icon: PartyPopper,
    title: "Festivals",
    body: "Diwali, Raksha Bandhan, Holi and beyond — traditional hampers made for gifting and family gatherings.",
  },
  {
    icon: Users,
    title: "Weddings & Corporate",
    body: "Bulk sweet trays, wedding hampers and corporate gifting — planned end-to-end with our celebration desk.",
  },
];

export default function Celebrations() {
  return (
    <SiteLayout>
      <section className="bg-cream pt-40 md:pt-44 pb-8">
        <div className="container-luxe max-w-3xl">
          <span className="overline">Celebration Orders</span>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-charcoal">
            The occasion,<br />
            <span className="italic text-burgundy">designed by us</span>.
          </h1>
          <p className="mt-6 text-lg text-charcoal/80 leading-relaxed">
            From an intimate photo cake to a 500-guest wedding hamper — our celebration
            desk plans every detail with the care your day deserves.
          </p>
        </div>
      </section>

      <section className="bg-cream pb-24">
        <div className="container-luxe grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {OCCASIONS.map((o, i) => (
            <article
              key={o.title}
              data-testid={`occasion-card-${i}`}
              className="bg-ivory border border-copper/10 rounded-[20px] p-8 md:p-10 shadow-premium hover:shadow-premium-hover transition-shadow"
            >
              <o.icon className="h-6 w-6 text-burgundy" strokeWidth={1.5} />
              <h3 className="mt-6 font-serif text-2xl md:text-[28px] text-charcoal">
                {o.title}
              </h3>
              <p className="mt-3 text-[15px] text-charcoal-muted leading-relaxed">
                {o.body}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <a
                  href={waLink(`Hi SK Sweets, I would like to plan a ${o.title.toLowerCase()} order.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                  data-testid={`occasion-cta-${i}`}
                >
                  WhatsApp
                </a>
                <a href={telLink()} className="btn-secondary">
                  Call {SITE.phoneDisplay}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CelebrationOrders />
    </SiteLayout>
  );
}

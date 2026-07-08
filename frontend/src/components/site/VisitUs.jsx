import { MapPin, Clock, Phone, MessageCircle, ArrowUpRight } from "lucide-react";
import { IMG, SITE, waLink, telLink } from "@/data/site";

export default function VisitUs() {
  return (
    <section
      id="visit"
      data-testid="visit-us-section"
      className="relative bg-cream py-24 md:py-32"
    >
      <div className="container-luxe">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
          {/* Visual */}
          <div className="lg:col-span-6">
            <div className="img-zoom relative aspect-[4/5] rounded-[20px] overflow-hidden shadow-premium border border-copper/10 h-full min-h-[380px]">
              <img
                src={IMG.desiCounter}
                alt="SK Sweets Food Court desi sweets counter and dry fruit shelves"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-cream">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold-light">
                    Dombivli East
                  </div>
                  <div className="font-serif text-2xl md:text-3xl mt-1">
                    Mahavir Pride, Shop 32
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-6">
            <span className="overline">Visit Our Store</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.05]">
              Walk in.<br />
              <span className="italic text-burgundy">You&rsquo;re family</span>.
            </h2>
            <div className="mt-8 space-y-5">
              <InfoLine icon={MapPin} label="Address">
                {SITE.address.line1}, {SITE.address.line2}
                <br />
                {SITE.address.line3}
              </InfoLine>
              <InfoLine icon={Clock} label="Open Hours">
                {SITE.hours} — {SITE.hoursLabel}
              </InfoLine>
              <InfoLine icon={Phone} label="Phone">
                <a href={telLink()} className="hover:text-burgundy transition-colors">
                  {SITE.phoneDisplay}
                </a>
              </InfoLine>
              <InfoLine icon={MessageCircle} label="WhatsApp">
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-burgundy transition-colors"
                >
                  {SITE.whatsappDisplay}
                </a>
              </InfoLine>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={SITE.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                data-testid="visit-cta-directions"
              >
                Get Directions
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                data-testid="visit-cta-whatsapp"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoLine({ icon: Icon, label, children }) {
  return (
    <div className="flex gap-5 items-start">
      <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-copper/30 text-burgundy bg-white/70 backdrop-blur">
        <Icon className="h-5 w-5" strokeWidth={1.5} />
      </span>
      <div>
        <div className="text-[10px] uppercase tracking-[0.28em] text-copper font-medium">
          {label}
        </div>
        <div className="mt-1 text-[15px] md:text-base text-charcoal leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

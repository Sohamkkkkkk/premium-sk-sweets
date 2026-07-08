import { Link } from "react-router-dom";
import { Instagram, MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { IMG, NAV, SITE, waLink, telLink } from "@/data/site";

export default function Footer() {
  return (
    <footer className="relative bg-burgundy text-cream/90 mt-24" data-testid="site-footer">
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
      <div className="container-luxe relative pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-4">
              <img
                src={IMG.logoMark}
                alt="SK Sweets Food Court"
                className="h-14 w-14 object-contain"
              />
              <div>
                <div className="font-serif text-2xl text-cream">SK Sweets</div>
                <div className="text-[10px] uppercase tracking-[0.32em] text-gold-light">
                  Food Court · Since 1999
                </div>
              </div>
            </div>
            <p className="mt-6 text-cream/70 leading-relaxed text-[15px] max-w-sm">
              Crafting sweet memories in Dombivli East for over two decades — handcrafted
              sweets, celebration cakes, fast food and imported delicacies under one roof.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-instagram"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold-light hover:bg-gold hover:text-burgundy transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-whatsapp"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold-light hover:bg-gold hover:text-burgundy transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a
                href={telLink()}
                data-testid="footer-phone"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold-light hover:bg-gold hover:text-burgundy transition-all"
                aria-label="Call"
              >
                <Phone className="h-5 w-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-gold-light font-sans font-medium mb-6">
              Explore
            </h4>
            <ul className="space-y-3">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    className="text-cream/80 hover:text-gold-light text-[15px] transition-colors"
                    data-testid={`footer-link-${n.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit */}
          <div className="md:col-span-5">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-gold-light font-sans font-medium mb-6">
              Visit Us
            </h4>
            <ul className="space-y-4 text-[15px]">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-gold-light shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-cream/80 leading-relaxed">
                  {SITE.address.line1}, {SITE.address.line2}, {SITE.address.line3}
                </span>
              </li>
              <li className="flex gap-3">
                <Clock className="h-5 w-5 text-gold-light shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-cream/80">
                  {SITE.hours} — {SITE.hoursLabel}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-gold-light shrink-0 mt-0.5" strokeWidth={1.5} />
                <div className="text-cream/80 leading-relaxed">
                  <a href={telLink()} className="hover:text-gold-light block">
                    {SITE.phoneDisplay}
                  </a>
                  <a
                    href={waLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold-light block"
                  >
                    WhatsApp · {SITE.whatsappDisplay}
                  </a>
                </div>
              </li>
            </ul>
            <a
              href={SITE.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-gold-light hover:text-cream transition-colors text-sm tracking-wide"
              data-testid="footer-directions"
            >
              Get Directions →
            </a>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-gold/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/50">
          <div>© {new Date().getFullYear()} SK Sweets Food Court. All rights reserved.</div>
          <div className="tracking-wide">Crafting Sweet Memories Since 1999</div>
        </div>
      </div>
    </footer>
  );
}

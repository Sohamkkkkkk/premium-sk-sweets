import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { IMG, NAV, SITE, waLink } from "@/data/site";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // On non-home pages, always solid
  const solid = scrolled || !isHome;

  return (
    <>
      <header
        data-testid="site-navigation"
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solid ? "nav-solid" : "nav-transparent"
        }`}
      >
        <div className="container-luxe flex items-center justify-between py-3.5 md:py-4">
          <Link
            to="/"
            data-testid="nav-logo"
            className="flex items-center gap-3 group"
            aria-label="SK Sweets Food Court Home"
          >
            <img
              src={IMG.logoMark}
              alt="SK Sweets Food Court crest logo"
              className="h-11 w-11 md:h-12 md:w-12 object-contain drop-shadow"
              loading="eager"
            />
            <span className="hidden sm:flex flex-col leading-tight">
              <span
                className={`font-serif text-lg md:text-xl tracking-tight transition-colors duration-500 ${
                  solid ? "text-burgundy" : "text-cream"
                }`}
              >
                SK Sweets
              </span>
              <span
                className={`text-[10px] uppercase tracking-[0.28em] font-medium transition-colors duration-500 ${
                  solid ? "text-copper" : "text-gold-light"
                }`}
              >
                Food Court · Since 1999
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Primary"
            className="hidden lg:flex items-center gap-1"
          >
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                data-testid={`nav-link-${n.label.toLowerCase().replace(/\s/g, "-")}`}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm tracking-wide font-medium transition-colors duration-300 ${
                    solid
                      ? isActive
                        ? "text-burgundy"
                        : "text-charcoal/80 hover:text-burgundy"
                      : isActive
                      ? "text-gold-light"
                      : "text-cream/85 hover:text-cream"
                  }`
                }
              >
                {({ isActive }) => (
                  <span className="relative">
                    {n.label}
                    <span
                      className={`absolute left-1/2 -bottom-1 h-[1.5px] transition-all duration-300 -translate-x-1/2 ${
                        isActive
                          ? solid
                            ? "w-6 bg-burgundy"
                            : "w-6 bg-gold"
                          : "w-0 bg-transparent"
                      }`}
                    />
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="nav-cta-whatsapp"
              className={`hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 ${
                solid
                  ? "bg-burgundy text-cream hover:bg-burgundy-muted"
                  : "bg-cream text-burgundy hover:bg-white"
              }`}
            >
              <Phone className="h-4 w-4" strokeWidth={1.5} />
              Order Now
            </a>
            <button
              type="button"
              data-testid="nav-mobile-toggle"
              className={`lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors ${
                solid
                  ? "text-burgundy hover:bg-ivory"
                  : "text-cream hover:bg-white/10"
              }`}
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          className="absolute inset-0 bg-charcoal/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <aside
          data-testid="mobile-drawer"
          className={`absolute right-0 top-0 h-full w-[86%] max-w-sm bg-cream shadow-premium-hover transition-transform duration-500 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-ivory">
            <div className="flex items-center gap-3">
              <img src={IMG.logoMark} alt="" className="h-10 w-10 object-contain" />
              <div className="leading-tight">
                <div className="font-serif text-burgundy text-lg">SK Sweets</div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-copper">
                  Since 1999
                </div>
              </div>
            </div>
            <button
              type="button"
              data-testid="mobile-drawer-close"
              onClick={() => setOpen(false)}
              className="h-11 w-11 inline-flex items-center justify-center rounded-full text-burgundy hover:bg-ivory"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" strokeWidth={1.5} />
            </button>
          </div>
          <nav className="px-6 py-8 flex flex-col gap-1">
            {NAV.map((n, i) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                data-testid={`mobile-nav-${n.label.toLowerCase().replace(/\s/g, "-")}`}
                className={({ isActive }) =>
                  `font-serif text-3xl py-2 border-b border-copper/10 transition-colors ${
                    isActive ? "text-burgundy" : "text-charcoal hover:text-burgundy"
                  }`
                }
                style={{ animationDelay: `${i * 40}ms` }}
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
          <div className="px-6 pt-4 pb-8 space-y-3">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full justify-center"
              data-testid="mobile-cta-whatsapp"
            >
              Order on WhatsApp
            </a>
            <a
              href={SITE.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full justify-center"
              data-testid="mobile-cta-directions"
            >
              Get Directions
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}

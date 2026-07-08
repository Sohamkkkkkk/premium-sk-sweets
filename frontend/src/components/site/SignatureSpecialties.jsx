import { ArrowUpRight } from "lucide-react";
import { SIGNATURES, KAJU_KATLI_VARIANTS } from "@/data/products";
import { waLink } from "@/data/site";

export default function SignatureSpecialties() {
  const [hero, ...rest] = SIGNATURES;

  return (
    <section
      id="signature"
      data-testid="signature-section"
      className="relative bg-ivory py-24 md:py-32"
    >
      <div className="container-luxe">
        <header className="max-w-3xl">
          <span className="overline">Signature Specialties</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.05]">
            Handcrafted with<br />
            <span className="italic text-burgundy">quiet perfection</span>.
          </h2>
          <p className="mt-6 text-lg text-charcoal-muted leading-relaxed max-w-2xl">
            Six creations that define the SK Sweets house style — refined recipes,
            pure ingredients, and a taste that has been remembered across generations.
          </p>
        </header>

        {/* Bento layout */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[minmax(0,1fr)]">
          {/* Hero card */}
          <SignatureCard item={hero} large className="md:col-span-4 md:row-span-2 min-h-[420px] md:min-h-[560px]" />
          {rest.slice(0, 2).map((item) => (
            <SignatureCard key={item.id} item={item} className="md:col-span-2 min-h-[260px]" />
          ))}
          {rest.slice(2).map((item) => (
            <SignatureCard key={item.id} item={item} className="md:col-span-2 min-h-[320px]" />
          ))}
        </div>

        {/* Kaju katli chips */}
        <div className="mt-16 card-luxe p-8 md:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="overline">Premium Collection</span>
              <h3 className="mt-3 font-serif text-3xl md:text-4xl text-charcoal">
                The Kaju Katli
                <span className="italic text-burgundy"> Atelier</span>
              </h3>
              <p className="mt-4 text-charcoal-muted text-[15px] leading-relaxed">
                Our house cashew fudge, layered by hand and finished in silver varq.
                Choose from six carefully curated flavours.
              </p>
            </div>
            <div className="lg:col-span-7">
              <ul className="flex flex-wrap gap-2.5" data-testid="kaju-katli-variants">
                {KAJU_KATLI_VARIANTS.map((f) => (
                  <li
                    key={f}
                    className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-cream px-4 py-2 text-sm font-medium text-charcoal hover:border-burgundy hover:text-burgundy transition-colors"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={waLink("Hi SK Sweets, I would like to order the Kaju Katli collection.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-6"
                data-testid="kaju-katli-cta"
              >
                Order the Collection
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SignatureCard({ item, large = false, className = "" }) {
  return (
    <article
      data-testid={`signature-card-${item.id}`}
      className={`group relative overflow-hidden rounded-[20px] border border-copper/10 bg-white shadow-premium hover:shadow-premium-hover transition-shadow duration-500 flex ${className}`}
    >
      <div className="img-zoom absolute inset-0">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" aria-hidden="true" />
      <div className="relative z-10 mt-auto p-6 md:p-8 w-full">
        <div className="text-[10px] tracking-[0.28em] uppercase text-gold-light">
          {item.tagline}
        </div>
        <h3 className={`mt-2 font-serif text-cream leading-tight ${large ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"}`}>
          {item.name}
        </h3>
        <p className={`mt-3 text-cream/85 leading-relaxed max-w-xl ${large ? "text-base md:text-lg" : "text-sm"}`}>
          {item.description}
        </p>
        <a
          href={waLink(`Hi SK Sweets, I would like to order ${item.name}.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-cream text-burgundy px-5 py-2.5 text-sm font-medium tracking-wide hover:bg-white hover:-translate-y-0.5 transition-all shadow-premium"
          data-testid={`signature-order-${item.id}`}
        >
          Order on WhatsApp
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
        </a>
      </div>
    </article>
  );
}

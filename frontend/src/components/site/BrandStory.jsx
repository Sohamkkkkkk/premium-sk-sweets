import { PIMG } from "@/data/site";

const STATS = [
  { value: "25+", label: "Years of Trust" },
  { value: "10,000+", label: "Happy Customers" },
  { value: "150+", label: "Premium Products" },
];

export default function BrandStory() {
  return (
    <section
      id="story"
      data-testid="brand-story-section"
      className="relative bg-cream py-28 md:py-40"
    >
      <div className="container-luxe">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-24 items-center">
          {/* Text */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <span className="overline">Our Story</span>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.02] text-charcoal tracking-[-0.015em]">
              Serving Happiness<br />
              <span className="italic text-burgundy">Since 1999</span>
            </h2>
            <div className="mt-7 gold-hairline max-w-[220px]" />
            <div className="mt-9 space-y-6 text-lg text-charcoal/80 leading-[1.75] font-light">
              <p>
                For over two decades, SK Sweets Food Court has been bringing together
                authentic Indian flavours, handcrafted sweets, celebration cakes and
                delicious fast food under one roof.
              </p>
              <p>
                Every sweet is prepared with care. Every celebration is treated as special.
                Every customer is welcomed like family.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative">
              <div className="img-zoom rounded-[24px] overflow-hidden aspect-[4/5] border border-copper/15 shadow-premium">
                <img
                  src={PIMG.brandStoryHero}
                  alt="Traditional Indian mithai — handcrafted with care"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 hidden md:block">
                <div className="bg-burgundy text-cream px-7 py-6 rounded-[20px] shadow-premium-hover border border-gold/25">
                  <div className="text-[10px] tracking-[0.32em] uppercase text-gold-light">
                    Established
                  </div>
                  <div className="font-serif text-5xl mt-2 tracking-tight">1999</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 md:mt-28 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="border-t border-copper/25 pt-7 flex flex-col items-start"
              data-testid={`stat-${s.label.toLowerCase().replace(/\s/g, "-")}`}
            >
              <div className="font-serif text-5xl md:text-6xl text-burgundy leading-none tracking-[-0.02em]">
                {s.value}
              </div>
              <div className="mt-4 text-charcoal/70 text-[11px] tracking-[0.28em] uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

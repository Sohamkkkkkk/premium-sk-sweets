import { IMG } from "@/data/site";

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
      className="relative bg-cream py-24 md:py-32"
    >
      <div className="container-luxe">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <span className="overline">Our Story</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-charcoal">
              Serving Happiness<br />
              <span className="italic text-burgundy">Since 1999</span>
            </h2>
            <div className="mt-6 gold-hairline max-w-[220px]" />
            <div className="mt-8 space-y-5 text-lg text-charcoal/80 leading-relaxed font-light">
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
              <div className="img-zoom rounded-[20px] overflow-hidden aspect-[4/5] border border-ivory shadow-premium">
                <img
                  src={IMG.logoWall}
                  alt="SK Sweets Food Court signature marble and gold logo installation inside the store"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden md:block">
                <div className="bg-burgundy text-cream px-6 py-5 rounded-[16px] shadow-premium-hover">
                  <div className="text-[10px] tracking-[0.28em] uppercase text-gold-light">
                    Established
                  </div>
                  <div className="font-serif text-4xl mt-1">1999</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="border-t border-copper/20 pt-6 flex flex-col items-start"
              data-testid={`stat-${s.label.toLowerCase().replace(/\s/g, "-")}`}
            >
              <div className="font-serif text-5xl md:text-6xl text-burgundy leading-none tracking-tight">
                {s.value}
              </div>
              <div className="mt-3 text-charcoal/70 text-sm tracking-wide uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

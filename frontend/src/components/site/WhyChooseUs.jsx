import { WHY_US } from "@/data/products";

export default function WhyChooseUs() {
  return (
    <section
      data-testid="why-us-section"
      className="relative bg-ivory py-24 md:py-32"
    >
      <div className="container-luxe">
        <div className="max-w-2xl">
          <span className="overline">Why Choose SK Sweets</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.05]">
            Trust, taste and<br />
            <span className="italic text-burgundy">tradition</span>.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {WHY_US.map((w, i) => (
            <article
              key={w.title}
              data-testid={`why-us-card-${i}`}
              className="group bg-cream border border-copper/10 rounded-[20px] p-8 md:p-10 shadow-premium hover:shadow-premium-hover hover:-translate-y-0.5 transition-all duration-500"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-gold text-2xl leading-none tracking-tight">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px w-8 bg-gold/60" />
              </div>
              <h3 className="mt-6 font-serif text-2xl md:text-[28px] text-charcoal leading-tight">
                {w.title}
              </h3>
              <p className="mt-3 text-charcoal-muted leading-relaxed text-[15px]">
                {w.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

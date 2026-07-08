import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/products";
import { SITE } from "@/data/site";

export default function Testimonials() {
  return (
    <section
      data-testid="testimonials-section"
      className="relative bg-cream py-24 md:py-32"
    >
      <div className="container-luxe">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-2xl">
            <span className="overline">From Our Customers</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.05]">
              Loved across<br />
              <span className="italic text-burgundy">Dombivli</span>.
            </h2>
          </div>
          <a
            href={SITE.googleBusiness}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            data-testid="testimonials-google-cta"
          >
            Read on Google
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={i}
              data-testid={`testimonial-card-${i}`}
              className="relative bg-ivory border border-copper/10 rounded-[20px] p-8 md:p-9 shadow-premium hover:shadow-premium-hover transition-shadow duration-500"
            >
              <Quote className="h-8 w-8 text-gold/70 mb-6" strokeWidth={1.25} />
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-gold text-gold" strokeWidth={1} />
                ))}
              </div>
              <p className="font-serif text-xl md:text-[22px] text-charcoal leading-snug">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 pt-6 border-t border-copper/15">
                <div className="text-charcoal font-medium tracking-wide">{t.name}</div>
                <div className="text-[13px] text-charcoal-muted mt-0.5">{t.role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

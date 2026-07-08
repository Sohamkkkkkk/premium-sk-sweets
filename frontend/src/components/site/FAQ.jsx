import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/data/products";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      data-testid="faq-section"
      className="relative bg-ivory py-24 md:py-32"
    >
      <div className="container-luxe">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="overline">Frequently Asked</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.05]">
              Answered<br />
              <span className="italic text-burgundy">honestly</span>.
            </h2>
            <p className="mt-6 text-charcoal-muted text-[15px] leading-relaxed max-w-md">
              Everything you need to know about our sweets, cakes and celebration orders.
              Still have questions? Message us on WhatsApp — we love to help.
            </p>
          </div>
          <div className="lg:col-span-8">
            <ul className="divide-y divide-copper/15 border-y border-copper/15">
              {FAQS.map((f, i) => {
                const isOpen = open === i;
                return (
                  <li key={f.q}>
                    <button
                      type="button"
                      data-testid={`faq-toggle-${i}`}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="w-full flex items-start justify-between gap-6 py-6 md:py-7 text-left group"
                      aria-expanded={isOpen}
                    >
                      <span
                        className={`font-serif text-xl md:text-2xl leading-snug transition-colors ${
                          isOpen ? "text-burgundy" : "text-charcoal group-hover:text-burgundy"
                        }`}
                      >
                        {f.q}
                      </span>
                      <span
                        className={`shrink-0 h-9 w-9 rounded-full border flex items-center justify-center transition-colors ${
                          isOpen
                            ? "bg-burgundy border-burgundy text-cream"
                            : "border-copper/30 text-burgundy group-hover:border-burgundy"
                        }`}
                      >
                        {isOpen ? (
                          <Minus className="h-4 w-4" strokeWidth={1.5} />
                        ) : (
                          <Plus className="h-4 w-4" strokeWidth={1.5} />
                        )}
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-500 ease-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100 pb-7" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-[15px] md:text-base text-charcoal/80 leading-relaxed pr-12 max-w-3xl">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

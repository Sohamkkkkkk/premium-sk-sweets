import SiteLayout from "@/components/site/SiteLayout";
import { IMG } from "@/data/site";
import { Award, Heart, Leaf, Sparkles } from "lucide-react";

const VALUES = [
  { icon: Award, title: "Legacy", body: "Two decades of family-run tradition — every recipe passed down and perfected." },
  { icon: Heart, title: "Warmth", body: "We treat every customer like family, whether it is a single peda or a wedding order." },
  { icon: Leaf, title: "Purity", body: "Only pure ghee, fresh milk, and handpicked dry fruits — no shortcuts." },
  { icon: Sparkles, title: "Craft", body: "Every sweet is prepared by hand, in small batches, freshly made every day." },
];

export default function About() {
  return (
    <SiteLayout>
      <section className="relative bg-cream pt-40 md:pt-44 pb-24 md:pb-32">
        <div className="container-luxe">
          <div className="max-w-3xl">
            <span className="overline">About SK Sweets</span>
            <h1 className="mt-4 font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-charcoal">
              A family kitchen,<br />
              <span className="italic text-burgundy">a Dombivli institution</span>.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-charcoal/80 font-light leading-relaxed">
              What started as a small counter in 1999 has grown into one of Dombivli
              East&rsquo;s most-loved sweet destinations — a food court that unites
              handcrafted Indian sweets, celebration cakes, premium fast food, and a
              curated imported collection under one roof.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6 img-zoom rounded-[20px] overflow-hidden border border-copper/10 shadow-premium aspect-[4/5]">
              <img src={IMG.logoWall} alt="SK Sweets Food Court signature wall installation" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="lg:col-span-6 space-y-5 text-[15px] md:text-lg text-charcoal/80 leading-relaxed">
              <p>
                The store you walk into today is a reflection of everything the family
                has believed in since day one — quality that never compromises, warmth
                that never fades, and a commitment to the neighbourhood that has
                grown with us.
              </p>
              <p>
                From Diwali hampers and photo cakes to a quick masala dosa on a
                weekday evening, SK Sweets Food Court is a place where every visit is
                treated as an occasion.
              </p>
              <p className="font-serif italic text-2xl md:text-3xl text-burgundy leading-snug pt-4">
                &ldquo;We do not just sell sweets — we send memories home.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-24 md:py-32">
        <div className="container-luxe">
          <div className="max-w-2xl">
            <span className="overline">What We Stand For</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-charcoal leading-tight">
              Four values.<br />
              <span className="italic text-burgundy">One promise</span>.
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {VALUES.map((v, i) => (
              <article key={v.title} className="bg-cream border border-copper/10 rounded-[20px] p-8 shadow-premium hover:shadow-premium-hover transition-shadow" data-testid={`value-card-${i}`}>
                <v.icon className="h-6 w-6 text-burgundy" strokeWidth={1.5} />
                <h3 className="mt-6 font-serif text-2xl text-charcoal">{v.title}</h3>
                <p className="mt-3 text-[15px] text-charcoal-muted leading-relaxed">{v.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

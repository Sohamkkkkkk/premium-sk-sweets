import SiteLayout from "@/components/site/SiteLayout";
import FastFoodSection from "@/components/site/FastFoodSection";

export default function FastFood() {
  return (
    <SiteLayout>
      <section className="bg-cream pt-40 md:pt-44 pb-8">
        <div className="container-luxe max-w-3xl">
          <span className="overline">Fast Food Counter</span>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-charcoal">
            Hot dosas.<br />
            <span className="italic text-burgundy">Everyday favourites</span>.
          </h1>
          <p className="mt-6 text-lg text-charcoal/80 leading-relaxed">
            South Indian classics, house-recipe sandwiches, chaats and our legendary
            signature samosa — served from 8:00 AM to 10:30 PM, every single day.
          </p>
        </div>
      </section>
      <FastFoodSection />
    </SiteLayout>
  );
}

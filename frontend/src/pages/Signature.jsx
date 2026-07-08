import SiteLayout from "@/components/site/SiteLayout";
import SignatureSpecialties from "@/components/site/SignatureSpecialties";

export default function Signature() {
  return (
    <SiteLayout>
      <section className="bg-cream pt-40 md:pt-44 pb-6">
        <div className="container-luxe max-w-3xl">
          <span className="overline">Signature Specialties</span>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-charcoal">
            Our six<br />
            <span className="italic text-burgundy">house creations</span>.
          </h1>
          <p className="mt-6 text-lg text-charcoal/80 leading-relaxed">
            Recipes we have refined for over two decades — the sweets our customers ask
            for by name.
          </p>
        </div>
      </section>
      <SignatureSpecialties />
    </SiteLayout>
  );
}

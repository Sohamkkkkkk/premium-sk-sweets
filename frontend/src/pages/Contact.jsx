import SiteLayout from "@/components/site/SiteLayout";
import VisitUs from "@/components/site/VisitUs";
import FAQ from "@/components/site/FAQ";

export default function Contact() {
  return (
    <SiteLayout>
      <section className="bg-cream pt-40 md:pt-44 pb-6">
        <div className="container-luxe max-w-3xl">
          <span className="overline">Contact</span>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-charcoal">
            We&rsquo;d love<br />
            <span className="italic text-burgundy">to hear from you</span>.
          </h1>
          <p className="mt-6 text-lg text-charcoal/80 leading-relaxed">
            Message us on WhatsApp, give us a call, or drop by the store — we&rsquo;re
            open every day from 8:00 AM to 10:30 PM.
          </p>
        </div>
      </section>
      <VisitUs />
      <FAQ />
    </SiteLayout>
  );
}

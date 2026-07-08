import SiteLayout from "@/components/site/SiteLayout";
import Testimonials from "@/components/site/Testimonials";
import { SITE } from "@/data/site";

export default function Reviews() {
  return (
    <SiteLayout>
      <section className="bg-cream pt-40 md:pt-44 pb-6">
        <div className="container-luxe max-w-3xl">
          <span className="overline">Customer Reviews</span>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-charcoal">
            25 years of<br />
            <span className="italic text-burgundy">real reviews</span>.
          </h1>
          <p className="mt-6 text-lg text-charcoal/80 leading-relaxed">
            A curated collection of what our customers say — read even more on our
            Google business profile.
          </p>
          <div className="mt-8 flex items-center gap-6">
            <div>
              <div className="font-serif text-5xl text-burgundy leading-none">4.8</div>
              <div className="text-xs uppercase tracking-[0.24em] text-copper mt-2">
                Google Rating
              </div>
            </div>
            <a
              href={SITE.googleBusiness}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              data-testid="reviews-google-cta"
            >
              Read on Google
            </a>
          </div>
        </div>
      </section>
      <Testimonials />
    </SiteLayout>
  );
}

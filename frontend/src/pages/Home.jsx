import SiteLayout from "@/components/site/SiteLayout";
import Hero from "@/components/site/Hero";
import BrandStory from "@/components/site/BrandStory";
import SignatureSpecialties from "@/components/site/SignatureSpecialties";
import CustomerFavourites from "@/components/site/CustomerFavourites";
import ProductCategories from "@/components/site/ProductCategories";
import FastFoodSection from "@/components/site/FastFoodSection";
import CelebrationOrders from "@/components/site/CelebrationOrders";
import GalleryPreview from "@/components/site/GalleryPreview";
import WhyChooseUs from "@/components/site/WhyChooseUs";
import Testimonials from "@/components/site/Testimonials";
import FAQ from "@/components/site/FAQ";
import VisitUs from "@/components/site/VisitUs";

export default function Home() {
  return (
    <SiteLayout>
      <Hero />
      <BrandStory />
      <SignatureSpecialties />
      <CustomerFavourites />
      <ProductCategories />
      <FastFoodSection />
      <CelebrationOrders />
      <GalleryPreview />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <VisitUs />
    </SiteLayout>
  );
}

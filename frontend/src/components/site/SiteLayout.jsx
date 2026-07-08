import Navigation from "@/components/site/Navigation";
import Footer from "@/components/site/Footer";
import FloatingActions from "@/components/site/FloatingActions";
import ScrollToTop from "@/components/site/ScrollToTop";

export default function SiteLayout({ children }) {
  return (
    <div className="min-h-screen bg-cream text-charcoal antialiased">
      <ScrollToTop />
      <Navigation />
      <main>{children}</main>
      <FloatingActions />
      <Footer />
    </div>
  );
}

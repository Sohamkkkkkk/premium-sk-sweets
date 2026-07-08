import { MessageCircle, Phone } from "lucide-react";
import { SITE, waLink, telLink } from "@/data/site";

export default function FloatingActions() {
  return (
    <div
      className="fixed z-40 bottom-4 right-4 md:bottom-6 md:right-6 flex flex-col items-end gap-3"
      data-testid="floating-actions"
    >
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        data-testid="floating-whatsapp"
        className="group inline-flex items-center gap-2 rounded-full bg-whatsapp text-white pl-4 pr-5 py-3 shadow-premium-hover hover:-translate-y-0.5 transition-transform"
      >
        <MessageCircle className="h-5 w-5" strokeWidth={1.75} />
        <span className="text-sm font-medium tracking-wide hidden sm:inline">WhatsApp</span>
      </a>
      <a
        href={SITE.swiggy}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on Swiggy"
        data-testid="floating-swiggy"
        className="group inline-flex items-center gap-2 rounded-full bg-swiggy text-white pl-4 pr-5 py-3 shadow-premium-hover hover:-translate-y-0.5 transition-transform"
      >
        <span className="inline-flex h-5 w-5 items-center justify-center text-[13px] font-bold">
          S
        </span>
        <span className="text-sm font-medium tracking-wide hidden sm:inline">Swiggy</span>
      </a>
      <a
        href={telLink()}
        aria-label="Call SK Sweets"
        data-testid="floating-call"
        className="group inline-flex items-center gap-2 rounded-full bg-burgundy text-cream pl-4 pr-5 py-3 shadow-premium-hover hover:-translate-y-0.5 transition-transform"
      >
        <Phone className="h-5 w-5" strokeWidth={1.75} />
        <span className="text-sm font-medium tracking-wide hidden sm:inline">Call</span>
      </a>
    </div>
  );
}

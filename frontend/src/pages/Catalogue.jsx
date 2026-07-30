import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, ArrowUpRight, MessageCircle } from "lucide-react";
import SiteLayout from "@/components/site/SiteLayout";
import { CATEGORIES, PRODUCTS } from "@/data/products";
import { SITE, waLink } from "@/data/site";

export default function Catalogue() {
  const [params, setParams] = useSearchParams();
  const initialCat = params.get("category") || "all";
  const [active, setActive] = useState(initialCat);
  const [query, setQuery] = useState("");

  useEffect(() => {
    // sync url
    if (active === "all") params.delete("category");
    else params.set("category", active);
    setParams(params, { replace: true });
  }, [active]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const inCat = active === "all" || p.category === active;
      const matches =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q);
      return inCat && matches;
    });
  }, [active, query]);

  return (
    <SiteLayout>
      <section className="bg-cream pt-40 md:pt-44 pb-8">
        <div className="container-luxe max-w-4xl">
          <span className="overline">Product Catalogue</span>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-charcoal">
            The complete<br />
            <span className="italic text-burgundy">SK collection</span>.
          </h1>
          <p className="mt-6 text-lg text-charcoal/80 leading-relaxed">
            Browse everything we make in-house and everything we source from the world&rsquo;s
            best producers. To order, simply message us on WhatsApp — we&rsquo;ll take it from there.
          </p>

          {/* Search */}
          <div className="mt-10 relative max-w-xl">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-charcoal-muted" strokeWidth={1.5} />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search sweets, cakes, chocolates..."
              data-testid="catalogue-search"
              className="w-full h-14 rounded-full border border-copper/25 bg-white pl-14 pr-6 text-[15px] text-charcoal placeholder:text-charcoal-muted focus:outline-none focus:ring-2 focus:ring-burgundy/40 focus:border-burgundy transition-shadow"
            />
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-cream pt-4">
        <div className="container-luxe">
          <div className="flex gap-2.5 overflow-x-auto no-scrollbar pb-2 -mx-6 px-6" data-testid="catalogue-filters">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setActive(c.id)}
                data-testid={`filter-${c.id}`}
                className={`shrink-0 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium tracking-wide border transition-all duration-300 ${
                  active === c.id
                    ? "bg-burgundy text-cream border-burgundy shadow-premium"
                    : "bg-white text-charcoal border-copper/20 hover:border-burgundy hover:text-burgundy"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-cream py-12 md:py-16">
        <div className="container-luxe">
          <div className="flex items-center justify-between mb-8">
            <div className="text-sm text-charcoal-muted tracking-wide">
              Showing <span className="text-charcoal font-medium">{filtered.length}</span> {filtered.length === 1 ? "product" : "products"}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="bg-white border border-copper/10 rounded-[20px] p-12 text-center max-w-2xl mx-auto">
              <h3 className="font-serif text-2xl text-burgundy">No results yet</h3>
              <p className="mt-3 text-charcoal-muted">Try a different search or category — or message us on WhatsApp and we&rsquo;ll help.</p>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp mt-6">
                Ask on WhatsApp
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
              {filtered.map((p) => (
                <ProductCard key={p.id} p={p} />
              ))}
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}

function ProductCard({ p }) {
  const categoryLabel =
    CATEGORIES.find((c) => c.id === p.category)?.label || p.category;
  return (
    <article
      data-testid={`product-card-${p.id}`}
      className="group flex flex-col bg-white border border-copper/10 rounded-[20px] overflow-hidden shadow-premium hover:shadow-premium-hover hover:-translate-y-0.5 transition-all duration-500"
    >
      <div className="img-zoom aspect-[4/3] border-b border-copper/10">
   
 <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col grow p-5 md:p-6">
        <div className="text-[10px] uppercase tracking-[0.28em] text-copper">
          {categoryLabel}
        </div>
        <h3 className="mt-2 font-serif text-2xl text-charcoal leading-tight">
          {p.name}
        </h3>
        <p className="mt-2 text-[13.5px] text-charcoal-muted leading-relaxed grow">
          {p.desc}
        </p>
        <a
          href={waLink(`Hi SK Sweets, I would like to order ${p.name}.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center justify-between gap-2 rounded-full bg-burgundy text-cream px-5 py-2.5 text-sm font-medium tracking-wide hover:bg-burgundy-muted transition-colors"
          data-testid={`product-order-${p.id}`}
        >
          <span className="inline-flex items-center gap-2">
            <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
            Order on WhatsApp
          </span>
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
        </a>
        <a
          href={SITE.swiggy}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center justify-between gap-2 rounded-full border border-swiggy/60 text-swiggy px-5 py-2 text-[13px] font-medium tracking-wide hover:bg-swiggy hover:text-white transition-colors"
          data-testid={`product-order-${p.id}-swiggy`}
        >
          <span>Order on Swiggy</span>
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
        </a>
      </div>
    </article>
  );
}

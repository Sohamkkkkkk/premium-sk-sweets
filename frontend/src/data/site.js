// Central site configuration for SK Sweets Food Court
export const SITE = {
  name: "SK Sweets Food Court",
  tagline: "Crafting Sweet Memories Since 1999",
  established: 1999,
  domain: "sksweets.in",
  hours: "8:00 AM – 10:30 PM",
  hoursLabel: "Open Every Day",
  address: {
    line1: "Shop No. 32, Mahavir Pride",
    line2: "Near D-Mart, Manpada Road",
    line3: "Dombivli East, Maharashtra – 421204",
    short: "Dombivli East, Maharashtra",
  },
  whatsappNumber: "919892574913",
  whatsappDisplay: "+91 98925 74913",
  phone: "+918460460759",
  phoneDisplay: "+91 84604 60759",
  instagram: "https://www.instagram.com/sksweets_foodcourt?igsh=MTUybnptdHRwZ2VrZQ==",
  googleMaps: "https://maps.app.goo.gl/fFKXLDZtUeY1Eate8?g_st=ac",
  googleBusiness: "https://share.google/lFsYHpQM4ylZt8cUk",
  swiggy: "https://www.swiggy.com/search?query=SK%20Sweets%20Food%20Court%20Dombivli",
};

export const waLink = (message = "Hello SK Sweets, I would like to place an order.") =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const telLink = () => `tel:${SITE.phone}`;

// Image asset URLs (real store photographs — never altered)
export const IMG = {
  logoFull: "/assets/logo.png",
  logoMark: "/assets/logo-mark-trans.png",
  logoWall: "https://customer-assets.emergentagent.com/job_premium-sweets-dev/artifacts/t0vp2sib_20260701_120302.webp",
  interior: "https://customer-assets.emergentagent.com/job_premium-sweets-dev/artifacts/xvzqdlzk_20260701_120634.webp",
  sweetCounter: "https://customer-assets.emergentagent.com/job_6734cf93-f9fe-4f7b-b786-1ef419933704/artifacts/yb2h66iw_20260701_120358.webp",
  bengaliCounter: "https://customer-assets.emergentagent.com/job_premium-sweets-dev/artifacts/j9xhqd9e_20260701_120502.webp",
  cakesRasmalai: "https://customer-assets.emergentagent.com/job_6734cf93-f9fe-4f7b-b786-1ef419933704/artifacts/1414zhp7_20260701_120447.webp",
  desiCounter: "https://customer-assets.emergentagent.com/job_6734cf93-f9fe-4f7b-b786-1ef419933704/artifacts/whiceybs_20260701_120613.webp",
  imported: "https://customer-assets.emergentagent.com/job_6734cf93-f9fe-4f7b-b786-1ef419933704/artifacts/cjv3uigi_20260701_121811.webp",
  beverages: "https://customer-assets.emergentagent.com/job_6734cf93-f9fe-4f7b-b786-1ef419933704/artifacts/tz1wip6h_20260701_120425.webp",
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/signature", label: "Signature" },
  { to: "/catalogue", label: "Catalogue" },
  { to: "/fast-food", label: "Fast Food" },
  { to: "/celebrations", label: "Celebrations" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
];

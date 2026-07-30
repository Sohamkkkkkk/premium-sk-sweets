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
  swiggy: "https://www.swiggy.com/menu/1269833?source=sharing",
};

export const waLink = (message = "Hello SK Sweets, I would like to place an order.") =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const telLink = () => `tel:${SITE.phone}`;
  
// REAL STORE PHOTOGRAPHS — used ONLY inside the Gallery page.
// Never used in product cards, hero cards or category tiles.
export const STORE_PHOTOS = {
  logoWall: "https://customer-assets.emergentagent.com/job_premium-sweets-dev/artifacts/t0vp2sib_20260701_120302.webp",
  interior: "https://customer-assets.emergentagent.com/job_premium-sweets-dev/artifacts/xvzqdlzk_20260701_120634.webp",
  sweetCounter: "https://customer-assets.emergentagent.com/job_6734cf93-f9fe-4f7b-b786-1ef419933704/artifacts/yb2h66iw_20260701_120358.webp",
  bengaliCounter: "https://customer-assets.emergentagent.com/job_premium-sweets-dev/artifacts/j9xhqd9e_20260701_120502.webp",
  cakesRasmalai: "https://customer-assets.emergentagent.com/job_6734cf93-f9fe-4f7b-b786-1ef419933704/artifacts/1414zhp7_20260701_120447.webp",
  desiCounter: "https://customer-assets.emergentagent.com/job_6734cf93-f9fe-4f7b-b786-1ef419933704/artifacts/whiceybs_20260701_120613.webp",
  
  store: "/assets/gallery/store.jpg",
};

// The one interior photograph allowed as the Hero background
export const HERO_IMAGE = STORE_PHOTOS.store;

export const IMG = {
  logoFull: "/assets/logo.png",
  logoMark: "/assets/logo-mark-trans.png",

  // Category card images
  
  imported: "/assets/gallery/store.jpg", // change later if you have another imported image
  beverages: "/assets/gallery/beverages.jpg",
};

// PREMIUM PRODUCT PHOTOGRAPHY — original AI-generated shots owned by SK Sweets,
// saved locally to /assets/products/. Used across every product-facing surface.
const p = (name) => `/assets/products/${name}.png`;

export const PIMG = {
  // Signature specialties
  kalakand: p("kalakand"),
  gulkandPeda: p("gulkand-peda"),
  proteinLadoo: p("protein-ladoo"),
  samosa: p("signature-samosa"),
  khakhra: p("khakhra"),
  rasmalai: p("rasmalai"),
  kajuKatli: p("kaju-katli"),

  // Categories
  drySweet: p("kaju-katli"),
  milkSweet: p("milk-peda"),
  desiSweet: p("balusahi"),
  bengaliSweet: p("kala-jamun"),
  cakes: p("chocolate-cake"),
  cakesAlt: p("butterscotch-cake"),
  cakesAlt2: p("photo-cake"),
  cakesAlt3: p("celebration-cake-hero"),
  cakesAlt4: p("chocolate-cake"),
  cakesAlt5: p("butterscotch-cake"),
  fastFood: p("masala-dosa"),
  fastFoodAlt: p("pav-bhaji"),
  fastFoodAlt2: p("idli-sambar"),
  fastFoodAlt3: p("sandwich"),
  fastFoodAlt4: p("masala-dosa"),
  sugarFree: p("sugar-free"),

  dryFruits: p("dry-fruits"),
  
  cinnamon: p("khoya-barfi"),
  snackSpread: p("namkeen"),
  celebrationCake: p("celebration-cake-hero"),
  brandStoryHero: p("brand-story"),
  signatureHero: p("signature-hero"),
  visitHero: p("visit-hero"),

  // Extra individuals
 // Extra individuals
khoyaBarfi: p("khoya-barfi"),
anjeerBarfi: p("anjeer-barfi"),

milkPeda: p("milk-peda"),
malaiPeda: "/assets/products/malai-peda.jpg",
kandiPeda: "/assets/products/kandi-peda.jpg",
kachiPeda: "/assets/products/kachi-peda.jpg",
sahiKesarPeda: "/assets/products/sahi-kesar-peda.jpg",
mathuraPeda: "/assets/products/mathura-peda.jpg",
kesarPuri: "/assets/products/kesar-puri.jpg",
malaiPuri: "/assets/products/malai-puri.jpg",

motherIndiaPeda: "/assets/products/mother-india-peda.jpg",
milkCake: "/assets/products/milk-cake.jpg",
mavaBarfi: "/assets/products/mava-barfi.jpg",
buttercotchBarfi: "/assets/products/buttercotch-barfi.jpg",
mangoBarfi: "/assets/products/mango-barfi.jpg",
pistaBarfi: "/assets/products/pista-barfi.jpg",
doubleDeckerBarfi: "/assets/products/double-decker-barfi.jpg",

chocolateMewaBite: "/assets/products/chocolate-mewa-bite.jpg",
mewaBite: "/assets/products/mewa-bite.jpg",
freshLitchiBite: "/assets/products/fresh-litchi-bite.jpg",

kajuKatliClassic: "/assets/products/kaju-katli-classic.jpg",
kajuKatliPista: "/assets/products/kaju-katli-pista.jpg",
kajuKatliMango: "/assets/products/kaju-katli-mango.jpg",
kajuKatliKesar: "/assets/products/kaju-katli-kesar.jpg",
kajuKatliStrawberry: "/assets/products/kaju-katli-strawberry.jpg",
kajuKatliJaggery: "/assets/products/kaju-katli-jaggery.jpg",

rasgulla: "/assets/products/rasgulla.jpg",
lambaJamun: "/assets/products/lamba-jamun.jpg",
chumChum: "/assets/products/chum-chum.jpg",

malaiMysore: "/assets/products/malai-mysore.jpg",
desiGheeHalwa: "/assets/products/desi-ghee-halwa.jpg",

anniversaryCake: "/assets/products/anniversary-cake.jpg",
pineappleCake: "/assets/products/pineapple-cake.jpg",

mysoreMasalaDosa: "/assets/products/mysore-masala-dosa.jpg",
onionUttappa: "/assets/products/onion-uttappa.jpg",
meduVada: "/assets/products/medu-vada.jpg",

noodlesMayonnaiseFrankie: "/assets/products/noodles-mayonnaise-frankie.jpg",
manchurianCheeseMayonnaiseFrankie: "/assets/products/manchurian-cheese-mayonnaise-frankie.jpg",
cheesePaneerMayoFrankie: "/assets/products/cheese-paneer-mayo-frankie.jpg",

methiKhakhra: "/assets/products/methi-khakra.jpg",
paniPuriKhakra: "/assets/products/pani-puri-khakra.jpg",
masalaKhakhra: "/assets/products/masala-khakra.jpg",

chakli: "/assets/products/chakli.jpg",
namkeenMix: "/assets/products/namkeen-mix.jpg",
chivda: "/assets/products/chivda.jpg",

proteinBar: "/assets/products/protein-bar.jpg",
peanutButter: "/assets/products/peanut-butter.jpg",
premiumGranolaMix: "/assets/products/premium-granola-mix.jpg",

kalaJamun: p("kala-jamun"),
  balusahi: p("balusahi"),
  imarti: p("imarti"),
  mysorePak: p("mysore-pak"),
  photoCake: p("photo-cake"),
  namkeen: p("namkeen"),

  // Fast food v2
  paniPuri: p("pani-puri"),
  sevPuri: p("sev-puri"),
  bhelPuri: p("bhel-puri"),
  chinesePaneerPatties: p("chinese-paneer-patties"),
  frankie: p("frankie"),
  manchurianBhel: p("manchurian-bhel"),
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

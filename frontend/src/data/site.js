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
  imported: "https://customer-assets.emergentagent.com/job_6734cf93-f9fe-4f7b-b786-1ef419933704/artifacts/cjv3uigi_20260701_121811.webp",
  beverages: "https://customer-assets.emergentagent.com/job_6734cf93-f9fe-4f7b-b786-1ef419933704/artifacts/tz1wip6h_20260701_120425.webp",
};

// The one interior photograph allowed as the Hero background
export const HERO_IMAGE = STORE_PHOTOS.interior;

export const IMG = {
  logoFull: "/assets/logo.png",
  logoMark: "/assets/logo-mark-trans.png",
};

// PREMIUM PRODUCT PHOTOGRAPHY (Unsplash, verified) — used across every product-facing surface
const un = (id, opts = "") =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1400&q=80${opts}`;

export const PIMG = {
  // Signature specialties
  kalakand: un("1610508500445-a4592435e27e"),         // laddu / mithai style
  gulkandPeda: un("1517244683847-7456b63c5969"),      // rich rose-toned sweet
  proteinLadoo: un("1521483451569-e33803c0330c"),     // granola / natural bowl
  samosa: un("1601050690597-df0568f70950"),           // premium samosa plate
  khakhra: un("1608198093002-ad4e005484ec"),          // assorted crisp breads
  rasmalai: un("1631452180519-c014fe946bc7"),         // rich creamy dessert
  kajuKatli: un("1610508500445-a4592435e27e"),        // silver-varq sweet

  // Category images
  drySweet: un("1517093602195-b40af9688b46"),         // dry fruit board
  milkSweet: un("1517244683847-7456b63c5969"),        // creamy dessert
  desiSweet: un("1610508500445-a4592435e27e"),        // laddu spread
  bengaliSweet: un("1631452180519-c014fe946bc7"),     // syrupy delicacy
  cakes: un("1578985545062-69928b1d9587"),            // chocolate ganache cake
  cakesAlt: un("1550617931-e17a7b70dce2"),            // chocolate cupcakes
  cakesAlt2: un("1607478900766-efe13248b125"),        // colourful cupcakes
  cakesAlt3: un("1571877227200-a0d98ea607e9"),        // tiramisu
  cakesAlt4: un("1568051243851-f9b136146e97"),        // waffles with berries
  cakesAlt5: un("1606313564200-e75d5e30476c"),        // chocolate cake close-up
  fastFood: un("1567337710282-00832b415979"),         // indian thali
  fastFoodAlt: un("1606491956689-2ea866880c84"),      // pav bhaji
  fastFoodAlt2: un("1630383249896-424e482df921"),     // idli sambar
  fastFoodAlt3: un("1512058564366-18510be2db19"),     // biryani
  fastFoodAlt4: un("1596797038530-2c107229654b"),     // rich curry
  sugarFree: un("1521483451569-e33803c0330c"),        // natural mix
  importedCoffee: un("1495474472287-4d71bcdd2085"),   // latte art
  importedChocolate: un("1481391319762-47dff72954d9"),// box of chocolates
  importedChocolateAlt: un("1621939514649-280e2ee25f60"), // chocolate bars
  importedBiscuits: un("1499636136210-6f4ee915583e"), // chocolate chip cookies
  importedBiscuitsAlt: un("1558961363-fa8fdf82db35"), // chocolate cookies
  macarons: un("1571506165871-ee72a35bc9d4"),         // macarons
  dryFruits: un("1517093602195-b40af9688b46"),        // dry fruits board
  beverages: un("1621263764928-df1444c5e859"),        // citrus drink
  beveragesAlt: un("1553787499-6f9133860278"),        // milkshake
  beveragesAlt2: un("1497534446932-c925b458314e"),    // strawberry mocktail
  cinnamon: un("1509365465985-25d11c17e812"),         // pastry / roll
  snackSpread: un("1517093602195-b40af9688b46"),      // savory spread
  celebrationCake: un("1578985545062-69928b1d9587"),  // chocolate cake
  brandStoryHero: un("1610508500445-a4592435e27e"),   // heritage mithai
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

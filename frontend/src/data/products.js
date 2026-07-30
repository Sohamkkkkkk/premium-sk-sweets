import { PIMG } from "./site";

// Every product intentionally has NO price.
// Ordering happens through WhatsApp / Swiggy / Phone.
export const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "signature", label: "Signature" },
  { id: "dry-fruit", label: "Dry Fruit Sweets" },
  { id: "milk", label: "Milk Sweets" },
  { id: "desi", label: "Desi Sweets" },
  { id: "bengali", label: "Bengali" },
  { id: "cakes", label: "Cakes" },
  { id: "fast-food", label: "Fast Food" },
  { id: "khakhra", label: "Khakhra" },
  { id: "snacks", label: "Snacks" },
  { id: "protein", label: "Protein Corner" },
  { id: "sugar-free", label: "Sugar Free" },
  { id: "imported-coffee", label: "Imported Coffee" },
  { id: "imported-chocolate", label: "Imported Chocolates" },
  { id: "dry-fruits", label: "Dry Fruits" },
  { id: "beverages", label: "Beverages" },
  
];

export const SIGNATURES = [
  {
    id: "kalakand",
    name: "Kalakand",
    tagline: "House Specialty",
    description:
      "A timeless house specialty crafted with rich milk and pure ghee — celebrated for its soft, granular texture and authentic flavour.",
    image: PIMG.kalakand,
    category: "milk",
  },
  {
    id: "gulkand-peda",
    name: "Gulkand Peda",
    tagline: "Signature Creation",
    description:
      "A signature creation made with premium milk, filled with aromatic gulkand and crunchy dry fruits.",
    image: PIMG.gulkandPeda,
    category: "signature",
  },
  {
    id: "dry-fruit-protein-ladoo",
    name: "Dry Fruit Protein Ladoo",
    tagline: "Wholesome Indulgence",
    description:
      "A wholesome blend of premium dry fruits and natural ingredients — nutrition without compromising taste.",
    image: PIMG.proteinLadoo,
    category: "protein",
  },
  {
    id: "signature-samosa",
    name: "Signature Samosa",
    tagline: "In-House Masala",
    description:
      "Our signature samosa uses a unique in-house masala recipe — richer, more memorable, unforgettable.",
    image: PIMG.samosa,
    category: "fast-food",
  },
  {
    id: "khakhra",
    name: "Khakhra",
    tagline: "Everyday Favourite",
    description:
      "Crispy, perfectly roasted and one of the most loved everyday snacks among our customers.",
    image: PIMG.khakhra,
    category: "khakhra",
  },
  {
    id: "rasmalai",
    name: "Rasmalai",
    tagline: "Bengali Classic",
    description:
      "Soft Bengali delicacy served in rich, saffron-kissed creamy milk for an authentic dessert experience.",
    image: PIMG.rasmalai,
    category: "bengali",
  },
];

export const KAJU_KATLI_VARIANTS = [
  "Classic",
  "Pista",
  "Mango",
  "Kesar",
  "Strawberry",
  "Jaggery",
];

export const CUSTOMER_FAVOURITES = [
  { id: "dry-fruit", label: "Dry Fruit Sweets", copy: "Premium mewa creations wrapped in silver varq.", image: PIMG.drySweet },
  { id: "milk", label: "Milk Sweets", copy: "Traditional pedas & barfis, freshly prepared daily.", image: PIMG.milkSweet },
  { id: "desi", label: "Desi Sweets", copy: "Classic Indian favourites, made the way they should be.", image: PIMG.desiSweet },
  { id: "bengali", label: "Bengali Sweets", copy: "Rasgulla, rasmalai and kala jamun — soft and syrupy.", image: PIMG.bengaliSweet },
  { id: "cakes", label: "Premium Cakes", copy: "Photo, theme and celebration cakes crafted to order.", image: PIMG.cakes },
  { id: "fast-food", label: "Fast Food", copy: "Dosas, uttappa, sandwiches and hot South Indian favourites.", image: PIMG.fastFood },
  { id: "sugar-free", label: "Sugar-Free Sweets", copy: "Guilt-free indulgence, without compromising taste.", image: PIMG.sugarFree },
  
  { id: "dry-fruits", label: "Dry Fruits", copy: "Handpicked cashews, almonds, pistachios and figs.", image: PIMG.dryFruits },
];

// Map each catalogue category to a representative premium product image
const cimg = {
  signature: PIMG.gulkandPeda,
  "dry-fruit": PIMG.drySweet,
  milk: PIMG.milkSweet,
  desi: PIMG.desiSweet,
  bengali: PIMG.bengaliSweet,
  cakes: PIMG.cakes,
  "fast-food": PIMG.fastFood,
  khakhra: PIMG.khakhra,
  snacks: PIMG.snackSpread,
  protein: PIMG.proteinLadoo,
 
  "sugar-free": PIMG.sugarFree,
};

export const PRODUCTS = [
  // --- Milk Sweets / Pedas & Barfis ---
  { id: "malai-peda", name: "Malai Peda", category: "milk", desc: "Soft, creamy milk peda — rich and delicate.", image: PIMG.malaiPeda },
  { id: "kandi-peda", name: "Kandi Peda", category: "milk", desc: "Traditional caramelised khoya peda.", image: PIMG.kandiPeda },
  { id: "kachi-peda", name: "Kachi Peda", category: "milk", desc: "Fresh, unroasted khoya peda — pure milk flavour.", image: PIMG.kachiPeda },
  { id: "sahi-kesar-peda", name: "Sahi Kesar Peda", category: "milk", desc: "Kesar-infused royal peda, subtly aromatic.", image: PIMG.sahiKesarPeda },
 { id: "mathura-peda", name: "Mathura Peda", category: "milk", desc: "Deep-brown Mathura style — classic and nostalgic.", image: PIMG.mathuraPeda },
  { id: "gulkand-peda", name: "Gulkand Peda", category: "signature", desc: "House signature peda filled with rose petal preserve.", image: PIMG.gulkandPeda },
  { id: "kesar-puri", name: "Kesar Puri", category: "milk", desc: "Saffron milk barfi topped with pistachio slivers.", image: PIMG.kesarPuri },
  { id: "malai-puri", name: "Malai Puri", category: "milk", desc: "Delicate malai barfi with silver varq.", image: PIMG.malaiPuri },
  { id: "mother-india-peda", name: "Mother India Peda", category: "milk", desc: "Rich khoya peda with a tri-colour flourish.", image: PIMG.motherIndiaPeda },
  { id: "milk-cake", name: "Milk Cake", category: "milk", desc: "Slow-cooked khoya cake with a caramel core.", image: PIMG.milkCake },
  { id: "kalakand", name: "Kalakand", category: "signature", desc: "House specialty — soft granular milk cake.", image: PIMG.kalakand },
  { id: "mava-barfi", name: "Mava Barfi", category: "milk", desc: "Fresh mava barfi, mildly sweet and delicate.", image: PIMG.mavaBarfi },
  { id: "butterscotch-barfi", name: "Butterscotch Barfi", category: "milk", desc: "Silver-topped barfi with butterscotch depth.", image: PIMG.buttercotchBarfi },
  { id: "mango-barfi", name: "Mango Barfi", category: "milk", desc: "Alphonso-forward barfi, seasonal favourite.", image: PIMG.mangoBarfi },
  { id: "anjeer-barfi", name: "Anjeer Barfi", category: "milk", desc: "Fig and dry fruit barfi — naturally sweetened.", image: PIMG.anjeerBarfi },
  { id: "pista-barfi", name: "Pista Barfi", category: "milk", desc: "Rich green pista barfi with silver varq.", image: PIMG.pistaBarfi },
  { id: "duble-decker-barfi", name: "Double-Decker Barfi", category: "milk", desc: "Two-layered barfi — the best of both worlds.", image: PIMG.doubleDeckerBarfi },

  // --- Dry Fruit & Premium ---
  { id: "kaju-katli-classic", name: "Kaju Katli (Classic)", category: "dry-fruit", desc: "Silver-leaf cashew diamonds — the classic gift.", image: PIMG.kajuKatliClassic },
  { id: "kaju-katli-pista", name: "Kaju Katli — Pista", category: "dry-fruit", desc: "Pista-layered cashew diamond, refreshingly rich.", image: PIMG.kajuKatliPista },
  { id: "kaju-katli-mango", name: "Kaju Katli — Mango", category: "dry-fruit", desc: "Alphonso-hued cashew fudge — vibrant and rare.", image: PIMG.kajuKatliMango },
  { id: "kaju-katli-kesar", name: "Kaju Katli — Kesar", category: "dry-fruit", desc: "Saffron-infused cashew diamond — festive luxury.", image: PIMG.kajuKatliKesar },
  { id: "kaju-katli-strawberry", name: "Kaju Katli — Strawberry", category: "dry-fruit", desc: "Pink strawberry accent on classic cashew.", image: PIMG.kajuKatliStrawberry },
  { id: "kaju-katli-jaggery", name: "Kaju Katli — Jaggery", category: "dry-fruit", desc: "Made with pure jaggery — refined-sugar-free.", image: PIMG.kajuKatliJaggery },
  { id: "chocolate-mewa-bite", name: "Chocolate Mewa Bite", category: "milk", desc: "Mini chocolate-glazed dry-fruit bites.", image: PIMG.chocolateMewaBite },
  { id: "mewa-bite", name: "Mewa Bite", category: "milk", desc: "Chewy, nut-packed dry-fruit bites.", image: PIMG.mewaBite },
  { id: "fresh-litchi-bite", name: "Fresh Litchi Bite", category: "milk", desc: "Litchi-flavoured mewa bite — refreshingly floral.", image: PIMG.freshLitchiBite },

  // --- Bengali & Syrupy ---
  { id: "rasmalai", name: "Rasmalai", category: "bengali", desc: "Soft chenna discs in saffron creamy milk.", image: PIMG.rasmalai },
  { id: "rasgulla", name: "Rasgulla", category: "bengali", desc: "Spongy chenna balls in light sugar syrup.", image: PIMG.rasgulla },
  { id: "kala-jamun", name: "Kala Jamun", category: "bengali", desc: "Dark, deep-fried jamuns — soaked and syrupy.", image: PIMG.kalaJamun },
  { id: "lamba-jamun", name: "Lamba Jamun", category: "bengali", desc: "Elongated gulab jamuns, indulgently soft.", image: PIMG.lambaJamun },
  { id: "chum-chum", name: "Chum Chum", category: "bengali", desc: "Cylindrical chenna sweet, topped with khoya.", image: PIMG.chumChum },

  // --- Desi Classics ---
  { id: "balusahi", name: "Balusahi", category: "desi", desc: "Flaky, syrup-glazed North Indian donut.", image: PIMG.balusahi },
  { id: "malai-mysore", name: "Malai Maysore", category: "desi", desc: "Malai-topped Mysore pak variation.", image: PIMG.malaiMysore },
  { id: "mysore-pak", name: "Mysore Pak", category: "desi", desc: "Ghee-rich South Indian classic — melts on tongue.", image: PIMG.mysorePak },
  { id: "meth-ladoo", name: "Methi Ladoo", category: "desi", desc: "Traditional winter warming ladoo.", image: PIMG.proteinLadoo },
  { id: "desi-ghee-halwa", name: "Desi Ghee Halwa", category: "desi", desc: "Pure ghee halwa — rustic and rich.", image: PIMG.desiGheeHalwa },
  { id: "imarti", name: "Imarti", category: "desi", desc: "Saffron urad dal flower — crisp and dripping with syrup.", image: PIMG.imarti },

  // --- Signature ---
  { id: "protein-ladoo", name: "Dry Fruit Protein Ladoo", category: "signature", desc: "Wholesome dry-fruit ladoo, packed with natural protein.", image: PIMG.proteinLadoo },
  { id: "signature-samosa", name: "Signature Samosa", category: "signature", desc: "Our in-house masala recipe — irresistibly flavourful.", image: PIMG.samosa },

  // --- Cakes ---
  { id: "cake-pineapple", name: "Pineapple Cream Cake", category: "cakes", desc: "Classic fresh pineapple layered cake.", image: PIMG.pineappleCake },
  { id: "cake-chocolate", name: "Chocolate Truffle Cake", category: "cakes", desc: "Rich chocolate truffle with dark ganache.", image: PIMG.cakes },
  { id: "cake-butterscotch", name: "Butterscotch Crunch Cake", category: "cakes", desc: "Butterscotch cream with praline crunch.", image: PIMG.cakesAlt },
  { id: "cake-photo", name: "Photo Cake", category: "cakes", desc: "Personalised edible photo cake for celebrations.", image: PIMG.photoCake },
  { id: "cake-theme", name: "Theme Cake", category: "cakes", desc: "Custom designed themed cakes — order in advance.", image: PIMG.celebrationCake },
  { id: "cake-anniversary", name: "Anniversary Cake", category: "cakes", desc: "Elegant tiered anniversary cakes.", image: PIMG.anniversaryCake },

  // --- Fast Food (dine-in + take-away) ---
  { id: "masala-dosa", name: "Masala Dosa", category: "fast-food", desc: "Crisp golden dosa with spiced potato filling.", image: PIMG.fastFood },
  { id: "mysore-dosa", name: "Mysore Masala Dosa", category: "fast-food", desc: "Fiery red chutney inside a crisp dosa.", image: PIMG.mysoreMasalaDosa },
  { id: "onion-uttappa", name: "Onion Uttappa", category: "fast-food", desc: "Thick soft pancake with fresh onion topping.", image: PIMG.onionUttappa },
  { id: "idli", name: "Idli Sambar", category: "fast-food", desc: "Steamed idlis with fresh sambar and chutney.", image: PIMG.fastFoodAlt2 },
  { id: "vada", name: "Medu Vada", category: "fast-food", desc: "Crispy urad dal donut with coconut chutney.", image: PIMG.meduVada },
  // Chaat
  { id: "pani-puri", name: "Pani Puri", category: "fast-food", desc: "Crisp puris filled with tangy mint-flavoured pani.", image: PIMG.paniPuri },
  { id: "sev-puri", name: "Sev Puri", category: "fast-food", desc: "Flat puris topped with onion, chutneys and sev.", image: PIMG.sevPuri },
  { id: "bhel-puri", name: "Bhel Puri", category: "fast-food", desc: "Puffed rice tossed with chutneys, onion and sev.", image: PIMG.bhelPuri },
  { id: "chinese-paneer-patties", name: "Chinese Paneer Patties", category: "fast-food", desc: "Golden pan-fried Chinese-style paneer patties.", image: PIMG.chinesePaneerPatties },
  // Frankies
  { id: "veg-cheese-mayo-frankie", name: "Veg Cheese Mayonnaise Frankie", category: "fast-food", desc: "Soft roti wrap with cheese, veg and creamy mayo.", image: PIMG.frankie },
  { id: "noodles-mayo-frankie", name: "Noodles Mayonnaise Frankie", category: "fast-food", desc: "Warm noodles rolled into a soft frankie with mayo.", image: PIMG.noodlesMayonnaiseFrankie },
  { id: "veg-manchurian-cheese-frankie", name: "Veg Manchurian Cheese Mayo Frankie", category: "fast-food", desc: "Manchurian balls, cheese and mayo in a soft frankie.", image: PIMG.manchurianCheeseMayonnaiseFrankie },
  { id: "veg-cheese-paneer-frankie", name: "Veg Cheese Paneer Mayo Frankie", category: "fast-food", desc: "Paneer, cheese and veg wrapped with creamy mayo.", image: PIMG.cheesePaneerMayoFrankie},
  // House Special
  { id: "manchurian-bhel", name: "Manchurian Bhel", category: "fast-food", desc: "Our house-special Indo-Chinese Manchurian bhel.", image: PIMG.manchurianBhel },

  // --- Khakhra & Snacks ---
  { id: "khakhra-plain", name: "Plain Khakhra", category: "khakhra", desc: "Roasted whole-wheat crisps — perfect with chai.", image: PIMG.khakhra },
  { id: "khakhra-methi", name: "Methi Khakhra", category: "khakhra", desc: "Fenugreek-spiced khakhra, aromatic and light.", image: PIMG.methiKhakhra },
  { id: "khakhra-masala", name: "Masala Khakhra", category: "khakhra", desc: "Spiced khakhra — a bold everyday snack.", image: PIMG.masalaKhakhra },
  { id: "pani-puri-khakhra", name: "Pani Puri Khakhra", category: "khakhra", desc: "Tangy pani-puri flavoured khakhra.", image: PIMG.paniPuriKhakra },
  { id: "chakli", name: "Chakli", category: "snacks", desc: "Crisp spiralled savoury snack — Diwali favourite.", image: PIMG.chakli },
  { id: "namkeen-mix", name: "Namkeen Mix", category: "snacks", desc: "House-blended savoury namkeen mix.", image: PIMG.namkeen },
  { id: "chivda", name: "Chivda", category: "snacks", desc: "Light flattened rice mix with peanuts and curry leaves.", image: PIMG.chivda },

  // --- Protein Corner ---
  { id: "protein-bar-classic", name: "Whey Protein Bar", category: "protein", desc: "High-protein bars for post-workout indulgence.", image: PIMG.proteinBar },
  { id: "peanut-butter", name: "Natural Peanut Butter", category: "protein", desc: "Stone-ground natural peanut butter — no additives.", image: PIMG.peanutButter },
  { id: "granola-mix", name: "Premium Granola Mix", category: "protein", desc: "Baked granola with dry fruits and honey.", image: PIMG.premiumGranolaMix },

  // --- Dry Fruits ---


  // --- Imported Coffee / Chocolate / Beverages ---
  
 

  // --- Sugar-Free ---
 
  { id: "sf-laddoo", name: "Sugar-Free Laddoo", category: "sugar-free", desc: "Ghee laddoo sweetened naturally.", image: PIMG.sugarFree },
  { id: "sf-dry-fruit-mix", name: "Sugar-Free Dry Fruit Mix", category: "sugar-free", desc: "Nut and seed mix, no added sugar.", image: PIMG.dryFruits },
];

// Fallback: any product missing image uses category fallback
export const CATEGORY_IMAGE = cimg;

export const FAST_FOOD_MENU = [
  {
    heading: "Dosas",
    items: [
      "Plain Dosa",
      "Masala Dosa",
      "Mysore Masala Dosa",
      "Butter Masala Dosa",
      "Paneer Dosa",
      "Cheese Dosa",
    ],
  },
  {
    heading: "Uttappas",
    items: [
      "Plain Uttappa",
      "Onion Uttappa",
      "Tomato Uttappa",
      "Mixed Uttappa",
      "Cheese Uttappa",
    ],
  },
  {
    heading: "South Indian",
    items: [
      "Idli Sambar",
      "Medu Vada",
      "Sambar Vada",
      "Rava Idli",
      "Upma",
    ],
  },
  {
    heading: "Chaat",
    items: [
      "Pani Puri",
      "Sev Puri",
      "Bhel Puri",
      "Chinese Paneer Patties",
    ],
  },
  {
    heading: "Frankies",
    items: [
      "Veg Cheese Mayonnaise Frankie",
      "Noodles Mayonnaise Frankie",
      "Veg Manchurian Cheese Mayo Frankie",
      "Veg Cheese Paneer Mayo Frankie",
    ],
  },
  {
    heading: "House Special",
    items: [
      "Manchurian Bhel",
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    role: "Dombivli East",
    rating: 5,
    quote:
      "The Kaju Katli and Gulkand Peda are heavenly. I have been ordering from SK Sweets for every festival for the last eight years — freshness and quality are consistent every time.",
  },
  {
    name: "Rahul Deshmukh",
    role: "Manpada",
    rating: 5,
    quote:
      "Their signature samosa is unmatched anywhere in Dombivli. The masala is unique and the taste is instantly recognisable. Weekend evenings are incomplete without them.",
  },
  {
    name: "Anjali Kulkarni",
    role: "Regular Customer",
    rating: 5,
    quote:
      "Ordered a photo cake for my son's fifth birthday — the design was stunning and the cake tasted even better. The staff treated us like family from start to finish.",
  },
  {
    name: "Vikram Mehta",
    role: "Thane West",
    rating: 5,
    quote:
      "The imported chocolate and coffee section is a hidden gem. It feels like a boutique inside a sweet shop. Highly recommended for gifts and personal indulgence.",
  },
  {
    name: "Shubham Patel",
    role: "Diva",
    rating: 5,
    quote:
      "Sugar-free Anjeer Barfi is a lifesaver for my father who is diabetic. He can finally enjoy sweets on Diwali again. Grateful to the SK Sweets family.",
  },
  {
    name: "Neha Iyer",
    role: "Bhiwandi",
    rating: 5,
    quote:
      "The rasmalai literally melts in the mouth. Every visit feels comforting — like walking into a family kitchen. Their team makes Dombivli sweeter, truly.",
  },
];

export const FAQS = [
  {
    q: "Do you accept online orders?",
    a: "Yes. You can place orders on WhatsApp (+91 98925 74913), order through Swiggy, or call us at +91 84604 60759. Home delivery is available across Dombivli and surrounding areas.",
  },
  {
    q: "Do you take bulk & corporate orders?",
    a: "Absolutely. We handle wedding orders, corporate gifting, festival bulk orders and celebration hampers. We recommend placing bulk orders at least 24–48 hours in advance for the best experience.",
  },
  {
    q: "Can I order a photo or theme cake?",
    a: "Yes. Photo cakes, theme cakes and custom birthday cakes are our specialty. Share your photo or theme on WhatsApp and our team will guide you through the design and timing.",
  },
  {
    q: "Do you offer sugar-free sweets?",
    a: "Yes, we carry a curated range of sugar-free sweets including Kaju Katli, Anjeer Barfi and dry-fruit ladoos — sweetened naturally with dates or jaggery.",
  },
  {
    q: "Are your sweets prepared daily?",
    a: "Yes. All our sweets, cakes and fast food items are freshly prepared every day using pure ingredients and traditional recipes.",
  },
  {
    q: "What are your store timings?",
    a: "We are open every day from 8:00 AM to 10:30 PM, including weekends and festivals.",
  },
];

export const WHY_US = [
  {
    title: "Since 1999",
    body: "More than twenty-five years of trust, taste and tradition — one family, one recipe book, one promise of quality.",
  },
  {
    title: "Freshly Prepared Daily",
    body: "Every sweet and every dish is prepared fresh each day — never stored, never compromised.",
  },
  {
    title: "Pure Ingredients",
    body: "Only pure ghee, farm-fresh milk and hand-picked dry fruits — no shortcuts, no substitutes.",
  },
  {
    title: "Celebration Specialists",
    body: "Photo cakes, wedding hampers and festival orders — designed to make your special day sweeter.",
  },
  {
    title: "Wide Range",
    body: "Indian sweets, cakes, fast food, imported chocolates, coffee and dry fruits — under one roof.",
  },
  {
    title: "Home Delivery",
    body: "Order on WhatsApp, Swiggy or call — we deliver freshness right to your doorstep.",
  },
];

import { IMG } from "./site";

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
  { id: "imported-coffee", label: "Imported Coffee" },
  { id: "imported-chocolate", label: "Imported Chocolates" },
  { id: "dry-fruits", label: "Dry Fruits" },
  { id: "beverages", label: "Beverages" },
  { id: "sugar-free", label: "Sugar Free" },
];

export const SIGNATURES = [
  {
    id: "kalakand",
    name: "Kalakand",
    tagline: "House Specialty",
    description:
      "A timeless house specialty crafted with rich milk and pure ghee — celebrated for its soft, granular texture and authentic flavour.",
    image: IMG.bengaliCounter,
    category: "milk",
  },
  {
    id: "gulkand-peda",
    name: "Gulkand Peda",
    tagline: "Signature Creation",
    description:
      "A signature creation made with premium milk, filled with aromatic gulkand and crunchy dry fruits.",
    image: IMG.sweetCounter,
    category: "signature",
  },
  {
    id: "dry-fruit-protein-ladoo",
    name: "Dry Fruit Protein Ladoo",
    tagline: "Wholesome Indulgence",
    description:
      "A wholesome blend of premium dry fruits and natural ingredients — nutrition without compromising taste.",
    image: IMG.desiCounter,
    category: "protein",
  },
  {
    id: "signature-samosa",
    name: "Signature Samosa",
    tagline: "In-House Masala",
    description:
      "Our signature samosa uses a unique in-house masala recipe — richer, more memorable, unforgettable.",
    image: IMG.interior,
    category: "fast-food",
  },
  {
    id: "khakhra",
    name: "Khakhra",
    tagline: "Everyday Favourite",
    description:
      "Crispy, perfectly roasted and one of the most loved everyday snacks among our customers.",
    image: IMG.interior,
    category: "khakhra",
  },
  {
    id: "rasmalai",
    name: "Rasmalai",
    tagline: "Bengali Classic",
    description:
      "Soft Bengali delicacy served in rich, saffron-kissed creamy milk for an authentic dessert experience.",
    image: IMG.bengaliCounter,
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
  { id: "dry-fruit", label: "Dry Fruit Sweets", copy: "Premium mewa creations wrapped in silver varq.", image: IMG.sweetCounter },
  { id: "milk", label: "Milk Sweets", copy: "Traditional pedas & barfis, freshly prepared daily.", image: IMG.sweetCounter },
  { id: "desi", label: "Desi Sweets", copy: "Classic Indian favourites, made the way they should be.", image: IMG.desiCounter },
  { id: "bengali", label: "Bengali Sweets", copy: "Rasgulla, rasmalai and kala jamun — soft and syrupy.", image: IMG.bengaliCounter },
  { id: "cakes", label: "Premium Cakes", copy: "Photo, theme and celebration cakes crafted to order.", image: IMG.cakesRasmalai },
  { id: "fast-food", label: "Fast Food", copy: "Dosas, uttappa, sandwiches and hot South Indian favourites.", image: IMG.interior },
  { id: "sugar-free", label: "Sugar-Free Sweets", copy: "Guilt-free indulgence, without compromising taste.", image: IMG.sweetCounter },
  { id: "imported-coffee", label: "Imported Coffee", copy: "Curated coffee sachets & premium brewing choices.", image: IMG.imported },
  { id: "imported-chocolate", label: "Imported Chocolates", copy: "Global favourites — Ferrero, Lindt, Kinder and more.", image: IMG.imported },
  { id: "dry-fruits", label: "Dry Fruits", copy: "Handpicked cashews, almonds, pistachios and figs.", image: IMG.desiCounter },
];

export const PRODUCTS = [
  // --- Milk Sweets / Pedas & Barfis ---
  { id: "malai-peda", name: "Malai Peda", category: "milk", desc: "Soft, creamy milk peda — rich and delicate.", image: IMG.sweetCounter },
  { id: "kandi-peda", name: "Kandi Peda", category: "milk", desc: "Traditional caramelised khoya peda.", image: IMG.sweetCounter },
  { id: "kachi-peda", name: "Kachi Peda", category: "milk", desc: "Fresh, unroasted khoya peda — pure milk flavour.", image: IMG.sweetCounter },
  { id: "sahi-kesar-peda", name: "Sahi Kesar Peda", category: "milk", desc: "Kesar-infused royal peda, subtly aromatic.", image: IMG.sweetCounter },
  { id: "mathura-peda", name: "Mathura Peda", category: "milk", desc: "Deep-brown Mathura style — classic and nostalgic.", image: IMG.sweetCounter },
  { id: "gulkand-peda", name: "Gulkand Peda", category: "signature", desc: "House signature peda filled with rose petal preserve.", image: IMG.sweetCounter },
  { id: "kesar-puri", name: "Kesar Puri", category: "milk", desc: "Saffron milk barfi topped with pistachio slivers.", image: IMG.sweetCounter },
  { id: "malai-puri", name: "Malai Puri", category: "milk", desc: "Delicate malai barfi with silver varq.", image: IMG.sweetCounter },
  { id: "mother-india-peda", name: "Mother India Peda", category: "milk", desc: "Rich khoya peda with a tri-colour flourish.", image: IMG.sweetCounter },
  { id: "milk-cake", name: "Milk Cake", category: "milk", desc: "Slow-cooked khoya cake with a caramel core.", image: IMG.sweetCounter },
  { id: "kalakand", name: "Kalakand", category: "signature", desc: "House specialty — soft granular milk cake.", image: IMG.sweetCounter },
  { id: "mava-barfi", name: "Mava Barfi", category: "milk", desc: "Fresh mava barfi, mildly sweet and delicate.", image: IMG.sweetCounter },
  { id: "butterscotch-barfi", name: "Butterscotch Barfi", category: "milk", desc: "Silver-topped barfi with butterscotch depth.", image: IMG.sweetCounter },
  { id: "mango-barfi", name: "Mango Barfi", category: "milk", desc: "Alphonso-forward barfi, seasonal favourite.", image: IMG.sweetCounter },
  { id: "anjeer-barfi", name: "Anjeer Barfi", category: "dry-fruit", desc: "Fig and dry fruit barfi — naturally sweetened.", image: IMG.sweetCounter },
  { id: "pista-barfi", name: "Pista Barfi", category: "dry-fruit", desc: "Rich green pista barfi with silver varq.", image: IMG.sweetCounter },
  { id: "dubledaker-barfi", name: "Double-Decker Barfi", category: "milk", desc: "Two-layered barfi — the best of both worlds.", image: IMG.sweetCounter },

  // --- Dry Fruit & Premium ---
  { id: "kaju-katli-classic", name: "Kaju Katli (Classic)", category: "dry-fruit", desc: "Silver-leaf cashew diamonds — the classic gift.", image: IMG.sweetCounter },
  { id: "kaju-katli-pista", name: "Kaju Katli — Pista", category: "dry-fruit", desc: "Pista-layered cashew diamond, refreshingly rich.", image: IMG.sweetCounter },
  { id: "kaju-katli-mango", name: "Kaju Katli — Mango", category: "dry-fruit", desc: "Alphonso-hued cashew fudge — vibrant and rare.", image: IMG.sweetCounter },
  { id: "kaju-katli-kesar", name: "Kaju Katli — Kesar", category: "dry-fruit", desc: "Saffron-infused cashew diamond — festive luxury.", image: IMG.sweetCounter },
  { id: "kaju-katli-strawberry", name: "Kaju Katli — Strawberry", category: "dry-fruit", desc: "Pink strawberry accent on classic cashew.", image: IMG.sweetCounter },
  { id: "kaju-katli-jaggery", name: "Kaju Katli — Jaggery", category: "dry-fruit", desc: "Made with pure jaggery — refined-sugar-free.", image: IMG.sweetCounter },
  { id: "chocolate-mewa-bite", name: "Chocolate Mewa Bite", category: "dry-fruit", desc: "Mini chocolate-glazed dry-fruit bites.", image: IMG.sweetCounter },
  { id: "mewa-bite", name: "Mewa Bite", category: "dry-fruit", desc: "Chewy, nut-packed dry-fruit bites.", image: IMG.sweetCounter },
  { id: "fresh-litchi-bite", name: "Fresh Litchi Bite", category: "dry-fruit", desc: "Litchi-flavoured mewa bite — refreshingly floral.", image: IMG.sweetCounter },

  // --- Bengali & Syrupy ---
  { id: "rasmalai", name: "Rasmalai", category: "bengali", desc: "Soft chenna discs in saffron creamy milk.", image: IMG.bengaliCounter },
  { id: "rasgulla", name: "Rasgulla", category: "bengali", desc: "Spongy chenna balls in light sugar syrup.", image: IMG.bengaliCounter },
  { id: "kala-jamun", name: "Kala Jamun", category: "bengali", desc: "Dark, deep-fried jamuns — soaked and syrupy.", image: IMG.bengaliCounter },
  { id: "lamba-jamun", name: "Lamba Jamun", category: "bengali", desc: "Elongated gulab jamuns, indulgently soft.", image: IMG.bengaliCounter },
  { id: "kalmi-bahur", name: "SP Kalmi Bahur", category: "bengali", desc: "Bengali specialty — soft and syrup-drenched.", image: IMG.bengaliCounter },
  { id: "chum-chum", name: "Chum Chum", category: "bengali", desc: "Cylindrical chenna sweet, topped with khoya.", image: IMG.bengaliCounter },

  // --- Desi Classics ---
  { id: "balusahi", name: "Balusahi", category: "desi", desc: "Flaky, syrup-glazed North Indian donut.", image: IMG.desiCounter },
  { id: "malai-maysor", name: "Malai Maysor", category: "desi", desc: "Malai-topped Mysore pak variation.", image: IMG.desiCounter },
  { id: "maysoor-pak", name: "Mysore Pak", category: "desi", desc: "Ghee-rich South Indian classic — melts on tongue.", image: IMG.desiCounter },
  { id: "meth-ladu", name: "Methi Ladoo", category: "desi", desc: "Traditional winter warming ladoo.", image: IMG.desiCounter },
  { id: "desi-ghee-halwa", name: "Desi Ghee Halwa", category: "desi", desc: "Pure ghee halwa — rustic and rich.", image: IMG.desiCounter },
  { id: "imarti", name: "Imarti", category: "desi", desc: "Saffron urad dal flower — crisp and dripping with syrup.", image: IMG.desiCounter },
  { id: "chakori", name: "Sweet Chakori", category: "desi", desc: "Spiral crunchy sweet — an old-world favourite.", image: IMG.desiCounter },

  // --- Signature ---
  { id: "protein-ladoo", name: "Dry Fruit Protein Ladoo", category: "signature", desc: "Wholesome dry-fruit ladoo, packed with natural protein.", image: IMG.desiCounter },
  { id: "signature-samosa", name: "Signature Samosa", category: "signature", desc: "Our in-house masala recipe — irresistibly flavourful.", image: IMG.interior },

  // --- Cakes ---
  { id: "cake-pineapple", name: "Pineapple Cream Cake", category: "cakes", desc: "Classic fresh pineapple layered cake.", image: IMG.cakesRasmalai },
  { id: "cake-chocolate", name: "Chocolate Truffle Cake", category: "cakes", desc: "Rich chocolate truffle with dark ganache.", image: IMG.cakesRasmalai },
  { id: "cake-butterscotch", name: "Butterscotch Crunch Cake", category: "cakes", desc: "Butterscotch cream with praline crunch.", image: IMG.cakesRasmalai },
  { id: "cake-photo", name: "Photo Cake", category: "cakes", desc: "Personalised edible photo cake for celebrations.", image: IMG.cakesRasmalai },
  { id: "cake-theme", name: "Theme Cake", category: "cakes", desc: "Custom designed themed cakes — order in advance.", image: IMG.cakesRasmalai },
  { id: "cake-anniversary", name: "Anniversary Cake", category: "cakes", desc: "Elegant tiered anniversary cakes.", image: IMG.cakesRasmalai },

  // --- Fast Food ---
  { id: "masala-dosa", name: "Masala Dosa", category: "fast-food", desc: "Crisp golden dosa with spiced potato filling.", image: IMG.interior },
  { id: "mysore-dosa", name: "Mysore Masala Dosa", category: "fast-food", desc: "Fiery red chutney inside a crisp dosa.", image: IMG.interior },
  { id: "onion-uttappa", name: "Onion Uttappa", category: "fast-food", desc: "Thick soft pancake with fresh onion topping.", image: IMG.interior },
  { id: "veg-sandwich", name: "Veg Sandwich", category: "fast-food", desc: "Fresh grilled sandwich with house chutney.", image: IMG.interior },
  { id: "cheese-sandwich", name: "Cheese Grilled Sandwich", category: "fast-food", desc: "Molten cheese grilled between buttery bread.", image: IMG.interior },
  { id: "idli", name: "Idli Sambar", category: "fast-food", desc: "Steamed idlis with fresh sambar and chutney.", image: IMG.interior },
  { id: "vada", name: "Medu Vada", category: "fast-food", desc: "Crispy urad dal donut with coconut chutney.", image: IMG.interior },

  // --- Khakhra & Snacks ---
  { id: "khakhra-plain", name: "Plain Khakhra", category: "khakhra", desc: "Roasted whole-wheat crisps — perfect with chai.", image: IMG.interior },
  { id: "khakhra-methi", name: "Methi Khakhra", category: "khakhra", desc: "Fenugreek-spiced khakhra, aromatic and light.", image: IMG.interior },
  { id: "khakhra-masala", name: "Masala Khakhra", category: "khakhra", desc: "Spiced khakhra — a bold everyday snack.", image: IMG.interior },
  { id: "pani-puri-khakhra", name: "Pani Puri Khakhra", category: "khakhra", desc: "Tangy pani-puri flavoured khakhra.", image: IMG.interior },
  { id: "chakli", name: "Chakli", category: "snacks", desc: "Crisp spiralled savoury snack — Diwali favourite.", image: IMG.interior },
  { id: "namkeen-mix", name: "Namkeen Mix", category: "snacks", desc: "House-blended savoury namkeen mix.", image: IMG.interior },
  { id: "chivda", name: "Chivda", category: "snacks", desc: "Light flattened rice mix with peanuts and curry leaves.", image: IMG.interior },

  // --- Protein Corner ---
  { id: "protein-bar-classic", name: "Whey Protein Bar", category: "protein", desc: "High-protein bars for post-workout indulgence.", image: IMG.imported },
  { id: "peanut-butter", name: "Natural Peanut Butter", category: "protein", desc: "Stone-ground natural peanut butter — no additives.", image: IMG.imported },
  { id: "granola-mix", name: "Premium Granola Mix", category: "protein", desc: "Baked granola with dry fruits and honey.", image: IMG.imported },

  // --- Dry Fruits ---
  { id: "cashew", name: "Premium Cashew (W180)", category: "dry-fruits", desc: "Handpicked jumbo cashews.", image: IMG.desiCounter },
  { id: "almonds", name: "California Almonds", category: "dry-fruits", desc: "Whole California almonds — freshly stocked.", image: IMG.desiCounter },
  { id: "pistachio", name: "Iranian Pistachios", category: "dry-fruits", desc: "Salted or plain — imported Iranian pistachios.", image: IMG.desiCounter },
  { id: "figs", name: "Afghan Anjeer (Figs)", category: "dry-fruits", desc: "Soft dried figs — naturally sweet.", image: IMG.desiCounter },
  { id: "walnut", name: "Kashmiri Walnut Halves", category: "dry-fruits", desc: "Whole Kashmiri walnut halves, freshly packed.", image: IMG.desiCounter },
  { id: "raisin", name: "Kishmish (Raisins)", category: "dry-fruits", desc: "Golden and green raisins — plump and sweet.", image: IMG.desiCounter },
  { id: "seedless-dates", name: "Seedless Black Dates", category: "dry-fruits", desc: "Rich, moist seedless dates.", image: IMG.imported },

  // --- Imported Coffee / Chocolate / Beverages ---
  { id: "imported-coffee-cappuccino", name: "Imported Cappuccino Sachets", category: "imported-coffee", desc: "Ready-to-brew imported cappuccino sachets.", image: IMG.imported },
  { id: "imported-coffee-hazelnut", name: "Imported Hazelnut Coffee", category: "imported-coffee", desc: "Smooth hazelnut-flavoured instant coffee.", image: IMG.imported },
  { id: "imported-choco-ferrero", name: "Ferrero Rocher", category: "imported-chocolate", desc: "Classic Ferrero Rocher gift boxes.", image: IMG.imported },
  { id: "imported-choco-lindt", name: "Lindt Assorted", category: "imported-chocolate", desc: "Lindt fine Swiss chocolate assortments.", image: IMG.imported },
  { id: "imported-choco-german-mint", name: "German Mint Chocolate", category: "imported-chocolate", desc: "Refreshing German mint chocolate bars.", image: IMG.imported },
  { id: "cadbury-cake", name: "Cadbury Cakes", category: "imported-chocolate", desc: "Cadbury cake bars, always in stock.", image: IMG.imported },
  { id: "lotte-choco-pie", name: "Lotte Choco Pie", category: "imported-chocolate", desc: "Marshmallow-cream Lotte choco pies.", image: IMG.imported },
  { id: "juice-real", name: "Real Fruit Juice", category: "beverages", desc: "Chilled Real fruit juices — all seasons.", image: IMG.beverages },
  { id: "coconut-water", name: "Tender Coconut Water", category: "beverages", desc: "Bottled tender coconut water.", image: IMG.beverages },
  { id: "aloe-vera", name: "Aloe Vera Drink", category: "beverages", desc: "Refreshing aloe vera juice, chilled.", image: IMG.beverages },
  { id: "pepsi", name: "Pepsi / Sprite / Maaza", category: "beverages", desc: "Full range of chilled soft drinks.", image: IMG.beverages },

  // --- Sugar-Free ---
  { id: "sf-kaju-katli", name: "Sugar-Free Kaju Katli", category: "sugar-free", desc: "Cashew fudge sweetened naturally — sugar-free.", image: IMG.sweetCounter },
  { id: "sf-anjeer", name: "Sugar-Free Anjeer Barfi", category: "sugar-free", desc: "Fig-based barfi sweetened naturally.", image: IMG.sweetCounter },
  { id: "sf-dry-fruit-mix", name: "Sugar-Free Dry Fruit Mix", category: "sugar-free", desc: "Nut and seed mix, no added sugar.", image: IMG.desiCounter },
];

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
    heading: "Sandwiches",
    items: [
      "Veg Sandwich",
      "Cheese Sandwich",
      "Cheese Grilled Sandwich",
      "Paneer Grilled Sandwich",
      "Chocolate Sandwich",
    ],
  },
  {
    heading: "Snacks",
    items: [
      "Signature Samosa",
      "Kachori",
      "Aloo Tikki",
      "Pav Bhaji",
      "Vada Pav",
    ],
  },
  {
    heading: "Cold Beverages",
    items: [
      "Fresh Fruit Juice",
      "Cold Coffee",
      "Mango Lassi",
      "Sweet Lassi",
      "Masala Chaas",
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

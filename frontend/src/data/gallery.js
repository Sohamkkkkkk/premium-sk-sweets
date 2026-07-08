import { STORE_PHOTOS } from "./site";

// Real store photographs — categorised for the Gallery page ONLY.
// These images should NEVER appear anywhere else on the site.
export const GALLERY_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "interior", label: "Interior" },
  { id: "counters", label: "Counter Displays" },
  { id: "sweets", label: "Sweet Counters" },
  { id: "products", label: "Products" },
  { id: "store", label: "Store" },
];

export const GALLERY = [
  {
    id: "logo-wall",
    src: STORE_PHOTOS.logoWall,
    alt: "SK Sweets Food Court signature marble and gold logo installation",
    category: "store",
    label: "SK Sweets Signage",
    orient: "portrait",
  },
  {
    id: "interior-aisle",
    src: STORE_PHOTOS.interior,
    alt: "Store interior with chandelier, khakhra aisle and product shelves",
    category: "interior",
    label: "Interior Aisle",
    orient: "landscape",
  },
  {
    id: "sweet-counter",
    src: STORE_PHOTOS.sweetCounter,
    alt: "Peda, barfi and mewa bite counter display",
    category: "sweets",
    label: "Peda & Barfi Counter",
    orient: "landscape",
  },
  {
    id: "bengali-counter",
    src: STORE_PHOTOS.bengaliCounter,
    alt: "Bengali sweets counter — rasmalai, gulab jamun and kala jamun",
    category: "sweets",
    label: "Bengali Sweets",
    orient: "landscape",
  },
  {
    id: "cakes-rasmalai",
    src: STORE_PHOTOS.cakesRasmalai,
    alt: "Fresh cream cakes and rasmalai counter",
    category: "counters",
    label: "Cakes & Rasmalai",
    orient: "portrait",
  },
  {
    id: "desi-counter",
    src: STORE_PHOTOS.desiCounter,
    alt: "Balusahi, Mysore pak and traditional desi sweets counter",
    category: "sweets",
    label: "Traditional Sweets",
    orient: "portrait",
  },
  {
    id: "imported",
    src: STORE_PHOTOS.imported,
    alt: "Imported chocolates, biscuits and choco pies display",
    category: "products",
    label: "Imported Collection",
    orient: "landscape",
  },
  {
    id: "beverages",
    src: STORE_PHOTOS.beverages,
    alt: "Beverage fridge with juices, coconut water and soft drinks",
    category: "products",
    label: "Beverages",
    orient: "landscape",
  },
];

import { BadgeType } from "./badge";

export interface Product {
  id: number;
  name: string;
  price: string;
  badge: BadgeType;
  color: string;
  icon: string;
  // Additional fields from integrated data
  brands?: string;
  unitQuantity?: string;
  categories?: string;
  countries?: string;
  imageUrl?: string;
  imageSmallUrl?: string;
}

// Basic products for initial load (keeping only essential items)
export const products: Product[] = [
  // Fruits
  {
    id: 1,
    name: "Fresh Mango (Alphonso)",
    price: "S$1.30/kg",
    badge: "Fruits",
    color: "from-yellow-300 to-orange-400",
    icon: "🥭",
  },
  {
    id: 2,
    name: "Sweet Guava",
    price: "S$0.65/kg",
    badge: "Fruits",
    color: "from-green-200 to-green-400",
    icon: "🍈",
  },
  {
    id: 3,
    name: "Fresh Pomegranate",
    price: "S$1.95/kg",
    badge: "Fruits",
    color: "from-red-300 to-red-500",
    icon: "🍎",
  },
  {
    id: 4,
    name: "Kesar Banana",
    price: "S$0.95/dozen",
    badge: "Fruits",
    color: "from-yellow-200 to-yellow-400",
    icon: "🍌",
  },
  {
    id: 5,
    name: "Fresh Papaya",
    price: "S$0.50/kg",
    badge: "Fruits",
    color: "from-orange-200 to-orange-400",
    icon: "🍊",
  },

  // Vegetables
  {
    id: 6,
    name: "Lady Finger (Bhindi)",
    price: "S$0.65/kg",
    badge: "Vegetables",
    color: "from-green-300 to-green-500",
    icon: "🥒",
  },
  {
    id: 7,
    name: "Brinjal (Baingan)",
    price: "S$0.55/kg",
    badge: "Vegetables",
    color: "from-purple-300 to-purple-500",
    icon: "🍆",
  },
  {
    id: 8,
    name: "Bitter Gourd (Karela)",
    price: "S$0.75/kg",
    badge: "Vegetables",
    color: "from-green-400 to-green-600",
    icon: "🥬",
  },
  {
    id: 9,
    name: "Bottle Gourd (Lauki)",
    price: "S$0.40/kg",
    badge: "Vegetables",
    color: "from-green-200 to-green-400",
    icon: "🥒",
  },
  {
    id: 10,
    name: "Drumstick (Moringa)",
    price: "S$0.95/kg",
    badge: "Vegetables",
    color: "from-green-300 to-green-500",
    icon: "🌿",
  },

  // Beverages
  {
    id: 11,
    name: "Coca Cola 600ml",
    price: "S$0.65",
    badge: "Beverages",
    color: "from-red-400 to-red-600",
    icon: "🥤",
  },
  {
    id: 12,
    name: "Pepsi 600ml",
    price: "S$0.65",
    badge: "Beverages",
    color: "from-blue-400 to-blue-600",
    icon: "🥤",
  },
  {
    id: 13,
    name: "Thums Up 600ml",
    price: "S$0.65",
    badge: "Beverages",
    color: "from-gray-600 to-gray-800",
    icon: "🥤",
  },
  {
    id: 14,
    name: "Masala Chai",
    price: "S$0.25/cup",
    badge: "Beverages",
    color: "from-amber-300 to-amber-500",
    icon: "☕",
  },
  {
    id: 15,
    name: "Sweet Lassi",
    price: "S$0.50",
    badge: "Dairy",
    color: "from-pink-200 to-pink-400",
    icon: "🥛",
  },

  // Biscuits
  {
    id: 16,
    name: "Parle-G Original",
    price: "S$0.15",
    badge: "Biscuits",
    color: "from-yellow-200 to-yellow-400",
    icon: "🍪",
  },
  {
    id: 17,
    name: "Monaco Salted Biscuits",
    price: "S$0.25",
    badge: "Biscuits",
    color: "from-orange-200 to-orange-400",
    icon: "🍪",
  },
  {
    id: 18,
    name: "Good Day Cashew",
    price: "S$0.40",
    badge: "Biscuits",
    color: "from-amber-200 to-amber-400",
    icon: "🍪",
  },
  {
    id: 19,
    name: "Oreo Cookies",
    price: "S$0.55",
    badge: "Biscuits",
    color: "from-gray-600 to-gray-800",
    icon: "🍪",
  },
  {
    id: 20,
    name: "Marie Gold Biscuits",
    price: "S$0.50",
    badge: "Biscuits",
    color: "from-yellow-300 to-yellow-500",
    icon: "🍪",
  },

  // Snacks
  {
    id: 21,
    name: "Haldiram's Namkeen",
    price: "S$0.75",
    badge: "Snacks",
    color: "from-yellow-400 to-orange-500",
    icon: "🥨",
  },
  {
    id: 22,
    name: "Kurkure Masala Munch",
    price: "S$0.35",
    badge: "Snacks",
    color: "from-orange-400 to-red-500",
    icon: "🌽",
  },
  {
    id: 23,
    name: "Lay's Classic Salted",
    price: "S$0.45",
    badge: "Snacks",
    color: "from-yellow-300 to-yellow-500",
    icon: "🥔",
  },
  {
    id: 24,
    name: "Britannia Good Day",
    price: "S$0.30",
    badge: "Biscuits",
    color: "from-orange-200 to-orange-400",
    icon: "🍪",
  },
  {
    id: 25,
    name: "Amul Fresh Milk",
    price: "S$0.85/ltr",
    badge: "Dairy",
    color: "from-blue-100 to-blue-300",
    icon: "🥛",
  },
];

// Async function to load all products from API
let allProductsCache: Product[] | null = null;

export async function loadAllProducts(): Promise<Product[]> {
  if (allProductsCache) {
    return allProductsCache;
  }

  try {
    const response = await fetch('/api/products');
    if (!response.ok) {
      throw new Error('Failed to load products');
    }
    const loadedProducts: Product[] = await response.json();
    allProductsCache = loadedProducts;
    return loadedProducts;
  } catch (error) {
    console.error('Error loading products:', error);
    // Fallback to default products if API fails
    return products;
  }
}

// Helper function to get products by category
export function getProductsByCategory(category: BadgeType, productList: Product[] = products): Product[] {
  return productList.filter(product => product.badge === category);
}

// Helper function to search products
export function searchProducts(query: string, productList: Product[] = products): Product[] {
  const lowercaseQuery = query.toLowerCase();
  return productList.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.brands?.toLowerCase().includes(lowercaseQuery) ||
    product.categories?.toLowerCase().includes(lowercaseQuery)
  );
}

// Get total number of products
export const totalProducts = products.length;

// Get available categories
export const availableCategories = [...new Set(products.map(p => p.badge))]; 
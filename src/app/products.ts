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

// Enhanced confidence-based search function
export function searchProducts(query: string, productList: Product[] = products): Product[] {
  if (!query.trim()) return productList;
  
  const keywords = query.toLowerCase().trim().split(/\s+/).filter(keyword => keyword.length > 0);
  if (keywords.length === 0) return productList;
  
  const scoredProducts = productList.map(product => {
    let totalScore = 0;
    let maxPossibleScore = 0;
    
    // Define field weights (importance)
    const fields = [
      { content: product.name.toLowerCase(), weight: 40 }, // Name is most important
      { content: product.brands?.toLowerCase() || '', weight: 25 }, // Brand is second
      { content: product.badge.toLowerCase(), weight: 20 }, // Category is third
      { content: product.categories?.toLowerCase() || '', weight: 10 }, // Categories
      { content: product.unitQuantity?.toLowerCase() || '', weight: 3 }, // Quantity
      { content: product.countries?.toLowerCase() || '', weight: 2 } // Countries least important
    ];
    
    keywords.forEach(keyword => {
      let keywordScore = 0;
      let keywordMaxScore = 0;
      
      fields.forEach(field => {
        if (!field.content) return;
        
        keywordMaxScore += field.weight;
        
        // Exact match in field (highest score)
        if (field.content === keyword) {
          keywordScore += field.weight * 1.0;
        }
        // Field starts with keyword (very high score)
        else if (field.content.startsWith(keyword)) {
          keywordScore += field.weight * 0.9;
        }
        // Field contains keyword as whole word (high score)
        else if (field.content.includes(` ${keyword} `) || field.content.includes(`${keyword} `) || field.content.includes(` ${keyword}`)) {
          keywordScore += field.weight * 0.8;
        }
        // Field contains keyword as substring (medium score)
        else if (field.content.includes(keyword)) {
          keywordScore += field.weight * 0.6;
        }
        // Fuzzy match - keyword contains part of field words or vice versa (low score)
        else {
          const fieldWords = field.content.split(/\s+/).filter(word => word.length > 2);
          const fuzzyMatch = fieldWords.some(word => {
            // Check if keyword and word share significant overlap
            if (keyword.length >= 3 && word.length >= 3) {
              return keyword.includes(word.slice(0, Math.min(3, word.length))) ||
                     word.includes(keyword.slice(0, Math.min(3, keyword.length))) ||
                     keyword.includes(word.slice(-3)) ||
                     word.includes(keyword.slice(-3));
            }
            return false;
          });
          
          if (fuzzyMatch) {
            keywordScore += field.weight * 0.3;
          }
        }
      });
      
      totalScore += keywordScore;
      maxPossibleScore += keywordMaxScore;
    });
    
    // Calculate confidence percentage
    const confidence = maxPossibleScore > 0 ? (totalScore / maxPossibleScore) * 100 : 0;
    
    return {
      product,
      confidence: Math.min(confidence, 100) // Cap at 100%
    };
  });
  
  // Filter products with >50% confidence and sort by confidence descending
  return scoredProducts
    .filter(item => item.confidence > 50)
    .sort((a, b) => b.confidence - a.confidence)
    .map(item => item.product);
}

// Get total number of products
export const totalProducts = products.length;

// Get available categories
export const availableCategories = [...new Set(products.map(p => p.badge))]; 
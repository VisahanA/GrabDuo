import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'src', 'app', 'filterproductsdata1.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const jsonData = JSON.parse(fileContents);
    
    // Transform the JSON data to match our Product interface
    const products = jsonData.map((item: any) => {
      // Helper function to determine category badge
      const getCategoryBadge = (mainCategory: string, categories: string) => {
        if (!mainCategory && !categories) return "Other";
        
        const categoryText = (mainCategory || categories || "").toLowerCase();
        
        if (categoryText.includes('beverage') || categoryText.includes('drink')) return "Beverages";
        if (categoryText.includes('fruit') || categoryText.includes('berry')) return "Fruits";
        if (categoryText.includes('vegetable') || categoryText.includes('plant')) return "Vegetables";
        if (categoryText.includes('dairy') || categoryText.includes('milk') || categoryText.includes('cheese')) return "Dairy";
        if (categoryText.includes('biscuit') || categoryText.includes('cookie')) return "Biscuits";
        if (categoryText.includes('snack') || categoryText.includes('crisp')) return "Snacks";
        if (categoryText.includes('meat') || categoryText.includes('fish')) return "Meat";
        if (categoryText.includes('cereal') || categoryText.includes('bread')) return "Cereals";
        if (categoryText.includes('sweet') || categoryText.includes('chocolate') || categoryText.includes('candy')) return "Sweets";
        
        return "Other";
      };
      
      // Helper function to get color based on category
      const getCategoryColor = (badge: string) => {
        const colors: { [key: string]: string } = {
          "Fruits": "from-yellow-300 to-orange-400",
          "Vegetables": "from-green-300 to-green-500",
          "Beverages": "from-blue-400 to-blue-600",
          "Dairy": "from-pink-200 to-pink-400",
          "Biscuits": "from-yellow-200 to-yellow-400",
          "Snacks": "from-orange-400 to-red-500",
          "Meat": "from-red-400 to-red-600",
          "Cereals": "from-amber-300 to-amber-500",
          "Sweets": "from-purple-300 to-purple-500",
          "Other": "from-gray-300 to-gray-500"
        };
        return colors[badge] || colors["Other"];
      };
      
      // Helper function to get icon based on category
      const getCategoryIcon = (badge: string) => {
        const icons: { [key: string]: string } = {
          "Fruits": "🍎",
          "Vegetables": "🥬",
          "Beverages": "🥤",
          "Dairy": "🥛",
          "Biscuits": "🍪",
          "Snacks": "🥨",
          "Meat": "🥩",
          "Cereals": "🌾",
          "Sweets": "🍭",
          "Other": "📦"
        };
        return icons[badge] || icons["Other"];
      };
      
      // Helper function to generate a reasonable price
      const generatePrice = (quantity: string, badge: string) => {
        if (!quantity) return "S$1.00";
        
        const numMatch = quantity.match(/(\d+(\.\d+)?)/);
        const basePrice = numMatch ? parseFloat(numMatch[1]) * 0.01 : 1.0;
        
        let multiplier = 1;
        if (badge === "Beverages") multiplier = 0.5;
        else if (badge === "Fruits") multiplier = 0.8;
        else if (badge === "Vegetables") multiplier = 0.6;
        else if (badge === "Dairy") multiplier = 1.2;
        else if (badge === "Meat") multiplier = 2.0;
        
        const finalPrice = Math.max(0.25, basePrice * multiplier);
        return `S$${finalPrice.toFixed(2)}`;
      };
      
      const badge = getCategoryBadge(item.main_category, item.categories);
      const price = generatePrice(item.unitQuantity || item.quantity, badge);
      
      return {
        id: parseInt(item.code),
        name: item.product_name || "Unknown Product",
        price: price,
        badge: badge,
        color: getCategoryColor(badge),
        icon: getCategoryIcon(badge),
        brands: item.brands || "",
        unitQuantity: item.unitQuantity || item.quantity || "",
        categories: item.categories || "",
        countries: item.countries || "",
        imageUrl: item.image_url || "",
        imageSmallUrl: item.image_small_url || ""
      };
    });
    
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error loading products:', error);
    return NextResponse.json({ error: 'Failed to load products' }, { status: 500 });
  }
} 
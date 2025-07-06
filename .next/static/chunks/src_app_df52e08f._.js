(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/products.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "availableCategories": (()=>availableCategories),
    "getProductsByCategory": (()=>getProductsByCategory),
    "loadAllProducts": (()=>loadAllProducts),
    "products": (()=>products),
    "searchProducts": (()=>searchProducts),
    "totalProducts": (()=>totalProducts)
});
const products = [
    // Fruits
    {
        id: 1,
        name: "Fresh Mango (Alphonso)",
        price: "S$1.30/kg",
        badge: "Fruits",
        color: "from-yellow-300 to-orange-400",
        icon: "🥭"
    },
    {
        id: 2,
        name: "Sweet Guava",
        price: "S$0.65/kg",
        badge: "Fruits",
        color: "from-green-200 to-green-400",
        icon: "🍈"
    },
    {
        id: 3,
        name: "Fresh Pomegranate",
        price: "S$1.95/kg",
        badge: "Fruits",
        color: "from-red-300 to-red-500",
        icon: "🍎"
    },
    {
        id: 4,
        name: "Kesar Banana",
        price: "S$0.95/dozen",
        badge: "Fruits",
        color: "from-yellow-200 to-yellow-400",
        icon: "🍌"
    },
    {
        id: 5,
        name: "Fresh Papaya",
        price: "S$0.50/kg",
        badge: "Fruits",
        color: "from-orange-200 to-orange-400",
        icon: "🍊"
    },
    // Vegetables
    {
        id: 6,
        name: "Lady Finger (Bhindi)",
        price: "S$0.65/kg",
        badge: "Vegetables",
        color: "from-green-300 to-green-500",
        icon: "🥒"
    },
    {
        id: 7,
        name: "Brinjal (Baingan)",
        price: "S$0.55/kg",
        badge: "Vegetables",
        color: "from-purple-300 to-purple-500",
        icon: "🍆"
    },
    {
        id: 8,
        name: "Bitter Gourd (Karela)",
        price: "S$0.75/kg",
        badge: "Vegetables",
        color: "from-green-400 to-green-600",
        icon: "🥬"
    },
    {
        id: 9,
        name: "Bottle Gourd (Lauki)",
        price: "S$0.40/kg",
        badge: "Vegetables",
        color: "from-green-200 to-green-400",
        icon: "🥒"
    },
    {
        id: 10,
        name: "Drumstick (Moringa)",
        price: "S$0.95/kg",
        badge: "Vegetables",
        color: "from-green-300 to-green-500",
        icon: "🌿"
    },
    // Beverages
    {
        id: 11,
        name: "Coca Cola 600ml",
        price: "S$0.65",
        badge: "Beverages",
        color: "from-red-400 to-red-600",
        icon: "🥤"
    },
    {
        id: 12,
        name: "Pepsi 600ml",
        price: "S$0.65",
        badge: "Beverages",
        color: "from-blue-400 to-blue-600",
        icon: "🥤"
    },
    {
        id: 13,
        name: "Thums Up 600ml",
        price: "S$0.65",
        badge: "Beverages",
        color: "from-gray-600 to-gray-800",
        icon: "🥤"
    },
    {
        id: 14,
        name: "Masala Chai",
        price: "S$0.25/cup",
        badge: "Beverages",
        color: "from-amber-300 to-amber-500",
        icon: "☕"
    },
    {
        id: 15,
        name: "Sweet Lassi",
        price: "S$0.50",
        badge: "Dairy",
        color: "from-pink-200 to-pink-400",
        icon: "🥛"
    },
    // Biscuits
    {
        id: 16,
        name: "Parle-G Original",
        price: "S$0.15",
        badge: "Biscuits",
        color: "from-yellow-200 to-yellow-400",
        icon: "🍪"
    },
    {
        id: 17,
        name: "Monaco Salted Biscuits",
        price: "S$0.25",
        badge: "Biscuits",
        color: "from-orange-200 to-orange-400",
        icon: "🍪"
    },
    {
        id: 18,
        name: "Good Day Cashew",
        price: "S$0.40",
        badge: "Biscuits",
        color: "from-amber-200 to-amber-400",
        icon: "🍪"
    },
    {
        id: 19,
        name: "Oreo Cookies",
        price: "S$0.55",
        badge: "Biscuits",
        color: "from-gray-600 to-gray-800",
        icon: "🍪"
    },
    {
        id: 20,
        name: "Marie Gold Biscuits",
        price: "S$0.50",
        badge: "Biscuits",
        color: "from-yellow-300 to-yellow-500",
        icon: "🍪"
    },
    // Snacks
    {
        id: 21,
        name: "Haldiram's Namkeen",
        price: "S$0.75",
        badge: "Snacks",
        color: "from-yellow-400 to-orange-500",
        icon: "🥨"
    },
    {
        id: 22,
        name: "Kurkure Masala Munch",
        price: "S$0.35",
        badge: "Snacks",
        color: "from-orange-400 to-red-500",
        icon: "🌽"
    },
    {
        id: 23,
        name: "Lay's Classic Salted",
        price: "S$0.45",
        badge: "Snacks",
        color: "from-yellow-300 to-yellow-500",
        icon: "🥔"
    },
    {
        id: 24,
        name: "Britannia Good Day",
        price: "S$0.30",
        badge: "Biscuits",
        color: "from-orange-200 to-orange-400",
        icon: "🍪"
    },
    {
        id: 25,
        name: "Amul Fresh Milk",
        price: "S$0.85/ltr",
        badge: "Dairy",
        color: "from-blue-100 to-blue-300",
        icon: "🥛"
    }
];
// Async function to load all products from API
let allProductsCache = null;
async function loadAllProducts() {
    if (allProductsCache) {
        return allProductsCache;
    }
    try {
        const response = await fetch('/api/products');
        if (!response.ok) {
            throw new Error('Failed to load products');
        }
        const loadedProducts = await response.json();
        allProductsCache = loadedProducts;
        return loadedProducts;
    } catch (error) {
        console.error('Error loading products:', error);
        // Fallback to default products if API fails
        return products;
    }
}
function getProductsByCategory(category, productList = products) {
    return productList.filter((product)=>product.badge === category);
}
function searchProducts(query, productList = products) {
    if (!query.trim()) return productList;
    const keywords = query.toLowerCase().trim().split(/\s+/).filter((keyword)=>keyword.length > 0);
    if (keywords.length === 0) return productList;
    const scoredProducts = productList.map((product)=>{
        let totalScore = 0;
        let maxPossibleScore = 0;
        // Define field weights (importance)
        const fields = [
            {
                content: product.name.toLowerCase(),
                weight: 40
            },
            {
                content: product.brands?.toLowerCase() || '',
                weight: 25
            },
            {
                content: product.badge.toLowerCase(),
                weight: 20
            },
            {
                content: product.categories?.toLowerCase() || '',
                weight: 10
            },
            {
                content: product.unitQuantity?.toLowerCase() || '',
                weight: 3
            },
            {
                content: product.countries?.toLowerCase() || '',
                weight: 2
            } // Countries least important
        ];
        keywords.forEach((keyword)=>{
            let keywordScore = 0;
            let keywordMaxScore = 0;
            fields.forEach((field)=>{
                if (!field.content) return;
                keywordMaxScore += field.weight;
                // Exact match in field (highest score)
                if (field.content === keyword) {
                    keywordScore += field.weight * 1.0;
                } else if (field.content.startsWith(keyword)) {
                    keywordScore += field.weight * 0.9;
                } else if (field.content.includes(` ${keyword} `) || field.content.includes(`${keyword} `) || field.content.includes(` ${keyword}`)) {
                    keywordScore += field.weight * 0.8;
                } else if (field.content.includes(keyword)) {
                    keywordScore += field.weight * 0.6;
                } else {
                    const fieldWords = field.content.split(/\s+/).filter((word)=>word.length > 2);
                    const fuzzyMatch = fieldWords.some((word)=>{
                        // Check if keyword and word share significant overlap
                        if (keyword.length >= 3 && word.length >= 3) {
                            return keyword.includes(word.slice(0, Math.min(3, word.length))) || word.includes(keyword.slice(0, Math.min(3, keyword.length))) || keyword.includes(word.slice(-3)) || word.includes(keyword.slice(-3));
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
        const confidence = maxPossibleScore > 0 ? totalScore / maxPossibleScore * 100 : 0;
        return {
            product,
            confidence: Math.min(confidence, 100) // Cap at 100%
        };
    });
    // Filter products with >50% confidence and sort by confidence descending
    return scoredProducts.filter((item)=>item.confidence > 50).sort((a, b)=>b.confidence - a.confidence).map((item)=>item.product);
}
const totalProducts = products.length;
const availableCategories = [
    ...new Set(products.map((p)=>p.badge))
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/badge.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "badges": (()=>badges),
    "getBadgeStyles": (()=>getBadgeStyles)
});
const badges = {
    Organic: {
        type: "Organic",
        bgColor: "bg-green-100",
        textColor: "text-green-800"
    },
    Fresh: {
        type: "Fresh",
        bgColor: "bg-blue-100",
        textColor: "text-blue-800"
    },
    Bakery: {
        type: "Bakery",
        bgColor: "bg-orange-100",
        textColor: "text-orange-800"
    },
    Protein: {
        type: "Protein",
        bgColor: "bg-purple-100",
        textColor: "text-purple-800"
    },
    "Ready to eat": {
        type: "Ready to eat",
        bgColor: "bg-yellow-100",
        textColor: "text-yellow-800"
    },
    Snacks: {
        type: "Snacks",
        bgColor: "bg-red-100",
        textColor: "text-red-800"
    },
    Beverages: {
        type: "Beverages",
        bgColor: "bg-cyan-100",
        textColor: "text-cyan-800"
    },
    Traditional: {
        type: "Traditional",
        bgColor: "bg-amber-100",
        textColor: "text-amber-800"
    },
    Spicy: {
        type: "Spicy",
        bgColor: "bg-rose-100",
        textColor: "text-rose-800"
    },
    Sweet: {
        type: "Sweet",
        bgColor: "bg-pink-100",
        textColor: "text-pink-800"
    },
    Dairy: {
        type: "Dairy",
        bgColor: "bg-indigo-100",
        textColor: "text-indigo-800"
    },
    Grains: {
        type: "Grains",
        bgColor: "bg-yellow-100",
        textColor: "text-yellow-800"
    },
    Vegetables: {
        type: "Vegetables",
        bgColor: "bg-green-100",
        textColor: "text-green-800"
    },
    Fruits: {
        type: "Fruits",
        bgColor: "bg-orange-100",
        textColor: "text-orange-800"
    },
    Biscuits: {
        type: "Biscuits",
        bgColor: "bg-amber-100",
        textColor: "text-amber-800"
    },
    Other: {
        type: "Other",
        bgColor: "bg-gray-100",
        textColor: "text-gray-800"
    },
    Meat: {
        type: "Meat",
        bgColor: "bg-red-100",
        textColor: "text-red-800"
    },
    Sweets: {
        type: "Sweets",
        bgColor: "bg-pink-100",
        textColor: "text-pink-800"
    },
    Cereals: {
        type: "Cereals",
        bgColor: "bg-amber-100",
        textColor: "text-amber-800"
    }
};
const getBadgeStyles = (badgeType)=>{
    const badge = badges[badgeType];
    return `${badge.bgColor} ${badge.textColor}`;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/wishlist/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>WishlistPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/products.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$badge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/badge.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$cart$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/cart/CartContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function WishlistPage() {
    _s();
    const [newItemInput, setNewItemInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [shoppingList, setShoppingList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [checkedItems, setCheckedItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isCurateMode, setIsCurateMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [curatedProducts, setCuratedProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [curatedProductsByItem, setCuratedProductsByItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [allProducts, setAllProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"]);
    const [isLoadingProducts, setIsLoadingProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [fromOcr, setFromOcr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { addItem, removeItem, updateQuantity, items } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$cart$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    // Load all products when component mounts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WishlistPage.useEffect": ()=>{
            const loadProducts = {
                "WishlistPage.useEffect.loadProducts": async ()=>{
                    try {
                        const loadedProducts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadAllProducts"])();
                        setAllProducts(loadedProducts);
                    } catch (error) {
                        console.error('Failed to load all products:', error);
                        // Fallback to basic products on error
                        setAllProducts(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"]);
                    } finally{
                        setIsLoadingProducts(false);
                    }
                }
            }["WishlistPage.useEffect.loadProducts"];
            loadProducts();
        }
    }["WishlistPage.useEffect"], []);
    // Check if navigated from OCR and load OCR data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WishlistPage.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const urlParams = new URLSearchParams(window.location.search);
                const isFromOcr = urlParams.get('from') === 'ocr' || urlParams.get('from') === 'stt';
                if (isFromOcr) {
                    setFromOcr(true);
                    // Load OCR shopping items
                    if (typeof Storage !== 'undefined') {
                        const ocrItemsJson = localStorage.getItem('ocrShoppingItems');
                        if (ocrItemsJson) {
                            try {
                                const ocrItems = JSON.parse(ocrItemsJson);
                                setShoppingList(ocrItems);
                                setCheckedItems(new Array(ocrItems.length).fill(false)); // Initialize checkboxes as unchecked
                                // Clear the localStorage data after loading
                                localStorage.removeItem('ocrShoppingItems');
                                // Show success message
                                setTimeout({
                                    "WishlistPage.useEffect": ()=>{
                                        showToast(`✅ Added ${ocrItems.length} items from your ${urlParams.get('from') === 'stt' ? 'voice' : 'image'} to the shopping list!`);
                                    }
                                }["WishlistPage.useEffect"], 500);
                            } catch (error) {
                                console.error('Failed to parse OCR items:', error);
                            }
                        }
                        // Clear the original OCR text from localStorage
                        localStorage.removeItem('ocrOriginalText');
                    }
                }
            }
        }
    }["WishlistPage.useEffect"], []);
    const handleInputChange = (e)=>{
        setNewItemInput(e.target.value);
    };
    const handleAddItem = ()=>{
        if (newItemInput.trim()) {
            setShoppingList((prev)=>[
                    ...prev,
                    newItemInput.trim()
                ]);
            setCheckedItems((prev)=>[
                    ...prev,
                    false
                ]); // Add unchecked state for new item
            setNewItemInput("");
        }
    };
    const handleKeyPress = (e)=>{
        if (e.key === 'Enter') {
            handleAddItem();
        }
    };
    const handleRemoveItem = (index)=>{
        setShoppingList((prev)=>prev.filter((_, i)=>i !== index));
        setCheckedItems((prev)=>prev.filter((_, i)=>i !== index));
    };
    const handleToggleItem = (index)=>{
        setCheckedItems((prev)=>prev.map((checked, i)=>i === index ? !checked : checked));
    };
    const handleClearInput = ()=>{
        setNewItemInput("");
    };
    const showToast = (message)=>{
        setToast(message);
        setTimeout(()=>setToast(""), 3000);
    };
    // Enhanced confidence-based search function for individual item curation
    const enhancedCurationSearchByItem = (products, shoppingItems)=>{
        const resultsByItem = {};
        shoppingItems.forEach((item)=>{
            const itemResults = enhancedCurationSearchSingleItem(products, item);
            resultsByItem[item] = itemResults.slice(0, 10); // Limit to 10 products per item
        });
        return resultsByItem;
    };
    // Enhanced confidence-based search function for single item
    const enhancedCurationSearchSingleItem = (products, searchItem)=>{
        const keywords = searchItem.toLowerCase().trim().split(/\s+/).filter((keyword)=>keyword.length > 0);
        if (keywords.length === 0) return [];
        const allResults = new Map();
        products.forEach((product)=>{
            let totalScore = 0;
            let maxPossibleScore = 0;
            // Define field weights (importance)
            const fields = [
                {
                    content: product.name.toLowerCase(),
                    weight: 40
                },
                {
                    content: product.brands?.toLowerCase() || '',
                    weight: 25
                },
                {
                    content: product.badge.toLowerCase(),
                    weight: 20
                },
                {
                    content: product.categories?.toLowerCase() || '',
                    weight: 10
                },
                {
                    content: product.unitQuantity?.toLowerCase() || '',
                    weight: 3
                },
                {
                    content: product.countries?.toLowerCase() || '',
                    weight: 2
                } // Countries least important
            ];
            keywords.forEach((keyword)=>{
                let keywordScore = 0;
                let keywordMaxScore = 0;
                fields.forEach((field)=>{
                    if (!field.content) return;
                    keywordMaxScore += field.weight;
                    // Exact match in field (highest score)
                    if (field.content === keyword) {
                        keywordScore += field.weight * 1.0;
                    } else if (field.content.startsWith(keyword)) {
                        keywordScore += field.weight * 0.9;
                    } else if (field.content.includes(` ${keyword} `) || field.content.includes(`${keyword} `) || field.content.includes(` ${keyword}`)) {
                        keywordScore += field.weight * 0.8;
                    } else if (field.content.includes(keyword)) {
                        keywordScore += field.weight * 0.6;
                    } else {
                        const fieldWords = field.content.split(/\s+/).filter((word)=>word.length > 2);
                        const fuzzyMatch = fieldWords.some((word)=>{
                            // Check if keyword and word share significant overlap
                            if (keyword.length >= 3 && word.length >= 3) {
                                return keyword.includes(word.slice(0, Math.min(3, word.length))) || word.includes(keyword.slice(0, Math.min(3, keyword.length))) || keyword.includes(word.slice(-3)) || word.includes(keyword.slice(-3));
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
            const confidence = maxPossibleScore > 0 ? totalScore / maxPossibleScore * 100 : 0;
            // Only consider products with >50% confidence
            if (confidence > 50) {
                const existing = allResults.get(product.id);
                if (!existing || confidence > existing.confidence) {
                    allResults.set(product.id, {
                        product,
                        confidence
                    });
                }
            }
        });
        // Return products sorted by confidence descending
        return Array.from(allResults.values()).sort((a, b)=>b.confidence - a.confidence).map((item)=>item.product);
    };
    // Enhanced confidence-based search function for curation
    const enhancedCurationSearch = (products, shoppingItems)=>{
        if (shoppingItems.length === 0) return [];
        const allResults = new Map();
        shoppingItems.forEach((item)=>{
            const keywords = item.toLowerCase().trim().split(/\s+/).filter((keyword)=>keyword.length > 0);
            if (keywords.length === 0) return;
            products.forEach((product)=>{
                let totalScore = 0;
                let maxPossibleScore = 0;
                // Define field weights (importance)
                const fields = [
                    {
                        content: product.name.toLowerCase(),
                        weight: 40
                    },
                    {
                        content: product.brands?.toLowerCase() || '',
                        weight: 25
                    },
                    {
                        content: product.badge.toLowerCase(),
                        weight: 20
                    },
                    {
                        content: product.categories?.toLowerCase() || '',
                        weight: 10
                    },
                    {
                        content: product.unitQuantity?.toLowerCase() || '',
                        weight: 3
                    },
                    {
                        content: product.countries?.toLowerCase() || '',
                        weight: 2
                    } // Countries least important
                ];
                keywords.forEach((keyword)=>{
                    let keywordScore = 0;
                    let keywordMaxScore = 0;
                    fields.forEach((field)=>{
                        if (!field.content) return;
                        keywordMaxScore += field.weight;
                        // Exact match in field (highest score)
                        if (field.content === keyword) {
                            keywordScore += field.weight * 1.0;
                        } else if (field.content.startsWith(keyword)) {
                            keywordScore += field.weight * 0.9;
                        } else if (field.content.includes(` ${keyword} `) || field.content.includes(`${keyword} `) || field.content.includes(` ${keyword}`)) {
                            keywordScore += field.weight * 0.8;
                        } else if (field.content.includes(keyword)) {
                            keywordScore += field.weight * 0.6;
                        } else {
                            const fieldWords = field.content.split(/\s+/).filter((word)=>word.length > 2);
                            const fuzzyMatch = fieldWords.some((word)=>{
                                // Check if keyword and word share significant overlap
                                if (keyword.length >= 3 && word.length >= 3) {
                                    return keyword.includes(word.slice(0, Math.min(3, word.length))) || word.includes(keyword.slice(0, Math.min(3, keyword.length))) || keyword.includes(word.slice(-3)) || word.includes(keyword.slice(-3));
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
                const confidence = maxPossibleScore > 0 ? totalScore / maxPossibleScore * 100 : 0;
                // Only consider products with >50% confidence
                if (confidence > 50) {
                    const existing = allResults.get(product.id);
                    if (!existing || confidence > existing.confidence) {
                        allResults.set(product.id, {
                            product,
                            confidence
                        });
                    }
                }
            });
        });
        // Return products sorted by confidence descending
        return Array.from(allResults.values()).sort((a, b)=>b.confidence - a.confidence).map((item)=>item.product);
    };
    const handleCurateShoppingList = ()=>{
        if (shoppingList.length === 0) {
            showToast("Please add items to your shopping list first!");
            return;
        }
        // Get only checked items for curation
        const checkedShoppingItems = shoppingList.filter((_, index)=>checkedItems[index]);
        if (checkedShoppingItems.length === 0) {
            showToast("Please check at least one item to curate products!");
            return;
        }
        // Use enhanced search for better product matching with only checked items
        const productsByItem = enhancedCurationSearchByItem(allProducts, checkedShoppingItems);
        setCuratedProductsByItem(productsByItem);
        setIsCurateMode(true);
    };
    const handleBackToList = ()=>{
        setIsCurateMode(false);
        setCuratedProducts([]);
        setCuratedProductsByItem({});
    };
    const handleAddToCart = (product)=>{
        addItem(product);
        showToast(`${product.name} added to cart!`);
    };
    const handleIncreaseQuantity = (product)=>{
        const cartItem = items.find((item)=>item.id === product.id);
        if (cartItem) {
            updateQuantity(product.id, cartItem.quantity + 1);
        } else {
            addItem(product);
        }
        showToast(`${product.name} quantity updated`);
    };
    const handleDecreaseQuantity = (product)=>{
        const cartItem = items.find((item)=>item.id === product.id);
        if (cartItem) {
            if (cartItem.quantity === 1) {
                removeItem(product.id);
                showToast(`${product.name} removed from cart`);
            } else {
                updateQuantity(product.id, cartItem.quantity - 1);
                showToast(`${product.name} quantity updated`);
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-green-50 px-4 py-6",
        children: [
            toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-4 left-1/2 transform -translate-x-1/2 z-50 animate-slide-down",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-4 h-4 text-green-400",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fillRule: "evenodd",
                                d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                clipRule: "evenodd"
                            }, void 0, false, {
                                fileName: "[project]/src/app/wishlist/page.tsx",
                                lineNumber: 368,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/wishlist/page.tsx",
                            lineNumber: 367,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm",
                            children: toast
                        }, void 0, false, {
                            fileName: "[project]/src/app/wishlist/page.tsx",
                            lineNumber: 370,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/wishlist/page.tsx",
                    lineNumber: 366,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/wishlist/page.tsx",
                lineNumber: 365,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: !isCurateMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "p-1 hover:bg-green-100 rounded-lg transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6 text-green-600",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M15 19l-7-7 7-7"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/wishlist/page.tsx",
                                    lineNumber: 389,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/wishlist/page.tsx",
                                lineNumber: 383,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/wishlist/page.tsx",
                            lineNumber: 379,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold text-gray-900",
                            children: "Shopping List"
                        }, void 0, false, {
                            fileName: "[project]/src/app/wishlist/page.tsx",
                            lineNumber: 397,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/wishlist/page.tsx",
                    lineNumber: 378,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/wishlist/page.tsx",
                lineNumber: 376,
                columnNumber: 7
            }, this),
            !isCurateMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                shoppingList.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/wishlist/page.tsx",
                                        lineNumber: 416,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/wishlist/page.tsx",
                                    lineNumber: 410,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Add new item to your shopping list...",
                                    value: newItemInput,
                                    onChange: handleInputChange,
                                    onKeyPress: handleKeyPress,
                                    className: `w-full ${shoppingList.length > 0 ? 'pl-10' : 'pl-4'} pr-24 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 placeholder-gray-500`
                                }, void 0, false, {
                                    fileName: "[project]/src/app/wishlist/page.tsx",
                                    lineNumber: 424,
                                    columnNumber: 15
                                }, this),
                                newItemInput && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleClearInput,
                                    className: "absolute right-12 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-md transition-colors",
                                    title: "Clear input",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-4 h-4 text-gray-400 hover:text-gray-600",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M6 18L18 6M6 6l12 12"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/wishlist/page.tsx",
                                            lineNumber: 444,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/wishlist/page.tsx",
                                        lineNumber: 438,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/wishlist/page.tsx",
                                    lineNumber: 433,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleAddItem,
                                    className: "absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-600 text-white px-3 py-1.5 rounded-md hover:bg-green-700 transition-colors text-sm font-medium",
                                    children: "Add"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/wishlist/page.tsx",
                                    lineNumber: 453,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/wishlist/page.tsx",
                            lineNumber: 408,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/wishlist/page.tsx",
                        lineNumber: 407,
                        columnNumber: 11
                    }, this),
                    shoppingList.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-gray-900 mb-4",
                                children: [
                                    "Your Items (",
                                    shoppingList.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/wishlist/page.tsx",
                                lineNumber: 465,
                                columnNumber: 15
                            }, this),
                            shoppingList.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-lg shadow-sm border border-gray-100 p-4 flex items-center justify-between hover:shadow-md transition-shadow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex items-center cursor-pointer",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: checkedItems[index] || false,
                                                        onChange: ()=>handleToggleItem(index),
                                                        className: "w-4 h-4 text-green-600 bg-white border-gray-300 rounded focus:ring-green-500 focus:ring-2 transition-colors"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/wishlist/page.tsx",
                                                        lineNumber: 475,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/wishlist/page.tsx",
                                                    lineNumber: 474,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-900 font-medium",
                                                    children: item
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/wishlist/page.tsx",
                                                    lineNumber: 482,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/wishlist/page.tsx",
                                            lineNumber: 473,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleRemoveItem(index),
                                            className: "p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors",
                                            title: "Remove item",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1-1H8a1 1 0 00-1 1v3M4 7h16"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/wishlist/page.tsx",
                                                    lineNumber: 495,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/wishlist/page.tsx",
                                                lineNumber: 489,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/wishlist/page.tsx",
                                            lineNumber: 484,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/app/wishlist/page.tsx",
                                    lineNumber: 469,
                                    columnNumber: 17
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/wishlist/page.tsx",
                        lineNumber: 464,
                        columnNumber: 13
                    }, this) : /* Empty State */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-gray-400 mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-16 h-16 mx-auto mb-4",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 1.5,
                                        d: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/wishlist/page.tsx",
                                        lineNumber: 516,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/wishlist/page.tsx",
                                    lineNumber: 510,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/wishlist/page.tsx",
                                lineNumber: 509,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-gray-900 mb-2",
                                children: "Your shopping list is empty"
                            }, void 0, false, {
                                fileName: "[project]/src/app/wishlist/page.tsx",
                                lineNumber: 524,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: "Start adding items using the input box above to keep track of what you need."
                            }, void 0, false, {
                                fileName: "[project]/src/app/wishlist/page.tsx",
                                lineNumber: 527,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/wishlist/page.tsx",
                        lineNumber: 508,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleCurateShoppingList,
                                disabled: shoppingList.length === 0 || isLoadingProducts,
                                className: `inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-colors font-medium ${shoppingList.length === 0 || isLoadingProducts ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-green-600 text-white hover:bg-green-700'}`,
                                children: isLoadingProducts ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "animate-spin h-5 w-5",
                                            viewBox: "0 0 24 24",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    className: "opacity-25",
                                                    cx: "12",
                                                    cy: "12",
                                                    r: "10",
                                                    stroke: "currentColor",
                                                    strokeWidth: "4",
                                                    fill: "none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/wishlist/page.tsx",
                                                    lineNumber: 549,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    className: "opacity-75",
                                                    fill: "currentColor",
                                                    d: "M4 12a8 8 0 018-8v8H4z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/wishlist/page.tsx",
                                                    lineNumber: 558,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/wishlist/page.tsx",
                                            lineNumber: 548,
                                            columnNumber: 19
                                        }, this),
                                        "Loading Products..."
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-5 h-5",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/wishlist/page.tsx",
                                                lineNumber: 574,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/wishlist/page.tsx",
                                            lineNumber: 568,
                                            columnNumber: 19
                                        }, this),
                                        "Curate Checked Items",
                                        checkedItems.filter(Boolean).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full",
                                            children: checkedItems.filter(Boolean).length
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/wishlist/page.tsx",
                                            lineNumber: 583,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/src/app/wishlist/page.tsx",
                                lineNumber: 537,
                                columnNumber: 13
                            }, this),
                            !isLoadingProducts && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 text-sm text-gray-600",
                                children: [
                                    "Ready to curate from ",
                                    allProducts.length.toLocaleString(),
                                    " products"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/wishlist/page.tsx",
                                lineNumber: 593,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/wishlist/page.tsx",
                        lineNumber: 536,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true) : /* Curated Products View */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleBackToList,
                            className: "inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M15 19l-7-7 7-7"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/wishlist/page.tsx",
                                        lineNumber: 614,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/wishlist/page.tsx",
                                    lineNumber: 608,
                                    columnNumber: 15
                                }, this),
                                "Back to Shopping List"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/wishlist/page.tsx",
                            lineNumber: 604,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/wishlist/page.tsx",
                        lineNumber: 603,
                        columnNumber: 11
                    }, this),
                    Object.keys(curatedProductsByItem).length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 mb-2",
                                        children: "Based on your checked items, we found these matching products:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/wishlist/page.tsx",
                                        lineNumber: 629,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: Object.keys(curatedProductsByItem).map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium",
                                                children: [
                                                    "✓ ",
                                                    item
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/src/app/wishlist/page.tsx",
                                                lineNumber: 634,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/wishlist/page.tsx",
                                        lineNumber: 632,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/wishlist/page.tsx",
                                lineNumber: 628,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-8",
                                children: Object.entries(curatedProductsByItem).map(([item, products])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-xl shadow-sm border border-gray-100 p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 bg-green-100 rounded-full flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-4 h-4 text-green-600",
                                                            fill: "currentColor",
                                                            viewBox: "0 0 20 20",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                fillRule: "evenodd",
                                                                d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                                clipRule: "evenodd"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/wishlist/page.tsx",
                                                                lineNumber: 651,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/wishlist/page.tsx",
                                                            lineNumber: 650,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/wishlist/page.tsx",
                                                        lineNumber: 649,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-lg font-semibold text-gray-900",
                                                        children: item
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/wishlist/page.tsx",
                                                        lineNumber: 654,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-gray-500",
                                                        children: [
                                                            "(",
                                                            products.length,
                                                            " matches)"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/wishlist/page.tsx",
                                                        lineNumber: 657,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/wishlist/page.tsx",
                                                lineNumber: 648,
                                                columnNumber: 21
                                            }, this),
                                            products.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "overflow-x-auto",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-4 pb-4",
                                                    style: {
                                                        minWidth: 'fit-content'
                                                    },
                                                    children: products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-gray-50 rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow flex-shrink-0 w-80",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: `w-16 h-16 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center flex-shrink-0`,
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-2xl",
                                                                                    children: product.icon
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/wishlist/page.tsx",
                                                                                    lineNumber: 676,
                                                                                    columnNumber: 37
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/wishlist/page.tsx",
                                                                                lineNumber: 673,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-right",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-bold text-green-600 text-xl",
                                                                                    children: product.price
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/wishlist/page.tsx",
                                                                                    lineNumber: 681,
                                                                                    columnNumber: 37
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/wishlist/page.tsx",
                                                                                lineNumber: 680,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/wishlist/page.tsx",
                                                                        lineNumber: 672,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                className: "font-semibold text-gray-900 text-lg mb-2",
                                                                                children: product.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/wishlist/page.tsx",
                                                                                lineNumber: 689,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `inline-block px-2 py-1 text-xs font-medium rounded-full ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$badge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBadgeStyles"])(product.badge)}`,
                                                                                children: product.badge
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/wishlist/page.tsx",
                                                                                lineNumber: 692,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/wishlist/page.tsx",
                                                                        lineNumber: 688,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-auto",
                                                                        children: (()=>{
                                                                            const cartItem = items.find((item)=>item.id === product.id);
                                                                            const quantity = cartItem ? cartItem.quantity : 0;
                                                                            if (quantity === 0) {
                                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>handleIncreaseQuantity(product),
                                                                                    className: "w-full flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium",
                                                                                    title: "Add to cart",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                            className: "w-5 h-5",
                                                                                            fill: "none",
                                                                                            stroke: "currentColor",
                                                                                            viewBox: "0 0 24 24",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                strokeLinecap: "round",
                                                                                                strokeLinejoin: "round",
                                                                                                strokeWidth: 2,
                                                                                                d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/wishlist/page.tsx",
                                                                                                lineNumber: 718,
                                                                                                columnNumber: 45
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/wishlist/page.tsx",
                                                                                            lineNumber: 712,
                                                                                            columnNumber: 43
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-sm",
                                                                                            children: "Add"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/wishlist/page.tsx",
                                                                                            lineNumber: 725,
                                                                                            columnNumber: 43
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/wishlist/page.tsx",
                                                                                    lineNumber: 707,
                                                                                    columnNumber: 41
                                                                                }, this);
                                                                            }
                                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center justify-center gap-1 bg-gray-50 rounded-lg p-1",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        onClick: ()=>handleDecreaseQuantity(product),
                                                                                        className: "w-7 h-7 flex items-center justify-center bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition-colors flex-shrink-0",
                                                                                        title: "Decrease quantity",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                            className: "w-3 h-3",
                                                                                            fill: "none",
                                                                                            stroke: "currentColor",
                                                                                            viewBox: "0 0 24 24",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                strokeLinecap: "round",
                                                                                                strokeLinejoin: "round",
                                                                                                strokeWidth: 3,
                                                                                                d: "M20 12H4"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/wishlist/page.tsx",
                                                                                                lineNumber: 743,
                                                                                                columnNumber: 45
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/wishlist/page.tsx",
                                                                                            lineNumber: 737,
                                                                                            columnNumber: 43
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/wishlist/page.tsx",
                                                                                        lineNumber: 732,
                                                                                        columnNumber: 41
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "px-2 py-1 text-gray-900 font-bold text-sm min-w-[28px] text-center flex-shrink-0",
                                                                                        children: quantity
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/wishlist/page.tsx",
                                                                                        lineNumber: 751,
                                                                                        columnNumber: 41
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        onClick: ()=>handleIncreaseQuantity(product),
                                                                                        className: "w-7 h-7 flex items-center justify-center bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex-shrink-0",
                                                                                        title: "Increase quantity",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                            className: "w-3 h-3",
                                                                                            fill: "none",
                                                                                            stroke: "currentColor",
                                                                                            viewBox: "0 0 24 24",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                strokeLinecap: "round",
                                                                                                strokeLinejoin: "round",
                                                                                                strokeWidth: 3,
                                                                                                d: "M12 4v16m8-8H4"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/wishlist/page.tsx",
                                                                                                lineNumber: 765,
                                                                                                columnNumber: 45
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/wishlist/page.tsx",
                                                                                            lineNumber: 759,
                                                                                            columnNumber: 43
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/wishlist/page.tsx",
                                                                                        lineNumber: 754,
                                                                                        columnNumber: 41
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/wishlist/page.tsx",
                                                                                lineNumber: 731,
                                                                                columnNumber: 39
                                                                            }, this);
                                                                        })()
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/wishlist/page.tsx",
                                                                        lineNumber: 700,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/wishlist/page.tsx",
                                                                lineNumber: 670,
                                                                columnNumber: 31
                                                            }, this)
                                                        }, product.id, false, {
                                                            fileName: "[project]/src/app/wishlist/page.tsx",
                                                            lineNumber: 666,
                                                            columnNumber: 29
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/wishlist/page.tsx",
                                                    lineNumber: 664,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/wishlist/page.tsx",
                                                lineNumber: 663,
                                                columnNumber: 23
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center py-8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-500",
                                                    children: "No matching products found for this item."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/wishlist/page.tsx",
                                                    lineNumber: 784,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/wishlist/page.tsx",
                                                lineNumber: 783,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, item, true, {
                                        fileName: "[project]/src/app/wishlist/page.tsx",
                                        lineNumber: 647,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/wishlist/page.tsx",
                                lineNumber: 645,
                                columnNumber: 15
                            }, this),
                            items.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center mt-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/cart",
                                    className: "inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-5 h-5",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/wishlist/page.tsx",
                                                lineNumber: 804,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/wishlist/page.tsx",
                                            lineNumber: 798,
                                            columnNumber: 21
                                        }, this),
                                        "Go to Cart",
                                        items.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full",
                                            children: items.reduce((total, item)=>total + item.quantity, 0)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/wishlist/page.tsx",
                                            lineNumber: 813,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/wishlist/page.tsx",
                                    lineNumber: 794,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/wishlist/page.tsx",
                                lineNumber: 793,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/wishlist/page.tsx",
                        lineNumber: 627,
                        columnNumber: 13
                    }, this) : /* No Matches Found */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-gray-400 mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-16 h-16 mx-auto mb-4",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 1.5,
                                        d: "M9.172 16.172a4 4 0 015.656 0M9 12h6m-3-3v6m-9 1V7a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/wishlist/page.tsx",
                                        lineNumber: 831,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/wishlist/page.tsx",
                                    lineNumber: 825,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/wishlist/page.tsx",
                                lineNumber: 824,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-gray-900 mb-2",
                                children: "No matching products found"
                            }, void 0, false, {
                                fileName: "[project]/src/app/wishlist/page.tsx",
                                lineNumber: 839,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 mb-6",
                                children: "We couldn't find products matching your shopping list items. Try browsing our catalog or modify your shopping list."
                            }, void 0, false, {
                                fileName: "[project]/src/app/wishlist/page.tsx",
                                lineNumber: 842,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4 justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleBackToList,
                                        className: "bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium",
                                        children: "Back to Shopping List"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/wishlist/page.tsx",
                                        lineNumber: 846,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium",
                                        children: "Browse Products"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/wishlist/page.tsx",
                                        lineNumber: 852,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/wishlist/page.tsx",
                                lineNumber: 845,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/wishlist/page.tsx",
                        lineNumber: 823,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/wishlist/page.tsx",
                lineNumber: 601,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/wishlist/page.tsx",
        lineNumber: 362,
        columnNumber: 5
    }, this);
}
_s(WishlistPage, "pmRWZ1sNe5SrZ0iuiLHcCmIJyD0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$cart$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = WishlistPage;
var _c;
__turbopack_context__.k.register(_c, "WishlistPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_df52e08f._.js.map
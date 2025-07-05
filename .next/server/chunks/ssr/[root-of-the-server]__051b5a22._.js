module.exports = {

"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/app/products.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "products": (()=>products)
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
        price: "S$0.35",
        badge: "Snacks",
        color: "from-yellow-300 to-yellow-500",
        icon: "🥔"
    },
    {
        id: 24,
        name: "Samosa (Frozen)",
        price: "S$1.30/pack",
        badge: "Ready to eat",
        color: "from-amber-300 to-amber-500",
        icon: "🥟"
    },
    {
        id: 25,
        name: "Bhujia Sev",
        price: "S$0.55",
        badge: "Snacks",
        color: "from-yellow-500 to-orange-600",
        icon: "🍜"
    },
    // Traditional/Dairy
    {
        id: 26,
        name: "Pure Desi Ghee",
        price: "S$9.50/kg",
        badge: "Traditional",
        color: "from-yellow-400 to-yellow-600",
        icon: "🧈"
    },
    {
        id: 27,
        name: "Fresh Paneer",
        price: "S$5.20/kg",
        badge: "Dairy",
        color: "from-gray-100 to-gray-300",
        icon: "🧀"
    },
    {
        id: 28,
        name: "Amul Milk 1L",
        price: "S$1.00",
        badge: "Dairy",
        color: "from-blue-200 to-blue-400",
        icon: "��"
    },
    {
        id: 29,
        name: "Curd (Dahi) 500g",
        price: "S$0.55",
        badge: "Dairy",
        color: "from-gray-100 to-gray-200",
        icon: "🥛"
    },
    {
        id: 30,
        name: "Mango Pickle",
        price: "S$2.00",
        badge: "Traditional",
        color: "from-yellow-500 to-orange-600",
        icon: "🥭"
    },
    // Grains & Pulses
    {
        id: 31,
        name: "Basmati Rice 5kg",
        price: "S$7.50",
        badge: "Grains",
        color: "from-gray-100 to-gray-300",
        icon: "🍚"
    },
    {
        id: 32,
        name: "Toor Dal 1kg",
        price: "S$2.30",
        badge: "Protein",
        color: "from-yellow-400 to-yellow-600",
        icon: "🫘"
    },
    {
        id: 33,
        name: "Chana Dal 1kg",
        price: "S$2.00",
        badge: "Protein",
        color: "from-yellow-300 to-yellow-500",
        icon: "🫘"
    },
    {
        id: 34,
        name: "Moong Dal 1kg",
        price: "S$2.10",
        badge: "Protein",
        color: "from-green-300 to-green-500",
        icon: "🫘"
    },
    {
        id: 35,
        name: "Wheat Flour 5kg",
        price: "S$3.00",
        badge: "Grains",
        color: "from-amber-200 to-amber-400",
        icon: "🌾"
    },
    // More Vegetables
    {
        id: 36,
        name: "Fresh Onions",
        price: "S$0.50/kg",
        badge: "Vegetables",
        color: "from-purple-200 to-purple-400",
        icon: "🧅"
    },
    {
        id: 37,
        name: "Ginger (Adrak)",
        price: "S$3.00/kg",
        badge: "Spicy",
        color: "from-yellow-400 to-yellow-600",
        icon: "🫚"
    },
    {
        id: 38,
        name: "Garlic (Lehsun)",
        price: "S$3.20/kg",
        badge: "Spicy",
        color: "from-gray-200 to-gray-400",
        icon: "🧄"
    },
    {
        id: 39,
        name: "Green Chili",
        price: "S$1.30/kg",
        badge: "Spicy",
        color: "from-green-400 to-green-600",
        icon: "🌶️"
    },
    {
        id: 40,
        name: "Fresh Tomatoes",
        price: "S$0.55/kg",
        badge: "Vegetables",
        color: "from-red-300 to-red-500",
        icon: "🍅"
    },
    // More Fruits
    {
        id: 41,
        name: "Sweet Oranges",
        price: "S$1.00/kg",
        badge: "Fruits",
        color: "from-orange-300 to-orange-500",
        icon: "🍊"
    },
    {
        id: 42,
        name: "Fresh Grapes",
        price: "S$1.30/kg",
        badge: "Fruits",
        color: "from-purple-300 to-purple-500",
        icon: "🍇"
    },
    {
        id: 43,
        name: "Apple (Kashmiri)",
        price: "S$2.00/kg",
        badge: "Fruits",
        color: "from-red-300 to-red-500",
        icon: "🍎"
    },
    {
        id: 44,
        name: "Watermelon",
        price: "S$0.40/kg",
        badge: "Fruits",
        color: "from-green-300 to-green-500",
        icon: "🍉"
    },
    {
        id: 45,
        name: "Sweet Lime (Mosambi)",
        price: "S$0.65/kg",
        badge: "Fruits",
        color: "from-green-200 to-green-400",
        icon: "🍋"
    },
    // More Snacks
    {
        id: 46,
        name: "Maggi Noodles",
        price: "S$0.23",
        badge: "Ready to eat",
        color: "from-yellow-400 to-orange-500",
        icon: "🍜"
    },
    {
        id: 47,
        name: "Poha (Flattened Rice)",
        price: "S$1.00/kg",
        badge: "Grains",
        color: "from-gray-100 to-gray-300",
        icon: "🍚"
    },
    {
        id: 48,
        name: "Cornflakes",
        price: "S$3.00",
        badge: "Ready to eat",
        color: "from-yellow-300 to-yellow-500",
        icon: "🥣"
    },
    {
        id: 49,
        name: "Chocos Cereal",
        price: "S$3.60",
        badge: "Sweet",
        color: "from-amber-400 to-amber-600",
        icon: "🥣"
    },
    {
        id: 50,
        name: "Mixture Namkeen",
        price: "S$0.65",
        badge: "Snacks",
        color: "from-orange-400 to-orange-600",
        icon: "🥨"
    },
    // Spices & Masalas
    {
        id: 51,
        name: "MDH Garam Masala",
        price: "S$0.75",
        badge: "Spicy",
        color: "from-red-400 to-red-600",
        icon: "🌶️"
    },
    {
        id: 52,
        name: "Turmeric Powder",
        price: "S$2.00/kg",
        badge: "Spicy",
        color: "from-yellow-500 to-yellow-700",
        icon: "🌿"
    },
    {
        id: 53,
        name: "Red Chili Powder",
        price: "S$3.00/kg",
        badge: "Spicy",
        color: "from-red-500 to-red-700",
        icon: "🌶️"
    },
    {
        id: 54,
        name: "Cumin Seeds (Jeera)",
        price: "S$5.00/kg",
        badge: "Spicy",
        color: "from-amber-500 to-amber-700",
        icon: "🌿"
    },
    {
        id: 55,
        name: "Coriander Seeds",
        price: "S$3.30/kg",
        badge: "Spicy",
        color: "from-green-400 to-green-600",
        icon: "🌿"
    },
    // More Traditional Items
    {
        id: 56,
        name: "Papad (Lijjat)",
        price: "S$0.55",
        badge: "Traditional",
        color: "from-yellow-300 to-yellow-500",
        icon: "🫓"
    },
    {
        id: 57,
        name: "Coconut Oil 1L",
        price: "S$3.00",
        badge: "Traditional",
        color: "from-gray-100 to-gray-300",
        icon: "🥥"
    },
    {
        id: 58,
        name: "Mustard Oil 1L",
        price: "S$2.30",
        badge: "Traditional",
        color: "from-yellow-500 to-yellow-700",
        icon: "🫗"
    },
    {
        id: 59,
        name: "Jaggery (Gur) 1kg",
        price: "S$1.00",
        badge: "Sweet",
        color: "from-amber-500 to-amber-700",
        icon: "🍯"
    },
    {
        id: 60,
        name: "Rock Salt (Sendha)",
        price: "S$0.65",
        badge: "Traditional",
        color: "from-gray-200 to-gray-400",
        icon: "🧂"
    },
    // More Beverages
    {
        id: 61,
        name: "Frooti Mango Drink",
        price: "S$0.25",
        badge: "Beverages",
        color: "from-orange-300 to-orange-500",
        icon: "🧃"
    },
    {
        id: 62,
        name: "Real Fruit Juice",
        price: "S$0.55",
        badge: "Beverages",
        color: "from-purple-300 to-purple-500",
        icon: "🧃"
    },
    {
        id: 63,
        name: "Nimbu Paani Mix",
        price: "S$0.40",
        badge: "Beverages",
        color: "from-green-300 to-green-500",
        icon: "🍋"
    },
    {
        id: 64,
        name: "Tata Tea Gold",
        price: "S$3.00/250g",
        badge: "Beverages",
        color: "from-amber-400 to-amber-600",
        icon: "🍵"
    },
    {
        id: 65,
        name: "Bournvita 500g",
        price: "S$4.60",
        badge: "Beverages",
        color: "from-amber-600 to-amber-800",
        icon: "☕"
    },
    // More Vegetables
    {
        id: 66,
        name: "Capsicum (Shimla Mirch)",
        price: "S$1.00/kg",
        badge: "Vegetables",
        color: "from-green-400 to-green-600",
        icon: "🫑"
    },
    {
        id: 67,
        name: "Cauliflower (Gobi)",
        price: "S$0.65/kg",
        badge: "Vegetables",
        color: "from-gray-100 to-gray-300",
        icon: "🥬"
    },
    {
        id: 68,
        name: "Cabbage (Patta Gobi)",
        price: "S$0.40/kg",
        badge: "Vegetables",
        color: "from-green-200 to-green-400",
        icon: "��"
    },
    {
        id: 69,
        name: "Potato (Aloo)",
        price: "S$0.40/kg",
        badge: "Vegetables",
        color: "from-yellow-200 to-yellow-400",
        icon: "🥔"
    },
    {
        id: 70,
        name: "Sweet Potato (Shakarkandi)",
        price: "S$0.55/kg",
        badge: "Vegetables",
        color: "from-orange-300 to-orange-500",
        icon: "🍠"
    },
    // More Dairy
    {
        id: 71,
        name: "Butter 100g",
        price: "S$0.90",
        badge: "Dairy",
        color: "from-yellow-300 to-yellow-500",
        icon: "🧈"
    },
    {
        id: 72,
        name: "Fresh Cream 200ml",
        price: "S$0.75",
        badge: "Dairy",
        color: "from-gray-100 to-gray-200",
        icon: "🥛"
    },
    {
        id: 73,
        name: "Cheese Slice",
        price: "S$2.00",
        badge: "Dairy",
        color: "from-yellow-200 to-yellow-400",
        icon: "🧀"
    },
    {
        id: 74,
        name: "Buttermilk (Chaas)",
        price: "S$0.33",
        badge: "Dairy",
        color: "from-blue-100 to-blue-300",
        icon: "🥛"
    },
    {
        id: 75,
        name: "Ice Cream (Kulfi)",
        price: "S$0.55",
        badge: "Sweet",
        color: "from-pink-300 to-pink-500",
        icon: "🍦"
    },
    // More Snacks & Ready to Eat
    {
        id: 76,
        name: "Banana Chips",
        price: "S$2.00/kg",
        badge: "Snacks",
        color: "from-yellow-400 to-yellow-600",
        icon: "🍌"
    },
    {
        id: 77,
        name: "Coconut Laddu",
        price: "S$4.00/kg",
        badge: "Sweet",
        color: "from-gray-100 to-gray-300",
        icon: "🥥"
    },
    {
        id: 78,
        name: "Gulab Jamun Mix",
        price: "S$0.75",
        badge: "Sweet",
        color: "from-amber-400 to-amber-600",
        icon: "🍯"
    },
    {
        id: 79,
        name: "Khakhras",
        price: "S$1.30",
        badge: "Snacks",
        color: "from-yellow-300 to-yellow-500",
        icon: "🍪"
    },
    {
        id: 80,
        name: "Mathri",
        price: "S$3.00/kg",
        badge: "Snacks",
        color: "from-amber-300 to-amber-500",
        icon: "🥨"
    },
    // More Grains & Pulses
    {
        id: 81,
        name: "Black Gram (Urad Dal)",
        price: "S$2.50/kg",
        badge: "Protein",
        color: "from-gray-600 to-gray-800",
        icon: "🫘"
    },
    {
        id: 82,
        name: "Kidney Beans (Rajma)",
        price: "S$2.60/kg",
        badge: "Protein",
        color: "from-red-400 to-red-600",
        icon: "🫘"
    },
    {
        id: 83,
        name: "Chickpeas (Kabuli Chana)",
        price: "S$2.00/kg",
        badge: "Protein",
        color: "from-yellow-300 to-yellow-500",
        icon: "🫘"
    },
    {
        id: 84,
        name: "Black Mustard Seeds",
        price: "S$3.00/kg",
        badge: "Spicy",
        color: "from-gray-600 to-gray-800",
        icon: "🌿"
    },
    {
        id: 85,
        name: "Fenugreek Seeds (Methi)",
        price: "S$3.60/kg",
        badge: "Spicy",
        color: "from-green-500 to-green-700",
        icon: "🌿"
    },
    // More Traditional Items
    {
        id: 86,
        name: "Hing (Asafoetida)",
        price: "S$13.00/100g",
        badge: "Spicy",
        color: "from-yellow-600 to-yellow-800",
        icon: "🌿"
    },
    {
        id: 87,
        name: "Tamarind (Imli)",
        price: "S$2.00/kg",
        badge: "Traditional",
        color: "from-amber-600 to-amber-800",
        icon: "🫐"
    },
    {
        id: 88,
        name: "Dry Coconut (Copra)",
        price: "S$3.00/kg",
        badge: "Traditional",
        color: "from-gray-100 to-gray-300",
        icon: "🥥"
    },
    {
        id: 89,
        name: "Sesame Seeds (Til)",
        price: "S$2.60/kg",
        badge: "Traditional",
        color: "from-yellow-200 to-yellow-400",
        icon: "🌿"
    },
    {
        id: 90,
        name: "Cashew Nuts",
        price: "S$13.00/kg",
        badge: "Traditional",
        color: "from-yellow-100 to-yellow-300",
        icon: "🥜"
    },
    // Last 10 Products
    {
        id: 91,
        name: "Almonds (Badam)",
        price: "S$15.00/kg",
        badge: "Traditional",
        color: "from-amber-200 to-amber-400",
        icon: "🥜"
    },
    {
        id: 92,
        name: "Raisins (Kishmish)",
        price: "S$5.80/kg",
        badge: "Sweet",
        color: "from-purple-300 to-purple-500",
        icon: "🍇"
    },
    {
        id: 93,
        name: "Dates (Khajur)",
        price: "S$4.60/kg",
        badge: "Sweet",
        color: "from-amber-500 to-amber-700",
        icon: "🫐"
    },
    {
        id: 94,
        name: "Pistachios (Pista)",
        price: "S$20.00/kg",
        badge: "Traditional",
        color: "from-green-300 to-green-500",
        icon: "🥜"
    },
    {
        id: 95,
        name: "Walnuts (Akhrot)",
        price: "S$16.00/kg",
        badge: "Traditional",
        color: "from-amber-400 to-amber-600",
        icon: "🥜"
    },
    {
        id: 96,
        name: "Fig (Anjeer)",
        price: "S$13.00/kg",
        badge: "Sweet",
        color: "from-purple-400 to-purple-600",
        icon: "🫐"
    },
    {
        id: 97,
        name: "Saffron (Kesar)",
        price: "S$41.00/100g",
        badge: "Traditional",
        color: "from-yellow-600 to-orange-600",
        icon: "🌿"
    },
    {
        id: 98,
        name: "Green Cardamom (Elaichi)",
        price: "S$30.00/kg",
        badge: "Spicy",
        color: "from-green-400 to-green-600",
        icon: "🌿"
    },
    {
        id: 99,
        name: "Cinnamon (Dalchini)",
        price: "S$10.00/kg",
        badge: "Spicy",
        color: "from-amber-500 to-amber-700",
        icon: "🌿"
    },
    {
        id: 100,
        name: "Star Anise (Chakra Phool)",
        price: "S$6.50/kg",
        badge: "Spicy",
        color: "from-amber-600 to-amber-800",
        icon: "⭐"
    }
];
}}),
"[project]/src/app/badge.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
    }
};
const getBadgeStyles = (badgeType)=>{
    const badge = badges[badgeType];
    return `${badge.bgColor} ${badge.textColor}`;
};
}}),
"[project]/src/app/wishlist/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>WishlistPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/products.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$badge$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/badge.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$cart$2f$CartContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/cart/CartContext.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function WishlistPage() {
    const [newItemInput, setNewItemInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [shoppingList, setShoppingList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isCurateMode, setIsCurateMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [curatedProducts, setCuratedProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const { addItem, removeItem, updateQuantity, items } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$cart$2f$CartContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCart"])();
    const handleInputChange = (e)=>{
        setNewItemInput(e.target.value);
    };
    const handleAddItem = ()=>{
        if (newItemInput.trim()) {
            setShoppingList((prev)=>[
                    ...prev,
                    newItemInput.trim()
                ]);
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
    };
    const handleClearInput = ()=>{
        setNewItemInput("");
    };
    const showToast = (message)=>{
        setToast(message);
        setTimeout(()=>setToast(""), 3000);
    };
    const handleCurateShoppingList = ()=>{
        if (shoppingList.length === 0) {
            showToast("Please add items to your shopping list first!");
            return;
        }
        // Match shopping list items with products
        const matchedProducts = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["products"].filter((product)=>{
            return shoppingList.some((item)=>{
                // Check if any shopping list item matches product name (case insensitive)
                return product.name.toLowerCase().includes(item.toLowerCase()) || item.toLowerCase().includes(product.name.toLowerCase().split(' ')[0]) || product.badge.toLowerCase().includes(item.toLowerCase()) || item.toLowerCase().includes(product.badge.toLowerCase());
            });
        });
        // If no direct matches, try broader category matching
        if (matchedProducts.length === 0) {
            const categoryMatches = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["products"].filter((product)=>{
                return shoppingList.some((item)=>{
                    const itemWords = item.toLowerCase().split(' ');
                    const productWords = product.name.toLowerCase().split(' ');
                    // Check if any word from shopping list matches any word from product
                    return itemWords.some((itemWord)=>productWords.some((productWord)=>productWord.includes(itemWord) || itemWord.includes(productWord)));
                });
            });
            setCuratedProducts(categoryMatches.slice(0, 10)); // Limit to 10 products
        } else {
            setCuratedProducts(matchedProducts);
        }
        setIsCurateMode(true);
    };
    const handleBackToList = ()=>{
        setIsCurateMode(false);
        setCuratedProducts([]);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-green-50 px-4 py-6",
        children: [
            toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-4 left-1/2 transform -translate-x-1/2 z-50 animate-slide-down",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-4 h-4 text-green-400",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fillRule: "evenodd",
                                d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                clipRule: "evenodd"
                            }, void 0, false, {
                                fileName: "[project]/src/app/wishlist/page.tsx",
                                lineNumber: 127,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/wishlist/page.tsx",
                            lineNumber: 126,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm",
                            children: toast
                        }, void 0, false, {
                            fileName: "[project]/src/app/wishlist/page.tsx",
                            lineNumber: 129,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/wishlist/page.tsx",
                    lineNumber: 125,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/wishlist/page.tsx",
                lineNumber: 124,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "p-1 hover:bg-green-100 rounded-lg transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6 text-green-600",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M15 19l-7-7 7-7"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/wishlist/page.tsx",
                                    lineNumber: 147,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/wishlist/page.tsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/wishlist/page.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold text-gray-900",
                            children: isCurateMode ? "Curated Products" : "Shopping List"
                        }, void 0, false, {
                            fileName: "[project]/src/app/wishlist/page.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/wishlist/page.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/wishlist/page.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            !isCurateMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                shoppingList.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/wishlist/page.tsx",
                                        lineNumber: 173,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/wishlist/page.tsx",
                                    lineNumber: 167,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Add new item to your shopping list...",
                                    value: newItemInput,
                                    onChange: handleInputChange,
                                    onKeyPress: handleKeyPress,
                                    className: `w-full ${shoppingList.length > 0 ? 'pl-10' : 'pl-4'} pr-24 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 placeholder-gray-500`
                                }, void 0, false, {
                                    fileName: "[project]/src/app/wishlist/page.tsx",
                                    lineNumber: 181,
                                    columnNumber: 15
                                }, this),
                                newItemInput && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleClearInput,
                                    className: "absolute right-12 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-md transition-colors",
                                    title: "Clear input",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-4 h-4 text-gray-400 hover:text-gray-600",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M6 18L18 6M6 6l12 12"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/wishlist/page.tsx",
                                            lineNumber: 201,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/wishlist/page.tsx",
                                        lineNumber: 195,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/wishlist/page.tsx",
                                    lineNumber: 190,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleAddItem,
                                    className: "absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-600 text-white px-3 py-1.5 rounded-md hover:bg-green-700 transition-colors text-sm font-medium",
                                    children: "Add"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/wishlist/page.tsx",
                                    lineNumber: 210,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/wishlist/page.tsx",
                            lineNumber: 165,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/wishlist/page.tsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this),
                    shoppingList.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-gray-900 mb-4",
                                children: [
                                    "Your Items (",
                                    shoppingList.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/wishlist/page.tsx",
                                lineNumber: 222,
                                columnNumber: 15
                            }, this),
                            shoppingList.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-lg shadow-sm border border-gray-100 p-4 flex items-center justify-between hover:shadow-md transition-shadow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-2 h-2 bg-green-500 rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/wishlist/page.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-900 font-medium",
                                                    children: item
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/wishlist/page.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/wishlist/page.tsx",
                                            lineNumber: 230,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleRemoveItem(index),
                                            className: "p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors",
                                            title: "Remove item",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1-1H8a1 1 0 00-1 1v3M4 7h16"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/wishlist/page.tsx",
                                                    lineNumber: 245,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/wishlist/page.tsx",
                                                lineNumber: 239,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/wishlist/page.tsx",
                                            lineNumber: 234,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/app/wishlist/page.tsx",
                                    lineNumber: 226,
                                    columnNumber: 17
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/wishlist/page.tsx",
                        lineNumber: 221,
                        columnNumber: 13
                    }, this) : /* Empty State */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-gray-400 mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-16 h-16 mx-auto mb-4",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 1.5,
                                        d: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/wishlist/page.tsx",
                                        lineNumber: 266,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/wishlist/page.tsx",
                                    lineNumber: 260,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/wishlist/page.tsx",
                                lineNumber: 259,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-gray-900 mb-2",
                                children: "Your shopping list is empty"
                            }, void 0, false, {
                                fileName: "[project]/src/app/wishlist/page.tsx",
                                lineNumber: 274,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: "Start adding items using the input box above to keep track of what you need."
                            }, void 0, false, {
                                fileName: "[project]/src/app/wishlist/page.tsx",
                                lineNumber: 277,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/wishlist/page.tsx",
                        lineNumber: 258,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleCurateShoppingList,
                            disabled: shoppingList.length === 0,
                            className: `inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-colors font-medium ${shoppingList.length === 0 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-green-600 text-white hover:bg-green-700'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/wishlist/page.tsx",
                                        lineNumber: 300,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/wishlist/page.tsx",
                                    lineNumber: 294,
                                    columnNumber: 15
                                }, this),
                                "Curate Shopping List"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/wishlist/page.tsx",
                            lineNumber: 285,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/wishlist/page.tsx",
                        lineNumber: 284,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true) : /* Curated Products View */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleBackToList,
                            className: "inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M15 19l-7-7 7-7"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/wishlist/page.tsx",
                                        lineNumber: 326,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/wishlist/page.tsx",
                                    lineNumber: 320,
                                    columnNumber: 15
                                }, this),
                                "Back to Shopping List"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/wishlist/page.tsx",
                            lineNumber: 316,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/wishlist/page.tsx",
                        lineNumber: 315,
                        columnNumber: 11
                    }, this),
                    curatedProducts.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-gray-900 mb-4",
                                children: [
                                    "Recommended Products (",
                                    curatedProducts.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/wishlist/page.tsx",
                                lineNumber: 340,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 mb-6",
                                children: "Based on your shopping list, we found these matching products:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/wishlist/page.tsx",
                                lineNumber: 343,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",
                                children: curatedProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-16 h-16 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center flex-shrink-0`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl",
                                                        children: product.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/wishlist/page.tsx",
                                                        lineNumber: 357,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/wishlist/page.tsx",
                                                    lineNumber: 354,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                        className: "font-semibold text-gray-900 text-lg mb-2",
                                                                        children: product.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/wishlist/page.tsx",
                                                                        lineNumber: 366,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `inline-block px-2 py-1 text-xs font-medium rounded-full ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$badge$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBadgeStyles"])(product.badge)}`,
                                                                        children: product.badge
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/wishlist/page.tsx",
                                                                        lineNumber: 369,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/wishlist/page.tsx",
                                                                lineNumber: 365,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-right",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-bold text-green-600 text-xl",
                                                                    children: product.price
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/wishlist/page.tsx",
                                                                    lineNumber: 376,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/wishlist/page.tsx",
                                                                lineNumber: 375,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/wishlist/page.tsx",
                                                        lineNumber: 364,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/wishlist/page.tsx",
                                                    lineNumber: 363,
                                                    columnNumber: 23
                                                }, this),
                                                (()=>{
                                                    const cartItem = items.find((item)=>item.id === product.id);
                                                    const quantity = cartItem ? cartItem.quantity : 0;
                                                    if (quantity === 0) {
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleIncreaseQuantity(product),
                                                            className: "flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium",
                                                            title: "Add to cart",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-5 h-5",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/wishlist/page.tsx",
                                                                        lineNumber: 401,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/wishlist/page.tsx",
                                                                    lineNumber: 395,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm",
                                                                    children: "Add"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/wishlist/page.tsx",
                                                                    lineNumber: 408,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/wishlist/page.tsx",
                                                            lineNumber: 390,
                                                            columnNumber: 29
                                                        }, this);
                                                    }
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1 bg-gray-50 rounded-lg p-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleDecreaseQuantity(product),
                                                                className: "w-7 h-7 flex items-center justify-center bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition-colors flex-shrink-0",
                                                                title: "Decrease quantity",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-3 h-3",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 3,
                                                                        d: "M20 12H4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/wishlist/page.tsx",
                                                                        lineNumber: 426,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/wishlist/page.tsx",
                                                                    lineNumber: 420,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/wishlist/page.tsx",
                                                                lineNumber: 415,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "px-2 py-1 text-gray-900 font-bold text-sm min-w-[28px] text-center flex-shrink-0",
                                                                children: quantity
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/wishlist/page.tsx",
                                                                lineNumber: 434,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleIncreaseQuantity(product),
                                                                className: "w-7 h-7 flex items-center justify-center bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex-shrink-0",
                                                                title: "Increase quantity",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-3 h-3",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 3,
                                                                        d: "M12 4v16m8-8H4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/wishlist/page.tsx",
                                                                        lineNumber: 448,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/wishlist/page.tsx",
                                                                    lineNumber: 442,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/wishlist/page.tsx",
                                                                lineNumber: 437,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/wishlist/page.tsx",
                                                        lineNumber: 414,
                                                        columnNumber: 27
                                                    }, this);
                                                })()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/wishlist/page.tsx",
                                            lineNumber: 352,
                                            columnNumber: 21
                                        }, this)
                                    }, product.id, false, {
                                        fileName: "[project]/src/app/wishlist/page.tsx",
                                        lineNumber: 348,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/wishlist/page.tsx",
                                lineNumber: 346,
                                columnNumber: 15
                            }, this),
                            items.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/cart",
                                    className: "inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-5 h-5",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/wishlist/page.tsx",
                                                lineNumber: 477,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/wishlist/page.tsx",
                                            lineNumber: 471,
                                            columnNumber: 23
                                        }, this),
                                        "Go to Cart",
                                        items.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full",
                                            children: items.reduce((total, item)=>total + item.quantity, 0)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/wishlist/page.tsx",
                                            lineNumber: 486,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/wishlist/page.tsx",
                                    lineNumber: 467,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/wishlist/page.tsx",
                                lineNumber: 466,
                                columnNumber: 19
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/wishlist/page.tsx",
                        lineNumber: 339,
                        columnNumber: 13
                    }, this) : /* No Matches Found */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-gray-400 mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-16 h-16 mx-auto mb-4",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 1.5,
                                        d: "M9.172 16.172a4 4 0 015.656 0M9 12h6m-3-3v6m-9 1V7a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/wishlist/page.tsx",
                                        lineNumber: 504,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/wishlist/page.tsx",
                                    lineNumber: 498,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/wishlist/page.tsx",
                                lineNumber: 497,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-gray-900 mb-2",
                                children: "No matching products found"
                            }, void 0, false, {
                                fileName: "[project]/src/app/wishlist/page.tsx",
                                lineNumber: 512,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 mb-6",
                                children: "We couldn't find products matching your shopping list items. Try browsing our catalog or modify your shopping list."
                            }, void 0, false, {
                                fileName: "[project]/src/app/wishlist/page.tsx",
                                lineNumber: 515,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4 justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleBackToList,
                                        className: "bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium",
                                        children: "Back to Shopping List"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/wishlist/page.tsx",
                                        lineNumber: 519,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium",
                                        children: "Browse Products"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/wishlist/page.tsx",
                                        lineNumber: 525,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/wishlist/page.tsx",
                                lineNumber: 518,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/wishlist/page.tsx",
                        lineNumber: 496,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/wishlist/page.tsx",
                lineNumber: 313,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/wishlist/page.tsx",
        lineNumber: 121,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__051b5a22._.js.map
module.exports = {

"[project]/.next-internal/server/app/api/products/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[project]/src/app/api/products/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GET": (()=>GET)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
;
async function GET() {
    try {
        const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'src', 'app', 'filterproductsdata1.json');
        const fileContents = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(filePath, 'utf8');
        const jsonData = JSON.parse(fileContents);
        // Transform the JSON data to match our Product interface
        const products = jsonData.map((item)=>{
            // Helper function to determine category badge
            const getCategoryBadge = (mainCategory, categories)=>{
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
            const getCategoryColor = (badge)=>{
                const colors = {
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
            const getCategoryIcon = (badge)=>{
                const icons = {
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
            const generatePrice = (quantity, badge)=>{
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
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(products);
    } catch (error) {
        console.error('Error loading products:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to load products'
        }, {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__f5834942._.js.map
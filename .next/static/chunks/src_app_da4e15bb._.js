(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

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
"[project]/src/app/cart/CartModal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CartModal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$badge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/badge.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$cart$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/cart/CartContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function CartModal({ isOpen, onClose }) {
    _s();
    const { items, totalItems, totalPrice, updateQuantity, removeItem, clearCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$cart$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white w-full max-w-md h-full overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sticky top-0 bg-white border-b border-gray-200 p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-gray-900",
                                children: [
                                    "Shopping Cart (",
                                    totalItems,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/cart/CartModal.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "p-2 hover:bg-gray-100 rounded-full transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-6 h-6 text-gray-600",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M6 18L18 6M6 6l12 12"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/cart/CartModal.tsx",
                                        lineNumber: 42,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/cart/CartModal.tsx",
                                    lineNumber: 36,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/cart/CartModal.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/cart/CartModal.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/cart/CartModal.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4",
                    children: items.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-16 h-16 text-gray-300 mx-auto mb-4",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/cart/CartModal.tsx",
                                    lineNumber: 63,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/cart/CartModal.tsx",
                                lineNumber: 57,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500 text-lg mb-2",
                                children: "Your cart is empty"
                            }, void 0, false, {
                                fileName: "[project]/src/app/cart/CartModal.tsx",
                                lineNumber: 70,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 text-sm",
                                children: "Add some delicious items to get started!"
                            }, void 0, false, {
                                fileName: "[project]/src/app/cart/CartModal.tsx",
                                lineNumber: 71,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/cart/CartModal.tsx",
                        lineNumber: 56,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-50 rounded-lg p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-16 h-16 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center flex-shrink-0`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-2xl font-bold text-white",
                                                children: item.icon
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/cart/CartModal.tsx",
                                                lineNumber: 84,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/cart/CartModal.tsx",
                                            lineNumber: 81,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-semibold text-gray-900 text-sm mb-1",
                                                    children: item.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/cart/CartModal.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `inline-block px-2 py-1 text-xs font-medium rounded-full mb-2 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$badge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBadgeStyles"])(item.badge)}`,
                                                    children: item.badge
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/cart/CartModal.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-green-600 text-sm",
                                                            children: item.price
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/cart/CartModal.tsx",
                                                            lineNumber: 106,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>updateQuantity(item.id, item.quantity - 1),
                                                                    className: "w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        className: "w-4 h-4 text-gray-600",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        viewBox: "0 0 24 24",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: 2,
                                                                            d: "M20 12H4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/cart/CartModal.tsx",
                                                                            lineNumber: 124,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/cart/CartModal.tsx",
                                                                        lineNumber: 118,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/cart/CartModal.tsx",
                                                                    lineNumber: 112,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-8 text-center font-semibold text-gray-900",
                                                                    children: item.quantity
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/cart/CartModal.tsx",
                                                                    lineNumber: 133,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>updateQuantity(item.id, item.quantity + 1),
                                                                    className: "w-8 h-8 bg-green-100 hover:bg-green-200 rounded-full flex items-center justify-center transition-colors",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        className: "w-4 h-4 text-green-600",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        viewBox: "0 0 24 24",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: 2,
                                                                            d: "M12 4v16m8-8H4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/cart/CartModal.tsx",
                                                                            lineNumber: 149,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/cart/CartModal.tsx",
                                                                        lineNumber: 143,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/cart/CartModal.tsx",
                                                                    lineNumber: 137,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/cart/CartModal.tsx",
                                                            lineNumber: 111,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/cart/CartModal.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>removeItem(item.id),
                                                    className: "mt-2 text-red-500 hover:text-red-700 text-xs font-medium transition-colors",
                                                    children: "Remove"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/cart/CartModal.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/cart/CartModal.tsx",
                                            lineNumber: 90,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/cart/CartModal.tsx",
                                    lineNumber: 79,
                                    columnNumber: 19
                                }, this)
                            }, item.id, false, {
                                fileName: "[project]/src/app/cart/CartModal.tsx",
                                lineNumber: 78,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/cart/CartModal.tsx",
                        lineNumber: 76,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/cart/CartModal.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this),
                items.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sticky bottom-0 bg-white border-t border-gray-200 p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-600",
                                            children: "Total Items:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/cart/CartModal.tsx",
                                            lineNumber: 180,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold",
                                            children: totalItems
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/cart/CartModal.tsx",
                                            lineNumber: 181,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/cart/CartModal.tsx",
                                    lineNumber: 179,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg font-semibold text-gray-900",
                                            children: "Total:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/cart/CartModal.tsx",
                                            lineNumber: 184,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xl font-bold text-green-600",
                                            children: [
                                                "₹",
                                                totalPrice.toFixed(2)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/cart/CartModal.tsx",
                                            lineNumber: 187,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/cart/CartModal.tsx",
                                    lineNumber: 183,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/cart/CartModal.tsx",
                            lineNumber: 178,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors",
                                    children: "Proceed to Checkout"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/cart/CartModal.tsx",
                                    lineNumber: 194,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: clearCart,
                                    className: "w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-300 transition-colors",
                                    children: "Clear Cart"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/cart/CartModal.tsx",
                                    lineNumber: 198,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/cart/CartModal.tsx",
                            lineNumber: 193,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/cart/CartModal.tsx",
                    lineNumber: 177,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/cart/CartModal.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/cart/CartModal.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(CartModal, "o4DMkEpbtjReQH0InDzwarLWCIk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$cart$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = CartModal;
var _c;
__turbopack_context__.k.register(_c, "CartModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/products.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>GroceryPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$badge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/badge.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$cart$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/cart/CartContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$cart$2f$CartModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/cart/CartModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/products.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function GroceryPage() {
    _s();
    const { addItem, totalItems, items, updateQuantity, removeItem } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$cart$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const [isCartOpen, setIsCartOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const itemsPerPage = 15;
    // Calculate pagination
    const totalPages = Math.ceil(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].slice(startIndex, endIndex);
    // Generate page numbers for pagination
    const pageNumbers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GroceryPage.useMemo[pageNumbers]": ()=>{
            const pages = [];
            const maxVisiblePages = 5;
            if (totalPages <= maxVisiblePages) {
                for(let i = 1; i <= totalPages; i++){
                    pages.push(i);
                }
            } else {
                if (currentPage <= 3) {
                    for(let i = 1; i <= 5; i++){
                        pages.push(i);
                    }
                } else if (currentPage >= totalPages - 2) {
                    for(let i = totalPages - 4; i <= totalPages; i++){
                        pages.push(i);
                    }
                } else {
                    for(let i = currentPage - 2; i <= currentPage + 2; i++){
                        pages.push(i);
                    }
                }
            }
            return pages;
        }
    }["GroceryPage.useMemo[pageNumbers]"], [
        currentPage,
        totalPages
    ]);
    const handlePageChange = (page)=>{
        setCurrentPage(page);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    const handleAddToCart = (product)=>{
        addItem(product);
    };
    const getItemQuantity = (productId)=>{
        const cartItem = items.find((item)=>item.id === productId);
        return cartItem ? cartItem.quantity : 0;
    };
    const handleIncreaseQuantity = (product)=>{
        const currentQuantity = getItemQuantity(product.id);
        if (currentQuantity === 0) {
            addItem(product);
        } else {
            updateQuantity(product.id, currentQuantity + 1);
        }
    };
    const handleDecreaseQuantity = (productId)=>{
        const currentQuantity = getItemQuantity(productId);
        if (currentQuantity > 1) {
            updateQuantity(productId, currentQuantity - 1);
        } else if (currentQuantity === 1) {
            removeItem(productId);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-green-50 px-4 py-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-2xl font-bold text-gray-900",
                                            children: "GrabMart"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setIsCartOpen(true),
                                                className: "relative p-2 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-6 h-6 text-gray-600",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 104,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 17
                                                    }, this),
                                                    totalItems > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center",
                                                        children: totalItems
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 112,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 94,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/profile",
                                                className: "p-2 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-6 h-6 text-gray-600",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 119,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: "Fresh groceries delivered to your door"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 152,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 146,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Search for groceries...",
                                            className: "w-full pl-10 pr-20 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/wishlist",
                                                    className: "relative p-1 hover:bg-gray-100 rounded-md transition-colors",
                                                    title: "Shopping List",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-5 h-5 text-gray-400 hover:text-green-500 transition-colors",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 179,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "p-1 hover:bg-gray-100 rounded-md transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-5 h-5 text-purple-500",
                                                        fill: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M12 0l3.09 6.91L22 10l-6.91 3.09L12 20l-3.09-6.91L2 10l6.91-3.09L12 0z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 199,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M19 1l1.5 3.5L24 6l-3.5 1.5L19 11l-1.5-3.5L14 6l3.5-1.5L19 1z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 200,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M7 4l1 2L10 7l-2 1L7 10l-1-2L4 7l2-1L7 4z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 201,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 194,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 166,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: [
                                    "Showing ",
                                    startIndex + 1,
                                    "-",
                                    Math.min(endIndex, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].length),
                                    " of ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].length,
                                    " products"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 211,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500",
                                children: [
                                    "Page ",
                                    currentPage,
                                    " of ",
                                    totalPages
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 214,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 210,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-3",
                        children: currentProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `relative aspect-square bg-gradient-to-br ${product.color} flex items-center justify-center`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-6xl font-bold text-white",
                                                children: product.icon
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 231,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-2 left-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `px-2 py-1 text-xs font-medium rounded-full ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$badge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBadgeStyles"])(product.badge)}`,
                                                    children: product.badge
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 237,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 236,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 227,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold text-gray-900 text-sm mb-3 line-clamp-2",
                                                children: product.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 250,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-green-600 text-xl",
                                                    children: product.price
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 256,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 255,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleAddToCart(product),
                                                className: "w-full bg-green-600 text-white text-sm font-medium py-3 px-3 rounded-lg hover:bg-green-700 transition-colors duration-200 active:bg-green-800",
                                                children: "Add to Cart"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 262,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 248,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, product.id, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 222,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this),
                    totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 flex flex-col items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-gray-600",
                                children: [
                                    "Page ",
                                    currentPage,
                                    " of ",
                                    totalPages
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 277,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handlePageChange(currentPage - 1),
                                        disabled: currentPage === 1,
                                        className: `px-4 py-2 rounded-lg font-medium transition-colors ${currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M15 19l-7-7 7-7"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 294,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 293,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 284,
                                        columnNumber: 15
                                    }, this),
                                    pageNumbers.map((page)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handlePageChange(page),
                                            className: `px-3 py-2 rounded-lg font-medium transition-colors ${currentPage === page ? 'bg-green-600 text-white shadow-sm' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'}`,
                                            children: page
                                        }, page, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 300,
                                            columnNumber: 17
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handlePageChange(currentPage + 1),
                                        disabled: currentPage === totalPages,
                                        className: `px-4 py-2 rounded-lg font-medium transition-colors ${currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M9 5l7 7-7 7"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 324,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 323,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 314,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 282,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 275,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$cart$2f$CartModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isCartOpen,
                onClose: ()=>setIsCartOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 335,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(GroceryPage, "wfuSjlIMWdnNjj1uLC74XvsLRjs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$cart$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = GroceryPage;
var _c;
__turbopack_context__.k.register(_c, "GroceryPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_da4e15bb._.js.map
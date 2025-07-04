module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/app/cart/CartContext.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CartProvider": (()=>CartProvider),
    "useCart": (()=>useCart)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const initialState = {
    items: [],
    totalItems: 0,
    totalPrice: 0
};
function cartReducer(state, action) {
    switch(action.type){
        case "ADD_ITEM":
            {
                const existingItem = state.items.find((item)=>item.id === action.payload.id);
                let updatedItems;
                if (existingItem) {
                    updatedItems = state.items.map((item)=>item.id === action.payload.id ? {
                            ...item,
                            quantity: item.quantity + 1
                        } : item);
                } else {
                    updatedItems = [
                        ...state.items,
                        {
                            ...action.payload,
                            quantity: 1
                        }
                    ];
                }
                const totalItems = updatedItems.reduce((sum, item)=>sum + item.quantity, 0);
                const totalPrice = updatedItems.reduce((sum, item)=>{
                    const price = parseFloat(item.price.replace(/[^\d.]/g, ""));
                    return sum + price * item.quantity;
                }, 0);
                return {
                    items: updatedItems,
                    totalItems,
                    totalPrice
                };
            }
        case "REMOVE_ITEM":
            {
                const updatedItems = state.items.filter((item)=>item.id !== action.payload);
                const totalItems = updatedItems.reduce((sum, item)=>sum + item.quantity, 0);
                const totalPrice = updatedItems.reduce((sum, item)=>{
                    const price = parseFloat(item.price.replace(/[^\d.]/g, ""));
                    return sum + price * item.quantity;
                }, 0);
                return {
                    items: updatedItems,
                    totalItems,
                    totalPrice
                };
            }
        case "UPDATE_QUANTITY":
            {
                if (action.payload.quantity <= 0) {
                    return cartReducer(state, {
                        type: "REMOVE_ITEM",
                        payload: action.payload.id
                    });
                }
                const updatedItems = state.items.map((item)=>item.id === action.payload.id ? {
                        ...item,
                        quantity: action.payload.quantity
                    } : item);
                const totalItems = updatedItems.reduce((sum, item)=>sum + item.quantity, 0);
                const totalPrice = updatedItems.reduce((sum, item)=>{
                    const price = parseFloat(item.price.replace(/[^\d.]/g, ""));
                    return sum + price * item.quantity;
                }, 0);
                return {
                    items: updatedItems,
                    totalItems,
                    totalPrice
                };
            }
        case "CLEAR_CART":
            return initialState;
        default:
            return state;
    }
}
const CartContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function CartProvider({ children }) {
    const [state, dispatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducer"])(cartReducer, initialState);
    const addItem = (product)=>{
        dispatch({
            type: "ADD_ITEM",
            payload: product
        });
    };
    const removeItem = (id)=>{
        dispatch({
            type: "REMOVE_ITEM",
            payload: id
        });
    };
    const updateQuantity = (id, quantity)=>{
        dispatch({
            type: "UPDATE_QUANTITY",
            payload: {
                id,
                quantity
            }
        });
    };
    const clearCart = ()=>{
        dispatch({
            type: "CLEAR_CART"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CartContext.Provider, {
        value: {
            ...state,
            addItem,
            removeItem,
            updateQuantity,
            clearCart
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/cart/CartContext.tsx",
        lineNumber: 149,
        columnNumber: 5
    }, this);
}
function useCart() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else {
                "TURBOPACK unreachable";
            }
        } else {
            "TURBOPACK unreachable";
        }
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__8e25aad9._.js.map
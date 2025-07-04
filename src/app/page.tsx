"use client";

import Link from "next/link";
import { useState } from "react";
import { getBadgeStyles } from "./badge";
import { useCart } from "./cart/CartContext";
import CartModal from "./cart/CartModal";
import { products } from "./products";

export default function GroceryPage() {
  const { addItem, totalItems, items, updateQuantity, removeItem } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product: any) => {
    addItem(product);
  };

  const getItemQuantity = (productId: number) => {
    const cartItem = items.find((item) => item.id === productId);
    return cartItem ? cartItem.quantity : 0;
  };

  const handleIncreaseQuantity = (product: any) => {
    const currentQuantity = getItemQuantity(product.id);
    if (currentQuantity === 0) {
      addItem(product);
    } else {
      updateQuantity(product.id, currentQuantity + 1);
    }
  };

  const handleDecreaseQuantity = (productId: number) => {
    const currentQuantity = getItemQuantity(productId);
    if (currentQuantity > 1) {
      updateQuantity(productId, currentQuantity - 1);
    } else if (currentQuantity === 1) {
      removeItem(productId);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-green-50 px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-gray-900">GrabMart</h1>
            </div>

            {/* Right side icons */}
            <div className="flex items-center gap-3">
              {/* Shopping Cart Icon with Cart Count */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors"
              >
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* User Icon */}
              <Link
                href="/profile"
                className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors"
              >
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <p className="text-gray-600">
            Fresh groceries delivered to your door
          </p>

          {/* Search Bar */}
          <div className="mt-4">
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search for groceries..."
                className="w-full pl-10 pr-20 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />

              {/* Right side icons */}
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                {/* Shopping List Icon */}
                <Link
                  href="/wishlist"
                  className="relative p-1 hover:bg-gray-100 rounded-md transition-colors"
                  title="Shopping List"
                >
                  <svg
                    className="w-5 h-5 text-gray-400 hover:text-green-500 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                  {/* Shopping List count badge (optional) */}
                  {/* <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    3
                  </span> */}
                </Link>

                {/* AI Sparkle Button */}
                <button className="p-1 hover:bg-gray-100 rounded-md transition-colors">
                  <svg
                    className="w-5 h-5 text-purple-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0l3.09 6.91L22 10l-6.91 3.09L12 20l-3.09-6.91L2 10l6.91-3.09L12 0z" />
                    <path d="M19 1l1.5 3.5L24 6l-3.5 1.5L19 11l-1.5-3.5L14 6l3.5-1.5L19 1z" />
                    <path d="M7 4l1 2L10 7l-2 1L7 10l-1-2L4 7l2-1L7 4z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid - 2 columns for mobile */}
        <div className="grid grid-cols-2 gap-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-200"
            >
              {/* Product Visual */}
              <div
                className={`relative aspect-square bg-gradient-to-br ${product.color} flex items-center justify-center`}
              >
                {/* Text Abbreviation */}
                <div className="text-6xl font-bold text-white">
                  {product.icon}
                </div>

                {/* Badge */}
                <div className="absolute top-2 left-2">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${getBadgeStyles(
                      product.badge
                    )}`}
                  >
                    {product.badge}
                  </span>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-4">
                {/* Product Name */}
                <h3 className="font-semibold text-gray-900 text-sm mb-3 line-clamp-2">
                  {product.name}
                </h3>

                {/* Price */}
                <div className="mb-4">
                  <span className="font-bold text-green-600 text-xl">
                    {product.price}
                  </span>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-green-600 text-white text-sm font-medium py-3 px-3 rounded-lg hover:bg-green-700 transition-colors duration-200 active:bg-green-800"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Modal */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}

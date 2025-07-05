"use client";

import Link from "next/link";
import { useState } from "react";

export default function WishlistPage() {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [showToast, setShowToast] = useState<string>("");

  const wishlistItems = [
    {
      id: 1,
      name: "Fresh Organic Bananas",
      price: "S$4.00",
      icon: "🍌",
      color: "from-yellow-400 to-yellow-600",
      badge: "Fresh",
      description: "Premium organic bananas, perfect for snacking"
    },
    {
      id: 2,
      name: "Whole Milk",
      price: "S$4.70",
      icon: "🥛",
      color: "from-blue-400 to-blue-600",
      badge: "Dairy",
      description: "Fresh whole milk from local farms"
    },
    {
      id: 3,
      name: "Sourdough Bread",
      price: "S$6.70",
      icon: "🍞",
      color: "from-amber-400 to-amber-600",
      badge: "Bakery",
      description: "Artisanal sourdough bread, freshly baked"
    },
    {
      id: 4,
      name: "Greek Yogurt",
      price: "S$8.00",
      icon: "🥛",
      color: "from-purple-400 to-purple-600",
      badge: "Organic",
      description: "Creamy Greek yogurt with live cultures"
    },
    {
      id: 5,
      name: "Fresh Avocados",
      price: "S$9.40",
      icon: "🥑",
      color: "from-green-400 to-green-600",
      badge: "Premium",
      description: "Ripe avocados, perfect for toast or salads"
    }
  ];

  const showToastMessage = (message: string) => {
    setShowToast(message);
    setTimeout(() => setShowToast(""), 3000);
  };

  const handleToggleSelect = (itemId: number) => {
    setSelectedItems(prev => {
      const newSelected = prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId];
      
      // Show toast for individual selections
      const item = wishlistItems.find(item => item.id === itemId);
      if (prev.includes(itemId)) {
        showToastMessage(`${item?.name} removed from selection`);
      } else {
        showToastMessage(`${item?.name} added to selection`);
      }
      
      return newSelected;
    });
  };

  const handleSelectAll = () => {
    if (selectedItems.length === wishlistItems.length) {
      setSelectedItems([]);
      showToastMessage("All items deselected");
    } else {
      setSelectedItems(wishlistItems.map(item => item.id));
      showToastMessage("All items selected");
    }
  };

  const handleSelectAllCheckbox = () => {
    // Alternative way to select all via checkbox in header
    handleSelectAll();
  };

  const isAllSelected = selectedItems.length === wishlistItems.length;
  const isPartiallySelected = selectedItems.length > 0 && selectedItems.length < wishlistItems.length;

  const getBadgeStyles = (badge: string) => {
    switch (badge) {
      case "Fresh":
        return "bg-green-100 text-green-800";
      case "Dairy":
        return "bg-blue-100 text-blue-800";
      case "Bakery":
        return "bg-amber-100 text-amber-800";
      case "Organic":
        return "bg-purple-100 text-purple-800";
      case "Premium":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-green-50 px-4 py-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="p-1 hover:bg-green-100 rounded-lg transition-colors"
            >
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Shopping List</h1>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Master Select All Checkbox */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleSelectAllCheckbox}
                className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all duration-200 ${
                  isAllSelected
                    ? 'bg-green-600 border-green-600'
                    : isPartiallySelected
                    ? 'bg-green-200 border-green-400'
                    : 'border-gray-300 hover:border-green-500'
                }`}
              >
                {isAllSelected && (
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
                {isPartiallySelected && !isAllSelected && (
                  <div className="w-3 h-0.5 bg-green-600 rounded"></div>
                )}
              </button>
              <span className="text-sm text-gray-600 font-medium">
                {isAllSelected ? 'Deselect All' : 'Select All'}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-600">
            {selectedItems.length} of {wishlistItems.length} items selected
          </p>
          {selectedItems.length > 0 && (
            <div className="flex items-center gap-2 text-green-600">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Ready to add to cart</span>
            </div>
          )}
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 animate-slide-down">
          <div className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">{showToast}</span>
          </div>
        </div>
      )}

      {/* Wishlist Items */}
      <div className="space-y-4">
        {wishlistItems.map((item) => (
          <div
            key={item.id}
            className={`bg-white rounded-xl shadow-sm border border-gray-100 p-4 transition-all duration-200 ${
              selectedItems.includes(item.id) ? 'ring-2 ring-green-500 border-green-300' : 'hover:shadow-md'
            }`}
          >
            <div className="flex items-center gap-4">
              {/* Check Button */}
              <button
                onClick={() => handleToggleSelect(item.id)}
                className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all duration-200 ${
                  selectedItems.includes(item.id)
                    ? 'bg-green-600 border-green-600'
                    : 'border-gray-300 hover:border-green-500'
                }`}
              >
                {selectedItems.includes(item.id) && (
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </button>

              {/* Product Visual */}
              <div
                className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}
              >
                <div className="text-2xl">
                  {item.icon}
                </div>
              </div>

              {/* Product Details */}
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {item.description}
                    </p>
                    <span
                      className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getBadgeStyles(item.badge)}`}
                    >
                      {item.badge}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-green-600 text-xl">
                      {item.price}
                    </span>
                  </div>
                </div>
              </div>

              {/* Remove from Shopping List */}
              <button
                className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                title="Remove from shopping list"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1-1H8a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      {selectedItems.length > 0 && (
        <div className="fixed bottom-6 left-4 right-4 bg-white rounded-xl shadow-lg border border-gray-200 p-4 animate-slide-up">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-gray-600">
                {selectedItems.length} item{selectedItems.length > 1 ? 's' : ''} selected
              </span>
              {isAllSelected && (
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                  All Items
                </span>
              )}
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => {
                  showToastMessage(`${selectedItems.length} items added to cart`);
                  // Add cart functionality here
                }}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Add to Cart
              </button>
              <button 
                onClick={() => {
                  setSelectedItems([]);
                  showToastMessage("Selection cleared");
                }}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Clear Selection
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 
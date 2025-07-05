"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { products } from "../products";
import { getBadgeStyles } from "../badge";

export default function WishlistPage() {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [showToast, setShowToast] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Initialize with first 5 products as default wishlist items
  const [wishlistItems, setWishlistItems] = useState(() => {
    return products.slice(0, 5);
  });

  // All products available for search
  const allProducts = products;

  // Filter products based on search query (search across ALL products)
  const filteredSearchResults = useMemo(() => {
    if (!searchQuery.trim()) {
      return wishlistItems; // Show current wishlist items when no search
    }
    
    const query = searchQuery.toLowerCase();
    return allProducts.filter(product => 
      product.name.toLowerCase().includes(query) ||
      product.badge.toLowerCase().includes(query)
    );
  }, [searchQuery, wishlistItems, allProducts]);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Clear search
  const handleClearSearch = () => {
    setSearchQuery("");
  };

  // Handle adding item to wishlist (from search results)
  const handleAddToWishlist = (product: any) => {
    const isAlreadyInWishlist = wishlistItems.some(item => item.id === product.id);
    if (!isAlreadyInWishlist) {
      setWishlistItems(prev => [...prev, product]);
      showToastMessage(`${product.name} added to shopping list`);
    } else {
      showToastMessage(`${product.name} is already in shopping list`);
    }
  };

  // Handle removing an item from the wishlist
  const handleRemoveItem = (itemId: number) => {
    const itemToRemove = wishlistItems.find(item => item.id === itemId);
    if (itemToRemove) {
      setWishlistItems(prev => prev.filter(item => item.id !== itemId));
      setSelectedItems(prev => prev.filter(id => id !== itemId));
      showToastMessage(`${itemToRemove.name} removed from shopping list`);
    }
  };

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
    if (selectedItems.length === filteredSearchResults.length) {
      setSelectedItems([]);
      showToastMessage("All items deselected");
    } else {
      setSelectedItems(filteredSearchResults.map(item => item.id));
      showToastMessage("All items selected");
    }
  };

  const handleSelectAllCheckbox = () => {
    // Alternative way to select all via checkbox in header
    handleSelectAll();
  };

  const isAllSelected = selectedItems.length === filteredSearchResults.length && filteredSearchResults.length > 0;
  const isPartiallySelected = selectedItems.length > 0 && selectedItems.length < filteredSearchResults.length;

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
        
        {/* Search Box */}
        <div className="mt-4 mb-4">
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
              placeholder="Search shopping list items..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-10 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            {searchQuery && (
              <button
                onClick={handleClearSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-md transition-colors"
                title="Clear search"
              >
                <svg
                  className="w-4 h-4 text-gray-400 hover:text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <p className="text-gray-600">
            {selectedItems.length} of {filteredSearchResults.length} items selected
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

      {/* No Results Message */}
      {filteredSearchResults.length === 0 && searchQuery && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <svg
              className="w-16 h-16 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            No items found
          </h3>
          <p className="text-gray-600 mb-4">
            No items match your search for "{searchQuery}". Try searching for something else.
          </p>
          <button
            onClick={handleClearSearch}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Clear Search
          </button>
        </div>
      )}

      {/* Empty Shopping List Message */}
      {wishlistItems.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <svg
              className="w-16 h-16 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Your shopping list is empty
          </h3>
          <p className="text-gray-600 mb-4">
            Add items to your shopping list to keep track of what you need to buy.
          </p>
          <Link
            href="/"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors inline-block"
          >
            Browse Products
          </Link>
        </div>
      )}

      {/* Wishlist Items */}
      {filteredSearchResults.length > 0 && (
        <div className="space-y-4">
          {filteredSearchResults.map((item) => (
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
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">
                      {item.name}
                    </h3>
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

              {/* Dynamic Action Button */}
              {searchQuery ? (
                // Show Add button for search results not in wishlist
                wishlistItems.some(wishItem => wishItem.id === item.id) ? (
                  <button
                    onClick={() => handleRemoveItem(item.id)}
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
                ) : (
                  <button
                    onClick={() => handleAddToWishlist(item)}
                    className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                    title="Add to shopping list"
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
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                )
              ) : (
                // Show Remove button for wishlist items
                <button
                  onClick={() => handleRemoveItem(item.id)}
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
              )}
            </div>
          </div>
        ))}
        </div>
      )}

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
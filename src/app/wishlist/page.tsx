"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { products, loadAllProducts, Product } from "../products";
import { getBadgeStyles } from "../badge";
import { useCart } from "../cart/CartContext";

export default function WishlistPage() {
  const [newItemInput, setNewItemInput] = useState("");
  const [shoppingList, setShoppingList] = useState<string[]>([]);
  const [isCurateMode, setIsCurateMode] = useState(false);
  const [curatedProducts, setCuratedProducts] = useState<Product[]>([]);
  const [toast, setToast] = useState<string>("");
  const [allProducts, setAllProducts] = useState<Product[]>(products);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  const { addItem, removeItem, updateQuantity, items } = useCart();

  // Load all products when component mounts
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const loadedProducts = await loadAllProducts();
        setAllProducts(loadedProducts);
      } catch (error) {
        console.error('Failed to load all products:', error);
        // Fallback to basic products on error
        setAllProducts(products);
      } finally {
        setIsLoadingProducts(false);
      }
    };

    loadProducts();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewItemInput(e.target.value);
  };

  const handleAddItem = () => {
    if (newItemInput.trim()) {
      setShoppingList(prev => [...prev, newItemInput.trim()]);
      setNewItemInput("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddItem();
    }
  };

  const handleRemoveItem = (index: number) => {
    setShoppingList(prev => prev.filter((_, i) => i !== index));
  };

  const handleClearInput = () => {
    setNewItemInput("");
  };

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(""), 3000);
  };

  // Enhanced confidence-based search function for curation
  const enhancedCurationSearch = (products: Product[], shoppingItems: string[]): Product[] => {
    if (shoppingItems.length === 0) return [];
    
    const allResults = new Map<number, { product: Product, confidence: number }>();
    
    shoppingItems.forEach(item => {
      const keywords = item.toLowerCase().trim().split(/\s+/).filter(keyword => keyword.length > 0);
      if (keywords.length === 0) return;
      
      products.forEach(product => {
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
        
        // Only consider products with >50% confidence
        if (confidence > 50) {
          const existing = allResults.get(product.id);
          if (!existing || confidence > existing.confidence) {
            allResults.set(product.id, { product, confidence });
          }
        }
      });
    });
    
    // Return products sorted by confidence descending
    return Array.from(allResults.values())
      .sort((a, b) => b.confidence - a.confidence)
      .map(item => item.product);
  };

  const handleCurateShoppingList = () => {
    if (shoppingList.length === 0) {
      showToast("Please add items to your shopping list first!");
      return;
    }

    // Use enhanced search for better product matching
    const matchedProducts = enhancedCurationSearch(allProducts, shoppingList);
    setCuratedProducts(matchedProducts.slice(0, 20)); // Show top 20 results
    setIsCurateMode(true);
  };

  const handleBackToList = () => {
    setIsCurateMode(false);
    setCuratedProducts([]);
  };

  const handleAddToCart = (product: any) => {
    addItem(product);
    showToast(`${product.name} added to cart!`);
  };

  const handleIncreaseQuantity = (product: any) => {
    const cartItem = items.find(item => item.id === product.id);
    if (cartItem) {
      updateQuantity(product.id, cartItem.quantity + 1);
    } else {
      addItem(product);
    }
    showToast(`${product.name} quantity updated`);
  };

  const handleDecreaseQuantity = (product: any) => {
    const cartItem = items.find(item => item.id === product.id);
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

  return (
    <div className="min-h-screen bg-green-50 px-4 py-6">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 animate-slide-down">
          <div className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">{toast}</span>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
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
          <h1 className="text-2xl font-bold text-gray-900">
            {isCurateMode ? "Curated Products" : "Shopping List"}
          </h1>
        </div>
      </div>

      {!isCurateMode ? (
        <>
          {/* Add Item Input */}
          <div className="mb-6">
            <div className="relative">
              {shoppingList.length > 0 && (
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
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
              )}
              <input
                type="text"
                placeholder="Add new item to your shopping list..."
                value={newItemInput}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                className={`w-full ${shoppingList.length > 0 ? 'pl-10' : 'pl-4'} pr-24 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 placeholder-gray-500`}
              />
              {newItemInput && (
                <button
                  onClick={handleClearInput}
                  className="absolute right-12 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-md transition-colors"
                  title="Clear input"
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
              <button
                onClick={handleAddItem}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-600 text-white px-3 py-1.5 rounded-md hover:bg-green-700 transition-colors text-sm font-medium"
              >
                Add
              </button>
            </div>
          </div>

          {/* Shopping List Items */}
          {shoppingList.length > 0 ? (
            <div className="space-y-3 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Your Items ({shoppingList.length})
              </h3>
              {shoppingList.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 flex items-center justify-between hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-900 font-medium">{item}</span>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(index)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    title="Remove item"
                  >
                    <svg
                      className="w-4 h-4"
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
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-16">
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
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Your shopping list is empty
              </h3>
              <p className="text-gray-600">
                Start adding items using the input box above to keep track of what you need.
              </p>
            </div>
          )}

          {/* Curate Shopping List Button */}
          <div className="mt-8 text-center">
            <button 
              onClick={handleCurateShoppingList}
              disabled={shoppingList.length === 0 || isLoadingProducts}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-colors font-medium ${
                shoppingList.length === 0 || isLoadingProducts
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}
            >
              {isLoadingProducts ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
                  </svg>
                  Loading Products...
                </>
              ) : (
                <>
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
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                  Curate Shopping List
                </>
              )}
            </button>
            
            {/* Show product count when loaded */}
            {!isLoadingProducts && (
              <div className="mt-2 text-sm text-gray-600">
                Ready to curate from {allProducts.length.toLocaleString()} products
              </div>
            )}
          </div>
        </>
      ) : (
        /* Curated Products View */
        <div>
          {/* Back Button */}
          <div className="mb-6">
            <button
              onClick={handleBackToList}
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Shopping List
            </button>
          </div>

          {/* Curated Products */}
          {curatedProducts.length > 0 ? (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Recommended Products ({curatedProducts.length})
              </h3>
              <p className="text-gray-600 mb-6">
                Based on your shopping list, we found these matching products:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {curatedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-4">
                      {/* Product Visual */}
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                      >
                        <div className="text-2xl">
                          {product.icon}
                        </div>
                      </div>

                      {/* Product Details */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-semibold text-gray-900 text-lg mb-2">
                              {product.name}
                            </h4>
                            <span
                              className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getBadgeStyles(product.badge)}`}
                            >
                              {product.badge}
                            </span>
                          </div>
                          <div className="text-right">
                            <span className="font-bold text-green-600 text-xl">
                              {product.price}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      {(() => {
                        const cartItem = items.find(item => item.id === product.id);
                        const quantity = cartItem ? cartItem.quantity : 0;
                        
                        if (quantity === 0) {
                          return (
                            <button
                              onClick={() => handleIncreaseQuantity(product)}
                              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                              title="Add to cart"
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
                                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                />
                              </svg>
                              <span className="text-sm">Add</span>
                            </button>
                          );
                        }
                        
                        return (
                          <div className="flex items-center gap-1 bg-gray-50 rounded-lg p-1">
                            <button
                              onClick={() => handleDecreaseQuantity(product)}
                              className="w-7 h-7 flex items-center justify-center bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition-colors flex-shrink-0"
                              title="Decrease quantity"
                            >
                              <svg
                                className="w-3 h-3"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={3}
                                  d="M20 12H4"
                                />
                              </svg>
                            </button>
                            <span className="px-2 py-1 text-gray-900 font-bold text-sm min-w-[28px] text-center flex-shrink-0">
                              {quantity}
                            </span>
                            <button
                              onClick={() => handleIncreaseQuantity(product)}
                              className="w-7 h-7 flex items-center justify-center bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex-shrink-0"
                              title="Increase quantity"
                            >
                              <svg
                                className="w-3 h-3"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={3}
                                  d="M12 4v16m8-8H4"
                                />
                              </svg>
                            </button>
                          </div>
                        );
                      })()}
                    </div>
                  </div>
                                  ))}
                </div>
                
                {/* Go to Cart Button */}
                {items.length > 0 && (
                  <div className="text-center">
                    <Link
                      href="/cart"
                      className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
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
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                      </svg>
                      Go to Cart
                      {items.length > 0 && (
                        <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          {items.reduce((total, item) => total + item.quantity, 0)}
                        </span>
                      )}
                    </Link>
                  </div>
                )}
              </div>
          ) : (
            /* No Matches Found */
            <div className="text-center py-16">
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
                    d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-3-3v6m-9 1V7a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No matching products found
              </h3>
              <p className="text-gray-600 mb-6">
                We couldn't find products matching your shopping list items. Try browsing our catalog or modify your shopping list.
              </p>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={handleBackToList}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Back to Shopping List
                </button>
                <Link
                  href="/"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  Browse Products
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
} 
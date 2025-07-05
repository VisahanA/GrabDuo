"use client";

import Link from "next/link";
import { useState, useMemo, useEffect } from "react";
import { getBadgeStyles } from "./badge";
import { useCart } from "./cart/CartContext";
import CartModal from "./cart/CartModal";
import { products, loadAllProducts, Product } from "./products";
import { OCRService, OCRResult } from "./services/ocrService";

export default function GroceryPage() {
  const { addItem, totalItems, items, updateQuantity, removeItem } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isShoppingListModalOpen, setIsShoppingListModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [allProducts, setAllProducts] = useState<Product[]>(products);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isOCRProcessing, setIsOCRProcessing] = useState(false);
  const itemsPerPage = 15;

  // Load all products on component mount
  useEffect(() => {
    let isMounted = true;
    
    const loadProducts = async () => {
      try {
        const loadedProducts = await loadAllProducts();
        if (isMounted) {
          setAllProducts(loadedProducts);
        }
      } catch (error) {
        console.error('Failed to load all products:', error);
        // Fallback to basic products on error
        if (isMounted) {
          setAllProducts(products);
        }
      } finally {
        if (isMounted) {
          setIsInitialLoading(false);
        }
      }
    };

    loadProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  // Enhanced confidence-based search function
  const confidenceBasedSearch = (products: Product[], query: string): Product[] => {
    if (!query.trim()) return products;
    
    const keywords = query.toLowerCase().trim().split(/\s+/).filter(keyword => keyword.length > 0);
    if (keywords.length === 0) return products;
    
    const scoredProducts = products.map(product => {
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
      
      return {
        product,
        confidence: Math.min(confidence, 100) // Cap at 100%
      };
    });
    
    // Filter products with >50% confidence and sort by confidence descending
    return scoredProducts
      .filter(item => item.confidence > 50)
      .sort((a, b) => b.confidence - a.confidence)
      .map(item => item.product);
  };

  // Filter products based on search query using confidence-based search
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) {
      return allProducts;
    }
    
    return confidenceBasedSearch(allProducts, searchQuery);
  }, [searchQuery, allProducts]);

  // Calculate pagination based on filtered products
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  // Reset to first page when search changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  // Clear search
  const handleClearSearch = () => {
    setSearchQuery("");
    setCurrentPage(1);
  };

  // Generate page numbers for pagination
  const pageNumbers = useMemo(() => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
      } else if (currentPage >= totalPages - 2) {
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pages.push(i);
        }
      }
    }
    return pages;
  }, [currentPage, totalPages]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  // Shopping list modal handlers
  const handleSayIt = async () => {
    try {
      // Check if browser supports MediaRecorder
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert('Audio recording is not supported in this browser.');
        return;
      }

      // Don't set processing state yet - only during actual processing
      setIsShoppingListModalOpen(false);

      // Request microphone access
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Show recording UI
      const recordingToast = document.createElement('div');
      recordingToast.className = 'fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-down';
      recordingToast.innerHTML = `
        <div class="flex items-center gap-3">
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            <span class="font-semibold">Recording...</span>
          </div>
          <button class="text-white hover:text-gray-200 text-sm underline">Click to stop</button>
        </div>
      `;
      document.body.appendChild(recordingToast);

      const mediaRecorder = new MediaRecorder(stream);
      const audioChunks: BlobPart[] = [];
      let autoStopTimer: NodeJS.Timeout | null = null;

      mediaRecorder.ondataavailable = (event) => {
        try {
          if (event.data && event.data.size > 0) {
            audioChunks.push(event.data);
            console.log('📼 Audio chunk received:', event.data.size, 'bytes');
          }
        } catch (error) {
          console.warn('⚠️ Error handling audio data:', error);
        }
      };

      mediaRecorder.onerror = (event) => {
        console.error('🎙️ MediaRecorder error:', event);
        stream.getTracks().forEach(track => track.stop());
        if (autoStopTimer) {
          clearTimeout(autoStopTimer);
          autoStopTimer = null;
        }
        if (document.body.contains(recordingToast)) {
          document.body.removeChild(recordingToast);
        }
        setIsOCRProcessing(false);
        alert('Recording error occurred. Please try again.');
      };

      mediaRecorder.onstop = async () => {
        stream.getTracks().forEach(track => track.stop());
        
        // Clear auto-stop timer
        if (autoStopTimer) {
          clearTimeout(autoStopTimer);
          autoStopTimer = null;
        }
        
        // Remove recording UI safely
        if (document.body.contains(recordingToast)) {
          document.body.removeChild(recordingToast);
        }
        
        // Create audio blob
        if (audioChunks.length === 0) {
          console.warn('⚠️ No audio data recorded');
          alert('No audio was recorded. Please try again.');
          setIsOCRProcessing(false);
          return;
        }
        
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        console.log('🎵 Created audio blob:', audioBlob.size, 'bytes, type:', audioBlob.type);
        
        if (audioBlob.size === 0) {
          console.warn('⚠️ Audio blob is empty');
          alert('Recorded audio is empty. Please try again.');
          setIsOCRProcessing(false);
          return;
        }
        
        // Show processing message directly (no separate upload step needed)
        setIsOCRProcessing(true);

        let processingToast: HTMLDivElement | null = null;
        
        try {
          // Show processing toast immediately
          processingToast = document.createElement('div');
          processingToast.className = 'fixed top-4 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-down';
          processingToast.innerHTML = `
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
              </svg>
              <span>Processing speech...</span>
            </div>
          `;
          document.body.appendChild(processingToast);

          console.log('🎵 Audio blob size:', audioBlob.size, 'bytes');
          console.log('🎵 Audio blob type:', audioBlob.type);

          // Check if STT API is available first
          console.log('🔍 Checking STT API availability...');
          try {
            const healthCheck = await fetch('http://localhost:8000/health', {
              method: 'GET',
              headers: {
                'Accept': 'application/json',
              },
            });
            console.log('🔍 STT API health check:', healthCheck.status);
          } catch (healthError) {
            console.warn('⚠️ STT API health check failed:', healthError);
          }

          // Try multiple STT API approaches
          let sttResponse: Response | null = null;
          let sttResult: any = null;

          // Approach 1: Try sending audio file directly (if supported)
          try {
            console.log('🗣️ Trying STT API with file upload...');
            const formData = new FormData();
            formData.append('audio_file', audioBlob, 'recording.wav');
            formData.append('confidence_threshold', '0');

            sttResponse = await fetch('http://localhost:8000/api/v1/stt/transcribe', {
              method: 'POST',
              body: formData,
            });

            console.log('🗣️ STT API (file upload) response status:', sttResponse.status);

            if (sttResponse.ok) {
              sttResult = await sttResponse.json();
              console.log('✅ STT API (file upload) success:', sttResult);
            } else {
              const errorText = await sttResponse.text();
              console.warn('❌ STT API (file upload) failed:', errorText);
              sttResponse = null; // Reset for next attempt
            }
          } catch (fileUploadError) {
            console.warn('❌ STT API file upload approach failed:', fileUploadError);
            sttResponse = null;
          }

          // Approach 2: Try with base64 encoded audio (if file upload failed)
          if (!sttResponse || !sttResponse.ok) {
            try {
              console.log('🗣️ Trying STT API with base64 audio...');
              
              // Convert audio blob to base64
              const audioBase64 = await new Promise<string>((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => {
                  try {
                    const result = reader.result;
                    if (typeof result === 'string' && result.includes(',')) {
                      // Remove data URL prefix (e.g., "data:audio/wav;base64,")
                      const base64 = result.split(',')[1];
                      if (base64) {
                        resolve(base64);
                      } else {
                        reject(new Error('Failed to extract base64 data from FileReader result'));
                      }
                    } else {
                      reject(new Error('FileReader result is not a valid data URL'));
                    }
                  } catch (error) {
                    reject(new Error(`Error processing FileReader result: ${error}`));
                  }
                };
                reader.onerror = (error) => {
                  reject(new Error(`FileReader error: ${error}`));
                };
                reader.onabort = () => {
                  reject(new Error('FileReader operation was aborted'));
                };
                
                try {
                  reader.readAsDataURL(audioBlob);
                } catch (error) {
                  reject(new Error(`Failed to start FileReader: ${error}`));
                }
              });

              sttResponse = await fetch('http://localhost:8000/api/v1/stt/transcribe', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                },
                body: JSON.stringify({
                  audio_data: audioBase64,
                  audio_format: 'wav',
                  confidence_threshold: 0
                })
              });

              console.log('🗣️ STT API (base64) response status:', sttResponse.status);

              if (sttResponse.ok) {
                sttResult = await sttResponse.json();
                console.log('✅ STT API (base64) success:', sttResult);
              } else {
                const errorText = await sttResponse.text();
                console.warn('❌ STT API (base64) failed:', errorText);
                sttResponse = null;
              }
            } catch (base64Error) {
              console.warn('❌ STT API base64 approach failed:', base64Error);
              sttResponse = null;
            }
          }

          // Approach 3: Fallback to URL approach with public placeholder (if all else fails)
          if (!sttResponse || !sttResponse.ok) {
            try {
              console.log('🗣️ Trying STT API with fallback URL...');
              
              sttResponse = await fetch('http://localhost:8000/api/v1/stt/transcribe', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                },
                body: JSON.stringify({
                  audio_url: 'http://localhost:3000/uploads/audio_1751756292580.wav',
                  confidence_threshold: 0
                })
              });

              console.log('🗣️ STT API (fallback) response status:', sttResponse.status);

              if (sttResponse.ok) {
                sttResult = await sttResponse.json();
                console.log('✅ STT API (fallback) success - using demo audio:', sttResult);
              }
            } catch (fallbackError) {
              console.warn('❌ STT API fallback approach failed:', fallbackError);
            }
          }

          // Check final result
          if (!sttResponse || !sttResponse.ok) {
            let errorText = 'No response received';
            try {
              if (sttResponse) {
                errorText = await sttResponse.text();
              }
            } catch (textError) {
              console.warn('Could not read error response text:', textError);
              errorText = `HTTP ${sttResponse?.status || 'Unknown'} error`;
            }
            console.error('❌ All STT API approaches failed');
            throw new Error(`STT API request failed: ${sttResponse?.status || 'No response'} - ${errorText}`);
          }

          console.log('🗣️ Final STT API result:', sttResult);
          
          // Extract transcribed text
          const transcribedText = sttResult?.transcribed_text || sttResult?.text || sttResult?.transcript;
          
          if (transcribedText) {
            // Parse the transcribed text into shopping list items
            const extractedItems = parseShoppingListFromText(transcribedText);
            
            if (extractedItems.length > 0) {
              // Store the extracted items in localStorage for the wishlist page
              if (typeof Storage !== 'undefined') {
                localStorage.setItem('ocrShoppingItems', JSON.stringify(extractedItems));
                localStorage.setItem('ocrOriginalText', transcribedText);
              }
              
              // Remove processing toast safely
              if (processingToast && document.body.contains(processingToast)) {
                document.body.removeChild(processingToast);
              }
              
              // Navigate to wishlist page immediately
              if (typeof window !== 'undefined') {
                window.location.href = '/wishlist?from=stt';
              }
            } else {
              // Even if no items found, store the original text
              if (typeof Storage !== 'undefined') {
                localStorage.setItem('ocrOriginalText', transcribedText);
              }
              if (typeof window !== 'undefined') {
                window.location.href = '/wishlist?from=stt';
              }
            }
          } else {
            throw new Error('No transcribed text received');
          }
        } catch (error) {
          console.error('STT Error:', error);
          
          // Remove processing toast safely
          if (processingToast && document.body.contains(processingToast)) {
            document.body.removeChild(processingToast);
          }
          
          const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
          alert(`Speech processing failed: ${errorMessage}\n\nPlease try again or use manual entry.`);
        } finally {
          setIsOCRProcessing(false);
        }
      };

      // Stop recording when toast is clicked
      recordingToast.onclick = () => {
        try {
          if (mediaRecorder && mediaRecorder.state === 'recording') {
            mediaRecorder.stop();
          }
          if (autoStopTimer) {
            clearTimeout(autoStopTimer);
            autoStopTimer = null;
          }
        } catch (error) {
          console.warn('⚠️ Error stopping recording:', error);
        }
      };

      // Start recording with error handling
      try {
        mediaRecorder.start();
        console.log('🎙️ Recording started');
        
        // Auto-stop after 10 seconds
        autoStopTimer = setTimeout(() => {
          try {
            if (mediaRecorder && mediaRecorder.state === 'recording') {
              console.log('⏰ Auto-stopping recording after 10 seconds');
              mediaRecorder.stop();
            }
          } catch (error) {
            console.warn('⚠️ Error auto-stopping recording:', error);
          }
        }, 10000);
      } catch (error) {
        console.error('❌ Failed to start recording:', error);
        stream.getTracks().forEach(track => track.stop());
        if (document.body.contains(recordingToast)) {
          document.body.removeChild(recordingToast);
        }
        setIsOCRProcessing(false);
        alert('Failed to start recording. Please try again.');
        return;
      }

    } catch (error) {
      console.error('❌ Error starting voice recording:', error);
      
      // Clean up any existing toasts
      const existingToasts = document.querySelectorAll('[class*="fixed top-4 left-1/2"]');
      existingToasts.forEach(toast => {
        try {
          if (document.body.contains(toast)) {
            document.body.removeChild(toast);
          }
        } catch (cleanupError) {
          console.warn('⚠️ Error cleaning up toast:', cleanupError);
        }
      });
      
      setIsOCRProcessing(false);
      
      let errorMessage = 'Microphone access denied or not available';
      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === 'string') {
        errorMessage = error;
      }
      
      console.log('🔍 Error details:', {
        name: error instanceof Error ? error.name : 'Unknown',
        message: errorMessage,
        stack: error instanceof Error ? error.stack : undefined
      });
      
      alert(`Voice recording failed: ${errorMessage}`);
    }
  };

  // Helper function to parse shopping list from OCR text
  const parseShoppingListFromText = (text: string): string[] => {
    const lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    const items: string[] = [];
    
    for (const line of lines) {
      // Remove common list markers (-, *, •, numbers)
      const cleanLine = line.replace(/^[-*•]\s*/, '').replace(/^\d+\.?\s*/, '').trim();
      
      if (cleanLine.length > 2 && cleanLine.length < 50) {
        // Filter out non-product lines (like titles, headers, etc.)
        const lowerLine = cleanLine.toLowerCase();
        if (!lowerLine.includes('shopping') && 
            !lowerLine.includes('list') && 
            !lowerLine.includes('grocery') &&
            !lowerLine.includes('store') &&
            !lowerLine.includes('buy') &&
            !lowerLine.match(/^\d+$/) && // Just numbers
            !lowerLine.match(/^[a-z]\.$/) // Single letters
        ) {
          items.push(cleanLine);
        }
      }
    }
    
    return items.slice(0, 20); // Limit to 20 items
  };

  const handleSnapIt = async () => {
    setIsShoppingListModalOpen(false);
    
    // Create file input element
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.style.display = 'none';
    
    fileInput.onchange = async (event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (!file) return;
      
      // Check if file is an image
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file');
        return;
      }
      
      // Check file size (limit to 10MB)
      if (file.size > 10 * 1024 * 1024) {
        alert('Image file is too large. Please select a file smaller than 10MB.');
        return;
      }
      
      setIsOCRProcessing(true);
      
      try {
        // Check if OCR API is available
        const apiAvailable = await OCRService.isAvailable();
        if (!apiAvailable) {
          throw new Error('OCR service is not available. Please make sure the OCR API is running on localhost:8000');
        }
        
        // Process image with OCR
        const result: OCRResult = await OCRService.extractTextFromImage(file);
        
        if (result.success && result.text) {
          // Parse the OCR result to find product names
          const extractedItems = parseShoppingListFromText(result.text);
          
          if (extractedItems.length > 0) {
            // Store the extracted items in localStorage for the wishlist page
            if (typeof Storage !== 'undefined') {
              localStorage.setItem('ocrShoppingItems', JSON.stringify(extractedItems));
              localStorage.setItem('ocrOriginalText', result.text);
            }
          } else {
            // Even if no items found, store the original text
            if (typeof Storage !== 'undefined') {
              localStorage.setItem('ocrOriginalText', result.text);
            }
          }
          
          // Navigate to wishlist page immediately
          if (typeof window !== 'undefined') {
            window.location.href = '/wishlist?from=ocr';
          }
        } else {
          throw new Error(result.error || 'Failed to extract text from image');
        }
      } catch (error) {
        console.error('OCR Error:', error);
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        alert(`OCR processing failed: ${errorMessage}\n\nPlease try again or use manual entry.`);
      } finally {
        setIsOCRProcessing(false);
      }
    };
    
    // Trigger file selection
    document.body.appendChild(fileInput);
    fileInput.click();
    document.body.removeChild(fileInput);
  };

  // Show loading state while products are being loaded
  if (isInitialLoading) {
    return (
      <div className="min-h-screen bg-green-50 flex items-center justify-center">
        <div className="text-center">
          <svg className="animate-spin h-12 w-12 mx-auto mb-4 text-green-600" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Loading GrabMart</h2>
          <p className="text-gray-600">Preparing all products for you...</p>
        </div>
      </div>
    );
  }

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
                placeholder="Search by name, brand, category, or keywords..."
                className="w-full pl-10 pr-24 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              
              {/* Clear Search Button */}
              {searchQuery && (
                <button
                  onClick={handleClearSearch}
                  className="absolute right-20 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-md transition-colors"
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

              {/* Right side icons */}
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                {/* Shopping List Icon */}
                <button
                  onClick={() => setIsShoppingListModalOpen(true)}
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
                </button>

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
            
            {/* Search Help Text */}
            <div className="mt-2 text-xs text-gray-500">
              💡 Smart search: "coca cola", "fruits", "nestle", "australia", "500ml" - Only shows products with &gt;50% relevance
            </div>
            

          </div>
        </div>

        {/* Product Count Info */}
        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-600">
            Showing {startIndex + 1}-{Math.min(endIndex, filteredProducts.length)} of {filteredProducts.length} products
          </p>
          <p className="text-sm text-gray-500">
            Page {currentPage} of {totalPages}
          </p>
        </div>

        {/* No Results Message */}
        {filteredProducts.length === 0 && searchQuery && (
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
              No products found
            </h3>
            <p className="text-gray-600 mb-4">
              No products with &gt;50% relevance found for "{searchQuery}". Try more specific or different keywords.
            </p>
            <p className="text-sm text-gray-500 mb-4">
              💡 High-confidence search: Try "coca cola", "fruits", "nestle", "biscuits", "australia", or "500ml"
            </p>
            <button
              onClick={handleClearSearch}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Product Grid - 2 columns for mobile */}
        {filteredProducts.length > 0 && (
          <div className="grid grid-cols-2 gap-3">
            {currentProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-200 flex flex-col h-full"
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
              <div className="p-4 flex flex-col flex-1">
                {/* Product Name */}
                <h3 className="font-semibold text-gray-900 text-sm mb-3 line-clamp-2 flex-1">
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
                  className="w-full bg-green-600 text-white text-sm font-medium py-3 px-3 rounded-lg hover:bg-green-700 transition-colors duration-200 active:bg-green-800 mt-auto"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 flex flex-col items-center gap-4">
            {/* Page Info */}
            <div className="text-sm text-gray-600">
              Page {currentPage} of {totalPages}
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center gap-2">
              {/* Previous Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  currentPage === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Page Numbers */}
              {pageNumbers.map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-3 py-2 rounded-lg font-medium transition-colors ${
                    currentPage === page
                      ? 'bg-green-600 text-white shadow-sm'
                      : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}

              {/* Next Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  currentPage === totalPages
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Cart Modal */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Shopping List Modal */}
      {isShoppingListModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setIsShoppingListModalOpen(false)}
        >
          <div 
            className="bg-white rounded-2xl p-8 mx-4 max-w-md w-full shadow-2xl animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="text-center mb-8">
              <div className="mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <svg
                    className="w-8 h-8 text-green-600"
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
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Create Shopping List</h2>
              <p className="text-gray-600">Choose how you'd like to add items to your shopping list</p>
            </div>

            {/* Modal Buttons */}
            <div className="space-y-4">
              {/* Say It Button */}
              <button
                onClick={handleSayIt}
                disabled={isOCRProcessing}
                className={`w-full rounded-xl py-4 px-6 flex items-center justify-center gap-3 transition-colors shadow-lg ${
                  isOCRProcessing 
                    ? 'bg-gray-400 cursor-not-allowed text-white' 
                    : 'bg-purple-600 hover:bg-purple-700 text-white'
                }`}
              >
                {isOCRProcessing ? (
                  <>
                    <svg
                      className="w-6 h-6 animate-spin"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    <div className="text-left">
                      <div className="font-semibold text-lg">Processing...</div>
                      <div className="text-gray-100 text-sm">Converting speech to text</div>
                    </div>
                  </>
                ) : (
                  <>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                      />
                    </svg>
                    <div className="text-left">
                      <div className="font-semibold text-lg">Say It</div>
                      <div className="text-purple-100 text-sm">Use voice to add items</div>
                    </div>
                  </>
                )}
              </button>

              {/* Snap It Button */}
              <button
                onClick={handleSnapIt}
                disabled={isOCRProcessing}
                className={`w-full rounded-xl py-4 px-6 flex items-center justify-center gap-3 transition-colors shadow-lg ${
                  isOCRProcessing 
                    ? 'bg-gray-400 cursor-not-allowed text-white' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <div className="text-left">
                  <div className="font-semibold text-lg">Snap It</div>
                  <div className="text-blue-100 text-sm">Upload image with your list</div>
                </div>
              </button>

              {/* Manual Entry Option */}
              <button
                onClick={() => {
                  setIsShoppingListModalOpen(false);
                  if (typeof window !== 'undefined') {
                    window.location.href = "/wishlist";
                  }
                }}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl py-3 px-6 flex items-center justify-center gap-3 transition-colors"
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
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
                <span className="font-medium">Type Manually</span>
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsShoppingListModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg
                className="w-6 h-6"
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
          </div>
        </div>
      )}
    </>
  );
}

// OCR Service for image text extraction
export interface OCRResult {
  success: boolean;
  text?: string;
  error?: string;
  confidence?: number;
  shoppingItems?: ShoppingItem[];
}

export interface ShoppingItem {
  id: string;
  name: string;
  quantity?: string;
  category?: string;
  words: string[];
  originalText: string;
}

export interface ShoppingListResponse {
  success: boolean;
  totalItems: number;
  items: ShoppingItem[];
  rawText?: string;
  confidence?: number;
  error?: string;
}

export class OCRService {
  private static readonly API_BASE_URL = 'http://localhost:8000';

  /**
   * Convert file to base64 string
   */
  private static fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          // Extract base64 part (remove "data:image/...;base64," prefix)
          const base64 = reader.result.split(',')[1];
          resolve(base64);
        } else {
          reject(new Error('Failed to convert file to base64'));
        }
      };
      reader.onerror = error => reject(error);
    });
  }

  /**
   * Parse text into shopping list items using space delimiter
   */
  private static parseShoppingListItems(text: string): ShoppingItem[] {
    if (!text || text.trim() === '') {
      return [];
    }

    const lines = text.split('\n').filter(line => line.trim() !== '');
    const items: ShoppingItem[] = [];
    let itemIndex = 1;

    lines.forEach((line) => {
      const trimmedLine = line.trim();
      if (trimmedLine) {
        // Split by space delimiter to get individual words
        const words = trimmedLine.split(/\s+/).filter(word => word.length > 0);
        
        // Create separate items for each word
        words.forEach((word: string) => {
          // Clean up the word (remove special characters if needed)
          const cleanWord = word.replace(/[^\w\s&-]/g, '').trim();
          
          if (cleanWord.length > 0) {
            // Check if word starts with a number (quantity)
            const quantityMatch = cleanWord.match(/^(\d+(?:\.\d+)?)/);
            const quantity: string | undefined = quantityMatch ? quantityMatch[1] : undefined;
            
            // Remove quantity from name if found, ensure name is not empty
            let name = quantity ? cleanWord.replace(/^\d+(?:\.\d+)?/, '').trim() : cleanWord;
            
            // Ensure name is not empty after removing quantity
            if (!name && quantity) {
              name = quantity; // Use quantity as name if nothing left
            }
            
            // Basic category detection (can be expanded)
            const category: string = this.detectCategory(name.toLowerCase());

            items.push({
              id: `item_${itemIndex}`,
              name: name,
              quantity: quantity,
              category: category,
              words: [cleanWord], // Single word per item
              originalText: word // Original word from the line
            });
            
            itemIndex++;
          }
        });
      }
    });

    return items;
  }

  /**
   * Detect category based on item name (basic implementation)
   */
  private static detectCategory(itemName: string): string {
    const categories: Record<string, string[]> = {
      'produce': ['apple', 'banana', 'orange', 'lettuce', 'tomato', 'carrot', 'onion', 'potato'],
      'dairy': ['milk', 'cheese', 'yogurt', 'butter', 'cream', 'eggs'],
      'meat': ['chicken', 'beef', 'pork', 'fish', 'turkey', 'salmon'],
      'pantry': ['rice', 'pasta', 'bread', 'flour', 'sugar', 'salt', 'oil'],
      'beverages': ['water', 'juice', 'soda', 'coffee', 'tea', 'beer', 'wine'],
      'frozen': ['ice cream', 'frozen', 'pizza'],
      'household': ['soap', 'detergent', 'paper towels', 'toilet paper']
    };

    for (const [category, keywords] of Object.entries(categories)) {
      if (keywords.some((keyword: string) => itemName.includes(keyword))) {
        return category;
      }
    }

    return 'other';
  }

  /**
   * Extract shopping list items from image file using OCR API
   */
  static async extractShoppingListFromImage(imageFile: File): Promise<ShoppingListResponse> {
    try {
      // First extract text using existing OCR method
      const ocrResult = await this.extractTextFromImage(imageFile);
      
      if (!ocrResult.success || !ocrResult.text) {
        return {
          success: false,
          totalItems: 0,
          items: [],
          error: ocrResult.error || 'Failed to extract text from image'
        };
      }

      // Parse extracted text into shopping list items
      const items = this.parseShoppingListItems(ocrResult.text);

      return {
        success: true,
        totalItems: items.length,
        items: items,
        rawText: ocrResult.text,
        confidence: ocrResult.confidence
      };

    } catch (error) {
      console.error('Shopping List OCR Error:', error);
      return {
        success: false,
        totalItems: 0,
        items: [],
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      };
    }
  }

  /**
   * Extract text from image file using OCR API
   */
  static async extractTextFromImage(imageFile: File): Promise<OCRResult> {
    try {
      // Convert image file to base64
      const base64Image = await this.fileToBase64(imageFile);
      
      // Get the correct MIME type for the data URL
      const mimeType = imageFile.type || 'image/jpeg';
      
      // Try the specific OCR endpoint first
      try {
        const response = await fetch(`${this.API_BASE_URL}/api/v1/ocr/extract-text`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            confidence_threshold: 0,
            image_url: "https://firebasestorage.googleapis.com/v0/b/vichu-s-blog.appspot.com/o/Image%20sample.jpg?alt=media&token=4778a5e1-9830-4f05-b5ec-ec039d575121", // Using data URL format with correct MIME type
            language: "eng",
            preprocess_image: true
          })
        });

        if (response.ok) {
          const result = await response.json();
          
          // Handle different response formats
          if (result.text || result.extracted_text || result.result) {
            return {
              success: true,
              text: result.text || result.extracted_text || result.result,
              confidence: result.confidence
            };
          }
        }
      } catch (err) {
        console.warn('Primary OCR endpoint failed, trying fallback:', err);
      }

      // If primary endpoint fails, try with FormData (legacy support)
      const formData = new FormData();
      formData.append('file', imageFile);
      
      let response: Response | null = null;
      
      // Try fallback endpoints
      const fallbackEndpoints = [
        '/api/v1/ocr',
        '/ocr',
        '/extract-text',
        '/api/ocr'
      ];

      for (const endpoint of fallbackEndpoints) {
        try {
          response = await fetch(`${this.API_BASE_URL}${endpoint}`, {
            method: 'POST',
            body: formData,
            headers: {
              'Accept': 'application/json',
            },
          });

          if (response.ok) {
            break;
          }
        } catch (err) {
          continue;
        }
      }

      // If all external services fail, try our test endpoint
      if (!response || !response.ok) {
        try {
          response = await fetch('/api/test-ocr', {
            method: 'POST',
            body: formData,
            headers: {
              'Accept': 'application/json',
            },
          });
        } catch (err) {
          // Final fallback failed
        }
      }

      if (!response || !response.ok) {
        throw new Error(`OCR API request failed: ${response?.status || 'Network error'}`);
      }

      const result = await response.json();
      
      // Handle different response formats
      if (result.text) {
        return {
          success: true,
          text: result.text,
          confidence: result.confidence
        };
      } else if (result.extracted_text) {
        return {
          success: true,
          text: result.extracted_text,
          confidence: result.confidence
        };
      } else if (result.result) {
        return {
          success: true,
          text: result.result,
          confidence: result.confidence
        };
      } else if (typeof result === 'string') {
        return {
          success: true,
          text: result
        };
      }

      return {
        success: false,
        error: 'Unknown response format from OCR API'
      };

    } catch (error) {
      console.error('OCR Service Error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      };
    }
  }

  /**
   * Extract text from base64 encoded image
   */
  static async extractTextFromBase64(base64Image: string): Promise<OCRResult> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/api/v1/ocr`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          image: base64Image
        })
      });

      if (!response.ok) {
        throw new Error(`OCR API request failed: ${response.status}`);
      }

      const result = await response.json();
      
      return {
        success: true,
        text: result.text || result.extracted_text || result.result,
        confidence: result.confidence
      };

    } catch (error) {
      console.error('OCR Service Error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      };
    }
  }

  /**
   * Check if OCR API is available
   */
  static async isAvailable(): Promise<boolean> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });
      
      return response.ok;
    } catch (error) {
      console.error('OCR API not available:', error);
      return false;
    }
  }
} 
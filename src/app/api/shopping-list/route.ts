import { NextRequest, NextResponse } from 'next/server';
import { OCRService } from '@/app/services/ocrService';

export async function POST(request: NextRequest) {
  try {
    // Get the form data from the request
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { success: false, error: 'No file provided' },
        { status: 400 }
      );
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      return NextResponse.json(
        { success: false, error: 'File must be an image' },
        { status: 400 }
      );
    }

    // Extract shopping list items from the image
    const result = await OCRService.extractShoppingListFromImage(file);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 500 }
      );
    }

    // Return structured shopping list response
    return NextResponse.json({
      success: true,
      message: 'Shopping list extracted successfully',
      data: {
        totalItems: result.totalItems,
        items: result.items,
        rawText: result.rawText,
        confidence: result.confidence
      }
    });

  } catch (error) {
    console.error('Shopping List API Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error occurred' 
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    success: true,
    message: 'Shopping List OCR API is running',
    endpoints: {
      POST: '/api/shopping-list - Upload an image to extract shopping list items',
    },
    responseFormat: {
      success: 'boolean',
      message: 'string',
      data: {
        totalItems: 'number',
        items: [
          {
            id: 'string',
            name: 'string',
            quantity: 'string (optional)',
            category: 'string',
            words: 'string[] (single word per item)',
            originalText: 'string (original word from image)'
          }
        ],
        rawText: 'string (original extracted text)',
        confidence: 'number (optional OCR confidence score)'
      }
    },
    example: {
      input: 'PrpLz Milk Oran&& Faas',
      output: {
        totalItems: 4,
        items: [
          { id: 'item_1', name: 'PrpLz', category: 'other', words: ['PrpLz'], originalText: 'PrpLz' },
          { id: 'item_2', name: 'Milk', category: 'dairy', words: ['Milk'], originalText: 'Milk' },
          { id: 'item_3', name: 'Oran&&', category: 'other', words: ['Oran&&'], originalText: 'Oran&&' },
          { id: 'item_4', name: 'Faas', category: 'other', words: ['Faas'], originalText: 'Faas' }
        ]
      }
    }
  });
} 
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Simulate OCR processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Return mock OCR result
    const mockOCRResult = {
      success: true,
      text: `Shopping List\n- Milk\n- Bread\n- Eggs\n- Bananas\n- Tomatoes\n- Cheese\n- Chicken\n- Rice`,
      confidence: 0.95,
      filename: file.name,
      size: file.size,
      type: file.type
    };

    return NextResponse.json(mockOCRResult);
  } catch (error) {
    console.error('Test OCR Error:', error);
    return NextResponse.json(
      { error: 'Test OCR processing failed' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Test OCR endpoint is working',
    endpoints: {
      POST: '/api/test-ocr - Upload image file for OCR processing'
    }
  });
} 
import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

// Helper function to get file extension from MIME type
function getFileExtension(mimeType: string): string {
  const mimeToExt: { [key: string]: string } = {
    'audio/wav': 'wav',
    'audio/webm': 'webm',
    'audio/mp4': 'mp4',
    'audio/mpeg': 'mp3',
    'audio/ogg': 'ogg',
    'audio/webm;codecs=opus': 'webm'
  };
  
  return mimeToExt[mimeType] || 'wav'; // Default to wav if unknown
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('audio') as File;

    if (!file) {
      return NextResponse.json(
        { success: false, error: 'No audio file provided' },
        { status: 400 }
      );
    }

    // Validate file type
    if (!file.type.startsWith('audio/')) {
      return NextResponse.json(
        { success: false, error: 'File must be an audio file' },
        { status: 400 }
      );
    }

    // Generate unique filename with correct extension
    const timestamp = Date.now();
    const fileExtension = getFileExtension(file.type);
    const filename = `audio_${timestamp}.${fileExtension}`;
    const filepath = path.join(process.cwd(), 'public', 'uploads', filename);

    // Create uploads directory if it doesn't exist
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
    try {
      await mkdir(uploadsDir, { recursive: true });
    } catch (error) {
      // Directory might already exist
    }

    // Convert file to buffer and save
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await writeFile(filepath, buffer);

    // Return the public URL
    const publicUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/uploads/${filename}`;

    return NextResponse.json({
      success: true,
      url: publicUrl,
      filename: filename,
      size: file.size,
      type: file.type
    });

  } catch (error) {
    console.error('Audio upload error:', error);
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
    message: 'Audio Upload API is running',
    endpoints: {
      POST: '/api/upload-audio - Upload audio file for STT processing',
    }
  });
} 
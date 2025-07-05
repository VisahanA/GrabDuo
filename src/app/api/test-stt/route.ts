import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { audio_url, confidence_threshold = 0 } = await request.json();

    console.log('🧪 Testing STT API with:', { audio_url, confidence_threshold });

    // Test 1: Check if STT API is running
    let healthStatus = 'unknown';
    try {
      const healthResponse = await fetch('http://localhost:8000/health', {
        method: 'GET',
        headers: { 'Accept': 'application/json' },
      });
      healthStatus = healthResponse.status.toString();
      console.log('🔍 Health check result:', healthStatus);
    } catch (healthError) {
      console.error('❌ Health check failed:', healthError);
      healthStatus = 'failed';
    }

    // Test 2: Try to reach the STT endpoint
    let sttResponse: Response;
    try {
      sttResponse = await fetch('http://localhost:8000/api/v1/stt/transcribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          audio_url: audio_url || 'http://localhost:3000/uploads/audio_1751756292580.wav',
          confidence_threshold: confidence_threshold
        })
      });
    } catch (fetchError) {
      console.error('❌ STT API fetch failed:', fetchError);
      return NextResponse.json({
        success: false,
        error: 'Cannot reach STT API',
        details: {
          healthStatus,
          fetchError: fetchError instanceof Error ? fetchError.message : 'Unknown fetch error',
          suggestions: [
            'Check if STT API is running on localhost:8000',
            'Verify the endpoint URL is correct',
            'Check for CORS issues',
            'Ensure network connectivity'
          ]
        }
      }, { status: 500 });
    }

    // Test 3: Parse the response
    const responseHeaders = Object.fromEntries(sttResponse.headers.entries());
    console.log('🗣️ STT Response status:', sttResponse.status);
    console.log('🗣️ STT Response headers:', responseHeaders);

    let responseBody;
    try {
      responseBody = await sttResponse.text();
      console.log('🗣️ STT Response body:', responseBody);
    } catch (parseError) {
      console.error('❌ Failed to parse STT response:', parseError);
      return NextResponse.json({
        success: false,
        error: 'Failed to parse STT response',
        details: {
          healthStatus,
          responseStatus: sttResponse.status,
          responseHeaders,
          parseError: parseError instanceof Error ? parseError.message : 'Unknown parse error'
        }
      }, { status: 500 });
    }

    // Test 4: Try to parse as JSON
    let jsonResult;
    try {
      jsonResult = JSON.parse(responseBody);
    } catch (jsonError) {
      console.error('❌ STT response is not valid JSON:', jsonError);
      return NextResponse.json({
        success: false,
        error: 'STT response is not valid JSON',
        details: {
          healthStatus,
          responseStatus: sttResponse.status,
          responseHeaders,
          responseBody: responseBody.substring(0, 500), // First 500 chars
          jsonError: jsonError instanceof Error ? jsonError.message : 'Unknown JSON error'
        }
      }, { status: 500 });
    }

    // Success case
    return NextResponse.json({
      success: true,
      message: 'STT API test completed successfully',
      results: {
        healthStatus,
        sttResponseStatus: sttResponse.status,
        sttResponseHeaders: responseHeaders,
        sttResult: jsonResult,
        extractedText: jsonResult.transcribed_text || jsonResult.text || jsonResult.transcript || 'No text found'
      }
    });

  } catch (error) {
    console.error('🧪 STT test error:', error);
    return NextResponse.json({
      success: false,
      error: 'STT test failed',
      details: {
        error: error instanceof Error ? error.message : 'Unknown error',
        suggestions: [
          'Check if request body is valid JSON',
          'Verify audio_url parameter is provided',
          'Check server logs for more details'
        ]
      }
    }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    success: true,
    message: 'STT Test API is running',
    usage: {
      POST: {
        endpoint: '/api/test-stt',
        body: {
          audio_url: 'https://example.com/audio/sample.wav',
          confidence_threshold: 0
        }
      }
    },
    commonIssues: [
      'STT API not running on localhost:8000',
      'CORS issues between localhost:3000 and localhost:8000',
      'Audio file not accessible from STT API',
      'Incorrect audio format or corrupted file',
      'Network connectivity issues'
    ]
  });
} 
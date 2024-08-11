import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Return response
    return NextResponse.json(
      { success: 1, message: 'Hello from API' },
      { status: 200 }
    );
  } catch (error) {
    // Handle error
    console.error('API_ERROR', error);
    return NextResponse.json(
      { success: 0, message: 'Internal server error!' },
      { status: 500 }
    );
  }
}

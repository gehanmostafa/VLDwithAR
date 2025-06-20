
// app/api/login/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json(); // { username, password }

    console.log('[LOGIN] Sending to external API:', body);

    const response = await fetch(
      'https://interior-desgin.onrender.com/api/v1/auth/login',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      }
    );

    const text = await response.text(); // raw text
    console.log('[LOGIN] External API status:', response.status, 'body:', text);

    if (!response.ok) {
      // forward the error message
      return NextResponse.json(
        { message: text || 'External API error' },
        { status: response.status }
      );
    }

    const data = JSON.parse(text); // parse success payload
    return NextResponse.json(data, { status: 200 });
  } catch (err: any) {
    console.error('[LOGIN] Proxy error:', err.message);
    return NextResponse.json(
      { message: 'Server unavailable, please try again shortly.' },
      { status: 500 }
    );
  }
}

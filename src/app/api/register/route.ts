import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    console.log('Registration submission received (stub):', data);
    return NextResponse.json({ success: true, message: 'Registered successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }
}

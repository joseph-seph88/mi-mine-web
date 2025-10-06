import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email, password, nickname } = await req.json();

  return NextResponse.json({ success: true });
}

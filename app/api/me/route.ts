import { NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';

export function GET() {
  const session = getSession();
  return NextResponse.json({ session });
}

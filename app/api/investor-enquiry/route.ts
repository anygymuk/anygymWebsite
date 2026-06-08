import { NextRequest, NextResponse } from 'next/server';
import { sendInvestorNotification, sendInvestorPack } from '@/lib/sendgrid';
import { investorSchema } from '@/lib/validation';

const rateLimit = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (rateLimit.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (timestamps.length >= RATE_LIMIT_MAX) return true;
  timestamps.push(now);
  rateLimit.set(ip, timestamps);
  return false;
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      'unknown';

    if (isRateLimited(ip)) {
      return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
    }

    const body = await request.json();
    const result = investorSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error.errors[0]?.message || 'Invalid form data' },
        { status: 400 }
      );
    }

    if (!process.env.SENDGRID_API_KEY) {
      console.warn('SENDGRID_API_KEY not configured — skipping email send');
      return NextResponse.json({ success: true, emailSent: false });
    }

    await Promise.all([
      sendInvestorNotification(result.data),
      sendInvestorPack(result.data),
    ]);

    return NextResponse.json({ success: true, emailSent: true });
  } catch (error) {
    console.error('Investor enquiry error:', error);
    return NextResponse.json(
      { error: 'Failed to process your enquiry. Please try again or email contact@any-gym.com.' },
      { status: 500 }
    );
  }
}

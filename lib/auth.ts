import { cookies } from 'next/headers';
import crypto from 'crypto';

export type Role = 'parent' | 'staff' | 'admin';

export type Session = {
  sub: string;           // user id
  role: Role;
  name: string;
  email: string;
  exp: number;           // unix seconds
};

const COOKIE = 'myg_session';
const SECRET = process.env.AUTH_SECRET || 'dev_secret_change_me';
const MAX_AGE = 60 * 60 * 24; // 1 day

function sign(payloadB64: string) {
  return crypto.createHmac('sha256', SECRET).update(payloadB64).digest('hex');
}

function encode(session: Session) {
  const payload = Buffer.from(JSON.stringify(session)).toString('base64url');
  const sig = sign(payload);
  return `${payload}.${sig}`;
}

function decode(token: string | undefined | null): Session | null {
  if (!token) return null;
  const [payload, sig] = token.split('.');
  if (!payload || !sig) return null;
  if (sign(payload) !== sig) return null;
  try {
    const obj = JSON.parse(Buffer.from(payload, 'base64url').toString());
    if (typeof obj?.exp !== 'number' || Date.now() / 1000 > obj.exp) return null;
    return obj as Session;
  } catch {
    return null;
  }
}

export function getSession(): Session | null {
  const token = cookies().get(COOKIE)?.value;
  return decode(token);
}

export function setSession(base: Omit<Session, 'exp'>) {
  const session: Session = { ...base, exp: Math.floor(Date.now() / 1000) + MAX_AGE };
  const token = encode(session);
  cookies().set(COOKIE, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: MAX_AGE,
    path: '/',
  });
  return session;
}

export function clearSession() {
  cookies().delete(COOKIE);
}

'use client';
import { useEffect, useState } from 'react';
import type { Session } from './auth';

export function useUser() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    fetch('/api/me')
      .then((r) => r.json())
      .then((d) => alive && setSession(d.session ?? null))
      .finally(() => alive && setLoading(false));
    return () => { alive = false; };
  }, []);

  return { session, loading };
}

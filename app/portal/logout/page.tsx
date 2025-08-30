'use client';
import { useEffect } from 'react';

export default function LogoutPage() {
  useEffect(() => {
    fetch('/portal/logout/clear', { method: 'POST' }).finally(() => {
      window.location.href = '/portal/login';
    });
  }, []);
  return <div className="py-10">Signing out…</div>;
}

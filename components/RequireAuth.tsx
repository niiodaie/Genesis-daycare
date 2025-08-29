'use client'
import { ReactNode, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useUser } from '@/lib/useUser'

export default function RequireAuth({ children }: { children: ReactNode }) {
  const { user, loading } = useUser()
  const router = useRouter()
  useEffect(() => {
    if (!loading && !user) router.replace('/portal/login')
  }, [loading, user, router])
  if (loading || !user) return <div className="p-8">Loading…</div>
  return <>{children}</>
}

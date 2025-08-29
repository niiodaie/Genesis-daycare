'use client'
import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'

export function useUser() {
  const [session, setSession] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!supabase) { setLoading(false); return }
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session || null)
      setLoading(false)
    })
    const { data: sub } = supabase.auth.onAuthStateChange((_event, sess) => setSession(sess))
    return () => { sub.subscription.unsubscribe() }
  }, [])

  return { session, loading, user: session?.user }
}

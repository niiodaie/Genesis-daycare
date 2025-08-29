'use client'
import { supabase } from '@/lib/supabaseClient'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function LogoutPage() {
  const router = useRouter()
  useEffect(() => {
    async function run() {
      if (supabase) await supabase.auth.signOut()
      router.replace('/')
    }
    run()
  }, [router])
  return <div className="p-8">Signing out…</div>
}

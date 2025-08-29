'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState('')
  const router = useRouter()

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true); setErr('')
    try {
      if (!supabase) throw new Error('Supabase env vars missing')
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) throw error
      router.replace('/portal')
    } catch (e:any) { setErr(e.message) } finally { setLoading(false) }
  }

  return (
    <div className="py-10 max-w-md mx-auto">
      <h1 className="text-3xl font-extrabold font-display text-center">Parent Login</h1>
      <form onSubmit={onSubmit} className="card mt-6 grid gap-3">
        <input type="email" required className="rounded-xl border px-4 py-3" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input type="password" required className="rounded-xl border px-4 py-3" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="btn btn-primary" disabled={loading}>{loading ? 'Signing in…' : 'Sign In'}</button>
        {err && <p className="text-red-600">{err}</p>}
        <p className="text-sm text-gray-600">Need an account? Contact the office to be invited.</p>
      </form>
    </div>
  )
}

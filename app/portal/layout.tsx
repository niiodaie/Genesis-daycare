import RequireAuth from '@/components/RequireAuth'
import Link from 'next/link'
import { LogOut, User } from 'lucide-react'

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <RequireAuth>
      <div className="py-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-extrabold font-display">Parent Portal</h1>
            <p className="text-gray-600 mt-2">View your child's daily reports, messages, and account info.</p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/portal/profile" className="flex items-center gap-2 text-sm text-gray-600 hover:text-royalRed">
              <User className="w-4 h-4" />
              Profile
            </Link>
            <Link href="/portal/logout" className="flex items-center gap-2 text-sm text-gray-600 hover:text-royalRed">
              <LogOut className="w-4 h-4" />
              Sign out
            </Link>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </RequireAuth>
  )
}

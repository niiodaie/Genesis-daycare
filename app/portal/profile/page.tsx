'use client'
import Breadcrumbs from '@/components/Breadcrumbs'
import { useUser } from '@/lib/useUser'

export default function ProfilePage() {
  const { user } = useUser()

  const breadcrumbItems = [
    { label: 'Portal', href: '/portal' },
    { label: 'Profile' }
  ]

  return (
    <div className="grid gap-6">
      <Breadcrumbs items={breadcrumbItems} />
      
      <div className="card">
        <h1 className="text-2xl font-bold">Profile</h1>
        <div className="mt-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <p className="mt-1 text-gray-900">{user?.email || 'Not available'}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">User ID</label>
            <p className="mt-1 text-gray-900 font-mono text-sm">{user?.id || 'Not available'}</p>
          </div>
          <div className="pt-4">
            <p className="text-sm text-gray-600">
              Profile management features will be available soon. Contact the daycare center for any account updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


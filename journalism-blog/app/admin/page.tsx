'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function AdminIndex() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Admin Dashboard</h2>
      <div className="space-y-4">
        <a className="block p-4 border rounded" href="/admin/articles">Manage Articles</a>
        <a className="block p-4 border rounded" href="/admin/settings">Site Settings</a>
      </div>
    </div>
  )
}

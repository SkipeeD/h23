'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function EditArticle({ params }: any) {
  const id = params.id
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    async function load() {
      const r = await fetch(`/api/articles/${id}`)
      const j = await r.json()
      setData(j)
      setLoading(false)
    }
    load()
  }, [id])

  async function save(e: any) {
    e.preventDefault()
    await fetch(`/api/articles/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    router.push('/admin/articles')
  }

  async function remove() {
    if (!confirm('Delete article?')) return
    await fetch(`/api/articles/${id}`, { method: 'DELETE' })
    router.push('/admin/articles')
  }

  if (loading) return <div>Loading…</div>
  if (!data) return <div>Not found</div>

  return (
    <form onSubmit={save} className="space-y-3 max-w-2xl">
      <div>
        <label className="block text-sm">Title</label>
        <input className="w-full border p-2" value={data.title} onChange={e => setData({...data, title: e.target.value})} />
      </div>
      <div>
        <label className="block text-sm">Slug</label>
        <input className="w-full border p-2" value={data.slug} onChange={e => setData({...data, slug: e.target.value})} />
      </div>
      <div>
        <label className="block text-sm">Excerpt</label>
        <input className="w-full border p-2" value={data.excerpt} onChange={e => setData({...data, excerpt: e.target.value})} />
      </div>
      <div>
        <label className="block text-sm">Content (Markdown)</label>
        <textarea className="w-full border p-2 h-48" value={data.content} onChange={e => setData({...data, content: e.target.value})} />
      </div>
      <div className="flex gap-2">
        <button className="px-4 py-2 border rounded">Save</button>
        <button type="button" onClick={remove} className="px-4 py-2 border rounded text-red-600">Delete</button>
      </div>
    </form>
  )
}

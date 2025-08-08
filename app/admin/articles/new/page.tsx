'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function NewArticle() {
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [content, setContent] = useState('')
  const router = useRouter()

  async function handleSubmit(e: any) {
    e.preventDefault()
    const res = await fetch('/api/articles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, slug: slug || title.toLowerCase().replace(/\s+/g, '-'), excerpt, content })
    })
    if (res.ok) router.push('/admin/articles')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 max-w-2xl">
      <div>
        <label className="block text-sm">Title</label>
        <input className="w-full border p-2" value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <div>
        <label className="block text-sm">Slug</label>
        <input className="w-full border p-2" value={slug} onChange={e => setSlug(e.target.value)} />
      </div>
      <div>
        <label className="block text-sm">Excerpt</label>
        <input className="w-full border p-2" value={excerpt} onChange={e => setExcerpt(e.target.value)} />
      </div>
      <div>
        <label className="block text-sm">Content (Markdown)</label>
        <textarea className="w-full border p-2 h-48" value={content} onChange={e => setContent(e.target.value)} />
      </div>
      <div>
        <button className="px-4 py-2 border rounded">Create Article</button>
      </div>
    </form>
  )
}

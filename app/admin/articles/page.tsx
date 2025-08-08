import Link from 'next/link'
import { prisma } from '../../../lib/prisma'

export default async function ArticlesAdmin() {
  const articles = await prisma.article.findMany({ orderBy: { createdAt: 'desc' } })
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Articles</h2>
        <Link href="/admin/articles/new" className="px-3 py-2 border rounded">New Article</Link>
      </div>
      <div className="space-y-3">
        {articles.map(a => (
          <div key={a.id} className="p-3 border rounded flex justify-between items-center">
            <div>
              <div className="font-medium">{a.title}</div>
              <div className="text-sm text-slate-500">{a.slug}</div>
            </div>
            <div className="space-x-2">
              <Link href={`/admin/articles/${a.id}/edit`} className="text-blue-600">Edit</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

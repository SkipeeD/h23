import Link from 'next/link'
import { prisma } from './lib/prisma.ts'

export default async function Home() {
  const articles = await prisma.article.findMany({ orderBy: { createdAt: 'desc' }, take: 10 })
  return (
    <div>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Latest Articles</h2>
        <div className="space-y-6">
          {articles.map(a => (
            <article key={a.id} className="p-4 border rounded">
              <h3 className="text-lg font-semibold"><Link href={`/article/${a.slug}`}>{a.title}</Link></h3>
              <p className="text-sm text-slate-600">{a.excerpt}</p>
              <Link href={`/article/${a.slug}`} className="text-blue-600 text-sm">Read more →</Link>
            </article>
          ))}
          {articles.length === 0 && <p>No articles yet. Log in to Admin to create one.</p>}
        </div>
      </section>
    </div>
  )
}

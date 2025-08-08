import { prisma } from '../../../lib/prisma'
import ReactMarkdown from 'react-markdown'

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await prisma.article.findUnique({ where: { slug: params.slug } })
  if (!article) return <div>Article not found</div>
  return (
    <article>
      <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
      <p className="text-sm text-slate-500 mb-4">{new Date(article.createdAt).toLocaleDateString()}</p>
      {article.coverUrl && <img src={article.coverUrl} alt="" className="mb-4 max-h-60 w-full object-cover rounded" />}
      <div className="prose"><ReactMarkdown>{article.content}</ReactMarkdown></div>
    </article>
  )
}

import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'

export async function GET() {
  const articles = await prisma.article.findMany({ orderBy: { createdAt: 'desc' } })
  return NextResponse.json(articles)
}

export async function POST(request: Request) {
  const body = await request.json()
  const { title, slug, excerpt, content, category, coverUrl, published } = body
  const article = await prisma.article.create({ data: { title, slug, excerpt, content, category, coverUrl, published } })
  return NextResponse.json(article)
}

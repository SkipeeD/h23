import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id)
  const article = await prisma.article.findUnique({ where: { id } })
  return NextResponse.json(article)
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id)
  const body = await request.json()
  const updated = await prisma.article.update({ where: { id }, data: body })
  return NextResponse.json(updated)
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id)
  await prisma.article.delete({ where: { id } })
  return NextResponse.json({ ok: true })
}

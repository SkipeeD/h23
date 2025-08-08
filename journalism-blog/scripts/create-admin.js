/**
 * Run with: node scripts/create-admin.js
 * It reads ADMIN_EMAIL and ADMIN_PASSWORD from process.env (or .env) and creates a user via Prisma.
 */
const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')
require('dotenv').config()
;(async () => {
  const prisma = new PrismaClient()
  const email = process.env.ADMIN_EMAIL
  const pwd = process.env.ADMIN_PASSWORD
  if (!email || !pwd) {
    console.error('Set ADMIN_EMAIL and ADMIN_PASSWORD in env')
    process.exit(1)
  }
  const hashed = await bcrypt.hash(pwd, 10)
  await prisma.user.upsert({
    where: { email },
    update: { password: hashed },
    create: { email, password: hashed, name: 'Admin' }
  })
  console.log('Admin user created/updated:', email)
  await prisma.$disconnect()
})()

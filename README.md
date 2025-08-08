# Journalism Blog — Minimal Deployable Project

This is a ready-to-deploy Next.js (App Router) project with a simple admin dashboard for creating/editing/deleting articles.
The admin is protected with a single credentials-based account (email + password).

## Features
- Home page with recent articles, search, and category filters
- Article detail pages (Markdown content)
- Admin panel: create / edit / delete articles, edit site settings
- Authentication: single user via environment vars (Credentials provider)
- Tailwind CSS minimalist responsive design
- Prisma schema (SQLite by default) — can switch to Supabase/PlanetScale in production

## Quick start (local)

1. Install packages
```bash
npm install
```

2. Create `.env` based on `.env.example` and set your DATABASE_URL and ADMIN_EMAIL/ADMIN_PASSWORD. For local dev you can use SQLite:
```
DATABASE_URL="file:./dev.db"
ADMIN_EMAIL=your@email.com
ADMIN_PASSWORD=securepassword
NEXTAUTH_SECRET=some-random-string
```

3. Generate Prisma client and run migrations
```bash
npx prisma generate
npx prisma migrate dev --name init
```

4. Start dev server
```bash
npm run dev
```

## Deploy to Vercel

1. Push this project to a GitHub repo.
2. Create a Vercel account and import the GitHub repo.
3. In Vercel dashboard -> Settings -> Environment Variables, set the same env vars as in `.env`.
   - IMPORTANT: For production use a hosted database (Supabase / PlanetScale) and set `DATABASE_URL` accordingly.
4. Deploy — Vercel will run the build and deploy the app.

## Notes about persistence on Vercel
Vercel's serverless filesystem is ephemeral. **Do not** rely on `sqlite` file persistence on Vercel for production. Use a hosted DB provider (Supabase, PlanetScale).

---

If you want, I can also:
- initialize a GitHub repo for you (I will provide the steps),
- create seed data and a helper script for creating the admin user,
- or adapt the project to use Supabase storage for images.


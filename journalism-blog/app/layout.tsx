import './styles.css'
import Link from 'next/link'

export const metadata = {
  title: 'Journalism Blog',
  description: 'A simple blog with admin dashboard'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b py-4 mb-6">
          <div className="container flex items-center justify-between">
            <Link href="/"><h1 className="text-xl font-semibold">Journalism Blog</h1></Link>
            <nav className="space-x-4">
              <Link href="/admin">Admin</Link>
            </nav>
          </div>
        </header>
        <main className="container">{children}</main>
        <footer className="border-t mt-10 py-6 text-center">
          <div className="container text-sm text-slate-600">Made for journalism students — editable from Admin.</div>
        </footer>
      </body>
    </html>
  )
}

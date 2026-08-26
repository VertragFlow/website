import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HSAA — Move work forward',
  description: 'HSAA turns scattered requests into clear, trackable workflows for modern teams.',
  generator: 'HSAA',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f5f3ee',
  userScalable: false,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" dir="ltr" className="bg-background"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}

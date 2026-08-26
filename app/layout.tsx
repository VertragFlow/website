import { Analytics } from '@vercel/analytics/next'
import { Noto_Sans_Arabic, Roboto } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const notoArabic = Noto_Sans_Arabic({ subsets: ['arabic'], variable: '--font-arabic' })
const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto-face' })

export const metadata: Metadata = {
  title: 'VertragFlow — طريقك للكونترا فألمانيا',
  description: 'VertragFlow كيساعدك تصيفط ملفات الترشح ديالك لأكثر من 1000 شركة ألمانية بطريقة مهنية وآمنة.',
  generator: 'VertragFlow',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f5f3ee',
  userScalable: false,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl" className="bg-background"><body className={`${notoArabic.variable} ${roboto.variable} antialiased`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}

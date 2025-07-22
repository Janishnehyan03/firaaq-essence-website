// app/layout.tsx
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'

// Configure the font
const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'FIRAAQ | Fragrances',
  description: 'THE PAIN OF BEING AWAY FROM SOMEONE YOU LOVE',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  )
}
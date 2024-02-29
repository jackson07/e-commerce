import type { Metadata } from 'next'
import './../styles/globals.css'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'

export const metadata: Metadata = {
  title: 'E-commerce',
  description: 'E-commerce Study Store com Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-700">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

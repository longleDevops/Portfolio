import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/app/components/main/Navbar'

export const metadata: Metadata = {
  title: 'Long Le Portfolio',
  description: 'This is Long portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}

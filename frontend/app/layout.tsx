import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Bhagya Lakshan - Portfolio',
  description: 'Created by bhagya lakshan',
  generator: 'Bhagya Lakshan Portfolio',
  icons: {
    icon: [
      {
        url: '/prop1.jpg', // 👈 local image for your tab icon
        type: 'image/jpg',
        sizes: '32x32',
      },
      {
        url: '/prop1.jpg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/prop1.jpg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/prop1.jpg',
        type: 'image/jpg',
      },
    ],
    apple: 'prop1.jpg',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

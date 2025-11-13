import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Bhagya Lakshan',
  description: 'Created by Bhagya Lakshan',
  generator: 'Bhagya Lakshan Portfolio',
  icons: {
    icon: [
      {
        url: '/prop1.png', // use circular PNG
        type: 'image/png',
        sizes: '32x32',
      },
      {
        url: '/prop1.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/prop1.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/prop1.png',
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

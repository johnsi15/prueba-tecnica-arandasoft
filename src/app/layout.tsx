import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import localFont from 'next/font/local'
import '@/styles/globals.scss'
import { Header } from '@/components/layout/header'
import { Providers } from '@/app/providers'
import { SITE_CONFIG, META_DEFAULT, OPEN_GRAPH, TWITTER } from '@/lib/metadata'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
})

const monsterClubhouse = localFont({
  src: [
    {
      path: '../fonts/MonsterClubhouse.woff2',
      style: 'normal',
    },
    {
      path: '../fonts/MonsterClubhouse.woff',
      style: 'normal',
    },
  ],
  variable: '--font-monster-clubhouse',
})

export const metadata: Metadata = {
  ...META_DEFAULT,
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  openGraph: OPEN_GRAPH,
  twitter: TWITTER,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es'>
      <body className={`${poppins.variable} ${monsterClubhouse.variable}`}>
        <Providers>
          <Header />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  )
}

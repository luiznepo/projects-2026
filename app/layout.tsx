import type { Metadata } from 'next'
import { Poppins, IBM_Plex_Sans, IBM_Plex_Serif, Inter } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const ibmPlexSans = IBM_Plex_Sans({
  variable: '--font-ibm-plex-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const ibmPlexSerif = IBM_Plex_Serif({
  variable: '--font-ibm-plex-serif',
  subsets: ['latin'],
  weight: ['700'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Luiz Nepo — UX/UI Designer',
  description: 'Portfólio de Luiz Felipe — UX/UI Designer & Product Designer',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt"
      className={`${poppins.variable} ${ibmPlexSans.variable} ${ibmPlexSerif.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full bg-white text-[#141313]">{children}</body>
    </html>
  )
}

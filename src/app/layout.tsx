import type { Metadata } from 'next'
import '@/styles/custom.css'
import Footer from '@/components/layout/Footer'
import { Suspense } from 'react'
import { IBM_Plex_Sans_Arabic } from 'next/font/google'

const ibmPlex = IBM_Plex_Sans_Arabic({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['arabic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'المزيد القانونية - للمحاماة والاستشارات القانونية',
  description: 'مكتب المزيد للمحاماة والاستشارات القانونية - خبرة تمتد لأكثر من 15 عاماً في مجال المحاماة والاستشارات القانونية',
  keywords: ['محاماة', 'استشارات قانونية', 'المزيد القانونية', 'مكتب محاماة'],
  authors: [{ name: 'المزيد القانونية' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: 'https://almazyed.law',
    title: 'المزيد القانونية - للمحاماة والاستشارات القانونية',
    description: 'مكتب المزيد للمحاماة والاستشارات القانونية - خبرة تمتد لأكثر من 15 عاماً في مجال المحاماة والاستشارات القانونية',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={ibmPlex.className}>
      <body className="min-h-screen bg-[#081425] bg-gradient-to-b from-background via-background to-background/95">
        <div className="relative min-h-screen">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,165,114,0.03),transparent_70%)]" />
          <div 
            className="absolute inset-0 bg-[url('/patterns/noise.svg')] opacity-5 mix-blend-soft-light" 
            style={{ backgroundSize: '200px 200px' }}
            role="presentation"
          />
          
          {/* Main Content */}
          <div className="relative">
            <Suspense fallback={null}>
              {children}
            </Suspense>
          </div>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </div>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { IBM_Plex_Sans_Arabic } from 'next/font/google'
import '@/styles/custom.css'
import Footer from '@/components/Footer'

const ibmPlex = IBM_Plex_Sans_Arabic({
  weight: ['400', '500', '600', '700'],
  subsets: ['arabic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'المزيد القانوني - مكتب محاماة واستشارات قانونية',
  description: 'مكتب المزيد للمحاماة والاستشارات القانونية - خبرة تمتد لأكثر من 15 عاماً في مجال المحاماة والاستشارات القانونية',
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
          <div className="absolute inset-0 bg-[url('/patterns/dot-pattern.png')] opacity-[0.02]" />
          <div className="absolute inset-0 bg-[url('/patterns/noise.png')] opacity-[0.02] mix-blend-overlay" />
          
          {/* Main Content */}
          <div className="relative">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}

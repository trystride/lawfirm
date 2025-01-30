import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '@/styles/custom.css'
import Footer from '@/components/Footer'

const ibmPlex = localFont({
  src: [
    {
      path: '../../public/fonts/IBMPlexSansArabic-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/IBMPlexSansArabic-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/IBMPlexSansArabic-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/IBMPlexSansArabic-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  fallback: ['system-ui', 'arial'],
  preload: true,
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
      <head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
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

import HeroSection from '@/components/blocks/hero-section-dark'
import Navbar from '@/components/layout/Navbar'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Team from '@/components/sections/Team'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <Team />
      <Contact />
    </main>
  )
}

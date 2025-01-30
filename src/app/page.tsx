import HeroSection from '@/components/blocks/hero-section-dark'
import Navbar from '@/components/navigation/Navbar'
import About from '@/components/sections/About'
import Services from '@/components/Services'
import Team from '@/components/Team'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="bg-background">
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <Team />
      <Contact />
    </main>
  )
}

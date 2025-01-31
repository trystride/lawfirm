'use client'

import { motion } from "framer-motion"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const Hero = () => {
  const handleConsultationClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Set a timeout to focus and select the consultation option after scrolling
      setTimeout(() => {
        const subjectSelect = document.getElementById('subject') as HTMLSelectElement;
        if (subjectSelect) {
          subjectSelect.focus();
          subjectSelect.value = 'استشارة';
          // Trigger change event
          subjectSelect.dispatchEvent(new Event('change', { bubbles: true }));
        }
      }, 800); // Wait for scroll animation to complete
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 to-primary" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,165,114,0.08),transparent_70%)]" />
        <div className="absolute inset-0 bg-[url('/patterns/noise.png')] opacity-[0.03] mix-blend-overlay" />
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      {/* Content */}
      <div className="container-custom relative">
        <div className="text-center space-y-8">
          {/* Subtitle */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="text-accent/80 text-lg font-medium px-6 py-2 rounded-full border border-accent/20 bg-accent/5">
              خبراء في القانون والاستشارات
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1 
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight"
          >
            <span className="block mb-2">مكتب الدكتور وليد عبدالله محمد المزيد</span>
            <span className="block text-accent mt-4 bg-gradient-to-r from-accent/90 to-accent bg-clip-text text-transparent">
              للمحاماة والاستشارات القانونية
            </span>
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            {...fadeInUp}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300/90 max-w-3xl mx-auto leading-relaxed font-light"
          >
            خبرة في تأسيس الشركات وتحقيق الرؤى الاستثمارية
          </motion.p>
          
          {/* CTA Button */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.8 }}
            className="mt-12"
          >
            <a 
              href="#contact"
              onClick={handleConsultationClick}
              className="group relative inline-flex items-center justify-center"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-accent/80 blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
              <span className="relative inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-lg font-medium text-primary transition-transform duration-300 hover:translate-y-[-2px]">
                احجز استشارة
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rtl:rotate-180">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </a>
          </motion.div>

          {/* Stats or Trust Indicators */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 1 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto text-center"
          >
            {[
              { number: "+15", label: "سنة خبرة" },
              { number: "+500", label: "عميل" },
              { number: "+1000", label: "قضية ناجحة" },
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-2xl md:text-3xl font-bold text-accent">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute left-0 right-0 bottom-0 h-32 bg-gradient-to-t from-primary to-transparent pointer-events-none" />
    </section>
  )
}

export default Hero

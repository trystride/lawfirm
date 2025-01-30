'use client'

import { motion } from 'framer-motion'
import { Award, Users, Scale, BookOpen, Quote } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'خبرة عريقة',
    description: 'نمتلك خبرة تمتد لأكثر من 15 عاماً في مجال المحاماة والاستشارات القانونية'
  },
  {
    icon: Users,
    title: 'فريق متخصص',
    description: 'نضم نخبة من المحامين والمستشارين القانونيين ذوي الكفاءة العالية'
  },
  {
    icon: Scale,
    title: 'حلول قانونية',
    description: 'نقدم حلولاً قانونية مبتكرة تناسب احتياجات عملائنا'
  },
  {
    icon: BookOpen,
    title: 'معرفة شاملة',
    description: 'نواكب التطورات القانونية ونطبق أفضل الممارسات في مجال المحاماة'
  }
]

const testimonials = [
  {
    quote: "تجربة متميزة في التعامل مع مكتب المزيد القانوني. احترافية عالية وخدمة ممتازة.",
    author: "محمد السعيد",
    position: "رئيس تنفيذي"
  },
  {
    quote: "فريق عمل محترف وخدمة قانونية متكاملة. أنصح بالتعامل معهم.",
    author: "سارة العبدالله",
    position: "مديرة شركة"
  }
]

const stats = [
  { number: "+15", label: "سنوات من الخبرة" },
  { number: "+500", label: "قضية ناجحة" },
  { number: "+50", label: "شركة تم تأسيسها" },
  { number: "+20", label: "محامي وخبير" }
]

export default function About() {
  return (
    <section id="about" className="section relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,165,114,0.03),transparent_70%)]" />
      
      <div className="container-custom relative">
        <div className="section-header space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading text-4xl md:text-5xl font-bold"
          >
            المزيد القانونية
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-gold text-xl md:text-2xl font-semibold max-w-3xl mx-auto"
          >
            للمحاماة والاستشارات القانونية
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="mt-16 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* About Content */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/10">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">نبذة عن المكتب</h3>
              <div className="space-y-6 text-lg leading-relaxed text-text-secondary">
                <p>
                  انطلق المكتب في عام 1430هـ (2009م) ساعيًا للتميز في تقديم الخدمات القانونية المتخصصة، لا سيما في المجالات التجارية والزكوية والضريبية.
                </p>
                <p>
                  وقد ضمّ نخبة من المحامين والمستشارين ذوي الخبرات الواسعة في مختلف القطاعات القضائية والقانونية.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 px-8 py-3 bg-brand-gold text-background rounded-lg font-semibold hover:bg-brand-gold/90 transition-colors"
                >
                  احجز استشارة مجانية
                </motion.button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/10">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">إنجازاتنا</h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="text-center"
                  >
                    <div className="text-4xl font-bold text-brand-gold mb-2">{stat.number}</div>
                    <div className="text-text-secondary">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card group text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-gold/10 mb-6 group-hover:bg-brand-gold/20 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-brand-gold" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-primary group-hover:gradient-text transition-all">
                  {feature.title}
                </h3>
                <p className="text-text-secondary">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Testimonials */}
        <div className="mt-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-center mb-12 gradient-text"
          >
            ماذا يقول عملاؤنا
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/10"
              >
                <Quote className="w-10 h-10 text-brand-gold mb-6" />
                <p className="text-lg text-text-secondary mb-6">{testimonial.quote}</p>
                <div>
                  <div className="font-semibold text-text-primary">{testimonial.author}</div>
                  <div className="text-sm text-text-secondary">{testimonial.position}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

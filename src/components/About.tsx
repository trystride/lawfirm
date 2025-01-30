'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'

const achievements = [
  { number: "15+", label: "سنوات خبرة" },
  { number: "500+", label: "عميل" },
  { number: "1000+", label: "قضية ناجحة" },
  { number: "50+", label: "شركة تم تأسيسها" }
]

const About = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/95 to-primary">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,165,114,0.03),transparent_70%)]" />
        <div className="absolute inset-0 bg-[url('/patterns/noise.png')] opacity-[0.02] mix-blend-overlay" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      
      <div className="container-custom relative">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold"
          >
            من نحن
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-4 mx-auto w-24 h-1 bg-accent"
          />
        </div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent border border-accent/10"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <span className="block text-3xl md:text-4xl font-bold text-accent mb-2">{achievement.number}</span>
                <span className="text-sm text-gray-400">{achievement.label}</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* History Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
            <div className="relative space-y-6">
              <div className="bg-gradient-to-br from-accent/10 to-transparent p-8 rounded-2xl border border-accent/10">
                <h3 className="text-2xl font-bold text-accent mb-6">تاريخنا وإنجازاتنا</h3>
                <div className="space-y-6">
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg leading-relaxed text-gray-300"
                  >
                    انطلق المكتب في عام 1430هـ (2009م) ساعيًا للتميز في تقديم الخدمات القانونية المتخصصة، لا سيما في المجال التجاري. وقد ضمّ نخبة من المحامين والمستشارين ذوي الخبرات الواسعة في مختلف القطاعات القضائية والقانونية.
                  </motion.p>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-lg leading-relaxed text-gray-300"
                  >
                    وعلى مدار سنوات من العمل الدؤوب، أسهم المكتب في تأسيس العديد من الشركات الرائدة في مجالات العقارات، والنفط والغاز، والمال، والأغذية، والفندقة، وغيرها، وذلك انسجامًا مع رؤية المملكة العربية السعودية 2030 وتوجهاتها التنموية.
                  </motion.p>
                </div>

                {/* Key Features */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="mt-8 grid grid-cols-1 gap-4"
                >
                  {[
                    "خبرة متخصصة في القانون التجاري",
                    "فريق من المحامين المؤهلين",
                    "حلول قانونية مبتكرة",
                    "التزام بأعلى معايير الجودة"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent/80" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Vision & Mission Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Vision Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
              <div className="relative bg-gradient-to-br from-accent/10 to-transparent p-8 rounded-2xl border border-accent/10 hover:border-accent/20 transition-colors duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-accent/10">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-2xl font-bold text-accent">رؤيتنا</h3>
                </div>
                <p className="text-lg leading-relaxed text-gray-300">
                  نسعى في مكتب الدكتور وليد المزيد للمحاماة إلى أن نكون في طليعة المكاتب القانونية، عبر تقديم استشارات متكاملة وحلول عملية للتحديات القانونية المتنوعة.
                </p>
              </div>
            </motion.div>
            
            {/* Mission Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/30 to-red-500/30 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
              <div className="relative bg-gradient-to-br from-accent/10 to-transparent p-8 rounded-2xl border border-accent/10 hover:border-accent/20 transition-colors duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-accent/10">
                    <span className="text-2xl">🌟</span>
                  </div>
                  <h3 className="text-2xl font-bold text-accent">رسالتنا</h3>
                </div>
                <p className="text-lg leading-relaxed text-gray-300">
                  نؤمن بالشفافية والنزاهة في جميع معاملاتنا، ملتزمين بأعلى المعايير الأخلاقية والمهنية، ونهدف دائمًا إلى مساعدة عملائنا على تحقيق أفضل النتائج والحفاظ على مصالحهم.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

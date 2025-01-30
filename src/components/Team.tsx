'use client'

import { motion } from 'framer-motion'
import { Award, GraduationCap, BookOpen } from 'lucide-react'

const teamMembers = [
  {
    name: "الدكتور المحامي/ وليد بن عبدالله المزيد",
    role: "مؤسس المكتب",
    qualifications: [
      "دكتوراه في الفقه والنظام من المعهد العالي للقضاء بجامعة الإمام محمد بن سعود الإسلامية (بحث: \"حماية حقوق دائني الشركات\")",
      "ماجستير في السياسة الشرعية شعبة الأنظمة من المعهد العالي للقضاء",
      "بكالوريوس في الشريعة من جامعة الإمام محمد بن سعود الإسلامية",
      "محكّم معتمد لدى وزارة العدل، متخصص في قضايا تأسيس الشركات والحوكمة والإفلاس"
    ],
    image: "/team/waleed.jpg"
  },
  {
    name: "البروفيسور والمستشار القانوني / تركي بن محمد اليحيى",
    role: "مستشار قانوني",
    qualifications: [
      "دكتوراه في تخصص الأنظمة من المعهد العالي للقضاء (بحث: \"أثر المخالفات الشرعية والنظامية في عقود الشركات\")",
      "أستاذ مشارك بقسم السياسة الشرعية في المعهد العالي للقضاء، وعضو في عدة لجان وأوقاف بارزة",
      "خبرات واسعة في التحكيم التجاري وعضوية اللجان القانونية"
    ],
    image: "/team/turki.jpg"
  },
  {
    name: "المحامي/ رامي بن عبدالله العجلان",
    role: "قاضي سابقاً",
    qualifications: [
      "ماجستير في الفقه المقارن من المعهد العالي للقضاء بجامعة الإمام محمد بن سعود الإسلامية",
      "خبرة قضائية في المحاكم العامة والجزائية، متخصص في القضايا التجارية والحقوقية"
    ],
    image: "/team/rami.jpg"
  },
  {
    name: "المحامي/ حسان بن أحمد المبعوث",
    role: "محامي",
    qualifications: [
      "ماجستير في قانون الشركات من جامعة شيفيلد في المملكة المتحدة",
      "متخصص في البحوث القانونية وصياغة العقود وتقديم الاستشارات وتمثيل العملاء قضائيًا"
    ],
    image: "/team/hassan.jpg"
  },
  {
    name: "المحامي/ صالح محمد العميريني",
    role: "محامي",
    qualifications: [
      "بكالوريوس حقوق من جامعة بريدة بتقدير عالٍ",
      "يتولى إدارة العديد من الشؤون القانونية في شركات تجارية، متخصص في المرافعات وكتابة العقود"
    ],
    image: "/team/saleh.jpg"
  },
  {
    name: "المحامي/ طارق محمد آل ناحي",
    role: "محامي",
    qualifications: [
      "باحث ماجستير قانون بجامعة الملك عبدالعزيز، بكالوريوس في الأنظمة مع مرتبة الشرف الأولى",
      "خبرة في المرافعة والمتابعة القانونية للقضايا التجارية والعمالية والحقوقية والإدارية"
    ],
    image: "/team/tariq.jpg"
  },
  {
    name: "المحامي/ محمد الصيخان",
    role: "محامي",
    qualifications: [
      "بكالوريوس حقوق من جامعة بريدة بتقدير عالٍ",
      "يتولى إدارة العديد من الشؤون القانونية في شركات تجارية، متخصص في المرافعات وكتابة العقود"
    ],
    image: "/team/mohammed.jpg"
  }
]

export default function Team() {
  return (
    <section className="section" id="team">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-heading">فريق العمل</h2>
          <p className="text-text-secondary text-lg max-w-4xl mx-auto mt-4 leading-relaxed">
            يضم المكتب نخبة من المتخصصين في المجالين الشرعي والقانوني، ممن يمتلكون رصيدًا أكاديميًا وعمليًا مميزًا في المحاماة والقضاء والاستشارات
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/10 group hover:border-brand-gold/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative w-28 h-28 md:w-32 md:h-32 mx-auto md:mx-0 shrink-0">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-gold via-brand-gold-light to-brand-gold-dark opacity-20 group-hover:opacity-30 transition-opacity" />
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-brand-gold/20 group-hover:border-brand-gold/40 transition-colors">
                    <div className="w-full h-full bg-brand-gold/10" />
                  </div>
                </div>

                <div className="flex-1 text-center md:text-right">
                  <h3 className="text-2xl font-semibold mb-2 text-text-primary group-hover:gradient-text transition-all">
                    {member.name}
                  </h3>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 mb-4">
                    <span className="text-brand-gold text-sm font-medium">
                      {member.role}
                    </span>
                  </div>
                  <div className="space-y-3 mt-4">
                    {member.qualifications.map((qualification, idx) => (
                      <div 
                        key={idx} 
                        className="text-text-secondary text-sm relative group/item transition-all duration-300 hover:text-text-primary"
                      >
                        <div className="flex items-start gap-3">
                          <div className="shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-br from-brand-gold to-brand-gold-light opacity-40 group-hover/item:opacity-100 transition-opacity" />
                          <p className="leading-relaxed">{qualification}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

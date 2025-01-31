'use client'

import { Scale, Building2, FileText, GraduationCap, Briefcase, Calculator, LayoutGrid, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const services = [
  {
    icon: Briefcase,
    title: "الاستشارات والدراسات",
    description: [
      "تقديم المشورة القانونية والشرعية للجهات الحكومية والخاصة والأفراد",
      "إعداد البحوث والدراسات القانونية في مختلف الأنظمة والإجراءات",
      "تحليل المخاطر القانونية واقتراح الحلول الوقائية الملائمة"
    ]
  },
  {
    icon: Building2,
    title: "قانون الشركات والاستثمار",
    description: [
      "تأسيس وتسجيل الشركات بمختلف أنواعها، وصياغة عقود التأسيس ولوائح الحوكمة",
      "إعادة الهيكلة أو الدمج والاستحواذ وزيادة رأس المال والتصفية والإفلاس",
      "استخراج التراخيص اللازمة للأنشطة التجارية والمالية والصناعية والخدمية",
      "تقديم الاستشارات للمستثمرين الأجانب حول الأنظمة والضرائب وحقوق المستثمرين",
      "صياغة اتفاقيات الشراكات والاستثمار الأجنبي والمشاريع المشتركة"
    ]
  },
  {
    icon: Scale,
    title: "التقاضي وتسوية المنازعات",
    description: [
      "تمثيل العملاء أمام المحاكم بجميع درجاتها واللجان القضائية وشبه القضائية",
      "معالجة القضايا التجارية والعمالية والمدنية والإدارية والجنائية والأحوال الشخصية والتنفيذ والزكاة والضريبة",
      "إعداد لوائح الادعاء والمذكرات الجوابية، وتقديم دراسة قانونية متكاملة حول موقف العميل",
      "متابعة تنفيذ الأحكام القضائية وأحكام التحكيم المحلية والدولية"
    ]
  },
  {
    icon: FileText,
    title: "العقود والاتفاقيات",
    description: [
      "إعداد وصياغة العقود والاتفاقيات ومذكرات التفاهم",
      "إجراء التسويات القانونية وتوثيق المخالصات"
    ]
  },
  {
    icon: GraduationCap,
    title: "التحكيم والصلح",
    description: [
      "تمثيل العملاء في المنازعات أمام هيئات التحكيم داخل المملكة وخارجها",
      "إعداد وصياغة اتفاقيات الصلح وفق الأنظمة واللوائح الشرعية والقانونية"
    ]
  },
  {
    icon: Calculator,
    title: "الزكاة والضريبة",
    description: [
      "تقديم مشورة قانونية متخصصة حول الزكاة، بما في ذلك كيفية احتسابها وتقديم التقارير اللازمة، لضمان الالتزام بالقوانين المحلية",
      "تقديم استشارات قانونية شاملة حول جميع جوانب الضرائب، بما في ذلك ضريبة الدخل، وضريبة القيمة المضافة، والامتثال الضريبي",
      "مساعدة العملاء في إعداد الوثائق المطلوبة للزكاة والضرائب، وضمان دقتها وامتثالها للوائح المعمول بها",
      "تقديم استراتيجيات تخطيط ضريبي فعالة تهدف إلى تقليل الأعباء الضريبية وتعزيز الكفاءة المالية",
      "تمثيل العملاء في جميع المعاملات مع هيئة الزكاة والضريبة والجمارك، بما في ذلك المنازعات والتظلمات"
    ]
  }
]

interface ServiceModalProps {
  service: typeof services[0] | null
  isOpen: boolean
  onClose: () => void
}

function ServiceModal({ service, isOpen, onClose }: ServiceModalProps) {
  if (!service) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0B0F17] rounded-lg shadow-xl p-8 border border-gray-800"
          >
            <button
              onClick={onClose}
              className="absolute top-4 left-4 p-2 rounded-full hover:bg-white/5 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-gray-400" />
            </button>
            
            <div className="flex flex-col items-center text-center mb-8">
              <div className="mb-4 p-4 rounded-full bg-brand-gold/10">
                <service.icon className="w-12 h-12 text-brand-gold" />
              </div>
              <h2 className="text-2xl font-semibold gradient-text">{service.title}</h2>
            </div>

            <ul className="space-y-4 text-right">
              {service.description.map((item, idx) => (
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={idx}
                  className="text-gray-300 relative pr-6 before:content-[''] before:absolute before:right-0 before:top-[0.6em] before:w-2 before:h-2 before:bg-brand-gold before:rounded-full"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null)

  return (
    <section className="section" id="services">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-heading">خدماتنا</h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto mt-4">
            نقدم خدمات قانونية شاملة ومتخصصة تلبي احتياجات عملائنا في مختلف المجالات
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedService(service)}
                className="card group cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-6 p-4 rounded-full bg-brand-gold/10 w-fit">
                  <Icon className="icon w-12 h-12 text-brand-gold group-hover:text-brand-gold-light transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-primary group-hover:gradient-text transition-all">
                  {service.title}
                </h3>
                <p className="text-text-secondary">اضغط للمزيد من التفاصيل</p>
              </motion.div>
            )
          })}
        </div>
      </div>
      
      <ServiceModal
        service={selectedService}
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
      />
    </section>
  )
}

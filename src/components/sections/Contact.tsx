'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PhoneIcon, MailIcon, MapPinIcon, BuildingIcon, ExternalLinkIcon, ClockIcon, SendIcon, InstagramIcon, TwitterIcon, LinkedinIcon } from 'lucide-react'

const branches = [
  {
    name: "فرع الرياض",
    location: "حي الربيع، شارع الثمامة، مجمع الموسى",
    phone: "0555555717",
    email: "dr.waleed@almazyadlaw.sa",
    mapUrl: "https://goo.gl/maps/44222efe0336fa96",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.160861454524!2d46.648033675368794!3d24.795181277971942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee3006465b80d%3A0x44222efe0336fa96!2z2YXZg9iq2Kgg2KfZhNmF2K3Yp9mF2Yog2KfZhNiv2YPYqtmI2LEg2YjZhNmK2K8g2KfZhNmF2LLZitiv!5e1!3m2!1sen!2ssa!4v1738193053680!5m2!1sen!2ssa",
    coordinates: { lat: 24.795181, lng: 46.648033 }
  },
  {
    name: "فرع مكة",
    location: "حي العوالي، شارع إبراهيم الجفالي، مجمع الثروات",
    phone: "0125283999",
    mobile: "0505131909",
    email: "dr.waleed@almazyadlaw.sa",
    mapUrl: "https://goo.gl/maps/be27013e7978d554",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3372.408045465744!2d39.89239757473693!3d21.352907076567416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c205fff36761ff%3A0xbe27013e7978d554!2z2YXZg9iq2Kgg2KfZhNmF2LLZitivINmE2YTZhdit2KfZhdin2Kk!5e1!3m2!1sen!2ssa!4v1738193155593!5m2!1sen!2ssa",
    coordinates: { lat: 21.352907, lng: 39.892397 }
  }
]

const socialLinks = [
  {
    name: 'Twitter',
    icon: TwitterIcon,
    url: 'https://twitter.com/almazyadlaw',
  },
  {
    name: 'LinkedIn',
    icon: LinkedinIcon,
    url: 'https://linkedin.com/company/almazyadlaw',
  },
  {
    name: 'Instagram',
    icon: InstagramIcon,
    url: 'https://instagram.com/almazyadlaw',
  },
]

const subjects = [
  'استفسار',
  'حجز موعد',
  'استشارة'
] as const

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: subjects[0],
    message: '',
  })
  const [activeOffice, setActiveOffice] = useState(0)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
  }

  return (
    <section id="contact" className="section pb-20">
      <div className="container-custom">
        <div className="section-header text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading"
          >
            تواصل معنا
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-text-secondary mt-4 max-w-2xl mx-auto"
          >
            نحن هنا لمساعدتك. يمكنك التواصل معنا عبر النموذج أدناه أو زيارة أحد فروعنا
          </motion.p>
        </div>

        {/* Office Locations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 mb-12 w-full overflow-hidden"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-8 px-4">
            {branches.map((branch, index) => (
              <button
                key={branch.name}
                onClick={() => setActiveOffice(index)}
                className={`px-4 sm:px-6 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeOffice === index
                    ? 'bg-brand-gold text-background'
                    : 'bg-white/5 hover:bg-white/10'
                }`}
              >
                {branch.name}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-5 gap-4 sm:gap-8 px-4 sm:px-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeOffice}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="lg:col-span-3 bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 w-full"
              >
                <iframe
                  src={branches[activeOffice].mapEmbedUrl}
                  width="100%"
                  height="400"
                  style={{ border: 0, filter: 'grayscale(1) invert(0.9)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                ></iframe>
              </motion.div>

              <motion.div
                key={`info-${activeOffice}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="lg:col-span-2 space-y-6"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold mb-6 gradient-text">{branches[activeOffice].name}</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPinIcon className="w-5 h-5 text-brand-gold mt-1" />
                      <div>
                        <p className="text-text-secondary">{branches[activeOffice].location}</p>
                        <a
                          href={branches[activeOffice].mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-brand-gold hover:text-brand-gold/80 mt-2 text-sm"
                        >
                          عرض على الخريطة
                          <ExternalLinkIcon className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <PhoneIcon className="w-5 h-5 text-brand-gold" />
                      <a
                        href={`tel:${branches[activeOffice].phone}`}
                        className="text-text-secondary hover:text-brand-gold transition-colors"
                      >
                        {branches[activeOffice].phone}
                      </a>
                    </div>
                    {branches[activeOffice].mobile && (
                      <div className="flex items-center gap-3">
                        <PhoneIcon className="w-5 h-5 text-brand-gold" />
                        <a
                          href={`tel:${branches[activeOffice].mobile}`}
                          className="text-text-secondary hover:text-brand-gold transition-colors"
                        >
                          {branches[activeOffice].mobile}
                        </a>
                      </div>
                    )}
                    <div className="flex items-center gap-3">
                      <MailIcon className="w-5 h-5 text-brand-gold" />
                      <a
                        href={`mailto:${branches[activeOffice].email}`}
                        className="text-text-secondary hover:text-brand-gold transition-colors"
                      >
                        {branches[activeOffice].email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Working Hours Card */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <ClockIcon className="w-6 h-6 text-brand-gold" />
                    <h3 className="text-lg font-semibold">ساعات العمل</h3>
                  </div>
                  <div className="space-y-3 text-text-secondary">
                    <div className="flex justify-between">
                      <span>الأحد - الخميس</span>
                      <span>9:00 ص - 5:00 م</span>
                    </div>
                    <div className="flex justify-between text-text-secondary/70">
                      <span>الجمعة - السبت</span>
                      <span>مغلق</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-4 sm:gap-8 px-4 sm:px-0">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10"
          >
            <h3 className="text-xl font-semibold mb-6 gradient-text">نموذج التواصل</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                    الاسم
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold/50"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text-secondary mb-2">
                    رقم الجوال
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold/50"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold/50"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-text-secondary mb-2">
                  موضوع الرسالة
                </label>
                <select
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold/50 appearance-none cursor-pointer"
                  required
                >
                  {subjects.map((subject) => (
                    <option key={subject} value={subject} className="bg-background text-text-primary">
                      {subject}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                  الرسالة
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold/50"
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 bg-brand-gold hover:bg-brand-gold/90 text-background font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <SendIcon className="w-5 h-5" />
                <span>إرسال الرسالة</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold mb-4">تابعنا على</h3>
              <div className="flex items-center gap-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white/5 hover:bg-white/10 rounded-lg text-brand-gold transition-colors"
                  >
                    <link.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

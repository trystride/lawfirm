'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Building, ExternalLink } from 'lucide-react'

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
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3372.408045465744!2d39.89239757473693!3d21.352907076567416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c205fff36761ff%3A0xbe27013e7978d554!2z2YXZg9iq2Kgg2KfZhNiv2YPYqtmI2LEg2YjZhNmK2K8g2KfZhNmF2LLZitivINmE2YTZhdit2KfZhdin2Kk!5e1!3m2!1sen!2ssa!4v1738193155593!5m2!1sen!2ssa",
    coordinates: { lat: 21.352907, lng: 39.892397 }
  }
]

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-custom">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading"
          >
            فروعنا ومعلومات التواصل
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          {branches.map((branch, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-white/10 group hover:border-brand-gold/30 transition-all duration-300"
            >
              {/* Branch Information */}
              <div className="p-8">
                <div className="flex items-start gap-6">
                  <div className="shrink-0">
                    <Building className="w-8 h-8 text-brand-gold" />
                  </div>
                  <div className="flex-1 space-y-6">
                    <div>
                      <h3 className="text-2xl font-semibold mb-4 gradient-text">
                        {branch.name}
                      </h3>
                      <div className="flex items-start gap-3 text-text-secondary">
                        <MapPin className="w-5 h-5 text-brand-gold mt-1" />
                        <p className="flex-1">{branch.location}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {/* Phone with CTA */}
                      <div className="flex items-center justify-between gap-3 text-text-secondary">
                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-brand-gold" />
                          <p dir="ltr">
                            {branch.phone}
                            {branch.mobile && (
                              <>
                                <br />
                                {branch.mobile}
                              </>
                            )}
                          </p>
                        </div>
                        <motion.a
                          href={`tel:${branch.phone}`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 bg-brand-gold/20 hover:bg-brand-gold/30 text-brand-gold rounded-lg text-sm font-medium transition-colors"
                        >
                          اتصل الآن
                        </motion.a>
                      </div>

                      {/* Email with CTA */}
                      <div className="flex items-center justify-between gap-3 text-text-secondary">
                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5 text-brand-gold" />
                          <p dir="ltr">{branch.email}</p>
                        </div>
                        <motion.a
                          href={`mailto:${branch.email}`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 bg-brand-gold/20 hover:bg-brand-gold/30 text-brand-gold rounded-lg text-sm font-medium transition-colors"
                        >
                          أرسل بريد
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Embedded Map */}
              <div className="relative h-[300px] mt-4">
                <iframe
                  src={branch.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-b-2xl"
                />
                <motion.a
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute bottom-4 left-4 px-4 py-2 bg-background/90 hover:bg-background text-text-primary rounded-lg text-sm font-medium transition-colors backdrop-blur-sm flex items-center gap-2"
                >
                  <span>فتح في خرائط قوقل</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center space-y-4"
        >
          <p className="text-text-secondary text-lg">
            نرحب بزيارتكم في أي من فروعنا خلال ساعات العمل
          </p>
          <p className="text-brand-gold font-semibold">
            من الأحد إلى الخميس: 9:00 صباحاً - 5:00 مساءً
          </p>
        </motion.div>
      </div>
    </section>
  )
}

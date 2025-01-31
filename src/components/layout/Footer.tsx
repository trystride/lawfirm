'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const currentYear = new Date().getFullYear()

const footerLinks = [
  {
    title: 'روابط سريعة',
    links: [
      { name: 'الرئيسية', href: '/' },
      { name: 'من نحن', href: '/#about' },
      { name: 'خدماتنا', href: '/#services' },
      { name: 'فريق العمل', href: '/#team' },
      { name: 'تواصل معنا', href: '/#contact' }
    ]
  }
]

const contactInfo = {
  riyadh: {
    phone: '0555555717',
    email: 'dr.waleed@almazyadlaw.sa',
    address: 'حي الربيع، شارع الثمامة، مجمع الموسى'
  }
}

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/10">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background to-background pointer-events-none" />

      <div className="relative">
        <div className="container-custom pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
            {/* Brand and Description */}
            <div className="md:col-span-5">
              <Link href="/" className="block mb-6">
                <div className="w-[220px] h-[80px] relative">
                  <Image
                    src="/images/logo.svg"
                    alt="مكتب المزيد للمحاماة"
                    fill
                    className="brightness-0 invert opacity-90 object-contain"
                    priority
                  />
                </div>
              </Link>
              <p className="text-text-secondary leading-relaxed mb-6">
                نقدم خدمات قانونية احترافية ومتكاملة، ونسعى لتحقيق أهداف عملائنا من خلال الخبرة والكفاءة العالية
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-text-secondary">
                  <Phone className="w-5 h-5 text-brand-gold" />
                  <span dir="ltr">{contactInfo.riyadh.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-text-secondary">
                  <Mail className="w-5 h-5 text-brand-gold" />
                  <span dir="ltr">{contactInfo.riyadh.email}</span>
                </div>
                <div className="flex items-start gap-3 text-text-secondary">
                  <MapPin className="w-5 h-5 text-brand-gold mt-1" />
                  <span>{contactInfo.riyadh.address}</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3 md:col-start-7">
              {footerLinks.map((group, idx) => (
                <div key={idx} className="mb-8">
                  <h4 className="text-lg font-semibold mb-4 text-text-primary">
                    {group.title}
                  </h4>
                  <ul className="space-y-3">
                    {group.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <Link
                          href={link.href}
                          className="text-text-secondary hover:text-brand-gold transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="md:col-span-3">
              <h4 className="text-lg font-semibold mb-4 text-text-primary">
                تابعنا على
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-secondary hover:text-brand-gold hover:bg-white/10 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-secondary hover:text-brand-gold hover:bg-white/10 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-center text-text-secondary text-sm">
              © {currentYear} مكتب المزيد للمحاماة. جميع الحقوق محفوظة
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

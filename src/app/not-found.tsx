'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-8"
        >
          {/* 404 Number */}
          <div className="text-9xl font-bold text-brand-gold/10">
            404
          </div>

          {/* Message */}
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold gradient-text">
              الصفحة غير موجودة
            </h1>
            <p className="text-text-secondary">
              عذراً، الصفحة التي تبحث عنها غير متوفرة
            </p>
          </div>

          {/* Return Home Button */}
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-gold/10 hover:bg-brand-gold/20 text-brand-gold rounded-lg transition-colors"
          >
            <Home className="w-5 h-5" />
            <span>العودة إلى الموقع الرئيسي</span>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

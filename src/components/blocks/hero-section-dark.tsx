'use client'

import * as React from "react"
import { cn } from "@/lib/utils"
import Image from 'next/image'
import { motion } from 'framer-motion'

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative h-screen w-screen flex items-center justify-center overflow-hidden px-4",
          className
        )}
        {...props}
      >
        {/* Background with website's color */}
        <div className="absolute inset-0 bg-[#0B1B35]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,165,114,0.07),transparent_70%)]" />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-[url('/patterns/noise.png')] mix-blend-overlay"
          />
        </div>

        {/* Centered Logo - Desktop */}
        <div className="container-custom relative hidden md:block">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[500px] lg:max-w-[600px] mx-auto"
          >
            <Image
              src="/logo.svg"
              alt="Almazyed Law Logo"
              width={600}
              height={400}
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </div>

        {/* Centered Logo - Mobile */}
        <div className="container-custom relative md:hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[300px] mx-auto"
          >
            <Image
              src="/mobile-logo.svg"
              alt="Almazyed Law Logo"
              width={300}
              height={200}
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </div>
      </section>
    )
  }
)

HeroSection.displayName = "HeroSection"

export default HeroSection

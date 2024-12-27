'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#F8F8F8] pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Image
              src="/site3-hero.jpg"
              alt="Profile"
              width={80}
              height={80}
              className="rounded-full mx-auto"
            />
            <div className="mt-2 text-sm text-gray-600">Professional Writing Services ✨</div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-normal text-gray-900 mb-6"
          >
            Elevating content through
            <br />
            <span className="font-medium">expert review</span> and
            <br />
            refined writing.
          </motion.h1>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full text-sm hover:bg-gray-800 transition-colors"
            >
              Start Project
              <svg 
                className="ml-2 w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-20 grid grid-cols-3 gap-8 items-center max-w-lg mx-auto"
          >
            <div className="text-center">
              <div className="font-medium text-2xl text-gray-900">15k+</div>
              <div className="text-sm text-gray-600">Documents Reviewed</div>
            </div>
            <div className="text-center">
              <div className="font-medium text-2xl text-gray-900">99%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="font-medium text-2xl text-gray-900">24h</div>
              <div className="text-sm text-gray-600">Average Turnaround</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
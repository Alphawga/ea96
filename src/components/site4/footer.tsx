'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center gap-8"
          >
            <div className="text-sm text-gray-600">
              © {currentYear} All rights reserved.
            </div>

            <div className="flex items-center gap-8">
              <Link 
                href="/privacy" 
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Privacy
              </Link>
              <Link 
                href="/terms" 
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Terms
              </Link>
              <Link 
                href="/sitemap" 
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
} 
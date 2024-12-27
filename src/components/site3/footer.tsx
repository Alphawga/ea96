'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'News', href: '#' },
      { name: 'Events', href: '#' },
    ],
    industries: [
      { name: 'Academic Writing', href: '#' },
      { name: 'Business Documents', href: '#' },
      { name: 'Technical Writing', href: '#' },
      { name: 'Content Marketing', href: '#' },
    ],
    products: [
      { name: 'Document Review', href: '#' },
      { name: 'Grammar Checker', href: '#' },
      { name: 'Style Guide', href: '#' },
      { name: 'API Integration', href: '#' },
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'Privacy Policy', href: '#' },
    ],
  }

  return (
    <footer className="bg-gray-950">
      {/* Call to Action Section */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="py-16 text-center"
        >
          <h2 className="text-3xl font-bold text-white">
            From Idea to Production in Days
          </h2>
          <p className="mt-4 text-gray-400">
            Experience the future of content review and optimization
          </p>
          <Button size="lg" className="mt-8 bg-emerald-600 hover:bg-emerald-700">
            Start Free Trial
          </Button>
        </motion.div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-semibold capitalize mb-4">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-emerald-500 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8">
                  <svg viewBox="0 0 24 24" className="w-full h-full text-emerald-500">
                    <path 
                      fill="currentColor" 
                      d="M21 7L9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7z"
                    />
                  </svg>
                </div>
                <span className="text-white font-bold text-xl">DocReview</span>
              </div>

              <div className="flex gap-4">
                <Link href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  <Instagram className="w-5 h-5" />
                </Link>
              </div>

              <div className="text-gray-400 text-sm">
                © 2024 DocReview. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 
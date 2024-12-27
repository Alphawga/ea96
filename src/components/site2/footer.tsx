'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-12"
        >
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Ready to perfect<br />
              your documents?
            </h2>
            <div className="flex gap-4 items-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span className="text-sm">Professional Review Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span className="text-sm">24-Hour Turnaround Available</span>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Start Your Review
            </Button>
          </div>
        </motion.div>

        <div className="border-t border-gray-800 pt-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8">
                  <svg viewBox="0 0 24 24" className="w-full h-full text-blue-500">
                    <path fill="currentColor" d="M21 7L9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7z"/>
                  </svg>
                </div>
                <span className="font-bold text-xl">ContentPro</span>
              </Link>
              <p className="mt-4 text-gray-400 text-sm">
                Professional document review and copywriting services to help you communicate with impact.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Academic Review</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Business Documents</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Content Writing</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Technical Writing</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white text-sm">About Us</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Careers</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Blog</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>© 2024 ContentPro. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}


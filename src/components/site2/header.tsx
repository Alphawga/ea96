'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8">
            <svg viewBox="0 0 24 24" className="w-full h-full text-blue-600">
              <path fill="currentColor" d="M21 7L9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7z"/>
            </svg>
          </div>
          <span className="font-bold text-xl">ContentPro</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#" className="text-gray-600 hover:text-gray-900">Services</Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">How It Works</Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">Pricing</Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">About Us</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="#" className="text-gray-600 hover:text-gray-900">Sign In</Link>
          <Button className="bg-blue-600 hover:bg-blue-700">Upload Document</Button>
        </div>
      </div>
    </motion.header>
  )
}


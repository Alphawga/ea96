'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md' : 'bg-[#F8F8F8]'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-8">
            <Link 
              href="/site4" 
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              WriteFlow
            </Link>
    
          </div>

          <nav className="flex items-center space-x-6">
            <Link 
              href="https://linkedin.com" 
              target="_blank"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              LinkedIn
            </Link>
            <Link 
              href="https://instagram.com" 
              target="_blank"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Instagram
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
} 
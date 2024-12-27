'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { useSite } from '@/lib/site-context'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const site = useSite()
  const { navigation } = site.config

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
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm' 
          : 'bg-emerald-600'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8">
              <svg viewBox="0 0 24 24" className={`w-full h-full ${
                isScrolled ? 'text-emerald-600' : 'text-white'
              }`}>
                <path 
                  fill="currentColor" 
                  d="M21 7L9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7z"
                />
              </svg>
            </div>
            <span className="font-bold text-xl text-white">
              DocReview
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.primary.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors ${
                  isScrolled 
                    ? 'text-gray-600 hover:text-gray-900' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="ghost" 
              className={isScrolled ? 'text-gray-600' : 'text-white hover:bg-emerald-500'}
            >
              Sign In
            </Button>
            <Button 
              className={isScrolled 
                ? 'bg-emerald-600 hover:bg-emerald-700' 
                : 'bg-white text-emerald-600 hover:bg-gray-100'
              }
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            title="Menu"
          >
            <Menu className="text-white" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-emerald-700"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col gap-4">
                {navigation.primary.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-white/90 hover:text-white"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-2 pt-4 border-t border-emerald-500">
                  <Button variant="ghost" className="text-white hover:bg-emerald-500">
                    Sign In
                  </Button>
                  <Button className="bg-white text-emerald-600 hover:bg-gray-100">
                    Get Started
                  </Button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
} 
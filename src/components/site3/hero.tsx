'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const stats = [
    { value: '100K+', label: 'Documents Reviewed' },
    { value: '1951+', label: 'Happy Clients' },
    { value: '6+', label: 'Years Experience' },
    { value: '24/7', label: 'Expert Support' },
  ]

  return (
    <section className="relative min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold leading-tight text-gray-900">
              The Future of Content<br />
              with Expert Review
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Professional document review and copywriting services to elevate your communication
            </p>
            <div className="mt-8 flex gap-4">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">Upload Document</Button>
              <Button variant="outline" size="lg">View Services</Button>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="bg-emerald-50/50 rounded-lg p-4 border border-emerald-100"
                >
                  <div className="text-2xl font-bold text-emerald-900">{stat.value}</div>
                  <p className="text-sm text-emerald-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Image
              src="/site3-hero.jpg" // Need: Professional document review/editing image
              alt="Professional Document Review"
              width={600}
              height={500}
              className="rounded-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i} className="text-yellow-400">{star}</span>
                  ))}
                </div>
                <span className="text-sm text-gray-600">5.0 (2.5k+ Reviews)</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

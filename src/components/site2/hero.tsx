'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20">
      <Image
        src="/site2-bg.jpg"
        alt="Professional document review"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative container mx-auto px-4 py-20">
        <motion.div 
          className="max-w-2xl text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-blue-400">#1 Professional Document Review Service</span>
          <h1 className="mt-4 text-6xl font-bold leading-tight">
            Perfect Words,<br />
            Perfect Impact
          </h1>
          <p className="mt-6 text-xl text-white/80">
            Expert copywriting and document review services to elevate your professional communication
          </p>
          <div className="mt-8 flex gap-4">
            <Button variant="default" size="lg">Start Your Review</Button>
            <Button variant="outline" size="lg">Our Services</Button>
          </div>
        </motion.div>

        <motion.div 
          className="absolute bottom-10 right-10 bg-white/10 backdrop-blur-md rounded-lg p-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src="/site2-hero.jpg"
            alt="Featured Review Project"
            width={200}
            height={200}
            className="rounded-lg"
          />
          <div className="mt-2 text-white">
            <p className="font-medium">Featured Work</p>
            <p className="text-sm opacity-80">Recent Success Story</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


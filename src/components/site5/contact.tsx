'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Contact() {
  return (
    <section className="py-32 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-medium">
              Ready to elevate your content?
            </h2>
            <p className="text-gray-400 text-lg">
              Join thousands of satisfied customers who trust us with their content needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                className="bg-white text-black hover:bg-gray-100 h-12 px-8 rounded-full"
                size="lg"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10 h-12 px-8 rounded-full"
                size="lg"
              >
                Contact Sales
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div>
              <div className="text-3xl font-medium">15k+</div>
              <div className="text-gray-400">Documents Reviewed</div>
            </div>
            <div>
              <div className="text-3xl font-medium">99%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-medium">24h</div>
              <div className="text-gray-400">Average Turnaround</div>
            </div>
            <div>
              <div className="text-3xl font-medium">50+</div>
              <div className="text-gray-400">Expert Editors</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
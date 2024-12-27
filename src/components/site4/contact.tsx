'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { HandshakeIcon } from 'lucide-react'

export default function Contact() {
  return (
    <section className="py-32 bg-[#F8F8F8]" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <HandshakeIcon className="w-12 h-12 mx-auto mb-6 text-gray-900" />
            <h2 className="text-3xl font-normal text-gray-900 mb-4">
              Tell me about your next
              <br />
              project
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              className="bg-black hover:bg-gray-800 text-white px-8 py-6 rounded-full"
              size="lg"
            >
              Email Me
            </Button>
            <Button
              variant="outline"
              className="border-gray-200 hover:bg-gray-50 px-8 py-6 rounded-full"
              size="lg"
            >
              WhatsApp
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
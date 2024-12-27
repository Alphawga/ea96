'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Testimonial() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold">
            Success Stories from<br />
            <span className="text-gray-500">Our Satisfied Clients</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-lg p-8"
          >
            <Image
              src="/testimonial-logo.jpg"
              alt="Stanford University"
              width={160}
              height={40}
              className="mb-6"
            />
            <p className="text-gray-600 mb-6">
              &quot;ContentPro&apos;s review service has been instrumental in helping our research papers meet the highest academic standards. Their attention to detail and expert feedback have significantly improved our publication success rate.&quot;
            </p>
            <div>
              <p className="font-semibold">Dr. Sarah Chen</p>
              <p className="text-sm text-gray-500">Research Director, Stanford University</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src="/review-process.jpg"
              alt="Document Review Process"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}


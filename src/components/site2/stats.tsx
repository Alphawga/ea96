'use client'

import { motion } from 'framer-motion'

export default function Stats() {
  const stats = [
    { value: '50K+', label: 'Documents Reviewed' },
    { value: '1,000+', label: 'Satisfied Clients Worldwide' },
    { value: '99.9%', label: 'Client Satisfaction Rate' },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-gray-900">{stat.value}</div>
              <p className="mt-2 text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


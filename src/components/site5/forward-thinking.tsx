'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function ForwardThinking() {
  const stats = [
    { value: '10+', label: 'Awards Gained' },
    { value: '20+', label: 'Years of Experience' },
    { value: '598', label: 'Customers worldwide' }
  ]

  return (
    <section className="py-20 bg-[#F8F8F8]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-medium mb-6">
                Forward-Thinking
                <br />
                <span className="text-gray-500">Writing Solutions</span>
              </h2>
              <p className="text-gray-600 mb-8">
                We&apos;ve built a dynamic platform focused on empowering aspiring writers to master the necessary skills for both launching and scaling their content creation journey.
              </p>
              <p className="text-gray-600 mb-8">
                Cognizant of the entire spectrum, we meticulously navigate through the phases, commencing from the germination of an idea, extending to the intricate stages of expansion, resiliently embracing setbacks.
              </p>
              <Button className="bg-black text-white hover:bg-gray-800">
                Get Started
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-12 grid grid-cols-3 gap-8"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-medium mb-2">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-white rounded-2xl shadow-lg overflow-hidden">
              <Image
                src="/images/writing-dashboard.jpg"
                alt="Writing Dashboard"
                width={600}
                height={600}
                className="object-cover"
              />
            </div>
            <div className="absolute -right-4 -bottom-4 bg-black text-white p-4 rounded-lg">
              <div className="text-sm font-medium">Writing Score</div>
              <div className="text-2xl font-bold">98/100</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
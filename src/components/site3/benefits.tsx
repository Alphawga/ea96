'use client'

import { motion } from 'framer-motion'
import { BarChart3 } from 'lucide-react'

export default function Benefits() {
  const benefits = [
    {
      title: 'Boosting Quality with Tech',
      description: 'Our AI-powered tools help identify and correct potential issues before they impact your content.'
    },
    {
      title: 'Optimized Review Process',
      description: 'Streamlined workflows ensure faster turnaround times without compromising quality.'
    },
    {
      title: 'AI-Driven Production',
      description: 'Advanced algorithms help maintain consistency across all your documents.'
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900">
                Key Benefits of Our System for<br />
                Your Business Efficiency
              </h2>
              <p className="mt-4 text-gray-600">
                Our advanced content optimization solutions deliver business growth.
              </p>
            </motion.div>

            <div className="mt-12 space-y-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                    <p className="mt-1 text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h4 className="font-semibold text-gray-900">Real Results</h4>
                  <p className="text-sm text-gray-600">Last 12 months</p>
                </div>
                <BarChart3 className="h-5 w-5 text-emerald-600" />
              </div>

              <div className="space-y-4">
                {[80, 95, 75, 90].map((value, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Project {index + 1}</span>
                      <span className="font-medium text-gray-900">{value}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${value}%` }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full bg-emerald-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Average Success Rate</span>
                  <span className="font-semibold text-emerald-600">1951+</span>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-50 rounded-full -z-10" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gray-50 rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
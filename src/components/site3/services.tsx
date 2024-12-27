'use client'

import { motion } from 'framer-motion'
import { FileText, Settings, Shield, BarChart, Package, Search } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: FileText,
      title: 'Production and Assembly',
      description: 'Professional document creation and formatting with attention to detail.',
    },
    {
      icon: Settings,
      title: 'Custom Manufacturing',
      description: 'Tailored content solutions designed for your specific needs and requirements.',
    },
    {
      icon: Shield,
      title: 'Quality Control',
      description: 'Rigorous quality checks to ensure error-free and polished content.',
    },
    {
      icon: BarChart,
      title: 'Technology and Innovation',
      description: 'Latest AI-powered tools for enhanced content analysis and improvement.',
    },
    {
      icon: Package,
      title: 'Packaging and Logistics',
      description: 'Streamlined delivery process for all your content needs.',
    },
    {
      icon: Search,
      title: 'Market Research',
      description: 'In-depth content analysis and competitive research services.',
    },
  ]

  return (
    <section className="py-24 bg-emerald-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white">
            Efficient and Integrated<br />
            Document Review Services
          </h2>
          <p className="mt-4 text-emerald-200">
            Expert operations with efficient, quality-focused services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-emerald-900/50 border border-emerald-800 rounded-lg p-6 hover:bg-emerald-900/70 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <service.icon className="h-8 w-8 text-emerald-400" />
                  <div className="h-8 w-8 rounded-full border border-emerald-700 flex items-center justify-center group-hover:border-emerald-500 transition-colors">
                    <span className="text-emerald-400">→</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-emerald-200">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 
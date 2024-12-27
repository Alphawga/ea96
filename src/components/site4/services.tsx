'use client'

import { motion } from 'framer-motion'
import { FileText, PenTool, Sparkles, MessageSquare } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: FileText,
      title: 'Document Review',
      description: 'Comprehensive review and refinement of documents with detailed feedback and suggestions.'
    },
    {
      icon: PenTool,
      title: 'Content Writing',
      description: 'Professional content creation tailored to your brand voice and target audience.'
    },
    {
      icon: Sparkles,
      title: 'Style Enhancement',
      description: 'Polishing your writing while maintaining your authentic voice and message.'
    },
    {
      icon: MessageSquare,
      title: 'Communication',
      description: 'Clear and effective business communication that drives results.'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm mb-6">
            Services
          </div>
          <h2 className="text-3xl font-normal text-gray-900">
            Expert writing services
            <br />
            tailored to your needs.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="flex flex-col items-start p-6 rounded-lg hover:bg-gray-50 transition-colors">
                <service.icon className="h-6 w-6 mb-4 text-gray-900" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg 
                    className="w-5 h-5 text-gray-900" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17 8l4 4m0 0l-4 4m4-4H3" 
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 
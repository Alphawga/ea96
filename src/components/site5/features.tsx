'use client'

import { motion } from 'framer-motion'
import { FileText, Brain, MessageSquare } from 'lucide-react'

export default function Features() {
  const features = [
    {
      title: 'Smart Review',
      description: 'AI-powered document analysis for grammar, style, and clarity improvements.',
      icon: Brain,
      color: 'bg-[#E3FFE6]',
      iconColor: 'text-emerald-600',
      href: '#'
    },
    {
      title: 'Content Creation',
      description: 'Professional copywriting services tailored to your brand voice and audience.',
      icon: FileText,
      color: 'bg-[#FFF4E5]',
      iconColor: 'text-orange-600',
      href: '#'
    },
    {
      title: 'Real-time Collaboration',
      description: 'Seamless team collaboration with instant feedback and version control.',
      icon: MessageSquare,
      color: 'bg-[#F4F4FF]',
      iconColor: 'text-indigo-600',
      href: '#'
    }
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm mb-6 text-black">
            Our Services
          </div>
          <h2 className="text-3xl font-medium mb-4">
            Explore Writing Solutions
            <br />
            and Services
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className={`${feature.color} rounded-2xl p-6 transition-transform group-hover:scale-105`}>
                <div className={`${feature.iconColor} mb-4`}>
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-medium mb-2 text-black">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="flex items-center text-sm font-medium">
                  Learn More
                  <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
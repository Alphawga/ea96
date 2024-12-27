'use client'

import { motion } from 'framer-motion'
import { Clock, Users, CheckCircle, MessageSquare, Lock, Zap } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Clock,
      title: '24-Hour Turnaround',
      description: 'Quick and efficient review process with guaranteed delivery times.',
    },
    {
      icon: Users,
      title: 'Expert Reviewers',
      description: 'Native English speakers with subject matter expertise.',
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Multi-stage review process for maximum accuracy.',
    },
    {
      icon: MessageSquare,
      title: 'Detailed Feedback',
      description: 'Comprehensive comments and improvement suggestions.',
    },
    {
      icon: Lock,
      title: 'Confidential',
      description: 'Secure handling of your documents with NDAs available.',
    },
    {
      icon: Zap,
      title: 'AI-Enhanced',
      description: 'Advanced AI tools supporting our human experts.',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-blue-600">
            We deliver excellence, <span className="text-gray-500">in every word we review</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <feature.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


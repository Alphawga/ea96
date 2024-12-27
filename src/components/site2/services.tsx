'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      title: 'Academic Review',
      image: '/academic-review.jpg',
      description: 'Expert review of dissertations, theses, and research papers'
    },
    {
      title: 'Business Documents',
      image: '/business-docs.jpg',
      description: 'Polish your business proposals, reports, and presentations'
    },
    {
      title: 'Content Writing',
      image: '/content-writing.jpg',
      description: 'SEO-optimized content for your digital presence'
    },
    {
      title: 'Technical Writing',
      image: '/technical-writing.jpg',
      description: 'Clear and precise technical documentation'
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <h2 className="text-3xl font-bold text-blue-600">
              Professional Services, <span className="text-gray-500">for every writing need</span>
            </h2>
            <p className="mt-4 text-gray-600">
              From academic papers to business documents, we ensure your writing makes the right impact.
            </p>
            <Button className="mt-6 bg-blue-600 hover:bg-blue-700">Get Started</Button>
          </motion.div>

          <div className="lg:w-2/3 grid grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-lg p-4 hover:shadow-lg transition-shadow">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={200}
                    height={200}
                    className="rounded-lg mb-4"
                  />
                  <h3 className="font-semibold mb-2 text-blue-600">{service.title}</h3>
                  <Link href="#" className="text-blue-500 hover:text-blue-600 text-sm">
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


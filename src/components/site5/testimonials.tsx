'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {
      content: "The attention to detail and quick turnaround time has significantly improved our content quality.",
      author: "Sarah Johnson",
      role: "Content Manager",
      company: "TechCorp",
      image: "/avatars/avatar-1.jpg"
    },
    {
      content: "Their AI-powered suggestions combined with human expertise deliver outstanding results every time.",
      author: "Michael Chen",
      role: "Marketing Director",
      company: "GrowthLabs",
      image: "/avatars/avatar-2.jpg"
    },
    {
      content: "A game-changer for our content strategy. The team's professionalism is unmatched.",
      author: "Emma Williams",
      role: "CEO",
      company: "CreativeFlow",
      image: "/avatars/avatar-3.jpg"
    }
  ]

  return (
    <section className="py-20 bg-[#F8F8F8]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-white rounded-full text-sm mb-6">
            Testimonials
          </div>
          <h2 className="text-3xl font-medium">
            Trusted by industry leaders
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-2xl">
                <p className="text-gray-600 mb-6">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 
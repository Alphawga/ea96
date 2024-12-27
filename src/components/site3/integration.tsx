'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Integration() {
  const apps = [
    { name: 'Google Docs', icon: '/icons/gdocs.svg' },
    { name: 'Microsoft Word', icon: '/icons/word.svg' },
    { name: 'Notion', icon: '/icons/notion.svg' },
    { name: 'Slack', icon: '/icons/slack.svg' },
    { name: 'Dropbox', icon: '/icons/dropbox.svg' },
    { name: 'GitHub', icon: '/icons/github.svg' },
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900">
              Empowering Top Companies<br />
              with Seamless Integrations
            </h2>
            <p className="mt-4 text-gray-600">
              Connect with your favorite tools and streamline your content review process
            </p>
            <Button size="lg" className="mt-8 bg-emerald-600 hover:bg-emerald-700">
              Start Free Trial
            </Button>
          </motion.div>

          <div className="relative h-[400px]">
            {/* Integration Icons Grid */}
            <div className="absolute inset-0">
              <div className="relative w-full h-full">
                {apps.map((app, index) => (
                  <motion.div
                    key={app.name}
                    className="absolute"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ 
                      opacity: 1, 
                      scale: 1,
                      x: `${Math.sin(index * (Math.PI / 3)) * 120}px`,
                      y: `${Math.cos(index * (Math.PI / 3)) * 120}px`,
                    }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <div className="bg-white rounded-xl shadow-lg p-4 hover:scale-110 transition-transform">
                      <Image
                        src={app.icon}
                        alt={app.name}
                        width={40}
                        height={40}
                        className="w-10 h-10"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Center Logo */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-emerald-50 rounded-full p-6">
                <div className="bg-emerald-600 rounded-full p-4">
                  <svg className="w-12 h-12 text-white" viewBox="0 0 24 24">
                    <path 
                      fill="currentColor" 
                      d="M21 7L9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7z"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-emerald-50 rounded-full -translate-y-1/2 translate-x-1/2 -z-10" />
      <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-gray-50 rounded-full translate-y-1/2 -z-10" />
    </section>
  )
} 
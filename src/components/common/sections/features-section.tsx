'use client'

import { useSite } from "@/lib/site-context"
import { Card, CardContent } from "@/components/ui/card"
import { ClipboardCheck, Clock, Search } from 'lucide-react'
import { motion } from "framer-motion"
import Image from "next/image"
import { ScrollAnimation } from "@/components/scroll-animation"

const icons = {
  ClipboardCheck,
  Clock,
  Search,
} as const

export function FeaturesSection() {
  const { config } = useSite()
  const features = config.sections.features

  return (
    <section id="features" className="py-24">
      <div className="container">
        <ScrollAnimation className="mx-auto max-w-3xl text-center">
          <h2 className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
            {features.title}
          </h2>
          <p className="text-muted-foreground">
            {features.description}
          </p>
        </ScrollAnimation>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.items.map((feature, index) => {
            const Icon = icons[feature.icon]
            return (
              <ScrollAnimation 
                key={feature.title} 
                delay={index * 0.2}
                direction={index % 2 === 0 ? 'left' : 'right'}
              >
                <Card className="relative overflow-hidden backdrop-blur-sm bg-white/10 border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="absolute right-4 top-4 text-4xl font-bold text-muted-foreground/20"
                    >
                      {feature.number}
                    </motion.div>
                    <div className="mb-4 relative h-60 w-full rounded-lg overflow-hidden">
                      {feature.image ? (
                        <Image
                          src={feature.image.src}
                          alt={feature.image.alt}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center bg-white/5 backdrop-blur-sm">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                      )}
                    </div>
                    <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            )
          })}
        </div>
      </div>
    </section>
  )
} 
'use client'

import { useSite } from "@/lib/site-context"
import { Card, CardContent } from "@/components/ui/card"
import { ClipboardCheck, Clock, Search } from 'lucide-react'

const icons = {
  ClipboardCheck,
  Clock,
  Search,
} as const

interface FeatureItem {
  title: string
  description: string
  icon: keyof typeof icons
  number: string
}

export function FeaturesSection() {
  const { config } = useSite()
  const features = config.sections.features.items as FeatureItem[]

  return (
    <section id="features" className="py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
            {config.sections.features.title}
          </h2>
          <p className="text-muted-foreground">
            {config.sections.features.description}
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = icons[feature.icon]
            return (
              <Card key={feature.title} className="relative overflow-hidden">
                <CardContent className="p-6">
                  <div className="absolute right-4 top-4 text-4xl font-bold text-muted-foreground/20">
                    {feature.number}
                  </div>
                  <Icon className="mb-4 h-8 w-8 text-primary" />
                  <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
} 
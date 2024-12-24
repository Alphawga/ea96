'use client'

import { useSite } from "@/lib/site-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Check } from 'lucide-react'

interface PricingPlan {
  name: string
  price: string
  description: string
  features: string[]
  popular?: boolean
}

export function PricingSection() {
  const { config } = useSite()
  const plans = config.sections.pricing.plans as PricingPlan[]

  return (
    <section id="pricing" className="py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {config.sections.pricing.title}
          </h2>
          <p className="text-muted-foreground">
            {config.sections.pricing.description}
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:max-w-4xl lg:mx-auto">
          {plans.map((plan) => (
            <Card key={plan.name} className="relative">
              {plan.popular && (
                <div className="absolute -top-3 right-6 rounded-full bg-primary px-3 py-1 text-sm text-white">
                  Most Popular
                </div>
              )}
              <CardHeader className="p-6">
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="ml-1 text-muted-foreground">/ document</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-6 w-full">{`Select ${plan.name} Plan`}</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 
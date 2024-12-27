'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import { useState } from 'react'
import { PaymentDialog } from './payment-dialog'

interface PricingPlan {
  name: string
  price: string
  description: string
  features: string[]
  popular?: boolean
}

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null)

  const plans: PricingPlan[] = [
    {
      name: "Basic",
      price: "$0.05",
      description: "Per word",
      features: [
        "48-hour delivery",
        "Grammar & spelling check",
        "Basic style suggestions",
        "One revision round"
      ]
    },
    {
      name: "Professional",
      price: "$0.08",
      description: "Per word",
      features: [
        "24-hour delivery",
        "Advanced style editing",
        "Content restructuring",
        "Two revision rounds",
        "Plagiarism check"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Contact us",
      features: [
        "Priority delivery",
        "Dedicated editor",
        "Unlimited revisions",
        "Style guide adherence",
        "API integration"
      ]
    }
  ]

  return (
    <section className="py-20 bg-white" id="pricing">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold text-blue-600">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-gray-600">
            Choose the plan that best fits your needs. No hidden fees.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className={`h-full rounded-2xl border p-8 ${plan.popular ? 'border-blue-500 shadow-lg' : 'border-gray-200'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 mx-auto w-fit">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="ml-2 text-gray-500">{plan.description}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-blue-500 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                  onClick={() => setSelectedPlan(plan)}
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <PaymentDialog 
        isOpen={!!selectedPlan} 
        onClose={() => setSelectedPlan(null)}
        plan={selectedPlan}
      />
    </section>
  )
} 
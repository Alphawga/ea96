'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { PaymentDialog } from './payment-dialog'

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<{
    name: string
    price: string
    interval: string
  } | null>(null)

  const plans = [
    {
      name: 'Basic',
      price: '$49',
      interval: '/document',
      features: [
        'Up to 2,000 words',
        'Basic grammar check',
        '48-hour delivery',
        'One revision round'
      ]
    },
    {
      name: 'Professional',
      price: '$99',
      interval: '/document',
      features: [
        'Up to 5,000 words',
        'Advanced style review',
        '24-hour delivery',
        'Two revision rounds',
        'Formatting included'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      interval: '/document',
      features: [
        'Unlimited words',
        'Full content optimization',
        'Priority delivery',
        'Unlimited revisions',
        'Dedicated editor'
      ]
    }
  ]

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm mb-6">
            Pricing
          </div>
          <h2 className="text-3xl font-normal text-gray-900">
            Simple, transparent pricing
            <br />
            for everyone.
          </h2>
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
              <div 
                className={`h-full p-8 rounded-2xl border ${
                  plan.popular 
                    ? 'border-black' 
                    : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-0 right-0 mx-auto w-fit">
                    <span className="bg-black text-white px-3 py-1 rounded-full text-xs">
                      Most Popular
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-medium text-gray-900">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                    <span className="ml-1 text-gray-500">{plan.interval}</span>
                  </div>
                </div>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600 text-sm">
                      <svg 
                        className="w-4 h-4 mr-3 text-gray-900" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M5 13l4 4L19 7" 
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full mt-8 rounded-full ${
                    plan.popular 
                      ? 'bg-black hover:bg-gray-800 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                  onClick={() => setSelectedPlan({
                    name: plan.name,
                    price: plan.price,
                    interval: plan.interval
                  })}
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <PaymentDialog 
          isOpen={!!selectedPlan}
          onClose={() => setSelectedPlan(null)}
          plan={selectedPlan}
        />
      </div>
    </section>
  )
} 
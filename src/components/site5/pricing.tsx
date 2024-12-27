'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import { useState } from 'react'
import { PaymentDialog } from './payment-dialog'

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<{
    name: string
    price: string
    description: string
  } | null>(null)

  const plans = [
    {
      name: 'Basic',
      price: '₦10,000',
      description: '500 Words',
      features: [
        '7 days turnaround',
        'Basic grammar check',
        'Style suggestions',
        'One revision round'
      ]
    },
    {
      name: 'Professional',
      price: '₦25,000',
      description: '2000 Words',
      features: [
        '48-hour turnaround',
        'Advanced grammar check',
        'Style & tone optimization',
        'Two revision rounds',
        'Plagiarism check'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '₦40,000',
      description: 'Custom Plan',
      features: [
        '24-hour turnaround',
        'Premium document review',
        'Unlimited revisions',
        'Dedicated editor',
        'Priority support'
      ]
    }
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm mb-6">
            Pricing
          </div>
          <h2 className="text-3xl font-medium mb-4">
            Simple, transparent pricing
          </h2>
        </div>

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
              <div className={`h-full p-8 rounded-2xl ${
                plan.popular 
                  ? 'bg-black text-white' 
                  : 'bg-gray-50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-0 right-0 mx-auto w-fit">
                    <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs">
                      Most Popular
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-medium">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className={`ml-2 ${plan.popular ? 'text-gray-300' : 'text-gray-500'}`}>
                      /{plan.description}
                    </span>
                  </div>
                </div>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className={`w-5 h-5 mr-3 ${
                        plan.popular ? 'text-emerald-500' : 'text-emerald-600'
                      }`} />
                      <span className={plan.popular ? 'text-gray-300' : 'text-gray-600'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full mt-8 rounded-full ${
                    plan.popular 
                      ? 'bg-white text-black hover:bg-gray-100' 
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                  onClick={() => setSelectedPlan({
                    name: plan.name,
                    price: plan.price,
                    description: plan.description
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
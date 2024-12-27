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
    interval: string
  } | null>(null)

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small teams and startups.',
      price: '$39',
      interval: '/month',
      features: [
        'Content up to 5,000 words per month',
        'Basic review system',
        'Email support',
        'Real-time guide'
      ]
    },
    {
      name: 'Professional',
      description: 'Designed for growing teams and medium needs.',
      price: '$79',
      interval: '/month',
      features: [
        'Content up to 15,000 words',
        'Advanced review features',
        'Priority support',
        'Custom style guide integration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'For large scale enterprises and organizations.',
      price: '$99',
      interval: '/month',
      features: [
        'Unlimited word count',
        'Dedicated project manager',
        '24/7 phone and email support',
        'Advanced production consultation'
      ]
    }
  ]

  return (
    <section className="py-24 bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white">
            Tailored Plans for Your<br />
            Content Review Scale
          </h2>
          <p className="mt-4 text-gray-400">
            Find the perfect plan for your business needs
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
              <div 
                className={`h-full rounded-2xl p-8 ${
                  plan.popular 
                    ? 'bg-emerald-900/20 border-2 border-emerald-500/20' 
                    : 'bg-gray-900 border border-gray-800'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 mx-auto w-fit">
                    <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm">
                      Most Popular
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <p className="mt-2 text-sm text-gray-400">{plan.description}</p>
                </div>

                <div className="mt-6 flex items-baseline">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="ml-2 text-gray-400">{plan.interval}</span>
                </div>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <Check className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full mt-8 ${
                    plan.popular 
                      ? 'bg-emerald-500 hover:bg-emerald-600' 
                      : 'bg-gray-800 hover:bg-gray-700'
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
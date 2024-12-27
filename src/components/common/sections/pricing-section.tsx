'use client'

import { useSite } from "@/lib/site-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Check, Crown } from 'lucide-react'
import { motion } from "framer-motion"
import { useState } from "react"
import { PaymentDialog } from "@/components/payment-dialog"
import { ScrollAnimation } from "@/components/scroll-animation"
import { cn } from "@/lib/utils"

type PricingVariant = 'default' | 'cartoon3d' | 'minimal' | 'gradient'

interface PricingSectionProps {
  variant?: PricingVariant
}

interface PricingPlan {
  name: string
  price: string
  description: string
  features: string[]
  popular?: boolean
}



export function PricingSection({ variant = 'default' }: PricingSectionProps) {
  const { config } = useSite()
  const pricing = config.sections.pricing
  const [selectedPlan, setSelectedPlan] = useState<{
    name: string;
    price: string;
  } | null>(null)

  const renderCartoon3DCard = (plan: PricingPlan, index: number) => {
    return (
      <ScrollAnimation 
        key={plan.name} 
        delay={index * 0.2}
        direction={index === 0 ? 'left' : 'right'}
      >
        <div className={cn(
          "relative group rounded-2xl p-1",
          "before:absolute before:inset-0 before:rounded-2xl before:p-1",
          "transform-gpu transition-all duration-300",
          "hover:scale-105 hover:rotate-1"
        )}>
          <div className="relative rounded-xl overflow-hidden backdrop-blur-2xl bg-black/10 p-6">
            {plan.popular && (
              <div className="absolute -top-3 -right-3 p-3">
                <div className="relative">
                  <div className="absolute inset-0 animate-spin-slow">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-b from-purple-600 to-pink-600 blur-md" />
                  </div>
                  <div className="relative h-12 w-12 rounded-full bg-black/80 flex items-center justify-center">
                    <Crown className="h-6 w-6 text-yellow-500" />
                  </div>
                </div>
              </div>
            )}
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent">
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold bg-gradient-to-br from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {plan.price}
                </span>
                <span className="text-sm text-white/60">/ document</span>
              </div>
              <p className="text-sm text-white/80">{plan.description}</p>
              
              <ul className="space-y-3 py-4">
                {plan.features.map((feature: string, i: number) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-center gap-2 text-sm text-white/70"
                  >
                    <div className="h-5 w-5 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    {feature}
                  </motion.li>
                ))}
              </ul>
              
              <Button 
                onClick={() => setSelectedPlan({
                  name: plan.name,
                  price: plan.price
                })}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
              >
                Choose {plan.name}
              </Button>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    )
  }

  const renderCard = (plan: PricingPlan, index: number) => {
    switch (variant) {
      case 'cartoon3d':
        return renderCartoon3DCard(plan, index)
      default:
        return (
          <ScrollAnimation 
            key={plan.name} 
            delay={index * 0.2}
            direction={index === 0 ? 'left' : 'right'}
          >
            <Card className="relative">
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-3 right-6 rounded-full bg-primary px-3 py-1 text-sm text-white"
                >
                  Most Popular
                </motion.div>
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
                <motion.ul 
                  className="space-y-3"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}
                >
                  {plan.features.map((feature: string) => (
                    <motion.li
                      key={feature}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 }
                      }}
                      className="flex items-center"
                    >
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>
                <Button 
                  className="mt-6 w-full"
                  onClick={() => setSelectedPlan({
                    name: plan.name,
                    price: plan.price
                  })}
                >
                  {`Select ${plan.name} Plan`}
                </Button>
              </CardContent>
            </Card>
          </ScrollAnimation>
        )
    }
  }



  return (
    <section id="pricing" className={cn(
      "py-24 relative",
     
      "dark:before:absolute dark:before:inset-0 dark:before:bg-[url('/grid.svg')] dark:before:opacity-5",
      "after:absolute after:inset-0 after:bg-gradient-to-t after:from-white/20 after:via-blue-500/5 after:to-transparent dark:after:from-blue-500/10",
      "overflow-hidden"
    )}>
      <div className="absolute -top-24 -left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob dark:bg-blue-900/30"></div>
      <div className="absolute -bottom-32 -right-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 dark:bg-blue-800/30"></div>
      
      <div className="container relative z-10">
        <ScrollAnimation className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {pricing.title}
          </h2>
          <p className="text-muted-foreground">
            {pricing.description}
          </p>
        </ScrollAnimation>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:max-w-4xl lg:mx-auto">
          {pricing.plans.map((plan, index) => renderCard(plan, index))}
        </div>
      </div>
      <PaymentDialog
        open={!!selectedPlan}
        onOpenChange={(open) => !open && setSelectedPlan(null)}
        planName={selectedPlan?.name ?? ''}
        planPrice={selectedPlan?.price ?? ''}
      />
    </section>
  )
} 
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Check } from 'lucide-react'

const plans = [
  {
    name: "Silver",
    price: "₦10,000",
    description: "500 Words",
    features: [
      "7 days turnaround",
      "Expert review and feedback",
      "No plagiarism checker",
    ],
    popular: true,
  },
  {
    name: "Diamond",
    price: "₦40,000",
    description: "Customized Plan",
    features: [
      "4 days turnaround",
      "Expert review and feedback",
      "Free plagiarism checker",
    ],
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Document Review Plans Tailored to Your Needs
          </h2>
          <p className="text-muted-foreground">
            Choose the plan that best fits your document review requirements and volume.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:max-w-4xl lg:mx-auto">
          {plans.map((plan) => (
            <Card key={plan.name} className="relative">
              {plan.popular && (
                <div className="absolute -top-3 right-6 rounded-full bg-indigo-600 px-3 py-1 text-sm text-white">
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
                      <Check className="mr-2 h-4 w-4 text-indigo-600" />
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


import { Card, CardContent } from "@/components/ui/card"
import { ClipboardCheck, Clock, Search } from 'lucide-react'

const features = [
  {
    title: "Reliable Expertise",
    description: "Simply choose the document type you need reviewed, and our expert team will ensure it meets the highest standards for content, format, and compliance.",
    icon: ClipboardCheck,
    number: "1",
  },
  {
    title: "Time Efficiency",
    description: "Submit your documents with a few notes on what you need, and our professional reviewers will quickly get to work, providing thorough feedback in no time.",
    icon: Clock,
    number: "2",
  },
  {
    title: "SEO Efficiency",
    description: "Our skilled reviewers ensure your documents are optimized for accuracy and consistency, offering revisions and corrections as needed to meet your requirements.",
    icon: Search,
    number: "3",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">Document Review Made Easy</h2>
          <p className="text-muted-foreground">
            Provide us with your documents, and we&apos;ll efficiently review them for clarity, accuracy, and compliance, delivering results within a short time.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="absolute right-4 top-4 text-4xl font-bold text-muted-foreground/20">
                  {feature.number}
                </div>
                <feature.icon className="mb-4 h-8 w-8 text-indigo-600" />
                <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


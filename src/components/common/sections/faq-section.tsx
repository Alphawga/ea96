'use client'

import { useSite } from "@/lib/site-context"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface FaqItem {
  question: string
  answer: string
}

export function FaqSection() {
  const { config } = useSite()
  const faqs = config.sections.faq as FaqItem[]

  return (
    <section className="py-24">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold">FAQ</h2>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
} 
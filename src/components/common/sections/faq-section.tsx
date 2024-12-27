'use client'

import { useSite } from "@/lib/site-context"
import { AnimationWrapper } from "@/components/animation-wrapper"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ScrollAnimation } from "@/components/scroll-animation"

export function FaqSection() {
  const { config } = useSite()
  const faqs = config.sections.faq

  return (
    <section className="py-24">
      <div className="container">
        <ScrollAnimation className="mb-12 text-center">
          <h2 className="text-3xl font-bold">FAQ</h2>
        </ScrollAnimation>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <ScrollAnimation 
                key={index} 
                delay={index * 0.1}
                direction="up"
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              </ScrollAnimation>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
} 
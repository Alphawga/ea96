import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const faqs = [
    {
      question: "What types of documents do you review?",
      answer: "We review a wide range of documents including legal contracts, financial reports, medical records, technical documentation, and academic papers. Our expert reviewers are equipped to handle various document types across multiple industries.",
    },
    {
      question: "How long does the document review process take?",
      answer: "Our standard review process takes 7 days for the Silver plan and 4 days for the Diamond plan. However, turnaround times may vary based on document complexity and length.",
    },
    {
      question: "Is the reviewed content confidential and secure?",
      answer: "Yes, we take confidentiality very seriously. All documents are handled with strict security measures, and our reviewers sign NDAs. We use encrypted systems to protect your sensitive information.",
    },
  ]
  
  export function FaqSection() {
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
  
  
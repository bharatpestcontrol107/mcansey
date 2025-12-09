'use client'

import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "Do you offer a free trial?",
    answer: "We don't offer a free trial, but we do offer a free consultation to discuss your project and how we can help you achieve your goals. Get in touch with us to schedule a call with our team."
  },
  {
    question: "What can i expect during the initial call?",
    answer: "During the initial call, our expert team will discuss your business goals, current challenges, and desired outcomes. We'll provide a high-level overview of our approach and how we can help you achieve your objectives."
  },
  {
    question: "Do you offer a guarantee?",
    answer: "Yes, we offer a satisfaction guarantee on all our services. If you're not completely satisfied with our work, we'll work with you to make it right or provide a refund according to our terms of service."
  },
  {
    question: "Am i eligible for your services?",
    answer: "We work with businesses of all sizes, from startups to enterprise-level companies. If you're looking to grow your online presence through Shopify, you're likely eligible for our services."
  },
  {
    question: "How long are your contracts?",
    answer: "Our contract lengths are flexible and tailored to your needs. We offer month-to-month services as well as longer-term engagements, depending on your project requirements and goals."
  },
  {
    question: "How are we different from other marketing agencies?",
    answer: "We specialize exclusively in Shopify development and optimization, providing focused expertise rather than general marketing services. Our team has extensive experience specifically in e-commerce and Shopify platforms."
  }
]

export default function FAQSection() {
  return (
    <section className=" py-12 lg:py-12" id="faqshopify">
      <div className="mx-auto w-full px-4 lg:w-[90%] xl:w-[80%]">
        <div className="flex flex-col items-center space-y-6 lg:space-y-12">
          <Button 
            variant="outline" 
            className="rounded-full"
          >
            FAQ's
          </Button>

          <h2 className="text-center text-2xl font-bold md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="w-full px-3 lg:px-0">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="mb-4 overflow-hidden rounded-lg border bg-[#F1F5FF] transition-all hover:bg-[#F1F5FF] [&[data-state=open]]:bg-white"
              >
                <AccordionTrigger className="px-6 text-left text-[15px] md:text-lg font-semibold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="bg-white px-6 text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}


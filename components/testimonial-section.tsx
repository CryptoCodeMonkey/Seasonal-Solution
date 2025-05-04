"use client"

import TestimonialCarousel from "@/components/testimonial-carousel"

export default function TestimonialSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">What Our Clients Say</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Don't just take our word for it. Here's what our satisfied customers in Winnipeg have to say.
          </p>
        </div>

        <TestimonialCarousel />
      </div>
    </section>
  )
}

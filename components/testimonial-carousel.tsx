"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "River Heights, Winnipeg",
    text: "Seasonal Solutions transformed our backyard into a beautiful outdoor living space. Their attention to detail and professionalism exceeded our expectations. Highly recommended for any landscaping project!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Thompson",
    location: "St. Vital, Winnipeg",
    text: "I've used their handyman services for various projects around my home, from fixing a leaky faucet to installing new light fixtures. Always reliable, on time, and fairly priced.",
    rating: 5,
  },
  {
    id: 3,
    name: "Jennifer Williams",
    location: "Transcona, Winnipeg",
    text: "The team at Seasonal Solutions did an amazing job with our kitchen renovation. They were professional, kept the work area clean, and completed the project on schedule. We couldn't be happier with the results!",
    rating: 5,
  },
  {
    id: 4,
    name: "David Miller",
    location: "St. James, Winnipeg",
    text: "I've been using their seasonal lawn care services for two years now, and my yard has never looked better. Their team is knowledgeable, friendly, and always goes the extra mile.",
    rating: 4,
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleTestimonials, setVisibleTestimonials] = useState<typeof testimonials>([])

  useEffect(() => {
    // Determine how many testimonials to show based on screen size
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 768) {
        setVisibleTestimonials([testimonials[currentIndex]])
      } else if (width < 1024) {
        setVisibleTestimonials(testimonials.slice(currentIndex, currentIndex + 2))
      } else {
        setVisibleTestimonials(testimonials.slice(currentIndex, currentIndex + 3))
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [currentIndex])

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1 >= testimonials.length ? 0 : prevIndex + 1))
  }

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        <div className="flex w-full gap-6 transition-transform duration-300">
          {visibleTestimonials.map((testimonial) => (
            <Card key={testimonial.id} className="w-full flex-shrink-0 md:w-1/2 lg:w-1/3">
              <CardContent className="p-6">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? "fill-primary text-primary" : "text-muted"}`}
                    />
                  ))}
                </div>
                <p className="mb-4 italic text-muted-foreground">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        <Button variant="outline" size="icon" onClick={prev} aria-label="Previous testimonial">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={next} aria-label="Next testimonial">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}


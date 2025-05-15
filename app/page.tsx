import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"
import { getUnsplashImage, imageCategories } from "@/lib/unsplash"

// Dynamically import components
const ServiceSection = dynamic(() => import("@/components/service-section"))
const TestimonialSection = dynamic(() => import("@/components/testimonial-section"))
const CtaSection = dynamic(() => import("@/components/cta-section"))
const ServiceAreas = dynamic(() => import("@/components/service-areas"))

// Fix: Change from string to boolean
export const dynamicParams = true

export default function Home() {
  // Get a hero image
  const heroImageUrl = getUnsplashImage(imageCategories.hero)

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImageUrl || "/placeholder.svg"}
            alt="Seasonal Solutions - Professional Handyman and Landscaping Services in Winnipeg"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Your Trusted Handyman & Landscaping Experts in Winnipeg
            </h1>
            <p className="mb-8 text-xl text-white/90">
              Professional, reliable, and affordable services for all seasons. From home repairs to complete landscape
              transformations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20" asChild>
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="bg-primary py-4 text-primary-foreground">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            <span>Serving all of Winnipeg and surrounding areas</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="tel:+12049903247" className="flex items-center gap-2 hover:underline">
              <Phone className="h-5 w-5" />
              <span>(204) 990-3247</span>
            </Link>
            <Link href="mailto:coled204@hotmail.com" className="flex items-center gap-2 hover:underline">
              <Mail className="h-5 w-5" />
              <span>coled204@hotmail.com</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Dynamically loaded sections */}
      <ServiceSection />
      <TestimonialSection />
      <CtaSection />
      <ServiceAreas />
    </div>
  )
}

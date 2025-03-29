import Link from "next/link"
import Image from "next/image"
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Star,
  Clock,
  Calendar,
  PenToolIcon as Tool,
  Leaf,
  Paintbrush,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import TestimonialCarousel from "@/components/testimonial-carousel"
import { ServiceCard } from "@/components/service-card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
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
            <Link href="tel:+12045551234" className="flex items-center gap-2 hover:underline">
              <Phone className="h-5 w-5" />
              <span>(204) 555-1234</span>
            </Link>
            <Link href="mailto:info@seasonalsolutions.ca" className="flex items-center gap-2 hover:underline">
              <Mail className="h-5 w-5" />
              <span>info@seasonalsolutions.ca</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              From seasonal landscaping to home repairs and renovations, we provide comprehensive solutions for all your
              property needs.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <ServiceCard
              icon={<Leaf className="h-10 w-10 text-primary" />}
              title="Landscaping"
              description="Professional landscape design, installation, and maintenance services."
              link="/services/landscaping"
            />
            <ServiceCard
              icon={<Tool className="h-10 w-10 text-primary" />}
              title="Handyman Services"
              description="General repairs, installations, and maintenance for your home."
              link="/services/handyman"
            />
            <ServiceCard
              icon={<Paintbrush className="h-10 w-10 text-primary" />}
              title="Painting"
              description="Interior and exterior painting services with quality materials."
              link="/services/painting"
            />
            <ServiceCard
              icon={<Home className="h-10 w-10 text-primary" />}
              title="Home Renovation"
              description="Kitchen, bathroom, and basement renovations to transform your space."
              link="/services/renovation"
            />
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="/services" className="group">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Seasonal Solutions</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We take pride in delivering exceptional service and quality workmanship on every project.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Reliable & Punctual</h3>
                <p className="text-muted-foreground">
                  We respect your time and always arrive as scheduled, completing projects on time and within budget.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Quality Workmanship</h3>
                <p className="text-muted-foreground">
                  Our experienced professionals deliver exceptional results with attention to detail on every project.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Year-Round Service</h3>
                <p className="text-muted-foreground">
                  From summer landscaping to winter maintenance, we provide solutions for every season.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">Ready to Transform Your Space?</h2>
            <p className="mb-8 text-xl text-primary-foreground/90">
              Whether you need landscaping, home repairs, or renovations, we're here to help. Contact us today for a
              free consultation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/gallery">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Service Areas</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We proudly serve Winnipeg and the surrounding communities with our handyman and landscaping services.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-bold">Winnipeg Neighborhoods We Serve</h3>
              <ul className="grid grid-cols-2 gap-2">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>River Heights</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>St. Vital</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Transcona</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>St. Boniface</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Fort Garry</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>St. James</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Charleswood</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Downtown</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold">Surrounding Areas</h3>
              <ul className="grid grid-cols-2 gap-2">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Headingley</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>East St. Paul</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>West St. Paul</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Oak Bluff</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Stonewall</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Selkirk</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Oakbank</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Lorette</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


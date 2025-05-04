"use client"

import Link from "next/link"
import { Leaf, PenToolIcon as Tool, Paintbrush, Home, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ServiceCard from "@/components/service-card"
import { getUnsplashImage, imageCategories } from "@/lib/unsplash"

export default function ServiceSection() {
  return (
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
            link="/services#landscaping"
            imageSrc={getUnsplashImage(imageCategories.landscaping)}
          />
          <ServiceCard
            icon={<Tool className="h-10 w-10 text-primary" />}
            title="Handyman Services"
            description="General repairs, installations, and maintenance for your home."
            link="/services#handyman"
            imageSrc={getUnsplashImage(imageCategories.handyman)}
          />
          <ServiceCard
            icon={<Paintbrush className="h-10 w-10 text-primary" />}
            title="Painting"
            description="Interior and exterior painting services with quality materials."
            link="/services#painting"
            imageSrc={getUnsplashImage(imageCategories.painting)}
          />
          <ServiceCard
            icon={<Home className="h-10 w-10 text-primary" />}
            title="Home Renovation"
            description="Kitchen, bathroom, and basement renovations to transform your space."
            link="/services#renovation"
            imageSrc={getUnsplashImage(imageCategories.renovation)}
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
  )
}

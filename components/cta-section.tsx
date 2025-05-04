"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { getUnsplashImage, imageCategories } from "@/lib/unsplash"

export default function CtaSection() {
  const ctaImageUrl = getUnsplashImage(imageCategories.cta)

  return (
    <section className="relative py-16 lg:py-24">
      <div className="absolute inset-0 z-0">
        <Image
          src={ctaImageUrl || "/placeholder.svg"}
          alt="Transform your space with Seasonal Solutions"
          fill
          className="object-cover brightness-[0.4]"
        />
      </div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Transform Your Space?
          </h2>
          <p className="mb-8 text-xl text-white/90">
            Whether you need landscaping, home repairs, or renovations, we're here to help. Contact us today for a free
            consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="default" asChild>
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="/gallery">View Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

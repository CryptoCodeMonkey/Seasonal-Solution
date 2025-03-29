
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { 
  Leaf,
  PenToolIcon as Tool,
  Paintbrush,
  Home,
  Snowflake,
  Sprout,
  Hammer,
  Lightbulb,
  ArrowRight
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/service-card"

export const metadata: Metadata = {
  title: "Services - Seasonal Solutions",
  description: "Professional handyman and landscaping services in Winnipeg. From home repairs to landscape design, we do it all.",
}

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Our Services</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Comprehensive handyman and landscaping solutions for all your property needs
        </p>
      </div>

      {/* Landscaping Services */}
      <section className="mb-20">
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Landscaping Services</h2>
            <p className="mb-6 text-muted-foreground">
              Transform your outdoor space with our professional landscaping services. From design to maintenance, we create beautiful and functional landscapes that enhance your property value.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <Leaf className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Professional landscape design and planning</span>
              </li>
              <li className="flex items-start gap-2">
                <Leaf className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Lawn care and maintenance programs</span>
              </li>
              <li className="flex items-start gap-2">
                <Leaf className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Garden bed installation and maintenance</span>
              </li>
              <li className="flex items-start gap-2">
                <Leaf className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Tree and shrub planting and care</span>
              </li>
            </ul>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact" className="group">
                Request a Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          <div className="lg:w-1/2 relative h-[400px] w-full rounded-xl overflow-hidden">
            <Image 
              src="/images/hero-landscaping.jpg" 
              alt="Professional landscaping services" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          <ServiceCard
            title="Lawn Maintenance"
            description="Regular mowing, edging, aeration, dethatching, and fertilization to keep your lawn healthy and beautiful."
            imageUrl="/images/lawn-mowing.jpg"
            linkUrl="/contact"
          />
          <ServiceCard
            title="Garden Services"
            description="Garden design, planting, mulching, weeding, and ongoing maintenance for vibrant garden beds."
            imageUrl="/images/hero-landscaping.jpg"
            linkUrl="/contact"
          />
          <ServiceCard
            title="Seasonal Cleanup"
            description="Spring and fall cleanup services to prepare your landscape for the changing seasons."
            imageUrl="/images/hero-landscaping.jpg"
            linkUrl="/contact"
          />
        </div>
      </section>

      {/* Handyman Services */}
      <section className="mb-20">
        <div className="flex flex-col lg:flex-row-reverse gap-12 items-center mb-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Handyman Services</h2>
            <p className="mb-6 text-muted-foreground">
              Our skilled handymen can tackle a wide range of home repair and maintenance tasks, from small fixes to larger projects.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <Tool className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>General home repairs and maintenance</span>
              </li>
              <li className="flex items-start gap-2">
                <Tool className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Furniture assembly and installation</span>
              </li>
              <li className="flex items-start gap-2">
                <Tool className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Drywall repair and painting</span>
              </li>
              <li className="flex items-start gap-2">
                <Tool className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Basic plumbing and electrical repairs</span>
              </li>
            </ul>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact" className="group">
                Get a Free Quote
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          <div className="lg:w-1/2 relative h-[400px] w-full rounded-xl overflow-hidden">
            <Image 
              src="/images/handyman-service.jpg" 
              alt="Professional handyman services" 
              fill 
              className="object-cover" 
            />
          </div>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          <ServiceCard
            title="Home Repairs"
            description="General repairs including drywall, trim, shelving installation, door repairs, and more."
            imageUrl="/images/home-repair.jpg"
            linkUrl="/contact"
          />
          <ServiceCard
            title="Mounting & Installation"
            description="TV mounting, shelf installation, curtain rods, pictures, and other fixtures securely installed."
            imageUrl="/images/handyman-service.jpg"
            linkUrl="/contact"
          />
          <ServiceCard
            title="Deck & Fence Repair"
            description="Repair and maintenance of wooden decks, fences, and outdoor structures."
            imageUrl="/images/handyman-service.jpg"
            linkUrl="/contact"
          />
        </div>
      </section>

      {/* Seasonal Services */}
      <section>
        <h2 className="text-3xl font-bold mb-10 text-center">Seasonal Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <ServiceCard
            title="Spring Services"
            description="Spring cleanup, garden bed preparation, mulching, planting, and lawn treatments."
            imageUrl="/images/lawn-mowing.jpg"
            linkUrl="/contact"
          />
          <ServiceCard
            title="Summer Services"
            description="Lawn maintenance, garden care, irrigation management, and outdoor living space enhancement."
            imageUrl="/images/hero-landscaping.jpg"
            linkUrl="/contact"
          />
          <ServiceCard
            title="Fall Services"
            description="Leaf removal, garden winterization, gutter cleaning, and fall lawn care."
            imageUrl="/images/lawn-mowing.jpg"
            linkUrl="/contact"
          />
          <ServiceCard
            title="Winter Services"
            description="Snow removal, sidewalk clearing, ice management, and winter home maintenance."
            imageUrl="/images/home-repair.jpg"
            linkUrl="/contact"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Contact us today for a free consultation and quote on any of our services.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/contact">Request a Quote</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/gallery">View Our Work</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import dynamic from "next/dynamic";

const Button = dynamic(
  () => import("@/components/ui/button").then((mod) => ({ default: mod.Button })),
  {
    loading: () => <div className="h-6 w-full animate-pulse rounded-lg bg-muted"></div>,
    ssr: true,
  }
);


export const metadata: Metadata = {
  title: "Project Gallery - Seasonal Solutions",
  description: "View our completed handyman and landscaping projects in Winnipeg and surrounding areas.",
}

export default function GalleryPage() {
  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Our Project Gallery</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Browse through some of our recent handyman and landscaping projects in Winnipeg
        </p>
      </div>

      {/* Gallery Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <Button variant="outline" className="rounded-full">All Projects</Button>
        <Button variant="ghost" className="rounded-full">Landscaping</Button>
        <Button variant="ghost" className="rounded-full">Home Repair</Button>
        <Button variant="ghost" className="rounded-full">Renovations</Button>
        <Button variant="ghost" className="rounded-full">Seasonal</Button>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {/* Gallery Item 1 */}
        <div className="group overflow-hidden rounded-lg">
          <div className="relative h-72 w-full">
            <Image 
              src="/images/hero-landscaping.jpg" 
              alt="Front yard landscaping project" 
              fill 
              className="object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Button variant="secondary" size="sm" className="font-semibold">
                View Project
              </Button>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">Front Yard Transformation</h3>
            <p className="text-muted-foreground text-sm">Landscaping Project in River Heights</p>
          </div>
        </div>

        {/* Gallery Item 2 */}
        <div className="group overflow-hidden rounded-lg">
          <div className="relative h-72 w-full">
            <Image 
              src="/images/handyman-service.jpg" 
              alt="Kitchen renovation project" 
              fill 
              className="object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Button variant="secondary" size="sm" className="font-semibold">
                View Project
              </Button>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">Kitchen Renovation</h3>
            <p className="text-muted-foreground text-sm">Home Improvement in St. Vital</p>
          </div>
        </div>

        {/* Gallery Item 3 */}
        <div className="group overflow-hidden rounded-lg">
          <div className="relative h-72 w-full">
            <Image 
              src="/images/lawn-mowing.jpg" 
              alt="Backyard patio installation" 
              fill 
              className="object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Button variant="secondary" size="sm" className="font-semibold">
                View Project
              </Button>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">Backyard Patio Installation</h3>
            <p className="text-muted-foreground text-sm">Landscaping Project in Transcona</p>
          </div>
        </div>

        {/* Gallery Item 4 */}
        <div className="group overflow-hidden rounded-lg">
          <div className="relative h-72 w-full">
            <Image 
              src="/images/home-repair.jpg" 
              alt="Basement finishing project" 
              fill 
              className="object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Button variant="secondary" size="sm" className="font-semibold">
                View Project
              </Button>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">Basement Finishing</h3>
            <p className="text-muted-foreground text-sm">Renovation in St. James</p>
          </div>
        </div>

        {/* Gallery Item 5 */}
        <div className="group overflow-hidden rounded-lg">
          <div className="relative h-72 w-full">
            <Image 
              src="/images/hero-landscaping.jpg" 
              alt="Garden design and installation" 
              fill 
              className="object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Button variant="secondary" size="sm" className="font-semibold">
                View Project
              </Button>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">Garden Design & Installation</h3>
            <p className="text-muted-foreground text-sm">Landscaping in Fort Garry</p>
          </div>
        </div>

        {/* Gallery Item 6 */}
        <div className="group overflow-hidden rounded-lg">
          <div className="relative h-72 w-full">
            <Image 
              src="/images/handyman-service.jpg" 
              alt="Deck repair project" 
              fill 
              className="object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Button variant="secondary" size="sm" className="font-semibold">
                View Project
              </Button>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">Deck Repair & Refinishing</h3>
            <p className="text-muted-foreground text-sm">Maintenance in Charleswood</p>
          </div>
        </div>
      </div>

      {/* Load More Button */}
      <div className="text-center mb-20">
        <Button variant="outline" size="lg">
          Load More Projects
        </Button>
      </div>

      {/* Testimonial */}
      <div className="bg-muted rounded-xl p-8 mb-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl italic mb-6">
            "Cole and his team did an amazing job transforming our backyard into the perfect outdoor living space. 
            Professional, punctual, and the quality of work exceeded our expectations!"
          </p>
          <p className="font-semibold">- Sarah Johnson, River Heights</p>
        </div>
      </div>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Contact us today for a free consultation on your handyman or landscaping project.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/services" className="group">
              View Our Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
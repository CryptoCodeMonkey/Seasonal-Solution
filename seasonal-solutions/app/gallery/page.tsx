import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata = {
  title: "Our Work | Seasonal Solutions - Handyman & Landscaping in Winnipeg",
  description:
    "View our portfolio of completed handyman and landscaping projects in Winnipeg. See examples of our quality workmanship and get inspired for your own project.",
}

export default function GalleryPage() {
  const categories = [
    { id: "all", label: "All Projects" },
    { id: "landscaping", label: "Landscaping" },
    { id: "handyman", label: "Handyman" },
    { id: "painting", label: "Painting" },
    { id: "renovation", label: "Renovation" },
  ]

  const projects = [
    {
      id: 1,
      title: "Backyard Transformation",
      category: "landscaping",
      location: "River Heights, Winnipeg",
      description: "Complete backyard redesign with new patio, garden beds, and custom pergola.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 2,
      title: "Kitchen Renovation",
      category: "renovation",
      location: "St. Vital, Winnipeg",
      description: "Modern kitchen renovation with custom cabinets, quartz countertops, and new appliances.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 3,
      title: "Exterior House Painting",
      category: "painting",
      location: "Transcona, Winnipeg",
      description: "Complete exterior painting with color consultation and premium weather-resistant paint.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 4,
      title: "Deck Construction",
      category: "handyman",
      location: "St. James, Winnipeg",
      description: "Custom cedar deck with built-in seating and pergola for shade.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 5,
      title: "Front Yard Landscaping",
      category: "landscaping",
      location: "Fort Garry, Winnipeg",
      description: "Front yard makeover with new walkway, garden beds, and decorative stone features.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 6,
      title: "Bathroom Remodel",
      category: "renovation",
      location: "St. Boniface, Winnipeg",
      description: "Complete bathroom renovation with custom tile work, new fixtures, and modern vanity.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 7,
      title: "Interior Painting",
      category: "painting",
      location: "Charleswood, Winnipeg",
      description: "Full interior painting with custom accent walls and trim work.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 8,
      title: "Fence Installation",
      category: "handyman",
      location: "East St. Paul, Winnipeg",
      description: "Custom privacy fence installation with decorative post caps and gate.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 9,
      title: "Garden Design",
      category: "landscaping",
      location: "West St. Paul, Winnipeg",
      description: "Perennial garden design with native plants, decorative stones, and pathway.",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  return (
    <div className="flex flex-col">
      <section className="bg-muted py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Work</h1>
            <p className="text-xl text-muted-foreground">
              Browse our portfolio of completed projects and get inspired for your own home improvement journey.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="all" className="w-full">
            <div className="mb-8 flex justify-center">
              <TabsList>
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {projects
                    .filter((project) => category.id === "all" || project.category === category.id)
                    .map((project) => (
                      <div
                        key={project.id}
                        className="group overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
                      >
                        <div className="aspect-video overflow-hidden">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            width={800}
                            height={600}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                          <p className="mb-1 text-sm text-primary">{project.location}</p>
                          <p className="mb-4 text-muted-foreground">{project.description}</p>
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/gallery/${project.id}`} className="group inline-flex items-center">
                              View Project
                              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-12 text-primary-foreground md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">Ready to Start Your Project?</h2>
            <p className="mb-8 text-xl text-primary-foreground/90">
              Contact us today to discuss your ideas and get a free, no-obligation quote.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Request a Quote</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


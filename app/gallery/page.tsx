import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getUnsplashImage } from "@/lib/unsplash"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export const metadata = {
  title: "Our Work | Seasonal Solutions - Handyman & Landscaping in Winnipeg",
  description:
    "View our portfolio of completed handyman and landscaping projects in Winnipeg. See examples of our quality workmanship and get inspired for your own project.",
}

export default function GalleryPage() {
  const categories = [
    { id: "all", label: "All Projects" },
    { id: "basement", label: "Basement Renovations" },
    { id: "landscaping", label: "Landscaping" },
    { id: "handyman", label: "Handyman" },
    { id: "painting", label: "Painting" },
    { id: "renovation", label: "Renovation" },
  ]

  const projects = [
    {
      id: 1,
      title: "Basement Framing Project",
      category: "basement",
      location: "River Heights, Winnipeg",
      description: "Complete basement framing with custom layout and preparation for electrical and plumbing.",
      features: ["Custom layout design", "Structural framing", "Electrical preparation", "Plumbing rough-ins"],
      completionDate: "January 2023",
      image: "/images/projects/basement-framing-1.png",
    },
    {
      id: 2,
      title: "Full Basement Renovation",
      category: "basement",
      location: "St. Vital, Winnipeg",
      description: "Comprehensive basement renovation including framing, drywall, electrical, and finishing work.",
      features: [
        "Complete demolition",
        "New framing",
        "Drywall installation",
        "Electrical upgrades",
        "Custom finishes",
      ],
      completionDate: "March 2023",
      image: "/images/projects/basement-renovation-1.png",
    },
    {
      id: 3,
      title: "Media Room Basement",
      category: "basement",
      location: "Transcona, Winnipeg",
      description: "Specialized basement finishing project with custom media room and sound insulation.",
      features: ["Media room design", "Sound insulation", "Custom lighting", "Built-in storage"],
      completionDate: "May 2023",
      image: "/images/projects/basement-framing-2.png",
    },
    {
      id: 4,
      title: "Basement with Bathroom",
      category: "basement",
      location: "St. James, Winnipeg",
      description: "Basement remodel featuring a new bathroom installation and waterproofing.",
      features: ["Bathroom rough-in", "Ceiling installation", "Waterproofing", "Egress window"],
      completionDate: "July 2023",
      image: "/images/projects/basement-renovation-2.png",
    },
    {
      id: 5,
      title: "Home Office Basement",
      category: "basement",
      location: "Fort Garry, Winnipeg",
      description: "Modern basement development with dedicated home office and entertainment spaces.",
      features: ["Home office design", "Entertainment area", "Storage solutions", "Improved lighting"],
      completionDate: "September 2023",
      image: "/images/projects/basement-renovation-3.png",
    },
    {
      id: 6,
      title: "Backyard Transformation",
      category: "landscaping",
      location: "River Heights, Winnipeg",
      description: "Complete backyard redesign with new patio, garden beds, and custom pergola.",
      features: ["Stone patio", "Custom pergola", "Garden design", "Outdoor lighting"],
      completionDate: "June 2023",
      image: getUnsplashImage("backyard,landscaping,garden,patio", 800, 600),
    },
    {
      id: 7,
      title: "Modern Kitchen Renovation",
      category: "renovation",
      location: "St. Vital, Winnipeg",
      description: "Contemporary kitchen renovation featuring custom cabinetry and premium finishes.",
      features: ["Custom cabinetry", "Quartz countertops", "New appliances", "Tile backsplash"],
      completionDate: "April 2023",
      image: getUnsplashImage("kitchen,renovation,modern", 800, 600),
    },
    {
      id: 8,
      title: "Exterior House Painting",
      category: "painting",
      location: "Transcona, Winnipeg",
      description: "Complete exterior painting with color consultation and premium weather-resistant paint.",
      features: ["Color consultation", "Weather-resistant paint", "Trim detailing", "Surface preparation"],
      completionDate: "August 2023",
      image: getUnsplashImage("house,exterior,painting", 800, 600),
    },
    {
      id: 9,
      title: "Cedar Deck Construction",
      category: "handyman",
      location: "St. James, Winnipeg",
      description: "Custom cedar deck with built-in seating and pergola for shade.",
      features: ["Cedar construction", "Built-in seating", "Pergola", "Custom railings"],
      completionDate: "May 2023",
      image: getUnsplashImage("deck,wood,outdoor,patio", 800, 600),
    },
    {
      id: 10,
      title: "Front Yard Landscaping",
      category: "landscaping",
      location: "Fort Garry, Winnipeg",
      description: "Front yard makeover with new walkway, garden beds, and decorative stone features.",
      features: ["Stone walkway", "Native plants", "Decorative features", "Low-maintenance design"],
      completionDate: "July 2023",
      image: getUnsplashImage("front,yard,landscaping,garden", 800, 600),
    },
    {
      id: 11,
      title: "Luxury Bathroom Remodel",
      category: "renovation",
      location: "St. Boniface, Winnipeg",
      description: "Spa-inspired bathroom renovation with premium fixtures and custom tilework.",
      features: ["Custom tile work", "Modern fixtures", "Vanity installation", "Improved ventilation"],
      completionDate: "February 2023",
      image: getUnsplashImage("bathroom,renovation,modern", 800, 600),
    },
    {
      id: 12,
      title: "Interior Painting & Accent Walls",
      category: "painting",
      location: "Charleswood, Winnipeg",
      description: "Interior painting project featuring custom accent walls and detailed trim work.",
      features: ["Accent walls", "Trim detailing", "Color coordination", "Premium paints"],
      completionDate: "March 2023",
      image: getUnsplashImage("interior,painting,living,room", 800, 600),
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-muted">
        <div
          className="relative w-full h-[400px] md:h-[500px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${getUnsplashImage("renovation,quality,work", 1920, 600)})`,
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-3xl">
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Our Work</h1>
              <p className="mb-8 text-xl text-white/90">
                Browse our portfolio of completed projects and get inspired for your own home improvement journey. We
                take pride in our craftsmanship and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Quality Craftsmanship</h2>
            <p className="text-muted-foreground">
              At Seasonal Solutions, we believe that the quality of our work speaks for itself. Each project is
              approached with care, precision, and a commitment to excellence. Browse through our portfolio to see
              examples of our craftsmanship across a variety of services.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="all" className="w-full">
            <div className="mb-10 flex justify-center">
              <TabsList className="grid w-full max-w-3xl grid-cols-3 md:grid-cols-6">
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="text-sm">
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {projects
                    .filter((project) => category.id === "all" || project.category === category.id)
                    .map((project) => (
                      <Card key={project.id} className="flex flex-col overflow-hidden transition-all hover:shadow-md">
                        <div
                          className="h-[200px] w-full bg-cover bg-center transition-transform duration-300 hover:scale-105"
                          style={{
                            backgroundImage: `url(${project.image || getUnsplashImage("renovation", 800, 600)})`,
                          }}
                          role="img"
                          aria-label={project.title}
                        />
                        <CardContent className="flex-grow p-6">
                          <div className="mb-4 flex items-center justify-between">
                            <Badge variant="outline" className="capitalize">
                              {project.category}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {project.completionDate || "Completed"}
                            </span>
                          </div>

                          <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                          <p className="mb-2 text-sm text-primary">{project.location || "Winnipeg"}</p>
                          <p className="mb-4 text-muted-foreground">{project.description || ""}</p>

                          <div className="space-y-1">
                            {(project.features || []).slice(0, 3).map((feature, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                                <span className="text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                        <CardFooter className="border-t bg-muted/50 px-6 py-4">
                          <Button variant="outline" size="sm" className="w-full" asChild>
                            <Link
                              href={`/gallery/${project.id}`}
                              className="group inline-flex items-center justify-center"
                            >
                              View Project Details
                              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
                {category.id !== "all" &&
                  projects.filter((project) => project.category === category.id).length === 0 && (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <p className="mb-4 text-lg text-muted-foreground">No projects in this category yet.</p>
                      <Button asChild>
                        <Link href="/contact">Request This Service</Link>
                      </Button>
                    </div>
                  )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-muted py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-lg bg-background p-8 shadow-sm">
            <div className="mb-6 text-center">
              <h2 className="mb-4 text-2xl font-bold">What Our Clients Say</h2>
              <div className="mx-auto mb-4 h-1 w-16 bg-primary"></div>
            </div>
            <blockquote className="mb-6 text-center text-lg italic text-muted-foreground">
              "Cole and his team at Seasonal Solutions did an amazing job on our basement renovation. They were
              professional, kept us informed throughout the process, and delivered exceptional quality work. We couldn't
              be happier with the results!"
            </blockquote>
            <div className="text-center">
              <p className="font-semibold">Sarah & Michael Thompson</p>
              <p className="text-sm text-muted-foreground">St. Vital, Winnipeg</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 lg:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${getUnsplashImage("landscaping,garden,beautiful", 1920, 800)})`,
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Start Your Project?
            </h2>
            <p className="mb-8 text-xl text-white/90">
              Whether you're looking to renovate your basement, update your landscaping, or tackle any home improvement
              project, we're here to help. Contact us today for a free consultation and quote.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="default" asChild>
                <Link href="/contact">Request a Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

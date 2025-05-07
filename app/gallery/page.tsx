import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

// Add logging for metadata generation
export const metadata = {
  title: "Our Work | Seasonal Solutions",
  description: "View our portfolio of completed projects in Winnipeg.",
}

// Log when this file is processed during build
console.log("[BUILD] Processing gallery/page.tsx")

export default function GalleryPage() {
  console.log("[RENDER] Starting GalleryPage render")

  const projects = [
    {
      id: 1,
      title: "Basement Framing Project",
      category: "basement",
      description: "Complete basement framing with custom layout.",
      image: "/images/projects/basement-framing-1.png",
    },
    {
      id: 2,
      title: "Full Basement Renovation",
      category: "basement",
      description: "Comprehensive basement renovation including framing, drywall, and electrical.",
      image: "/images/projects/basement-renovation-1.png",
    },
    {
      id: 3,
      title: "Media Room Basement",
      category: "basement",
      description: "Specialized basement finishing project with custom media room.",
      image: "/images/projects/basement-framing-2.png",
    },
    {
      id: 4,
      title: "Basement with Bathroom",
      category: "basement",
      description: "Basement remodel featuring a new bathroom installation.",
      image: "/images/projects/basement-renovation-2.png",
    },
    {
      id: 5,
      title: "Home Office Basement",
      category: "basement",
      description: "Modern basement development with dedicated home office.",
      image: "/images/projects/basement-renovation-3.png",
    },
  ]

  console.log("[DATA] Projects loaded:", projects.length)

  try {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="mb-8 text-3xl font-bold">Our Work</h1>

        <p className="mb-8 text-muted-foreground">
          Browse our portfolio of completed projects and get inspired for your own home improvement journey.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            console.log(`[RENDER] Rendering project ${project.id}: ${project.title}`)

            try {
              return (
                <Card key={project.id} className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                      onError={() => console.error(`[ERROR] Failed to load image for project ${project.id}`)}
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardContent>
                  <CardFooter className="border-t p-4">
                    <Button asChild variant="outline" className="w-full">
                      <Link href={`/gallery/${project.id}`}>View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
              )
            } catch (error) {
              console.error(`[ERROR] Failed to render project ${project.id}:`, error)
              return null
            }
          })}
        </div>
      </div>
    )
  } catch (error) {
    console.error("[ERROR] Failed to render GalleryPage:", error)
    return <div>Something went wrong. Please try again later.</div>
  }
}

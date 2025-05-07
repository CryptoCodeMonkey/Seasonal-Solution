import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

// Log when this file is processed during build
// console.log("[BUILD] Processing gallery/[id]/page.tsx")

export function generateMetadata({ params }: { params: { id: string } }) {
  // console.log("[METADATA] Generating metadata for project ID:", params.id)

  try {
    const projectId = Number.parseInt(params.id, 10) || 1
    // console.log("[METADATA] Parsed project ID:", projectId)

    const projects = [
      { id: 1, title: "Basement Framing Project" },
      { id: 2, title: "Full Basement Renovation" },
      { id: 3, title: "Media Room Basement" },
      { id: 4, title: "Basement with Bathroom" },
      { id: 5, title: "Home Office Basement" },
    ]

    const project = projects.find((p) => p.id === projectId) || projects[0]
    // console.log("[METADATA] Found project:", project.title)

    return {
      title: `${project.title} | Seasonal Solutions`,
      description: `Details about our ${project.title} project.`,
    }
  } catch (error) {
    // console.error("[ERROR] Failed to generate metadata:", error)
    return {
      title: "Project Details | Seasonal Solutions",
      description: "View details about our projects.",
    }
  }
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  // console.log("[RENDER] Starting ProjectDetailPage render for ID:", params.id)

  try {
    const projectId = Number.parseInt(params.id, 10) || 1
    // console.log("[RENDER] Parsed project ID:", projectId)

    // Simple project data
    const projects = [
      {
        id: 1,
        title: "Basement Framing Project",
        description: "Complete basement framing with custom layout.",
        details:
          "This basement framing project involved creating a custom layout designed to maximize the available space.",
        image: "/images/projects/basement-framing-1.png",
      },
      {
        id: 2,
        title: "Full Basement Renovation",
        description: "Comprehensive basement renovation including framing, drywall, and electrical.",
        details:
          "This complete basement renovation transformed an unfinished space into a beautiful, functional living area.",
        image: "/images/projects/basement-renovation-1.png",
      },
      {
        id: 3,
        title: "Media Room Basement",
        description: "Specialized basement finishing project with custom media room.",
        details: "This media room basement project was designed for the ultimate home entertainment experience.",
        image: "/images/projects/basement-framing-2.png",
      },
      {
        id: 4,
        title: "Basement with Bathroom",
        description: "Basement remodel featuring a new bathroom installation.",
        details:
          "This basement remodel focused on creating a functional living space with a new bathroom installation.",
        image: "/images/projects/basement-renovation-2.png",
      },
      {
        id: 5,
        title: "Home Office Basement",
        description: "Modern basement development with dedicated home office.",
        details: "This basement renovation created a modern home office space perfect for remote work.",
        image: "/images/projects/basement-renovation-3.png",
      },
    ]

    // console.log("[DATA] Projects loaded:", projects.length)

    const project = projects.find((p) => p.id === projectId) || projects[0]
    // console.log("[DATA] Selected project:", project.title)

    return (
      <div className="container mx-auto px-4 py-12">
        <div className="mb-6">
          <Button variant="outline" asChild>
            <Link href="/gallery">Back to Gallery</Link>
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative h-[300px] overflow-hidden rounded-lg">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>

          <div>
            <h1 className="mb-4 text-3xl font-bold">{project.title}</h1>
            <p className="mb-4 text-lg">{project.description}</p>
            <p className="mb-6 text-muted-foreground">{project.details}</p>

            <Button asChild>
              <Link href="/contact">Request a Similar Project</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  } catch (error) {
    // console.error("[ERROR] Failed to render ProjectDetailPage:", error)
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="mb-6">
          <Button variant="outline" asChild>
            <Link href="/gallery">Back to Gallery</Link>
          </Button>
        </div>
        <h1 className="mb-4 text-3xl font-bold">Error Loading Project</h1>
        <p>We encountered an error while loading this project. Please try again later.</p>
      </div>
    )
  }
}

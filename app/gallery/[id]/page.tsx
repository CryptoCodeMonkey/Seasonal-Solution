import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getUnsplashImage } from "@/lib/unsplash"

export async function generateMetadata({ params }: { params: { id: string } }) {
  const projectId = Number.parseInt(params.id, 10) || 1

  // This is a simplified version - in a real app, you'd fetch this from a database
  const projects = [
    {
      id: 1,
      title: "Basement Framing Project",
      category: "basement",
      location: "River Heights, Winnipeg",
    },
    {
      id: 2,
      title: "Full Basement Renovation",
      category: "basement",
      location: "St. Vital, Winnipeg",
    },
    {
      id: 3,
      title: "Media Room Basement",
      category: "basement",
      location: "Transcona, Winnipeg",
    },
    {
      id: 4,
      title: "Basement with Bathroom",
      category: "basement",
      location: "St. James, Winnipeg",
    },
    {
      id: 5,
      title: "Home Office Basement",
      category: "basement",
      location: "Fort Garry, Winnipeg",
    },
    {
      id: 6,
      title: "Backyard Transformation",
      category: "landscaping",
      location: "River Heights, Winnipeg",
    },
    {
      id: 7,
      title: "Modern Kitchen Renovation",
      category: "renovation",
      location: "St. Vital, Winnipeg",
    },
    {
      id: 8,
      title: "Exterior House Painting",
      category: "painting",
      location: "Transcona, Winnipeg",
    },
    {
      id: 9,
      title: "Cedar Deck Construction",
      category: "handyman",
      location: "St. James, Winnipeg",
    },
    {
      id: 10,
      title: "Front Yard Landscaping",
      category: "landscaping",
      location: "Fort Garry, Winnipeg",
    },
    {
      id: 11,
      title: "Luxury Bathroom Remodel",
      category: "renovation",
      location: "St. Boniface, Winnipeg",
    },
    {
      id: 12,
      title: "Interior Painting & Accent Walls",
      category: "painting",
      location: "Charleswood, Winnipeg",
    },
  ]

  const project = projects.find((p) => p.id === projectId) || projects[0]

  return {
    title: `${project.title} | Seasonal Solutions Projects`,
    description: `View details of our ${project.title} in ${project.location}. Quality craftsmanship by Seasonal Solutions.`,
  }
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const projectId = Number.parseInt(params.id, 10) || 1

  // In a real application, you would fetch this data from a database or API
  // This is a simplified version for demonstration purposes
  const projects = [
    {
      id: 1,
      title: "Basement Framing Project",
      category: "basement",
      location: "River Heights, Winnipeg",
      description: "Complete basement framing with custom layout and preparation for electrical and plumbing.",
      longDescription:
        "This basement framing project in River Heights involved creating a custom layout designed to maximize the available space. We worked closely with the homeowners to understand their needs and preferences, resulting in a well-planned basement that includes a family room, home office, and bathroom. The project included preparation for electrical and plumbing installations, ensuring all systems were properly integrated into the design.",
      features: [
        "Custom layout design",
        "Structural framing",
        "Electrical preparation",
        "Plumbing rough-ins",
        "Insulation installation",
        "Vapor barrier application",
      ],
      completionDate: "January 2023",
      duration: "3 weeks",
      image: "/images/projects/basement-framing-1.png",
      additionalImages: [
        getUnsplashImage("basement,framing,construction", 800, 600),
        getUnsplashImage("basement,renovation,progress", 800, 600),
      ],
      testimonial: {
        quote:
          "Cole and his team did an excellent job framing our basement. They were professional, efficient, and the quality of their work exceeded our expectations.",
        author: "James & Lisa Wilson",
        location: "River Heights, Winnipeg",
      },
    },
    {
      id: 2,
      title: "Full Basement Renovation",
      category: "basement",
      location: "St. Vital, Winnipeg",
      description: "Comprehensive basement renovation including framing, drywall, electrical, and finishing work.",
      longDescription:
        "This complete basement renovation in St. Vital transformed an unfinished space into a beautiful, functional living area. The project involved demolition of existing partial walls, complete framing, drywall installation, electrical upgrades, and high-quality finishes. We created a family entertainment area, a guest bedroom, and a three-piece bathroom, all designed to maximize comfort and usability.",
      features: [
        "Complete demolition",
        "New framing",
        "Drywall installation",
        "Electrical upgrades",
        "Custom finishes",
        "Flooring installation",
      ],
      completionDate: "March 2023",
      duration: "6 weeks",
      image: "/images/projects/basement-renovation-1.png",
      additionalImages: [
        getUnsplashImage("basement,renovation,after", 800, 600),
        getUnsplashImage("basement,renovation,before", 800, 600),
      ],
      testimonial: {
        quote:
          "We are thrilled with our new basement! Seasonal Solutions transformed our dark, unfinished space into a beautiful area that our whole family enjoys. The attention to detail was impressive.",
        author: "Robert & Emily Chen",
        location: "St. Vital, Winnipeg",
      },
    },
    {
      id: 3,
      title: "Media Room Basement",
      category: "basement",
      location: "Transcona, Winnipeg",
      description: "Specialized basement finishing project with custom media room and sound insulation.",
      longDescription:
        "This media room basement project in Transcona was designed for the ultimate home entertainment experience. We incorporated sound insulation in the walls and ceiling to create optimal acoustics, custom lighting with dimmable options, and built-in storage for media equipment. The space includes a projector setup, comfortable seating, and all the wiring necessary for a high-end audio-visual system.",
      features: [
        "Media room design",
        "Sound insulation",
        "Custom lighting",
        "Built-in storage",
        "Projector setup",
        "Acoustic treatments",
      ],
      completionDate: "May 2023",
      duration: "5 weeks",
      image: "/images/projects/basement-framing-2.png",
      additionalImages: [
        getUnsplashImage("media,room,home,theater", 800, 600),
        getUnsplashImage("basement,entertainment,room", 800, 600),
      ],
      testimonial: {
        quote:
          "Our new media room is incredible! The sound quality is amazing, and the custom lighting creates the perfect atmosphere for movie nights. Seasonal Solutions thought of every detail.",
        author: "Daniel & Jennifer Lee",
        location: "Transcona, Winnipeg",
      },
    },
    {
      id: 4,
      title: "Basement with Bathroom",
      category: "basement",
      location: "St. James, Winnipeg",
      description: "Basement remodel featuring a new bathroom installation and waterproofing.",
      longDescription:
        "This basement remodel in St. James focused on creating a functional living space with a new bathroom installation. We began with comprehensive waterproofing to ensure the space would remain dry and comfortable year-round. The bathroom installation included a shower, vanity, and toilet, with proper ventilation to prevent moisture issues. We also installed an egress window to meet building codes and provide natural light.",
      features: [
        "Bathroom rough-in",
        "Ceiling installation",
        "Waterproofing",
        "Egress window",
        "Moisture control",
        "Proper ventilation",
      ],
      completionDate: "July 2023",
      duration: "4 weeks",
      image: "/images/projects/basement-renovation-2.png",
      additionalImages: [
        getUnsplashImage("basement,bathroom,renovation", 800, 600),
        getUnsplashImage("egress,window,basement", 800, 600),
      ],
      testimonial: {
        quote:
          "We love our new basement bathroom! The waterproofing work has been excellent, and we haven't had any moisture issues despite Winnipeg's challenging climate. The egress window makes the space feel much more open and inviting.",
        author: "Mark & Susan Taylor",
        location: "St. James, Winnipeg",
      },
    },
    {
      id: 11,
      title: "Luxury Bathroom Remodel",
      category: "renovation",
      location: "St. Boniface, Winnipeg",
      description: "Spa-inspired bathroom renovation with premium fixtures and custom tilework.",
      longDescription:
        "This luxury bathroom remodel in St. Boniface created a spa-like retreat for the homeowners. The project included complete demolition of the existing bathroom, installation of a custom tiled shower with glass enclosure, a freestanding soaker tub, heated floors, and premium fixtures. Special attention was paid to lighting design and ventilation to create a comfortable, functional space.",
      features: [
        "Custom tile work",
        "Modern fixtures",
        "Vanity installation",
        "Improved ventilation",
        "Heated flooring",
        "LED lighting",
      ],
      completionDate: "February 2023",
      duration: "4 weeks",
      image: getUnsplashImage("bathroom,renovation,modern", 800, 600),
      additionalImages: [
        getUnsplashImage("bathroom,shower,modern", 800, 600),
        getUnsplashImage("bathroom,vanity,sink", 800, 600),
      ],
      testimonial: {
        quote:
          "Our new bathroom is absolutely stunning! Cole and his team were meticulous with the tile work and installation. The heated floors are a game-changer during Winnipeg winters.",
        author: "Michelle & David Lapointe",
        location: "St. Boniface, Winnipeg",
      },
    },
  ]

  // Find the project or use a default if not found
  const project = projects.find((p) => p.id === projectId) || {
    id: 1,
    title: "Project Not Found",
    category: "other",
    location: "Winnipeg",
    description: "Project details not available.",
    longDescription: "We couldn't find the project you're looking for. Please check our other projects.",
    features: ["Not available"],
    completionDate: "N/A",
    duration: "N/A",
    image: "/placeholder.svg",
    additionalImages: [],
  }

  const features = project.features || ["Not available"]
  const additionalImages = project.additionalImages || []

  return (
    <div className="flex flex-col">
      <section className="bg-muted py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/gallery" className="flex items-center gap-1">
                <ArrowLeft className="h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
            <span className="text-muted-foreground">/</span>
            <span className="text-sm">{project.title}</span>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6 overflow-hidden rounded-lg">
                <div
                  className="h-[400px] w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${project.image || "/placeholder.svg"})`,
                  }}
                  role="img"
                  aria-label={project.title}
                />
              </div>

              {additionalImages.length > 0 && (
                <div className="grid grid-cols-2 gap-4">
                  {additionalImages.map((img, index) => (
                    <div key={index} className="overflow-hidden rounded-lg">
                      <div
                        className="h-[200px] w-full bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${img || "/placeholder.svg"})`,
                        }}
                        role="img"
                        aria-label={`${project.title} - Additional view ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <div className="mb-2 flex items-center gap-2">
                <Badge variant="outline" className="capitalize">
                  {project.category}
                </Badge>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Completed: {project.completionDate}</span>
                </div>
              </div>

              <h1 className="mb-2 text-3xl font-bold">{project.title}</h1>

              <div className="mb-6 flex items-center gap-1 text-primary">
                <MapPin className="h-4 w-4" />
                <span>{project.location}</span>
              </div>

              <div className="mb-8 space-y-4">
                <p className="text-lg font-medium">{project.description}</p>
                {project.longDescription && <p className="text-muted-foreground">{project.longDescription}</p>}
              </div>

              <div className="mb-8">
                <h2 className="mb-4 text-xl font-bold">Project Features</h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h2 className="mb-4 text-xl font-bold">Project Details</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border p-4">
                    <p className="text-sm text-muted-foreground">Project Duration</p>
                    <p className="font-medium">{project.duration}</p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <p className="text-sm text-muted-foreground">Completion Date</p>
                    <p className="font-medium">{project.completionDate}</p>
                  </div>
                </div>
              </div>

              {project.testimonial && (
                <div className="mb-8 rounded-lg bg-muted p-6">
                  <blockquote className="mb-4 italic text-muted-foreground">"{project.testimonial.quote}"</blockquote>
                  <div>
                    <p className="font-medium">{project.testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{project.testimonial.location}</p>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link href="/contact">Request a Similar Project</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/services">View Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-2xl font-bold">Ready to Transform Your Space?</h2>
            <p className="mb-8 text-muted-foreground">
              Contact us today to discuss your project ideas and get a free, no-obligation quote.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

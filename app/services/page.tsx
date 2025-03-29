import Link from "next/link"
import Image from "next/image"
import { Leaf, PenToolIcon as Tool, Paintbrush, Home, Wrench, Snowflake, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Services | Seasonal Solutions - Handyman & Landscaping in Winnipeg",
  description:
    "Explore our comprehensive handyman and landscaping services in Winnipeg. From lawn care to home renovations, we provide quality solutions for all your property needs.",
}

export default function ServicesPage() {
  const services = [
    {
      id: "landscaping",
      icon: <Leaf className="h-12 w-12 text-primary" />,
      title: "Landscaping & Lawn Care",
      description:
        "Transform your outdoor space with our professional landscaping services. We offer landscape design, installation, lawn maintenance, garden care, and more.",
      features: [
        "Landscape design and planning",
        "Lawn installation and maintenance",
        "Garden bed creation and care",
        "Tree and shrub planting and pruning",
        "Mulching and decorative stone installation",
        "Irrigation system installation and repair",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "handyman",
      icon: <Tool className="h-12 w-12 text-primary" />,
      title: "Handyman Services",
      description:
        "Our skilled handymen can tackle all your home repair and maintenance needs, from minor fixes to larger projects around your property.",
      features: [
        "Furniture assembly and installation",
        "Drywall repair and installation",
        "Door and window repair and replacement",
        "Fixture installation and replacement",
        "Deck and fence repair",
        "General home repairs and maintenance",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "painting",
      icon: <Paintbrush className="h-12 w-12 text-primary" />,
      title: "Interior & Exterior Painting",
      description:
        "Refresh your home with our professional painting services. We use quality materials and techniques to ensure a beautiful, long-lasting finish.",
      features: [
        "Interior wall and ceiling painting",
        "Exterior house painting",
        "Cabinet painting and refinishing",
        "Deck and fence staining",
        "Wallpaper removal and installation",
        "Color consultation and selection",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "renovation",
      icon: <Home className="h-12 w-12 text-primary" />,
      title: "Home Renovations",
      description:
        "Transform your living spaces with our renovation services. From kitchens and bathrooms to basements, we can help you create the home of your dreams.",
      features: [
        "Kitchen renovations",
        "Bathroom remodeling",
        "Basement finishing",
        "Flooring installation",
        "Custom carpentry and built-ins",
        "Room additions and expansions",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "seasonal",
      icon: <Snowflake className="h-12 w-12 text-primary" />,
      title: "Seasonal Maintenance",
      description:
        "Keep your property in top condition year-round with our seasonal maintenance services, from spring cleanup to winter snow removal.",
      features: [
        "Spring and fall cleanup",
        "Gutter cleaning and repair",
        "Snow removal and ice management",
        "Holiday light installation",
        "Winterization services",
        "Seasonal property inspections",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="Seasonal Solutions Services"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Our Services</h1>
            <p className="mb-8 text-xl text-white/90">
              From landscaping to home repairs and renovations, we provide comprehensive solutions for all your property
              needs in Winnipeg.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Comprehensive Property Solutions</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We offer a wide range of services to keep your property looking its best and functioning properly
              throughout all seasons.
            </p>
          </div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid gap-8 lg:grid-cols-2 lg:gap-12 ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="mb-4 flex items-center gap-3">
                    {service.icon}
                    <h3 className="text-2xl font-bold sm:text-3xl">{service.title}</h3>
                  </div>
                  <p className="mb-6 text-muted-foreground">{service.description}</p>

                  <ul className="mb-8 space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Wrench className="mt-1 h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild>
                    <Link href="/contact" className="group">
                      Get a Quote
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>

                <div className="relative h-[300px] overflow-hidden rounded-lg sm:h-[400px]">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">Ready to Get Started?</h2>
            <p className="mb-8 text-xl text-primary-foreground/90">
              Contact us today to discuss your project and get a free, no-obligation quote.
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
                <Link href="/gallery">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


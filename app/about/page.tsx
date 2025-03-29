import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Users, Award, Clock, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "About Us | Seasonal Solutions - Handyman & Landscaping in Winnipeg",
  description:
    "Learn about Seasonal Solutions, your trusted handyman and landscaping experts in Winnipeg. Discover our story, our team, and our commitment to quality service.",
}

export default function AboutPage() {
  const values = [
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Quality Workmanship",
      description: "We take pride in our work and are committed to delivering exceptional results on every project.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Customer Satisfaction",
      description:
        "Your satisfaction is our top priority. We work closely with you to ensure your vision becomes reality.",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Professionalism",
      description: "Our team is reliable, punctual, and respectful of your property and your time.",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Reliability",
      description: "We show up on time, complete projects on schedule, and communicate clearly throughout the process.",
    },
  ]

  const team = [
    {
      name: "John Smith",
      role: "Founder & Lead Contractor",
      image: "/placeholder.svg?height=400&width=400",
      bio: "With over 15 years of experience in construction and landscaping, John founded Seasonal Solutions to provide quality services to homeowners in Winnipeg.",
    },
    {
      name: "Sarah Johnson",
      role: "Landscape Designer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Sarah brings creativity and expertise to our landscaping projects, with a degree in Landscape Architecture and a passion for sustainable design.",
    },
    {
      name: "Mike Williams",
      role: "Master Carpenter",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Mike's attention to detail and craftsmanship ensure that all of our carpentry and renovation projects are completed to the highest standards.",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center">
              <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                About Seasonal Solutions
              </h1>
              <p className="mb-6 text-xl text-muted-foreground">
                Your trusted handyman and landscaping experts in Winnipeg, providing quality services for all seasons.
              </p>
              <p className="mb-6 text-muted-foreground">
                Founded in 2010, Seasonal Solutions has been serving the Winnipeg community with professional handyman
                and landscaping services. Our team of skilled professionals is dedicated to delivering exceptional
                results and customer satisfaction on every project.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] overflow-hidden rounded-lg sm:h-[400px] lg:h-full">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Seasonal Solutions Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Our Story</h2>
            <p className="mb-6 text-muted-foreground">
              Seasonal Solutions was founded with a simple mission: to provide reliable, high-quality handyman and
              landscaping services to homeowners in Winnipeg. What started as a small operation has grown into a trusted
              local business with a reputation for excellence.
            </p>
            <p className="mb-6 text-muted-foreground">
              Our founder, John Smith, began his career in construction and landscaping over 15 years ago. After working
              for various companies, he noticed a gap in the market for a service provider that could handle both
              interior and exterior projects with the same level of care and expertise. This insight led to the creation
              of Seasonal Solutions.
            </p>
            <p className="text-muted-foreground">
              Today, we're proud to have served hundreds of homeowners throughout Winnipeg, helping them maintain and
              improve their properties in every season. Our team has grown, but our commitment to quality workmanship
              and customer satisfaction remains the same.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-muted py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Our Values</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              These core principles guide everything we do at Seasonal Solutions.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card key={index}>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">{value.icon}</div>
                  <h3 className="mb-2 text-xl font-bold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Meet Our Team</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our experienced professionals are dedicated to delivering exceptional service and quality workmanship.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {team.map((member, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="mb-4 aspect-square overflow-hidden rounded-full">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="mb-1 text-xl font-bold">{member.name}</h3>
                    <p className="mb-4 text-sm text-primary">{member.role}</p>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="relative h-[300px] overflow-hidden rounded-lg sm:h-[400px] lg:h-full">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Seasonal Solutions Quality Work"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Us</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-bold">Experienced Professionals</h3>
                    <p className="text-muted-foreground">
                      Our team brings years of experience and expertise to every project, ensuring quality results.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-bold">Comprehensive Services</h3>
                    <p className="text-muted-foreground">
                      From landscaping to home repairs, we provide a wide range of services to meet all your property
                      needs.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-bold">Local Expertise</h3>
                    <p className="text-muted-foreground">
                      As Winnipeg locals, we understand the unique challenges of our climate and design solutions
                      accordingly.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-bold">Customer-Focused Approach</h3>
                    <p className="text-muted-foreground">
                      We listen to your needs and work closely with you to ensure your complete satisfaction.
                    </p>
                  </div>
                </li>
              </ul>
              <Button className="mt-6" asChild>
                <Link href="/contact" className="group">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-primary p-8 text-primary-foreground md:p-12 lg:p-16">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">Ready to Transform Your Space?</h2>
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
                  <Link href="/services">Explore Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


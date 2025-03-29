import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { 
  Phone,
  Mail,
  UserCircle2,
  Award,
  Clock,
  Shield,
  ThumbsUp,
  ArrowRight
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About Us - Seasonal Solutions",
  description: "Learn more about Seasonal Solutions, your trusted handyman and landscaping service in Winnipeg.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">About Seasonal Solutions</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Your trusted partner for professional handyman and landscaping services in Winnipeg
        </p>
      </div>

      {/* Company Story */}
      <section className="mb-20">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="mb-4 text-muted-foreground">
              Seasonal Solutions was founded by Cole Doerksen with a simple mission: to provide Winnipeg homeowners with reliable, high-quality handyman and landscaping services throughout the year.
            </p>
            <p className="mb-4 text-muted-foreground">
              With years of experience in home maintenance and landscaping, Cole identified a need for a comprehensive service that could address both indoor and outdoor property needs with the same level of professionalism and attention to detail.
            </p>
            <p className="mb-4 text-muted-foreground">
              Today, Seasonal Solutions has grown to serve homeowners across Winnipeg and surrounding areas, maintaining the same commitment to quality, reliability, and customer satisfaction that has been our foundation since day one.
            </p>
            <div className="mt-8">
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact" className="group">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 relative h-[400px] w-full rounded-xl overflow-hidden">
            <Image 
              src="/images/hero-landscaping.jpg" 
              alt="Seasonal Solutions Team" 
              fill 
              className="object-cover" 
            />
          </div>
        </div>
      </section>

      {/* Meet the Owner */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Meet the Owner</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center max-w-4xl mx-auto">
          <div className="md:w-1/3">
            <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden">
              <Image 
                src="/images/handyman-service.jpg" 
                alt="Cole Doerksen" 
                fill 
                className="object-cover" 
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold mb-2">Cole Doerksen</h3>
            <p className="text-primary font-medium mb-4">Founder & Owner</p>
            <p className="mb-4 text-muted-foreground">
              With a background in both construction and horticulture, Cole brings a unique combination of skills that perfectly suits the diverse needs of Seasonal Solutions' clients.
            </p>
            <p className="mb-4 text-muted-foreground">
              His dedication to quality workmanship and customer satisfaction has been the driving force behind the company's growth and success.
            </p>
            <div className="flex flex-col space-y-2">
              <Link href="tel:+12049903247" className="flex items-center gap-2 hover:text-primary">
                <Phone className="h-5 w-5" />
                <span>(204) 990-3247</span>
              </Link>
              <Link href="mailto:seasonalsolutionswinnipeg@gmail.com" className="flex items-center gap-2 hover:text-primary">
                <Mail className="h-5 w-5" />
                <span>seasonalsolutionswinnipeg@gmail.com</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Values</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <ThumbsUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Quality</h3>
              <p className="text-muted-foreground">
                We take pride in our workmanship and use only premium materials to ensure lasting results on every project.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Reliability</h3>
              <p className="text-muted-foreground">
                We arrive on time, provide accurate quotes, and complete projects on schedule, respecting your time and property.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Integrity</h3>
              <p className="text-muted-foreground">
                We operate with transparency and honesty, treating every client's home as if it were our own.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Why Choose Seasonal Solutions</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex gap-4">
            <div className="shrink-0">
              <div className="rounded-full bg-primary/10 p-3 h-12 w-12 flex items-center justify-center">
                <Award className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Experienced Professionals</h3>
              <p className="text-muted-foreground">Our team brings years of experience in both handyman services and landscaping.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="shrink-0">
              <div className="rounded-full bg-primary/10 p-3 h-12 w-12 flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Fully Insured</h3>
              <p className="text-muted-foreground">We're fully insured for your protection and peace of mind.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="shrink-0">
              <div className="rounded-full bg-primary/10 p-3 h-12 w-12 flex items-center justify-center">
                <ThumbsUp className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Satisfaction Guaranteed</h3>
              <p className="text-muted-foreground">We're not satisfied until you're completely happy with our work.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="shrink-0">
              <div className="rounded-full bg-primary/10 p-3 h-12 w-12 flex items-center justify-center">
                <UserCircle2 className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Personalized Service</h3>
              <p className="text-muted-foreground">We take the time to understand your specific needs and preferences.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="shrink-0">
              <div className="rounded-full bg-primary/10 p-3 h-12 w-12 flex items-center justify-center">
                <Clock className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Prompt & Reliable</h3>
              <p className="text-muted-foreground">We respect your time with punctual service and clear communication.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="shrink-0">
              <div className="rounded-full bg-primary/10 p-3 h-12 w-12 flex items-center justify-center">
                <Mail className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Free Consultations</h3>
              <p className="text-muted-foreground">We offer complimentary quotes and consultations for all services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Experience the Seasonal Solutions Difference?</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Contact us today to discuss your home maintenance and landscaping needs.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/services">View Our Services</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
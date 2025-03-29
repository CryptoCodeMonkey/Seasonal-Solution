import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Leaf, Wrench } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SiteFooter() {
  return (
    <footer className="bg-muted">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <div className="flex">
                  <Leaf className="h-5 w-5 text-primary-foreground" />
                  <Wrench className="h-5 w-5 text-primary-foreground" />
                </div>
              </div>
              <span className="text-xl font-bold">Seasonal Solutions</span>
            </Link>
            <p className="mb-4 text-muted-foreground">
              Your trusted handyman and landscaping experts in Winnipeg, providing quality services for all seasons.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/landscaping" className="text-muted-foreground hover:text-primary">
                  Landscaping & Lawn Care
                </Link>
              </li>
              <li>
                <Link href="/services/handyman" className="text-muted-foreground hover:text-primary">
                  Handyman Services
                </Link>
              </li>
              <li>
                <Link href="/services/painting" className="text-muted-foreground hover:text-primary">
                  Interior & Exterior Painting
                </Link>
              </li>
              <li>
                <Link href="/services/renovation" className="text-muted-foreground hover:text-primary">
                  Home Renovations
                </Link>
              </li>
              <li>
                <Link href="/services/seasonal" className="text-muted-foreground hover:text-primary">
                  Seasonal Maintenance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-primary">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/service-areas" className="text-muted-foreground hover:text-primary">
                  Areas We Serve
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Winnipeg Neighborhoods</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/service-areas#river-heights" className="text-muted-foreground hover:text-primary">
                  River Heights
                </Link>
              </li>
              <li>
                <Link href="/service-areas#st-vital" className="text-muted-foreground hover:text-primary">
                  St. Vital
                </Link>
              </li>
              <li>
                <Link href="/service-areas#transcona" className="text-muted-foreground hover:text-primary">
                  Transcona
                </Link>
              </li>
              <li>
                <Link href="/service-areas#st-james" className="text-muted-foreground hover:text-primary">
                  St. James
                </Link>
              </li>
              <li>
                <Link href="/service-areas" className="text-muted-foreground hover:text-primary">
                  View All Areas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">Serving Winnipeg, MB and surrounding areas</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">(204) 990-3247</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">seasonalsolutionswinnipeg@gmail.com</span>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="mb-2 text-sm font-medium">Subscribe to our newsletter</h4>
              <div className="flex gap-2">
                <Input type="email" placeholder="Your email" className="max-w-[220px]" />
                <Button type="submit" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Seasonal Solutions. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm">
              <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


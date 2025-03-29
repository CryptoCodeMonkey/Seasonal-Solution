
import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Winnipeg Handyman & Landscaping Services | Best Local Experts | Seasonal Solutions",
  description: 
    "Top-rated Winnipeg handyman and landscaping services by Cole Doerksen. Serving all Manitoba neighborhoods with lawn care, snow removal, home repairs, and property maintenance. Free quotes for River Heights, St. Vital, Transcona and all areas.",
  keywords: "winnipeg handyman, winnipeg landscaper, manitoba property maintenance, lawn care winnipeg, snow removal winnipeg, home repairs winnipeg, handyman near me winnipeg, st vital landscaping, river heights handyman, transcona lawn care",
  alternates: {
    canonical: "https://www.seasonalsolutionswinnipeg.com/winnipeg-services",
  }
}

export default function WinnipegServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Winnipeg Handyman & Landscaping Services</h1>
        <p className="text-xl text-muted-foreground">
          Seasonal Solutions provides professional handyman and landscaping services throughout Winnipeg and surrounding Manitoba communities. 
          Owner Cole Doerksen personally ensures quality workmanship on every project.
        </p>
      </div>
      
      <div className="relative mb-12 overflow-hidden rounded-xl">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-landscaping.jpg" 
            alt="Handyman and landscaping services in Winnipeg"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 px-6 py-12 text-white md:px-12 md:py-24">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">Trusted Local Winnipeg Experts</h2>
          <p className="mb-6 max-w-xl text-lg">
            From complete landscape transformations to home repairs and renovations, our Winnipeg team delivers quality service throughout the city.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Get a Free Quote Today</Link>
          </Button>
        </div>
      </div>
      
      <div className="mb-16 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-6 text-2xl font-bold">Winnipeg Handyman Services</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="mt-1 rounded-full bg-primary/10 p-1">
                <div className="h-5 w-5 rounded-full bg-primary" />
              </div>
              <div>
                <h3 className="font-medium">Home Repairs & Maintenance</h3>
                <p className="text-muted-foreground">Professional home repairs throughout Winnipeg, including drywall, trim, doors, and general maintenance.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 rounded-full bg-primary/10 p-1">
                <div className="h-5 w-5 rounded-full bg-primary" />
              </div>
              <div>
                <h3 className="font-medium">Interior & Exterior Painting</h3>
                <p className="text-muted-foreground">Quality painting services for Winnipeg homes with proper preparation and premium materials.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 rounded-full bg-primary/10 p-1">
                <div className="h-5 w-5 rounded-full bg-primary" />
              </div>
              <div>
                <h3 className="font-medium">Deck & Fence Repairs</h3>
                <p className="text-muted-foreground">Revitalize your outdoor spaces with our deck and fence repair services in Winnipeg and surrounding areas.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 rounded-full bg-primary/10 p-1">
                <div className="h-5 w-5 rounded-full bg-primary" />
              </div>
              <div>
                <h3 className="font-medium">Minor Renovations</h3>
                <p className="text-muted-foreground">Transform your Winnipeg home with bathroom updates, basement finishing, and kitchen improvements.</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div>
          <h2 className="mb-6 text-2xl font-bold">Winnipeg Landscaping Services</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="mt-1 rounded-full bg-primary/10 p-1">
                <div className="h-5 w-5 rounded-full bg-primary" />
              </div>
              <div>
                <h3 className="font-medium">Lawn Care & Maintenance</h3>
                <p className="text-muted-foreground">Complete lawn care services for Winnipeg properties including mowing, fertilization, and weed control.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 rounded-full bg-primary/10 p-1">
                <div className="h-5 w-5 rounded-full bg-primary" />
              </div>
              <div>
                <h3 className="font-medium">Garden Design & Planting</h3>
                <p className="text-muted-foreground">Beautiful garden designs suited to Manitoba's climate with expert installation and maintenance.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 rounded-full bg-primary/10 p-1">
                <div className="h-5 w-5 rounded-full bg-primary" />
              </div>
              <div>
                <h3 className="font-medium">Seasonal Property Maintenance</h3>
                <p className="text-muted-foreground">Year-round property care including spring cleanups, fall leaf removal, and winter snow clearing.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 rounded-full bg-primary/10 p-1">
                <div className="h-5 w-5 rounded-full bg-primary" />
              </div>
              <div>
                <h3 className="font-medium">Outdoor Living Spaces</h3>
                <p className="text-muted-foreground">Create beautiful patios, walkways, and outdoor entertainment areas for your Winnipeg home.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mb-16">
        <h2 className="mb-6 text-2xl font-bold">Winnipeg Neighborhoods We Serve</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="rounded-lg border p-4 shadow-sm">
            <h3 className="mb-3 font-medium">River Heights</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span>Lawn care & landscaping</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span>Home repairs & painting</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg border p-4 shadow-sm">
            <h3 className="mb-3 font-medium">St. Vital</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span>Garden design & maintenance</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span>Deck building & repairs</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg border p-4 shadow-sm">
            <h3 className="mb-3 font-medium">Transcona</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span>Snow removal services</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span>Seasonal yard maintenance</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg border p-4 shadow-sm">
            <h3 className="mb-3 font-medium">St. James</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span>Home renovations</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span>Property maintenance</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg border p-4 shadow-sm">
            <h3 className="mb-3 font-medium">Fort Garry</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span>Landscaping design</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span>Painting services</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg border p-4 shadow-sm">
            <h3 className="mb-3 font-medium">St. Boniface</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span>Lawn care & maintenance</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span>Handyman services</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg border p-4 shadow-sm">
            <h3 className="mb-3 font-medium">Charleswood</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span>Garden bed installation</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span>Outdoor living spaces</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg border p-4 shadow-sm">
            <h3 className="mb-3 font-medium">Downtown</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span>Commercial maintenance</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span>Property upkeep</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mb-16">
        <h2 className="mb-6 text-2xl font-bold">Why Choose Seasonal Solutions in Winnipeg</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border p-6">
            <h3 className="mb-3 text-xl font-medium">Local Winnipeg Expertise</h3>
            <p className="text-muted-foreground">
              As Winnipeg residents, we understand Manitoba's unique climate challenges and provide services tailored to local conditions.
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="mb-3 text-xl font-medium">Professional & Reliable</h3>
            <p className="text-muted-foreground">
              Professionally trained crew with years of experience serving Winnipeg neighborhoods with quality workmanship.
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="mb-3 text-xl font-medium">Competitive Pricing</h3>
            <p className="text-muted-foreground">
              Fair and transparent pricing for all our Winnipeg handyman and landscaping services with free quotes.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mb-16 rounded-xl bg-muted p-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold">Winnipeg's Trusted Handyman & Landscaping Company</h2>
          <p className="mb-6 text-lg">
            Contact Cole Doerksen and the Seasonal Solutions team today for professional handyman and landscaping services throughout Winnipeg and surrounding areas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="tel:+12049903247" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>Call (204) 990-3247</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* FAQ Section for SEO */}
      <div className="mb-16">
        <h2 className="mb-6 text-2xl font-bold">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="rounded-lg border p-6">
            <h3 className="mb-2 text-xl font-medium">What areas of Winnipeg do you serve?</h3>
            <p className="text-muted-foreground">
              We proudly serve all Winnipeg neighborhoods including River Heights, St. Vital, Transcona, St. Boniface, Fort Garry, St. James, Charleswood, and Downtown. We also cover surrounding areas like Headingley, East St. Paul, West St. Paul, Oak Bluff, Stonewall, Selkirk, Oakbank, and Lorette.
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="mb-2 text-xl font-medium">What handyman services do you offer in Winnipeg?</h3>
            <p className="text-muted-foreground">
              Our Winnipeg handyman services include home repairs, furniture assembly, drywall installation and repair, door and window repairs, shelving and cabinet installation, deck repairs and maintenance, painting, and minor home renovations. All of our work is completed by experienced professionals.
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="mb-2 text-xl font-medium">Do you offer landscaping services throughout Winnipeg?</h3>
            <p className="text-muted-foreground">
              Yes, we provide comprehensive landscaping services across Winnipeg including professional lawn care and maintenance, garden design and installation, tree and shrub planting, sod installation and repairs, mulching and garden bed preparation, and seasonal yard cleanups.
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="mb-2 text-xl font-medium">How can I get a quote for handyman or landscaping work in Winnipeg?</h3>
            <p className="text-muted-foreground">
              Getting a quote is easy! Simply call Cole Doerksen at (204) 990-3247 or fill out our contact form online. We offer free quotes for all handyman and landscaping services throughout Winnipeg and the surrounding areas.
            </p>
          </div>
        </div>
      </div>
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Seasonal Solutions Winnipeg",
            "image": "https://www.seasonalsolutionswinnipeg.com/images/logo.jpg",
            "url": "https://www.seasonalsolutionswinnipeg.com/winnipeg-services",
            "telephone": "+12049903247",
            "email": "seasonalsolutionswinnipeg@gmail.com",
            "priceRange": "$$",
            "description": "Professional handyman and landscaping services throughout Winnipeg. From home repairs to complete landscape transformations, we provide quality solutions for all seasons.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Winnipeg",
              "addressRegion": "MB",
              "postalCode": "R3T",
              "addressCountry": "CA"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 49.8951,
              "longitude": -97.1384
            },
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 49.8951,
                "longitude": -97.1384
              },
              "geoRadius": "30000"
            },
            "founder": {
              "@type": "Person",
              "name": "Cole Doerksen"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Handyman and Landscaping Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Winnipeg Lawn Care Services",
                    "description": "Professional lawn care and maintenance for Winnipeg properties."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Winnipeg Handyman Services",
                    "description": "Complete handyman and home repair services throughout Winnipeg."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Winnipeg Snow Removal",
                    "description": "Reliable snow clearing services for Winnipeg homes and businesses."
                  }
                }
              ]
            }
          })
        }}
      />
    </div>
  )
}

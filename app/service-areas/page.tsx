
import Link from "next/link"
import { MapPin, ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Winnipeg Handyman & Landscaping Services | All Neighborhoods | Seasonal Solutions",
  description: 
    "Trusted Winnipeg handyman and landscaping experts serving River Heights, St. Vital, Transcona, St. James, Fort Garry and all Manitoba communities. Professional lawn care, home repairs, and property maintenance by Cole Doerksen.",
  keywords: "winnipeg handyman, winnipeg landscaping, manitoba lawn care, property maintenance winnipeg, home repairs winnipeg, river heights handyman, st vital landscaper, transcona yard work, seasonal solutions winnipeg, cole doerksen handyman",
  alternates: {
    canonical: "https://www.seasonalsolutionswinnipeg.com/service-areas",
  }
}

export default function ServiceAreasPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Winnipeg Service Areas</h1>
        <p className="text-xl text-muted-foreground">
          Seasonal Solutions proudly serves homeowners and businesses throughout Winnipeg and surrounding areas.
          Our team of local experts provides quality handyman and landscaping services customized to the unique needs of each Winnipeg neighborhood.
        </p>
      </div>
      
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {/* North Winnipeg */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">North Winnipeg</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <div>
                <span className="font-medium">North End</span>
                <p className="text-sm text-muted-foreground">Home repairs, landscaping, snow removal and seasonal maintenance</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <div>
                <span className="font-medium">Garden City</span>
                <p className="text-sm text-muted-foreground">Lawn care, painting, renovations and handyman services</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <div>
                <span className="font-medium">West Kildonan</span>
                <p className="text-sm text-muted-foreground">Landscape design, deck building, home repairs</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <div>
                <span className="font-medium">Maples</span>
                <p className="text-sm text-muted-foreground">Property maintenance, seasonal cleanup, minor renovations</p>
              </div>
            </li>
          </ul>
        </div>
        
        {/* Central Winnipeg */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Central Winnipeg</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <div>
                <span className="font-medium">Downtown</span>
                <p className="text-sm text-muted-foreground">Commercial property maintenance, landscaping for businesses</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <div>
                <span className="font-medium">Wolseley</span>
                <p className="text-sm text-muted-foreground">Character home renovations, garden design, outdoor living spaces</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <div>
                <span className="font-medium">River Heights</span>
                <p className="text-sm text-muted-foreground">Premium landscaping, home upgrades, seasonal property care</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <div>
                <span className="font-medium">Osborne Village</span>
                <p className="text-sm text-muted-foreground">Small space solutions, condo repairs, urban garden design</p>
              </div>
            </li>
          </ul>
        </div>
        
        {/* South Winnipeg */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">South Winnipeg</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <div>
                <span className="font-medium">St. Vital</span>
                <p className="text-sm text-muted-foreground">Complete landscaping solutions, home repairs, seasonal maintenance</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <div>
                <span className="font-medium">Fort Garry</span>
                <p className="text-sm text-muted-foreground">Lawn care, snow removal, deck and fence installation</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <div>
                <span className="font-medium">St. Norbert</span>
                <p className="text-sm text-muted-foreground">Rural property maintenance, landscaping, outdoor structures</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <div>
                <span className="font-medium">Whyte Ridge</span>
                <p className="text-sm text-muted-foreground">Premium lawn care, home exterior maintenance, painting</p>
              </div>
            </li>
          </ul>
        </div>
        
        {/* East Winnipeg */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">East Winnipeg</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <div>
                <span className="font-medium">Transcona</span>
                <p className="text-sm text-muted-foreground">Comprehensive handyman services, lawn care, seasonal maintenance</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <div>
                <span className="font-medium">St. Boniface</span>
                <p className="text-sm text-muted-foreground">Bilingual service, home repairs, landscape design and maintenance</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <div>
                <span className="font-medium">Southdale</span>
                <p className="text-sm text-muted-foreground">Backyard transformations, home renovations, property upkeep</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <div>
                <span className="font-medium">Windsor Park</span>
                <p className="text-sm text-muted-foreground">Garden design, home maintenance, seasonal services</p>
              </div>
            </li>
          </ul>
        </div>
        
        {/* West Winnipeg */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">West Winnipeg</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <div>
                <span className="font-medium">St. James</span>
                <p className="text-sm text-muted-foreground">Full-service property maintenance, landscaping, home repairs</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <div>
                <span className="font-medium">Charleswood</span>
                <p className="text-sm text-muted-foreground">Natural landscaping, yard maintenance, handyman services</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <div>
                <span className="font-medium">Westwood</span>
                <p className="text-sm text-muted-foreground">Complete home renovations, landscape design, property maintenance</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <div>
                <span className="font-medium">Assiniboia</span>
                <p className="text-sm text-muted-foreground">Seasonal services, home repairs, outdoor living spaces</p>
              </div>
            </li>
          </ul>
        </div>
        
        {/* Surrounding Areas */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Surrounding Areas</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <div>
                <span className="font-medium">Headingley</span>
                <p className="text-sm text-muted-foreground">Rural property maintenance, landscaping for larger properties</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <div>
                <span className="font-medium">East St. Paul</span>
                <p className="text-sm text-muted-foreground">Premium landscape design, home renovations, seasonal care</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <div>
                <span className="font-medium">West St. Paul</span>
                <p className="text-sm text-muted-foreground">Complete property solutions, landscaping, home maintenance</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <div>
                <span className="font-medium">Stonewall</span>
                <p className="text-sm text-muted-foreground">Handyman services, outdoor living spaces, property upkeep</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <h2 className="mb-6 text-2xl font-bold">Ready to Get Started?</h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
          Whether you're in River Heights or Transcona, Charleswood or St. Vital, Cole and the Seasonal Solutions team 
          are ready to help with all your handyman and landscaping needs throughout Winnipeg.
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
      
      <div className="mt-16">
        <h2 className="mb-6 text-2xl font-bold">Services We Offer Throughout Winnipeg</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
            <h3 className="mb-2 text-xl font-semibold">Landscaping Services</h3>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Professional lawn care and maintenance</li>
              <li>• Garden design and installation</li>
              <li>• Tree and shrub planting</li>
              <li>• Sod installation and repairs</li>
              <li>• Mulching and garden bed preparation</li>
              <li>• Seasonal yard cleanups</li>
            </ul>
            <Button variant="link" size="sm" className="mt-4 p-0" asChild>
              <Link href="/services/landscaping" className="group flex items-center gap-1">
                Learn more 
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          
          <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
            <h3 className="mb-2 text-xl font-semibold">Handyman Services</h3>
            <ul className="space-y-1 text-muted-foreground">
              <li>• General home repairs</li>
              <li>• Furniture assembly</li>
              <li>• Drywall installation and repair</li>
              <li>• Door and window repairs</li>
              <li>• Shelving and cabinet installation</li>
              <li>• Deck repairs and maintenance</li>
            </ul>
            <Button variant="link" size="sm" className="mt-4 p-0" asChild>
              <Link href="/services/handyman" className="group flex items-center gap-1">
                Learn more 
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          
          <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
            <h3 className="mb-2 text-xl font-semibold">Seasonal Services</h3>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Snow removal and ice management</li>
              <li>• Fall yard cleanup and preparation</li>
              <li>• Spring property maintenance</li>
              <li>• Gutter cleaning</li>
              <li>• Holiday light installation</li>
              <li>• Seasonal property inspections</li>
            </ul>
            <Button variant="link" size="sm" className="mt-4 p-0" asChild>
              <Link href="/services/seasonal" className="group flex items-center gap-1">
                Learn more 
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

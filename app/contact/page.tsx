
import { Metadata } from "next"
import Link from "next/link"
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Card,
  CardContent 
} from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Contact Us - Seasonal Solutions",
  description: "Contact Seasonal Solutions for handyman and landscaping services in Winnipeg. Get a free quote today!",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Contact Us</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Have a question or ready to get started? Reach out to us for a free consultation.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <Card>
          <CardContent className="flex flex-col items-center text-center p-6">
            <div className="mb-4 rounded-full bg-primary/10 p-3">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p className="mb-4 text-muted-foreground">
              Give us a call to discuss your project or schedule a consultation.
            </p>
            <Link href="tel:+12049903247" className="text-primary hover:underline font-medium">
              (204) 990-3247
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col items-center text-center p-6">
            <div className="mb-4 rounded-full bg-primary/10 p-3">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="mb-4 text-muted-foreground">
              Send us an email and we'll get back to you within 24 hours.
            </p>
            <Link href="mailto:seasonalsolutionswinnipeg@gmail.com" className="text-primary hover:underline font-medium">
              seasonalsolutionswinnipeg@gmail.com
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col items-center text-center p-6">
            <div className="mb-4 rounded-full bg-primary/10 p-3">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Business Hours</h3>
            <p className="mb-4 text-muted-foreground">
              We're available to serve you at the following times:
            </p>
            <ul className="space-y-1">
              <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
              <li>Saturday: 9:00 AM - 4:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium">
                  First Name
                </label>
                <Input id="firstName" name="firstName" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-medium">
                  Last Name
                </label>
                <Input id="lastName" name="lastName" required />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input id="email" name="email" type="email" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone Number
              </label>
              <Input id="phone" name="phone" type="tel" />
            </div>
            <div className="space-y-2">
              <label htmlFor="service" className="text-sm font-medium">
                Service Interested In
              </label>
              <select
                id="service"
                name="service"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">Select a service</option>
                <option value="landscaping">Landscaping</option>
                <option value="handyman">Handyman Services</option>
                <option value="painting">Painting</option>
                <option value="renovation">Home Renovation</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us about your project or questions..."
                required
              />
            </div>
            <Button type="submit" className="w-full">
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Service Areas</h2>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Winnipeg Areas We Serve</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>River Heights</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>St. Vital</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Transcona</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>St. Boniface</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Fort Garry</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>St. James</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Charleswood</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Downtown</span>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Surrounding Areas</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Headingley</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>East St. Paul</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>West St. Paul</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Oak Bluff</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Stonewall</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Selkirk</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Phone</p>
                  <Link href="tel:+12049903247" className="text-muted-foreground hover:text-primary">
                    (204) 990-3247
                  </Link>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Email</p>
                  <Link href="mailto:seasonalsolutionswinnipeg@gmail.com" className="text-muted-foreground hover:text-primary break-all">
                    seasonalsolutionswinnipeg@gmail.com
                  </Link>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Service Area</p>
                  <p className="text-muted-foreground">Winnipeg and surrounding areas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Do you offer free estimates?</h3>
            <p className="text-muted-foreground">
              Yes, we provide free estimates for all our services. Contact us to schedule a consultation at your convenience.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">How far in advance should I book your services?</h3>
            <p className="text-muted-foreground">
              We recommend booking 1-2 weeks in advance for most services, especially during our busy season (spring and summer). 
              For larger projects, 3-4 weeks notice is preferable.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Are you insured?</h3>
            <p className="text-muted-foreground">
              Yes, Seasonal Solutions is fully insured for all the services we provide, giving you peace of mind when we work on your property.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">What methods of payment do you accept?</h3>
            <p className="text-muted-foreground">
              We accept cash, checks, e-transfers, and major credit cards for your convenience.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

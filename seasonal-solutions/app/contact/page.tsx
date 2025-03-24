"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    projectType: "",
    message: "",
    submitted: false,
    loading: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState({ ...formState, loading: true })

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setFormState({
      ...formState,
      submitted: true,
      loading: false,
    })
  }

  return (
    <div className="flex flex-col">
      <section className="bg-muted py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              Get in touch with our team to discuss your project or request a free quote.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-2">
              {formState.submitted ? (
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                    <div className="mb-4 rounded-full bg-primary/10 p-3">
                      <Send className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="mb-2 text-2xl font-bold">Thank You!</h2>
                    <p className="mb-6 text-muted-foreground">
                      Your message has been received. We'll get back to you as soon as possible.
                    </p>
                    <Button asChild>
                      <Link href="/">Return to Home</Link>
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-4">
                        <h2 className="text-2xl font-bold">Request a Quote</h2>
                        <p className="text-muted-foreground">
                          Fill out the form below and we'll get back to you as soon as possible.
                        </p>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            placeholder="John Doe"
                            required
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            required
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            placeholder="(204) 555-1234"
                            value={formState.phone}
                            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="address">Address</Label>
                          <Input
                            id="address"
                            placeholder="123 Main St, Winnipeg"
                            value={formState.address}
                            onChange={(e) => setFormState({ ...formState, address: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">Service Needed</Label>
                        <Select
                          onValueChange={(value) => setFormState({ ...formState, service: value })}
                          value={formState.service}
                        >
                          <SelectTrigger id="service">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="landscaping">Landscaping & Lawn Care</SelectItem>
                            <SelectItem value="handyman">Handyman Services</SelectItem>
                            <SelectItem value="painting">Painting</SelectItem>
                            <SelectItem value="renovation">Home Renovation</SelectItem>
                            <SelectItem value="seasonal">Seasonal Maintenance</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Project Type</Label>
                        <RadioGroup
                          defaultValue="residential"
                          onValueChange={(value) => setFormState({ ...formState, projectType: value })}
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="residential" id="residential" />
                            <Label htmlFor="residential">Residential</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="commercial" id="commercial" />
                            <Label htmlFor="commercial">Commercial</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Project Details</Label>
                        <Textarea
                          id="message"
                          placeholder="Please describe your project or the services you need..."
                          rows={5}
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        />
                      </div>

                      <Button type="submit" className="w-full" disabled={formState.loading}>
                        {formState.loading ? "Submitting..." : "Submit Request"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-bold">Contact Information</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <MapPin className="mt-1 h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-muted-foreground">123 Main Street, Winnipeg, MB R3C 1A1</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Phone className="mt-1 h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <Link href="tel:+12045551234" className="text-muted-foreground hover:text-primary">
                          (204) 555-1234
                        </Link>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Mail className="mt-1 h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Email</p>
                        <Link
                          href="mailto:info@seasonalsolutions.ca"
                          className="text-muted-foreground hover:text-primary"
                        >
                          info@seasonalsolutions.ca
                        </Link>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="mt-1 h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Business Hours</p>
                        <p className="text-muted-foreground">Monday - Friday: 8am - 6pm</p>
                        <p className="text-muted-foreground">Saturday: 9am - 4pm</p>
                        <p className="text-muted-foreground">Sunday: Closed</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-bold">Service Areas</h3>
                  <p className="mb-2 text-muted-foreground">We proudly serve Winnipeg and the surrounding areas:</p>
                  <ul className="grid grid-cols-2 gap-2 text-sm">
                    <li className="flex items-center gap-2">
                      <MapPin className="h-3 w-3 text-primary" />
                      <span>River Heights</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-3 w-3 text-primary" />
                      <span>St. Vital</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-3 w-3 text-primary" />
                      <span>Transcona</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-3 w-3 text-primary" />
                      <span>St. Boniface</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-3 w-3 text-primary" />
                      <span>Fort Garry</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-3 w-3 text-primary" />
                      <span>St. James</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-lg border">
            <div className="h-[400px] w-full bg-muted">
              {/* Replace with actual map component or embed */}
              <div className="flex h-full items-center justify-center">
                <p className="text-muted-foreground">Map of Winnipeg showing our location</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


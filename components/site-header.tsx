"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Phone, Mail, Leaf, Wrench } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function SiteHeader() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const routes = [
    { href: "/", label: "Home" },
    { href: "/convert", label: "Converter" },
    { href: "/services", label: "Services" },
    { href: "/winnipeg-services", label: "Winnipeg Services" },
    { href: "/service-areas", label: "Areas We Serve" },
    { href: "/gallery", label: "Our Work" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ]

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
            <div className="flex">
              <Leaf className="h-5 w-5 text-primary-foreground" />
              <Wrench className="h-5 w-5 text-primary-foreground" />
            </div>
          </div>
          <span className="text-xl font-bold">Seasonal Solutions</span>
        </Link>

        <nav className="hidden md:flex md:gap-6 lg:gap-10">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(route.href) ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {route.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="tel:+12049903247"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
          >
            <Phone className="h-4 w-4" />
            <span>(204) 990-3247</span>
          </Link>
          <Button asChild>
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>

        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-6 py-6">
              <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                  <div className="flex">
                    <Leaf className="h-5 w-5 text-primary-foreground" />
                    <Wrench className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>
                <span className="text-xl font-bold">Seasonal Solutions</span>
              </Link>

              <nav className="flex flex-col gap-4">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      isActive(route.href) ? "text-primary" : "text-muted-foreground"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {route.label}
                  </Link>
                ))}
              </nav>

              <div className="flex flex-col gap-4 pt-6">
                <Link
                  href="tel:+12049903247"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone className="h-4 w-4" />
                  <span>(204) 990-3247</span>
                </Link>
                <Link
                  href="mailto:seasonalsolutionswinnipeg@gmail.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Mail className="h-4 w-4" />
                  <span>seasonalsolutionswinnipeg@gmail.com</span>
                </Link>
                <Button className="mt-2" asChild onClick={() => setIsMenuOpen(false)}>
                  <Link href="/contact">Get a Quote</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}


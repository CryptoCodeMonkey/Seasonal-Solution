"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Phone, Mail, Leaf, Wrench } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle" // Added import for ThemeToggle

export default function SiteHeader() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const routes = [
    { href: "/", label: "Home" },
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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur shadow-sm">
      <div className="container flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 transition-transform hover:scale-105" prefetch>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary shadow-md">
            <div className="flex">
              <Leaf className="h-6 w-6 text-primary-foreground" />
              <Wrench className="h-6 w-6 text-primary-foreground" />
            </div>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Seasonal Solutions
          </span>
        </Link>

        <div className="flex items-center justify-end flex-1 gap-8">
          <nav className="hidden md:flex md:gap-1 lg:gap-2">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-muted hover:text-primary ${
                  isActive(route.href) 
                    ? "text-primary bg-primary/10 font-semibold" 
                    : "text-muted-foreground"
                }`}
                prefetch
              >
                {route.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <Link
              href="tel:+12049903247"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              prefetch
            >
              <Phone className="h-4 w-4" />
              <span>(204) 990-3247</span>
            </Link>
            
            <ThemeToggle />
            
            <Button asChild size="sm" className="shadow-sm">
              <Link href="/contact" prefetch>Get a Quote</Link>
            </Button>
          </div>
        </div>

        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden ml-4 shadow-sm">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-6 py-6">
              <Link href="/" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)} prefetch>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary shadow-md">
                  <div className="flex">
                    <Leaf className="h-6 w-6 text-primary-foreground" />
                    <Wrench className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Seasonal Solutions
                </span>
              </Link>

              <div className="h-px w-full bg-border my-2"></div>

              <nav className="flex flex-col">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={`py-3 px-4 text-sm font-medium rounded-lg transition-colors hover:bg-muted ${
                      isActive(route.href) 
                        ? "text-primary bg-primary/10 font-semibold" 
                        : "text-muted-foreground"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                    prefetch
                  >
                    {route.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-4 flex items-center p-2 rounded-lg bg-muted/50">
                <span className="mr-2 text-sm font-medium">Theme:</span>
                <ThemeToggle />
              </div>

              <div className="flex flex-col gap-4 pt-4 mt-auto">
                <div className="h-px w-full bg-border my-2"></div>
                <Link
                  href="tel:+12049903247"
                  className="flex items-center gap-2 p-2 text-sm text-muted-foreground hover:text-primary rounded-md hover:bg-muted"
                  onClick={() => setIsMenuOpen(false)}
                  prefetch
                >
                  <Phone className="h-5 w-5" />
                  <span>(204) 990-3247</span>
                </Link>
                <Link
                  href="mailto:seasonalsolutionswinnipeg@gmail.com"
                  className="flex items-center gap-2 p-2 text-sm text-muted-foreground hover:text-primary rounded-md hover:bg-muted"
                  onClick={() => setIsMenuOpen(false)}
                  prefetch
                >
                  <Mail className="h-5 w-5" />
                  <span>seasonalsolutionswinnipeg@gmail.com</span>
                </Link>
                <Button className="mt-4 w-full" asChild>
                  <Link href="/contact" prefetch>Get a Quote</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
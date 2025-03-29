import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { headers } from "next/headers"

import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Seasonal Solutions | Professional Landscaping & Handyman Services in Winnipeg",
  description: "Trusted landscaping and handyman services in Winnipeg. Quality work, affordable rates, and excellent customer service by Cole Doerksen.",
  keywords:
    "handyman winnipeg, landscaping winnipeg, winnipeg lawn care, winnipeg snow removal, manitoba handyman, river heights landscaping, st vital home repairs, transcona lawn service, winnipeg renovation, painting winnipeg, seasonal maintenance winnipeg, property maintenance manitoba, cole doerksen handyman, winnipeg deck repair, winnipeg fence installation, landscaper near me winnipeg",
  metadataBase: new URL('https://www.seasonalsolutionswinnipeg.com'),
  authors: [{ name: 'Cole Doerksen', url: 'https://www.seasonalsolutionswinnipeg.com' }],
  creator: 'Cole Doerksen - Seasonal Solutions',
  publisher: 'Seasonal Solutions Winnipeg',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://www.seasonalsolutionswinnipeg.com',
    title: 'Seasonal Solutions | Winnipeg Handyman & Landscaping Services',
    description: 'Professional handyman and landscaping services in Winnipeg, Manitoba. Lawn care, home repairs, renovations and complete landscape design by Cole Doerksen.',
    siteName: 'Seasonal Solutions Winnipeg',
    images: [
      {
        url: 'https://www.seasonalsolutionswinnipeg.com/images/hero-landscaping.jpg',
        width: 1200,
        height: 630,
        alt: 'Seasonal Solutions Winnipeg Handyman and Landscaping Services'
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'home services',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Seasonal Solutions",
              "image": "https://www.seasonalsolutionswinnipeg.com/images/logo.jpg",
              "url": "https://www.seasonalsolutionswinnipeg.com",
              "telephone": "+12049903247",
              "email": "seasonalsolutionswinnipeg@gmail.com",
              "priceRange": "$$",
              "description": "Professional handyman and landscaping services in Winnipeg. From home repairs to complete landscape transformations, we provide quality solutions for all seasons.",
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
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 49.8951,
                  "longitude": -97.1384
                },
                "geoRadius": "30000"
              },
              "sameAs": [
                "https://www.facebook.com/seasonalsolutionswinnipeg",
                "https://www.instagram.com/seasonalsolutionswinnipeg"
              ],
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "16:00"
                }
              ],
              "servesArea": [
                {
                  "@type": "GeoCircle",
                  "name": "Winnipeg, Manitoba",
                  "geoMidpoint": {
                    "@type": "GeoCoordinates",
                    "latitude": 49.8951,
                    "longitude": -97.1384
                  },
                  "geoRadius": "25000"
                }
              ]
            })
          }}
        />
      </body>
    </html>
  )
}
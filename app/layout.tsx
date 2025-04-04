import "@/app/globals.css"
import { Inter } from "next/font/google"
import { Metadata } from "next"

import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Seasonal Solutions | Professional Landscaping & Handyman Services in Winnipeg",
  description: "Trusted landscaping and handyman services in Winnipeg. Quality work, affordable rates, and excellent customer service by Cole Doerksen.",
  keywords: "handyman winnipeg, landscaping winnipeg, winnipeg lawn care, winnipeg snow removal, manitoba handyman, river heights landscaping, st vital home repairs, transcona lawn service",
  metadataBase: new URL('https://www.seasonalsolutionswinnipeg.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
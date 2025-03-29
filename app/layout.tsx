import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { siteConfig } from "@/config/site"
import "@/styles/globals.css"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Seasonal Solutions", "Landscaping", "Handyman", "Winnipeg", "Lawn Care", "Home Repair"],
  authors: [
    {
      name: "Cole Doerksen",
    },
  ],
  creator: "Cole Doerksen",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
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
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowRight, Tag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export const metadata = {
  title: "Blog | Seasonal Solutions - Handyman & Landscaping in Winnipeg",
  description:
    "Read our latest articles on landscaping tips, home maintenance, renovation ideas, and seasonal property care for Winnipeg homeowners.",
}

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Landscaping Ideas for Small Winnipeg Yards",
      excerpt:
        "Maximize your outdoor space with these creative landscaping ideas perfect for the typical Winnipeg yard size.",
      date: "March 15, 2023",
      author: "Sarah Johnson",
      category: "Landscaping",
      image: "/placeholder.svg?height=400&width=600",
      slug: "landscaping-ideas-small-yards",
    },
    {
      id: 2,
      title: "Preparing Your Home for Winnipeg Winters: A Complete Guide",
      excerpt:
        "Essential maintenance tasks to protect your home from harsh Manitoba winters and prevent costly damage.",
      date: "September 20, 2023",
      author: "John Smith",
      category: "Seasonal Maintenance",
      image: "/placeholder.svg?height=400&width=600",
      slug: "preparing-home-winnipeg-winters",
    },
    {
      id: 3,
      title: "Budget-Friendly Kitchen Renovation Tips",
      excerpt:
        "Transform your kitchen without breaking the bank with these practical renovation ideas and cost-saving strategies.",
      date: "July 8, 2023",
      author: "Mike Williams",
      category: "Renovation",
      image: "/placeholder.svg?height=400&width=600",
      slug: "budget-kitchen-renovation-tips",
    },
    {
      id: 4,
      title: "How to Choose the Right Paint for Manitoba's Climate",
      excerpt:
        "A guide to selecting weather-resistant paints that can withstand Winnipeg's extreme temperature fluctuations.",
      date: "May 12, 2023",
      author: "Sarah Johnson",
      category: "Painting",
      image: "/placeholder.svg?height=400&width=600",
      slug: "paint-selection-manitoba-climate",
    },
    {
      id: 5,
      title: "DIY Home Repairs Every Homeowner Should Know",
      excerpt:
        "Simple repairs you can handle yourself, and when it's time to call in the professionals for more complex issues.",
      date: "April 3, 2023",
      author: "John Smith",
      category: "Handyman",
      image: "/placeholder.svg?height=400&width=600",
      slug: "diy-home-repairs-guide",
    },
    {
      id: 6,
      title: "Native Plants for Winnipeg Gardens: Low-Maintenance Beauty",
      excerpt:
        "Discover the best native plants for Manitoba gardens that thrive in our local climate with minimal care.",
      date: "June 25, 2023",
      author: "Sarah Johnson",
      category: "Landscaping",
      image: "/placeholder.svg?height=400&width=600",
      slug: "native-plants-winnipeg-gardens",
    },
  ]

  const categories = ["Landscaping", "Handyman", "Renovation", "Painting", "Seasonal Maintenance", "Home Improvement"]

  return (
    <div className="flex flex-col">
      <section className="bg-muted py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Blog</h1>
            <p className="text-xl text-muted-foreground">
              Tips, guides, and insights for homeowners in Winnipeg and surrounding areas.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="grid gap-8 sm:grid-cols-2">
                {blogPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={600}
                        height={400}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="mb-3 flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {post.author}
                        </span>
                      </div>
                      <Link href={`/blog/${post.slug}`} className="group">
                        <h2 className="mb-2 text-xl font-bold group-hover:text-primary">{post.title}</h2>
                      </Link>
                      <p className="mb-4 text-muted-foreground">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1 text-sm text-primary">
                          <Tag className="h-4 w-4" />
                          {post.category}
                        </span>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="group inline-flex items-center text-sm font-medium text-primary"
                        >
                          Read More
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-10 flex justify-center">
                <Button variant="outline" asChild>
                  <Link href="/blog/archive">View All Posts</Link>
                </Button>
              </div>
            </div>

            <div className="space-y-8">
              {/* Search */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-lg font-bold">Search</h3>
                  <div className="flex gap-2">
                    <Input placeholder="Search articles..." />
                    <Button type="submit">Search</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-lg font-bold">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <Link
                          href={`/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                          className="flex items-center justify-between text-muted-foreground hover:text-primary"
                        >
                          <span>{category}</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Featured Post */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-lg font-bold">Featured Post</h3>
                  <div className="mb-3 aspect-video overflow-hidden rounded-md">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Featured Post"
                      width={600}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <Link href="/blog/seasonal-home-maintenance-checklist" className="group">
                    <h4 className="mb-2 font-bold group-hover:text-primary">
                      Seasonal Home Maintenance Checklist for Winnipeg Homeowners
                    </h4>
                  </Link>
                  <p className="mb-3 text-sm text-muted-foreground">
                    A comprehensive guide to maintaining your home throughout Manitoba's four distinct seasons.
                  </p>
                  <Link
                    href="/blog/seasonal-home-maintenance-checklist"
                    className="group inline-flex items-center text-sm font-medium text-primary"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-lg font-bold">Subscribe</h3>
                  <p className="mb-4 text-muted-foreground">
                    Get the latest articles, tips, and offers delivered directly to your inbox.
                  </p>
                  <div className="space-y-2">
                    <Input placeholder="Your email address" type="email" />
                    <Button className="w-full">Subscribe</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


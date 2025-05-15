// This function returns direct Unsplash image URLs that are known to work
export function getUnsplashImage(category: string, width = 800, height = 600): string {
  // Map of categories to specific, reliable Unsplash image URLs
  const imageMap: Record<string, string> = {
    // Landscaping images
    hero: "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1920&q=80",
    landscaping: "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=800&q=80",
    garden: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
    lawn: "https://images.unsplash.com/photo-1556910633-5099dc3971e8?auto=format&fit=crop&w=800&q=80",

    // Handyman images
    handyman: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
    tools: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=800&q=80",
    repair: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",

    // Painting images
    painting: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?auto=format&fit=crop&w=800&q=80",
    interior: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",

    // Renovation images
    renovation: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=800&q=80",
    kitchen: "https://images.unsplash.com/photo-1556911220-bda9f33a8b1f?auto=format&fit=crop&w=800&q=80",
    bathroom: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",

    // Seasonal images
    seasonal: "https://images.unsplash.com/photo-1610476905843-0e7a5e5c0370?auto=format&fit=crop&w=800&q=80",
    winter: "https://images.unsplash.com/photo-1612119276551-be9efb8e50a3?auto=format&fit=crop&w=800&q=80",

    // Team images
    team: "/images/cole-head-photo.png",
    contractor1: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    contractor2: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
    contractor3: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=400&q=80",

    // Project images
    backyard: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    deck: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?auto=format&fit=crop&w=800&q=80",
    fence: "https://images.unsplash.com/photo-1626248801379-51a0748e0dfa?auto=format&fit=crop&w=800&q=80",

    // Bathroom images - replacing the problematic one
    "bathroom,renovation,modern":
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",

    // Blog images - unique images for each blog post
    blog_landscaping_small_yard:
      "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=800&q=80",
    blog_winter_prep: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=800&q=80",
    blog_kitchen_renovation:
      "https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=800&q=80",
    blog_paint_selection:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
    blog_diy_repairs: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80",
    blog_native_plants: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=800&q=80",
    blog_featured: "https://images.unsplash.com/photo-1520013817300-1f4c1cb245ef?auto=format&fit=crop&w=800&q=80",

    // CTA and other sections
    cta: "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1920&q=80",
    about: "/images/cole-head-photo.png",
    quality: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
    winnipeg: "https://images.unsplash.com/photo-1609267281640-1feeee371a27?auto=format&fit=crop&w=1920&q=80",

    // Combined queries
    "handyman,landscaping,services":
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1920&q=80",
    "landscaping,garden,beautiful":
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1920&q=80",
  }

  const baseUrl =
    imageMap[category] || "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1920&q=80"
  return `${baseUrl.split("?")[0]}?auto=format&fit=crop&w=${width}&h=${height}&q=80`
}

// Pre-defined image categories for different sections
export const imageCategories = {
  hero: "hero",
  landscaping: "landscaping",
  handyman: "handyman",
  painting: "painting",
  renovation: "renovation",
  seasonal: "seasonal",
  team: "team",
  about: "about",
  quality: "quality",
  cta: "cta",
  winnipeg: "winnipeg",
  // Blog specific categories
  blog_landscaping_small_yard: "blog_landscaping_small_yard",
  blog_winter_prep: "blog_winter_prep",
  blog_kitchen_renovation: "blog_kitchen_renovation",
  blog_paint_selection: "blog_paint_selection",
  blog_diy_repairs: "blog_diy_repairs",
  blog_native_plants: "blog_native_plants",
  blog_featured: "blog_featured",
}

export const imageQueries = {
  landscaping: "landscaping",
  handyman: "handyman",
  painting: "painting",
  renovation: "renovation",
  seasonal: "seasonal",
  team: "team",
  about: "about",
  quality: "quality",
  cta: "cta",
  winnipeg: "winnipeg",
  "handyman,landscaping,services": "handyman,landscaping,services",
  "landscaping,garden,beautiful": "landscaping,garden,beautiful",
  "small,yard,garden,landscaping": "small,yard,garden,landscaping",
  "winter,snow,house,home": "winter,snow,house,home",
  "kitchen,renovation,budget": "kitchen,renovation,budget",
  "paint,colors,samples": "paint,colors,samples",
  "diy,tools,repair,home": "diy,tools,repair,home",
  "native,plants,garden,flowers": "native,plants,garden,flowers",
  "seasonal,home,maintenance,checklist": "seasonal,home,maintenance,checklist",
  "backyard,landscaping,garden,patio": "backyard,landscaping,garden,patio",
  "kitchen,renovation,modern": "kitchen,renovation,modern",
  "house,exterior,painting": "house,exterior,painting",
  "deck,wood,outdoor,patio": "deck,wood,outdoor,patio",
  "front,yard,landscaping,garden": "front,yard,landscaping,garden",
  "bathroom,renovation,modern": "bathroom,renovation,modern",
  "interior,painting,living,room": "interior,painting,living,room",
  "fence,wood,yard,privacy": "fence,wood,yard,privacy",
  "garden,flowers,path,landscaping": "garden,flowers,path,landscaping",
  "man,contractor,professional": "man,contractor,professional",
  "woman,landscape,designer": "woman,landscape,designer",
  "man,carpenter,craftsman": "man,carpenter,craftsman",
  "landscaping,quality,work": "landscaping,quality,work",
}

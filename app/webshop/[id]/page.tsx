"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProductPage({ params }: { params: { id: string } }) {
  // This would normally come from a database or API
  const products = {
    "1": {
      id: 1,
      name: "Studio Shoon Outfit",
      description: "Short-sleeved cropped sweater with front opening /mini flared skirt/scarf",
      date: "October 1st, 2024",
      material: "Jacquard (Cotton), Cashmere (Wool)",
      image: "/images/studio-shoon-outfit.webp", // Orange outfit
      imageAlt: "/images/studio-shoon-outfit-alt.webp", // Orange outfit alt
      price: "€89.99",
    },
    "2": {
      id: 2,
      name: "Team Thursday Outfit",
      description: "Long Sleeved Sweater, Long Skirt and Scarf",
      date: "October 1st, 2024",
      material: "100% Cashmere",
      image: "/images/team-thursday-outfit.webp", // Team Thursday outfit
      imageAlt: "/images/team-thursday-outfit-alt.webp", // Team Thursday outfit alt
      price: "€119.99",
    },
    "3": {
      id: 3,
      name: "Cypher Studio Outfit",
      description: "Sweater with front v-scarf",
      date: "October 1st, 2024",
      material: "Jacquard (Cotton), Cashmere (Wool)",
      image: "/images/cypher-studio-outfit.webp", // Checkered outfit
      imageAlt: "/images/cypher-studio-outfit-alt.webp", // Checkered outfit alt
      price: "€99.99",
    },
  }

  const product = products[params.id as keyof typeof products]

  // State for current image
  const [currentImage, setCurrentImage] = useState(product?.image || "")

  // Auto-toggle images like a GIF
  useEffect(() => {
    if (!product || !product.imageAlt) return

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === product.image ? product.imageAlt! : product.image))
    }, 2000) // Toggle every 2 seconds

    // Clean up interval on component unmount
    return () => clearInterval(interval)
  }, [product])

  if (!product) {
    return <div className="pt-16 text-green-900">Product not found</div>
  }

  return (
    <div className="pt-16">
      <div className="bg-yellow-500 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center mb-8">
            <Link href="/webshop" className="text-green-900 hover:text-green-700 mr-4">
              <ChevronLeft className="h-5 w-5" />
            </Link>
            <div className="bg-yellow-600/30 rounded-full px-4 py-2 flex items-center space-x-4">
              <Link href="/about" className="text-green-900 hover:text-green-700 transition-colors px-2 font-serif">
                ABOUT KNIT+
              </Link>
              <Link
                href="/how-does-it-work"
                className="text-green-900 hover:text-green-700 transition-colors px-2 font-serif"
              >
                HOW DOES IT WORK?
              </Link>
              <Link href="/webshop" className="text-green-900 font-bold transition-colors px-2 font-serif">
                WEBSHOP
              </Link>
              <Link href="/contact" className="text-green-900 hover:text-green-700 transition-colors px-2 font-serif">
                CONTACT
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 relative">
              <div className="relative aspect-[3/4] bg-yellow-600/30 overflow-hidden">
                <Image
                  src={currentImage || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-opacity duration-1000"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {product.imageAlt && (
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-1">
                    <div
                      className={`w-2 h-2 rounded-full ${currentImage === product.image ? "bg-green-900" : "bg-green-800/50"}`}
                    ></div>
                    <div
                      className={`w-2 h-2 rounded-full ${currentImage === product.imageAlt ? "bg-green-900" : "bg-green-800/50"}`}
                    ></div>
                  </div>
                )}
              </div>
            </div>
            <div className="md:w-1/2">
              <h1 className="text-2xl font-bold text-green-900 mb-2 font-serif">{product.name}</h1>
              <p className="text-green-900 mb-6">{product.description}</p>

              <div className="space-y-2 mb-8">
                <p className="text-green-900">
                  <span className="text-green-800">Date of Creation:</span> {product.date}
                </p>
                <p className="text-green-900">
                  <span className="text-green-800">Material:</span> {product.material}
                </p>
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <select
                    className="w-full appearance-none bg-yellow-600/30 text-green-900 py-2 px-4 pr-8 rounded cursor-pointer font-serif"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Choose Rental Period
                    </option>
                    <option value="1-week">1 Week</option>
                    <option value="2-weeks">2 Weeks</option>
                    <option value="1-month">1 Month</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <ChevronLeft className="h-4 w-4 text-green-900 transform rotate-90" />
                  </div>
                </div>

                <Button className="w-full bg-green-900 hover:bg-green-800 text-yellow-500 py-2 rounded transition font-serif">
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

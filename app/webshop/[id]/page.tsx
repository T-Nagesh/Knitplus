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
    return <div className="pt-16 text-white">Product not found</div>
  }

  return (
    <div className="pt-16">
      <div className="bg-green-900 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center mb-8">
            <Link href="/webshop" className="text-white hover:text-yellow-400 mr-4">
              <ChevronLeft className="h-5 w-5" />
            </Link>
            <div className="bg-green-800 rounded-full px-4 py-2 flex items-center space-x-4">
              <Link href="/about" className="text-white hover:text-yellow-400 transition-colors px-2 font-serif">
                ABOUT KNIT+
              </Link>
              <Link
                href="/how-does-it-work"
                className="text-white hover:text-yellow-400 transition-colors px-2 font-serif"
              >
                HOW DOES IT WORK?
              </Link>
              <Link href="/webshop" className="text-white font-bold transition-colors px-2 font-serif">
                WEBSHOP
              </Link>
              <Link href="/contact" className="text-white hover:text-yellow-400 transition-colors px-2 font-serif">
                CONTACT
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 relative">
              <div className="relative aspect-[3/4] bg-green-800 overflow-hidden">
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
                      className={`w-2 h-2 rounded-full ${currentImage === product.image ? "bg-white" : "bg-gray-500"}`}
                    ></div>
                    <div
                      className={`w-2 h-2 rounded-full ${currentImage === product.imageAlt ? "bg-white" : "bg-gray-500"}`}
                    ></div>
                  </div>
                )}
              </div>
            </div>
            <div className="md:w-1/2">
              <h1 className="text-2xl font-bold text-white mb-2 font-serif">{product.name}</h1>
              <p className="text-white mb-6">{product.description}</p>

              <div className="space-y-2 mb-8">
                <p className="text-white">
                  <span className="text-gray-400">Date of Creation:</span> {product.date}
                </p>
                <p className="text-white">
                  <span className="text-gray-400">Material:</span> {product.material}
                </p>
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <select
                    className="w-full appearance-none bg-white text-green-900 py-2 px-4 pr-8 rounded cursor-pointer font-serif"
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

                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-green-900 py-2 rounded transition font-serif">
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-green-900 text-white py-12 border-t border-green-800 mt-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex justify-center md:justify-start">
                <div className="w-40">
                  <Image src="/images/knit-logo.png" alt="KNIT+ Logo" width={160} height={60} />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4 font-serif">Get in Touch</h3>
                <p className="mb-2">
                  <span className="text-gray-400">Phone:</span> (480) 555-0123
                </p>
                <p className="mb-2">
                  <span className="text-gray-400">Address:</span> Hogeschool van Amsterdam, TTH
                </p>
                <p className="mb-2">
                  <span className="text-gray-400">E-mail:</span> knit+official@hva.nl
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4 font-serif">Company Info</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about" className="text-white hover:text-yellow-400 transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-does-it-work" className="text-white hover:text-yellow-400 transition-colors">
                      How does it work?
                    </Link>
                  </li>
                  <li>
                    <Link href="/webshop" className="text-white hover:text-yellow-400 transition-colors">
                      Webshop
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy" className="text-white hover:text-yellow-400 transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

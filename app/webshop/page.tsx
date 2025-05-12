"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { toast } from "@/components/ui/use-toast"
import { LoadingRibbon } from "@/components/loading-ribbon"

export default function WebshopPage() {
  // Sample product data
  const products = [
    {
      id: 1,
      name: "Studio Shoon Outfit",
      description: "Short-sleeved cropped sweater with front opening /mini flared skirt/scarf",
      date: "October 1st, 2024",
      material: "Jacquard (Cotton), Cashmere (Wool)",
      image: "/images/studio-shoon-outfit.webp", // Orange outfit
      imageAlt: "/images/studio-shoon-outfit-alt.webp", // Orange outfit alt
      price: "€89.99",
    },
    {
      id: 2,
      name: "Team Thursday Outfit",
      description: "Long Sleeved Sweater, Long Skirt and Scarf",
      date: "October 1st, 2024",
      material: "100% Cashmere",
      image: "/images/team-thursday-outfit.webp", // Team Thursday outfit
      imageAlt: "/images/team-thursday-outfit-alt.webp", // Team Thursday outfit alt
      price: "€119.99",
    },
    {
      id: 3,
      name: "Cypher Studio Outfit",
      description: "Sweater with front v-scarf",
      date: "October 1st, 2024",
      material: "Jacquard (Cotton), Cashmere (Wool)",
      image: "/images/cypher-studio-outfit.webp", // Checkered outfit
      imageAlt: "/images/cypher-studio-outfit-alt.webp", // Checkered outfit alt
      price: "€99.99",
    },
  ]

  // State for selected rental periods
  const [selectedRentalPeriods, setSelectedRentalPeriods] = useState<Record<number, string>>({})

  // State for current image view
  const [currentImages, setCurrentImages] = useState<Record<number, string>>({})

  // Loading state
  const [isLoading, setIsLoading] = useState(true)

  // Get cart functions from context
  const { addToCart } = useCart()

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  // Auto-toggle images like a GIF
  useEffect(() => {
    // Only set up the interval if products have alternate images
    const productsWithAltImages = products.filter((product) => product.imageAlt)

    if (productsWithAltImages.length === 0) return

    const interval = setInterval(() => {
      productsWithAltImages.forEach((product) => {
        setCurrentImages((prev) => {
          const currentImage = prev[product.id] || product.image
          const nextImage = currentImage === product.image ? product.imageAlt! : product.image

          return {
            ...prev,
            [product.id]: nextImage,
          }
        })
      })
    }, 2000) // Toggle every 2 seconds

    // Clean up interval on component unmount
    return () => clearInterval(interval)
  }, [products])

  // Handle rental period selection
  const handleRentalPeriodChange = (productId: number, period: string) => {
    setSelectedRentalPeriods({
      ...selectedRentalPeriods,
      [productId]: period,
    })
  }

  // Get current image to display
  const getDisplayImage = (product: any) => {
    if (!product.imageAlt) return product.image
    return currentImages[product.id] || product.image
  }

  // Handle add to cart
  const handleAddToCart = (product: any) => {
    const rentalPeriod = selectedRentalPeriods[product.id] || "1 Week"

    addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      rentalPeriod: rentalPeriod,
      quantity: 1,
    })

    // Show success toast
    toast({
      title: "Added to cart",
      description: `${product.name} (${rentalPeriod}) has been added to your cart.`,
      duration: 3000,
    })
  }

  return (
    <div className="pt-16">
      <div className="bg-green-900 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center mb-8">
            <Link href="/" className="text-white hover:text-yellow-400">
              <div className="w-5 h-5">
                <Image src="/icons/chevron-left.svg" alt="Back" width={20} height={20} />
              </div>
              <span className="sr-only">Back to home</span>
            </Link>
            <h1 className="text-2xl font-bold text-white ml-4 font-serif">Webshop</h1>
          </div>

          {isLoading ? (
            <div className="py-20">
              <LoadingRibbon className="mb-8" />
              <p className="text-center text-white">Loading our sustainable collection...</p>
            </div>
          ) : (
            <div className="space-y-16">
              {products.map((product) => (
                <div key={product.id} className="flex flex-col md:flex-row gap-8 ribbon-card">
                  <div className="md:w-1/2 relative">
                    <div className="relative aspect-[3/4] bg-green-800 overflow-hidden">
                      <Image
                        src={getDisplayImage(product) || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover transition-opacity duration-1000"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />

                      {product.imageAlt && (
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-1">
                          <div
                            className={`w-2 h-2 rounded-full ${getDisplayImage(product) === product.image ? "bg-white" : "bg-gray-500"}`}
                          ></div>
                          <div
                            className={`w-2 h-2 rounded-full ${getDisplayImage(product) === product.imageAlt ? "bg-white" : "bg-gray-500"}`}
                          ></div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <h2 className="text-2xl font-bold text-white mb-2 font-serif">{product.name}</h2>
                    <p className="text-white mb-6">{product.description}</p>

                    <div className="space-y-2 mb-8">
                      <p className="text-white">
                        <span className="text-gray-400">Date of Creation:</span> {product.date}
                      </p>
                      <p className="text-white">
                        <span className="text-gray-400">Material:</span> {product.material}
                      </p>
                      <p className="text-white">
                        <span className="text-gray-400">Price:</span> {product.price}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="relative ribbon-input">
                        <select
                          className="w-full appearance-none bg-white text-green-900 py-2 px-4 pr-8 rounded cursor-pointer font-serif"
                          value={selectedRentalPeriods[product.id] || ""}
                          onChange={(e) => handleRentalPeriodChange(product.id, e.target.value)}
                        >
                          <option value="" disabled>
                            Choose Rental Period
                          </option>
                          <option value="1 Week">1 Week</option>
                          <option value="2 Weeks">2 Weeks</option>
                          <option value="1 Month">1 Month</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <ChevronRight className="h-4 w-4 text-green-900 transform rotate-90" />
                        </div>
                      </div>

                      <Button
                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-green-900 py-2 rounded transition flex items-center justify-center font-serif"
                        onClick={() => handleAddToCart(product)}
                      >
                        <ShoppingCart className="mr-2 h-5 w-5" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

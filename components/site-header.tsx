"use client"

import { useState, memo } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ShoppingCart } from "lucide-react"
import { CartDropdown } from "@/components/cart-dropdown"
import { useCart } from "@/context/cart-context"

// Memoize the header to prevent unnecessary re-renders
const SiteHeader = memo(function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { cartCount } = useCart()

  return (
    <header className="fixed w-full z-40 top-0">
      {/* Static ribbon pattern */}
      <div className="w-full h-6 ribbon-pattern"></div>

      {/* Main header content */}
      <div className="bg-yellow-500/90 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center group">
              <div className="relative overflow-hidden">
                <Image src="/images/knit-logo.png" alt="KNIT+ Logo" width={100} height={40} priority />
                <div className="absolute bottom-0 left-0 w-full h-0.5 ribbon-pattern transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <nav className="mr-4">
                <div className="bg-yellow-600/30 rounded-full px-4 py-2 flex items-center space-x-4">
                  <Link
                    href="/about"
                    className="text-green-900 hover:text-green-700 transition-colors px-2 font-serif ribbon-border"
                  >
                    ABOUT KNIT+
                  </Link>
                  <Link
                    href="/how-does-it-work"
                    className="text-green-900 hover:text-green-700 transition-colors px-2 font-serif ribbon-border"
                  >
                    HOW DOES IT WORK?
                  </Link>
                  <Link
                    href="/webshop"
                    className="text-green-900 hover:text-green-700 transition-colors px-2 font-serif ribbon-border"
                  >
                    WEBSHOP
                  </Link>
                  <Link
                    href="/contact"
                    className="text-green-900 hover:text-green-700 transition-colors px-2 font-serif ribbon-border"
                  >
                    CONTACT
                  </Link>
                </div>
              </nav>

              {/* Cart Icon */}
              <button
                className="relative p-2 text-green-900 hover:text-green-700 transition-colors ribbon-focus"
                onClick={() => setIsCartOpen(!isCartOpen)}
              >
                <ShoppingCart size={24} />
                {cartCount() > 0 && (
                  <span className="absolute top-0 right-0 bg-green-900 text-yellow-500 text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount()}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Menu and Cart Icons */}
            <div className="flex items-center md:hidden">
              <button
                className="relative p-2 text-green-900 hover:text-green-700 transition-colors mr-2 ribbon-focus"
                onClick={() => setIsCartOpen(!isCartOpen)}
              >
                <ShoppingCart size={24} />
                {cartCount() > 0 && (
                  <span className="absolute top-0 right-0 bg-green-900 text-yellow-500 text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount()}
                  </span>
                )}
              </button>

              <button className="text-green-900 ribbon-focus" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-yellow-500">
          <nav className="flex flex-col px-4 py-4">
            <Link
              href="/about"
              className="text-green-900 py-3 border-b border-yellow-600/30 hover:text-green-700 transition-colors font-serif ribbon-border"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT KNIT+
            </Link>
            <Link
              href="/how-does-it-work"
              className="text-green-900 py-3 border-b border-yellow-600/30 hover:text-green-700 transition-colors font-serif ribbon-border"
              onClick={() => setIsMenuOpen(false)}
            >
              HOW DOES IT WORK?
            </Link>
            <Link
              href="/webshop"
              className="text-green-900 py-3 border-b border-yellow-600/30 hover:text-green-700 transition-colors font-serif ribbon-border"
              onClick={() => setIsMenuOpen(false)}
            >
              WEBSHOP
            </Link>
            <Link
              href="/contact"
              className="text-green-900 py-3 border-b border-yellow-600/30 hover:text-green-700 transition-colors font-serif ribbon-border"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </Link>
          </nav>
        </div>
      )}

      {/* Cart Dropdown */}
      {isCartOpen && <CartDropdown onClose={() => setIsCartOpen(false)} />}
    </header>
  )
})

export { SiteHeader }

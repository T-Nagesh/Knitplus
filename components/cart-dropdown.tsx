"use client"

import Link from "next/link"
import Image from "next/image"
import { X, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"

interface CartDropdownProps {
  onClose: () => void
}

export function CartDropdown({ onClose }: CartDropdownProps) {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart()

  return (
    <div className="absolute right-0 top-16 w-full md:w-96 bg-green-900 border border-green-800 shadow-lg z-50">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-white font-serif">Your Cart</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={20} />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="py-8 text-center text-gray-400">
            <p>Your cart is empty</p>
            <Link href="/webshop" className="text-yellow-400 hover:underline mt-2 inline-block" onClick={onClose}>
              Browse our collection
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-4 max-h-80 overflow-y-auto">
              {cartItems.map((item) => (
                <div key={item.id} className="flex border-b border-green-800 pb-4">
                  <div className="w-20 h-20 relative flex-shrink-0">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="ml-4 flex-grow">
                    <h4 className="text-white font-medium font-serif">{item.name}</h4>
                    <p className="text-gray-400 text-sm">Rental: {item.rentalPeriod}</p>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center">
                        <button
                          className="text-gray-400 hover:text-white"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="mx-2 text-white">{item.quantity}</span>
                        <button
                          className="text-gray-400 hover:text-white"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      <span className="text-white">{item.price}</span>
                      <button className="text-gray-400 hover:text-red-500" onClick={() => removeFromCart(item.id)}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-green-800">
              <div className="flex justify-between mb-4">
                <span className="text-white">Total:</span>
                <span className="text-white font-bold">€{cartTotal()}</span>
              </div>

              <div className="space-y-2">
                <Button
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-green-900 font-serif"
                  onClick={onClose}
                >
                  <Link href="/checkout">Checkout</Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white hover:text-green-900 font-serif"
                  onClick={onClose}
                >
                  Continue Shopping
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

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
    <div className="absolute right-0 top-16 w-full md:w-96 bg-yellow-500 border border-yellow-600/30 shadow-lg z-50">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-green-900 font-serif">Your Cart</h3>
          <button onClick={onClose} className="text-green-800 hover:text-green-900">
            <X size={20} />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="py-8 text-center text-green-800">
            <p>Your cart is empty</p>
            <Link href="/webshop" className="text-green-900 hover:underline mt-2 inline-block" onClick={onClose}>
              Browse our collection
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-4 max-h-80 overflow-y-auto">
              {cartItems.map((item) => (
                <div key={item.id} className="flex border-b border-yellow-600/30 pb-4">
                  <div className="w-20 h-20 relative flex-shrink-0">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="ml-4 flex-grow">
                    <h4 className="text-green-900 font-medium font-serif">{item.name}</h4>
                    <p className="text-green-800 text-sm">Rental: {item.rentalPeriod}</p>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center">
                        <button
                          className="text-green-800 hover:text-green-900"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="mx-2 text-green-900">{item.quantity}</span>
                        <button
                          className="text-green-800 hover:text-green-900"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      <span className="text-green-900">{item.price}</span>
                      <button className="text-green-800 hover:text-red-500" onClick={() => removeFromCart(item.id)}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-yellow-600/30">
              <div className="flex justify-between mb-4">
                <span className="text-green-900">Total:</span>
                <span className="text-green-900 font-bold">€{cartTotal()}</span>
              </div>

              <div className="space-y-2">
                <Button className="w-full bg-green-900 hover:bg-green-800 text-yellow-500 font-serif" onClick={onClose}>
                  <Link href="/checkout">Checkout</Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-green-900 text-green-900 hover:bg-yellow-600/30 font-serif"
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

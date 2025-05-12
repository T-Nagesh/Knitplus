import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export default function CheckoutPage() {
  return (
    <div className="pt-16">
      <div className="bg-black min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center mb-8">
            <Link href="/webshop" className="text-white hover:text-emerald-400 mr-4">
              <ChevronLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-2xl font-bold text-white">Checkout</h1>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Personal Details */}
            <div className="md:col-span-2">
              <div className="bg-zinc-900 rounded-lg p-6 mb-6">
                <h2 className="text-xl font-bold text-white mb-4">Personal Details</h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 mb-2">First Name *</label>
                    <input
                      type="text"
                      className="w-full bg-black border border-zinc-800 text-white p-2 rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Last Name *</label>
                    <input
                      type="text"
                      className="w-full bg-black border border-zinc-800 text-white p-2 rounded"
                      required
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-gray-400 mb-2">Email Address *</label>
                  <input
                    type="email"
                    className="w-full bg-black border border-zinc-800 text-white p-2 rounded"
                    required
                  />
                </div>

                <div className="mt-4">
                  <label className="block text-gray-400 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    className="w-full bg-black border border-zinc-800 text-white p-2 rounded"
                    required
                  />
                </div>
              </div>

              {/* Address Information */}
              <div className="bg-zinc-900 rounded-lg p-6 mb-6">
                <h2 className="text-xl font-bold text-white mb-4">Address Information</h2>

                <div className="mt-4">
                  <label className="block text-gray-400 mb-2">Street Address *</label>
                  <input
                    type="text"
                    className="w-full bg-black border border-zinc-800 text-white p-2 rounded"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-gray-400 mb-2">City *</label>
                    <input
                      type="text"
                      className="w-full bg-black border border-zinc-800 text-white p-2 rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Postal Code *</label>
                    <input
                      type="text"
                      className="w-full bg-black border border-zinc-800 text-white p-2 rounded"
                      required
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-gray-400 mb-2">Country *</label>
                  <select className="w-full bg-black border border-zinc-800 text-white p-2 rounded" required>
                    <option value="Netherlands">Netherlands</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Germany">Germany</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Rental Information */}
              <div className="bg-zinc-900 rounded-lg p-6 mb-6">
                <h2 className="text-xl font-bold text-white mb-4">Rental Information</h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 mb-2">Pickup Date *</label>
                    <input
                      type="date"
                      className="w-full bg-black border border-zinc-800 text-white p-2 rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Return Date *</label>
                    <input
                      type="date"
                      className="w-full bg-black border border-zinc-800 text-white p-2 rounded"
                      required
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-gray-400 mb-2">Pickup Location *</label>
                  <select className="w-full bg-black border border-zinc-800 text-white p-2 rounded" required>
                    <option>Amsterdam University Hub Store</option>
                    <option>AMFI Fashion Institute</option>
                  </select>
                </div>

                <div className="mt-4">
                  <label className="block text-gray-400 mb-2">Special Instructions (Optional)</label>
                  <textarea
                    className="w-full bg-black border border-zinc-800 text-white p-2 rounded h-24"
                    placeholder="Any special requests or notes for your rental"
                  ></textarea>
                </div>
              </div>

              {/* ID Verification */}
              <div className="bg-zinc-900 rounded-lg p-6 mb-6">
                <h2 className="text-xl font-bold text-white mb-4">ID Verification</h2>
                <p className="text-gray-400 mb-4">
                  For security purposes, we require a valid ID for all rentals. This will be verified at pickup.
                </p>

                <div className="mt-4">
                  <label className="block text-gray-400 mb-2">ID Type *</label>
                  <select className="w-full bg-black border border-zinc-800 text-white p-2 rounded" required>
                    <option>Passport</option>
                    <option>Driver's License</option>
                    <option>National ID Card</option>
                  </select>
                </div>

                <div className="mt-4">
                  <label className="block text-gray-400 mb-2">ID Number *</label>
                  <input
                    type="text"
                    className="w-full bg-black border border-zinc-800 text-white p-2 rounded"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="md:col-span-1">
              <div className="bg-zinc-900 rounded-lg p-6 sticky top-24">
                <h2 className="text-xl font-bold text-white mb-4">Order Summary</h2>

                <div className="space-y-4 max-h-60 overflow-y-auto">
                  <div className="flex border-b border-zinc-800 pb-4">
                    <div className="w-20 h-20 relative flex-shrink-0">
                      <Image
                        src="/images/studio-shoon-outfit.jpg"
                        alt="Studio Shoon Outfit"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="ml-4 flex-grow">
                      <h4 className="text-white font-medium">Studio Shoon Outfit</h4>
                      <p className="text-gray-400 text-sm">Rental: 1 Week</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-400">Qty: 1</span>
                        <span className="text-white">€89.99</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-zinc-800">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Subtotal:</span>
                    <span className="text-white">€89.99</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Rental Deposit:</span>
                    <span className="text-white">€50.00</span>
                    <span className="sr-only">(Refundable upon return)</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span className="text-white">Total:</span>
                    <span className="text-emerald-400">€139.99</span>
                  </div>
                </div>

                <div className="mt-4 text-sm text-gray-400">
                  <p className="mb-2">
                    * The deposit amount is fully refundable upon return of the item(s) in their original condition.
                  </p>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-bold text-white mb-4">Payment Method</h3>

                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="radio" id="card" name="payment" className="mr-2" defaultChecked />
                      <label htmlFor="card" className="text-white">
                        Credit/Debit Card
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="ideal" name="payment" className="mr-2" />
                      <label htmlFor="ideal" className="text-white">
                        iDEAL
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="paypal" name="payment" className="mr-2" />
                      <label htmlFor="paypal" className="text-white">
                        PayPal
                      </label>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="flex items-start mb-4">
                      <input type="checkbox" id="terms" className="mt-1 mr-2" required />
                      <label htmlFor="terms" className="text-gray-400 text-sm">
                        I agree to the{" "}
                        <Link href="/terms" className="text-emerald-400 hover:underline">
                          Terms and Conditions
                        </Link>{" "}
                        and understand the deposit policy.
                      </label>
                    </div>

                    <Button className="w-full bg-emerald-500 hover:bg-emerald-600">Complete Rental</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

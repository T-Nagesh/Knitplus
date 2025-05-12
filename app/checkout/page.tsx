import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export default function CheckoutPage() {
  return (
    <div className="pt-16">
      <div className="bg-yellow-500 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center mb-8">
            <Link href="/webshop" className="text-green-900 hover:text-green-700 mr-4">
              <ChevronLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-2xl font-bold text-green-900">Checkout</h1>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Personal Details */}
            <div className="md:col-span-2">
              <div className="bg-yellow-600/30 rounded-lg p-6 mb-6">
                <h2 className="text-xl font-bold text-green-900 mb-4">Personal Details</h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-green-800 mb-2">First Name *</label>
                    <input
                      type="text"
                      className="w-full bg-yellow-500 border border-yellow-600/50 text-green-900 p-2 rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-green-800 mb-2">Last Name *</label>
                    <input
                      type="text"
                      className="w-full bg-yellow-500 border border-yellow-600/50 text-green-900 p-2 rounded"
                      required
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-green-800 mb-2">Email Address *</label>
                  <input
                    type="email"
                    className="w-full bg-yellow-500 border border-yellow-600/50 text-green-900 p-2 rounded"
                    required
                  />
                </div>

                <div className="mt-4">
                  <label className="block text-green-800 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    className="w-full bg-yellow-500 border border-yellow-600/50 text-green-900 p-2 rounded"
                    required
                  />
                </div>
              </div>

              {/* Address Information */}
              <div className="bg-yellow-600/30 rounded-lg p-6 mb-6">
                <h2 className="text-xl font-bold text-green-900 mb-4">Address Information</h2>

                <div className="mt-4">
                  <label className="block text-green-800 mb-2">Street Address *</label>
                  <input
                    type="text"
                    className="w-full bg-yellow-500 border border-yellow-600/50 text-green-900 p-2 rounded"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-green-800 mb-2">City *</label>
                    <input
                      type="text"
                      className="w-full bg-yellow-500 border border-yellow-600/50 text-green-900 p-2 rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-green-800 mb-2">Postal Code *</label>
                    <input
                      type="text"
                      className="w-full bg-yellow-500 border border-yellow-600/50 text-green-900 p-2 rounded"
                      required
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-green-800 mb-2">Country *</label>
                  <select
                    className="w-full bg-yellow-500 border border-yellow-600/50 text-green-900 p-2 rounded"
                    required
                  >
                    <option value="Netherlands">Netherlands</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Germany">Germany</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Rental Information */}
              <div className="bg-yellow-600/30 rounded-lg p-6 mb-6">
                <h2 className="text-xl font-bold text-green-900 mb-4">Rental Information</h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-green-800 mb-2">Pickup Date *</label>
                    <input
                      type="date"
                      className="w-full bg-yellow-500 border border-yellow-600/50 text-green-900 p-2 rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-green-800 mb-2">Return Date *</label>
                    <input
                      type="date"
                      className="w-full bg-yellow-500 border border-yellow-600/50 text-green-900 p-2 rounded"
                      required
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-green-800 mb-2">Pickup Location *</label>
                  <select
                    className="w-full bg-yellow-500 border border-yellow-600/50 text-green-900 p-2 rounded"
                    required
                  >
                    <option>Amsterdam University Hub Store</option>
                    <option>AMFI Fashion Institute</option>
                  </select>
                </div>

                <div className="mt-4">
                  <label className="block text-green-800 mb-2">Special Instructions (Optional)</label>
                  <textarea
                    className="w-full bg-yellow-500 border border-yellow-600/50 text-green-900 p-2 rounded h-24"
                    placeholder="Any special requests or notes for your rental"
                  ></textarea>
                </div>
              </div>

              {/* ID Verification */}
              <div className="bg-yellow-600/30 rounded-lg p-6 mb-6">
                <h2 className="text-xl font-bold text-green-900 mb-4">ID Verification</h2>
                <p className="text-green-800 mb-4">
                  For security purposes, we require a valid ID for all rentals. This will be verified at pickup.
                </p>

                <div className="mt-4">
                  <label className="block text-green-800 mb-2">ID Type *</label>
                  <select
                    className="w-full bg-yellow-500 border border-yellow-600/50 text-green-900 p-2 rounded"
                    required
                  >
                    <option>Passport</option>
                    <option>Driver's License</option>
                    <option>National ID Card</option>
                  </select>
                </div>

                <div className="mt-4">
                  <label className="block text-green-800 mb-2">ID Number *</label>
                  <input
                    type="text"
                    className="w-full bg-yellow-500 border border-yellow-600/50 text-green-900 p-2 rounded"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="md:col-span-1">
              <div className="bg-yellow-600/30 rounded-lg p-6 sticky top-24">
                <h2 className="text-xl font-bold text-green-900 mb-4">Order Summary</h2>

                <div className="space-y-4 max-h-60 overflow-y-auto">
                  <div className="flex border-b border-yellow-600/50 pb-4">
                    <div className="w-20 h-20 relative flex-shrink-0">
                      <Image
                        src="/images/studio-shoon-outfit.jpg"
                        alt="Studio Shoon Outfit"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="ml-4 flex-grow">
                      <h4 className="text-green-900 font-medium">Studio Shoon Outfit</h4>
                      <p className="text-green-800 text-sm">Rental: 1 Week</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-green-800">Qty: 1</span>
                        <span className="text-green-900">€89.99</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-yellow-600/50">
                  <div className="flex justify-between mb-2">
                    <span className="text-green-800">Subtotal:</span>
                    <span className="text-green-900">€89.99</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-green-800">Rental Deposit:</span>
                    <span className="text-green-900">€50.00</span>
                    <span className="sr-only">(Refundable upon return)</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span className="text-green-900">Total:</span>
                    <span className="text-green-900">€139.99</span>
                  </div>
                </div>

                <div className="mt-4 text-sm text-green-800">
                  <p className="mb-2">
                    * The deposit amount is fully refundable upon return of the item(s) in their original condition.
                  </p>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-bold text-green-900 mb-4">Payment Method</h3>

                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="radio" id="card" name="payment" className="mr-2" defaultChecked />
                      <label htmlFor="card" className="text-green-900">
                        Credit/Debit Card
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="ideal" name="payment" className="mr-2" />
                      <label htmlFor="ideal" className="text-green-900">
                        iDEAL
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="paypal" name="payment" className="mr-2" />
                      <label htmlFor="paypal" className="text-green-900">
                        PayPal
                      </label>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="flex items-start mb-4">
                      <input type="checkbox" id="terms" className="mt-1 mr-2" required />
                      <label htmlFor="terms" className="text-green-800 text-sm">
                        I agree to the{" "}
                        <Link href="/terms" className="text-green-900 hover:underline">
                          Terms and Conditions
                        </Link>{" "}
                        and understand the deposit policy.
                      </label>
                    </div>

                    <Button className="w-full bg-green-900 hover:bg-green-800 text-yellow-500">Complete Rental</Button>
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

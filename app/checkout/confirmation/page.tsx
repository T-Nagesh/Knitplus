import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function ConfirmationPage() {
  return (
    <div className="pt-16">
      <div className="bg-black min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto bg-zinc-900 rounded-lg p-8 text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle className="h-16 w-16 text-emerald-500" />
            </div>

            <h1 className="text-3xl font-bold text-white mb-4">Rental Confirmed!</h1>

            <p className="text-gray-400 mb-6">
              Thank you for your rental. Your order has been confirmed and is being processed.
            </p>

            <div className="bg-black p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold text-white mb-4">Order Details</h2>

              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Order Number:</span>
                <span className="text-white">KP-2025-0512</span>
              </div>

              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Pickup Date:</span>
                <span className="text-white">May 15, 2025</span>
              </div>

              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Return Date:</span>
                <span className="text-white">May 22, 2025</span>
              </div>

              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Pickup Location:</span>
                <span className="text-white">Amsterdam University Hub Store</span>
              </div>

              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Total Amount:</span>
                <span className="text-white">€139.99</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Deposit (Refundable):</span>
                <span className="text-emerald-400">€50.00</span>
              </div>
            </div>

            <p className="text-gray-400 mb-8">
              A confirmation email has been sent to your email address with all the details. Please bring your ID for
              verification when picking up your items.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-emerald-500 hover:bg-emerald-600">
                <Link href="/account/rentals">View My Rentals</Link>
              </Button>

              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                <Link href="/">Return to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

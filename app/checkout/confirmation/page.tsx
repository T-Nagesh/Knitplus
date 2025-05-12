import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function ConfirmationPage() {
  return (
    <div className="pt-16">
      <div className="bg-yellow-500 min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto bg-yellow-600/30 rounded-lg p-8 text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle className="h-16 w-16 text-green-900" />
            </div>

            <h1 className="text-3xl font-bold text-green-900 mb-4">Rental Confirmed!</h1>

            <p className="text-green-800 mb-6">
              Thank you for your rental. Your order has been confirmed and is being processed.
            </p>

            <div className="bg-yellow-500 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold text-green-900 mb-4">Order Details</h2>

              <div className="flex justify-between mb-2">
                <span className="text-green-800">Order Number:</span>
                <span className="text-green-900">KP-2025-0512</span>
              </div>

              <div className="flex justify-between mb-2">
                <span className="text-green-800">Pickup Date:</span>
                <span className="text-green-900">May 15, 2025</span>
              </div>

              <div className="flex justify-between mb-2">
                <span className="text-green-800">Return Date:</span>
                <span className="text-green-900">May 22, 2025</span>
              </div>

              <div className="flex justify-between mb-2">
                <span className="text-green-800">Pickup Location:</span>
                <span className="text-green-900">Amsterdam University Hub Store</span>
              </div>

              <div className="flex justify-between mb-2">
                <span className="text-green-800">Total Amount:</span>
                <span className="text-green-900">€139.99</span>
              </div>

              <div className="flex justify-between">
                <span className="text-green-800">Deposit (Refundable):</span>
                <span className="text-green-900">€50.00</span>
              </div>
            </div>

            <p className="text-green-800 mb-8">
              A confirmation email has been sent to your email address with all the details. Please bring your ID for
              verification when picking up your items.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-green-900 hover:bg-green-800 text-yellow-500">
                <Link href="/account/rentals">View My Rentals</Link>
              </Button>

              <Button variant="outline" className="border-green-900 text-green-900 hover:bg-yellow-600/30">
                <Link href="/">Return to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

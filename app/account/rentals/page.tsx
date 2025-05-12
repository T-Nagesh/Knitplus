import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Clock, CheckCircle, RotateCcw } from "lucide-react"

export default function RentalsPage() {
  // Sample rental data
  const rentals = [
    {
      id: "KP-2025-0512",
      product: "Studio Shoon Outfit",
      image: "/images/studio-shoon-outfit.jpg",
      pickupDate: "May 15, 2025",
      returnDate: "May 22, 2025",
      status: "active",
      deposit: "€50.00",
      total: "€139.99",
    },
    {
      id: "KP-2025-0498",
      product: "Team Thursday Outfit",
      image: "/images/team-thursday-outfit.jpg",
      pickupDate: "April 28, 2025",
      returnDate: "May 5, 2025",
      status: "completed",
      deposit: "€50.00",
      total: "€129.99",
    },
  ]

  return (
    <div className="pt-16">
      <div className="bg-yellow-500 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center mb-8">
            <Link href="/account" className="text-green-900 hover:text-green-700 mr-4">
              <ChevronLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-2xl font-bold text-green-900">My Rentals</h1>
          </div>

          <div className="space-y-6">
            {rentals.map((rental) => (
              <div key={rental.id} className="bg-yellow-600/30 rounded-lg p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="relative aspect-square">
                      <Image
                        src={rental.image || "/placeholder.svg"}
                        alt={rental.product}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                  </div>

                  <div className="md:w-3/4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-xl font-bold text-green-900">{rental.product}</h2>
                        <p className="text-green-800">Order #{rental.id}</p>
                      </div>

                      <div className="flex items-center">
                        {rental.status === "active" ? (
                          <div className="flex items-center text-green-900">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>Active Rental</span>
                          </div>
                        ) : (
                          <div className="flex items-center text-green-800">
                            <CheckCircle className="h-4 w-4 mr-1" />
                            <span>Completed</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <p className="text-green-800">Pickup Date</p>
                        <p className="text-green-900">{rental.pickupDate}</p>
                      </div>
                      <div>
                        <p className="text-green-800">Return Date</p>
                        <p className="text-green-900">{rental.returnDate}</p>
                      </div>
                      <div>
                        <p className="text-green-800">Deposit (Refundable)</p>
                        <p className="text-green-900">{rental.deposit}</p>
                      </div>
                      <div>
                        <p className="text-green-800">Total Amount</p>
                        <p className="text-green-900">{rental.total}</p>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-4">
                      {rental.status === "active" && (
                        <>
                          <Button className="bg-green-900 hover:bg-green-800 text-yellow-500">
                            <RotateCcw className="h-4 w-4 mr-2" />
                            Extend Rental
                          </Button>
                          <Button variant="outline" className="border-green-900 text-green-900 hover:bg-yellow-600/30">
                            Report Issue
                          </Button>
                        </>
                      )}

                      {rental.status === "completed" && (
                        <Button className="bg-green-900 hover:bg-green-800 text-yellow-500">Rent Again</Button>
                      )}

                      <Link
                        href={`/account/rentals/${rental.id}`}
                        className="text-green-900 hover:underline flex items-center"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

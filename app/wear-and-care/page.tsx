import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function WearAndCarePage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <Link href="/" className="text-white hover:text-emerald-400">
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Back to home</span>
            </Link>
            <h1 className="text-2xl font-bold text-white ml-4">Wear and Care</h1>
          </div>

          <div className="grid-bg w-full py-8 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white font-mono tracking-wide">Wear and Care</h1>
          </div>
        </div>
      </section>

      {/* Care Instructions */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Before Wearing Your Garment */}
              <div className="relative">
                <div className="grid-bg h-12 w-full mb-6"></div>
                <div className="bg-zinc-100 p-4 rounded-lg">
                  <h3 className="text-lg font-bold mb-4 text-black text-center">Before Wearing Your Garment</h3>
                </div>
                <div className="bg-zinc-900 p-6 rounded-lg mt-4">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span>Check for fit accordingly with your body type</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span>Read the care label if you have any doubt</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span>Your garment is your priority</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Proper Wearing Instructions */}
              <div className="relative">
                <div className="grid-bg h-12 w-full mb-6"></div>
                <div className="bg-zinc-100 p-4 rounded-lg">
                  <h3 className="text-lg font-bold mb-4 text-black text-center">Proper Wearing Instructions</h3>
                </div>
                <div className="bg-zinc-900 p-6 rounded-lg mt-4">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span>Always wear a thin base layer underneath</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span>Apply deodorant before putting on your garment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span>Avoid using strong perfumes or fragrances to protect the wool</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* During Use */}
              <div className="relative">
                <div className="grid-bg h-12 w-full mb-6"></div>
                <div className="bg-zinc-100 p-4 rounded-lg">
                  <h3 className="text-lg font-bold mb-4 text-black text-center">During Use</h3>
                </div>
                <div className="bg-zinc-900 p-6 rounded-lg mt-4">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span>Handle with care when putting on and removing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span>Avoid stretching the fabric unnecessarily</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span>Store properly when not in use, hanging to maintain shape</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span>Keep away from sharp items that could snag the fabric</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Washing Policy */}
              <div className="relative">
                <div className="grid-bg h-12 w-full mb-6"></div>
                <div className="bg-zinc-100 p-4 rounded-lg">
                  <h3 className="text-lg font-bold mb-4 text-black text-center">Washing Policy</h3>
                </div>
                <div className="bg-zinc-900 p-6 rounded-lg mt-4">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span>Hand washing is strongly recommended</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span>Contact us if washing is needed during your rental period</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span>We handle all cleaning professionally</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Styling Tips */}
              <div className="relative">
                <div className="grid-bg h-12 w-full mb-6"></div>
                <div className="bg-zinc-100 p-4 rounded-lg">
                  <h3 className="text-lg font-bold mb-4 text-black text-center">Styling Tips</h3>
                </div>
                <div className="bg-zinc-900 p-6 rounded-lg mt-4">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span>Feel free to experiment with different layers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span>Take photos of your outfit during the rental period</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span>Share your experience and tag us on social media</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Return Policy */}
              <div className="relative">
                <div className="grid-bg h-12 w-full mb-6"></div>
                <div className="bg-zinc-100 p-4 rounded-lg">
                  <h3 className="text-lg font-bold mb-4 text-black text-center">Return Policy</h3>
                </div>
                <div className="bg-zinc-900 p-6 rounded-lg mt-4">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span>Find the garment code</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span>Place it in the provided delivery package</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span>Return the items to Amsterdam according to your rental agreement</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <Button className="bg-emerald-500 hover:bg-emerald-600">Download Care Guide</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

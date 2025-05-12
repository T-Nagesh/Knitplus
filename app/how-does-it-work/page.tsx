import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Search, Euro, User, RotateCcw } from "lucide-react"

export default function HowItWorksPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-yellow-500 text-green-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <Link href="/" className="text-green-900 hover:text-green-700">
              <div className="w-5 h-5">
                <Image src="/icons/chevron-left.svg" alt="Back" width={20} height={20} />
              </div>
              <span className="sr-only">Back to home</span>
            </Link>
            <h1 className="text-2xl font-bold text-green-900 ml-4 font-serif">How Does It Work?</h1>
          </div>

          <div className="grid-bg w-full py-8 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-green-900 font-serif tracking-wide">
              How does it work?
            </h1>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-yellow-500 text-green-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Browse and Order */}
              <div className="relative">
                <div className="grid-bg h-12 w-full mb-6"></div>
                <div className="bg-yellow-600/30 p-6 rounded-lg">
                  <div className="bg-yellow-500 p-4 rounded-lg mb-4 inline-flex items-center justify-center">
                    <Search className="h-8 w-8 text-green-900" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-green-900 font-serif">Browse and Order</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-900 mr-2">•</span>
                      <span>Visit our website and explore the clothing you like</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-900 mr-2">•</span>
                      <span>Choose the items that match your style</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Select Your Membership Plan */}
              <div className="relative">
                <div className="grid-bg h-12 w-full mb-6"></div>
                <div className="bg-yellow-600/30 p-6 rounded-lg">
                  <div className="bg-yellow-500 p-4 rounded-lg mb-4 inline-flex items-center justify-center">
                    <Euro className="h-8 w-8 text-green-900" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-green-900 font-serif">Select Your Membership Plan</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-900 mr-2">•</span>
                      <span>Subscribe today for your ideal membership plan</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-900 mr-2">•</span>
                      <span>Choose a monthly or yearly subscription fee</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Pickup */}
              <div className="relative">
                <div className="grid-bg h-12 w-full mb-6"></div>
                <div className="bg-yellow-600/30 p-6 rounded-lg">
                  <div className="bg-yellow-500 p-4 rounded-lg mb-4 inline-flex items-center justify-center">
                    <User className="h-8 w-8 text-green-900" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-green-900 font-serif">Pickup</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-900 mr-2">•</span>
                      <span>Visit our location at the hub store in Amsterdam</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-900 mr-2">•</span>
                      <span>Schedule a convenient appointment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-900 mr-2">•</span>
                      <span>Collect your selected items</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Returns */}
              <div className="relative">
                <div className="grid-bg h-12 w-full mb-6"></div>
                <div className="bg-yellow-600/30 p-6 rounded-lg">
                  <div className="bg-yellow-500 p-4 rounded-lg mb-4 inline-flex items-center justify-center">
                    <RotateCcw className="h-8 w-8 text-green-900" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-green-900 font-serif">Returns</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-900 mr-2">•</span>
                      <span>Return items to the Store in Amsterdam</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-900 mr-2">•</span>
                      <span>Items must be clean before return</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-900 mr-2">•</span>
                      <span>Cleaning services are included in your membership fee</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <Button className="bg-green-900 hover:bg-green-800 text-yellow-500 font-serif">Join Now</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Production Process Section */}
      <section className="py-20 bg-yellow-600/30 text-green-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center font-serif">Our Production Process</h2>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {/* Digital Design */}
            <div className="text-center">
              <div className="relative aspect-square mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/images/knitting-pattern-design.webp"
                  alt="Digital knitting pattern design"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-green-900 font-serif">Digital Design</h3>
              <p>Our computational designers create digital patterns that optimize yarn usage and minimize waste.</p>
            </div>

            {/* Sustainable Materials */}
            <div className="text-center">
              <div className="relative aspect-square mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/images/sustainable-yarn.webp"
                  alt="Sustainable yarn selection"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-green-900 font-serif">Sustainable Materials</h3>
              <p>We source eco-friendly yarns, including GOTS certified organic and recycled materials.</p>
            </div>

            {/* Production */}
            <div className="text-center">
              <div className="relative aspect-square mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/images/knitting-machine.webp"
                  alt="Knitting machine"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-green-900 font-serif">Production</h3>
              <p>Our advanced knitting machines translate digital designs into physical garments with minimal waste.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Shared Ownership Model */}
      <section className="py-20 bg-yellow-500 text-green-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center font-serif">Shared Ownership Model</h2>

            <p className="text-lg text-center mb-12 font-serif">
              What if fashion wasn't something we owned, but something we{" "}
              <span className="bg-yellow-600/30 px-2 py-1 rounded">shared</span>?
            </p>

            <div className="space-y-8">
              <p className="text-lg">
                At KNIT+, we're exploring innovative approaches to fashion consumption through our shared ownership
                model. This model allows multiple people to access high-quality, designer knitwear without the
                environmental burden of individual ownership.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="bg-yellow-600/30 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 font-serif">Subscribe</h3>
                  <p>Join our membership program to access our collection of sustainable knitwear for a monthly fee.</p>
                </div>

                <div className="bg-yellow-600/30 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 font-serif">Wear</h3>
                  <p>Enjoy your selected pieces for as long as you need them, knowing they're made to last.</p>
                </div>

                <div className="bg-yellow-600/30 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 font-serif">Return & Refresh</h3>
                  <p>Exchange your items for new ones whenever you're ready for a change.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

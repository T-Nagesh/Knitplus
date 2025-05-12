import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section with Pixelated Grid Background */}
      <section className="relative w-full py-20 bg-yellow-500">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <Link href="/" className="text-green-900 hover:text-green-700">
              <div className="w-5 h-5">
                <Image src="/icons/chevron-left.svg" alt="Back" width={20} height={20} />
              </div>
              <span className="sr-only">Back to home</span>
            </Link>
            <h1 className="text-2xl font-bold text-green-900 ml-4 font-serif">About</h1>
          </div>

          <div className="relative w-full max-w-5xl mx-auto mb-16">
            <div className="grid-bg w-full py-12 flex items-center justify-center">
              <h1 className="text-5xl md:text-7xl font-bold text-green-900 font-serif tracking-wide">
                What is <span className="bg-yellow-600/30 px-2 py-1 rounded">Knit+</span> ?
              </h1>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8 text-green-900">
            <p className="text-xl font-serif text-center">What if fashion wasn't something we owned</p>
            <p className="text-xl font-serif text-center">
              but something we <span className="bg-yellow-600/30 px-2 py-1 rounded">shared</span>?
            </p>

            <div className="mt-16 space-y-6">
              <p className="text-lg font-serif">
                <strong>KNIT+</strong> is an innovative project launched in AMFI by the Amsterdam University of Applied
                Sciences - Center for Economic Transformation (CET), in collaboration with designers and studios that
                offers a unique and{" "}
                <span className="bg-yellow-600/30 px-2 py-1 rounded">eco-conscious approach to fashion</span>.
              </p>

              <p className="text-lg font-serif">
                This initiative allows individuals to{" "}
                <strong>rent, lease, and access high-quality, designer-knit clothing</strong> directly from the
                university's store.
              </p>

              <p className="text-lg mt-8 font-serif">
                In Collaboration with AMFI's Digital Society School, Computational Designers explores how a shared
                ownership model can promote sustainable fashion. By combining digital innovation with community-driven
                solutions, we aim to <strong>reduce waste and extend the life-cycle of items</strong> and creating a
                circular system for fashion's future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It's Made Section */}
      <section className="py-20 bg-yellow-600/30 text-green-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 font-serif tracking-wide">
              Curious to know how the sweater is <span className="bg-yellow-500 px-2 py-1 rounded">made</span>?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="relative aspect-square mb-4">
                  <Image
                    src="/images/knitting-pattern-design.webp"
                    alt="Digital design process for knitting"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-green-800">Digital pattern design using specialized software</p>
              </div>

              <div>
                <div className="relative aspect-square mb-4">
                  <Image
                    src="/images/knitting-machine.webp"
                    alt="Knitting machine in action"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-green-800">Our advanced knitting machines in action</p>
              </div>
            </div>

            <p className="text-center mt-4 text-sm text-green-800">A glimpse into the process</p>
          </div>
        </div>
      </section>
    </div>
  )
}

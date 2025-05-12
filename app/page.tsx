import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionReveal } from "@/components/section-reveal"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with updated heading */}
      <section className="relative w-full h-screen flex items-center justify-center bg-green-900">
        {/* Background pattern with reduced opacity */}
        <div className="absolute inset-0 w-full h-full opacity-30">
          <Image src="/images/hero.png" alt="Knitted pattern background" fill priority className="object-cover" />
        </div>

        {/* Content overlay */}
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-serif text-white">
            Own the Style,
            <br />
            Not the Stuff
          </h1>

          {/* Secondary tagline */}
          <p className="text-xl md:text-2xl mb-10 font-serif text-yellow-400">Keep the Look, Return the Rest</p>

          <Link href="/webshop">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-serif text-lg px-8 py-6">
              Explore Collection
            </Button>
          </Link>
        </div>
      </section>

      {/* Main Content Section */}
      <SectionReveal>
        <section className="py-20 bg-green-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
                  One <span className="text-yellow-400">sweater</span> at a time.
                </h2>
              </div>

              <div className="mb-16">
                <h2 className="text-2xl md:text-3xl font-serif mb-8">What if fashion wasn't something we owned</h2>
                <h2 className="text-2xl md:text-3xl font-serif">
                  but something we <span className="text-yellow-400">shared</span>?
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-16">
                <div>
                  <p className="text-lg mb-6 font-serif">
                    <strong>KNIT+</strong> is an innovative project launched in Amsterdam by the Amsterdam University of
                    Applied Sciences (AUAS) in collaboration with digital society experts, computational designers and
                    fashion specialists to create an{" "}
                    <span className="text-yellow-400 ribbon-border">eco-conscious approach to fashion</span>.
                  </p>

                  <p className="text-lg font-serif">
                    We're developing sustainable, ethical, and accessible high-quality, designer knitwear directly from
                    the university's studio.
                  </p>
                </div>

                <div>
                  <p className="text-lg mb-6 font-serif">
                    In Collaboration with AMFI's Digital Society School, Computational Designers explore how a shared
                    ownership model can promote sustainable fashion. By combining digital innovation with
                    community-driven solutions, we aim to{" "}
                    <span className="text-yellow-400 ribbon-border">
                      reduce waste and extend the life-cycle of items
                    </span>{" "}
                    and creating a circular system for fashion's future.
                  </p>

                  <div className="mt-8">
                    <Link href="/about">
                      <Button className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-serif">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Call to Action */}
      <SectionReveal>
        <section className="py-16 bg-green-800 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8 font-serif">Your Choice Makes a Difference!</h2>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/webshop">
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-green-900 w-full sm:w-auto font-serif">
                    Browse Collection
                  </Button>
                </Link>
                <Link href="/how-does-it-work">
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-green-900 w-full sm:w-auto font-serif"
                  >
                    How It Works
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>
    </div>
  )
}

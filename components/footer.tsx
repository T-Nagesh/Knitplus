import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-green-900 text-white py-12 border-t border-green-800">
      {/* Ribbon pattern at the top of the footer */}
      <div className="w-full h-1 ribbon-pattern-light mb-8"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex justify-center md:justify-start">
            <div className="w-40">
              <Image src="/images/knit-logo.png" alt="KNIT+ Logo" width={160} height={60} />
              {/* Removed the image/div that was under the logo */}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-serif">Get in Touch</h3>
            <p className="mb-2">
              <span className="text-gray-400">Phone:</span> (480) 555-0123
            </p>
            <p className="mb-2">
              <span className="text-gray-400">Address:</span> Hogeschool van Amsterdam, TTH
            </p>
            <p className="mb-2">
              <span className="text-gray-400">E-mail:</span> knit+official@hva.nl
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-serif">Company Info</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white hover:text-yellow-400 transition-colors ribbon-border">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/how-does-it-work"
                  className="text-white hover:text-yellow-400 transition-colors ribbon-border"
                >
                  How does it work?
                </Link>
              </li>
              <li>
                <Link href="/webshop" className="text-white hover:text-yellow-400 transition-colors ribbon-border">
                  Webshop
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-white hover:text-yellow-400 transition-colors ribbon-border"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-green-800 text-center">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} KNIT+. All rights reserved.</p>
          <p className="text-sm text-yellow-400 mt-2 italic">Own the Style, Not the Stuff</p>
        </div>
      </div>
    </footer>
  )
}

import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-yellow-500 text-green-900 py-12 border-t border-yellow-600/30">
      {/* Ribbon pattern at the top of the footer */}
      <div className="w-full h-1 ribbon-pattern mb-8"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex justify-center md:justify-start">
            <div className="w-40">
              <Image src="/images/knit-logo.png" alt="KNIT+ Logo" width={160} height={60} />
              {/* Image under logo remains removed */}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-serif">Get in Touch</h3>
            <p className="mb-2">
              <span className="text-green-800">Phone:</span> (480) 555-0123
            </p>
            <p className="mb-2">
              <span className="text-green-800">Address:</span> Hogeschool van Amsterdam, TTH
            </p>
            <p className="mb-2">
              <span className="text-green-800">E-mail:</span> knit+official@hva.nl
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-serif">Company Info</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-green-900 hover:text-green-700 transition-colors ribbon-border">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/how-does-it-work"
                  className="text-green-900 hover:text-green-700 transition-colors ribbon-border"
                >
                  How does it work?
                </Link>
              </li>
              <li>
                <Link href="/webshop" className="text-green-900 hover:text-green-700 transition-colors ribbon-border">
                  Webshop
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-green-900 hover:text-green-700 transition-colors ribbon-border"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-yellow-600/30 text-center">
          <p className="text-sm text-green-800">© {new Date().getFullYear()} KNIT+. All rights reserved.</p>
          <p className="text-sm text-green-900 mt-2 italic font-bold">Own the Style, Not the Stuff</p>
        </div>
      </div>
    </footer>
  )
}

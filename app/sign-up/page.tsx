import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SignUpPage() {
  return (
    <div className="pt-16">
      <section className="py-20 bg-yellow-500 text-green-900 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">Join KNIT+</h1>
            <p className="text-center mb-8">
              Sign up to receive updates on new collections, sustainability initiatives, and exclusive offers.
            </p>

            <div className="bg-yellow-600/30 p-8 rounded-lg">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full p-3 bg-yellow-500 border border-yellow-600/50 rounded-md focus:outline-none focus:ring-2 focus:ring-green-900 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full p-3 bg-yellow-500 border border-yellow-600/50 rounded-md focus:outline-none focus:ring-2 focus:ring-green-900 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="w-full p-3 bg-yellow-500 border border-yellow-600/50 rounded-md focus:outline-none focus:ring-2 focus:ring-green-900 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block mb-2">
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    type="password"
                    className="w-full p-3 bg-yellow-500 border border-yellow-600/50 rounded-md focus:outline-none focus:ring-2 focus:ring-green-900 focus:border-transparent"
                  />
                </div>
                <div className="flex items-center">
                  <input
                    id="newsletter"
                    type="checkbox"
                    className="h-4 w-4 border-yellow-600/50 rounded focus:ring-green-900"
                  />
                  <label htmlFor="newsletter" className="ml-2 block text-sm">
                    Subscribe to our newsletter
                  </label>
                </div>
                <Button type="submit" className="w-full bg-green-900 hover:bg-green-800 text-yellow-500">
                  Create Account
                </Button>
              </form>
              <div className="mt-6 text-center text-sm">
                <p>
                  Already have an account?{" "}
                  <Link href="/login" className="text-green-900 hover:underline">
                    Log in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="pt-16">
      <section className="py-20 bg-black text-white min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Contact Us</h1>
            <p className="text-center mb-12">
              Have questions about our products or want to collaborate? We'd love to hear from you!
            </p>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="ribbon-input">
                  <label htmlFor="name" className="block mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full p-3 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                <div className="ribbon-input">
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full p-3 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="ribbon-input">
                <label htmlFor="subject" className="block mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  className="w-full p-3 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
              <div className="ribbon-input">
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full p-3 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                ></textarea>
              </div>
              <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600">
                Send Message
              </Button>
            </form>

            <div className="mt-16 grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Email Us</h3>
                <p className="text-emerald-400">info@knitplus.nl</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-white hover:text-emerald-400">
                    Instagram
                  </a>
                  <a href="#" className="text-white hover:text-emerald-400">
                    Facebook
                  </a>
                  <a href="#" className="text-white hover:text-emerald-400">
                    Pinterest
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import React from 'react'

const ContactPage = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#fb873f]">Contact Us</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Get In Touch</h5>
            <p className="text-gray-600 mb-6">
              I&apos;m happy to help! If you&apos;re looking for contact information or details about Safe Harbor learning online free courses website for e-learning, I don&apos;t have real-time browsing capabilities to access current websites or specific contact details.
            </p>

            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-[#fb873f] flex items-center justify-center rounded-full">
                <i className="fa fa-map-marker-alt text-white"></i>
              </div>
              <div>
                <h5 className="font-semibold">Office</h5>
                <p className="text-gray-600">NCBA&E (East Canal Campus) Lahore.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-[#fb873f] flex items-center justify-center rounded-full">
                <i className="fa fa-phone-alt text-white"></i>
              </div>
              <div>
                <h5 className="font-semibold">Mobile</h5>
                <p className="text-gray-600">+92 3104715517</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#fb873f] flex items-center justify-center rounded-full">
                <i className="fa fa-envelope-open text-white"></i>
              </div>
              <div>
                <h5 className="font-semibold">Email</h5>
                <p className="text-gray-600">dustgeer780678@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#fb873f] focus:border-[#fb873f]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#fb873f] focus:border-[#fb873f]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#fb873f] focus:border-[#fb873f]"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#fb873f] focus:border-[#fb873f]"
                placeholder="Leave a message here"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-[#fb873f] text-white font-semibold rounded-md hover:bg-orange-500 transition-all"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactPage

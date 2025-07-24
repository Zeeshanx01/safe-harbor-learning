'use client';

import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Asma Mughal',
    image: '/img/Snapchat-1825146894.jpg',
    message:
      "I stumbled upon Cyber Security while searching for free courses. The quality surpassed my expectations! The content was rich, and the instructors were knowledgeable. I've already recommended it to my friends."
  },
  {
    name: 'Sania Khan',
    image: '/img/Snapchat-2090863881.jpg',
    message:
      "As a working professional, finding free courses that match my schedule was a game-changer. The courses are engaging, and the community aspect adds immense value. Highly recommended!"
  },
  {
    name: 'M.Danial',
    image: '/img/IMG-20240803-WA0007~2.jpg',
    message:
      "I've taken multiple courses here, and each one has been fantastic. The platform's design makes learning enjoyable, and the knowledge gained is invaluable. It's hard to believe these courses are free!"
  },
  {
    name: 'Abu Bakar',
    image: '/img/IMG-20240803-WA0005.jpg',
    message:
      "I'm amazed at the quality of the free courses available. The instructors are experts in their fields, and the interactive lessons make learning a breeze. Thank you for this opportunity!"
  }
];

export default function TestimonialsPage() {
  return (
    <main className="bg-white text-gray-800">
      <div className="bg-primary py-16 text-white text-center">
        <h1 className="text-5xl font-bold">Student Reviews</h1>
        <p className="mt-2 text-lg">What our learners say about us</p>
      </div>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#fb873f] mb-4">Success Stories</h2>
          <p className="text-gray-600">Can Cyber Security courses help your career? Our learners tell us how.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-all text-center"
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={80}
                height={80}
                className="rounded-full mx-auto mb-4 border-4 border-white"
              />
              <h5 className="text-lg font-semibold mb-2">{testimonial.name}</h5>
              <p className="text-sm text-gray-600">{testimonial.message}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-gray-900 text-white pt-12 pb-6 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-[#fb873f]">About Us</a></li>
              <li><a href="/contact" className="hover:text-[#fb873f]">Contact Us</a></li>
              <li><a href="#" className="hover:text-[#fb873f]">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#fb873f]">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-[#fb873f]">FAQs & Help</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Contact</h4>
            <p className="text-sm mb-2">📍 NCBA&E (East Canal Campus), Lahore</p>
            <p className="text-sm mb-2">📞 +92 3104715517</p>
            <p className="text-sm mb-2">✉️ dustgeer780678@gmail.com</p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-white hover:text-[#fb873f]">🐦</a>
              <a href="#" className="text-white hover:text-[#fb873f]">📘</a>
              <a href="#" className="text-white hover:text-[#fb873f]">📺</a>
              <a href="#" className="text-white hover:text-[#fb873f]">🔗</a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h4>
            <p className="text-sm mb-4">Join our community of lifelong learners!</p>
            <form className="flex items-center border rounded overflow-hidden">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 text-gray-700 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-[#fb873f] text-white px-4 py-2 hover:bg-orange-600 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="text-center text-sm mt-8 border-t pt-4">
          &copy; {new Date().getFullYear()} <a href="/" className="text-[#fb873f] font-semibold">Safe Harbor learning</a>. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

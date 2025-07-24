'use client';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (<>
  
  
   <footer className="bg-[#1F1F1F] text-gray-300 pt-20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Quick Links */}
          <div>
            <h4 className="text-white text-xl font-semibold mb-4">Quick Link</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-white transition">About Us</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition">FAQs & Help</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-xl font-semibold mb-4">Contact</h4>
            <p className="mb-2 flex items-center"><FaMapMarkerAlt className="mr-3" />NCBA&E (East Canal Campus) Lahore</p>
            <p className="mb-2 flex items-center"><FaPhoneAlt className="mr-3" />+93 3104715517</p>
            <p className="mb-4 flex items-center"><FaEnvelope className="mr-3" />dustgeer780678@gmail.com</p>
            <div className="flex space-x-3 mt-2">
              <a href="#" className="border border-gray-400 text-gray-300 hover:text-white hover:border-white rounded-full p-2 transition">
                <FaTwitter />
              </a>
              <a href="#" className="border border-gray-400 text-gray-300 hover:text-white hover:border-white rounded-full p-2 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="border border-gray-400 text-gray-300 hover:text-white hover:border-white rounded-full p-2 transition">
                <FaYoutube />
              </a>
              <a href="#" className="border border-gray-400 text-gray-300 hover:text-white hover:border-white rounded-full p-2 transition">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white text-xl font-semibold mb-4">Subscribe to our Newsletter</h4>
            <p className="mb-4">Subscribe now and join our growing community of learners committed to lifelong education!</p>
            <form action="#" className="relative max-w-md">
              <input
                type="email"
                required
                placeholder="Your email"
                className="w-full py-3 px-4 pr-24 rounded-md bg-gray-800 text-white focus:outline-none"
              />
              <button
                type="submit"
                className="absolute top-1/2 -translate-y-1/2 right-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
              >
                <a href="mailto:keertidvcorai@gmail.com">Subscribe</a>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 py-6 text-center text-sm text-gray-400">
        &copy; <a href="/" className="text-white underline hover:no-underline">Safe Harbor Learning</a>, All Rights Reserved.
      </div>
    </footer>


  </>);
}

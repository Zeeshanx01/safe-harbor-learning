'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaTwitter, 
  FaFacebookF, 
  FaYoutube, 
  FaLinkedinIn,
  FaArrowRight
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black pt-20 mt-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              x: [0, 100 * (i % 2 === 0 ? 1 : -1), 0],
              y: [0, -100, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute rounded-full blur-xs opacity-10"
            style={{
              background: `conic-gradient(${i % 2 ? '#6366f1' : '#fb873f'}, transparent)`,
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              top: `${i * 20}%`,
              left: `${i * 15}%`,
            }}
          />
        ))}
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-indigo-600 to-orange-500 p-2 rounded-lg">
                <div className="bg-white dark:bg-gray-900 p-1 rounded">
                  <div className="w-10 h-10 bg-gray-200 rounded" />
                </div>
              </div>
              <p className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-orange-500 bg-clip-text text-transparent">
                Safe Harbor
              </p>
            </Link>
            <p className="text-gray-400 mb-6">
              Empowering cybersecurity professionals with cutting-edge education and training.
            </p>
            <div className="flex space-x-4">
              {[FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/10 text-white p-3 rounded-full hover:bg-indigo-600 transition-all"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white text-xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-orange-400 bg-clip-text text-transparent">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {['About Us', 'Contact Us', 'Privacy Policy', 'Terms & Conditions', 'FAQs & Help'].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                  viewport={{ once: true }}
                >
                  <a 
                    href="#" 
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition group"
                  >
                    <FaArrowRight className="text-orange-500 group-hover:translate-x-1 transition-transform" />
                    <span>{item}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white text-xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-orange-400 bg-clip-text text-transparent">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <FaMapMarkerAlt className="text-orange-500 mt-1 flex-shrink-0" />
                <span>NCBA&E (East Canal Campus) Lahore</span>
              </motion.li>
              <motion.li 
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <FaPhoneAlt className="text-orange-500" />
                <span>+93 3104715517</span>
              </motion.li>
              <motion.li 
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <FaEnvelope className="text-orange-500" />
                <span>dustgeer780678@gmail.com</span>
              </motion.li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white text-xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-orange-400 bg-clip-text text-transparent">
              Newsletter
            </h4>
            <p className="text-gray-400 mb-6">
              Join our community of cybersecurity professionals and stay updated with the latest trends.
            </p>
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  className="w-full py-4 px-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-orange-500 text-white py-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
              >
                Subscribe Now
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Copyright */}
      <motion.div 
        className="border-t border-white/10 py-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} <Link href="/" className="text-white font-medium hover:text-orange-500 transition">Safe Harbor Learning</Link>. All Rights Reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Designed with ❤️ for cybersecurity education
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
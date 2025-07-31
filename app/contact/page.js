'use client'
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <>
      {/* Hero Section with Glass Effect */}

      <div className="relative py-28 mb-16 text-black/30 bg-gray-300 dark:bg-black/5 text-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden z-0">
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
                width: `${150 + i * 70}px`,
                height: `${150 + i * 70}px`,
                top: `${i * 15}%`,
                left: `${i * 10}%`,
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-indigo-500 to-orange-500 dark:from-indigo-400 dark:to-orange-400 bg-clip-text text-transparent">
              Contact Us
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <nav className="flex justify-center items-center text-sm bg-white/10 backdrop-blur-sm border border-white/10 rounded-full py-2 px-6 max-w-xs mx-auto">
              <ol className="flex space-x-2 text-black/90 dark:text-white">
                <li>
                  <Link href="/" className="hover:underline">Home</Link>
                </li>
                <li className="text-orange-400">/</li>
                <li className=" font-medium">Contact</li>
              </ol>
            </nav>
          </motion.div>
        </div>
      </div>




      {/* Contact Content */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info - Glass Card */}
          <motion.div
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/30 rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h5 className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-orange-500 bg-clip-text text-transparent">
              Get In Touch
            </h5>
            <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg">
              Our cybersecurity experts are ready to answer your questions and help you navigate your learning journey. Reach out anytime.
            </p>

            <div className="space-y-6">
              {/* Office */}
              <motion.div 
                className="flex items-start gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center justify-center rounded-full flex-shrink-0">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
                <div>
                  <h5 className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-1">Office</h5>
                  <p className="text-gray-600 dark:text-gray-300">NCBA&E (East Canal Campus) Lahore</p>
                </div>
              </motion.div>

              {/* Mobile */}
              <motion.div 
                className="flex items-start gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center rounded-full flex-shrink-0">
                  <FaPhoneAlt className="text-white text-xl" />
                </div>
                <div>
                  <h5 className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-1">Mobile</h5>
                  <p className="text-gray-600 dark:text-gray-300">+92 3104715517</p>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div 
                className="flex items-start gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center rounded-full flex-shrink-0">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <div>
                  <h5 className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-1">Email</h5>
                  <p className="text-gray-600 dark:text-gray-300">dustgeer780678@gmail.com</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form - Glass Card */}
          <motion.div
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/30 rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h5 className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-orange-500 bg-clip-text text-transparent">
              Send a Message
            </h5>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Your message..."
                  ></textarea>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="w-full py-3 px-6 bg-gradient-to-r from-indigo-600 to-orange-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    <FaPaperPlane className="text-lg" />
                    Send Message
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </section>
      </>
    );
  };

  export default ContactPage;
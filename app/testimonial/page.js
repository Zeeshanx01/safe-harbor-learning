'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import Link from 'next/link';

const testimonials = [
  {
    name: 'Asma Mughal',
    image: '/img/Snapchat-1825146894.jpg',
    role: 'Cybersecurity Analyst',
    message:
      "I stumbled upon Cyber Security while searching for free courses. The quality surpassed my expectations! The content was rich, and the instructors were knowledgeable. I've already recommended it to my friends.",
    rating: 5
  },
  {
    name: 'Sania Khan',
    image: '/img/Snapchat-2090863881.jpg',
    role: 'IT Security Specialist',
    message:
      "As a working professional, finding free courses that match my schedule was a game-changer. The courses are engaging, and the community aspect adds immense value. Highly recommended!",
    rating: 5
  },
  {
    name: 'M.Danial',
    image: '/img/IMG-20240803-WA0007~2.jpg',
    role: 'Network Security Engineer',
    message:
      "I've taken multiple courses here, and each one has been fantastic. The platform's design makes learning enjoyable, and the knowledge gained is invaluable. It's hard to believe these courses are free!",
    rating: 4
  },
  {
    name: 'Abu Bakar',
    image: '/img/IMG-20240803-WA0005.jpg',
    role: 'Security Consultant',
    message:
      "I'm amazed at the quality of the free courses available. The instructors are experts in their fields, and the interactive lessons make learning a breeze. Thank you for this opportunity!",
    rating: 5
  }
];

export default function TestimonialsPage() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">







      {/* Hero Section */}
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
            <span className="bg-gradient-to-r from-indigo-500 to-orange-500 bg-clip-text text-transparent">
              Student Success Stories
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
                <li className=" font-medium">Testimonials</li>
              </ol>
            </nav>
          </motion.div>
        </div>
      </div>














      {/* Testimonials Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-orange-500 bg-clip-text text-transparent">
            Transforming Cybersecurity Careers
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Hear from our students about how Cyber Security courses have accelerated their careers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h5 className="text-xl font-bold text-gray-800 dark:text-gray-100">{testimonial.name}</h5>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="relative mb-6">
                <FaQuoteLeft className="absolute -top-4 left-0 text-indigo-500/20 text-5xl" />
                <p className="text-gray-700 dark:text-gray-300 pl-8 relative z-10">
                  {testimonial.message}
                </p>
              </div>
              
              <div className="flex gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < testimonial.rating ? "text-amber-500" : "text-gray-300"} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <motion.div
        className="max-w-4xl mx-auto px-4 py-12 text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-orange-500 bg-clip-text text-transparent">
          Ready to Transform Your Career?
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Join thousands of cybersecurity professionals who have advanced their careers with our courses
        </p>
        <motion.a
          href="/courses"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-gradient-to-r from-indigo-600 to-orange-500 text-white py-3 px-8 rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
        >
          Browse Our Courses
        </motion.a>
      </motion.div>

 
    </main>
  );
}
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link';
import { FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa';







// // tailwind.config.js
// module.exports = {
//   // ...
//   theme: {
//     extend: {
//       backgroundImage: {
//         'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
//       },
//     }
//   }
// }











const teamMembers = [
  {
    name: 'Khadijah Aamir',
    role: 'Team Leader',
    image: '/img/khadijah.jpg'
  },
  {
    name: 'Ahmad Hassan',
    role: 'Team CEO',
    image: '/img/ahmad.jpg'
  },
  {
    name: 'Hafiza Reeda Noor',
    role: 'Team Manager',
    image: '/img/reeda.jpg'
  },
  {
    name: 'Ghulam Dustgeer',
    role: 'Team HR',
    image: '/img/IMG-20240803-WA0006.jpg'
  },
  {
    name: 'M.Imran',
    role: 'Supervisor',
    image: '/img/IMG-20240803-WA0004~2.jpg'
  }
]

export default function TeamPage() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
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
            <span className="bg-gradient-to-r from-indigo-500 to-orange-500 dark:from-indigo-400 dark:to-orange-400 bg-clip-text text-transparent">
              Our Expert Team
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
                <li className=" font-medium">Team</li>
              </ol>
            </nav>
          </motion.div>
        </div>
      </div>




      {/* Team Members */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-orange-500 bg-clip-text text-transparent">
            Meet Our Cybersecurity Experts
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our team of industry professionals brings decades of experience in cybersecurity education and threat management.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/30 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="relative h-80">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <div className="p-6 text-center">
                <h5 className="text-xl font-bold mb-1 text-gray-800 dark:text-gray-100">{member.name}</h5>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{member.role}</p>
                
                <div className="flex justify-center gap-3">
                  {[FaTwitter, FaFacebookF, FaLinkedinIn].map((Icon, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-gray-100 dark:bg-gray-600/50 p-2 rounded-full hover:bg-indigo-600 hover:text-white dark:text-white/50 transition-all"
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        className="max-w-4xl mx-auto px-4 py-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-orange-500 bg-clip-text text-transparent">
          Join Our Cybersecurity Team
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          We&apos;re always looking for passionate cybersecurity professionals to join our team of educators and experts.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-indigo-600 to-orange-500 text-white py-3 px-8 rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
        >
          View Career Opportunities
        </motion.button>
      </motion.div>

    </div>
  )
}
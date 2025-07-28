'use client'
import Courses from '@/components/Courses'
import React from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion'

const page = () => {
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
              Our Courses
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
                <li className=" font-medium">Courses</li>
              </ol>
            </nav>
          </motion.div>
        </div>
      </div>

      <Courses />
    </>
  )
}

export default page

'use client'
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion'
import { FaLightbulb, FaChartLine, FaUsers, FaRocket, FaHandshake, FaGlobe, FaSyncAlt } from 'react-icons/fa';

const About = () => {
  const sections = [
    {
      title: "Our Vision",
      icon: <FaLightbulb className="text-yellow-500 w-8 h-8" />,
      content: "We envision a world where cybersecurity education is accessible to everyone, regardless of location or background. We strive to break barriers and make security knowledge transformative and inclusive.",
    },
    {
      title: "Commitment to Excellence",
      icon: <FaChartLine className="text-green-500 w-8 h-8" />,
      content: "We collaborate with industry experts to curate courses that meet the highest standards, ensuring our learners receive valuable and up-to-date knowledge in cybersecurity.",
    },
    {
      title: "Empowering Learners",
      icon: <FaUsers className="text-indigo-500 w-8 h-8" />,
      content: "Cyber Security is designed to empower individuals to pursue security careers, advance their skills, and acquire new capabilities in a dynamic and supportive environment.",
    },
    {
      title: "Innovation in Learning",
      icon: <FaRocket className="text-orange-500 w-8 h-8" />,
      content: "From interactive labs to live hacking sessions, we're committed to providing a cutting-edge learning experience that fosters engagement and knowledge retention.",
    },
    {
      title: "Community Focus",
      icon: <FaHandshake className="text-blue-500 w-8 h-8" />,
      content: "We encourage collaboration, discussion, and knowledge sharing among learners, fostering an environment of growth and camaraderie in our security community.",
    },
    {
      title: "Diverse Education",
      icon: <FaGlobe className="text-teal-500 w-8 h-8" />,
      content: "We celebrate diversity in perspectives and ideas. Our courses cater to various skill levels, ensuring everyone finds a learning path that resonates with them.",
    },
    {
      title: "Continuous Improvement",
      icon: <FaSyncAlt className="text-purple-500 w-8 h-8" />,
      content: "Feedback from our learners helps us continually enhance our platform, ensuring it remains dynamic and aligned with evolving security challenges.",
    }
  ];

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
              About Cyber Security
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
                <li className=" font-medium">About</li>
              </ol>
            </nav>
          </motion.div>
        </div>
      </div>

      {/* Main Content with Glass Cards */}
      <section className="max-w-6xl mx-auto px-4 py-10 dark:bg-gray-900/5 bg-gray-300/70 rounded-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Introduction */}
          <motion.div
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/30 rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h6 className="uppercase text-sm tracking-wider text-orange-500 mb-2 font-semibold">About Us</h6>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-orange-500 bg-clip-text text-transparent">
              Welcome to Cyber Courses
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
              At Cyber Courses, we believe in accessible, innovative learning experiences that adapt to your schedule and learning style. Join us in embracing the future of cybersecurity education and unlock your potential.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              We&apos;re on a mission to empower individuals worldwide through cutting-edge security education. In today&apos;s digital landscape, cybersecurity skills are not just valuable - they&apos;re essential for protecting our digital future.
            </p>
          </motion.div>

          {/* Mission Image */}
          <motion.div
            className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 border-2 border-dashed rounded-xl w-full h-full" />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-orange-500/20"></div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-orange-500 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              These principles guide everything we do at Cyber Security
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/30 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="mb-5">
                  {section.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                  {section.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-indigo-600 to-orange-500 rounded-2xl p-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Thank you for being part of Cyber Courses
          </h3>
          <p className="text-white/90 max-w-3xl mx-auto text-lg">
            Together let&apos;s embark on a journey of lifelong learning, growth, and creating a safer digital world for everyone.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-white text-indigo-600 py-3 px-8 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
          >
            Join Our Community
          </motion.button>
        </motion.div>
      </section>
    </>
  )
}

export default About;
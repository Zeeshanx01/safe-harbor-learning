'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaStar, FaUsers, FaChartLine, FaLock, FaCloud, FaMobile, FaShieldAlt, FaCogs, FaNetworkWired } from 'react-icons/fa';

const categories = [
  { 
    title: 'Application Security', 
    icon: <FaLock className="w-10 h-10 text-indigo-500" />,
    description: 'Secure software development and vulnerability management'
  },
  { 
    title: 'Cloud Security', 
    icon: <FaCloud className="w-10 h-10 text-blue-500" />,
    description: 'Protect cloud infrastructure and manage cloud risks'
  },
  { 
    title: 'Endpoint Security', 
    icon: <FaShieldAlt className="w-10 h-10 text-green-500" />,
    description: 'Secure devices and manage endpoint protection'
  },
  { 
    title: 'Mobile Security', 
    icon: <FaMobile className="w-10 h-10 text-purple-500" />,
    description: 'Protect mobile devices and applications'
  },
  { 
    title: 'IoT Security', 
    icon: <FaCogs className="w-10 h-10 text-orange-500" />,
    description: 'Secure Internet of Things devices and networks'
  },
  { 
    title: 'Critical Infrastructure', 
    icon: <FaNetworkWired className="w-10 h-10 text-red-500" />,
    description: 'Protect essential systems and national infrastructure'
  },
  { 
    title: 'Security Architecture', 
    icon: <FaChartLine className="w-10 h-10 text-teal-500" />,
    description: 'Design and implement secure systems'
  },
  { 
    title: 'Threat Intelligence', 
    icon: <FaShieldAlt className="w-10 h-10 text-yellow-500" />,
    description: 'Analyze and respond to emerging cyber threats'
  },
];

const courses = [
  {
    title: 'Web Security Fundamentals',
    category: 'Application Security',
    price: '$149.00',
    image: '/img/course-1.jpg',
    students: '1.2k',
    rating: '4.5 (250)',
    description: 'Learn the fundamentals of web security and front-end protection with this comprehensive course.',
    icon: <FaLock className="text-indigo-500" />
  },
  {
    title: 'Cloud Security Architecture',
    category: 'Cloud Security',
    price: '$199.00',
    image: '/img/course-2.jpg',
    students: '2.1k',
    rating: '4.7 (320)',
    description: 'Master cloud security principles and design secure cloud infrastructure for modern applications.',
    icon: <FaCloud className="text-blue-500" />
  },
  {
    title: 'Advanced Threat Hunting',
    category: 'Threat Intelligence',
    price: '$179.00',
    image: '/img/course-3.jpg',
    students: '3.4k',
    rating: '4.8 (410)',
    description: 'Develop advanced skills in threat detection, analysis, and incident response techniques.',
    icon: <FaShieldAlt className="text-yellow-500" />
  }
];

const Courses = () => {
  return (
    <>
      {/* Categories Section with Glass Cards */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h6 
              className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Explore Cybersecurity Domains
            </motion.h6>
            <motion.h1
              className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-orange-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Popular Security Domains
            </motion.h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((cat, idx) => (
              <motion.div 
                key={idx}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/30 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <motion.div 
                  className="w-16 h-16 flex items-center justify-center bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full mb-4 mx-auto"
                  whileHover={{ rotate: 15, scale: 1.1 }}
                >
                  {cat.icon}
                </motion.div>
                <h5 className="text-lg font-bold text-center mb-2 text-gray-800 dark:text-gray-100">
                  {cat.title}
                </h5>
                <p className="text-gray-600 dark:text-gray-300 text-sm text-center">
                  {cat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-16 bg-gradient-to-t from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h6 
              className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Cybersecurity Education
            </motion.h6>
            <motion.h1
              className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-orange-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our Popular Courses
            </motion.h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, idx) => (
              <motion.div
                key={idx}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/30 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * idx }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative h-56">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-indigo-500 text-white px-3 py-1 rounded-full text-sm">
                    {course.icon}
                    <span>{course.category}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-indigo-600 dark:text-indigo-400 text-sm font-semibold flex items-center gap-2">
                      {course.icon}
                      {course.category}
                    </span>
                    <span className="text-lg font-bold text-orange-500">{course.price}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-5">
                    {course.description}
                  </p>
                  
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <FaUsers className="text-indigo-500" />
                      <span>{course.students} Students</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <FaStar className="text-yellow-500" />
                      <span>{course.rating}</span>
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all"
                  >
                    Enroll Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="/courses"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all text-lg"
            >
              Browse All Courses
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Courses;
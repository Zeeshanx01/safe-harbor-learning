'use client'
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaGraduationCap, FaLightbulb, FaRocket, FaUsers, FaChartLine, FaCheck, FaGlobe } from 'react-icons/fa';
import Link from 'next/link';

export default function InstructorPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <PageHeader />

      <ApplySection />

      <WhyChooseSection />

      <HowItWorksSection />

      <WhatWeLookForSection />

      <ReadyToJoinSection setIsModalOpen={setIsModalOpen} />

      <FinalCallToAction />

      <BackToTopButton />

      {isModalOpen && <ApplicationModal onClose={() => setIsModalOpen(false)} />}


    </div>
  );
}

function PageHeader() {
  return (<>



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
            Become An Instructor
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
              <li className=" font-medium">Instructor</li>
            </ol>
          </nav>
        </motion.div>
      </div>
    </div>


  </>);
}

function ApplySection() {
  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 py-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/30 rounded-2xl p-8 shadow-lg">
        <div className="text-center mb-8">
          <h1 className="inline-block bg-gradient-to-r from-indigo-600 to-orange-500 text-white px-6 py-2 rounded-full text-xl font-bold mb-6">
            Apply As Instructor
          </h1>
        </div>

        <div className="max-w-4xl mx-auto">
          <h5 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Welcome to Cyber Courses - Where Knowledge Meets Innovation
          </h5>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Are you passionate about sharing your expertise and making a real impact on learners worldwide?
            If so, we invite you to become an instructor on our dynamic e-learning platform! Join a community
            of educators dedicated to fostering a love for learning and empowering individuals to achieve their goals.
          </p>
          <div className="flex justify-center">
            <FaChalkboardTeacher className="text-5xl text-indigo-500/20" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function WhyChooseSection() {
  const benefits = [
    {
      icon: <FaGlobe className="w-8 h-8 text-indigo-500" />,
      title: "Global Reach, Local Impact",
      description: "Reach a diverse audience from all corners of the globe while making a meaningful difference in individual lives."
    },
    {
      icon: <FaRocket className="w-8 h-8 text-blue-500" />,
      title: "Cutting-Edge Technology",
      description: "Leverage our state-of-the-art e-learning infrastructure for a seamless and engaging learning experience."
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-orange-500" />,
      title: "Flexible Teaching",
      description: "Create and manage courses on your schedule, balancing professional and personal commitments."
    },
    {
      icon: <FaGraduationCap className="w-8 h-8 text-purple-500" />,
      title: "Competitive Compensation",
      description: "Benefit from a transparent and rewarding structure that recognizes your expertise."
    }
  ];

  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 py-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 border-2 border-dashed rounded-xl w-full h-full" />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-orange-500/20"></div>
          </motion.div>

        <div>
          <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-orange-500 bg-clip-text text-transparent">
            Why Teach With Cyber Courses?
          </h1>

          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="bg-indigo-500/10 dark:bg-indigo-500/20 p-3 rounded-full">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-1">{benefit.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      icon: <FaGraduationCap className="w-8 h-8 text-indigo-500" />,
      title: "Application Process",
      description: "Submit your application with details about your expertise and teaching philosophy."
    },
    {
      icon: <FaRocket className="w-8 h-8 text-blue-500" />,
      title: "Content Creation",
      description: "Develop high-quality course content with support from our instructional design team."
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-orange-500" />,
      title: "Go Live",
      description: "Your courses go live on our platform for learners worldwide to enroll."
    },
    {
      icon: <FaUsers className="w-8 h-8 text-purple-500" />,
      title: "Engage and Grow",
      description: "Interact with students through forums, live Q&A, and feedback mechanisms."
    }
  ];

  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 py-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-orange-500 bg-clip-text text-transparent">
          Your Instructor Journey
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Four simple steps to start teaching on our platform
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <div className="mb-4 text-indigo-500">
              {step.icon}
            </div>
            <h5 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">{step.title}</h5>
            <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function WhatWeLookForSection() {
  const qualities = [
    {
      icon: <FaLightbulb className="w-6 h-6 text-indigo-500" />,
      title: "Passion for Teaching",
      description: "Sharing knowledge and facilitating the learning journey for others."
    },
    {
      icon: <FaGraduationCap className="w-6 h-6 text-blue-500" />,
      title: "Expertise in Your Field",
      description: "Demonstrated expertise backed by relevant qualifications and experience."
    },
    {
      icon: <FaUsers className="w-6 h-6 text-orange-500" />,
      title: "Communication Skills",
      description: "Clear and effective communication to engage learners of various backgrounds."
    },
    {
      icon: <FaRocket className="w-6 h-6 text-purple-500" />,
      title: "Innovation",
      description: "Willingness to embrace innovative teaching methods and technologies."
    }
  ];

  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 py-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-orange-500 bg-clip-text text-transparent">
            What We Value in Instructors
          </h1>

          <div className="space-y-6">
            {qualities.map((quality, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="bg-indigo-500/10 dark:bg-indigo-500/20 p-2 rounded-full mt-1">
                  {quality.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-1">{quality.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{quality.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

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
    </motion.div>
  );
}

function ReadyToJoinSection({ setIsModalOpen }) {
  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 py-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 border-2 border-dashed rounded-xl w-full h-full" />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-orange-500/20"></div>
          </motion.div>

        <div>
          <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-orange-500 bg-clip-text text-transparent">
            Ready to Inspire Learners?
          </h1>

          <div className="space-y-4 mb-8">
            {[
              "Familiarize yourself with our diverse range of courses",
              "Craft a compelling application showcasing your passion and expertise",
              "Outline your proposed course offerings"
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700 dark:text-gray-300">{item}</p>
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-indigo-600 to-orange-500 text-white py-3 px-8 rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
          >
            Apply Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

function FinalCallToAction() {
  return (
    <motion.div
      className="max-w-4xl mx-auto px-4 py-12 text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-gradient-to-r from-indigo-600 to-orange-500 rounded-2xl p-10">
        <h5 className="text-2xl font-bold text-white mb-6">
          Join Us in Transforming Lives Through Education!
        </h5>
        <p className="text-white/90 max-w-2xl mx-auto mb-8">
          At Cyber Courses, we believe education has the power to transform lives. Join us in creating a world
          where knowledge knows no bounds and together let&apos;s inspire, innovate, and educate!
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-indigo-600 py-3 px-8 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
        >
          Start Teaching Journey
        </motion.button>
      </div>
    </motion.div>
  );
}

function BackToTopButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-10 right-10 bg-gradient-to-r from-indigo-600 to-orange-500 text-white p-3 rounded-full shadow-lg z-50"
      aria-label="Back to top"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </motion.button>
  );
}

function ApplicationModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/30 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Apply as Instructor</h3>
            <motion.button
              whileHover={{ rotate: 90, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          </div>

          <form className="space-y-4">
            <h5 className="mb-6 text-lg font-medium text-gray-700 dark:text-gray-300">
              Join Our Global Community of Expert Instructors
            </h5>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="f_name" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">First Name</label>
                  <input
                    type="text"
                    id="f_name"
                    className="w-full px-4 py-2 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label htmlFor="l_name" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Last Name</label>
                  <input
                    type="text"
                    id="l_name"
                    className="w-full px-4 py-2 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Phone Number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="degree" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                  Highest Degree
                </label>
                <select
                  id="degree"
                  className="w-full px-4 py-2 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select your degree</option>
                  <option value="High School">High School</option>
                  <option value="Undergraduate">Undergraduate</option>
                  <option value="Graduate">Graduate</option>
                  <option value="Post-Graduate">Post-Graduate</option>
                </select>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                  Subject to Teach
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-2 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select a subject</option>
                  <option value="Technology">Technology</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Business">Business</option>
                  <option value="Education">Education</option>
                </select>
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Address</label>
                <textarea
                  id="address"
                  rows={4}
                  className="w-full px-4 py-2 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your address"
                ></textarea>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 mr-2"
                />
                <label htmlFor="terms" className="text-sm text-gray-700 dark:text-gray-300">
                  I acknowledge and warrant the truthfulness of the information I submit, and agree to all Terms of service.
                </label>
              </div>
            </div>
          </form>
        </div>

        <div className="bg-gray-100/50 dark:bg-gray-700/50 px-6 py-4 rounded-b-lg flex justify-end space-x-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            Close
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-indigo-600 to-orange-500 text-white px-4 py-2 rounded-lg hover:shadow-md transition-all"
          >
            Apply Now
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
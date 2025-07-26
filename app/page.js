'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight, FaChalkboardTeacher, FaGraduationCap, FaLaptopCode, FaShieldAlt } from 'react-icons/fa'
import Courses from '@/components/Courses'

const slides = [
  {
    image: '/img/bck.jpeg',
    subHeading: 'Best E-learning platform',
    heading: "Your Trusted Partner",
    text: 'Join a vibrant community dedicated to protecting digital assets and advancing your career in cyber security. Start learning today to stay ahead in this critical field.',
  },
  {
    image: '/img/lab1.jpg',
    subHeading: 'Welcome to Cyber course',
    heading: 'Interactive Learning Experience',
    text: 'Engage with interactive lessons, quizzes, and projects. Experience hands-on learning that keeps you motivated and inspired.',
  },
]

const features = [
  {
    icon: <FaGraduationCap className="w-12 h-12 text-indigo-500" />,
    title: 'Learn anything',
    description: 'Explore any interest or trending topic, advance your skills',
    delay: 0.1,
  },
  {
    icon: <FaShieldAlt className="w-12 h-12 text-orange-500" />,
    title: 'Save money',
    description: 'Spend less while accessing premium cybersecurity content',
    delay: 0.3,
  },
  {
    icon: <FaLaptopCode className="w-12 h-12 text-teal-500" />,
    title: 'Flexible learning',
    description: 'Learn at your own pace, switch between multiple courses',
    delay: 0.5,
  },
  {
    icon: <FaGraduationCap className="w-12 h-12 text-purple-500" />,
    title: 'Unlimited certificates',
    description: 'Earn certificates for every completed learning program',
    delay: 0.7,
  },
];

const faqs = [
  {
    question: 'What is Cyber Security?',
    answer:
      'Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information, extorting money from users via ransomware, or interrupting normal business processes.',
  },
  {
    question:
      'Why should I choose Cyber Courses for cybersecurity training?',
    answer:
      'Our platform offers industry-leading cybersecurity courses crafted by experts with real-world experience. The content is constantly updated to reflect the latest threats and defense strategies, ensuring you gain relevant, practical skills.',
  },
  {
    question: 'How many courses can I enroll in simultaneously?',
    answer:
      'You can enroll in multiple courses at the same time and switch between them based on your learning goals and schedule.',
  },
  {
    question: 'How do I enroll in these courses?',
    answer:
      'Simply create an account, browse our catalog, and enroll with one click. Start learning immediately after enrollment.',
  },
  {
    question: 'What are your most popular cybersecurity courses?',
    answer: (
      <div>
        <p>
          Our curriculum focuses on in-demand cybersecurity skills, helping learners develop industry-relevant knowledge. Some of our most popular courses include:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Cybersecurity Fundamentals</li>
          <li>Ethical Hacking & Penetration Testing</li>
          <li>Cloud Security Architecture</li>
          <li>Incident Response & Threat Hunting</li>
        </ul>
      </div>
    ),
  },
]

export default function Home() {
  const [current, setCurrent] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index))
  }

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(nextSlide, 7000)
    return () => clearInterval(interval)
  }, [])

  return (<>
    {/* Hero Section with Glass Effect */}
    <section className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-black">
      {slides.map((slide, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: i === current ? 1 : 0,
            scale: i === current ? 1 : 1.05
          }}
          transition={{ duration: 1.2 }}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${i === current ? 'z-10' : 'z-0'}`}
        >
          <Image
            src={slide.image}
            alt={slide.heading}
            fill
            className="object-cover"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-indigo-900/50 dark:from-black/80 dark:to-indigo-900/30 flex items-center">
            <div className="container mx-auto px-4 md:px-10">
              <div className="max-w-2xl backdrop-blur-sm bg-white/5 dark:bg-black/20 p-8 rounded-2xl border border-white/10 shadow-2xl">
                <motion.h5
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="uppercase text-orange-400 text-lg mb-3 font-semibold tracking-wider"
                >
                  {slide.subHeading}
                </motion.h5>
                <motion.h1
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-white text-4xl md:text-5xl font-bold mb-4 leading-tight"
                >
                  {slide.heading}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-gray-200 mb-6 text-lg max-w-xl"
                >
                  {slide.text}
                </motion.p>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="flex gap-4"
                >
                  <motion.a
                    href="/about"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all shadow-md"
                  >
                    Read More
                  </motion.a>
                  <motion.a
                    href="/signup"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all shadow-md"
                  >
                    Join Now
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Navigation Arrows */}
      <div className="absolute left-4 bottom-10 z-20 flex gap-4">
        <motion.button 
          onClick={prevSlide} 
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white/20 dark:bg-black/30 backdrop-blur-sm p-2 rounded-full border border-white/30"
        >
          <span className="text-white text-xl">⬅</span>
        </motion.button>
        <motion.button 
          onClick={nextSlide}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white/20 dark:bg-black/30 backdrop-blur-sm p-2 rounded-full border border-white/30"
        >
          <span className="text-white text-xl">➡</span>
        </motion.button>
      </div>
    </section>

    {/* Features Section with Glass Cards */}
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h1
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-orange-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Invest in Your Cyber Future
          </motion.h1>
          <motion.p
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Get unlimited access to our cybersecurity courses taught by industry experts and top instructors.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/30 rounded-xl text-center p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: item.delay }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="mx-auto mb-6"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {item.icon}
              </motion.div>
              <h5 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">{item.title}</h5>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* About Section with Modern Layout */}
    <section className="py-16 px-4 md:px-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image with floating animation */}
          <motion.div 
            className="relative min-h-[400px] rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Image
              src="/img/logo4.png"
              alt="About Us"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h6 className="text-sm font-semibold uppercase text-orange-500 mb-2 tracking-wider">About Us</h6>
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-orange-500 bg-clip-text text-transparent">
              Welcome to Cyber Courses
            </h1>
            <p className="text-gray-700 dark:text-gray-300 mb-5 text-lg">
              At Cyber Course Academy, we're dedicated to empowering individuals and
              organizations to navigate the complex world of cybersecurity.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg">
              Our mission is to democratize cybersecurity education, offering cutting-edge courses 
              taught by industry veterans to help you protect against evolving digital threats.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4 text-gray-700 dark:text-gray-300 mb-8">
              {[
                'Expert Instructors',
                'Live Interactive Sessions',
                'Comprehensive Course Catalog',
                'Community Engagement',
                'Personalized Learning Paths',
                'Industry Certifications'
              ].map((feature, i) => (
                <motion.p 
                  key={i} 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  viewport={{ once: true }}
                >
                  <span className="bg-indigo-500/10 dark:bg-indigo-500/20 p-2 rounded-full">
                    <FaArrowRight className="text-indigo-500" />
                  </span>
                  {feature}
                </motion.p>
              ))}
            </div>

            {/* Button */}
            <motion.a
              href="/about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-8 rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
            >
              Learn More
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>

    {/* CTA Section with Glass Effect */}
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-[url('/img/grid.svg')] bg-center opacity-10 dark:opacity-5"></div>
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center px-4">
        <motion.div 
          className="space-y-6 p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/30 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-orange-500 bg-clip-text text-transparent">
            Start Your Cyber Journey
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Begin with our free introductory courses and build your cybersecurity skills from the ground up.
          </p>
          <motion.a
            href="/signup"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 text-white py-3 px-8 rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
          >
            Start For Free
          </motion.a>
        </motion.div>

        <motion.div 
          className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Image
            src="/img/typing - Copy.png"
            alt="Free Courses"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-orange-500/20"></div>
        </motion.div>
      </div>
    </section>

    {/* Courses Section */}
    <Courses />

    {/* Become Instructor Section */}
    <section className="py-16 bg-gradient-to-r from-indigo-900/20 to-gray-900/30 dark:from-indigo-900/10 dark:to-gray-900/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/30 dark:border-gray-700/30 shadow-2xl">
          {/* Image */}
          <div className="min-h-[500px] relative">
            <Image
              src="/img/cat-3.jpg"
              alt="Instructor"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/40 to-gray-900/30"></div>
          </div>

          {/* Content */}
          <div className="p-8 lg:p-12">
            <h1 className="mb-6 text-4xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Become an Instructor
            </h1>
            <p className="mb-6 text-gray-700 dark:text-gray-300 text-lg">
              Share your cybersecurity expertise with millions of learners worldwide. 
              We provide the platform and tools to help you create impactful courses.
            </p>
            <motion.a
              href="/instructor"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-8 rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
            >
              Start Teaching Today
              <FaChalkboardTeacher />
            </motion.a>
          </div>
        </div>
      </div>
    </section>

    {/* FAQ Section with Glass Cards */}
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h1
            className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-orange-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Find answers to common questions about our cybersecurity courses and platform.
          </motion.p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/30 rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center p-6 text-left font-semibold text-gray-800 dark:text-gray-100 hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <span className="text-lg">{faq.question}</span>
                <span className="text-xl">{activeIndex === index ? '−' : '+'}</span>
              </button>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="px-6 pb-6 text-gray-700 dark:text-gray-300"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>);
}
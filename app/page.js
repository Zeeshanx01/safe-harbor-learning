'use client'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import Courses from '@/components/Courses'

const slides = [
  {
    image: '/img/bck.jpeg',
    subHeading: 'Best E-learning platform',
    heading: "Your Trust Partner's",
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
    icon: '/img/icon1.png',
    title: 'Learn anything',
    description: 'Explore any interest or trending topic, take advance your skills',
    delay: 0.1,
  },
  {
    icon: '/img/icon2.png',
    title: 'Save money',
    description: 'Spend less money on your learning if you plan to take multiple courses this year',
    delay: 0.3,
  },
  {
    icon: '/img/icon3.png',
    title: 'Flexible learning',
    description: 'Learn at your own place, move between multiple courses or switch to a different course',
    delay: 0.5,
  },
  {
    icon: '/img/icon4.png',
    title: 'Unlimited certificates',
    description: 'Earn certificate for every learning program you complete at additional cost',
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
      'Why should I choose Great Learning Academy for free courses with certificates?',
    answer:
      'Great Learning Academy is an excellent choice for free courses with certificates because of the high quality of the learning content. The courses are well-crafted, offer a great learning experience, and are interactive and engaging, making them ideal for learners in identifying what works best for their career goals.',
  },
  {
    question: 'How many free courses can I enroll in at the same time?',
    answer:
      'You can simultaneously enroll in multiple courses at Cyber Security.',
  },
  {
    question: 'How can I enroll in these free online courses?',
    answer:
      'You can click on the “Sign Up” button at the top-right of the page and register with your email address, or you can sign up using your Google Account.',
  },
  {
    question: 'What are the most popular free courses offered by Cyber Security?',
    answer: (
      <div>
        <p>
          Cyber Course is based on in-demand concepts and skills, where learners
          can develop industry-relevant knowledge in their chosen sector. It
          provides a wide range of courses in prestigious fields, assisting
          learners across the globe in achieving their professional goals.
        </p>
        <p className="mt-2">Some of the most popular free courses offered by Cyber Security that are in high demand today include:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Cybersecurity Awareness</li>
          <li>Cybersecurity Social Engineering</li>
          <li>Ethical Hacking</li>
          <li>Penetration Testing</li>
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





  return (<>





    <section className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: i === current ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${i === current ? 'z-10' : 'z-0'
            }`}
        >
          <Image
            src={slide.image}
            alt={slide.heading}
            fill
            className="object-cover"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-[rgba(24,29,56,0.7)] flex items-center">
            <div className="container mx-auto px-4 md:px-10">
              <div className="max-w-2xl">
                <motion.h5
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="uppercase text-orange-400 text-lg mb-3"
                >
                  {slide.subHeading}
                </motion.h5>
                <motion.h1
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-white text-4xl md:text-5xl font-bold mb-4"
                >
                  {slide.heading}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-white mb-6"
                >
                  {slide.text}
                </motion.p>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="flex gap-4"
                >
                  <a
                    href="/about"
                    className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
                  >
                    Read More
                  </a>
                  <a
                    href="/signup"
                    className="bg-white text-black px-6 py-3 rounded hover:bg-gray-200 transition"
                  >
                    Join Now
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Navigation Arrows (optional) */}
      <div className="absolute left-4 bottom-10 z-20 flex gap-4">
        <button onClick={prevSlide} className="text-white text-xl">⬅</button>
        <button onClick={nextSlide} className="text-white text-xl">➡</button>
      </div>
    </section>











    <section className="py-16 bg-white dark:bg-[#0d0d0d] text-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <motion.h1
            className="text-3xl md:text-4xl font-bold mb-4 text-[#fb873f]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Invest in your professional goals with Cyber Courses
          </motion.h1>
          <motion.p
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Get unlimited access to over 90% of courses, Projects, Specializations, and Professional Certificates on courses, taught by top instructors.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-[#1a1a1a] shadow-md rounded-lg text-center p-6 hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: item.delay }}
              viewport={{ once: true }}
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={60}
                height={60}
                className="mx-auto mb-4"
              />
              <h5 className="text-xl font-semibold mb-2">{item.title}</h5>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>













    <section className="py-16 px-4 md:px-0">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image Section */}
          <div className="relative min-h-[400px]">
            <Image
              src="/img/logo4.png"
              alt="About Us"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          {/* Content Section */}
          <div>
            <h6 className="text-sm font-semibold uppercase text-orange-400 mb-2">About Us</h6>
            <h1 className="text-4xl font-bold mb-4 text-[#fb873f]">Welcome to Cyber Courses</h1>
            <p className="text-gray-300 mb-4">
              At Cyber Course Academy, we're dedicated to empowering individuals and
              organizations to navigate the complex world of cybersecurity. Our team of experienced
              professionals is passionate about providing high-quality training and education to help others
              protect themselves from ever-evolving cyber threats.
            </p>
            <p className="text-gray-300 mb-6">
              Welcome to Cyber Courses, your gateway to boundless learning opportunities. We're
              dedicated to democratizing education, offering a diverse range of courses taught by industry
              experts. Our mission is to empower learners worldwide, fostering a community-driven platform
              where knowledge knows no limits.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4 text-gray-300 text-sm">
              {[
                'Expert Instructors',
                'Live Interactive Sessions',
                'Comprehensive Course Catalog',
                'Community Engagement',
                'Personalized Learning Paths',
                'Certification and Recognition'
              ].map((feature, i) => (
                <p key={i} className="flex items-center gap-2">
                  <FaArrowRight className="text-orange-400" />
                  {feature}
                </p>
              ))}
            </div>

            {/* Button */}
            <a
              href="/about"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 mt-6 rounded transition"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>










    <section className="py-16 bg-gray-100">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center px-4">
        <div className="space-y-6 p-6">
          <h1 className="text-4xl font-bold text-[#fb873f]">Explore Free Courses</h1>
          <p className="text-gray-700">
            Start your online learning journey at Great Learning Academy for free with our
            short-term basic courses across various in-demand domains.
          </p>
          <a
            href="/signup"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded transition"
          >
            Start For Free
          </a>
        </div>

        <div className="relative h-[400px]">
          <Image
            src="/img/typing - Copy.png"
            alt="Free Courses"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>















<Courses />











    <section className="pb-5 bg-[url('/img/banner-3.jpg')] bg-cover bg-center">
      <div className="container-xxl mt-10 px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Image */}
          <div className="min-h-[400px] relative">
            <img
              src="/img/cat-3.jpg"
              alt="Instructor"
              className="absolute inset-0 w-full h-full object-cover bg-light"
            />
          </div>

          {/* Right Content */}
          <div className="p-5 flex flex-col justify-center">
            <h1 className="mb-4 text-3xl md:text-4xl font-bold text-[#fb873f]">
              Become an Instructor
            </h1>
            <p className="mb-4 text-white">
              Instructors from around the world teach millions of learners on Udemy. We provide
              the tools and skills to teach what you love.
            </p>
            <a
              href="/instructor.html"
              className="btn bg-[#fb873f] text-white py-3 px-6 mt-2 w-max rounded hover:bg-[#e3732f] transition"
            >
              Start Teaching Today
            </a>
          </div>
        </div>
      </div>
    </section>








    <section className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800 dark:text-white bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none"
              >
                {faq.question}
                <span>{activeIndex === index ? '−' : '+'}</span>
              </button>
              {activeIndex === index && (
                <div className="p-4 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>








  </>);
}

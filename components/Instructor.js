'use client'

// app/instructor/page.tsx
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function InstructorPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white">
      <Head>
        <title>Safe Harbor Learning : Instructor</title>
        <meta name="description" content="Become an instructor at Safe Harbor Learning" />
        <meta name="keywords" content="instructor, teaching, e-learning" />
        <link rel="icon" href="/lock.png" />
      </Head>

      {/* <Navbar /> */}

      <main>
        <PageHeader />

        <ApplySection />

        <WhyChooseSection />

        <HowItWorksSection />

        <WhatWeLookForSection />

        <ReadyToJoinSection setIsModalOpen={setIsModalOpen} />


        <FinalCallToAction />
      </main>

      {/* <Footer /> */}

      <BackToTopButton />

      {isModalOpen && <ApplicationModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}


function PageHeader() {
  return (
    <div className="bg-gradient-to-r from-[rgba(24,29,56,0.7)] to-[rgba(24,29,56,0.7)] bg-cover bg-center py-20 mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white animate-fadeInDown">
            Become An Instructor
          </h1>
          <nav className="mt-6">
            <ol className="flex justify-center space-x-2">
              <li>
                <Link href="/" className="text-white hover:text-[#f69050] transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-white">/</li>
              <li className="text-white font-medium">Become An Instructor</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
}

function ApplySection() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="inline-block bg-white px-4 py-2 text-2xl font-bold text-[#fb873f] mb-8">
          Apply As Instructor
        </h1>
      </div>

      <div className="max-w-4xl mx-auto">
        <h5 className="text-xl font-semibold text-[#181d38] mb-4">
          Welcome to Cyber Courses - Where Knowledge Meets Innovation
        </h5>
        <p className="text-gray-700 mb-6">
          Are you passionate about sharing your expertise and making a real impact on learners worldwide?
          If so, we invite you to become an instructor on our dynamic e-learning platform! Join a community
          of educators dedicated to fostering a love for learning and empowering individuals to achieve their goals.
        </p>
      </div>
    </div>
  );
}

function WhyChooseSection() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2 h-96 relative">
          <Image
            src="/img/download.jfif"
            alt="Why Choose Cyber Courses"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold text-[#fb873f] mb-6">
            Why Choose Cyber Courses as Your Teaching Hub?
          </h1>

          <ul className="space-y-4">
            <li>
              <span className="font-bold">Global Reach, Local Impact:</span> Reach a diverse audience from all corners of the globe while making a meaningful difference in individual lives.
            </li>
            <li>
              <span className="font-bold">Cutting-Edge Technology:</span> Leverage our state-of-the-art e-learning infrastructure, ensuring a seamless and engaging learning experience for both you and your students.
            </li>
            <li>
              <span className="font-bold">Flexible Teaching Opportunities:</span> Create and manage your courses on a schedule that suits your lifestyle, allowing you to balance your professional and personal commitments.
            </li>
            <li>
              <span className="font-bold">Competitive Compensation:</span> Benefit from a transparent and rewarding compensation structure that recognizes your expertise and commitment to education.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      title: "Application Process",
      description: "Submit your application and provide details about your expertise, teaching philosophy, and the courses you want to offer."
    },
    {
      title: "Content Creation",
      description: "Develop high-quality course content with the support of our instructional design team, ensuring your materials are engaging and effective."
    },
    {
      title: "Go Live",
      description: "Once approved, your courses go live on our platform, and learners from around the world can enroll and benefit from your knowledge."
    },
    {
      title: "Engage and Grow",
      description: "Interact with your students through discussion forums, live Q&A sessions, and feedback mechanisms fostering a supportive learning community."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-[#fb873f] mb-4">How It Works</h1>
        <p className="text-gray-600">Your Journey to Becoming an Instructor</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#f69050] transition-all hover:shadow-lg hover:-translate-y-2"
          >
            <h5 className="text-xl font-semibold text-[#181d38] mb-3">{step.title}</h5>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function WhatWeLookForSection() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
        <div className="lg:w-1/2 h-96 relative">
          <Image
            src="/img/course-5.jpg"
            alt="What We Look For"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold text-[#fb873f] mb-6">
            What We Look for in Our Instructors
          </h1>

          <ul className="space-y-4">
            <li>
              <span className="font-bold">Passion for Teaching:</span> Sharing knowledge and facilitating the learning journey for others.
            </li>
            <li>
              <span className="font-bold">Expertise in Your Field:</span> Demonstrated expertise in your subject matter, backed by relevant qualifications and experience.
            </li>
            <li>
              <span className="font-bold">Communication Skills:</span> Clear and effective communication to convey complex concepts and engage learners of various backgrounds.
            </li>
            <li>
              <span className="font-bold">Innovation:</span> Willingness to embrace innovative teaching methods and technologies to enhance the learning experience.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function ReadyToJoinSection({ setIsModalOpen }) {

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2">
          <Image
            src="/img/ready.jpg"
            alt="Ready to Join"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>

        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold text-[#fb873f] mb-4">Ready to Join Us?</h1>
          <p className="text-gray-600 mb-6">Here's How to Get Started</p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-[#f69050] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Familiarize yourself with our diverse range of courses we offer.</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-[#f69050] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Craft a compelling application that showcases your passion, expertise, and proposed course offerings.</span>
            </li>
          </ul>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#fb873f] hover:bg-transparent border-2 border-[#fb873f] text-white hover:text-[#fb873f] py-3 px-8 rounded transition-all duration-300 font-medium"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}

function FinalCallToAction() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h5 className="text-xl font-semibold text-[#181d38] mb-4">
          Join Us in Transforming Lives Through Education!
        </h5>
        <p className="text-gray-700">
          At Harbor learning, we believe that education has the power to transform lives. Join us in creating a world
          where knowledge knows no bounds and together let's inspire, innovate, and educate!
        </p>
      </div>
    </div>
  );
}



function BackToTopButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-10 right-10 bg-[#f69050] text-white p-3 rounded-full shadow-lg hover:bg-[#fb873f] transition-colors"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}

function ApplicationModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-2xl">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">Apply as Instructor</h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form>
            <h5 className="mb-6 text-lg font-medium">
              Join Save Harbor Global Community of Expert Instructors
            </h5>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="f_name" className="block text-sm font-medium mb-1">First Name</label>
                  <input
                    type="text"
                    id="f_name"
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#f69050]"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label htmlFor="l_name" className="block text-sm font-medium mb-1">Last Name</label>
                  <input
                    type="text"
                    id="l_name"
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#f69050]"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#f69050]"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#f69050]"
                    placeholder="Phone Number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="degree" className="block text-sm font-medium mb-1">
                  What is the highest degree?
                </label>
                <select
                  id="degree"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#f69050]"
                >
                  <option value="">Select your degree</option>
                  <option value="High School">High School</option>
                  <option value="Undergraduate">Undergraduate</option>
                  <option value="Graduate">Graduate</option>
                  <option value="Post-Graduate">Post-Graduate</option>
                </select>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  What subject would you like to teach?
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#f69050]"
                >
                  <option value="">Select a subject</option>
                  <option value="Technology">Technology</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Business">Business</option>
                  <option value="Education">Education</option>
                </select>
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium mb-1">Address</label>
                <textarea
                  id="address"
                  rows={4}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#f69050]"
                  placeholder="Your address"
                ></textarea>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 mr-2"
                />
                <label htmlFor="terms" className="text-sm">
                  I acknowledge and warrant the truthfulness of the information I submit, I also acknowledge that I have read, understand, and I agree with all Terms of service, and that I fully agree that all sales are final and that there are no refunds whatsoever.
                </label>
              </div>
            </div>
          </form>
        </div>

        <div className="bg-gray-100 px-6 py-4 rounded-b-lg flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-200 transition-colors"
          >
            Close
          </button>
          <button
            type="submit"
            className="bg-[#fb873f] text-white px-4 py-2 rounded hover:bg-[#f69050] transition-colors"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
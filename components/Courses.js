'use client';

import React from 'react';
import Image from 'next/image';

const categories = [
  { title: 'Application Security', image: '/img/vpn.png' },
  { title: 'Cloud Security', image: '/img/secure-data.png' },
  { title: 'Endpoint Security', image: '/img/network.png' },
  { title: 'Mobile Security', image: '/img/lock.png' },
  { title: 'IoT Security', image: '/img/cctv.png' },
  { title: 'Critical infrastructure sec', image: '/img/alarm-sign-of-an-exclamation-symbol-in-a-triangle.png' },
  { title: 'Build your cyber security', image: '/img/data-protection.png' },
  { title: 'Internet of Things', image: '/img/iot.png' },
];

const Courses = () => {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h6 className="text-sm uppercase tracking-wide text-gray-500">Categories</h6>
            <h1 className="text-4xl font-bold text-[#fb873f]">Popular Topics to Explore</h1>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {categories.map((cat, idx) => (
              <div key={idx} className="text-center shadow-lg p-4 bg-white hover:shadow-xl transition rounded">
                <div className="relative w-20 h-20 mx-auto mb-3">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h5 className="text-md font-medium">
                  <a href="#" className="text-gray-800 hover:text-[#fb873f]">
                    {cat.title}
                  </a>
                </h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h6 className="inline-block bg-white text-primary px-3 text-sm font-semibold uppercase tracking-widest">
            Popular Courses
          </h6>
          <h1 className="text-4xl font-bold mb-12 mt-2">Our Popular Courses</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Course Card 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <img
                src="/img/course-1.jpg"
                alt="Web Design"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-primary text-sm font-semibold">Web Design</span>
                  <span className="text-sm text-gray-600">$149.00</span>
                </div>
                <h5 className="text-lg font-bold mb-2">
                  Web Design & Development Course for Beginners
                </h5>
                <p className="text-sm text-gray-600 mb-4">
                  Learn the fundamentals of web design and front-end development with this beginner course.
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span><i className="fa fa-user text-primary me-2"></i>1.2k Students</span>
                  <span><i className="fa fa-star text-primary me-2"></i>4.5 (250)</span>
                </div>
              </div>
            </div>

            {/* Course Card 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <img
                src="/img/course-2.jpg"
                alt="Graphic Design"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-primary text-sm font-semibold">Graphic Design</span>
                  <span className="text-sm text-gray-600">$199.00</span>
                </div>
                <h5 className="text-lg font-bold mb-2">
                  Become a Professional Graphic Designer
                </h5>
                <p className="text-sm text-gray-600 mb-4">
                  Dive deep into Adobe tools and branding techniques to become a pro graphic designer.
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span><i className="fa fa-user text-primary me-2"></i>2.1k Students</span>
                  <span><i className="fa fa-star text-primary me-2"></i>4.7 (320)</span>
                </div>
              </div>
            </div>

            {/* Course Card 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <img
                src="/img/course-3.jpg"
                alt="Digital Marketing"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-primary text-sm font-semibold">Marketing</span>
                  <span className="text-sm text-gray-600">$129.00</span>
                </div>
                <h5 className="text-lg font-bold mb-2">
                  Digital Marketing Masterclass 2025
                </h5>
                <p className="text-sm text-gray-600 mb-4">
                  Master SEO, PPC, email, and content marketing strategies for 2025 and beyond.
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span><i className="fa fa-user text-primary me-2"></i>3.4k Students</span>
                  <span><i className="fa fa-star text-primary me-2"></i>4.8 (410)</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;

import React from 'react'

const about = () => {
  return (    <>
      {/* Page Header */}
      <div className="bg-primary py-16 mb-16 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slideInDown">About Us</h1>
          <nav className="text-sm">
            <ol className="flex justify-center space-x-2">
              <li>
                <a href="/" className="hover:underline text-white">Home</a>
              </li>
              <li>/</li>
              <li className="text-white">About</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-10 text-gray-300">
        <div className="space-y-8">

          <div>
            <h6 className="uppercase text-sm tracking-wider text-orange-400 mb-2">About Us</h6>
            <h2 className="text-3xl font-bold text-orange-400 mb-4">Welcome to Cyber Courses</h2>
            <p className="mb-4">
              At Cyber Courses, we believe in accessible, innovative learning experiences that adapt to your schedule and learning style. Join us in embracing the future of education and unlock your potential.
            </p>
            <p>
              Welcome to Cyber Courses, where learning knows no boundaries. Our mission is to empower individuals worldwide through accessible and innovative education. Here's what sets us apart:
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-orange-400 mb-2">Our Vision</h3>
            <p>
              At Cyber Courses, we envision a world where learning is accessible to everyone, regardless of their location, background, or circumstances. We strive to break barriers and make education a transformative and inclusive experience for all.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-orange-400 mb-2">A Commitment to Excellence</h3>
            <p>
              We are dedicated to providing top-quality education. Our team collaborates with industry experts and educators to curate courses that meet the highest standards, ensuring our learners receive valuable and up-to-date knowledge.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-orange-400 mb-2">Empowering Learners</h3>
            <p>
              We believe in the transformative power of education. Cyber Security is designed to empower individuals to pursue their passions, advance their careers, and acquire new skills in a dynamic and supportive environment.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-orange-400 mb-2">Innovation in Learning</h3>
            <p>
              Embracing technology, we offer innovative learning methods and tools. From interactive modules to live sessions, we're committed to providing a cutting-edge learning experience that fosters engagement and knowledge retention.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-orange-400 mb-2">Community-Centric Approach</h3>
            <p>
              Cyber is more than just courses; it's a vibrant community. We encourage collaboration, discussion, and knowledge sharing among learners, fostering an environment of growth and camaraderie.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-orange-400 mb-2">Diverse and Inclusive Education</h3>
            <p>
              We celebrate diversity in perspectives, cultures, and ideas. Our diverse course offerings cater to various interests and skill levels, ensuring that everyone finds a learning path that resonates with them.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-orange-400 mb-2">Continuous Improvement</h3>
            <p>
              We are always evolving. Feedback from our learners helps us continually enhance our platform, ensuring it remains dynamic, responsive, and aligned with the evolving needs of our users.
            </p>
          </div>

          <p className="mt-10">
            Thank you for being a part of Cyber Courses. Together let's embark on a journey of lifelong learning and growth.
          </p>

        </div>
      </section>
    </> )
}

export default about

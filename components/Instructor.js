import React from 'react'
import Image from 'next/image'
const instructors = [
  {
    name: 'Instructor Name',
    profession: 'Instructor Profession',
    image: '/img/team-1.jpg',
  },
  {
    name: 'Instructor Name',
    profession: 'Instructor Profession',
    image: '/img/team-2.jpg',
  },
  {
    name: 'Instructor Name',
    profession: 'Instructor Profession',
    image: '/img/team-3.jpg',
  },
  {
    name: 'Instructor Name',
    profession: 'Instructor Profession',
    image: '/img/team-4.jpg',
  },
];
const Instructor = () => {
  return (
    <div>
      <div className="pt-20 pb-10 px-4 md:px-10 bg-[#f0fbfc]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h6 className="inline-block bg-white text-[#06BBCC] px-3 py-1 text-sm font-semibold rounded shadow">
            Instructors
          </h6>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">Expert Instructors</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {instructors.map(({ name, profession, image }, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg overflow-hidden relative"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h5 className="text-xl font-semibold text-[#06BBCC]">{name}</h5>
                <p className="text-gray-600 mt-1">{profession}</p>
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-4 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <a href="#" className="bg-[#06BBCC] p-2 rounded-full hover:bg-[#089cae]">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="bg-[#06BBCC] p-2 rounded-full hover:bg-[#089cae]">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="bg-[#06BBCC] p-2 rounded-full hover:bg-[#089cae]">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Instructor

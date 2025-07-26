import Image from 'next/image'

const teamMembers = [
  {
    name: 'Khadijah Aamir',
    role: 'Team Leader',
    image: '/img/khadijah.jpg'
  },
  {
    name: 'Ahmad Hassan',
    role: 'Team CEO',
    image: '/img/ahmad.jpg'
  },
  {
    name: 'Hafiza Reeda Noor',
    role: 'Team Manager',
    image: '/img/reeda.jpg'
  },
  {
    name: 'Ghulam Dustgeer',
    role: 'Team HR',
    image: '/img/IMG-20240803-WA0006.jpg'
  },
  {
    name: 'M.Imran',
    role: 'Supervisor',
    image: '/img/IMG-20240803-WA0004~2.jpg'
  }
]

export default function TeamPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-primary text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Our Team</h1>
        <p className="text-sm">Home / Team</p>
      </div>

      {/* Team Members */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="bg-gray-50 shadow-md rounded-xl overflow-hidden text-center"
          >
            <div className="pt-6 px-6">
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={500}
                className="object-cover rounded-md mx-auto"
              />
            </div>
            <div className="p-6">
              <h5 className="text-xl font-semibold mb-1">{member.name}</h5>
              <p className="text-gray-600 text-sm">{member.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-orange-400">About Us</a></li>
              <li><a href="/contact" className="hover:text-orange-400">Contact Us</a></li>
              <li><a href="#" className="hover:text-orange-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-orange-400">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-orange-400">FAQs & Help</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Contact</h4>
            <p className="text-sm mb-2">📍 NCBA&E (East Canal Campus) Lahore</p>
            <p className="text-sm mb-2">📞 +92 3104715517</p>
            <p className="text-sm mb-2">✉️ dustgeer780678@gmail.com</p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="hover:text-orange-400"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-orange-400"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="hover:text-orange-400"><i className="fab fa-youtube"></i></a>
              <a href="#" className="hover:text-orange-400"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Subscribe</h4>
            <p className="text-sm mb-4">
              Subscribe now and join our growing community of learners committed to lifelong education!
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded w-full text-black"
                required
              />
              <button
                type="submit"
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="text-center text-sm mt-6">© 2025 Safe Harbor Learning. All rights reserved.</div>
      </footer>
    </div>
  )
}

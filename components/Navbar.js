'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white text-dark shadow">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 lg:px-6 h-[75px]">
        {/* Logo & Brand */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/img/lock.png" alt="Logo" width={50} height={50} />
          <p className="m-0 text-[25px] font-bold">
            Safe Harbor<span className="text-[#fb873f]"> learning</span>
          </p>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden border-2 border-[#fb873f] text-[#fb873f] p-1 rounded"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links */}
        <div
          className={`lg:flex items-center gap-x-8 absolute lg:static bg-white lg:bg-transparent top-[75px] w-full left-0 lg:w-auto px-4 lg:px-0 py-4 lg:py-0 transition-all duration-300 ease-in-out ${menuOpen ? 'block' : 'hidden'
            }`}
        >
          <Link href="/" className="uppercase text-sm font-[500] px-2 py-2 hover:text-[#f69050] transition">
            Home
          </Link>
          <Link href="/about" className="uppercase text-sm font-[500] px-2 py-2 hover:text-[#f69050] transition">
            About
          </Link>
          <Link href="/courses" className="uppercase text-sm font-[500] px-2 py-2 hover:text-[#f69050] transition">
            Courses
          </Link>

          {/* Dropdown */}
          <div className="relative group">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="uppercase text-sm font-[500] flex items-center gap-1 px-2 py-2 hover:text-[#f69050] transition"
            >
              Pages <ChevronDown size={16} />
            </button>
            <div
              className={`absolute bg-white shadow-lg top-full mt-2 w-40 py-2 z-50 transition-all duration-300 ${dropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
            >
              <Link href="/team" className="block px-4 py-2 text-sm hover:bg-[#f69050] hover:text-white transition">
                Our Team
              </Link>
              <Link
                href="/testimonial"
                className="block px-4 py-2 text-sm hover:bg-[#f69050] hover:text-white transition"
              >
                Testimonial
              </Link>

              <Link
                href="/instructor"
                className="block px-4 py-2 text-sm hover:bg-[#f69050] hover:text-white transition"
              >
                Instructor
              </Link>
            </div>
          </div>

          <Link href="/contact" className="uppercase text-sm font-[500] px-2 py-2 hover:text-[#f69050] transition">
            Contact
          </Link>

          <Link href="/login" className="text-dark hover:text-[#f69050] px-2 py-2">
            <i className="fa fa-user text-lg"></i>
            Login
          </Link>

          <div id="google_translate_element" className="ml-2 mt-2 lg:mt-0" />
        </div>
      </div>
    </nav>
  );
}

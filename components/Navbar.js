'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, User, Sun, Moon } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedMode = localStorage.getItem('darkMode');
    if (storedMode === 'true') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const handleDarkModeToggle = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
    document.documentElement.classList.toggle('dark', newMode);
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="fixed w-full top-0 z-50 bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 lg:px-6 h-20">
        {/* Logo & Brand */}
        <Link href="/" className="flex items-center space-x-3">
          {/* <div className="relative w-12 h-12">
            <Image 
              src="/img/lock.png" 
              alt="Logo" 
              fill 
              className="object-contain"
            />
          </div> */}
          <div className="bg-gradient-to-r from-indigo-600 to-orange-500 p-2 max-sm:p-1 rounded-lg">
            <div className="bg-white dark:bg-gray-900 w-10 h-10 max-sm:w-8 max-sm:h-8 p-1 rounded">
              {/* <div className="w-10 h-10 bg-gray-200 rounded" /> */}
            </div>
          </div>
          <p className="text-2xl max-sm:text-lg font-bold bg-gradient-to-r from-indigo-600 to-orange-500 bg-clip-text text-transparent">
            Safe Harbor<span className="text-orange-500"> Learning</span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-5">
          {['About', 'Courses'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="relative font-semibold text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              {item}
              <motion.span
                className="absolute left-0 -bottom-1 h-0.5 w-0 bg-indigo-600"
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          ))}

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-1 font-semibold text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Pages <ChevronDown size={16} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-48 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xs rounded-xl shadow-lg overflow-hidden z-50 border border-gray-200 dark:border-gray-700"
                >
                  {[
                    { title: 'Our Team', path: '/team' },
                    { title: 'Testimonial', path: '/testimonial' },
                    { title: 'Instructor', path: '/instructor' },
                  ].map((item) => (
                    <Link
                      key={item.title}
                      href={item.path}
                      className="block px-4 py-3 text-sm text-gray-800 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/contact"
            className="font-semibold text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Right-aligned buttons */}
        <div className="flex items-center sm:gap-3">
          {/* Dark Mode Toggle */}
          <motion.button
            onClick={handleDarkModeToggle}
            whileTap={{ scale: 0.9 }}
            className="
    sm:p-2 rounded-full 
    bg-white dark:bg-gray-800
    shadow-lg 
    border border-gray-200 dark:border-gray-700
    max-sm:bg-transparent max-sm:dark:bg-transparent
    max-sm:border-0 max-sm:dark:border-0
  "
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="text-yellow-500 w-5 h-5" />
            ) : (
              <Moon className="text-indigo-700 w-5 h-5" />
            )}
          </motion.button>


          {/* Login Button */}
          <Link href="/login">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
  flex items-center gap-2 
  bg-gradient-to-r from-indigo-600 to-orange-500 text-white 
  px-4 sm:py-2 rounded-full shadow-lg 
  max-sm:bg-none max-sm:bg-transparent max-sm:border-0 
  max-sm:text-indigo-600 dark:max-sm:text-yellow-500
"


            >
              <User size={18} />
              <span className="hidden sm:inline">Login</span>
            </motion.button>
          </Link>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden     sm:p-2 rounded-full 
    bg-white dark:bg-gray-800
    shadow-lg 
    border border-gray-200 dark:border-gray-700
    max-sm:bg-transparent max-sm:dark:bg-transparent
    max-sm:border-0 max-sm:dark:border-0 text-yellow-500"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed top-20 right-0 w-72 h-[calc(100vh-5rem)] bg-white/95 dark:bg-gray-900/95 backdrop-blur-xs shadow-2xl lg:hidden z-40 p-6 overflow-y-auto border-l border-gray-200 dark:border-gray-800"
          >
            <div className="flex flex-col gap-4">
              {['About', 'Courses', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-lg font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-800 dark:text-gray-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}

              <div className="pt-2">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center justify-between w-full text-lg font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-800 dark:text-gray-200"
                >
                  <span>Pages</span>
                  <ChevronDown size={20} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {dropdownOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="pl-6 mt-1 space-y-2 overflow-hidden"
                  >
                    {[
                      { title: 'Our Team', path: '/team' },
                      { title: 'Testimonial', path: '/testimonial' },
                      { title: 'Instructor', path: '/instructor' },
                    ].map((item) => (
                      <Link
                        key={item.title}
                        href={item.path}
                        className="block py-3 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div id="google_translate_element" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
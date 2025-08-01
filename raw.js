'use client'
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaUser, FaLock, FaArrowRight, FaUserPlus } from "react-icons/fa";

const AuthPage = () => {
  // State to toggle between Login and Signup
  const [isLogin, setIsLogin] = useState(true);
  const handleToggle = () => setIsLogin(prev => !prev);

  return (
    <>
      {/* Hero Section */}






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
              {isLogin ? "Welcome Back" : "Create Account"}
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
                <li className="font-medium">{isLogin ? 'Login' : 'Sign Up'}</li>
              </ol>
            </nav>
          </motion.div>
        </div>
      </div>












      {/* Form Section */}
      <section className="max-w-md mx-auto px-4 py-8">
        <motion.div
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 
                     dark:border-gray-700/30 rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-8">
            <AnimatePresence exitBeforeEnter>
              {isLogin ? (
                /* Login Form */
                <motion.div
                  key="login"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="text-center mb-8">
                    <div className="bg-gradient-to-r from-indigo-500 to-orange-500 w-16 h-16 
                                    rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaUser className="text-white text-2xl" />
                    </div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-orange-500 
                                   bg-clip-text text-transparent">
                      Login to Your Account
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      Secure access to your cybersecurity courses
                    </p>
                  </div>
                  <form className="space-y-6">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center 
                                      pointer-events-none">
                        <FaUser className="text-gray-500" />
                      </div>
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full pl-10 pr-4 py-3 bg-white/50 dark:bg-gray-700/50 
                                   border border-gray-300 dark:border-gray-600 rounded-lg 
                                   focus:outline-none focus:ring-2 focus:ring-indigo-500 
                                   focus:border-indigo-500"
                      />
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center 
                                      pointer-events-none">
                        <FaLock className="text-gray-500" />
                      </div>
                      <input
                        type="password"
                        placeholder="Password"
                        className="w-full pl-10 pr-4 py-3 bg-white/50 dark:bg-gray-700/50 
                                   border border-gray-300 dark:border-gray-600 rounded-lg 
                                   focus:outline-none focus:ring-2 focus:ring-indigo-500 
                                   focus:border-indigo-500"
                      />
                    </div>
                    <div className="text-right">
                      <Link href="#" className="text-sm text-indigo-600 dark:text-indigo-400 
                                                hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      type="submit"
                      className="w-full py-3 bg-gradient-to-r from-indigo-600 to-orange-500 
                                 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl 
                                 transition-all flex items-center justify-center gap-2"
                    >
                      Login <FaArrowRight />
                    </motion.button>
                    <div className="text-center pt-4 border-t border-gray-200 
                                    dark:border-gray-700 mt-6">
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        Don't have an account?{' '}
                        <button
                          onClick={handleToggle}
                          type="button"
                          className="text-indigo-600 dark:text-indigo-400 
                                     font-medium hover:underline"
                        >
                          Sign up now
                        </button>
                      </p>
                    </div>
                  </form>
                </motion.div>
              ) : (
                /* Signup Form */
                <motion.div
                  key="signup"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="text-center mb-8">
                    <div className="bg-gradient-to-r from-indigo-500 to-orange-500 w-16 h-16 
                                    rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaUserPlus className="text-white text-2xl" />
                    </div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-orange-500 
                                   bg-clip-text text-transparent">
                      Create Your Account
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      Join us and secure access to cybersecurity courses
                    </p>
                  </div>
                  <form className="space-y-6">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center 
                                      pointer-events-none">
                        <FaUser className="text-gray-500" />
                      </div>
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full pl-10 pr-4 py-3 bg-white/50 dark:bg-gray-700/50 
                                   border border-gray-300 dark:border-gray-600 rounded-lg 
                                   focus:outline-none focus:ring-2 focus:ring-indigo-500 
                                   focus:border-indigo-500"
                      />
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center 
                                      pointer-events-none">
                        <FaUser className="text-gray-500" />
                      </div>
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full pl-10 pr-4 py-3 bg-white/50 dark:bg-gray-700/50 
                                   border border-gray-300 dark:border-gray-600 rounded-lg 
                                   focus:outline-none focus:ring-2 focus:ring-indigo-500 
                                   focus:border-indigo-500"
                      />
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center 
                                      pointer-events-none">
                        <FaLock className="text-gray-500" />
                      </div>
                      <input
                        type="password"
                        placeholder="Password"
                        className="w-full pl-10 pr-4 py-3 bg-white/50 dark:bg-gray-700/50 
                                   border border-gray-300 dark:border-gray-600 rounded-lg 
                                   focus:outline-none focus:ring-2 focus:ring-indigo-500 
                                   focus:border-indigo-500"
                      />
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center 
                                      pointer-events-none">
                        <FaLock className="text-gray-500" />
                      </div>
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        className="w-full pl-10 pr-4 py-3 bg-white/50 dark:bg-gray-700/50 
                                   border border-gray-300 dark:border-gray-600 rounded-lg 
                                   focus:outline-none focus:ring-2 focus:ring-indigo-500 
                                   focus:border-indigo-500"
                      />
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      type="submit"
                      className="w-full py-3 bg-gradient-to-r from-indigo-600 to-orange-500 
                                 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl 
                                 transition-all flex items-center justify-center gap-2"
                    >
                      Sign Up <FaArrowRight />
                    </motion.button>
                    <div className="text-center pt-4 border-t border-gray-200 
                                    dark:border-gray-700 mt-6">
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        Already have an account?{' '}
                        <button
                          onClick={handleToggle}
                          type="button"
                          className="text-indigo-600 dark:text-indigo-400 
                                     font-medium hover:underline"
                        >
                          Log in
                        </button>
                      </p>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default AuthPage;

import React from "react";
import Link from "next/link";
import Image from "next/image";

const LoginPage = () => {
  return (
    <>
      {/* Page Header */}
      <div className="bg-[#fb873f] py-16 text-white text-center">
        <h1 className="text-4xl font-bold">Login</h1>
        <nav className="mt-2 text-sm">
          <Link href="/" className="text-white hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span>Login</span>
        </nav>
      </div>

      {/* Login Form */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-xl mx-auto shadow-lg p-8 rounded-md">
          <h2 className="text-2xl font-semibold text-center mb-8">Login</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fb873f]"
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-1 font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fb873f]"
              />
            </div>
            <div className="text-right">
              <Link href="#" className="text-sm text-[#fb873f] hover:underline">
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#fb873f] text-white font-semibold rounded-md hover:bg-[#ea6b25] transition"
            >
              Login
            </button>
            <p className="text-center text-sm">
              Don't have an account?{' '}
              <Link href="/signup" className="text-[#fb873f] hover:underline">
                Signup
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginPage;

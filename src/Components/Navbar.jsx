import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

const Navbar = () => {


  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-white text-lg font-bold">
              <p>Score_Board</p>
            </Link>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Nav Links */}
          <div className='hidden md:block'>

          <Link
              to="/Add Score"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-[18px] font-mono font-semibold"
            >
              AddScore
            </Link>
            <Link
              to="/Score page"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-[18px] font-mono font-semibold"
            >
              Scorepage
            </Link>
            <Link
              to="/Popular player"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-[18px] font-mono font-semibold"
            >
              Popularplayer
            </Link>
            
            <Link
              to="/About Us"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-[18px] font-mono font-semibold"
            >
              AboutUs
            </Link>
            <Link
              to="/Contact Us"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-[18px] font-mono font-semibold"
            >
              ContactUs
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/Score page"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Scorepage
            </Link>
            <Link
              to="/Popular player"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Popularplayer
            </Link>
            <Link
              to="/About Us"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About Us
            </Link>
            <Link
              to="/Contact Us"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              ContactUs
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar
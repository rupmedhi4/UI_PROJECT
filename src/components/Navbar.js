import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="px-6 md:px-16 flex items-center justify-between py-4 bg-white border-b border-gray-200">
      <div className="flex items-center space-x-2">
        <div className="flex items-center justify-center w-8 h-8 bg-black rounded-full">
          <span className="text-white font-bold text-lg">★</span>
        </div>
        <span className="text-xl md:text-2xl font-semibold text-gray-900">Positivus</span>
      </div>

      <div className="hidden lg:flex items-center space-x-6">
        <ul className="flex space-x-4 text-gray-700 font-medium text-base">
          <li className="hover:text-black cursor-pointer">About us</li>
          <li className="hover:text-black cursor-pointer">Services</li>
          <li className="hover:text-black cursor-pointer">Use Cases</li>
          <li className="hover:text-black cursor-pointer">Pricing</li>
          <li className="hover:text-black cursor-pointer">Blog</li>
        </ul>
        <button className="px-4 py-2 border border-gray-400 rounded-xl text-gray-700 hover:bg-gray-100">
          Request a quote
        </button>
      </div>

      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md py-4">
          <ul className="flex flex-col items-center space-y-4 text-gray-700 font-medium text-base">
            <li className="hover:text-black cursor-pointer">Services</li>
            <li className="hover:text-black cursor-pointer">Use Cases</li>
            <li className="hover:text-black cursor-pointer">Pricing</li>
            <li className="hover:text-black cursor-pointer">Blog</li>
            <li className="hover:text-black cursor-pointer">About us</li>
            <li className="hover:text-black cursor-pointer">Contact us</li>
            <button className="mt-4 px-4 py-2 border border-gray-400 rounded text-gray-700 hover:bg-gray-100">
              Request a quote
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#191A23] text-white w-full max-w-[1241px] mx-auto px-12 mt-4 py-12 md:rounded-t-[45px] flex flex-col gap-12">

      <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">

        <h1 className="text-3xl font-bold text-center md:text-left">Positivus</h1>

        <div className="flex flex-col md:items-start space-y-6 md:space-y-4">

          <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-gray-400 text-sm">
            <a href="#about" className="text-gray-400 md:underline hover:text-[#B9FF66]">
              About us
            </a>
            <a href="#services" className="text-gray-400 md:underline hover:text-[#B9FF66]">
              Services
            </a>
            <a href="#use-cases" className="text-gray-400 md:underline hover:text-[#B9FF66]">
              Use Cases
            </a>
            <a href="#pricing" className="text-gray-400 md:underline hover:text-[#B9FF66]">
              Pricing
            </a>
            <a href="#blog" className="text-gray-400 md:underline hover:text-[#B9FF66]">
              Blog
            </a>
          </nav>

        </div>

        <div className="hidden md:flex justify-center space-x-6">
          <a href="#" className="hover:text-[#B9FF66]">
            <FaLinkedin size={24} />
          </a>
          <a href="#" className="hover:text-[#B9FF66]">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="hover:text-[#B9FF66]">
            <FaTwitter size={24} />
          </a>
        </div>



      </div>


      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="flex flex-col md:w-1/3">
          <button className="bg-[#B9FF66] text-black font-medium px-4 py-2 rounded-md mb-4 md:w-[126px]">
            Contact us
          </button>
          <p className="text-sm">Email: info@positivus.com</p>
          <p className="text-sm">Phone: 555-567-8901</p>
          <p className="text-sm">
            Address: 1234 Main St, Moonstone City, Stardust State 12345
          </p>
        </div>

        <div className="flex flex-col md:w-1/3 ">
          <div className="bg-[#1E242B] rounded-lg p-4 flex items-center space-x-4 md:pt-[58px] md:pr-[40px] md:pb-[58px] md:pl-[40px]" >
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent border border-gray-500 text-gray-200 px-4 py-2 rounded-md outline-none w-full focus:ring-2 focus:ring-[#B9FF66]"
            />
            <button className="bg-[#B9FF66] text-black font-medium px-4 py-2 rounded-md hover:bg-green-400">
              Subscribe to news
            </button>
          </div>
          <div className="flex justify-center space-x-6 mt-4 md:hidden">
            <a href="#" className="hover:text-[#B9FF66]">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="hover:text-[#B9FF66]">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:text-[#B9FF66]">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="h-[1px] bg-gray-500"></div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
        <p>© 2025 Positivus. All Rights Reserved.</p>
        <a href="#privacy" className="hover:text-[#B9FF66]">
          Privacy Policy
        </a>

      </div>


    </footer>
  );
};

export default Footer;

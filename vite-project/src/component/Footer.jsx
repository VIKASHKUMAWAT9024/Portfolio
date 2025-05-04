import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left: Name & Tagline */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold">Vikash Kumawat</h3>
          <p className="text-gray-400 mt-2 text-sm md:text-base max-w-md">
            MERN Stack Developer | Building scalable web apps with a focus on performance & user experience.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-4 text-xl text-gray-400">
            <a href="https://github.com/VIKASHKUMAWAT9024" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/vikash-kumawat9024" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaLinkedin />
            </a>
            
            <a href="https://instagram.com/vikashkumawat_75" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaInstagram />
            </a>
          </div>
        </div>
        
        {/* Right: Email Subscribe */}
        <div className="w-full md:w-[40%]">
          <form className="flex bg-gray-800 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow p-3 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-green-400 to-blue-500 px-5 text-white font-medium hover:from-blue-500 hover:to-green-400 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        © 2025 Vikash Kumawat. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

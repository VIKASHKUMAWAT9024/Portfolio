import React from 'react';
import HeroImage from '../assets/Hero.png';

const Hero = () => {
  return (
    <div className="bg-black text-white text-center py-16">
      <img
        src={HeroImage}
        alt="Hero portrait"
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
      />

      <h1 className="text-4xl font-bold">
        I'm{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Vikash Kumawat,
        </span>{' '}
        MERN Stack Developer
      </h1>

      <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
        MERN Stack Developer passionate about modern web development.
        From UI to API, I build apps that perform and engage.
      </p>

      <div className="mt-8 space-x-4">
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Contact With Me
        </button>

        <a
          href="./public/VikashResume.pdf"
          download
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white hidden md:inline transform transition duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;

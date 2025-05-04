import React from 'react';
import HeroImage from '../assets/Hero.png';

const About = () => {
  return (
    <div className='bg-black text-white py-20' id='aboutMe'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>AboutMe</h2>
        
        {/* Main About Section */}
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
          <img
            src={HeroImage}
            alt="Developer avatar"
            className='w-72 h-80 rounded object-cover mb-8 md:mb-0'
          />

          <div className='flex-1'>
            <p className='text-lg mb-8'>
              MERN Stack Developer with a passion for clean, efficient code. <br />
              I build responsive UIs with React and powerful APIs with Node.js. <br />
              My focus is on performance, scalability, and user experience. <br />
              I turn concepts into full-stack web solutions. <br />
              Always improving, always delivering.
            </p>

            {/* Skill Bars */}
            <div className='space-y-4'>
              {[
                { skill: 'HTML & CSS', width: 'w-10/12' },
                { skill: 'React.js', width: 'w-9/12' },
                { skill: 'Node.js', width: 'w-8/12' },
                { skill: 'Express.js', width: 'w-7/12' },
                { skill: 'MongoDB', width: 'w-8/12' },
              ].map(({ skill, width }, i) => (
                <div key={i} className='flex items-center'>
                  <span className='w-3/12'>{skill}</span>
                  <div className='grow bg-gray-800 rounded-full h-2.5'>
                    <div className={`bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full ${width} transform transition-transform duration-300 hover:scale-105`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className='mt-12 flex flex-col sm:flex-row justify-around items-center text-center space-y-6 sm:space-y-0'>
          <div>
            <h3 className='text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500'>1+</h3>
            <p className='text-gray-300'>Years Experience</p>
          </div>
          <div>
            <h3 className='text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500'>5+</h3>
            <p className='text-gray-300 '>Projects</p>
          </div>
          <div>
            <h3 className='text-2xl font-bold  bg-gradient-to-r from-green-400 to-blue-500'>8+</h3>
            <p className='text-gray-300 '>Happy Cliensts</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;

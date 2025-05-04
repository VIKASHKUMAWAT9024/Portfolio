import React from 'react';

const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs.",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Developing robust server-side logic and databases.",
  },
  {
    id: 4,
    title: "Full-Stack Development",
    description: "Combining both frontend and backend development skills.",
  },
  {
    id:5,
    title:"UI/UX Design",
    description:"Designing user interfaces and enhancing user experience.",
  },
  {
    id:6,
    title:"Content Creation",
    description:"Creating engaging content for websites and social media.",
  }
];

const Service = () => {
  return (
    <div className='bg-black text-white py-20' id='services'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>My Services</h2>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service) => (
            <div
              key={service.id}
              className='bg-gray-800 px-6 py-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300'
            >
              <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-2'>
                {service.title}
              </h3>
              <p className='text-gray-300 mb-4'>{service.description}</p>
              <a
                href="#"
                className='inline-block px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg transition duration-300 hover:from-blue-500 hover:to-green-400'
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;

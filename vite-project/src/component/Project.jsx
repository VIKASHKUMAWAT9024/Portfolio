import React from 'react';
import Real from '../assets/Real.png';
import Movie from '../assets/Movie.png';

const projects = [
  {
    id: 1,
    title: "Real-Time Language Translation Tool",
    description: "A web app that translates text in real-time using the Google Translate API.",
    image: Real,
    github: "https://langauge-translate-app-vikasg.netlify.app/",
  },
  {
    id: 2,
    title: "Movie Search App",
    description: "Search for movies and view details using the OMDB API.",
    image: Movie,
    github: "https://github.com/VIKASHKUMAWAT9024/MOVIE-SEARCH",
  },
];

const Projects = () => {
  return (
    <div className='bg-black text-white min-h-screen py-24' id='projects'>
      <div className='container mx-auto px-6 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-16'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          {projects.map((project) => (
            <div
              key={project.id}
              className='bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:scale-105'
            >
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-56 object-cover'
              />
              <div className='p-6'>
                <h3 className='text-2xl font-semibold mb-2'>{project.title}</h3>
                <p className='text-gray-300 mb-4'>{project.description}</p>
                <a
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-block px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg hover:from-blue-500 hover:to-green-400 transition'
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

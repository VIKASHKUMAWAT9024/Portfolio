import React from 'react';
import {
  FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope,
  FaLocationArrow,
} from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='bg-black text-white py-20' id='contact'>
      <div className='container mx-auto px-6 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-4'>Get in Touch</h2>
        <p className='text-center text-gray-400 mb-12 max-w-xl mx-auto'>
          I’d love to hear from you — whether it’s a freelance project, job opportunity, or just to say hi.
        </p>

        <div className='flex flex-col md:flex-row gap-18 md:gap-12'>
          {/* Left: Contact Info */}
          <div className='flex-1 bg-black p-8 rounded-lg flex flex-col justify-between'>
            <div className='space-y-6'>
              <div className='flex items-center gap-4'>
                <FaPhoneAlt className='text-green-500 text-xl' />
                <span className='text-gray-300 text-lg'>+91 90247 35623</span>
              </div>
              <div className='flex items-center gap-4'>
                <FaEnvelope className='text-green-500 text-xl' />
                <span className='text-gray-300 text-lg'>vikashkumawat3079@gmail.com</span>
              </div>
              <div className='flex items-center gap-4'>
                <FaLocationArrow className='text-green-500 text-xl' />
                <span className='text-gray-300 text-lg'>Jaipur, Rajasthan, India</span>

              </div>
            </div>

            
          </div>

          {/* Right: Contact Form */}
          <div className='flex-1 bg-black p-8 rounded-lg'>
            <form className='space-y-6 h-full flex flex-col justify-between'>
              <div>
                <label htmlFor='name' className='block mb-1 text-sm'>Name</label>
                <input
                  type='text'
                  id='name'
                  className='w-full bg-gray-800 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Your Name'
                  required
                />
              </div>
              <div>
                <label htmlFor='email' className='block mb-1 text-sm'>Email</label>
                <input
                  type='email'
                  id='email'
                  className='w-full bg-gray-800 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='you@example.com'
                  required
                />
              </div>
              <div>
                <label htmlFor='message' className='block mb-1 text-sm'>Message</label>
                <textarea
                  id='message'
                  rows='5'
                  className='w-full bg-gray-800 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Let’s discuss your idea...'
                  required
                ></textarea>
              </div>
              <button
                type='submit'
                className='w-full py-3 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 transition text-white font-semibold'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

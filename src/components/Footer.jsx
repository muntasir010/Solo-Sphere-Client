import { FaGithub, FaFacebook } from "react-icons/fa";
import { FcAssistant } from "react-icons/fc";

const Footer = () => {
    return (
        <footer className='bg-white shadow-sm'>
        <hr />
        <div className='container px-6 py-8 mx-auto'>
          <div className='flex flex-col items-center text-center'>
            <div className='flex gap-2 items-center'>
              <img className='w-auto h-7' src='https://i.ibb.co.com/FK0Yx1z/logo.png' alt='' />
              <span>SoloSphere</span>
            </div>
  
            <div className='flex flex-wrap justify-center mt-6 -mx-4'>
              <a
                href='#'
                className='mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 '
                aria-label='Reddit'
              >
                {' '}
                Home{' '}
              </a>
  
              <a
                href='#'
                className='mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 '
                aria-label='Reddit'
              >
                {' '}
                About{' '}
              </a>
  
              <a
                href='#'
                className='mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 '
                aria-label='Reddit'
              >
                {' '}
                Teams{' '}
              </a>
  
              <a
                href='#'
                className='mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 '
                aria-label='Reddit'
              >
                {' '}
                Privacy{' '}
              </a>
  
              <a
                href='#'
                className='mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 '
                aria-label='Reddit'
              >
                {' '}
                Cookies{' '}
              </a>
            </div>
          </div>
  
          <hr className='my-6 border-gray-200 md:my-10 ' />
  
          <div className='flex flex-col items-center sm:flex-row sm:justify-between'>
            <p className='text-sm text-gray-500 '>
              © Copyright 2021. All Rights Reserved.
            </p>
  
            <div className='flex -mx-2'>
              <a
                href='#'
                className='mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500 '
                aria-label='Reddit'
              >
                <FcAssistant/>
              </a>
  
              <a
                href='#'
                className='mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500 '
                aria-label='Facebook'
              >
                <FaFacebook/>
              </a>
  
              <a
                href='#'
                className='mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500 '
                aria-label='Github'
              >
               <FaGithub/>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
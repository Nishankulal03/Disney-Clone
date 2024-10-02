import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      {/* Container */}
      <div className="container mx-auto px-1">
        {/* Footer Top: Logo and Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Comapny</h2>
            <p className="text-gray-400">
                <ul>
            <li className="mb-2">
                <a href="/" className="text-gray-400 hover:text-gray-300">Home</a>
              </li>
              <li className="mb-2">
                <a href="/about" className="text-gray-400 hover:text-gray-300">About Us</a>
              </li>
              </ul>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">View Website in</h3>
            <h3 className='text-gray-400'> English</h3>
            
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Need Help?</h3>
            <h3 className='text-gray-400'>Visit Help Center</h3>
            <h3 className='text-gray-400'>Share FeedBack</h3>
            
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect with us</h3>
            <div className='flex'>
            <FaFacebook className='ml-20 text-2xl' />
            <BsTwitterX className=' ml-5 text-2xl '/>
            </div>
            
          </div>
        </div>

        {/* Divider */}
       

          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Disnep+. All rights reserved.
          </div>
          <div className='flex justify-center'>
            <h3 className="text-gray-400 mr-3">Terms Of Use</h3>
            <h3 className='text-gray-400 mr-3'>   Privacy Policy</h3>
            <h3 className='text-gray-400 ml-3'>  FAQ</h3>
            
          </div>
        
      </div>
    </footer>
  );
}

export default Footer;

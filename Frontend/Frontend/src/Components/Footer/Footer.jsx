import React from 'react';
import { FaFacebook, FaInstagramSquare, FaWhatsapp } from "react-icons/fa";
import logo from '../Navbar/Images/logo.png';
const Footer = () => {
  return (
    <footer className="pt-8 text-white text-lg" style={{ backgroundColor: "#04211e" }}>
      {/* Footer Content */}
      <div className="container mx-auto p-10">
        <div className="flex flex-wrap justify-between">
          {/* Left Section: Logo and Description */}
          <div className="w-full md:w-1/3 mb-8">
            <div className="mb-4">
              <p className='font-extrabold text-[2.4rem]'>ProLernoX</p>
            </div>
            <p className="mb-4 text-light-gray">
              We work for the betterment of society by training its people in the field of Information Technology and other technologies. We envision making this company an opportunity hub to reduce unemployment.
            </p>
            <p className="flex items-center mb-2">
              <i className="bi bi-telephone-fill mr-2"></i> +923276381819
            </p>
            <p className="flex items-center">
              <i className="bi bi-envelope-fill mr-2"></i> info@ProLernoX.pk
            </p>
          </div>

          {/* Middle Section: Study Links */}
          <div className="w-full md:w-1/6 mb-8">
            <h5 className="text-neon-green mb-4 ml-5">Study Links</h5>
            <ul className="list-none space-y-3">
              <li><a href="#" className="text-white hover:text-neon-green">Opportunities</a></li>
              <li><a href="#" className="text-white hover:text-neon-green">All Courses</a></li>
              <li><a href="#" className="text-white hover:text-neon-green">About Us</a></li>
              <li><a href="#" className="text-white hover:text-neon-green">Become Tutor</a></li>
            </ul>
          </div>

          {/* Middle Section: Quick Links */}
          <div className="w-full md:w-1/6 mb-8">
            <h5 className="text-neon-green mb-4 ml-5">Quick Links</h5>
            <ul className="list-none space-y-3">
              <li><a href="#" className="text-white hover:text-neon-green">Community</a></li>
              <li><a href="#" className="text-white hover:text-neon-green">Support</a></li>
              <li><a href="#" className="text-white hover:text-neon-green">Terms | Privacy</a></li>
            </ul>
          </div>

          {/* Right Section: Trusted Institutes */}
          <div className="w-full md:w-1/3">
            <h5 className="text-neon-green mb-4">Trusted Institute:</h5>

            {/* FBR Section */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex-shrink-0 w-16 sm:w-24 md:w-28 lg:w-32">
                <img
                  src="https://skillseducation.pk/assets/skillsimages/nav-courses-images/fbr%20logo.png"
                  alt="FBR Logo"
                  className="w-full h-auto"
                />
              </div>
              <p className="m-0">Registered by FBR</p>
            </div>

            {/* SECP Section */}
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-16 sm:w-24 md:w-28 lg:w-28">
                <img
                  src="https://skillseducation.pk/assets/skillsimages/nav-courses-images/sssss.png"
                  alt="SECP Logo"
                  className="w-full h-auto"
                />
              </div>
              <p className="m-0">Registered by SECP</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="py-4 text-[1.2rem] text-black" style={{ backgroundColor: "#098E68" }}>
        <div className="container mx-auto flex justify-between items-center">
          <p className="mb-0">
            © 2024 ProLernoX. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-black hover:text-gray-300"><FaFacebook /> </a>
            <a href="#" className="text-black hover:text-gray-300"><FaInstagramSquare /></a>
            <a href="#" className="text-black hover:text-gray-300"><FaWhatsapp /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { FaFacebook, FaInstagramSquare, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#80e2da] text-[#04211e]">
      {/* Top Content */}
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Left Section: Logo + About */}
          <section>
            {/* Logo Section */}
       <p className='text-[1.8rem] text-white font-extrabold'>Pro<span className='text-[#04211e]'>LernoX</span></p>

            <p className="text-sm leading-relaxed mb-6">
              We work for the betterment of society by training people in IT and other technologies. 
              Our vision is to create opportunities and reduce unemployment.
            </p>
            <p className="text-sm mb-2">
              <i className="bi bi-telephone-fill mr-2"></i> +92 327 6381819
            </p>
            <p className="text-sm">
              <i className="bi bi-envelope-fill mr-2"></i> info@ProLernoX.pk
            </p>
          </section>

          {/* Study Links */}
          <section>
            <h5 className="font-semibold text-lg mb-4">Study Links</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-900 text-black">Opportunities</a></li>
              <li><a href="#" className="hover:text-gray-900 text-black">All Courses</a></li>
              <li><a href="#" className="hover:text-gray-900 text-black">About Us</a></li>
              <li><a href="#" className="hover:text-gray-900 text-black">Become Tutor</a></li>
            </ul>
          </section>

          {/* Quick Links */}
          <section>
            <h5 className="font-semibold text-lg mb-4">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-900 text-black">Community</a></li>
              <li><a href="#" className="hover:text-gray-900 text-black">Support</a></li>
              <li><a href="#" className="hover:text-gray-900 text-black">Terms & Privacy</a></li>
            </ul>
          </section>

          {/* Right Section: Trusted Institutes */}
          <section>
            <h5 className="font-semibold text-lg mb-4">Trusted Institute</h5>
            <div className="space-y-4 text-sm">
              <p>✔ Registered by FBR</p>
              <p>✔ Registered by SECP</p>
            </div>
          </section>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-white text-black py-2">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm px-6 lg:px-12">
          <p>© 2024 ProLernoX. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-xl">
            <a href="#" className="hover:text-gray-600"><FaFacebook /></a>
            <a href="#" className="hover:text-gray-600"><FaInstagramSquare /></a>
            <a href="#" className="hover:text-gray-600"><FaWhatsapp /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

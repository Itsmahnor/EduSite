import React from 'react';
import { FaFacebook, FaInstagramSquare, FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router';
import img from '../Navbar/Images/skill.png';
const Footer = () => {
  return (
    <footer className="bg-white text-[14142b]">
      {/* Top Content */}
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Left Section: Logo + About */}
          <section>
            {/* Logo Section */}
              {/* Logo */}
        <Link to='/' className='h-100 w-50'>
         <img src={img} ></img>
        </Link>
       {/* <p className='text-[1.8rem] text-white font-extrabold'>SKILL<span className='text-[#04211e]'>.PRO</span></p> */}

            <p className="text-sm leading-relaxed mb-6">
              We work for the betterment of society by training people in IT and other technologies. 
              Our vision is to create opportunities and reduce unemployment.
            </p>
            <p className="text-sm mb-2">
              <i className="bi bi-telephone-fill mr-2 font-bold"></i> +92 333 4689813
            </p>
            <p className="text-sm">
              <i className="bi bi-envelope-fill mr-2 font-bold"></i> mhamid.itprofessional@gmail.com
            </p>
          </section>

          {/* Study Links */}
          <section>
            <h5 className="font-semibold text-lg mb-4">Study Links</h5>
            <ul className="space-y-2 text-sm">
              <li>   <Link to={'/findprogram'}>
            <a href="#" className="hover:text-gray-900 text-black">All Courses</a>
              </Link>
             </li>
              
                 <li> <Link to={'/choose'}>
            <a href="#" className="hover:text-gray-900 text-black">About Us</a></Link></li>
           <li><Link to={'/instructors'} className='py-3' >
             <a href="#" className="hover:text-gray-900 text-black">Services</a></Link></li>
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
      <div className="bg-[#14142b] text-white py-2">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm px-6 lg:px-12">
          <p className='pt-4'>© 2025 SKILL.PRO. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-xl">
            <a href="#" className="hover:text-gray-600 text-white"><FaFacebook /></a>
            <a href="#" className="hover:text-gray-600 text-white"><FaInstagramSquare /></a>
            <a href="#" className="hover:text-gray-600 text-white"><FaWhatsapp /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react'
import { FaRegUserCircle, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

export const TopNav = () => {
  return (
    <div className='bg-[#FFFFFF] w-[100vw] h-[10vh] flex justify-center items-center m-0 p-0 TopNavRes'>
      <div className='w-[80vw] flex justify-around flex-wrap items-center topnavwidth'>
        
        {/* Left Side */}
        <div className='hideRes flex'>
          <p className='text-[1rem]  md:pt-2  text-[#04211e] '>
            +923276381819 | info@ProLernoX.pk
          </p>
        </div>

        {/* Right Side */}
        <div className='flex gap-8 justify-center items-center '>
          <Link to="/register">
            <div className="flex gap-2 justify-center text-[#04211e] items-center cursor-pointer ">
              <FaRegUserCircle />
              <p className='text-[1rem] pt-2'>Register</p>
            </div>
          </Link>

          {/* Social Icons */}
          <div className="flex gap-4 justify-center items-center">
            {[FaFacebookF, FaInstagram, FaWhatsapp, SiGmail].map((Icon, index) => (
              <Icon
                key={index}
                className='text-[#04211e] cursor-pointer transition-all duration-100 ease-in-out p-1 rounded-full hover:text-white hover:bg-[#098E68] hover:p-5'
                size={22}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

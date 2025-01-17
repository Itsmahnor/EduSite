import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
export const TopNav = () => {
  return (
    <div className='bg-[#098E68] w-[100vw] flex justify-center items-center m-0 p-0 TopNavRes'>
      <div className='w-[80vw] flex justify-around items-center topnavwidth'>
<div className='hideRes flex'>
  <p className='text-[1rem] pt-2 text-white '>+923276381819 | info@ProLernoX.pk</p>
</div>
<div className='flex gap-8 justify-center items-center '>
  <Link to="/register">
<div className="flex gap-2  justify-center text-white items-center register1 ">
<FaRegUserCircle />
<p className='text-[1rem] pt-2 text-white register1 '>Register</p>
</div></Link>
<div className="flex gap-2 justify-center items-center">
<FaFacebookF className='text-white' />
<FaInstagram className='text-white' />
<FaWhatsapp className='text-white' />
<SiGmail className='text-white' />
</div>
</div>
      </div>
    </div>
  )
}
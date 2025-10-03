import React from 'react'

export const Header = () => {
  return (
    <div class="breadcrumb-wrapper md:h-[50vh] flex justify-center items-center flex-col ">
      <h1 className='text-white font-bold'>About Us</h1>
      <p className='w-[70vw] text-white text-center '>
        At <span className='bg-sky-950 text-white p-1 '>SKILL.PRO</span>, we are a trusted IT solutions provider with over 
        <span className='font-semibold'> 10 years of experience</span>.  
        We specialize in <span className='font-semibold'>AI integration</span>, 
        <span className='font-semibold'> chatbot development</span>, and tailored IT solutions that empower businesses to grow.  
        Along with our professional services, we also provide <span className='font-semibold'> industry-focused trainings </span> 
        to equip individuals and teams with the latest skills in technology.  
        Our mission is to help organizations innovate, automate, and scale while preparing talent for the digital future.
      </p>
    </div>
  )
}

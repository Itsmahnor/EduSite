import React from 'react'

export const Header = () => {
  return (
    <div className="breadcrumb-wrapper md:h-[50vh] flex justify-center items-center flex-col text-center px-6">
      <h1 className="text-white font-bold text-3xl md:text-4xl">Web Solutions</h1>
      <p className="w-[70vw] text-white mt-4">
        We provide <span className="bg-sky-900 text-white p-1">complete web solutions</span> 
        tailored to your business needs. From responsive websites and modern web applications 
        to e-commerce platforms and custom integrations, our services help you build a strong 
        digital presence. Let us design and develop scalable, user-friendly, and innovative 
        solutions that drive growth and deliver real value for your business.
      </p>
    </div>
  )
}

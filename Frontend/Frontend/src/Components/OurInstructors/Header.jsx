import React from 'react'

export const Header = () => {
  return (
    <div className="breadcrumb-wrapper md:h-[50vh] flex justify-center items-center flex-col text-center  px-6">
      <h1 className="text-white font-bold text-3xl md:text-4xl">Our Services</h1>
      <p className="md:w-[70vw] w-[85vw] text-white mt-4">
        At <span className="bg-white text-sky-900 p-1 rounded">SKILL.PRO</span>, we provide 
        a wide range of digital solutions designed to help businesses and learners succeed. 
        From <strong>web development</strong> and <strong>application development</strong> to 
        <strong> AI integration</strong>, <strong>chatbot solutions</strong>, and 
        <strong> machine learning</strong>, our services are tailored to meet modern 
        industry demands. With a focus on quality, innovation, and scalability, we ensure 
        that every solution delivers real value and long-term growth.
      </p>
    </div>
  )
}

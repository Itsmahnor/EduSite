import React from 'react';
import { FaBookOpen } from "react-icons/fa";

export const Hero = () => {
   const techIcons = [
    { name: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Express", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  
    { name: "Django", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { name: "PHP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "Machine Learning", src: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
    { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "WordPress", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
  ];
  return (
    // Main container: Full width, responsive height, dark green-based color scheme
    <div className='w-[100vw] lg:h-[80vh] bg-[#04211e] flex justify-center items-center text-white font-bold text-[1.2rem] py-5'>
      <div className='w-[80vw] flex justify-around flex-wrap lg:h-[70vh] gap-3'>

        {/* Left section for text content */}
        <div className='lg:flex-1 flex flex-col justify-center px-3'>
          {/* Icon and headline */}
          <div className='flex gap-2 items-center text-[#ffff]'> 
            <FaBookOpen size={24} />
            <span>100% TEACH ONLINE</span>
          </div>

          {/* Main heading */}
          <h1 className='md:text-[4rem] font-bold text-[#ffff]'>Online Platform Education</h1>

          {/* Subtext paragraph */}
          <p className='text-[#b8b8b8] mt-4'>
            Join ProLernoX and learn from top instructors around the world. 
            Live, interactive, and flexible online learning at your fingertips.
          </p>

          {/* List of technology icons */}
        <div className='p-3 mt-4'>
            <ul className="flex flex-wrap gap-1 items-center">
              {techIcons.map((icon, index) => (
                <li key={index} className="group relative">
                  <div className="w-[40px] h-[40px] rounded-full bg-white shadow-md p-2 flex items-center justify-center transition-transform hover:scale-110 duration-300">
                    <img
                      src={icon.src}
                      alt={icon.name}
                      title={icon.name}
                      className="w-[30px] h-[30px] object-contain"
                    />
                  </div>
                  {/* Tooltip */}
                  <span className="absolute top-[60px] left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap z-50">
                    {icon.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right section for hero image */}
        <div className='lg:flex-1 h-full'>
          <img
            src="https://i1.rgstatic.net/ii/profile.image/1055204350885891-1628591730832_Q512/Dr-Hamid.jpg"
            alt="hero"
            className='h-full rounded-full shadow-lg filter brightness-75 transition duration-300 hover:brightness-50 '
          />
        </div>
      </div>
    </div>
  );
};

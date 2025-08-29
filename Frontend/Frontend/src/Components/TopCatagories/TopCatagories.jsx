import React from 'react';
import { Data } from './Catagories';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const TopCatagories = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      { breakpoint: 1576, settings: { slidesToShow: 4 } },
      { breakpoint: 1188, settings: { slidesToShow: 3 } },
      { breakpoint: 942, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className='w-[100vw]  h-[100vh] pt-10 py-10  bg-white flex justify-center font-bold text-[1.2rem]'>
      <div className='w-[85vw] flex flex-col gap-8'>
        {/* Section Header */}
        <HeaderSection />
        {/* Slider Component */}
        <div className='w-full'>
          <CategorySlider settings={settings} />
        </div>
      </div>
    </div>
  );
};

// Header Section Component
const HeaderSection = () => (
  <div className="text-center">
    <p className='text-[#04211e] text-[0.9rem] md:text-[1rem] tracking-wider uppercase animate'>
      OUR TOP CATEGORIES
    </p>
    <h1 className='md:text-[2.5rem] text-[1.5rem] font-extrabold text-[#04211e] leading-tight animate'>
      EMPOWERING SKILLS FOR TOMORROW
    </h1>
  </div>
);

// Slider Component
const CategorySlider = ({ settings }) => (
  <Slider {...settings}>
    {Data.map((item, index) => (
      <div key={index} className='px-4 h-[30rem]'>
        <div className='bg-white shadow-inner rounded-2xl border border-[#61dbd1]/40 h-[300px] w-[200px] mx-auto text-[#04211e] flex flex-col justify-center items-center gap-2 p-2 transform transition duration-300 hover:-translate-y-3 hover:scale-90'>
          
          {/* Icon Box */}
          <div className='w-[100px] h-[100px] flex justify-center items-center text-white bg-gradient-to-tr from-[#61dbd1] to-[#42a199] rounded-2xl shadow-sm'>
            <span className='text-[2rem]'>{item.img}</span>
          </div>
          
          {/* Title */}
          <h4 className='text-[#04211e] text-lg font-semibold text-center'>
            {item.title}
          </h4>
          
          {/* Description */}
          <p className='text-[#04211e] text-sm text-center leading-relaxed opacity-80'>
            {item.Para}
          </p>
         
        </div>
      </div>
    ))}
  </Slider>
);

import React from 'react';
import { Data } from './Catagories';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const TopCatagories = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1576,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 1188,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 942,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className='w-[100vw] lg:h-[80vh] pt-5 bg-[#04211e] flex justify-center text-[#ffffff] font-bold text-[1.2rem]'>
      <div className='w-[80vw] h-auto flex justify-around flex-wrap gap-3 flex-col'>
        {/* Section Header */}
        <HeaderSection />
        {/* Slider Component */}
        <div className='w-[80vw]  '>
          <CategorySlider settings={settings} />
        </div>
      </div>
    </div>
  );
};

// Header Section Component
const HeaderSection = () => (
  <div>
    <p className='text-center text-[#ffffff] animate'>OUR TOP CATEGORIES</p>
    <h1 className='md:text-[3rem] font-bold text-center text-[#ffffff] animate'>
      Browse Learn Skills You Need
    </h1>
  </div>
);

// Slider Component
const CategorySlider = ({ settings }) => (
  <Slider {...settings}>
    {Data.map((item, index) => (
      <div key={index} className='w-[240px] sm:w-[200px] h-[350px] '>
        <div className='bg-[#098E68] rounded-[40%] border-[3px] border-dotted border-[#ffffff] h-[330px] w-[240px] text-[#04211e] flex flex-col justify-center items-center gap-3 p-4'>
          <div className='w-[150px] h-[150px] flex justify-center items-center border-[3px] border-dashed text-white border-[#ffffff] bg-[#04211e]   rounded-full'>
            <span className='text-[3rem]'>{item.img}</span>
          </div>
          <h4 className='text-[#ffffff]'>{item.title}</h4>
          <p className='text-[#04211e]'>{item.Para}</p>
        </div>
      </div>
    ))}
  </Slider>
);

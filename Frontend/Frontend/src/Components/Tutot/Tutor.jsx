import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import TutorData from './Tutor.json';

export const Tutor = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      { breakpoint: 1507, settings: { slidesToShow: 3 } },
      { breakpoint: 700, settings: { slidesToShow: 2 } },
      { breakpoint: 610, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="w-[100vw] py-16 bg-white flex justify-center">
      <div className="w-[85vw] flex flex-col items-center gap-12">
        {/* Section Header */}
        <div className="text-center">
          <p className="text-[#04211e] text-lg font-semibold tracking-wide uppercase">Our Experts</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#04211e]">Qualified Teachers</h1>
        </div>

        {/* Slider */}
        <div className="w-full">
          <Slider {...settings}>
            {TutorData.map((item, index) => (
              <div key={index} className="px-3">
                <div
                  className="flex flex-col  items-center text-center 
                  bg-white 
                  "
                >
                 <div className='w-[180px] h-[180px] flex justify-center rounded-full items-center bg-sky-100 shadow-gray-500 '>
                  <img
                    src={item.img}
                    alt="teacher"
                    className="rounded-full w-[160px] h-[160px] object-cover  shadow-2xl  hover:scale-105 transition-transform duration-300"
                  />
                  </div> 
                  <h2 className="text-lg font-bold mt-2 text-gray-800">{item.name}</h2>
                  <p className="text-sky-500 font-medium ">Teacher</p>
                  <p className="text-[#04211e] font-bold text-[1.3rem] ">{item.subject}</p>
                  <p className="text-gray-900 text-xs">{item.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

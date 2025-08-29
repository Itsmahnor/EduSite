import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Course from "./Course.json";
import { IoMdStar } from "react-icons/io";
import { Link } from "react-router";

export const Courses = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ],
  };

  return (
    <div className="w-full  py-12 bg-gray-50 flex justify-center">
      <div className="w-[85vw] max-w-[1200px]">
        {/* Header */}
        <div className="flex gap-16 justify-between items-center mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-[#04211e]">
            Featured Courses
          </h1>
          <button className="px-5 py-2 text-[0.8rem] sm:text-[1rem] border border-[#04211e] text-[#04211e] font-semibold rounded hover:bg-[#61dbd1] hover:text-white transition">
         <Link  to={'/findProgram'}>View All</Link>   
          </button>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {Course.map((item, index) => (
            <div
              key={index}
              className="bg-white w-[20vw] h-auto shadow-md flex flex-col rounded-lg overflow-hidden m-3 border border-gray-200"
            >
              {/* Course Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[200px] object-cover"
              />

              {/* Content */}
              <div className="p-4">
                {/* Rating */}
                <div className="flex items-center gap-1 text-yellow-500">
                  {[...Array(4)].map((_, i) => (
                    <IoMdStar key={i} />
                  ))}
                  <span className="text-gray-500 text-sm ml-1">(4 votes)</span>
                </div>

                {/* Title */}
                <h2 className="text-lg font-semibold text-[#04211e] mt-2">
                  {item.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-sm mt-2">
                  {item.description}
                </p>

                {/* Duration */}
                <p className="text-[#04211e] font-medium text-sm mt-3">
                  Duration: {item.duration} Months
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TutorData from './Tutor.json';
import { IoMdStar } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";

export const Tutor = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1507,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 610,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="w-[100vw] h-auto pt-40 pb-7 bg-[#04211e] flex justify-center text-[#098E68]">
      <div className="w-[80vw] sm:w-100 h-auto flex justify-around flex-wrap gap-10">
        {/* Section Header */}
        <HeaderSection />
        {/* Slider */}
        <div className="w-[80vw] sm:w-100">
          <CategorySlider settings={settings} />
        </div>
      </div>
    </div>
  );
};

// Header Section Component
const HeaderSection = () => (
  <div>
    <p className="text-center animate text-[#ffffff]">IDEAL TUTOR EVERYONE</p>
    <h1 className="md:text-[3rem] font-bold text-center animate text-[#ffffff]">Qualified Online Tutors</h1>
  </div>
);

// Slider Component
const CategorySlider = ({ settings }) => (
  <Slider {...settings}>
    {TutorData.map((item, index) => (
      <div key={index} className="px-2"> {/* Add padding here */}
        <div
          className="h-auto flex justify-center items-center flex-col 
          bg-[#098E68] hover:bg-[#056f52] rounded-3xl cursor-pointer 
          text-center p-4 hover:border hover:border-[#ffffff] transition-all"
        >
          <h2 className="text-[#ffffff] mb-2">{item.name}</h2>
          <p className="text-[#b8b8b8] font-bold mb-2 text-[1.2rem]">{item.subject}</p>
          <p
            className="text-[#ffffff] font-bold border border-[#ffffff] hover:text-[#ffffff] transition-all 
            mx-auto py-2 px-12 rounded mb-2"
          >
            {item.course} COURSE
          </p>
          <div className="flex justify-center items-center w-full mt-7">
            <img
              src={item.img}
              alt="img"
              className="rounded-full w-[200px] h-[200px] object-cover"
            />
          </div>
          <h3 className="text-[#ffffff] mb-2">{item.no}</h3>
          <p className="text-[#b8b8b8] font-bold mb-3 text-[1.2rem]">{item.experience}</p>
          <div className="flex justify-center items-center mt-3">
            <span className="text-[#04211e] text-[1.5rem] mx-1">
              <IoMdStar />
            </span>
            <span className="text-[#04211e] text-[1.5rem] mx-1">
              <IoMdStar />
            </span>
            <span className="text-[#04211e] text-[1.5rem] mx-1">
              <IoMdStar />
            </span>
          </div>
        </div>
      </div>
    ))}
  </Slider>
);

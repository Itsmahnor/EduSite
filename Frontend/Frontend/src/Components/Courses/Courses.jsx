import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Course from './Course.json';
import { IoMdStar } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { Link } from 'react-router';

export const Courses = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Check screen size on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1618); // Adjust breakpoint as needed
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    centermargin: "1rem", 
    responsive: [
      {
        breakpoint: 630,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="w-[100vw] h-auto md:pt-5 bg-[#04211e] flex justify-center text-[#ffffff] pb-5">
      <div className="w-[80vw] h-auto flex justify-around flex-wrap gap-10">
        {/* Section Header */}
        <HeaderSection />
        {/* Slider or Grid */}
        <div className="lg:w-[70vw] w-[80vw]">
          {isSmallScreen ? (
            <CategorySlider settings={settings} />
          ) : (
            <CategoryGrid />
          )}
        </div>
      </div>
    </div>
  );
};

// Header Section Component
const HeaderSection = () => (
  <div>
    <p className="text-center animate text-white">BROWSE TOP COURSES</p>
    <h1 className="md:text-[3rem] font-bold text-center animate text-white">Most Popular Courses</h1>
  </div>
);

// Slider Component
const CategorySlider = ({ settings }) => (
  <Slider {...settings} className="flex gap-4">
    {Course.map((item, index) => (
      <div key={index} className="w-[420px] h-auto bg-[#098E68] rounded-3xl">
        <div className="md:m-4 m-2">
          <img
            src={item.img}
            alt=""
            className="h-[350px] object-cover rounded-2xl filter brightness-75 transition duration-300 hover:brightness-50 cursor-pointer"
          />
          <div className="flex justify-between flex-wrap">
            <div className="flex gap-1">
              <div className="flex mt-3">
                <span className="text-yellow-500 text-[1.5rem]"><IoMdStar /></span>
                <span className="text-yellow-500 text-[1.5rem]"><IoMdStar /></span>
                <span className="text-yellow-500 text-[1.5rem]"><IoMdStar /></span>
              </div>
              <span className="text-[#ffffff] mt-3">(5.0)</span>
            </div>
            <span className="text-[#ffffff] font-bold mt-3 text-[1.2rem]">{item.rupees} /-</span>
          </div>
          <h1 className="text-[#ffffff] text-[1.3rem] font-bold mt-4">{item.title}</h1>
        </div>
        <div className="m-4 flex justify-between flex-wrap">
          <div className="flex gap-1 text-[#ffffff]">
            <span><FaRegUserCircle className="mt-1" /></span>
            <span>By: Umair Farooqi</span>
          </div>
          <div className="flex gap-1 text-[#ffffff]">
            <span><IoMdTime className="mt-1" /></span>
            <span>{item.duration}:Month</span>
          </div>
          <div className="flex gap-1 text-[#ffffff]">
            <span><FaRegUserCircle className="mt-1" /></span>
            <span>Duration</span>
          </div>
        </div>
      </div>
    ))}
  </Slider>
);

// Grid Component for larger screens
const CategoryGrid = () => (
  <div className="grid grid-cols-3 gap-0">
    {Course.map((item, index) => (
      <div key={index} className="w-[420px] h-auto bg-[#098E68] rounded-3xl">
        <div className="m-4">
          <img src={item.img} alt="" className="w-[380px] h-[350px] object-cover rounded-2xl filter brightness-75 transition duration-300 hover:brightness-50" />
          <div className="flex justify-between">
            <div className="flex gap-1">
              <div className="flex mt-3">
                <span className="text-white text-[1.5rem] "><IoMdStar /></span>
                <span className="text-white text-[1.5rem]"><IoMdStar /></span>
                <span className="text-white text-[1.5rem]"><IoMdStar /></span>
              </div>
              <span className="text-[#ffffff] mt-3">(5.0)</span>
            </div>
            <span className="text-[#ffffff] font-bold mt-3 text-[1.2rem]">{item.rupees} /-</span>
          </div>
          <Link to={`${item.title}`}>
            <h1 className="text-[#ffffff]  text-[1.3rem] font-extrabold mt-4">{item.title}</h1>
          </Link>
        </div>
        <div className="m-4 flex justify-between flex-wrap">
          <div className="flex gap-1 text-[#ffffff]">
            <span><FaRegUserCircle className="mt-1" /></span>
            <span>By: Dr Hamid</span>
          </div>
          <div className="flex gap-1 text-[#ffffff]">
            <span><IoMdTime className="mt-1" /></span>
            <span>{item.duration}:Month</span>
          </div>
          <div className="flex gap-1 text-[#ffffff]">
            <span><FaRegUserCircle className="mt-1" /></span>
            <span>Duration</span>
          </div>
        </div>
      </div>
    ))}
  </div>
);

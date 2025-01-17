import React, { useState } from "react";
import { IoStar } from "react-icons/io5";
import { GiDuration } from "react-icons/gi";
import { IoTimeOutline } from "react-icons/io5";
import { PiStudent } from "react-icons/pi";
import { SiStudyverse } from "react-icons/si";
import { Link } from "react-router";
import Data  from "./Content.json";

export const MainContent = () => {
  const[visible,setvisible]=useState({});
  console.log(visible)
  const Change=(index)=>{
setvisible((prev)=>{
  return {
    ...prev, [index]: !prev[index]
  }
})
  }
  
  return (
    <div className="w-[100vw] flex justify-center items-center pt-16 bg-[#04211e] text-[#098E68] flex-col">
    <div className="w-[80vw] flex lg:flex-row flex-col gap-7 justify-between">
      {/* Left Section */}
      <div className="lg:w-[60%]">
        <p className="text-lg text-[#ffffff]">Full Stack Development</p>
        <h1 className="font-bold text-2xl lg:text-3xl text-white">
          Master Full Stack PHP Laravel Development
        </h1>
        <div className="flex items-center gap-3 mt-2">
          <div className="flex gap-1 text-yellow-500">
            <IoStar /> <IoStar /> <IoStar /> <IoStar /> <IoStar />
          </div>
          <span className="text-[#ffffff]">(5.0)</span>
        </div>
  
        {/* Overview */}
        <div className="pt-7">
          <h2 className="text-xl font-semibold text-white">Overview</h2>
          <p className="text-[#b8b8b8] text-justify">
            Dive into the world of web development with our comprehensive Full Stack PHP Laravel course...
          </p>
        </div>
  
        {/* What You Will Learn */}
        <div className="pt-7">
          <h2 className="text-xl font-semibold text-white">What You Will Learn</h2>
          <ul className="list-disc pl-5 text-[#b8b8b8]">
            <li>PHP fundamentals and advanced concepts</li>
            <li>Mastering the Laravel framework</li>
            <li>Building RESTful APIs with Laravel</li>
            <li>Front-end integration with HTML, CSS, JavaScript, and Vue.js</li>
            <li>Database design and management with MySQL</li>
            <li>Deployment and hosting of Laravel application</li>
          </ul>
        </div>
  
        {/* Outline */}
        <div className="pt-7">
          <h2 className="text-xl font-semibold text-white">Outline</h2>
          {Data.map((item, index) => (
            <div key={index} className="mb-3">
              <p className="font-semibold text-[#098E68]">Month: {item.month}</p>
              <p
                className="outline rounded-sm p-3 font-bold text-lg text-[#ffffff] cursor-pointer"
                onClick={() => Change(index)}
              >
                {item.title}
              </p>
              <div
                className={`transition-all duration-500 overflow-hidden ${
                  visible[index] ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-3 rounded text-[#b8b8b8]">
                  <div className="pt-2">
                    <h3 className="font-bold text-lg text-[#098E68]">{item.subTitle1}</h3>
                    <p>{item.subTitle1Content}</p>
                  </div>
                  <div className="pt-2">
                    <h3 className="font-bold text-lg text-[#098E68]">{item.subTitle2}</h3>
                    <p>{item.subTitle2Content}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  
      {/* Right Section */}
      <div className="lg:w-[35%] w-full lg:h-[35vh] bg-white rounded-lg flex flex-col justify-center items-center text-black font-bold text-[1.1rem] p-5">
        <div className="w-full space-y-4">
          <div className="flex justify-between flex-wrap">
            <div className="flex items-center gap-2">
              <GiDuration />
              <p>Duration:</p>
            </div>
            <p>6 Month</p>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <IoTimeOutline />
              <p>Weekend Classes:</p>
            </div>
            <p>4 Hours</p>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <PiStudent />
              <p>Student:</p>
            </div>
            <p>3504 Students</p>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <SiStudyverse />
              <p>Course Type:</p>
            </div>
            <p>100% online</p>
          </div>
          <Link to="register">
            <div className="bg-[#04211e] rounded-lg text-white p-3 text-center cursor-pointer">
              Course Enrollment
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
  

  );
};

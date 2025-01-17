import React, { useState } from "react";
import { IoStar } from "react-icons/io5";
import { GiDuration } from "react-icons/gi";
import { IoTimeOutline } from "react-icons/io5";
import { PiStudent } from "react-icons/pi";
import { SiStudyverse } from "react-icons/si";
import { Link } from "react-router";
import Data from "./Content.json";

export const MainContent = () => {
  const [visible, setVisible] = useState({});
  const Change = (index) => {
    setVisible((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="w-[100vw] flex justify-center items-center pt-16 bg-[#04211e] text-[#ffffff] flex-col">
      <div className="md:w-[80vw] w-[95vw] flex lg:flex-row flex-col gap-7 justify-between">
        {/* Left Section */}
        <div className="lg:w-[60%]">
          <p className="text-lg">Full Stack Development</p>
          <h1 className="font-bold text-2xl lg:text-3xl text-white">
            Master MERN Stack Development
          </h1>
          <div className="flex items-center gap-3 mt-2">
            <div className="flex gap-1 text-white">
              <IoStar /> <IoStar /> <IoStar /> <IoStar /> <IoStar />
            </div>
            <span className="text-[#b8b8b8]">(5.0)</span>
          </div>

          {/* Overview */}
          <div className="pt-7">
            <h2 className="text-xl font-semibold text-white">Overview</h2>
            <p className="text-justify text-[#b8b8b8]">
              Dive into the exciting world of full-stack development with our
              comprehensive MERN Stack course. Learn to build high-performance,
              scalable, and responsive web applications using MongoDB,
              Express.js, React, and Node.js. This course covers everything
              from front-end to back-end development, preparing you to excel as
              a full-stack developer.
            </p>
          </div>

          {/* What You Will Learn */}
          <div className="pt-7">
            <h2 className="text-xl font-semibold text-white">
              What You Will Learn
            </h2>
            <ul className="list-disc pl-5 text-[#b8b8b8]">
              <li>Core concepts of JavaScript and ES6+ features</li>
              <li>Front-end development with React.js</li>
              <li>Back-end development with Node.js and Express.js</li>
              <li>Database management with MongoDB</li>
              <li>Building RESTful APIs and integrating with React</li>
              <li>Deploying full-stack applications on cloud platforms</li>
            </ul>
          </div>

          {/* Outline */}
          <div className="pt-7">
            <h2 className="text-white">Outline</h2>
            <div className="pt-7">
              {Data.map((item, index) => (
                <div key={index} className="mb-3">
                  <p className="font-semibold text-white">
                    Month: {item.month}
                  </p>
                  <p
                    className="outline rounded-sm p-3 font-bold text-lg cursor-pointer text-[#ffffff]"
                    onClick={() => Change(index)}
                  >
                    {item.title}
                  </p>

                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      visible[index]
                        ? "max-h-[300px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="p-3 rounded text-[#b8b8b8]">
                      <div className="pt-3 text-white">
                        <div className="pt-2">
                          <h3 className="font-bold text-lg">
                            {item.subTitle1}
                          </h3>
                          <p className="text-sm">{item.subTitle1Content}</p>
                        </div>

                        <div className="pt-2">
                          <h3 className="font-bold text-lg">
                            {item.subTitle2}
                          </h3>
                          <p className="text-sm">{item.subTitle2Content}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-[35%] w-full lg:h-[35vh] bg-white rounded-lg flex flex-col justify-center items-center text-[#04211e] font-bold md:text-[1.1rem] p-5">
          <div className="w-full space-y-4">
            <div className="flex md:justify-between gap-2">
              <div className="flex items-center gap-2">
                <GiDuration />
                <p className="text-[1rem]">Duration:</p>
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
            <Link to="/register">
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

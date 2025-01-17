import React from 'react';
import { BsArrowRightCircle } from "react-icons/bs";
import { IoIosArrowDropright } from "react-icons/io";
import { Link } from 'react-router-dom';
export const AboutMe = () => {
  return (
    <div className="w-[100vw] h-auto pt-20 bg-[#04211e] flex justify-center text-[#ffffff] text-[1.2rem]">
      <div className="w-100 lg:mx-28 mx-13 h-auto flex flex-wrap">
        {/* img section */}
        <div className="md:w-[50%] md:h-[70%] flex gap-7 flex-wrap justify-center items-center">
          <div className="w-100 h-100 p-2 relative overflow-hidden text-center">
            <img 
              src="https://i1.rgstatic.net/ii/profile.image/1055204350885891-1628591730832_Q512/Dr-Hamid.jpg" 
              alt="image" 
              className="h-full w-full lg:object-contain filter brightness-75 transition duration-300 hover:brightness-50" 
            />
            <p className="absolute -bottom-3 right-36 flex justify-center items-center bg-[#098E68] px-3 rounded-lg text-[#ffffff] md:font-bold">
              7 years of experience in teaching
            </p>
            <p className="absolute top-0 left-36 flex justify-center items-center bg-[#098E68] px-3 rounded-lg text-[#ffffff] md:font-bold">
              Dr. Muhammad Hamid
            </p>
          </div>
        </div>
        {/* text section */}
        <div className="md:w-[50%] p-5 h-auto flex justify-start flex-col">
          <h3 className="text-[20px] font-bold text-[#ffffff]">About me</h3>
          <h1 className="md:w-[30vw] md:text-[3rem] font-bold text-[#ffffff]">
            Educated Over 30,000+ Students In Pakistan
          </h1>
          <p className="mt-2 text-[#b8b8b8]">
            Over 30,000 Students Have Learned Under My Guidance, Many Of Whom Are Now Successfully Employed In Various Jobs Across Pakistan. I Have Also Completed 300+ Projects And Worked Alongside Industry Experts In The Field.
          </p>
          <div className="mt-2 flex gap-2 items-center">
            <div className="bg-[#098E68] rounded-full flex items-center justify-center">
              <BsArrowRightCircle className="text-[#04211e]" />
            </div>
            <p className="mt-3 text-[#ffffff]">Helping students build their careers</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-[#098E68] rounded-full flex items-center justify-center">
              <BsArrowRightCircle className="text-[#04211e]" />
            </div>
            <p className="mt-3 text-[#ffffff]">Over 300+ successful projects</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-[#098E68] rounded-full flex items-center justify-center">
              <BsArrowRightCircle className="text-[#04211e]" />
            </div>
            <p className="mt-3 text-[#ffffff]">Industry collaboration with experts</p>
          </div>
          <div className="flex gap-4 items-center mt-3">
          <Link to="/instructors">
            <div className="bg-[#098E68] rounded-full p-3 flex items-center justify-center">
              <IoIosArrowDropright className="text-[#04211e]" />
            </div></Link>
            <p className="mt-3 text-[#ffffff]">Get more Info</p>
          </div>
        </div>
      </div>
    </div>
  );
};

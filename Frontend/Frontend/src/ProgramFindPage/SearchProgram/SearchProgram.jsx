import React, { useState } from 'react';
import Course from './Search.json';
import { IoMdStar } from 'react-icons/io';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';
import { Link } from 'react-router';



export const SearchProgram = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredCourses = Course.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (!selectedCategory || item.category === selectedCategory)
  );

  return (
    <div className="w-full min-h-screen pt-10 bg-[#04211e] flex justify-center ">
      <div className="w-[90%] flex flex-col gap-y-10">
        <div className="lg:w-[80%] w-full mx-auto">
          {/* Search Input and Dropdown */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <input
              type="text"
              placeholder="Search Course..."
              className="bg-transparent w-full md:w-[60%] lg:w-[50%] px-5 py-3 placeholder-white border rounded-full text-white focus:outline-none"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="w-full md:w-auto flex items-center bg-[#098E68] rounded-lg text-white px-4">
              <select
                className="w-full md:w-auto py-2 bg-transparent focus:outline-none text-white"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="" className="bg-[#098E68] text-white font-bold">
                  Select a Category
                </option>
                <option value="frontend" className="bg-[#098E68] text-white">
                  Frontend
                </option>
                <option value="backend" className="bg-[#098E68] text-white">
                  Backend
                </option>
                <option value="fullstack" className="bg-[#098E68] text-white">
                  Fullstack
                </option>
                <option value="mobile" className="bg-[#098E68] text-white">
                  Mobile
                </option>
                <option value="ecommerce" className="bg-[#098E68] text-white">
                  E-commerce
                </option>
              </select>
            </div>
          </div>

          {/* Course Grid */}
          <CategoryGrid courses={filteredCourses} />
        </div>
      </div>
    </div>
  );
};

// Grid Component
const CategoryGrid = ({ courses }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-10 search place-items-center">
    {courses.length > 0 ? (
      courses.map((item, index) => (
        <div
          key={index}
          className="w-full sm:w-[350px] lg:w-[420px] h-auto bg-[#098E68] rounded-3xl shadow-lg hover:scale-105 transition-transform"
        >
          <div className="m-4">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[200px] sm:h-[250px] lg:h-[350px] object-cover rounded-2xl"
            />
            <div className="flex justify-between mt-3">
              <div className="flex gap-1">
                <div className="flex mt-1">
                  <IoMdStar className="text-yellow-500 text-xl" />
                  <IoMdStar className="text-yellow-500 text-xl" />
                  <IoMdStar className="text-yellow-500 text-xl" />
                </div>
                <span className="text-white mt-1">(5.0)</span>
              </div>
              <span className="text-white font-bold mt-1 text-lg">
                {item.rupees} /-
              </span>
            </div>
          <Link to={`/course/${item.route}`} >
              <h1 className="text-white text-lg font-bold mt-4">{item.title}</h1>
            </Link>
          </div>
          <div className="m-4 flex justify-between flex-wrap gap-4">
            <div className="flex gap-1 text-white items-center">
              <FaRegUserCircle className="text-lg" />
              <span>By: Umair Farooqi</span>
            </div>
            <div className="flex gap-1 text-white items-center">
              <IoMdTime className="text-lg" />
              <span>{item.duration}:Month</span>
            </div>
          </div>
        </div>
      ))
    ) : (
      <p className="col-span-3 text-center text-white">No courses found</p>
    )}
  </div>
);

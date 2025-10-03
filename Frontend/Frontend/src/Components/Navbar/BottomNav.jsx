import React, { useState, useEffect, useRef } from 'react';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaBars, FaPython, FaRobot, FaLaravel, FaReact, FaWordpress, FaAndroid, FaPaintBrush, FaBriefcase } from "react-icons/fa";
import { SiMongodb, SiShopify, SiFlutter, SiGoogleads } from "react-icons/si";
import { PiGraduationCapBold, PiLineVerticalLight } from "react-icons/pi";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useLocation } from 'react-router-dom';
import img from './Images/log1.png';

// Icon mapping
const iconMapping = {
  FaPython, FaRobot, FaLaravel, FaReact, FaWordpress, FaAndroid, FaPaintBrush, FaBriefcase,
  SiMongodb, SiShopify, SiFlutter, SiGoogleads
};

export const BottomNav = () => {
  const [coursesData, setCoursesData] = useState([]);
  const [show, setShow] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);
  const [showCourses, setShowCourses] = useState(false);

  const dropdownRef = useRef(null);
  const location = useLocation();

  // Fetch courses data
  useEffect(() => {
    fetch(`http://localhost:5000/api/courses`)
      .then(res => res.json())
      .then(data => setCoursesData(data))
      .catch(err => console.error("Error fetching courses data:", err));
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowCourses(false);
        setOpenCategory(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setShowCourses(false);
    setOpenCategory(null);
  }, [location]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='w-full uppercase h-[15vh] bg-[#80e2da] flex justify-center items-center text-[#04211e] font-bold text-[1rem] relative'>
      <div className='w-[95%] flex items-center justify-between'>
        
        {/* Logo */}
        <Link to='/'>
          <h1 className='text-[1.5rem] md:text-[1.8rem] text-white font-extrabold'>
            skill<span className='text-[#04211e]'>.pro</span>
          </h1>
        </Link>

        {/* Navigation Links (hidden on mobile) */}
        <div className='hidden lg:flex justify-center items-center gap-5 left-nav'>
          <Link to="/"><span className='text-[#04211e] hover:underline text-[0.9rem]'>Home</span></Link>
          <Link to="/choose"><span className='text-[#04211e] hover:underline text-[0.9rem]'>About</span></Link>

          {/* Courses Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowCourses(!showCourses)}
              className="text-[#04211e] text-[1rem] font-semibold uppercase px-4 py-2 flex items-center gap-2 transition-colors"
            >
             <span className='font-bold'>Courses</span> 
              <MdOutlineKeyboardArrowDown className={`transition-transform duration-300 ${showCourses ? "rotate-180" : ""}`} />
            </button>

            {showCourses && (
              <div className="bg-[#1eb2a6] text-white lg:w-[20vw] md:w-[40vw] w-[70vw] border absolute top-[50px] left-1/2 transform -translate-x-1/2 p-6 shadow-lg rounded-md flex-col z-50">
                <ul className="flex flex-col gap-3">
                  {coursesData.map((category) => (
                    <li
                      key={category.category}
                      className="relative"
                      onClick={() => setOpenCategory(openCategory === category.category ? null : category.category)}
                    >
                      <div className="flex items-center gap-2 cursor-pointer text-[0.95rem] font-medium">
                        <span>{category.category}</span>
                        <MdOutlineKeyboardArrowRight className={`transition-transform duration-300 ${openCategory === category.category ? "rotate-90" : ""}`} />
                      </div>

                      {openCategory === category.category && (
                        <div className="absolute top-0 left-full ml-2 w-[250px] sm:w-[350px] bg-[#1eb2a6] border p-4 rounded-md shadow-lg flex-col z-50">
                          <ul className="flex flex-col gap-2">
                            {category.courses.map((course) => {
                              const IconComponent = iconMapping[course.icon];
                              return (
                                <Link
                                  to={`/course/${course.route}`}
                                  key={course.name}
                                  onClick={() => { setShowCourses(false); setOpenCategory(null); }}
                                >
                                  <li className="flex items-center gap-2 cursor-pointer text-[0.9rem] font-medium text-white hover:text-white transition-colors">
                                    {IconComponent && <IconComponent />}
                                    {course.name}
                                  </li>
                                </Link>
                              );
                            })}
                          </ul>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Link to="/instructors"><span className='text-[#04211e] text-[0.9rem] hover:underline'>Services</span></Link>
          <Link to="/contact"><span className='text-[#04211e] text-[0.9rem] hover:underline'>Contact Us</span></Link>
        </div>

        {/* /* Find Program Button (hidden on xs) */ }
        <Link to="/findProgram" className="hidden md:block">
          <div className='flex gap-1 justify-center items-center bg-white px-4 py-3 md:px-7 md:py-4 rounded-full transition-colors'>
            <PiGraduationCapBold className='text-[1rem] text-[#04211e]' />
            <PiLineVerticalLight className='text-[1rem] text-[#04211e]' />
            <span className='text-[0.9rem] md:text-[1rem] text-[#04211e]'>Find Program</span>
          </div>
        </Link>

        {/* Mobile Toggle */}
        <div className="lg:hidden text-[2rem] text-black bar cursor-pointer" onClick={handleShow}>
          <FaBars />
        </div>

        {/* Offcanvas for Mobile */}
        <Offcanvas show={show} onHide={handleClose} className="offcanvas w-[80%] sm:w-[60%]">
          <Offcanvas.Header closeButton className="text-[1.2rem] font-semibold text-white bg-sky-200 border-b border-gray-700">
            <div className="w-[150px] mx-auto">
              <p className='text-[1.5rem] text-white font-extrabold'>Pro<span className='text-[#04211e]'>LernoX</span></p>
            </div>
          </Offcanvas.Header>

          <Offcanvas.Body className='p-0'>
            <div className="bg-[#1eb2a6] w-full text-white h-full flex flex-col items-start px-5 py-8 gap-4">
              <nav className="w-full">
                <ul className="flex flex-col gap-6 text-[1rem] sm:text-[1.2rem]">
                  <Link to="/"><li className="hover:text-white cursor-pointer">Home</li></Link>
                  <Link to="/findprogram"><li className="hover:text-white cursor-pointer">Courses</li></Link>
                  <Link to="/choose"><li className="hover:text-white cursor-pointer">About Us</li></Link>
                  <Link to="/contact"><li className="hover:text-white cursor-pointer">Contact Us</li></Link>
                </ul>
              </nav>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
};

export default BottomNav;

import React, { useState, useEffect, useRef } from 'react';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaBars, FaPython, FaRobot, FaLaravel, FaReact, FaWordpress, FaAndroid, FaPaintBrush, FaBriefcase } from "react-icons/fa";
import { SiMongodb, SiShopify, SiFlutter, SiGoogleads } from "react-icons/si";
import { PiGraduationCapBold, PiLineVerticalLight } from "react-icons/pi";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useLocation } from 'react-router-dom';

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
  const location = useLocation(); // Track current page

  // Fetch courses data
  useEffect(() => {
    fetch(`http://localhost:5000/api/courses`)
      .then(res => res.json())
      .then(data => setCoursesData(data))
      .catch(err => console.error("Error fetching courses data:", err));
  }, []);

  // Close dropdown when clicking outside or when route changes
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
    <div className='w-[100vw] uppercase h-[16vh] bg-[#80e2da] flex justify-center items-center text-[#04211e] font-semibold text-[1rem] relative'>
      <div className='w-[90vw] flex items-center justify-between'>
        {/* Logo */}
        <Link to='/'>
          <p className='text-[1.8rem] text-black font-extrabold'>
            Pro<span className='text-[#fff]'>LernoX</span>
          </p>
        </Link>

        {/* Navigation Links */}
        <div className='flex justify-center items-center gap-5 left-nav'>
          <Link to="/"><span className='text-black hover:underline text-[0.7.rem]'>Home</span></Link>
          <Link to="/choose"><span className='text-black hover:underline text-[0.7.rem]'>About</span></Link>

          {/* Courses Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowCourses(!showCourses)}
              className="text-black text-[1rem] font-semibold uppercase px-4 py-2 flex items-center gap-2 transition-colors"
            >
              Courses
              <MdOutlineKeyboardArrowDown className={`transition-transform duration-300 ${showCourses ? "rotate-180" : ""}`} />
            </button>

            {showCourses && (
              <div className="bg-[#1eb2a6] text-black lg:w-[22vw] md:w-[17vw] border absolute top-[50px] left-1/2 transform -translate-x-1/2 p-6 shadow-lg rounded-md flex-col transition-all duration-300 ease-in-out z-50">
                <ul className="flex flex-col gap-3">
                  {coursesData.map((category) => (
                    <li
                      key={category.category}
                      className="relative"
                      onClick={() => setOpenCategory(openCategory === category.category ? null : category.category)}
                    >
                      <div className="flex items-center gap-2 cursor-pointer text-[0.95rem] font-normal">
                        <span>{category.category}</span>
                        <MdOutlineKeyboardArrowRight className={`transition-transform duration-300 ${openCategory === category.category ? "rotate-90" : ""}`} />
                      </div>

                      {openCategory === category.category && (
                        <div className="absolute top-0 left-full ml-2 w-[450px] bg-[#1eb2a6] border p-4 rounded-md shadow-lg flex-col transition-all duration-300 ease-in-out z-50">
                          <ul className="flex flex-col gap-2">
                            {category.courses.map((course) => {
                              const IconComponent = iconMapping[course.icon];
                              return (
                                <Link
                                  to={`/course/${course.route}`}
                                  key={course.name}
                                  onClick={() => { setShowCourses(false); setOpenCategory(null); }}
                                >
                                  <li className="flex items-center gap-2 cursor-pointer text-[0.7.rem] font-normal text-black hover:text-black transition-colors">
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

          <Link to="/instructors"><span className='text-black text-[0.7.rem] hover:underline'>Services</span></Link>
          <Link to="/contact"><span className='text-black text-[0.7.rem] hover:underline'>Contact Us</span></Link>
        </div>

        {/* Find Program Button */}
        <Link to="/findProgram">
          <div className='flex gap-1 justify-center items-center bg-white px-7 py-3 rounded-full transition-colors'>
            <PiGraduationCapBold className='text-[1rem] text-[#04211e]' />
            <PiLineVerticalLight className='text-[1rem] text-[#04211e]' />
            <span className='text-[1rem] text-[#04211e]'>Find Program</span>
          </div>
        </Link>

        {/* Mobile Toggle */}
        <div className="d-lg-none text-[2rem] text-black bar" onClick={handleShow}><FaBars /></div>

        {/* Offcanvas for Mobile */}
        <Offcanvas show={show} onHide={handleClose} className="offcanvas">
          <Offcanvas.Header closeButton className="text-[1.5rem] font-semibold text-black bg-sky-200 border-b border-gray-700">
            <div className="w-[150px] mx-auto">
              <p className='text-[1.8rem] text-black font-extrabold'>Pro<span className='text-[#04211e]'>LernoX</span></p>
            </div>
          </Offcanvas.Header>

          <Offcanvas.Body className='p-0'>
            <div className="bg-[#1eb2a6] w-full text-black h-full flex flex-col items-start px-5 py-8 gap-4">
              <nav className="w-full">
                <ul className="flex flex-col gap-6 text-[1.2rem]">
                  <Link to="/"><li className="hover:text-black text-black cursor-pointer">Home</li></Link>
                  <Link to="/findprogram"><li className="hover:text-black text-black cursor-pointer">Courses</li></Link>
                  <Link to="/choose"><li className="hover:text-black text-black cursor-pointer">About Us</li></Link>
                  <Link to="/contact"><li className="hover:text-black text-black cursor-pointer">Contact Us</li></Link>
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

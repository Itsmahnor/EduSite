import React, { useState, useEffect } from 'react';

import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaSearch, FaBars, FaPython, FaRobot, FaLaravel, FaReact, FaWordpress, FaAndroid, FaPaintBrush, FaBriefcase } from "react-icons/fa";
import { 
  SiMongodb, SiShopify, SiFlutter, SiGoogleads 
} from "react-icons/si";

import { PiGraduationCapBold } from "react-icons/pi";
import { PiLineVerticalLight } from "react-icons/pi";
import { FaPlus } from "react-icons/fa6";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link,  NavLink } from 'react-router-dom';
import tech from './Images/logo.png';

// Create a mapping from icon string names to actual components
const iconMapping = {
  FaPython,
  FaRobot,
  FaLaravel,
  FaReact,
  FaWordpress,
  FaAndroid,
  FaPaintBrush,
  FaBriefcase,
  SiMongodb,
  SiShopify,
  SiFlutter,
  SiGoogleads
};
export const BottomNav = () => {
  // State to store courses data from backend
  const [coursesData, setCoursesData] = useState([]);

  // Other states for toggling dropdowns/offcanvas
  const [show, setShow] = useState(false);
  const [branchesOpen, setBranchesOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);
  const [showOpportunities, setShowOpportunities] = useState(false);
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showCourses, setShowCourses] = useState(false);

  // Fetch courses data when component mounts
  useEffect(() => {
    fetch(`/api/courses`)
      .then((res) => res.json())
      .then((data) => setCoursesData(data))
      .catch((error) => console.error("Error fetching courses data:", error));
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='w-[100vw] uppercase h-[16vh] bg-[#80e2da] flex justify-center items-center text-[#04211e] font-bold text-[1rem]'>
      <div className='w-[90vw] flex items-center justify-between  '>
        {/* Logo Section */}
     <Link to={'/'}> <p className='text-[1.8rem] text-white font-extrabold'>Pro<span className='text-[#04211e]'>LernoX</span></p>
</Link> 
        {/* Navigation Links */}
        <div className='flex justify-center items-center gap-5 left-nav'>
          {/* Home Link */}
          <Link to="/">
            <span className='text-white hover:text-white  text-[0.9rem] hover:underline h-0.5  transition-colors'>Home</span>
          </Link>
 <Link to="/choose">
            <span className='text-white text-[0.9rem] hover:underline hover:text-white transition-colors'>About</span>
          </Link>
          {/* Courses Dropdown */}
          <button className="  text-white hover:text-white transition-colors text-[0.9rem] hover:underline uppercase px-4 py-2 rounded-md flex justify-center items-center gap-2 relative group">
            Courses
            <MdOutlineKeyboardArrowDown />
            <div className="group-hover:flex hidden bg-[#1eb2a6] text-white lg:w-[22vw] md:w-[17vw] border h-auto absolute top-[50px] left-1/2 transform -translate-x-1/2 p-6 shadow-lg rounded-md z-10 flex-col transition-all duration-300 ease-in-out">
              <ul className="flex flex-col gap-3">
                {coursesData.map((category) => (
                  <li
                    key={category.category}
                    className="relative"
                    onMouseEnter={() => setOpenCategory(category.category)}
                    onMouseLeave={() => setOpenCategory(null)}
                  >
                    <div className="flex items-center gap-2 cursor-pointer">
                      <span className="text-lg font-semibold">{category.category}</span>
                      <MdOutlineKeyboardArrowRight />
                    </div>
                    {openCategory === category.category && (
                      <div className="absolute top-0 left-full ml-2 w-[450px] bg-[#1eb2a6] border p-4 rounded-md shadow-lg transition-all duration-300 ease-in-out">
                        <ul className="flex flex-col gap-2">
                          {category.courses.map((course) => {
                            // Get the icon component from mapping based on string returned by backend
                            const IconComponent = iconMapping[course.icon];
                            return (
                              <Link to={`/course/${course.route}`} key={course.name}>
                                <li className="flex items-center gap-2 cursor-pointer font-medium text-white hover:text-white transition-colors">
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
          </button>
  <Link to="/instructors">
            <span className='text-white [1.6rem] hover:underline hover:text-white transition-colors'>Services</span>
          </Link>
          {/* services Dropdown */}
          {/* <div className="flex gap-2 justify-center items-center relative group cursor-pointer text-white">
            <span>Services</span>
            <MdOutlineKeyboardArrowDown />
            <div className="group-hover:flex hidden bg-[#1eb2a6] text-white lg:w-[17vw] h-auto absolute top-[30px] left-1/2 transform -translate-x-1/2 p-2 cursor-pointer shadow-lg rounded-md z-10 flex-col transition-all duration-300 ease-in-out">
              <ul className="flex flex-col gap-2">
                <Link to="/internship">
                  <li className="py-2 pt-2 hover:text-white text-white transition-colors">Web Solutions</li>
                </Link>
                <Link to="/tutor">
                  <li className="py-2 hover:text-white text-white transition-colors">App Solutions</li>
                </Link>
                <Link to="/job">
                  <li className="py-1 hover:text-white text-white transition-colors">AI Solutions</li>
                </Link>
              </ul>
            </div>
          </div> */}

          {/* About Us Dropdown */}
          {/* <div className="relative group">
            <button className="text-white px-4 py-2 rounded-md flex items-center gap-2">
              About Us
              <MdOutlineKeyboardArrowDown />
            </button>
            <div className="absolute top-full left-0 mt-2 bg-[#098E68] text-white lg:w-[14vw] border p-4 rounded-md shadow-lg hidden group-hover:block z-10 transition-all duration-300 ease-in-out">
              <ul>
                <Link to="/choose">
                  <li className="py-2 hover:text-white text-white transition-colors">About Us</li>
                </Link>
                <Link to="/instructors">
                  <li className="py-2 hover:text-white text-white transition-colors">Our Instructors</li>
                </Link>
                <li
                  className="py-2 flex justify-between items-center cursor-pointer hover:text-white transition-colors"
                  onMouseEnter={() => setBranchesOpen(true)}
                  onMouseLeave={() => setBranchesOpen(false)}
                >
                  Our Branches
                  <MdOutlineKeyboardArrowRight />
                  {branchesOpen && (
                    <div className="absolute top-14 left-full ml-2 bg-[#6247AA] lg:w-[14vw] border p-4 rounded-md shadow-lg transition-all duration-300 ease-in-out">
                      <ul>
                        <li className="py-2 hover:text-white text-white transition-colors">Bahawalpur</li>
                        <li className="py-2 hover:text-white text-white transition-colors">Hatheji</li>
                        <li className="py-2 hover:text-white text-white transition-colors">Jalalpur Pirwala</li>
                      </ul>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div> */}
          
            
          {/* Contact Us Link */}
          <Link to="/contact">
            <span className='text-white text-[0.9rem] hover:underline hover:text-white transition-colors'>Contact Us</span>
          </Link>

          {/* Search Icon
          <span className='hide'>
            <FaSearch className='text-white hover:text-white transition-colors' />
          </span> */}

      
        </div>
    {/* Find Program Button */}
          <Link to="/findProgram">
            <div className='flex gap-1 justify-center items-center bg-white   px-7 py-3 rounded-full hide transition-colors'>
              <span>
                <PiGraduationCapBold className='text-[1rem] text-[#04211e]' />
              </span>
              <span>
                <PiLineVerticalLight className='text-[1rem] text-[#04211e]' />
              </span>
              <span className='text-[1rem] text-[#04211e]'>Find Program</span>
            </div>
          </Link>
        {/* Mobile Toggle */}
        <div variant="primary" className="d-lg-none text-[2rem] text-black bar" onClick={handleShow}>
          <FaBars />
        </div>

        {/* Offcanvas for Mobile View */}
        <Offcanvas show={show} onHide={handleClose} className="offcanvas">
          <Offcanvas.Header closeButton className="text-[1.5rem] font-semibold text-white bg-sky-200 border-b border-gray-700">
            <div className="w-[150px] mx-auto">
             {/* Logo Section */}
       <p className='text-[1.8rem] text-white  font-extrabold'>Pro<span className='text-[#04211e]'>LernoX</span></p>

            </div>
          </Offcanvas.Header>

          <Offcanvas.Body className='p-0'>
            <div className="bg-[#1eb2a6] w-full text-white h-full flex flex-col items-start px-5 py-8 gap-4">
              <nav className="w-full">
                <ul className="flex flex-col gap-6 text-[1.2rem]">
                  <Link to="/">
                    <li className="hover:text-white text-white cursor-pointer">Home</li>
                    {/* <br className='h-3 text-black' /> */}
                  </Link>
                   <Link to="/findprogram">
                    <li className="hover:text-white text-white cursor-pointer">Courses</li>
                  </Link>
                  

                  {/* Courses Dropdown in Offcanvas */}
                  {/* <li className="flex flex-col w-full">
                    <div className="flex items-center justify-between text-white cursor-pointer" onClick={() => setShowCourses(!showCourses)}>
                      <span>Courses</span>
                      {showCourses ? <MdOutlineKeyboardArrowDown /> : <FaPlus />}
                    </div>
                    {showCourses && (
                      <ul className="pl-4 mt-2 text-[1rem] flex flex-col gap-2">
                        {coursesData.map((category) => (
                          <li key={category.category} className="flex flex-col w-full"
                              onClick={() => setOpenCategory(category.category)}
                              onMouseLeave={() => setOpenCategory(null)}>
                            <div className="flex items-center gap-2 cursor-pointer text-white">
                              <span className="font-medium">{category.category}</span>
                            </div>
                            {openCategory === category.category && (
                              <ul className="pl-4 mt-2 text-[0.9rem] flex flex-col gap-1">
                                {category.courses.map((course) => (
                                  <Link to={`/course/${course.route}`} key={course.name}>
                                    <li className="py-1 hover:text-white text-white transition-colors">{course.name}</li>
                                  </Link>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li> */}

                  {/* Opportunities Dropdown in Offcanvas */}
                  {/* <li className="flex flex-col w-full">
                    <div className="flex items-center justify-between text-white cursor-pointer" onClick={() => setShowOpportunities(!showOpportunities)}>
                      <span>Opportunities</span>
                      {showOpportunities ? <MdOutlineKeyboardArrowDown /> : <FaPlus />}
                    </div>
                    {showOpportunities && (
                      <ul className="pl-4 mt-2 text-[1rem] flex flex-col gap-2">
                        <Link to="/internship">
                          <li className="py-2 hover:text-white text-white transition-colors">Internship Offer</li>
                        </Link>
                        <Link to="/tutor">
                          <li className="py-2 hover:text-white text-white transition-colors">Become Tutor</li>
                        </Link>
                        <Link to="/job">
                          <li className="py-2 hover:text-white text-white transition-colors">Job Offer</li>
                        </Link>
                      </ul>
                    )}
                  </li> */}

                  {/* About Us Dropdown in Offcanvas */}
                  {/* <li className="flex flex-col w-full">
                    <div className="flex items-center justify-between text-white cursor-pointer" onClick={() => setShowAboutUs(!showAboutUs)}>
                      <span>About Us</span>
                      {showAboutUs ? <MdOutlineKeyboardArrowDown /> : <FaPlus />}
                    </div>
                    {showAboutUs && (
                      <ul className="pl-4 mt-2 text-[1rem] flex flex-col gap-2">
                        <Link to="/choose">
                          <li className="py-2 hover:text-white text-white transition-colors">Why ProlernoX</li>
                        </Link>
                        <Link to="/instructors">
                          <li className="py-2 hover:text-white text-white transition-colors">Our Instructors</li>
                        </Link>
                      </ul>
                    )}
                  </li> */}

                  {/* Contact Us in Offcanvas */}
                    <Link to="/choose">
            <span className='text-white [1.6rem] hover:underline hover:text-white transition-colors'>About Us</span>
          </Link>

                  <Link to="/contact">
                    <li className="hover:text-white text-white cursor-pointer">Contact Us</li>
                  </Link>
                 <Link to="/findProgram">
  <li className='list-none'>
    {/* <div className='flex gap-1 justify-center items-center bg-white px-7 py-4 rounded-full transition-colors'>
      <span>
        <PiGraduationCapBold className='text-[1.6rem] text-sky-700' />
      </span>
      <span>
        <PiLineVerticalLight className='text-[2rem] text-sky-700' />
      </span>
      <span className='text-[1rem] text-sky-700'>Find Program</span>
    </div> */}
  </li>
</Link>

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

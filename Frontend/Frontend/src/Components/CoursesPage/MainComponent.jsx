import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { TopNav } from "../Navbar/TopNav";
import { BottomNav } from "../Navbar/BottomNav";
import Footer from "../Footer/Footer";
import CareerOpportunities from "../CareerOpertunities";
import { FaClock, FaUsers, FaBookOpen } from "react-icons/fa";


export const MainContent = ({ courses }) => {
  const { courseId } = useParams();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [openOutlineItems, setOpenOutlineItems] = useState({});

  useEffect(() => {
    const course = courses.find((course) => course.courseId === courseId);
    setSelectedCourse(course);
  }, [courseId, courses]);

  const toggleOutlineItem = (index) => {
    setOpenOutlineItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      <TopNav />
      <BottomNav />

      <div className="w-full  text-white ">
        {selectedCourse ? (
          <>
            {/* HEADER (same as you said) */}
            <div className="breadcrumb-wrapper md:h-[50vh] flex justify-center items-center flex-col">
              <h1 className="text-white font-bold text-4xl text-center" >
                {selectedCourse.header.title}
              </h1>
              <p
                className="w-[70vw] text-lg text-white mt-4 text-center"
                dangerouslySetInnerHTML={{
                  __html: selectedCourse.header.description,
                }}
              ></p>
            </div>

            {/* MAIN SECTION */}
            <div className="w-full flex justify-center pt-16 p-6 bg-white">
              <div className="md:w-[80%] flex lg:flex-row flex-col gap-10">

                {/* LEFT CONTENT */}
                <div className="lg:w-[65%]">
                  <h1 className="text-3xl font-bold text-sky-700">
                    {selectedCourse.firstHeading}
                  </h1>
                  <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                    {selectedCourse.firstHeadingDescription}
                  </p>

                  {/* Overview */}
                  <div className="mt-10">
                    <h2 className="text-xl font-semibold text-sky-700">Overview</h2>
                    <p className="text-gray-600 mt-3">{selectedCourse.overview}</p>
                  </div>

                  {/* Learnings */}
                  <div className="mt-10">
                    <h2 className="text-xl font-semibold text-sky-700">What You Will Learn</h2>
                    <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
                      {selectedCourse.whatYouWillLearn.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Outline */}
                 {/* Outline */}
<div className="mt-12">
  <h2 className="text-xl font-semibold text-sky-700">Course Outline</h2>
  <div className="mt-4 space-y-3">
    {selectedCourse.outline.map((item, index) => (
      <div key={index} className="border rounded-lg overflow-hidden">
        
        {/* Outline Header */}
        <div
          className="flex justify-between items-center px-4 py-3 cursor-pointer bg-sky-50 hover:bg-sky-100 transition-colors duration-300"
          onClick={() => toggleOutlineItem(index)}
        >
          <p className="font-medium text-gray-800 text-sm md:text-base">
            {item.month}: {item.title}
          </p>
          <span
            className={`transition-transform duration-300 ${
              openOutlineItems[index] ? "rotate-180" : "rotate-0"
            }`}
          >
            ▼
          </span>
        </div>

        {/* Animated Content */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            openOutlineItems[index] ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-5 py-4 text-gray-600 space-y-3 text-sm leading-relaxed">
            <div>
              <h3 className="font-semibold text-gray-800">{item.subTitle1}</h3>
              <p className="text-xs md:text-sm text-gray-500">{item.subTitle1Content}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">{item.subTitle2}</h3>
              <p className="text-xs md:text-sm text-gray-500">{item.subTitle2Content}</p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

                </div>

                {/* SIDEBAR */}
                <div className="lg:w-[30%] w-full">
                  <div className="bg-sky-50 rounded-xl p-6 shadow-md sticky top-24">
                    <h3 className="text-lg font-semibold text-sky-700 border-b pb-3">
                      Course Details
                    </h3>
                    <div className="mt-4 space-y-4 text-gray-700">
                      <div className="flex justify-between items-center">
                        <span className="flex items-center gap-2">
                          <FaClock size={18} /> Duration
                        </span>
                        <p>{selectedCourse.details?.duration}</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="flex items-center gap-2">
                          <FaBookOpen size={18} /> Weekend Classes
                        </span>
                        <p>{selectedCourse.details?.classHours}</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="flex items-center gap-2">
                          <FaUsers size={18} /> Students
                        </span>
                        <p>{selectedCourse.details?.students}</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="flex items-center gap-2">
                          📘 Course Type
                        </span>
                        <p>{selectedCourse.details?.courseType}</p>
                      </div>
                    </div>

                    <Link to="/register" onClick={scrollTo(0,0)}>
                      <button className="mt-6 w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 rounded-lg transition-all">
                        Enroll Now
                      </button>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </>
        ) : (
          <div className="text-center text-gray-500 mt-16">Course not found.</div>
        )}
      </div>

      <CareerOpportunities />
      <Footer />
    </>
  );
};

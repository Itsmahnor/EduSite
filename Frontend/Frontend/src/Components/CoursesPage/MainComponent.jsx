import React, { useState } from "react";
import { useParams } from "react-router-dom";
import courses from "./MainComponent.json";
import {
  FaUserGraduate,
  FaTasks,
  FaCheckCircle,
  FaLightbulb,
  FaChalkboardTeacher,
  FaDownload,
  FaStar,
  FaUsers,
  FaClock,
  FaGraduationCap,
  FaLinkedin,
  FaClipboardList,
  FaGlobe,
  FaBook,
  FaPlay,
} from "react-icons/fa";
import { TopNav } from "../Navbar/TopNav";
import BottomNav from "../Navbar/BottomNav";
import CareerOpportunities from "../CareerOpertunities";
import Footer from "../Footer/Footer";

export const MainContent = () => {
  const { courseId } = useParams();
  const selectedCourse = courses.find((course) => course.courseId === courseId);
  const [activeTab, setActiveTab] = useState("about");

  if (!selectedCourse) {
    return (
      <div className="text-center py-10 text-red-600">
        Course not found.
      </div>
    );
  }

  const handleEnrollClick = () => {
    window.scrollTo(0, 0);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "about":
        return <AboutContent course={selectedCourse} />;
      case "outcomes":
        return <OutcomesContent course={selectedCourse} />;
      case "modules":
        return <ModulesContent course={selectedCourse} />;
      case "details":
        return <DetailsContent course={selectedCourse} />;
      default:
        return <AboutContent course={selectedCourse} />;
    }
  };

  return (
    <>
      {/* <TopNav /> */}
      <BottomNav />
      {/* Hero Section */}
      <div className="bg-gradient-to-r breadcrumb-wrapper md:h-[50vh] flex justify-center items-center flex-col">
        <h1 className="text-white font-bold text-4xl text-center">
          {selectedCourse.header.title}
        </h1>
        <p
          className="w-[70vw] text-lg text-white mt-4 text-center"
          dangerouslySetInnerHTML={{
            __html: selectedCourse.header.description,
          }}
        ></p>
      </div>

      <div className="px-6 md:px-16 py-12 bg-white text-gray-900">
        {/* Course Stats Section - Updated to match visual flow */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 bg-gray-50 p-8 rounded-xl">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-2xl font-bold text-[#7637bd]">
                {selectedCourse.courseStats.rating}
              </span>
              <FaStar className="text-yellow-500" />
            </div>
            <p className="text-sm text-gray-600">
              ({selectedCourse.courseStats.reviews} reviews)
            </p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-2xl font-bold text-[#7637bd]">
                {selectedCourse.courseStats.modules}
              </span>
              <FaBook className="text-[#7637bd]" />
            </div>
            <p className="text-sm text-gray-600">modules</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-2xl font-bold text-green-600">
                {selectedCourse.courseStats.satisfaction}
              </span>
            </div>
            <p className="text-sm text-gray-600">
              {selectedCourse.courseStats.satisfactionText}
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-8 flex-wrap">
            {[
              { id: "about", label: "About" },
              { id: "outcomes", label: "Outcomes" },
              { id: "modules", label: "Modules" },
              { id: "details", label: "Details" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? "border-[#7637bd] text-[#7637bd]"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        {renderTabContent()}

        {/* Download PDF & Enroll */}
        <div className="bg-sky-100 p-6 rounded-lg flex flex-col md:flex-row items-center justify-between shadow-md mt-12">
          <div>
            <h2 className="text-xl font-semibold text-sky-700">
              Detailed Course Outline
            </h2>
            <p className="text-gray-600 mt-2">
              For a complete overview of this course, download the detailed PDF
              outline.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
            <a
              href={selectedCourse.outlinePdf}
              download
              className="inline-flex items-center gap-2 bg-[#7637bd] hover:bg-sky-700 text-white px-5 py-3 rounded-lg shadow-lg transition"
            >
              <FaDownload /> Download PDF
            </a>

            <button
              onClick={handleEnrollClick}
              className="inline-flex items-center gap-2 bg-[#7637bd] text-white px-5 py-3 rounded-lg shadow-lg transition"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
      <CareerOpportunities />
      <Footer />
    </>
  );
};

// About Tab Content (Matches Screenshot 195821.png)
const AboutContent = ({ course }) => (
  <div className="space-y-12">
    {/* What You'll Learn */}
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">What you'll learn</h2>
      <div className="grid md:grid-cols-3 gap-3">
        {course.whatYoullLearn.map((item, i) => (
          <div key={i} className="flex items-start gap-3 p-2 rounded-lg">
            <FaCheckCircle className="text-[#7637bd] mt-1 flex-shrink-0" />
            <span className="text-gray-700">{item}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Skills You'll Gain */}
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills you'll gain</h2>
      <div className="flex flex-wrap gap-3 w-[60vw]">
        {course.skillsYoullGain.map((skill, i) => (
          <span
            key={i}
            className="px-4 py-2 bg-sky-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Details to Know */}
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Details to know</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {course.detailsToKnow.map((detail, i) => {
          const IconComponent = {
            linkedin: FaLinkedin,
            clipboard: FaClipboardList,
            globe: FaGlobe,
            users: FaUsers,
          }[detail.icon];

          return (
            <div key={i} className="text-center p-4">
              <IconComponent className="text-3xl text-[#7637bd] mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2 text-[1rem]">{detail.title}</h3>
              <p className="text-sm text-gray-600">{detail.description}</p>
            </div>
          );
        })}
      </div>
    </div>

    {/* Overview */}
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
      <p className="text-gray-700 leading-relaxed text-lg">{course.overview}</p>
    </div>

    {/* Audience & Prerequisites (Using the original 'prerequisites' for compatibility) */}
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-[#7637bd] flex items-center gap-2 mb-4">
          <FaUserGraduate /> Target Audience
        </h3>
        <ul className="space-y-3">
          {course.targetAudience.map((audience, i) => (
            <li key={i} className="flex items-start gap-2">
              <FaCheckCircle className="text-[#7637bd] mt-1 flex-shrink-0" />
              <span className="text-gray-700">{audience}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-[#7637bd] flex items-center gap-2 mb-4">
          <FaTasks /> Prerequisites
        </h3>
        <ul className="space-y-3">
          {course.prerequisites.map((req, i) => (
            <li key={i} className="flex items-start gap-2">
              <FaCheckCircle className="text-[#7637bd] mt-1 flex-shrink-0" />
              <span className="text-gray-700">{req}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Instructor */}
    <div className="bg-sky-100 p-6 rounded-lg">
      <h3 className="text-xl font-semibold text-[#7637bd] flex items-center gap-2 mb-4">
        <FaChalkboardTeacher /> Instructor
      </h3>
      <h4 className="font-semibold text-lg">{course.instructor.name}</h4>
      <p className="text-gray-600 mb-2">{course.instructor.designation}</p>
      <p className="text-gray-600 mb-4">{course.instructor.experience}</p>
      <p className="text-gray-700">{course.instructor.bio}</p>
    </div>
  </div>
);

// Outcomes Tab Content (Matches Screenshot 195827.png)
const OutcomesContent = ({ course }) => (
  <div>
    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
      <FaGraduationCap className="text-[#7637bd]" /> Learning Outcomes
    </h2>
    <div className="grid md:grid-cols-2 gap-6">
      {course.learningOutcomes.map((outcome, i) => (
        <div key={i} className="bg-green-50 p-6 rounded-lg shadow-sm">
          <div className="flex items-start gap-3">
            <FaLightbulb className="text-[#7637bd] mt-1 flex-shrink-0 text-xl" />
            <span className="text-gray-800 font-medium">{outcome}</span>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-12">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Course Highlights</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {course.courseHighlights.map((highlight, i) => (
          <div key={i} className="flex items-start gap-3">
            <FaCheckCircle className="text-[#7637bd] mt-1 flex-shrink-0" />
            <span className="text-gray-700">{highlight}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Modules Tab Content (Matches Screenshot 195834.png)
const ModulesContent = ({ course }) => {
  // show only first 3 modules
  const visibleModules = course.modules.slice(0, 3);

  return (
    <div>
      <div className="space-y-4">
        {visibleModules.map((module, i) => (
          <div
            key={i}
            className="bg-white p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sky-700 text-base font-semibold">
                    Module {module.number}
                  </span>
                  <span className="text-sm text-gray-500">
                    {module.duration}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {module.title}
                </h3>
                <p className="text-gray-700 mb-4">{module.description}</p>
                <div className="flex flex-wrap gap-2">
                  {module.topics.map((topic, j) => (
                    <span
                      key={j}
                      className="text-sm text-[#7637bd] px-3 py-1 rounded-full border border-sky-100 bg-sky-50"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
              <FaPlay className="text-[#7637bd] mt-2 text-xl cursor-pointer ml-4" />
            </div>
          </div>
        ))}
      </div>

      {/* See more & Download Outline */}
      {course.modules.length > 3 && (
        <div className="mt-8 text-center">
          <a
            href={course.outlinePdf}
            download
            className="inline-flex items-center gap-2 bg-[#7637bd] text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-700 transition-colors"
          >
            <FaDownload />
            See All Modules – Download Course Outline
          </a>
        </div>
      )}
    </div>
  );
};

const DetailsContent = ({ course }) => (
  <div className="space-y-6">
    {/* Course Level + Pace */}
    <div className="flex items-center justify-between text-gray-700 text-sm mb-6">
      <span className="text-base font-semibold text-gray-800 bg-gray-100 px-3 py-1 rounded-md">
        {course.courseStats?.level}
      </span>
      <span className="text-base font-semibold text-gray-800 bg-gray-100 px-3 py-1 rounded-md">
        {course.courseStats?.pace}
      </span>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Course Information */}
      <div className="md:col-span-2 space-y-4">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Course Information
        </h2>
        <div className="divide-y divide-gray-200 border border-sky-200 rounded-lg bg-white">
          {course.courseInformation &&
            Object.entries(course.courseInformation).map(([key, value], i) => (
              <div
                key={i}
                className="flex justify-between items-center px-4 py-3"
              >
                <span className="font-medium text-gray-600">{key}</span>
                <p
                  className={`font-semibold ${
                    key === "Duration" ? "text-[#7637bd]" : "text-gray-800"
                  }`}
                >
                  {String(value)}
                </p>
              </div>
            ))}
        </div>
      </div>

      {/* Prerequisites */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Prerequisites
        </h2>
        <ul className="space-y-3">
          {course.prerequisitesDetails?.map((req, i) => (
            <li
              key={i}
              className="flex items-start gap-2 bg-gray-50 p-3 rounded-md"
            >
              <FaCheckCircle className="text-[#7637bd] mt-1 flex-shrink-0 text-lg" />
              <span className="text-gray-700 text-sm leading-snug">{req}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default MainContent;
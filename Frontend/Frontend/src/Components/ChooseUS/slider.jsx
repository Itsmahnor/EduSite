import React, { useState } from "react";
import { ICONS } from "./Icons";

const Opportunities = () => {
  const [openPanel, setOpenPanel] = useState(null);

  const togglePanel = (index) => {
    setOpenPanel(openPanel === index ? null : index);
  };

  const panelData = [
    {
      title: "Jobs Opportunities",
      content: `
        Unlock access to exclusive job opportunities tailored to your skills and interests. 
        Our platform connects you with top employers in various industries, including tech, healthcare, education, and more.
       
      `,
    },
    {
      title: "Internship Opportunities",
      content: `
        Gain practical experience with internships designed to enhance your learning and skillset. 
        Our curated internship programs cover fields like software development, graphic design, data analytics, marketing, and more. 
        
      `,
    },
    {
      title: "Career Opportunities",
      content: `
        Explore personalized career paths that align with your long-term goals. 
        Our career counseling sessions guide you through industry trends, required skillsets, and potential job roles. 
        
      `,
    },
    {
      title: "Certification Opportunities",
      content: `
        Enhance your credentials with globally recognized certifications in various domains. 
        Our courses provide certifications in fields such as IT, project management, data science, and digital marketing. 
        
      `,
    },
    {
      title: "Free Freelancing Course Opportunities",
      content: `
        Learn how to succeed in the freelancing world with our free courses designed for beginners and professionals. 
        From building your online profile to securing clients, our courses cover everything you need to know. 
        
      `,
    },
    {
      title: "Free Courses & Workshops",
      content: `
        Expand your knowledge with our free courses and workshops conducted by industry leaders. 
        Subjects range from web development, cloud computing, and AI to public speaking and personal finance management. 
       
      `,
    },
  ];

  return (
    <section className=" py-16 px-6">
      <div className="container mx-auto">
        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center mb-16">
          <div className="border p-1 bg-sky-700 text-[#ffffff]">
            <div className="text-4xl font-bold ">4+</div>
            <p className="mt-2">Centres</p>
            <p className="text-sm text-[#b8b8b8]">
              With over 4 local training centres worldwide.
            </p>
          </div>
          <div className="border p-1 bg-sky-700 text-[#ffffff]">
            <div className="text-4xl font-bold ">20+</div>
            <p className="mt-2">Courses</p>
            <p className="text-sm text-[#b8b8b8]">
              Our unique training, based on practical activity.
            </p>
          </div>
          <div className="border p-1 bg-sky-700 text-[#ffffff]">
            <div className="text-4xl font-bold ">7+</div>
            <p className="mt-2">Years</p>
            <p className="text-sm text-[#b8b8b8]">
              Our heritage and longevity as a leading institute.
            </p>
          </div>
          <div className="border p-1 bg-sky-700 text-[#ffffff]">
            <div className="text-4xl font-bold ">30K+</div>
            <p className="mt-2">Students</p>
            <p className="text-sm text-[#b8b8b8]">
              Our heritage and longevity with over 30,000 students.
            </p>
          </div>
        </div>

        {/* Opportunities Section */}
     <div className="space-y-4">
  {panelData.map((panel, index) => (
    <div
      key={index}
      className="bg-[#098E68] rounded-lg shadow-lg overflow-hidden transition-all duration-300"
    >
      {/* Toggle Button */}
      <button
        onClick={() => togglePanel(index)}
        className="flex items-center justify-between w-full px-4 py-3 text-lg font-semibold text-[#ffffff] hover:bg-[#066b4c] transition-colors duration-300"
      >
        <span className="flex items-center gap-2">
          <span className={`transition-transform duration-300 ${openPanel === index ? "rotate-45" : ""}`}>
            +
          </span>
          {panel.title}
        </span>
      </button>

      {/* Animated Panel Content */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          openPanel === index
            ? "max-h-96 opacity-100 bg-[#04211e] text-[#b8b8b8] px-4 py-2"
            : "max-h-0 opacity-0"
        } overflow-hidden text-sm whitespace-pre-line`}
      >
        {panel.content}
      </div>
    </div>
  ))}
</div>

      </div>

    </section>
  );
};

export default Opportunities;

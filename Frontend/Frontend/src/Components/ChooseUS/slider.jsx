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
        Whether you’re a fresher or an experienced professional, explore openings that match your career aspirations. 
        Benefit from resume building tips, interview preparation guides, and networking events to land your dream job.
      `,
    },
    {
      title: "Internship Opportunities",
      content: `
        Gain practical experience with internships designed to enhance your learning and skillset. 
        Our curated internship programs cover fields like software development, graphic design, data analytics, marketing, and more. 
        Get mentorship from industry experts and real-world projects to prepare you for future challenges. 
        Apply now to kickstart your professional journey with internships that offer invaluable hands-on training.
      `,
    },
    {
      title: "Career Opportunities",
      content: `
        Explore personalized career paths that align with your long-term goals. 
        Our career counseling sessions guide you through industry trends, required skillsets, and potential job roles. 
        We also offer career development workshops focusing on communication skills, leadership training, and professional branding. 
        Discover opportunities to grow your career through strategic planning and actionable insights.
      `,
    },
    {
      title: "Certification Opportunities",
      content: `
        Enhance your credentials with globally recognized certifications in various domains. 
        Our courses provide certifications in fields such as IT, project management, data science, and digital marketing. 
        Each certification is tailored to industry standards and helps validate your skills to employers worldwide. 
        Join our training programs to prepare for certification exams and take your expertise to the next level.
      `,
    },
    {
      title: "Free Freelancing Course Opportunities",
      content: `
        Learn how to succeed in the freelancing world with our free courses designed for beginners and professionals. 
        From building your online profile to securing clients, our courses cover everything you need to know. 
        Topics include effective communication, pricing strategies, time management, and building a consistent client base. 
        Start your freelancing journey today with expert-led modules and real-life success stories.
      `,
    },
    {
      title: "Free Courses & Workshops",
      content: `
        Expand your knowledge with our free courses and workshops conducted by industry leaders. 
        Subjects range from web development, cloud computing, and AI to public speaking and personal finance management. 
        These workshops are interactive, hands-on, and designed to cater to learners of all levels. 
        Take advantage of this opportunity to upskill and stay ahead in your professional journey.
      `,
    },
  ];

  return (
    <section className="bg-[#04211e] text-[#ffffff] py-16 px-6">
      <div className="container mx-auto">
        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center mb-16">
          <div className="border p-1">
            <div className="text-4xl font-bold text-[#098E68]">4+</div>
            <p className="mt-2">Centres</p>
            <p className="text-sm text-[#b8b8b8]">
              With over 4 local training centres worldwide.
            </p>
          </div>
          <div className="border p-1">
            <div className="text-4xl font-bold text-[#098E68]">20+</div>
            <p className="mt-2">Courses</p>
            <p className="text-sm text-[#b8b8b8]">
              Our unique training, based on practical activity.
            </p>
          </div>
          <div className="border p-1">
            <div className="text-4xl font-bold text-[#098E68]">7+</div>
            <p className="mt-2">Years</p>
            <p className="text-sm text-[#b8b8b8]">
              Our heritage and longevity as a leading institute.
            </p>
          </div>
          <div className="border p-1">
            <div className="text-4xl font-bold text-[#098E68]">30K+</div>
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
              className="bg-[#098E68] text-[#04211e] rounded-lg shadow-lg"
            >
              <button
                onClick={() => togglePanel(index)}
                className="flex items-center justify-between w-full px-4 py-3 text-lg font-semibold text-[#ffffff]"
              >
                <span>+ {panel.title}</span>
              </button>
              {openPanel === index && (
                <div className="bg-[#04211e] text-[#b8b8b8] px-4 py-2 text-sm whitespace-pre-line">
                  {panel.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Opportunities;

import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export const AboutMe = () => {
  return (
    <div className="relative w-full bg-white py-2 flex justify-center overflow-hidden">
      <div className="w-[70vw] max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-6 items-center relative z-10">
        
        {/* Left Content */}
        <div className="text-[#04211e] space-y-5 relative">
          {/* Decorative circle behind "About Me" */}
          <div className="absolute -top-6 -left-6 w-16 h-16 bg-[#61dbd1]/30 rounded-full -z-10"></div>
          
          {/* Small Heading */}
          <p className="uppercase text-sm font-semibold text-[#61dbd1] relative inline-block">
            About <span className="bg-[#61dbd1]/20 text-[#04211e] px-2 rounded-md">Me</span>
          </p>

          {/* Main Heading */}
          <h2 className="text-2xl md:text-4xl font-bold leading-snug">
            Educated Over <span className="text-[#61dbd1]">10,000+</span> Students In Pakistan
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            I am passionate about empowering students with hands-on coding skills, 
            IT services knowledge, and real-world problem-solving approaches. Over the past decade, 
            I have mentored thousands of learners through structured programs, guiding them 
            in mastering programming, development, and emerging technologies.
          </p>

          {/* Bullet Points */}
          <ul className="space-y-2">
            {[
              "15+ years of teaching & coding experience",
              "Delivered 10,000+ hours of training & mentorship",
              "Specialized in Web Development, IT Services & Programming",
            ].map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 text-sm md:text-base"
              >
                <FaCheckCircle className="text-[#61dbd1]" />
                {item}
              </li>
            ))}
          </ul>

          {/* Button */}
          <button className="mt-4 px-6 py-3 bg-[#61dbd1] text-white font-semibold rounded-lg shadow-md hover:bg-[#4cb6aa] transition">
            Get More Info
          </button>
        </div>

        {/* Right Content - Image with decoration */}
        <div className="relative flex justify-center md:justify-end">
          {/* Decorative rectangle behind image */}
          <div className="absolute -bottom-6 -right-6 w-[150px] h-[200px] bg-[#29aea3] rounded-xl -z-10"></div>
          {/* <div className="absolute -top-4 left-0 w-[120px] h-[100px] bg-[#4ff7e6] rounded-xl -z-10"></div> */}

          {/* Main Image */}
          <div className="relative">
            <img
              src="https://i1.rgstatic.net/ii/profile.image/1055204350885891-1628591730832_Q512/Dr-Hamid.jpg"
              alt="about"
              className="rounded-2xl shadow-lg object-cover w-full max-w-[400px] h-[400px]"
            />
            {/* Instructor Name Overlay */}
            <div className="absolute -top-2 left-0 bg-[#04211e]/80 text-white text-sm md:text-base font-semibold px-3 py-1 rounded-lg shadow">
              Dr. Muhammad Hamid
            </div>
          </div>

          {/* Floating small circle */}
          <div className="absolute -top-4 -left-16 w-8 h-8 bg-[#61dbd1] rounded-full shadow-lg"></div>
        </div>
      </div>
    </div>
  );
};

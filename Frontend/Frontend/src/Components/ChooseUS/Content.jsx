import React from "react";
import img from '../Navbar/Images/about.png'
const WhyChoose = () => {
  return (
    <section className="bg-white text-[#04211e] py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
        {/* Left Side - Image and Key Features */}
       
          <img
            src={img}
            alt="Why Choose Us"
            className="rounded-lg transition-transform duration-300 hover:scale-110 "
          />
          {/* <h3 className="text-2xl font-bold text-[#04211e] mt-6">Key Features</h3>
          <ul className="mt-4 space-y-3 text-[#04211e] font-bold">
            <li className="text-[#04211e]">✓ Scholarships</li>
            <li className="text-[#04211e]">✓ Flexible Time Slots</li>
            <li className="text-[#04211e]">✓ Career Counseling</li>
            <li className="text-[#04211e]">✓ Modern Methodologies</li>
            <li className="text-[#04211e]">✓ Digital Connectivity</li>
            <li className="text-[#04211e]">✓ Lifetime Support</li>
          </ul> */}
    

        {/* Right Side - Text Content */}
        <div>
          <h2 className="text-4xl font-bold text-[#04211e]">
  Skills, Education, and Training
</h2>
<h3 className="text-2xl font-semibold text-[#04211e] mt-4">
  Online Courses in Web & Software Development
</h3>
<p className="mt-6 leading-relaxed text-[#04211e]">
  At <span className="font-semibold">SKILL.PRO</span>, we offer professional online 
  training programs in web development, software engineering, and emerging technologies. 
  Our courses are designed to provide a strong foundation along with hands-on projects, 
  ensuring you gain both theoretical knowledge and practical expertise. Whether you want 
  to become a front-end developer, full-stack engineer, or explore the latest AI-powered 
  tools, our programs prepare you for real-world challenges.
</p>

          {/* <ul className="mt-6 space-y-2 text-sky-700 font-medium">
            <li>✓ Specialized certifications in marketing and app development</li>
            <li>✓ Flexible online programs for busy professionals</li>
            <li>✓ Accelerated learning pathways to fast-track your career</li>
            <li>✓ Dual degree and certification options</li>
          </ul> */}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;

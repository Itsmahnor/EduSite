import React from "react";

const WhyChoose = () => {
  return (
    <section className="bg-[#04211e] text-[#ffffff] py-16 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image and Key Features */}
        <div className="relative bg-white  rounded-lg shadow-lg p-6">
          <img
            src="https://cdn.vectorstock.com/i/500p/55/61/why-choose-us-speech-bubble-vector-24175561.jpg"
            alt="Why Choose Us"
            className="rounded-lg transition-transform duration-300 hover:scale-110"
          />
          <h3 className="text-2xl font-bold text-[#04211e] mt-6">Key Features</h3>
          <ul className="mt-4 space-y-3 text-[#04211e] font-bold">
            <li>✓ Scholarships</li>
            <li>✓ Flexible Time Slots</li>
            <li>✓ Career Counseling</li>
            <li>✓ Modern Methodologies</li>
            <li>✓ Digital Connectivity</li>
            <li>✓ Lifetime Support</li>
          </ul>
        </div>

        {/* Right Side - Text Content */}
        <div>
          <h2 className="text-4xl font-bold text-[#098E68]">
            Skills Education and Training
          </h2>
          <h3 className="text-2xl font-semibold text-[#ffffff] mt-4">
            Online Courses Web Development & App Development
          </h3>
          <p className="mt-6 leading-relaxed text-[#b8b8b8]">
            Our institute provides high-quality online development courses in
            marketing and app development, designed to equip you with the latest
            skills in the industry. Whether you are looking to build a career in
            digital marketing or mobile app development, our specialized
            certifications and programs offer practical knowledge and hands-on
            experience to help you succeed.
          </p>
          <ul className="mt-6 space-y-2 text-[#098E68] font-medium">
            <li>✓ Specialized certifications in marketing and app development</li>
            <li>✓ Flexible online programs for busy professionals</li>
            <li>✓ Accelerated learning pathways to fast-track your career</li>
            <li>✓ Dual degree and certification options</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;

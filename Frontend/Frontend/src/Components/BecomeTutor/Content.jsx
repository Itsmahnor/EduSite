import React from 'react';

const BecomeInstructorSection = () => {
  return (
    <div className="bg-[#04211e] text-[#ffffff] px-8 py-10 w-[100vw] flex justify-center items-center">
      <div className='w-[70vw]'>
        {/* Title Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold uppercase mb-4 text-white">Become an Instructor</h2>
          <h3 className="text-3xl font-bold mb-6 text-[#098E68]">Start Teaching with SkillsEducation</h3>
          <p className="text-lg">
            Join SkillsEducation to make a positive impact on students' lives. As an instructor, you'll have the
            chance to teach a variety of subjects and engage with a global audience through our platform. We offer
            a flexible teaching environment and competitive compensation for your expertise.
          </p>
        </div>

        {/* Requirements Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold uppercase mb-4 text-[#098E68]">Requirements to Become an Instructor:</h2>
          <ul className="list-none space-y-3">
            <li>✔️ A degree or certification in your area of expertise</li>
            <li>✔️ Proven teaching experience or a passion for teaching</li>
            <li>✔️ Strong communication skills and the ability to engage students</li>
            <li>✔️ Access to a reliable internet connection for online classes</li>
            <li>✔️ Ability to create high-quality course materials</li>
          </ul>
        </div>

        {/* Benefits Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold uppercase mb-4 text-[#098E68]">Benefits of Becoming an Instructor:</h2>
          <ul className="list-none space-y-3">
            <li>✔️ Earn a competitive salary based on the courses you teach</li>
            <li>✔️ Flexible working hours and remote teaching opportunities</li>
            <li>✔️ Be part of a global educational community</li>
            <li>✔️ Access to tools and resources to enhance your teaching experience</li>
            <li>✔️ Get recognition for your expertise and grow your professional profile</li>
          </ul>
        </div>

        {/* Salary Section */}
        <div>
          <h2 className="text-2xl font-bold uppercase mb-4 text-[#098E68]">Instructor Salary:</h2>
          <p className="text-lg">
            Instructors are compensated based on the number of courses they offer and the number of students
            enrolled. We offer competitive rates that reward your hard work and dedication.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BecomeInstructorSection;

import React from 'react';

const InternshipCertificationProgram = () => {
  return (
    <div className="bg-[#04211e] text-white w-[100vw] py-10 flex justify-center items-center">
      {/* Certification Section */}
      <div className="bg-[#04211e] text-white px-8 py-10 w-[70vw]">
        <h2 className="text-2xl font-bold uppercase mb-4 text-white">Certificate</h2>
        <h3 className="text-3xl font-bold mb-6 text-white">Internship Certification Program</h3>
        <ul className="text-lg space-y-3">
          <li className="flex items-center">
            <span className="text-white mr-2">✔</span> Web Development
          </li>
          <li className="flex items-center">
            <span className="text-white mr-2">✔</span> Marketing
          </li>
          <li className="flex items-center">
            <span className="text-white mr-2">✔</span> App Development
          </li>
          <li className="flex items-center">
            <span className="text-white mr-2">✔</span> Graphic Designing
          </li>
          <li className="flex items-center">
            <span className="text-white mr-2">✔</span> Freelancing
          </li>
          <li className="flex items-center">
            <span className="text-white mr-2">✔</span> AI
          </li>
          <li className="flex items-center">
            <span className="text-white mr-2">✔</span> Game Development
          </li>
          <li className="flex items-center">
            <span className="mr-2">✔</span> Programming
          </li>
        </ul>
        <p className="text-white mt-6 font-bold text-[2rem]">
          Guaranteed Certification on Completion
        </p>

        <div className="bg-[#04211e] text-white px-8 py-10">
          {/* Overview */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold uppercase mb-4 text-white">Overview</h2>
            <p className="text-light-gray text-lg">
              Our Internship Certification Program is designed to provide hands-on experience in various fields 
              such as development, marketing, technology, and more. It combines practical work with in-depth learning 
              to help students enhance their skills and become job-ready. The program will involve both supervised and 
              self-directed activities, giving students a comprehensive understanding of their chosen area of interest.
            </p>
          </div>

          {/* Program Features */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold uppercase mb-4 text-white">Program Features</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Hands-on experience in diverse fields.</li>
              <li>Work on live projects to enhance skills.</li>
              <li>Supervised by industry experts.</li>
              <li>Opportunities for career development and networking.</li>
              <li>Develop both technical and soft skills.</li>
            </ul>
          </div>

          {/* Requirements */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold uppercase mb-4 text-white">Requirements</h2>
            <p className="text-light-gray text-lg mb-4">
              To earn the internship certificate, the following requirements must be fulfilled:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Attend at least 80% of live classes.</li>
              <li>Complete 90% of assignments.</li>
              <li>Clear all dues before receiving certification.</li>
              <li>Achieve a minimum of 85% marks in the program.</li>
            </ul>
          </div>

          {/* Internship Projects */}
          <div>
            <h2 className="text-2xl font-bold uppercase mb-4 text-white">Internship Projects</h2>
            <p className="text-light-gray text-lg mb-4">
              Students can choose from a wide range of internship projects in various fields such as:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-white">
              <li>Development: Software development, mobile app development, etc.</li>
              <li>Marketing: Digital marketing, market research, content creation, etc.</li>
              <li>Business Management: Project management, team leadership, and business analysis.</li>
              <li>Technology & IT: Cloud computing, cybersecurity, data analysis, etc.</li>
              <li>Human Resources: Recruitment, employee engagement, HR policies, etc.</li>
              <li>Sales & Customer Service: Client relations, sales strategies, customer support, etc.</li>
              <li>Finance & Accounting: Financial analysis, bookkeeping, and budgeting.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipCertificationProgram;

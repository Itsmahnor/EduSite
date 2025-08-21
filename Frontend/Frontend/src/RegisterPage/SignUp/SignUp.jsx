import React, { useState, useEffect } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa';
import { BsCalendarDate } from 'react-icons/bs';
import { IoMdArrowDropdown } from 'react-icons/io';
import axios from 'axios';

const SignUp = () => {
  // State to store courses data from backend
  const [coursesData, setCoursesData] = useState([]);

  // Updated formData to include 'category' and 'course' (instead of selectedCourse)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    city: '',
    age: '',
    qualification: '',
    gender: '',
    programmingBackground: '',
    category: '',
    course: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch course categories (with courses) from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/courses")
      .then((res) => res.json())
      .then((data) => setCoursesData(data))
      .catch((error) => console.error("Error fetching courses data:", error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // If the user changes category, reset the course selection
    if (name === 'category') {
      setFormData({ ...formData, category: value, course: '' });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    } else if (!/^[a-zA-Z\s]*$/.test(formData.fullName)) {
      newErrors.fullName = 'Name should contain only letters (A-Z)';
    } else if (formData.fullName.length <= 2) {
      newErrors.fullName = 'Name is too short';
    }
    if (!formData.email.trim() || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email))
      newErrors.email = 'Valid Email is required';
    if (!formData.phoneNumber.trim() || !/^\d{10,15}$/.test(formData.phoneNumber))
      newErrors.phoneNumber = 'Valid Phone Number is required';
    if (!formData.city.trim())
      newErrors.city = 'City is required';
    if (!formData.age || formData.age < 18 || formData.age > 100)
      newErrors.age = 'Age must be between 18 and 100';
    if (!formData.qualification.trim())
      newErrors.qualification = 'Qualification is required';
    if (!formData.gender)
      newErrors.gender = 'Gender is required';
    if (!formData.programmingBackground)
      newErrors.programmingBackground = 'Programming Background is required';
    if (!formData.category)
      newErrors.category = 'Category selection is required';
    if (!formData.course)
      newErrors.course = 'Course selection is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      try {
        // Adjust the URL as necessary
        const response = await axios.post(`${window.location.origin}/api/viv/register`, formData);
        alert('Form submitted successfully: ' + response.data.message);
        setFormData({
          fullName: '',
          email: '',
          phoneNumber: '',
          city: '',
          age: '',
          qualification: '',
          gender: '',
          programmingBackground: '',
          category: '',
          course: '',
        });
      } catch (error) {
        console.error(error);
        alert('Error submitting the form: ' + (error.response?.data?.message || error.message));
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // Filter to find the courses array for the selected category
  const selectedCategoryData = coursesData.find(cat => cat.category === formData.category);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#04211e] overflow-hidden">
      <div className="w-full max-w-md bg-[#098E68] p-8 rounded-lg shadow-lg">
        <h1 className="text-center text-3xl font-bold text-[#ffffff] mb-6">SIGN UP</h1>
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="flex flex-col">
            <div className="flex items-center bg-white rounded-lg text-[#04211e] px-4">
              <FaUser className="text-xl mr-3" />
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="flex-grow py-2 bg-transparent placeholder-[#b8b8b8] focus:outline-none"
              />
            </div>
            {errors.fullName && <span className="text-white text-sm mt-1">{errors.fullName}</span>}
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <div className="flex items-center bg-white rounded-lg text-[#04211e] px-4">
              <FaEnvelope className="text-xl mr-3" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="flex-grow py-2 bg-transparent placeholder-[#b8b8b8] focus:outline-none"
              />
            </div>
            {errors.email && <span className="text-white text-sm mt-1">{errors.email}</span>}
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <div className="flex items-center bg-white rounded-lg text-[#04211e] px-4">
              <FaPhone className="text-xl mr-3" />
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="flex-grow py-2 bg-transparent placeholder-[#b8b8b8] focus:outline-none"
              />
            </div>
            {errors.phoneNumber && <span className="text-white text-sm mt-1">{errors.phoneNumber}</span>}
          </div>

          {/* City */}
          <div className="flex flex-col">
            <div className="flex items-center bg-white rounded-lg text-[#04211e] px-4">
              <FaMapMarkerAlt className="text-xl mr-3" />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="flex-grow py-2 bg-transparent placeholder-[#b8b8b8] focus:outline-none"
              />
            </div>
            {errors.city && <span className="text-white text-sm mt-1">{errors.city}</span>}
          </div>

          {/* Age */}
          <div className="flex flex-col">
            <div className="flex items-center bg-white rounded-lg text-[#04211e] px-4">
              <BsCalendarDate className="text-xl mr-3" />
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
                className="flex-grow py-2 bg-transparent placeholder-[#b8b8b8] focus:outline-none"
              />
            </div>
            {errors.age && <span className="text-white text-sm mt-1">{errors.age}</span>}
          </div>

          {/* Qualification */}
          <div className="flex flex-col">
            <div className="flex items-center bg-white rounded-lg text-[#04211e] px-4">
              <FaGraduationCap className="text-xl mr-3" />
              <input
                type="text"
                name="qualification"
                placeholder="Qualification"
                value={formData.qualification}
                onChange={handleChange}
                className="flex-grow py-2 bg-transparent placeholder-[#b8b8b8] focus:outline-none"
              />
            </div>
            {errors.qualification && <span className="text-white text-sm mt-1">{errors.qualification}</span>}
          </div>

          {/* Select Gender */}
          <div className="flex flex-col">
            <div className="flex items-center bg-white rounded-lg text-[#04211e] px-4">
              <IoMdArrowDropdown className="text-xl mr-3" />
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="flex-grow py-2 bg-transparent placeholder-[#b8b8b8] focus:outline-none"
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            {errors.gender && <span className="text-white text-sm mt-1">{errors.gender}</span>}
          </div>

          {/* Programming Background */}
          <div className="flex flex-col">
            <div className="flex items-center bg-white rounded-lg text-[#04211e] px-4">
              <IoMdArrowDropdown className="text-xl mr-3" />
              <select
                name="programmingBackground"
                value={formData.programmingBackground}
                onChange={handleChange}
                className="flex-grow py-2 bg-transparent placeholder-[#b8b8b8] focus:outline-none"
              >
                <option value="" disabled>
                  Do you have Programming Background?
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            {errors.programmingBackground && <span className="text-white text-sm mt-1">{errors.programmingBackground}</span>}
          </div>

          {/* --- New Section for Category and Course Selection --- */}
          {/* Select Category */}
          <div className="flex flex-col">
            <div className="flex items-center bg-white rounded-lg text-[#04211e] px-4">
              <IoMdArrowDropdown className="text-xl mr-3" />
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="flex-grow py-2 bg-transparent placeholder-[#b8b8b8] focus:outline-none"
              >
                <option value="" disabled>
                  Select a Category
                </option>
                {coursesData.map((cat) => (
                  <option key={cat.category} value={cat.category}>
                    {cat.category}
                  </option>
                ))}
              </select>
            </div>
            {errors.category && <span className="text-white text-sm mt-1">{errors.category}</span>}
          </div>

          {/* Select Course */}
          {formData.category && selectedCategoryData && (
            <div className="flex flex-col">
              <div className="flex items-center bg-white rounded-lg text-[#04211e] px-4">
                <IoMdArrowDropdown className="text-xl mr-3" />
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="flex-grow py-2 bg-transparent placeholder-[#b8b8b8] focus:outline-none"
                >
                  <option value="" disabled>
                    Select a Course
                  </option>
                  {selectedCategoryData.courses.map((course) => (
                    <option key={course.route} value={course.name}>
                      {course.name}
                    </option>
                  ))}
                </select>
              </div>
              {errors.course && <span className="text-white text-sm mt-1">{errors.course}</span>}
            </div>
          )}

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3 bg-[#04211e] text-[#098E68] rounded-lg font-bold hover:bg-[#031a15] transition-all"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

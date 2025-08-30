import React, { useState } from 'react';
import axios from 'axios';
import { TopNav } from '../Components/Navbar/TopNav';
import BottomNav from '../Components/Navbar/BottomNav';
import Footer from '../Components/Footer/Footer';
import { ICONS } from '../Components/Icons/Icons';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      try {
        const response = await axios.post(`${window.location.origin}/api/con/Contact`, formData);
        setSuccessMessage(response.data.message || 'Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      } catch (error) {
        console.log(error);
        setErrors({ form: 'Failed to send your message. Please try again later.' });
      }
    }
  };

  return (
    <div className="bg-gradient-to-b  text-[#04211e]">
      <TopNav />
      <BottomNav />

      {/* Hero Section */}
      <div className="breadcrumb-wrapper md:h-[50vh] flex justify-center items-center flex-col text-center py-12">
        <h1 className="text-white font-bold text-4xl mb-4">Get in Touch with ProLernoX</h1>
        <p className="w-[70vw] text-white text-lg leading-relaxed">
          At <span className="text-white bg-sky-900 px-2 py-1 rounded">ProLernoX</span>, we are always happy to hear from you! 
          Whether you have questions about our courses, need support, or want to learn more about how we can help you achieve 
          your educational goals, feel free to reach out. Our team is here to assist you every step of the way.
        </p>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-start gap-16">

          {/* Left Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Our Office</h2>
            <p className="text-[#04211e] mb-6">
              We work for the betterment of society by training people in IT and other technologies. 
              Our mission is to reduce unemployment by creating opportunities.
            </p>
            <h3 className="text-xl font-semibold mb-2">Regional Office</h3>
            <p className="mb-2 text-[#04211e]">⏰ 9am - 9pm Monday-Thursday; Friday closed.</p>
            <p className="mb-2 text-[#04211e]">📍 Near Bay High School, Ahmed Pur Road, Bahawalpur</p>
            <p className="mb-6 text-[#04211e]">📧 ProLernoX@gmail.com</p>
            
            <div className="relative w-full h-60 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3481.947451521818!2d72.91452711465095!3d30.171558581858636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391d597217d72995%3A0x486d95438e9865f!2sNer%20Bay%20Farooqi%20Autos%20Hatheji%2C!5e0!3m2!1sen!2s!4v1616161616161!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right Form */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-[#04211e] mb-6">Contact Us</h2>
            <form
              className="bg-white text-sky-900 p-8 rounded-2xl shadow-2xl transform transition duration-300 hover:scale-[1.01]"
              onSubmit={handleSubmit}
            >
              <div className="mb-5">
                <label className="block text-sm font-semibold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full px-4 py-2 border border-sky-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div className="mb-5">
                <label className="block text-sm font-semibold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full px-4 py-2 border border-sky-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div className="mb-5">
                <label className="block text-sm font-semibold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-2 border border-sky-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  id="message"
                  rows="4"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>
              <button
                className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all"
                type="submit"
              >
                Send Message
              </button>
              {errors.form && <p className="text-red-500 mt-4">{errors.form}</p>}
              {successMessage && (
                <p className="text-green-600 font-medium mt-4">{successMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>

      <ICONS />
      <Footer />
    </div>
  );
};

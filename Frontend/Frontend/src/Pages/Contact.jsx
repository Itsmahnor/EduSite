import React, { useState } from 'react';
import axios from 'axios';
import { TopNav } from '../Components/Navbar/TopNav';
import { BottomNav } from '../Components/Navbar/BottomNav';
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
        // Send form data to the backend
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
    <div className="bg-[#04211e] text-[#ffffff]">
      <TopNav />
      <BottomNav />
      <div className="breadcrumb-wrapper md:h-[50vh] flex justify-center items-center flex-col text-center py-12">
        <h1 className="text-white font-bold text-3xl mb-4">Get in Touch with ProLernoX</h1>
        <p className="w-[70vw] text-[#b8b8b8]">
          At <span className="bg-[#04211e] text-white p-1">ProLernoX</span>, we are always happy to hear from you! 
          Whether you have questions about our courses, need support, or want to learn more about how we can help you achieve 
          your educational goals, feel free to reach out. Our team is here to assist you every step of the way.
        </p>
      </div>

      <div className="bg-[#04211e] text-[#ffffff] min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
              <p className="text-lg text-[#b8b8b8] mb-8">
                We work for the betterment of society by training its people in the field of Information Technology and other technologies. 
                We aim to make this company an opportunity hub to reduce unemployment.
              </p>
              <h3 className="text-2xl font-bold text-white mb-4">Regional Office</h3>
              <p className="mb-4 text-[#b8b8b8]">9am - 9pm Monday-Thursday; Friday is closed.</p>
              <p className="mb-4 text-[#b8b8b8]">Near Bay High School, Ahmed Pur Road, District Bahawalpur</p>
              <p className="mb-4 text-[#b8b8b8]">ProLernoX@gmail.com</p>
              <div className="relative w-full h-60">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3481.947451521818!2d72.91452711465095!3d30.171558581858636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391d597217d72995%3A0x486d95438e9865f!2sNer%20Bay%20Farooqi%20Autos%20Hatheji%2C%0x391d597217d72995%3A0x486d95438e9865f!5e0!3m2!1sen!2s!4v1616161616161!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold text-[#098E68] mb-4">Contact Us</h2>
              <form className="bg-[#098E68] p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-[#04211e] text-sm font-bold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-[#04211e] leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <p className="text-white text-xs mt-1">{errors.name}</p>}
                </div>
                <div className="mb-4">
                  <label className="block text-[#04211e] text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-[#04211e] leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="text-white text-xs mt-1">{errors.email}</p>}
                </div>
                <div className="mb-4">
                  <label className="block text-[#04211e] text-sm font-bold mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-[#04211e] leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    rows="4"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && <p className="text-white text-xs mt-1">{errors.message}</p>}
                </div>
                <button
                  className="bg-[#04211e] hover:bg-[#098E68] text-[#ffffff] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Send Message
                </button>
                {errors.form && <p className="text-white  mt-4">{errors.form}</p>}
                {successMessage && (
                  <p className="text-white text-sm mt-4">{successMessage}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      <ICONS />
      <Footer />
    </div>
  );
};

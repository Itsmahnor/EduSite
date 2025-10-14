import React, { useState } from 'react'
import { TopNav } from '../Components/Navbar/TopNav'
import { BottomNav } from '../Components/Navbar/BottomNav'
import { Header } from '../Components/OurInstructors/Header'
import { ICONS } from '../Components/Icons/Icons'
import Footer from '../Components/Footer/Footer'
import { motion } from "framer-motion";
import { ServicesList } from '../Components/ServicesList'

const servicesData = [
  {
    id: 1,
    title: "Web Design & Development",
    category: "Web",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&auto=format&fit=crop&q=80",
    whyTitle: "Why Good Web Design Matters",
    whyText: `Your website is the first impression of your brand in the digital space. A strong, professional design not only builds trust but also guides visitors smoothly towards taking meaningful actions. 
    Well-structured websites reduce bounce rates, improve accessibility, and make your business look more credible. 
    Modern businesses cannot afford outdated designs as users expect speed, simplicity, and elegance.`,
    offeringsTitle: "What We Offer",
    offerings: [
      "Responsive & Mobile-Friendly Websites",
      "E-Commerce Stores with Secure Payment Systems",
      "UI/UX Design & Conversion Optimization",
      "SEO-Friendly Structures & Content Management Systems",
      "Website Performance Optimization & Speed Enhancement",
      "Custom Web Applications Tailored to Your Needs"
    ]
  },
  {
    id: 2,
    title: "Application Development",
    category: "App",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1000&auto=format&fit=crop&q=80",
    whyTitle: "Why Application Development Matters",
    whyText: `Applications bring your services closer to users. A powerful app increases engagement, builds loyalty, and allows your business to stay accessible 24/7. 
    Whether you’re targeting customers on iOS, Android, or both, a high-performing app ensures your brand stays one tap away. 
    Businesses also use apps internally to improve workflows, automate tasks, and increase efficiency.`,
    offeringsTitle: "What We Offer",
    offerings: [
      "Native iOS & Android Apps with Stunning UI",
      "Cross-Platform Development (React Native / Flutter)",
      "Enterprise-Grade Custom Business Applications",
      "Cloud Integration & Secure Data Management",
      "API Development & Third-Party Service Integration",
      "Maintenance, Scaling & Feature Enhancements"
    ]
  },
  {
    id: 3,
    title: "AI Integration & Machine Learning",
    category: "AI",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1000&auto=format&fit=crop&q=80",
    whyTitle: "Why AI Integration Matters",
    whyText: `Artificial Intelligence is the future of digital growth. From personalized customer experiences to automation, AI enables businesses to scale faster and operate smarter. 
    Predictive analytics help companies anticipate customer needs, while chatbots reduce support costs. 
    Machine learning solutions give your business the edge in innovation, efficiency, and data-driven decision making.`,
    offeringsTitle: "What We Offer",
    offerings: [
      "AI-Powered Web & Mobile Applications",
      "Chatbots, Voice Assistants & NLP Solutions",
      "Predictive Analytics & Business Forecasting",
      "Recommendation Engines for E-Commerce",
      "Image Recognition & Computer Vision Solutions",
      "Custom Machine Learning Model Development",
      "Process Automation & Intelligent Workflows",
      "Big Data Analysis & AI-Powered Insights"
    ]
  },
];

const categories = ["Web", "App", "AI"];

export const Instructors = () => {
  const [activeCategory, setActiveCategory] = useState("Web");

  const filteredServices = servicesData.filter(
    (item) => item.category === activeCategory
  );

  return (
    <div className="bg-white text-gray-800">
   
      <BottomNav />
      <Header />
      <ServicesList />

      {/* Why Our Services Are Important (Hook) */}
      <div className="px-6 py-16 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <img
            src="https://thaka.bing.com/th/id/OIP.YXloO39l_xjPEb7XdWr7ggHaE8?w=272&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
            alt="Importance"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
          <div className="text-left">
            <h2 className="text-3xl font-bold text-[#7637bd] mb-6">Why Our Services Are Important</h2>
            <p className="text-gray-600 leading-relaxed">
              In today’s competitive digital world, businesses that lack strong online strategies struggle to survive. 
              From building trust with professional websites to developing applications that provide convenience, 
              to integrating AI solutions for automation—every step adds tremendous value. 
              Our services ensure your brand is always one step ahead, helping you attract, engage, and retain customers effectively.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Category Buttons + Core Services Overview */}
      <div className="p-6 text-center">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#7637bd] text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Core Services Overview */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 items-center mb-16"
        >
          <div className="text-left">
            <h2 className="text-3xl font-bold text-[#7637bd] mb-6">Our Core Services</h2>
            <ul className="list-disc pl-5 space-y-3 text-gray-700">
              <li><strong>Web Design & Development</strong> – Stunning, mobile-responsive websites built for conversions.</li>
              <li><strong>Application Development</strong> – High-performing mobile & desktop apps to boost engagement.</li>
              <li><strong>AI Integration & Machine Learning</strong> – Automation, predictive models, and smart solutions.</li>
              <li><strong>Custom Business Solutions</strong> – Tailored software to solve your unique business challenges.</li>
            </ul>
          </div>
          <img
            src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=1000&auto=format&fit=crop&q=80"
            alt="Our Services"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </motion.div> */}
      </div>

      {/* Detailed Services Section */}
      <div className="space-y-24 max-w-6xl mx-auto px-6">
        {filteredServices.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {index % 2 === 0 ? (
              <>
                {/* Text */}
                <div className="text-left">
                  <h2 className="text-3xl font-bold text-[#7637bd] mb-6">{service.whyTitle}</h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">{service.whyText}</p>
                  <h3 className="text-2xl font-semibold text-[#7637bd] mb-4">{service.offeringsTitle}</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {service.offerings.map((offer, idx) => (
                      <li key={idx}>{offer}</li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <img
                  src={service.img}
                  alt={service.title}
                  className="rounded-2xl shadow-xl w-full object-cover hover:scale-[1.02] transition-transform duration-300"
                />
              </>
            ) : (
              <>
                {/* Image */}
                <img
                  src={service.img}
                  alt={service.title}
                  className="rounded-2xl shadow-xl w-full object-cover hover:scale-[1.02] transition-transform duration-300"
                />

                {/* Text */}
                <div className="text-left">
                  <h2 className="text-3xl font-bold text-[#7637bd] mb-6">{service.whyTitle}</h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">{service.whyText}</p>
                  <h3 className="text-2xl font-semibold text-[#03392a] mb-4">{service.offeringsTitle}</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {service.offerings.map((offer, idx) => (
                      <li key={idx}>{offer}</li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>

      {/* Innovation & Growth Section */}
      <div className="px-6 py-16 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1000&auto=format&fit=crop&q=80"
            alt="Innovation"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
          <div className="text-left">
            <h2 className="text-3xl font-bold text-[#7637bd] mb-6">Innovation & Growth</h2>
            <p className="text-gray-600 leading-relaxed">
              Our solutions are built for growth. Whether you’re a startup or an enterprise, 
              we align our strategies with your vision. With future-proof designs, scalable architectures, 
              and AI-driven automation, your business is ready for tomorrow’s challenges. 
              We don’t just deliver projects—we deliver success stories.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Contact Button */}
      <div className="flex justify-center mt-12">
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.08, boxShadow: "0px 0px 20px rgba(64,184,227,0.6)" }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-10 py-3 mb-4 uppercase rounded bg-[#14142b] text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
           Contact Us
        </motion.a>
      </div>

      <ICONS />
      <Footer />
    </div>
  )
}

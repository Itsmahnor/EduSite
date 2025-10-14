import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ICONS = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Check screen size on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1618); // Adjust breakpoint as needed
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 630,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <div className="w-[100vw] h-[30vh] mb-1 md:pt-16 bg-white flex justify-center text-[#098E68]">
      <div className="w-full h-auto flex justify-around flex-wrap gap-10 bg-[#3c3c65] items-center">
        {/* Slider or Grid */}
        <div className="lg:w-[70vw] w-[90vw]">
          {isSmallScreen ? (
            <CategorySlider settings={settings} />
          ) : (
            <CategoryGrid />
          )}
        </div>
      </div>
    </div>
  );
};

const iconClasses =
  "w-[90px] h-[90px] p-2 bg-white bg-opacity-90 rounded-lg shadow-md object-contain mx-auto block";

// Slider Component (for smaller screens)
const CategorySlider = ({ settings }) => (
  <Slider {...settings}>
    {/* Existing Tech Icons */}
    
    <div><img src="https://img.icons8.com/color/96/html-5--v1.png" alt="HTML5" className={iconClasses} /></div>
    <div><img src="https://img.icons8.com/color/96/css3.png" alt="CSS3" className={iconClasses} /></div>

    {/* AI / ML Related Icons */}
    <div><img src="https://img.icons8.com/color/96/artificial-intelligence.png" alt="AI" className={iconClasses} /></div>
    {/* <div><img src="https://img.icons8.com/color/96/machine-learning.png" alt="Machine Learning" className={iconClasses} /></div> */}
    <div><img src="https://img.icons8.com/color/96/chatgpt.png" alt="ChatGPT" className={iconClasses} /></div>
    <div><img src="https://img.icons8.com/color/96/brain.png" alt="Neural Networks" className={iconClasses} /></div>
    <div><img src="https://img.icons8.com/color/96/python.png" alt="Python (AI/ML)" className={iconClasses} /></div>
    <div><img src="https://img.icons8.com/color/96/react-native.png" alt="React" className={iconClasses} /></div>
    <div><img src="https://img.icons8.com/color/96/javascript--v1.png" alt="JavaScript" className={iconClasses} /></div>
    <div><img src="https://img.icons8.com/color/96/nodejs.png" alt="Node.js" className={iconClasses} /></div>
  </Slider>
);

// Grid Component (for larger screens)
const CategoryGrid = () => (
  <div className="grid grid-cols-5 gap-4 animate">
    {/* Tech Icons */}
    
    <img src="https://img.icons8.com/color/96/html-5--v1.png" alt="HTML5" className={iconClasses} />
    <img src="https://img.icons8.com/color/96/css3.png" alt="CSS3" className={iconClasses} />

    {/* AI / ML Icons */}
    <img src="https://img.icons8.com/color/96/artificial-intelligence.png" alt="AI" className={iconClasses} />
   
    <img src="https://img.icons8.com/color/96/chatgpt.png" alt="ChatGPT" className={iconClasses} />
    <img src="https://img.icons8.com/color/96/brain.png" alt="Neural Networks" className={iconClasses} />
    <img src="https://img.icons8.com/color/96/python.png" alt="Python" className={iconClasses} />
    <img src="https://img.icons8.com/color/96/react-native.png" alt="React" className={iconClasses} />
    <img src="https://img.icons8.com/color/96/javascript--v1.png" alt="JavaScript" className={iconClasses} />
    <img src="https://img.icons8.com/color/96/nodejs.png" alt="Node.js" className={iconClasses} />
  </div>
);

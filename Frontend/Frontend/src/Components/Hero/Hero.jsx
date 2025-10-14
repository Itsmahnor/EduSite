import React from "react";
import Slider from "react-slick";
import { FaBookOpen } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import img1 from "../Navbar/Images/gpt.png";
import img2 from "../Navbar/Images/img..jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Vecteezy-style sleek arrows

const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-[#7637bd] hover:bg-[#6a35ff] text-white rounded-full p-2 cursor-pointer z-10"
  >
    <FaArrowRightLong size={14} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-[#7637bd] hover:bg-[#6a35ff] text-white rounded-full p-2 cursor-pointer z-10 rotate-180"
  >
    <FaArrowRightLong size={14} />
  </div>
);





export const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
  // nextArrow: <NextArrow />,
  //   prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative w-full overflow-hidden mt-[0.1rem]">
      <Slider {...settings}>
        {/* ---- Slide 1: Your Original Hero Content ---- */}
        <div className="w-[100vw] mt-[0.1rem] lg:h-[80vh] flex justify-center items-center text-white font-bold text-[1.2rem] py-5 bg-white">
          <div className="w-[100vw] flex justify-around items-center flex-wrap lg:h-[70vh] gap-3">
            <div className="lg:flex-1 flex flex-col items-center justify-center px-3">
              <div className="flex gap-2 mb-3 items-center text-[#7637bd]">
                <FaBookOpen size={24} />
                <span>100% TEACH ONLINE</span>
              </div>

              <h1 className="md:text-[4rem] text-[2rem] font-bold text-[#14142b] text-center">
                Online Platform Education
              </h1>

              <p className="text-gray-600 font-normal text-[0.8rem] md:text-[1rem] md:w-[50vw] mt-3 text-center">
                Join SKILL.PRO and learn from top instructors around the world.
                Live, interactive, and flexible online learning at your
                fingertips.
              </p>

              <div className="p-3 mt-2">
                <div className="flex gap-3 justify-center items-center pt-3 flex-wrap">
                  <Link to="/findprogram" className="md:block">
                    <div className="flex gap-2 justify-center items-center bg-[#7637bd] hover:bg-[#6a35ff] px-4 py-3 md:px-7 md:py-4 rounded-full transition-colors">
                      <span className="text-[1rem] font-medium md:text-[1.2rem] text-white">
                        Find Program
                      </span>
                      <FaArrowRightLong className="text-[1.2rem] text-white pt-1 hidden md:block" />
                    </div>
                  </Link>
                  <Link to="/instructors" className="md:block">
                    <div className="flex gap-2 justify-center items-center bg-[#6a35ff] px-4 py-3 md:px-7 md:py-4 rounded-full transition-colors">
                      <span className="text-[1rem] font-medium md:text-[1.2rem] text-white">
                        Browse Services
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---- Slide 2 ---- */}
        {/* <div>
          <img
            src={img1}
            alt="Hero Slide 1"
            className="w-[100vw] h-[90vh] object-cover  brightness-75"
          />
        </div> */}

        {/* ---- Slide 3 ---- */}
        <div>
          <img
            src={img2}
            alt="Hero Slide 2"
            className="w-full h-[90vh] object-cover brightness-75"
          />
        </div>
      </Slider>
    </div>
  );
};

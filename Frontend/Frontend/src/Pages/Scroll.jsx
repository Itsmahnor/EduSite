// ScrollToTopButton.js
import { useEffect, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      onClick={handleScrollToTop}
      className={`fixed bottom-4 right-4 w-[50px] h-[50px] flex items-center justify-center bg-white text-[#04211e] rounded cursor-pointer ${
        show ? "block" : "hidden"
      }`}
      style={{ zIndex: 50 }}
    >
      <FaArrowUpLong className="w-[30px] h-[30px]" />
    </div>
  );
}

export default ScrollToTopButton;

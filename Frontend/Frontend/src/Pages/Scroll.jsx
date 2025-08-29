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
      className={`fixed bottom-4 right-4 w-[40px] h-[40px] flex items-center justify-center bg-sky-200 text-[#04211e] rounded cursor-pointer ${
        show ? "block" : "hidden"
      }`}
      style={{ zIndex: 50 }}
    >
      <FaArrowUpLong className="w-[20px] h-[20px]" />
    </div>
  );
}

export default ScrollToTopButton;

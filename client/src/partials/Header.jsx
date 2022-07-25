import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {FaTools} from "react-icons/fa"

function Header() {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && "bg-[#2C3333] backdrop-blur-sm shadow-lg"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
              <div className="flex items-center gap-2">
              <FaTools color="#fff" size={25}/>
              <h2 className="font-extrabold text-xl md:text-2xl leading-tighter tracking-tighter ">
                ToolKit
              </h2>
              </div>
              
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

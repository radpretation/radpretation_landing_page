import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="header py-4 md:bg-none">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div className="ml-2">
          <img src="/images/logo.png" alt="Logo" className="logoImg" />
        </div>
        <div
          className={`nav-links duration-500 md:static absolute ${
            isMenuOpen ? "top-[6%]" : "top-[-100%]"
          } md:min-h-fit min-h-[60vh] left-0 md:w-auto w-full flex items-center px-5 xs:bg-white/30 backdrop-blur-md`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 ">
            <li>
              <a className="hover:text-gray-500" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#products">
                Products
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#solutions">
                Solutions
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6 md:hidden">
          {/* Use `name` with string values for Ionicons */}
          <ion-icon
            onClick={toggleMenu}
            name={isMenuOpen ? "close" : "menu"}
            className="text-3xl cursor-pointer text-black"
          ></ion-icon>
        </div>
      </nav>
    </header>
  );
};

export default Header;

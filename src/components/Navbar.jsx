import { RiMenu3Fill } from "react-icons/ri";
import { assets } from "../assets/assets";
import { useState } from "react";

const Navbar = () => {
  const [showMobileMenu, setshowMobileMenu] = useState(false);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container flex justify-between items-center py-6 px-6 lg:px-22 mx-auto bg-transparent">
        <img src={assets.logo} className="w-40 lg:w-50" />
        <ul className="hidden md:flex gap-10 text-white lg:text-lg group">
          <li className="nav-li">
            <a href="#Header" className="nav-li-a">
              Home
            </a>
          </li>
          <li className="nav-li">
            <a href="#About" className="nav-li-a">
              About
            </a>
          </li>
          <li className="nav-li">
            <a href="#Projects" className="nav-li-a">
              Projects
            </a>
          </li>
          <li className="nav-li">
            <a href="#Testimonials" className="nav-li-a">
              Testimonials
            </a>
          </li>
        </ul>

        <button className="hidden md:block gap-2 bg-white pt-[6px] pb-[4px] rounded-xl font-semibold group transition-all duration-300 px-3 text-[15px] lg:text-[18px] lg:px-4">
          <span className="">Sign Up</span>
        </button>

        <RiMenu3Fill
          className="md:hidden text-white cursor-pointer"
          size={30}
          onClick={() => setshowMobileMenu(true)}
        />

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 right-0 bottom-0 w-full bg-white transition-all duration-300 
            ${
              showMobileMenu
                ? "opacity-100 h-screen"
                : "opacity-0 h-0 pointer-events-none"
            }`}
        >
          <div className="flex justify-end pr-8 pt-10 cursor-pointer">
            <img
              src={assets.cross_icon}
              className="w-6"
              onClick={() => setshowMobileMenu(false)}
            />
          </div>
          <ul className="flex flex-col items-center mt-5 gap-3 px-5 text-lg font-bold">
            <a
              href="#Header"
              className="py-2 rounded-full inline-block"
              onClick={() => setshowMobileMenu(false)}
            >
              Home
            </a>
            <a
              href="#Projects"
              className="py-2 rounded-full inline-block"
              onClick={() => setshowMobileMenu(false)}
            >
              Projects
            </a>
            <a
              href="#Testimonials"
              className="py-2 rounded-full inline-block"
              onClick={() => setshowMobileMenu(false)}
            >
              Testimonials
            </a>
            <a
              href="#About"
              className="py-2 rounded-full inline-block"
              onClick={() => setshowMobileMenu(false)}
            >
              About
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

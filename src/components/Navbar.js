import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10 animate-fadeInDown">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <Link to="about" smooth={true} duration={500} className="ml-3 text-xl hover:text-gray-400 transition-colors duration-300">
            Vaishnavi Bharti
          </Link>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="mr-5 relative hover:text-gray-400 transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:bg-gray-400 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
            Past Work
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="mr-5 relative hover:text-gray-400 transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:bg-gray-400 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
            Skills
          </Link>
          <Link
            to="aboutme"
            smooth={true}
            duration={500}
            className="mr-5 relative hover:text-gray-400 transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:bg-gray-400 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
            About Me
          </Link>
        </nav>
        {/* <Link
          to="contact"
          smooth={true}
          duration={500}
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 hover:scale-105 transform transition-all duration-300 ease-in-out rounded text-base mt-4 md:mt-0">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </Link> */}
      </div>
    </header>
  );
}

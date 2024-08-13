import React from 'react';
import { Link } from 'react-scroll';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="bg-[#6366F1] text-white">
      <div className="text-center py-8">
        <h1 className="text-3xl md:text-4xl font-bold">Book Generator API</h1>
      </div>
      <nav className="bg-[#1E293B]">
        <ul className="flex flex-wrap justify-center space-x-4 md:space-x-8 py-4 text-gray-300 font-extrabold text-xl">
          <li className="my-2">
            <Link
              to="overview"
              smooth={true}
              duration={500}
              className="hover:text-[#A5B4FB] cursor-pointer transition-colors duration-300"
            >
              Overview
            </Link>
          </li>
          <li className="my-2">
            <Link
              to="authentication"
              smooth={true}
              duration={500}
              className="hover:text-[#A5B4FB] cursor-pointer transition-colors duration-300"
            >
              Authentication
            </Link>
          </li>
          <li className="my-2">
            <Link
              to="endpoints"
              smooth={true}
              duration={500}
              className="hover:text-[#A5B4FB] cursor-pointer transition-colors duration-300"
            >
              Endpoints
            </Link>
          </li>
          <li className="my-2">
            <Link
              to="tutorial"
              smooth={true}
              duration={500}
              className="hover:text-[#A5B4FB] cursor-pointer transition-colors duration-300"
            >
              Tutorial
            </Link>
          </li>
          <li className="my-2">
            <Link
              to="code-examples"
              smooth={true}
              duration={500}
              className="hover:text-[#A5B4FB] cursor-pointer transition-colors duration-300"
            >
              Code Examples
            </Link>
          </li>
          <li className="my-2">
            <Link
              to="pricing-table"
              smooth={true}
              duration={500}
              className="hover:text-[#A5B4FB] cursor-pointer transition-colors duration-300"
            >
              Pricing
            </Link>
          </li>
          <li className="my-2">
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

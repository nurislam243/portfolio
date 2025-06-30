import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-[#4A148C] text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="home" smooth duration={500} className="text-2xl font-bold cursor-pointer">
          Nur<span className="text-cyan-400">Islam</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth
              duration={500}
              offset={-70}
              className="hover:text-cyan-400 transition-colors cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#4A148C] px-6 pb-4 pt-2 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth
              duration={500}
              offset={-70}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium hover:text-cyan-400 cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;

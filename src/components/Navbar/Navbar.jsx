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
    <header className="fixed bg-base-200 h-[79px] top-0 left-0 w-full z-50 shadow-lg">
      <div className="navbar text-base-content max-w-7xl mx-auto px-4 @min-[400px]:px-6 @min-[500px]:px-7 @min-[600px]:px-9 @min-[900px]:px-10 @min-[1100px]:px-[52px] @min-[1400px]:px-0 py-4 flex justify-between">
        {/* Logo */}
        <Link
          to="home"
          smooth
          duration={500}
          className="normal-case text-3xl font-bold cursor-pointer"
        >
          Nur<span className="text-primary">Islam</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 font-semibold text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth
              duration={500}
              offset={-70}
              className="hover:text-secondary cursor-pointer transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="btn btn-square btn-ghost"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-base-200 text-base-content flex flex-col md:hidden space-y-4 px-6 py-4 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth
              duration={500}
              offset={-70}
              onClick={() => setIsOpen(false)}
              className="text-xl font-semibold hover:text-secondary cursor-pointer transition-colors"
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

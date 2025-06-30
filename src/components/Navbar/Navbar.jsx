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
    <header className="fixed bg-primary h-[79px] top-0 left-0 w-full z-50 shadow-lg">
      <div className="navbar text-primary-content max-w-7xl mx-auto px-4 py-4 flex justify-between">
        {/* Logo */}
        <Link
          to="home"
          smooth
          duration={500}
          className="btn btn-ghost normal-case text-3xl font-bold cursor-pointer"
        >
          Nur<span className="text-secondary">Islam</span>
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
        <div className="bg-primary text-primary-content flex flex-col md:hidden space-y-4 px-6 py-4 shadow-lg">
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

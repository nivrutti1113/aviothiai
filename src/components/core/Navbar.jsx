import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = ({ scrollToSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'platform', label: 'Platform' },
    { id: 'features', label: 'Features' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-pink-500 to-pink-600 py-3 px-4 border-b border-pink-300 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-lg md:text-xl font-bold text-white">
          <span className="text-white">HealthAI</span>.com
        </div>
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        <div className="hidden md:flex space-x-4 lg:space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-white hover:text-pink-100 transition-colors duration-300 text-sm md:text-base"
            >
              {item.label}
            </button>
          ))}
          <Link 
            to="/world-map" 
            className="text-white hover:text-pink-100 transition-colors duration-300 text-sm md:text-base"
          >
            World Map
          </Link>
        </div>
        <Button 
          onClick={() => scrollToSection('contact')}
          className="hidden md:block rounded-full px-4 md:px-6 py-2 text-xs md:text-sm bg-white text-pink-600 hover:bg-pink-50 font-semibold"
        >
          Get Started
        </Button>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 border-t border-pink-200">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className="text-gray-800 hover:text-pink-600 transition-colors duration-300 text-left py-2"
              >
                {item.label}
              </button>
            ))}
            <Link 
              to="/world-map" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-800 hover:text-pink-600 transition-colors duration-300 text-left py-2 block"
            >
              World Map
            </Link>
            
            <Button 
              onClick={() => {
                scrollToSection('contact');
                setIsMobileMenuOpen(false);
              }}
              className="rounded-full px-6 py-2 text-sm bg-pink-600 text-white hover:bg-pink-700 w-full"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
import React, { useState, useEffect } from 'react';
import { Menu, X, Database } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Database className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">NoCodeScraper</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              FAQ
            </a>
            <a
              href="#cta"
              className="px-5 py-2.5 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors font-medium"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute left-0 right-0 top-full shadow-md py-4 px-4 mt-2 transition-all">
            <nav className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#pricing"
                className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#faq"
                className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <a
                href="#cta"
                className="px-5 py-2.5 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors font-medium w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
import React, { useState, useEffect } from 'react';
import Button from './shared/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Games', href: '/games' },
    { name: 'Founders', href: '/founders' },
    { name: 'Consultation', href: '/consultation' },
    { name: 'Contact', href: '/contact' }
  ];
  
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black bg-opacity-95 backdrop-blur-md border-b border-red-600 border-opacity-20' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">🎮</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-wider">
                AUTOBOTZ
              </h1>
              {/* Subtext intentionally removed from Hero; kept hidden here */}
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <Button variant="primary" size="sm">
              Join Team
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <span className="text-2xl">✕</span> : <span className="text-2xl">☰</span>}
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
        {isMenuOpen && (
        <div className="lg:hidden bg-black bg-opacity-98 backdrop-blur-md border-t border-red-600 border-opacity-20">
            <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-300 hover:text-white transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
              </a>
              ))}
            <div className="pt-4">
                <Button variant="primary" className="w-full">
                  Join Team
                </Button>
            </div>
          </div>
        </div>
        )}
    </header>
  );
};

export default Header;
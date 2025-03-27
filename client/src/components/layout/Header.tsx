import { useState, useEffect } from "react";
import { Link } from "wouter";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`bg-white shadow-md sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              <span className="font-['Bebas_Neue'] text-primary text-3xl">HANMA</span>{" "}
              <span className="font-['Montserrat']">FITNESS</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="font-['Montserrat'] font-semibold hover:text-primary transition">Home</a>
            <a href="#services" className="font-['Montserrat'] font-semibold hover:text-primary transition">Services</a>
            <a href="#pricing" className="font-['Montserrat'] font-semibold hover:text-primary transition">Pricing</a>
            <a href="#about" className="font-['Montserrat'] font-semibold hover:text-primary transition">About</a>
            <a href="#testimonials" className="font-['Montserrat'] font-semibold hover:text-primary transition">Testimonials</a>
            <a href="#contact" className="font-['Montserrat'] font-semibold hover:text-primary transition">Contact</a>
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href="#trial" 
              className="bg-primary text-white px-6 py-2 rounded-md font-['Montserrat'] font-bold hover:bg-opacity-90 transition"
            >
              Book Free Trial
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              aria-label="Toggle menu"
              onClick={toggleMobileMenu} 
              className="text-slate-800 focus:outline-none"
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div className={`md:hidden pb-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-3 mt-4">
            <a href="#home" onClick={closeMobileMenu} className="font-['Montserrat'] font-semibold hover:text-primary py-2">Home</a>
            <a href="#services" onClick={closeMobileMenu} className="font-['Montserrat'] font-semibold hover:text-primary py-2">Services</a>
            <a href="#pricing" onClick={closeMobileMenu} className="font-['Montserrat'] font-semibold hover:text-primary py-2">Pricing</a>
            <a href="#about" onClick={closeMobileMenu} className="font-['Montserrat'] font-semibold hover:text-primary py-2">About</a>
            <a href="#testimonials" onClick={closeMobileMenu} className="font-['Montserrat'] font-semibold hover:text-primary py-2">Testimonials</a>
            <a href="#contact" onClick={closeMobileMenu} className="font-['Montserrat'] font-semibold hover:text-primary py-2">Contact</a>
            <a 
              href="#trial" 
              onClick={closeMobileMenu} 
              className="bg-primary text-white px-4 py-2 rounded-md font-['Montserrat'] font-bold text-center"
            >
              Book Free Trial
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

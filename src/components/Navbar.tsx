
import { Button } from "@/components/ui/button";
import { Cross } from 'lucide-react';
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Add scroll effect for transparent to glassy transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 w-full py-4 z-50 transition-all duration-300 ${
      scrolled ? "bg-[#1A1F2C]/90 backdrop-blur-md shadow-md" : "bg-[#1A1F2C]/80"
    }`}>
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img 
              src="/lovable-uploads/aab5084b-90e9-4d1e-ba5f-bde41485cc35.png" 
              alt="Communio" 
              className="h-8" 
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white hover:text-divino-purple transition-colors">
            Home
          </a>
          <a href="#features" className="text-white hover:text-divino-purple transition-colors">
            Features
          </a>
          <a href="#video" className="text-white hover:text-divino-purple transition-colors">
            Demo
          </a>
          <a href="#partner-preview" className="text-white hover:text-divino-purple transition-colors">
            Partner Pages
          </a>
          <a href="#about" className="text-white hover:text-divino-purple transition-colors">
            About Us
          </a>
          <a href="#contact" className="text-white hover:text-divino-purple transition-colors">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            {isMenuOpen ? (
              <Cross className="h-6 w-6" />
            ) : (
              <div className="flex flex-col space-y-1.5">
                <span className="w-6 h-0.5 bg-white"></span>
                <span className="w-6 h-0.5 bg-white"></span>
                <span className="w-6 h-0.5 bg-white"></span>
              </div>
            )}
          </Button>
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Button className="bg-[#1A1F2C] hover:bg-[#1A1F2C]/90 text-white border border-white/20">
            Become a Partner
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#1A1F2C]/95 backdrop-blur-md shadow-lg p-4 md:hidden z-50">
          <div className="flex flex-col space-y-3">
            <a
              href="#"
              className="text-white hover:text-divino-purple py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#features"
              className="text-white hover:text-divino-purple py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#video"
              className="text-white hover:text-divino-purple py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Demo
            </a>
            <a
              href="#partner-preview"
              className="text-white hover:text-divino-purple py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Partner Pages
            </a>
            <a
              href="#about"
              className="text-white hover:text-divino-purple py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="#contact"
              className="text-white hover:text-divino-purple py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Button className="bg-[#1A1F2C] hover:bg-[#1A1F2C]/90 text-white border border-white/20 w-full mt-2">
              Become a Partner
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

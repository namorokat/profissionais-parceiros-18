
import { Button } from "@/components/ui/button";
import { Cross } from 'lucide-react';
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative w-full py-4 border-b border-divino-purple/20">
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-divino-purple font-playfair">Communio</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-600 hover:text-divino-purple transition-colors">
            Home
          </a>
          <a href="#features" className="text-gray-600 hover:text-divino-purple transition-colors">
            Features
          </a>
          <a href="#video" className="text-gray-600 hover:text-divino-purple transition-colors">
            Demo
          </a>
          <a href="#partner-preview" className="text-gray-600 hover:text-divino-purple transition-colors">
            Partner Pages
          </a>
          <a href="#about" className="text-gray-600 hover:text-divino-purple transition-colors">
            About Us
          </a>
          <a href="#contact" className="text-gray-600 hover:text-divino-purple transition-colors">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600"
          >
            {isMenuOpen ? (
              <Cross className="h-6 w-6" />
            ) : (
              <div className="flex flex-col space-y-1.5">
                <span className="w-6 h-0.5 bg-gray-600"></span>
                <span className="w-6 h-0.5 bg-gray-600"></span>
                <span className="w-6 h-0.5 bg-gray-600"></span>
              </div>
            )}
          </Button>
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Button className="bg-divino-purple hover:bg-divino-purple/90 text-white">
            Become a Partner
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg p-4 md:hidden z-50">
          <div className="flex flex-col space-y-3">
            <a
              href="#"
              className="text-gray-600 hover:text-divino-purple py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#features"
              className="text-gray-600 hover:text-divino-purple py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#video"
              className="text-gray-600 hover:text-divino-purple py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Demo
            </a>
            <a
              href="#partner-preview"
              className="text-gray-600 hover:text-divino-purple py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Partner Pages
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-divino-purple py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-divino-purple py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Button className="bg-divino-purple hover:bg-divino-purple/90 text-white w-full mt-2">
              Become a Partner
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

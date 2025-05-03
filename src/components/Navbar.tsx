
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
      scrolled ? "bg-[#362B51]/90 backdrop-blur-md shadow-md" : "bg-[#362B51]/80"
    }`}>
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img 
              src="/lovable-uploads/039af10c-9b6b-4e01-b580-71b4fb75de71.png" 
              alt="CatólicosOnline Partners" 
              className="h-10" 
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white hover:text-divino-purple transition-colors">
            Home
          </a>
          <a href="#features" className="text-white hover:text-divino-purple transition-colors">
            Benefícios
          </a>
          <a href="#video" className="text-white hover:text-divino-purple transition-colors">
            Alcance
          </a>
          <a href="#partner-preview" className="text-white hover:text-divino-purple transition-colors">
            Exemplo
          </a>
          <a href="#about" className="text-white hover:text-divino-purple transition-colors">
            Quem Somos
          </a>
          <a href="#contact" className="text-white hover:text-divino-purple transition-colors">
            Contato
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
          <Button className="bg-[#362B51] hover:bg-[#473B61] text-white border border-white/20">
            Become a Partner
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#362B51]/95 backdrop-blur-md shadow-lg p-4 md:hidden z-50">
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
              Benefícios
            </a>
            <a
              href="#video"
              className="text-white hover:text-divino-purple py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Alcance
            </a>
            <a
              href="#partner-preview"
              className="text-white hover:text-divino-purple py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Exemplo
            </a>
            <a
              href="#about"
              className="text-white hover:text-divino-purple py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Quem Somos
            </a>
            <a
              href="#contact"
              className="text-white hover:text-divino-purple py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </a>
            <Button className="bg-[#362B51] hover:bg-[#473B61] text-white border border-white/20 w-full mt-2">
              Become a Partner
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

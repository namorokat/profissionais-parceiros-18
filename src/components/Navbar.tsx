
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
            <span className="text-2xl font-bold text-divino-purple font-playfair">Divino</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-600 hover:text-divino-purple transition-colors">
            Home
          </a>
          <a href="#products" className="text-gray-600 hover:text-divino-purple transition-colors">
            Produtos
          </a>
          <a href="#about" className="text-gray-600 hover:text-divino-purple transition-colors">
            Sobre
          </a>
          <a href="#testimonials" className="text-gray-600 hover:text-divino-purple transition-colors">
            Depoimentos
          </a>
          <a href="#contact" className="text-gray-600 hover:text-divino-purple transition-colors">
            Contato
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
            Loja Online
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
              href="#products"
              className="text-gray-600 hover:text-divino-purple py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Produtos
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-divino-purple py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </a>
            <a
              href="#testimonials"
              className="text-gray-600 hover:text-divino-purple py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Depoimentos
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-divino-purple py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </a>
            <Button className="bg-divino-purple hover:bg-divino-purple/90 text-white w-full mt-2">
              Loja Online
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

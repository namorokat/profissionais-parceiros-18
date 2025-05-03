
import { Church, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container">
        {/* Hidden footer content - preserved in code but not visible */}
        <div className="hidden">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white font-playfair">Communio</h3>
              </div>
              <p className="text-gray-300 mb-4">
                A mais nova e exclusiva rede social católica.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </div>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </div>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube">
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                      <path d="m10 15 5-3-5-3z"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="col-span-1">
              <h4 className="text-lg font-semibold text-white mb-4">Partners</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Parishes</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Ministries</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Catholic Schools</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Religious Orders</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Catholic Businesses</a></li>
              </ul>
            </div>
            
            <div className="col-span-1">
              <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Partner Guide</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div className="col-span-1">
              <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
              <p className="text-gray-300 mb-4">
                Sign up for updates on our growing community and partnership opportunities.
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-4 py-2 rounded-l-md text-gray-800" 
                />
                <button className="bg-divino-purple hover:bg-divino-purple/90 text-white px-4 py-2 rounded-r-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Visible copyright notice */}
        <div className="flex justify-center items-center">
          <p className="text-gray-400 text-sm">
            Católicos Online - Todos os Direitos Reservados @2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

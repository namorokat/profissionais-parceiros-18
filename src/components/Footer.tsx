
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white font-playfair">Divino</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Artigos religiosos católicos de qualidade para sua jornada de fé.
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
            <h4 className="text-lg font-semibold text-white mb-4">Produtos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terços</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Imagens</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Bíblias</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Crucifixos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Medalhas</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Informações</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contato</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Termos de Serviço</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Inscreva-se para receber nossas novidades e promoções.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="flex-1 px-4 py-2 rounded-l-md text-gray-800" 
              />
              <button className="bg-divino-purple hover:bg-divino-purple/90 text-white px-4 py-2 rounded-r-md">
                Enviar
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 Divino. Todos os direitos reservados.
          </p>
          <p className="text-gray-400 text-sm flex items-center mt-2 md:mt-0">
            Feito com <Heart className="mx-1 h-4 w-4 text-divino-purple" /> por Lovable
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { Button } from "@/components/ui/button";
import { FileImage, Heart, MessageSquare, Users, Church, FileText, Medal, Share, ExternalLink } from "lucide-react";

const PartnerPreview = () => {
  const whatsappLink = "http://wa.me/5501152866640";
  
  return <section id="partner-preview" className="py-16 md:py-24 bg-divino-light/30 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-divino-purple blur-3xl"></div>
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-divino-gold blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 bg-divino-purple/10 text-divino-purple rounded-full px-4 py-1 text-sm font-medium mb-4 mx-auto w-fit">
            <FileImage size={14} />
            <span>Preview da Página de Parceiros</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-playfair">
            Sua <span className="text-divino-purple">Presença</span> na Católicos Online
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">Veja abaixo uma Página Profissional de exemplo na versão desktop.</p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-divino-purple/5 rounded-3xl transform rotate-1 scale-105"></div>
          
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            {/* Partner Page Header - Full mockup image */}
            <img src="/lovable-uploads/5373a6ce-ff12-4f02-b807-596dab273d2a.png" alt="Dr. Franchesco Lisboa Partner Page" className="w-full h-auto object-contain" />
            
            {/* Additional context about the page preview */}
            <div className="p-6">
              <div className="bg-gray-50 rounded-lg p-5 mb-4">
                <h3 className="font-medium text-gray-800 mb-3 text-xl">Benefícios de sua Página</h3>
                <ul className="space-y-3 text-gray-600 text-base">
                  <li className="flex items-center">
                    <div className="h-7 w-7 rounded-full bg-divino-purple/10 text-divino-purple flex items-center justify-center mr-3">
                      <Share size={16} />
                    </div>
                    Direcione o público para seus canais de contato 
                  </li>
                  <li className="flex items-center">
                    <div className="h-7 w-7 rounded-full bg-divino-purple/10 text-divino-purple flex items-center justify-center mr-3">
                      <FileText size={16} />
                    </div>
                    Destaque-se em um grupo seleto de parceiros  
                  </li>                  
                  <li className="flex items-center">                    
                    <div className="h-7 w-7 rounded-full bg-divino-purple/10 text-divino-purple flex items-center justify-center mr-3">
                      <Users size={16} />
                    </div>
                    Tenha um fluxo recorrente de católicos
                  </li>
                  <li className="flex items-center">
                    <div className="h-7 w-7 rounded-full bg-divino-purple/10 text-divino-purple flex items-center justify-center mr-3">
                      <Medal size={16} />
                    </div>
                    Nós fazemos o trabalho de posicionamento digital
                  </li>                  
                </ul>
              </div>
              
              <div className="text-sm text-gray-500 italic">
                <p> Este é apenas um exemplo de página e que pode ser visto no site como demonstração.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            className="bg-divino-gold hover:bg-divino-gold/90 text-white px-6 py-6 text-lg static items-center gap-2"
            onClick={() => window.open(whatsappLink, '_blank')}
          >
            Converse com a gente
            <ExternalLink size={16} />
          </Button>
        </div>
      </div>
    </section>;
};

export default PartnerPreview;

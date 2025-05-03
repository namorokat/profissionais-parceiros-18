
import React from 'react';
import PartnerTextCarousel from './PartnerTextCarousel';

const UrgencySection = () => {
  // List of Catholic partner organizations
  const partners = [
    "São Bento",
    "Santa Clara",
    "Sagrada Família",
    "Dom Bosco",
    "Ave Maria",
    "Nossa Senhora",
    "Divina Providência",
    "Cruz Sagrada",
    "Santo Anjo"
  ];

  return (
    <div className="w-full py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100">
            <PartnerTextCarousel partners={partners} interval={2500} />
          </div>
          
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary font-serif">
              Limite de <span className="text-purple-400">30 Parceiros</span>.
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
              Garanta seu lugar.
            </h3>
            
            <p className="text-lg mb-8 text-gray-700">
              Cada parceiro recebe uma proposta específica, pois cada qual tem um perfil diferente com potencial diferente. 
              Para receber uma proposta, você deve fazer contato o quanto antes, dado o limite no número de parceiros.
            </p>
            
            <div className="flex items-center mb-10">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mr-4">
                <span className="text-3xl font-bold text-purple-500">30</span>
              </div>
              <span className="text-xl font-medium text-gray-700">Parceiros Total</span>
            </div>
            
            <a
              href="#contact"
              className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Garanta sua Vaga Agora
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrgencySection;

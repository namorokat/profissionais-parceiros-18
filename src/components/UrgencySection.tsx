
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
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary font-serif">
            Nossos parceiros já estão conectados
          </h2>
          
          <div className="mb-8">
            <p className="text-lg md:text-xl mb-6 text-gray-700">
              Junte-se a uma rede crescente de parceiros católicos:
            </p>
            
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100">
              <p className="text-xl md:text-2xl mb-2 font-medium text-gray-800">
                <span className="font-normal text-gray-600">Parceiro</span>
              </p>
              
              <PartnerTextCarousel partners={partners} interval={2500} />
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-700 italic">
            "Conectando comunidades de fé através da tecnologia"
          </p>
          
          <div className="mt-10">
            <a
              href="#contact"
              className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Torne-se um parceiro
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrgencySection;

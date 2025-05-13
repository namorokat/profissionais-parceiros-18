
import React from 'react';
import PartnerTextCarousel from './PartnerTextCarousel';

const UrgencySection = () => {
  // List of Catholic partner organizations
  const partners = [
    "Psicólogos",
    "Advogados",
    "Nutricionistas",
    "Pediatras",
    "Ginecologistas",
    "Fonoaudiológos",
    "Contadores",
    "Terapeutas",
    "Psiquiatras"
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
              Limite de <span className="text-purple-400">20 Parceiros</span>.
            </h2>    
            
            <p className="text-lg mb-6 text-gray-700">
              São milhares de profissionais católicos pelo Brasil, mas não queremos ser um diretório com milhares de 
              profissionais que não terão retorno exceto se pagarem alto para aparecer com propagandas.              
            </p>
            
            <p className="text-lg mb-8 text-gray-700">
             Os membros da rede saberão que temos parceiros católicos, que não tem medo de mostrar e defender a 
              fé católica através de suas profissões. Temos a certeza de que darão preferência a você.
            </p>
            
            <div className="flex items-center mb-10">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mr-4">
                <span className="text-3xl font-bold text-purple-500">20</span>
              </div>
              <span className="text-xl font-medium text-gray-700">Parceiros por Categoria </span>
            </div>                     
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrgencySection;

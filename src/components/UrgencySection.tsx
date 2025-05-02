
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

// Sample list of partner names for the animation
const partnerNames = [
  "Divino Amor", "Santa María", "São Bento", "Terço Especial",
  "Sagrada Família", "Mãe Rainha", "Cruz Sagrada", "Santo Anjo",
  "Ave Maria", "Dom Bosco", "Manto Sagrado", "Santa Clara",
  "Santa Rita", "São José", "São Francisco", "Santa Terezinha",
  "Nossa Senhora", "Santíssimo", "São Miguel", "Divina Providência"
];

const UrgencySection = () => {
  // Create multiple columns of names with different animation speeds
  const [visiblePartners, setVisiblePartners] = useState<{ name: string; id: number; offset: number }[]>([]);
  
  useEffect(() => {
    // Initialize with some partners
    const initialPartners = [];
    for (let i = 0; i < 10; i++) {
      initialPartners.push({
        name: partnerNames[Math.floor(Math.random() * partnerNames.length)],
        id: i,
        offset: Math.random() * 100 // Random vertical offset for staggered effect
      });
    }
    setVisiblePartners(initialPartners);
    
    // Continuously add new partners and remove old ones
    const interval = setInterval(() => {
      setVisiblePartners(prev => {
        // Remove one partner from the top
        const filtered = prev.filter((_, index) => index !== 0);
        
        // Add a new partner at the bottom
        return [...filtered, {
          name: partnerNames[Math.floor(Math.random() * partnerNames.length)],
          id: Date.now(), // unique id
          offset: 0 // start at the bottom
        }];
      });
    }, 2000); // Add new partner every 2 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-divino-gold blur-3xl"></div>
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-divino-purple blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left column - Animated partner list */}
          <div className="w-full md:w-1/2 h-[450px] relative overflow-hidden rounded-lg bg-gradient-to-b from-divino-purple/5 to-divino-gold/5 border border-divino-cream">
            {/* Top fade effect */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent z-10"></div>
            
            {/* Bottom fade effect */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
            
            {/* Partner names container */}
            <div className="relative h-full px-8 py-10">
              {visiblePartners.map((partner) => (
                <div 
                  key={partner.id}
                  className="absolute w-full left-0 px-8 flex"
                  style={{
                    top: `${partner.offset}%`,
                    transform: 'translateY(-50%)',
                    animation: 'partner-rise 20s linear forwards',
                    opacity: partner.offset > 80 ? (100 - partner.offset) * 0.05 : partner.offset < 20 ? partner.offset * 0.05 : 1
                  }}
                >
                  <div className="border-l-4 border-divino-purple pl-4 py-2">
                    <p className="text-xl font-medium text-gray-800">{partner.name}</p>
                    <p className="text-sm text-gray-500">Parceiro Confirmado</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right column - Text content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-playfair leading-tight">
              Limite de <span className="text-divino-purple">30 Parceiros</span>.<br />
              Reserve o seu.
            </h2>
            
            <p className="text-lg text-gray-600">
              São milhares de lojas, mas só iremos trabalhar com 30 parceiros. Novos parceiros dependerão 
              de demanda x oferta e ainda assim não será fácil entrar, pois o nosso conceito é de 
              qualidade e não quantidade. Queremos obter resultados para os nossos parceiros e, para isso, 
              é essencial que tenhamos um limite e assim poder acompanhar cada parceiro em seus resultados.
            </p>
            
            <div className="flex items-center space-x-4 pt-4">
              <div className="w-16 h-16 rounded-full bg-divino-purple/10 flex items-center justify-center text-divino-purple">
                <span className="text-2xl font-bold">30</span>
              </div>
              <p className="text-gray-700 font-medium">Parceiros Total</p>
            </div>
            
            <Button 
              className="bg-divino-gold hover:bg-divino-gold/90 text-white px-6 py-6 text-lg mt-4"
              onClick={() => window.open('https://cal.duobro.com.br/joneslauriano', '_blank')}
            >
              Garanta sua Vaga Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;

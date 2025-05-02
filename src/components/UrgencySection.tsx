
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

// Sample list of partner names for the word cloud
const partnerNames = [
  "Divino Amor", "Santa María", "São Bento", "Terço Especial",
  "Sagrada Família", "Mãe Rainha", "Cruz Sagrada", "Santo Anjo",
  "Ave Maria", "Dom Bosco", "Manto Sagrado", "Santa Clara",
  "Santa Rita", "São José", "São Francisco", "Santa Terezinha",
  "Nossa Senhora", "Santíssimo", "São Miguel", "Divina Providência"
];

interface WordCloudItem {
  name: string;
  id: number;
  opacity: number;
  size: number;
  position: {
    x: number;
    y: number;
  };
}

const UrgencySection = () => {
  const [wordCloudItems, setWordCloudItems] = useState<WordCloudItem[]>([]);
  
  useEffect(() => {
    // Initialize word cloud with initial items
    const initialItems: WordCloudItem[] = [];
    for (let i = 0; i < 15; i++) {
      initialItems.push(createRandomWordCloudItem());
    }
    setWordCloudItems(initialItems);
    
    // Animation loop for fading words in and out - now 4x faster (250ms instead of 1000ms)
    const interval = setInterval(() => {
      setWordCloudItems(prev => {
        // Update existing items (fade in/out)
        const updatedItems = prev.map(item => {
          // Randomly adjust opacity to create fade effect - increased change amount for faster effect
          const opacityChange = Math.random() * 0.4 * (Math.random() > 0.5 ? 1 : -1);
          const newOpacity = Math.max(0.1, Math.min(1, item.opacity + opacityChange));
          
          return {
            ...item,
            opacity: newOpacity
          };
        });
        
        // Occasionally replace items that have low opacity - increased probability for faster turnover
        const finalItems = updatedItems.map(item => {
          if (item.opacity < 0.2 && Math.random() > 0.4) {
            return createRandomWordCloudItem();
          }
          return item;
        });
        
        return finalItems;
      });
    }, 250); // Update every 250ms (4x faster than before)
    
    return () => clearInterval(interval);
  }, []);
  
  // Helper function to create a random word cloud item with better distribution
  const createRandomWordCloudItem = (): WordCloudItem => {
    // Better distribution - wider spread of positions (5-95% instead of 10-90%)
    return {
      name: partnerNames[Math.floor(Math.random() * partnerNames.length)],
      id: Math.random() * 10000,
      opacity: Math.random() * 0.5 + 0.3, // Start with opacity between 0.3-0.8
      size: Math.random() * 1.5 + 0.8, // Random size multiplier between 0.8-2.3
      position: {
        x: Math.random() * 90 + 5, // Position between 5-95% of container width
        y: Math.random() * 90 + 5  // Position between 5-95% of container height
      }
    };
  };

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-divino-gold blur-3xl"></div>
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-divino-purple blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left column - Word cloud */}
          <div className="w-full md:w-1/2 h-[450px] relative overflow-hidden rounded-lg bg-gradient-to-b from-divino-purple/5 to-divino-gold/5 border border-divino-cream">
            {/* Word cloud container */}
            <div className="relative w-full h-full">
              {wordCloudItems.map((item) => (
                <div 
                  key={item.id}
                  className="absolute transform transition-opacity duration-250 ease-in-out"
                  style={{
                    left: `${item.position.x}%`,
                    top: `${item.position.y}%`,
                    opacity: item.opacity,
                    transform: `translate(-50%, -50%) scale(${item.size})`,
                    zIndex: Math.floor(item.opacity * 10), // Add z-index based on opacity
                    transition: "opacity 250ms ease-in-out, transform 250ms ease-in-out" // 4x faster transitions
                  }}
                >
                  <div className="whitespace-nowrap">
                    <p className="text-xl font-medium text-divino-purple">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-500 text-center">Parceiro</p>
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

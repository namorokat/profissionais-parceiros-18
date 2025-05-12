
import React, { useEffect, useState } from 'react';
import { CSSProperties } from 'react';

interface PartnerTextCarouselProps {
  partners: string[];
  interval?: number;
}

const PartnerTextCarousel: React.FC<PartnerTextCarouselProps> = ({
  partners,
  interval = 2000,
}) => {
  const [activePartners, setActivePartners] = useState<{ [key: string]: boolean }>({});
  
  useEffect(() => {
    // Initialize with a few random partners visible
    const initialActive: { [key: string]: boolean } = {};
    const shuffled = [...partners].sort(() => 0.5 - Math.random());
    shuffled.slice(0, 5).forEach(partner => {
      initialActive[partner] = true;
    });
    setActivePartners(initialActive);

    // Set up interval to continuously update active partners
    const timer = setInterval(() => {
      setActivePartners(prev => {
        const newState = { ...prev };
        
        // Randomly toggle visibility of 1-3 partners
        const numToToggle = Math.floor(Math.random() * 3) + 1;
        const randomPartners = [...partners].sort(() => 0.5 - Math.random()).slice(0, numToToggle);
        
        randomPartners.forEach(partner => {
          newState[partner] = !newState[partner];
        });
        
        return newState;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [partners, interval]);

  // Calculate position and styling for each partner
  const getPartnerStyle = (partner: string, index: number): CSSProperties => {
    // Use index to determine base position in the cloud
    const baseX = (index % 3) * 33 + Math.random() * 10;
    const baseY = Math.floor(index / 3) * 30 + Math.random() * 10;
    
    // Vary font size
    const fontSize = Math.floor(Math.random() * 18) + 16; // 16px to 34px
    
    // Determine if this partner is currently active
    const isActive = activePartners[partner] || false;
    
    return {
      left: `${baseX}%`,
      top: `${baseY}%`,
      fontSize: `${fontSize}px`,
      opacity: isActive ? 1 : 0.3,
      transform: isActive ? 'scale(1.1)' : 'scale(1)',
      position: 'absolute' as const, // Type assertion to fix the Position type error
      transition: 'all 0.5s ease-in-out'
    };
  };

  return (
    <div className="relative w-full h-72 overflow-hidden">
      {partners.map((partner, index) => (
        <div
          key={partner}
          style={getPartnerStyle(partner, index)}
          className="text-primary font-medium transition-all duration-500"
        >
          <span className="block">{partner}</span>
          <span className="text-sm text-gray-500 block">Católicos</span>
        </div>
      ))}
    </div>
  );
};

export default PartnerTextCarousel;

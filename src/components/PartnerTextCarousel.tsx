
import React, { useEffect, useState } from 'react';

interface PartnerTextCarouselProps {
  partners: string[];
  interval?: number;
}

const PartnerTextCarousel: React.FC<PartnerTextCarouselProps> = ({
  partners,
  interval = 2000,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex((current) => (current + 1) % partners.length);
        setIsTransitioning(false);
      }, 500); // Half of the fade time for smooth transition
    }, interval);

    return () => clearInterval(timer);
  }, [partners, interval]);

  return (
    <div className="relative h-20 flex items-center justify-center overflow-hidden">
      {partners.map((partner, index) => (
        <div
          key={partner}
          className={`absolute transition-all duration-1000 transform ${
            index === activeIndex
              ? 'opacity-100 translate-y-0 scale-110'
              : 'opacity-0 translate-y-8 scale-95'
          }`}
        >
          <span className="text-3xl md:text-4xl font-semibold text-primary italic">
            {partner}
          </span>
        </div>
      ))}
    </div>
  );
};

export default PartnerTextCarousel;

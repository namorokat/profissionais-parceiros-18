
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

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % partners.length);
    }, interval);

    return () => clearInterval(timer);
  }, [partners, interval]);

  return (
    <div className="relative h-24 flex items-center justify-center overflow-hidden">
      {partners.map((partner, index) => (
        <div
          key={partner}
          className={`absolute transition-all duration-500 transform ${
            index === activeIndex
              ? 'opacity-100 translate-y-0 scale-110'
              : 'opacity-0 translate-y-8 scale-95'
          }`}
          aria-hidden={index !== activeIndex}
        >
          <span className="text-3xl md:text-4xl font-semibold text-primary italic block text-center">
            {partner}
          </span>
        </div>
      ))}
    </div>
  );
};

export default PartnerTextCarousel;

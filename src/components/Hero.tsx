
import { Button } from "@/components/ui/button";
import { Church, Users, Smartphone, ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile();
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const phoneScreens = [
    "/lovable-uploads/9f9de93f-86cd-4ce1-99b3-fb4fc710abcf.png",
    "/lovable-uploads/7ea68811-8a2b-4853-9808-720f0a292728.png",
    "/lovable-uploads/8938df0c-6439-42c3-8d0e-3e2326b61ea8.png"
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-divino-cream to-white py-16 md:py-24">
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-divino-purple blur-3xl"></div>
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-divino-gold blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 space-y-6 text-center md:text-left pt-8 md:pt-0">
            <div className="mb-6 inline-block">
              <div className="flex items-center space-x-2 bg-divino-purple/10 text-divino-purple rounded-full px-4 py-1 text-sm font-medium mb-4">
                <Church size={14} />
                <span>Catholic Social Network Platform</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight font-playfair">
              Conecte a <span className="text-divino-purple">Divino Amor</span> a um fluxo católico e constante.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg">
              A Católicos Online é a mais nova (e única) rede social para católicos. Este é o momento certo para somar com a gente e dar um salto na sua posição digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 items-center justify-center md:justify-start">
              <Button className="bg-divino-purple hover:bg-divino-purple/90 text-white px-6 py-6 text-lg">
                Become a Partner
              </Button>
              <Button variant="outline" className="border-divino-purple text-divino-purple hover:bg-divino-purple/10 px-6 py-6 text-lg">
                Watch Demo
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              {/* Phone frame container */}
              <div className="relative mx-auto" style={{ maxWidth: "280px" }}>
                {/* Phone frame */}
                <div className="relative z-20 bg-gray-900 rounded-[40px] p-2 shadow-xl border-4 border-gray-800">
                  {/* Status bar */}
                  <div className="bg-gray-800 rounded-t-3xl pt-2 pb-1 px-4 flex justify-between items-center">
                    <div className="text-white text-xs">21:25</div>
                    <div className="flex items-center space-x-1">
                      <div className="text-white text-xs">42%</div>
                      <Smartphone size={12} className="text-white" />
                    </div>
                  </div>
                  
                  {/* Phone screen with carousel */}
                  <div className="relative overflow-hidden rounded-b-3xl bg-white">
                    <div className="relative w-full" style={{ aspectRatio: "9/19" }}>
                      <Carousel 
                        className="w-full h-full"
                        setApi={(api) => {
                          api?.on('select', () => {
                            // Update the current slide when the carousel changes
                            const selectedIndex = api.selectedScrollSnap();
                            setCurrentSlide(selectedIndex);
                          });
                        }}
                        opts={{
                          align: 'start',
                          loop: true,
                        }}
                      >
                        <CarouselContent>
                          {phoneScreens.map((screen, index) => (
                            <CarouselItem key={index} className="w-full h-full">
                              <img 
                                src={screen}
                                alt={`App screen ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-4 flex space-x-2 z-30">
                          {phoneScreens.map((_, index) => (
                            <div
                              key={index}
                              className={`h-1.5 rounded-full transition-all duration-300 ${
                                currentSlide === index ? "w-4 bg-divino-purple" : "w-1.5 bg-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </Carousel>
                    </div>
                  </div>
                  
                  {/* Home button */}
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-gray-500 rounded-full" />
                </div>
                
                {/* Glow effect under the phone */}
                <div className="absolute inset-0 -m-6 rounded-full bg-divino-purple/20 blur-xl -z-10"></div>
              </div>
              
              {/* Stats box */}
              <div className="absolute -bottom-5 -right-5 md:-right-10 bg-white rounded-lg shadow-lg p-4 z-30">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center gap-1">
                    <Users size={16} className="text-divino-purple" />
                    <span className="text-divino-purple font-medium">50K+</span>
                  </div>
                  <span className="font-medium text-gray-800">Active Members</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Growing faith community</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

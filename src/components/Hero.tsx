
import { Button } from "@/components/ui/button";
import { Church, Users, Smartphone, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
const Hero = () => {
  // We don't need carousel and auto-slide functionality anymore since we're showing a single image
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = useIsMobile();
  const whatsappLink = "http://wa.me/5501152866640";
  return <section className="relative overflow-hidden bg-gradient-to-br from-divino-cream to-white py-8 md:py-24">
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-divino-purple blur-3xl"></div>
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-divino-gold blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="w-full md:w-1/2 space-y-3 md:space-y-6 text-left pt-4 md:pt-0">
            <div className="mb-2 md:mb-6 inline-block">
              <div className="flex items-center space-x-2 bg-divino-purple/10 text-divino-purple rounded-full px-4 py-1 text-sm font-medium mb-2 md:mb-4">
                <Church size={14} />
                <span className=""> A rede Católicos Online é dedicada a Nossa Senhora de Fátima! Salve a Rainha! </span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight font-playfair mx-auto md:mx-0 text-left w-[105%] md:w-full">
              Conecte o seu <span className="text-divino-purple">Negócio</span> a um fluxo católico e constante.
            </h1>
            
            {/* Mobile Phone Mockup - only visible on mobile */}
            {isMobile && <div className="mx-auto max-w-[250px] my-4">
                <div className="relative">
                  {/* Phone frame container */}
                  <div className="relative mx-auto">
                    {/* Phone frame */}
                    <div className="relative z-20 bg-gray-900 rounded-[30px] p-2 shadow-xl border-4 border-gray-800">
                      {/* Status bar */}
                      <div className="bg-gray-800 rounded-t-2xl pt-1 pb-1 px-3 flex justify-between items-center">
                        <div className="text-white text-xs">21:25</div>
                        <div className="flex items-center space-x-1">
                          <div className="text-white text-xs">42%</div>
                          <Smartphone size={10} className="text-white" />
                        </div>
                      </div>
                      
                      {/* Phone screen with uploaded image - changed to new image and full length */}
                      <div className="relative overflow-hidden rounded-b-2xl bg-white">
                        <div className="relative w-full" style={{
                      aspectRatio: "9/19"
                    }}>
                          <img src="/lovable-uploads/fb0eb305-a6dd-4deb-abd2-ae1c3fe1eabf.png" alt="Católicos Online profile example" className="w-full h-full object-cover" />
                        </div>
                      </div>
                      
                      {/* Home button */}
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gray-500 rounded-full" />
                    </div>
                    
                    {/* Glow effect under the phone */}
                    <div className="absolute inset-0 -m-6 rounded-full bg-divino-purple/20 blur-xl -z-10"></div>
                  </div>
                </div>
              </div>}
            
            <p className="text-lg md:text-xl text-gray-600 max-w-lg text-left">A Católicos Online é a mais nova — e única — rede social feita para católicos, com um hub exclusivo para promover profissionais que vivem a fé. Garanta sua adesão e aproveite os benefícios de ser um dos seletos parceiros da rede.</p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2 md:pt-4 items-center justify-center md:justify-start">
              <Button className="bg-divino-purple hover:bg-divino-purple/90 text-white px-6 py-6 text-lg flex items-center gap-1" onClick={() => window.open(whatsappLink, '_blank')}>
                Garanta seu Lugar
                <ExternalLink size={16} />
              </Button>
              <Button variant="outline" className="border-divino-purple text-divino-purple hover:bg-divino-purple/10 px-6 py-6 text-lg" onClick={() => window.open('https://catolicos.online/pages/DrFranchesco', '_blank')}>
                Veja uma página-exemplo <ExternalLink size={16} className="ml-1" />
              </Button>
            </div>
          </div>
          
          {/* Phone mockups - only show on md screens and above */}
          <div className="hidden md:flex md:w-1/2 justify-center md:justify-end">
            <div className="relative flex items-center space-x-6">
              {/* First phone mockup (new) - adjusted rotation and size */}
              <div className="relative" style={{
              transform: "rotate(-10deg)"
            }}>
                {/* Phone frame container */}
                <div className="relative mx-auto" style={{
                maxWidth: "210px"
              }}>
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
                    
                    {/* Phone screen with the new image */}
                    <div className="relative overflow-hidden rounded-b-3xl bg-white">
                      <div className="relative w-full" style={{
                      aspectRatio: "9/19"
                    }}>
                        <img src="/lovable-uploads/e2da7918-7792-416c-89a2-f6dc7282e053.png" alt="Católicos Online app profile" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    
                    {/* Home button */}
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-gray-500 rounded-full" />
                  </div>
                  
                  {/* Glow effect under the phone */}
                  <div className="absolute inset-0 -m-6 rounded-full bg-divino-gold/20 blur-xl -z-10"></div>
                </div>

                {/* Stats box - moved to the left corner of the first phone and adjusted position */}
                <div className="absolute -bottom-12 -left-5 bg-white rounded-lg shadow-lg p-4 z-30">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center gap-1">
                      <Users size={16} className="text-divino-purple" />
                      <span className="text-divino-purple font-medium">Membros recorrentes</span>
                    </div>                    
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Fortaleça a sua marca!</p>
                </div>
              </div>
              
              {/* Second phone mockup (original) */}
              <div className="relative">
                {/* Phone frame container */}
                <div className="relative mx-auto" style={{
                maxWidth: "280px"
              }}>
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
                    
                    {/* Phone screen with the new image */}
                    <div className="relative overflow-hidden rounded-b-3xl bg-white">
                      <div className="relative w-full" style={{
                      aspectRatio: "9/19"
                    }}>
                        <img src="/lovable-uploads/6eba3824-b559-4f2a-9a18-09b5fd4f7dfd.png" alt="Católicos Online app interface" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    
                    {/* Home button */}
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-gray-500 rounded-full" />
                  </div>
                  
                  {/* Glow effect under the phone */}
                  <div className="absolute inset-0 -m-6 rounded-full bg-divino-purple/20 blur-xl -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;


import { Button } from "@/components/ui/button";
import { Video } from "lucide-react";

const VideoSection = () => {
  return (
    <section id="video" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-2 bg-divino-purple/10 text-divino-purple rounded-full px-4 py-1 text-sm font-medium mb-4 w-fit">
              <Video size={14} />
              <span>Posicionamento no Google</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-playfair">
              Você sabe quantas pessoas buscam por <span className="text-divino-purple">Imagem da Sagrada Família</span> no Google todos os meses?
            </h2>
            
            <p className="text-lg text-gray-600">
              Provavelmente, você não sabe, pois não é sua área de atuação. Mas, é a nossa. 33 mil buscas é o volume mensal. Mas, isso é só um termo. Temos milhares para trabalhar para atrair um maior fluxo de pessoas através do posicionamento no Google. E, claro, como fazer isso é a outra parte que cabe a nós. Quer um exemplo? Digite "Namoro Católico" no Google. O primeiro resultado é fruto do nosso trabalho.
            </p>
            
            <div className="pt-4">
              <Button className="bg-divino-purple hover:bg-divino-purple/90 text-white px-6 py-2">
                Garanta um dos 30 lugares
              </Button>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video">
            {/* This would typically be a real embedded video */}
            <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
              <Button className="rounded-full h-16 w-16 flex items-center justify-center bg-white/20 backdrop-blur-sm hover:bg-white/30 border-2 border-white">
                <Video className="h-8 w-8 text-white" />
              </Button>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80"
              alt="Sagrada Família - Jesus, Maria e José" 
              className="w-full h-full object-cover opacity-60"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

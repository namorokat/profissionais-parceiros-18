import { Button } from "@/components/ui/button";
import { Video } from "lucide-react";
const VideoSection = () => {
  return <section id="video" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-2 bg-divino-purple/10 text-divino-purple rounded-full px-4 py-1 text-sm font-medium mb-4 w-fit">
              <Video size={14} />
              <span>Posicionamento no Google</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-playfair">
              Deixe a captação de <span className="text-divino-purple"> Fluxo</span> com a gente!
            </h2>
            
            <p className="text-lg text-gray-600">
              Digite "Namoro Católico" no Google. O primeiro resultado é fruto do trabalho de nossa agência. O mesmo estamos fazendo pela Católicos Online,
              onde mapeamos centenas (senão milhares) de palavras-foco para ranquear no topo do Google e atrair as pessoas certas. Mesmo que este trabalho precise de tempo,
              nós já temos o fluxo imediato e diário do Namoro Católico, que já filtra e carrega a autoridade do nome e domínio.
            </p>
            
            <div className="pt-4">
              <Button className="bg-divino-purple hover:bg-divino-purple/90 text-white px-6 py-2">
                Garanta um dos 30 lugares
              </Button>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video">
            {/* Using the new Holy Family image */}
            <div className="absolute inset-0 flex items-center justify-center bg-[#332004]">
              <Button className="rounded-full h-16 w-16 flex items-center justify-center bg-white/20 backdrop-blur-sm hover:bg-white/30 border-2 border-white">
                <Video className="h-8 w-8 text-white" />
              </Button>
            </div>
            <img alt="Sagrada Família - Jesus, Maria e José" className="w-full h-full object-contain opacity-80" src="/lovable-uploads/26bf7da0-2465-4e38-bf16-fda1bcf00f68.png" />
          </div>
        </div>
      </div>
    </section>;
};
export default VideoSection;
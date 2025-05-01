
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
              <span>See Communio in Action</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-playfair">
              Você sabe quantas pessoas buscam por <span className="text-divino-purple">Imagem da Sagrada Família</span> no Google todos os meses?
            </h2>
            
            <p className="text-lg text-gray-600">
              Our platform helps Catholic organizations create meaningful connections, share faith-based content, and build vibrant communities online. See how our partners are using Communio to enhance their ministries.
            </p>
            
            <div className="pt-4">
              <Button className="bg-divino-purple hover:bg-divino-purple/90 text-white px-6 py-2">
                Schedule a Personalized Demo
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
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80"
              alt="Communio platform demonstration" 
              className="w-full h-full object-cover opacity-60"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;


import { Button } from "@/components/ui/button";
import { Info, Rocket } from "lucide-react";

const AboutSection = () => {
  return <section id="about" className="py-16 md:py-24 overflow-hidden">
      <div className="container">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 bg-divino-purple/10 text-divino-purple rounded-full px-4 py-1 text-sm font-medium mb-4 mx-auto w-fit">
            <Info size={14} />
            <span>Quem Somos</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-playfair">
            Os <span className="text-divino-purple">Fundadores</span> da Católicos Online
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-left">
            Com quase de 20 anos de experiência no setor de tecnologia, os irmãos e sócios Jones e Jener alcançaram o ponto alto de suas trajetórias com o lançamento da Duobro, 
            empresa pela qual desenvolveram aplicações que movimentaram mais de 250 milhões de reais nos últimos anos. 
            Movidos pelo amor às coisas de Deus, agora se dedicam a um novo desafio: criar um projeto inovador voltado para o e-commerce católico.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* First Founder */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/5 relative">
              <div className="absolute inset-0 -m-4 rounded-full bg-divino-purple/20 blur-xl transform -translate-x-4"></div>
              <img alt="Jones Lauriano" className="relative rounded-2xl shadow-lg object-cover aspect-square w-full" src="/lovable-uploads/7b6d13a4-b7c1-421f-93e8-14c322162068.png" />
            </div>
            
            <div className="md:w-3/5 space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">Jones Lauriano</h3>
              <p className="text-divino-purple font-medium">Co-Founder & CEO</p>
              
              <div className="divider">
                <span className="divider-icon">
                  <Rocket size={16} />
                </span>
              </div>
              
              <p className="text-gray-600">
               Com ampla experiência na área de tecnologia e passagem pelo setor de Telefonia VoIP, Jones atuou recentemente como gestor em uma startup de tecnologia focada em gestão de frotas. Nesse papel,
                liderou iniciativas de inovação e otimização de processos, contribuindo diretamente para o aumento do faturamento da empresa.
          
              </p>
              
              <div className="flex space-x-3 pt-2">
                <a href="#" className="text-gray-600 hover:text-divino-purple transition-colors">
                  
                </a>
                <a href="#" className="text-gray-600 hover:text-divino-purple transition-colors">
                  
                </a>
              </div>
            </div>
          </div>
          
          {/* Second Founder */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/5 relative">
              <div className="absolute inset-0 -m-4 rounded-full bg-divino-gold/20 blur-xl transform -translate-x-4"></div>
              <img alt="Jener Lauriano" className="relative rounded-2xl shadow-lg object-cover aspect-square w-full" src="/lovable-uploads/f4de9a39-5ea4-43c5-a9a9-d042a8631587.png" />
            </div>
            
            <div className="md:w-3/5 space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">Jener Lauriano</h3>
              <p className="text-divino-purple font-medium">Co-Founder & Product Owner</p>
              
              <div className="divider">
                <span className="divider-icon">
                  <Rocket size={16} />
                </span>
              </div>
              
              <p className="text-gray-600">
                 Com 18 anos de experiência e autodidata por natureza, Jener aprendeu na prática,
                enfrentando desafios em uma época em que o acesso à informação ainda era limitado.
                Nos últimos anos, atuou na Duobro, firmando parcerias com empresas e desenvolvedores
                internacionais para a realização de projetos no Brasil.
              </p>
              
              <div className="flex space-x-3 pt-2">
                <a href="#" className="text-gray-600 hover:text-divino-purple transition-colors">
                  
                </a>
                <a href="#" className="text-gray-600 hover:text-divino-purple transition-colors">
                  
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-divino-purple hover:bg-divino-purple/90 text-white px-6 py-6">Conheça a Duobro</Button>
        </div>
      </div>
    </section>;
};

export default AboutSection;


import { Button } from "@/components/ui/button";
import { Cross } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 -m-10 rounded-full bg-divino-gold/20 blur-2xl transform -translate-x-10"></div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
                alt="Nossa fundadora" 
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-5 md:-bottom-10 -left-5 md:-left-10 bg-white rounded-lg shadow-lg p-6 max-w-[70%]">
                <div className="flex items-center space-x-2 mb-2">
                  <Cross className="h-6 w-6 text-divino-purple" />
                  <span className="font-semibold text-divino-purple">Fundada em 2008</span>
                </div>
                <p className="text-gray-600">
                  "A fé nos move a cada dia para entregar o melhor aos nossos clientes."
                </p>
                <p className="text-gray-800 font-medium mt-2">— Maria Oliveira, Fundadora</p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 space-y-6">
            <div className="flex items-center space-x-2 bg-divino-purple/10 text-divino-purple rounded-full px-4 py-1 text-sm font-medium mb-4 w-fit">
              <span>Nossa História</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-playfair">
              Uma Jornada de <span className="text-divino-purple">Fé</span> e Dedicação
            </h2>
            
            <p className="text-lg text-gray-600">
              A Divino nasceu da paixão pela fé católica e do desejo de oferecer produtos religiosos de qualidade para pessoas que buscam expressar sua devoção.
            </p>
            
            <div className="divider">
              <span className="divider-icon">
                <Cross size={16} />
              </span>
            </div>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-divino-purple/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-divino-purple font-semibold">01</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">Produtos Selecionados</h3>
                  <p className="text-gray-600">Oferecemos apenas artigos de alta qualidade e significado espiritual.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-divino-purple/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-divino-purple font-semibold">02</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">Atendimento Personalizado</h3>
                  <p className="text-gray-600">Entendemos a importância da sua fé e oferecemos um atendimento carinhoso.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-divino-purple/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-divino-purple font-semibold">03</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">Compromisso com a Fé</h3>
                  <p className="text-gray-600">Parte de nossas vendas são destinadas a projetos sociais da Igreja Católica.</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <Button className="bg-divino-purple hover:bg-divino-purple/90 text-white px-6 py-6 text-lg">
                Conheça Mais
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

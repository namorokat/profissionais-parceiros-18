import { Rocket } from "lucide-react";
import { Sparkles } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Feature = ({ title, description, icon: Icon }: { title: string; description: string; icon: React.ComponentType }) => (
  <div className="flex flex-col items-center text-center">
    <div className="p-4 rounded-full bg-divino-purple/10 text-divino-purple">
      <Icon size={28} />
    </div>
    <h3 className="mt-4 font-semibold text-xl">{title}</h3>
    <p className="mt-2 text-gray-600">{description}</p>
  </div>
);

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-cream">
      <div className="container">
        <div className="text-center mb-12">
          <div className="flex items-center space-x-2 bg-divino-purple/10 text-divino-purple rounded-full px-4 py-1 text-sm font-medium mb-4 w-fit mx-auto">
            <Sparkles size={14} />
            <span>Nossa Plataforma</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-playfair">
            Tudo que você precisa em um só lugar
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Simplifique sua jornada de evangelização com ferramentas poderosas e
            conteúdo inspirador.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Feature
            title="Conteúdo Exclusivo"
            description="Acesso a materiais de estudo, reflexões e sermões inspiradores."
            icon={Rocket}
          />
          <Feature
            title="Comunidade Engajada"
            description="Conecte-se com outros membros, compartilhe experiências e fortaleça sua fé."
            icon={Sparkles}
          />
          <Feature
            title="Segurança e Privacidade"
            description="Ambiente seguro para você e sua comunidade."
            icon={ShieldCheck}
          />
        </div>
        
        <div className="flex justify-center mt-12">
          <Button className="bg-divino-gold hover:bg-divino-gold/90 text-white px-6 py-6 text-lg">
            Aceite o convite dentro do Prazo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

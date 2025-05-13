
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Handshake, Users, RefreshCw, Crown, Rocket } from "lucide-react";

const features = [
  {
    id: 1,
    name: "Exclusividade",
    description: "Faça sua adesão agora para estar no seleto grupo de parceiros-embaixadores. Além do valor acessível e da exclusividade, você aindá usará de graça a partir de Julho de 2027.",
    icon: <Users className="h-10 w-10 text-white" />
  },
  {
    id: 2,
    name: "Construa Fidelidade",
    description: "A sua Página estará em um espaço dedicado e se beneficiará da recorrência das visitas dos membros. Quem não gosta de encontrar tudo em um lugar só?  Mais visitas, mais fidelização, mais negócios. 🤩",
    icon: <RefreshCw className="h-10 w-10 text-white" />
  },
  {
    id: 3,
    name: "Exclusividade",
    description: "Parceiros-Embaixadores terão 2 anos de exclusividade. Queremos valorizar quem consegue ver o valor da rede desde o começo. E, mesmo depois, novos parceiros dependerão do equilíbrio entre oferta x demanda.",
    icon: <Crown className="h-10 w-10 text-white" />
  },
  {
    id: 4,
    name: "Mensalidade Zero",
    description: "Se não bastasse a exclusividade, que tal ainda zerar sua mensalidade a partir de Julho de 2027? Voe ainda mais alto aproveitando o fluxo de católicos sem maiores investimentos.",
    icon: <Rocket className="h-10 w-10 text-white" />
  }
];

const FeatureCard = ({ feature }: { feature: typeof features[0] }) => {
  return (
    <Card className="overflow-hidden border border-gray-200 transition-all hover:shadow-md group h-full">
      <CardContent className="p-6">
        <div className="bg-gradient-to-br from-divino-purple to-divino-burgundy rounded-full w-16 h-16 flex items-center justify-center mb-4">
          {feature.icon}
        </div>
        <h3 className="text-xl font-medium text-gray-800 mb-3">{feature.name}</h3>
        <p className="text-gray-600">{feature.description}</p>
      </CardContent>
    </Card>
  );
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-playfair">
            Um Conceito <span className="text-divino-purple">Único</span> para Parceiros <span className="text-divino-purple">Seletos</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A Católicos Online irá facilitar a busca de profissionais católicos. Ao prover um espaço para diferentes tipos de interações, vamos atrair uma ampla gama de católicos que irá se deparar naturalmente com a sua página e seu conteúdo, de forma mais natural, como deve ser o marketing moderno.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-divino-gold hover:bg-divino-gold/90 text-white px-6 py-6 text-lg">
            Tire suas Dúvidas pelo WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

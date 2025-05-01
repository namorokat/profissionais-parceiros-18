
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Heart, Handshake, Church, Users } from "lucide-react";

const features = [
  {
    id: 1,
    name: "O público que você procura",
    description: "Alcançar a público desejado é a parte mais difícil de qualquer negócio e geralmente custa caro. Aqui você terá novos membros católicos entrando todos os dias por um custo muito mais acessível.",
    icon: <Users className="h-10 w-10 text-white" />
  },
  {
    id: 2,
    name: "Customized Partner Pages",
    description: "Create a beautiful, branded page for your parish, ministry or business with tools designed specifically for Catholic organizations.",
    icon: <Church className="h-10 w-10 text-white" />
  },
  {
    id: 3,
    name: "Event Management",
    description: "Promote your events, retreats, and gatherings to a targeted audience of Catholics in your area or globally.",
    icon: <BookOpen className="h-10 w-10 text-white" />
  },
  {
    id: 4,
    name: "Faith-Based Community",
    description: "Participate in discussions, prayer groups, and faith formation opportunities that align with Catholic teachings and values.",
    icon: <Heart className="h-10 w-10 text-white" />
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
            Powerful <span className="text-divino-purple">Features</span> for Partners
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Como site de membros, a sua loja se beneficiará da recorrência de visitas dos membros. Eles saberão que aqui encontram o que buscam, e a presença da sua loja e produtos irá nutrindo-os para futuras compras. Mais visitas, mais vendas, mais fidelização.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-divino-gold hover:bg-divino-gold/90 text-white px-6 py-6 text-lg">
            Explore All Features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

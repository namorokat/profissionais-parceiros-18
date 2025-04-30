
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Terço de Cristal",
    price: "R$ 59,90",
    image: "https://images.unsplash.com/photo-1560343776-c82276bd0c91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
  },
  {
    id: 2,
    name: "Imagem de Nossa Senhora",
    price: "R$ 129,90",
    image: "https://images.unsplash.com/photo-1519505435723-d65eb81a442c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 3,
    name: "Bíblia Sagrada",
    price: "R$ 89,90",
    image: "https://images.unsplash.com/photo-1576185834327-0e5b2756524f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"
  },
  {
    id: 4,
    name: "Cruz Decorativa",
    price: "R$ 79,90",
    image: "https://images.unsplash.com/photo-1517697471339-4aa32003c11a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80"
  }
];

const ProductCard = ({ product }: { product: typeof products[0] }) => {
  return (
    <Card className="overflow-hidden border border-gray-200 transition-all hover:shadow-md group">
      <div className="relative overflow-hidden">
        <div className="absolute top-2 right-2 z-10">
          <Button variant="outline" size="icon" className="rounded-full bg-white/80 backdrop-blur-sm h-8 w-8 hover:bg-white">
            <Heart className="h-4 w-4 text-gray-600" />
          </Button>
        </div>
        <img
          src={product.image}
          alt={product.name}
          className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-medium text-gray-800">{product.name}</h3>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-semibold text-divino-purple">{product.price}</span>
          <Button variant="ghost" className="text-xs text-divino-burgundy hover:bg-divino-burgundy/10 hover:text-divino-burgundy">
            Adicionar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const FeaturedProducts = () => {
  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-playfair">
            Nossos Produtos em <span className="text-divino-purple">Destaque</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubra nossa seleção de produtos religiosos cuidadosamente escolhidos para ajudar você a expressar sua fé.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-divino-gold hover:bg-divino-gold/90 text-white px-6 py-6 text-lg">
            Ver Todos os Produtos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

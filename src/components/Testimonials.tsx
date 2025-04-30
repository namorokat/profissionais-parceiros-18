
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ana Souza",
    role: "Cliente desde 2020",
    content: "Os produtos são de excelente qualidade e chegam bem embalados. O terço que comprei é lindo e muito bem feito.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1961&q=80"
  },
  {
    id: 2,
    name: "Carlos Ferreira",
    role: "Cliente desde 2018",
    content: "Atendimento espetacular e produtos que realmente trazem um significado especial para minha vida de fé.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
  },
  {
    id: 3,
    name: "Luiza Menezes",
    role: "Cliente desde 2021",
    content: "Encontrei produtos que não achava em nenhum outro lugar. A loja tem um catálogo incrível e preços justos.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow bg-white">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-gray-800">{testimonial.name}</p>
              <p className="text-xs text-gray-500">{testimonial.role}</p>
            </div>
          </div>
          <div className="flex items-center">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-divino-gold text-divino-gold" />
            ))}
          </div>
        </div>
        <p className="text-gray-600">{testimonial.content}</p>
      </CardContent>
    </Card>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-playfair">
            O Que Nossos <span className="text-divino-purple">Clientes</span> Dizem
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Veja o que nossos clientes compartilham sobre suas experiências com nossos produtos e atendimento.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

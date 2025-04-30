
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Book, Heart, Star } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-divino-light/30 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-divino-purple blur-3xl"></div>
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-divino-gold blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-2 bg-divino-purple/10 text-divino-purple rounded-full px-4 py-1 text-sm font-medium mb-4 w-fit">
              <span>Contato</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-playfair">
              Entre em <span className="text-divino-purple">Contato</span> Conosco
            </h2>
            
            <p className="text-lg text-gray-600">
              Estamos sempre disponíveis para ajudar em sua jornada de fé. Envie-nos uma mensagem e responderemos o mais breve possível.
            </p>
            
            <div className="space-y-6 pt-4">
              <div className="flex gap-4 items-start">
                <div className="rounded-full bg-divino-purple/10 p-3">
                  <Star className="h-6 w-6 text-divino-purple" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">Visite Nossa Loja</h3>
                  <p className="text-gray-600">Av. Nossa Senhora da Conceição, 123, Centro, São Paulo - SP</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="rounded-full bg-divino-purple/10 p-3">
                  <Heart className="h-6 w-6 text-divino-purple" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">Entre em Contato</h3>
                  <p className="text-gray-600">contato@divino.com.br</p>
                  <p className="text-gray-600">(11) 99999-9999</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="rounded-full bg-divino-purple/10 p-3">
                  <Book className="h-6 w-6 text-divino-purple" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">Horário de Funcionamento</h3>
                  <p className="text-gray-600">Segunda a Sexta: 09h às 18h</p>
                  <p className="text-gray-600">Sábado: 09h às 14h</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 font-playfair">Envie sua Mensagem</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Nome</label>
                  <Input id="name" placeholder="Seu nome" className="border-gray-300" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                  <Input id="email" type="email" placeholder="seu.email@exemplo.com" className="border-gray-300" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700">Assunto</label>
                <Input id="subject" placeholder="Do que se trata?" className="border-gray-300" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Mensagem</label>
                <Textarea id="message" placeholder="Sua mensagem" className="border-gray-300 h-32" />
              </div>
              <Button className="w-full bg-divino-purple hover:bg-divino-purple/90 text-white">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

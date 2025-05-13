
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Book, Church, Handshake, MessageSquare, HelpCircle, ExternalLink } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ContactSection = () => {
  const whatsappLink = "http://wa.me/5501152866640";
  
  return <section id="contact" className="py-16 md:py-24 bg-divino-light/30 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-divino-purple blur-3xl"></div>
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-divino-gold blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-2 bg-divino-purple/10 text-divino-purple rounded-full px-4 py-1 text-sm font-medium mb-4 w-fit">
              <Handshake size={14} />
              <span>Parceiros para escalar</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-playfair">
             Pronto para uma <span className="text-divino-purple">Parceria</span> de Sucesso?
            </h2>
            
            <p className="text-lg text-gray-600">Não hesite! Obtenha mais informações através de nossos canais.</p>
            
            <div className="space-y-6 pt-4">
              <div className="flex gap-4 items-start">
                <div className="rounded-full bg-divino-purple/10 p-3">
                  <Church className="h-6 w-6 text-divino-purple" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">Parceiros</h3>
                  <p className="text-gray-600">Lojas, Profissionais, Paróquias, Congregações e pessoas com boas ideias! </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="rounded-full bg-divino-purple/10 p-3">
                  <MessageSquare className="h-6 w-6 text-divino-purple" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">Contato via Email</h3>
                  <p className="text-gray-600">contato@catolicos.online</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="rounded-full bg-divino-purple/10 p-3">
                  <Book className="h-6 w-6 text-divino-purple" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">Contato via WhatsApp</h3>
                  <p className="text-gray-600">Converse com a gente:</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-2 mb-6">
              <HelpCircle className="h-6 w-6 text-divino-purple" />
              <h3 className="text-2xl font-semibold text-gray-800 font-playfair">Perguntas que podem surgir...</h3>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-base font-medium">Qual o investimento para ser parceiro?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Cada parceiro recebe uma proposta específica, pois cada qual tem um perfil diferente com potencial diferente. Para receber uma proposta, você deve fazer contato o quanto antes, dado o limite no número de parceiros.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-base font-medium">Como receberei os valores das minhas vendas?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Assim que atingir uma valor mínimo em vendas, você poderá solicitar um saque pela plataforma que será feito em 24hs.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-base font-medium">Quando será o lançamento?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  A Rede entrará em fase beta em breve, quando já receberá novos membros. Durante esta fase haverá ajustes ou correções de acordo com feedback dos usuários e parceiros. Nossa previsão de lançamento oficial está para o dia 12 de Outubro.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-base font-medium">Tem contrato de fidelidade?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Não, pois acreditamos que retemos parceiros pelos resultados e não por contratos.  O contrato é apenas para esclarecimento dos termos e segurança entre as partes.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-base font-medium">Tem apps?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  A plataforma está bem adaptada para smartphones, com uma interface que simula um app. Apps oficiais já estão em desenvolvimento.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="mt-8">
              <Button 
                className="w-full text-white bg-lime-600 hover:bg-lime-500 flex items-center justify-center gap-2"
                onClick={() => window.open(whatsappLink, '_blank')}
              >
                Estamos no WhatsApp
                <ExternalLink size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default ContactSection;

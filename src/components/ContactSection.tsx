
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Book, Church, Handshake, MessageSquare, HelpCircle, ExternalLink } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ContactSection = () => {
  const whatsappLink = "https://2ly.link/27Dwz";
  
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
                  <p className="text-gray-600">Converse com a gente: (11)5286-6640  </p>
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
                <AccordionTrigger className="text-left text-base font-medium">Por que eu deveria aderir agora?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Teremos um número inicial muito limitado de parceiros e não abriremos novas vagas até que a rede atinja 30 mil membros. Mesmo assim, a entrada não será garantida, pois nosso foco não está na quantidade, e sim na qualidade dos resultados.
                </AccordionContent>
              </AccordionItem>

                <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-base font-medium">Quem se qualifica?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Empresas e profissionais católicos, sem necessidade de serem pessoas jurídicas, mas que possam comprovar sua capacidade e qualificações de acordo com os serviços que oferecem. Contudo, o mero convite por nossa parte ou ainda o interesse por parte de um candidato não garantem o direito de se tornar parceiro. Reservamo-nos o direito de analisar cada candidato segundo nossos critérios internos.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-base font-medium">Como os membros poderão fazer contato comigo?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Você poderá adicionar um link para o seu perfil pessoal na rede, que conta com chat em tempo real. Também será possível listar seus outros canais externos. Já está em nossa lista de desenvolvimento a opção de contato direto com a página do parceiro dentro da rede. 
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-base font-medium">O que é a fase beta?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Embora já esteja pronta para uso, a rede ainda passará por ajustes finos e testes reais com muitos usuários para validarmos tudo com 100% de segurança. Essa fase será crucial para coletar feedbacks e planejar melhorias e novas funções.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-base font-medium">Tem contrato de fidelidade?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Não, pois acreditamos que retemos parceiros pelos resultados e não por contratos.  O contrato é apenas para esclarecimento dos termos e segurança entre as partes.
                </AccordionContent>
              </AccordionItem>            

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left text-base font-medium">Qual deve ser a minha expectativa?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                 Como todo projeto recém-lançado, a rede terá uma curva natural até ganhar tração. Já contamos com um fluxo inicial que será direcionado (3000 visitas/mês), mas o tráfego mais robusto virá do nosso trabalho técnico de SEO (Search Engine Optimization), com efeitos visíveis em cerca de 6 meses. 
                  Como as expectativas variam entre pessoas e profissões, sugerimos participar apenas se estiver disposto a crescer junto com a rede, sem esperar resultados imediatos.
              
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

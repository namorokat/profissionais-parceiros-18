import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Book, Church, Handshake, MessageSquare, HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const ContactSection = () => {
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
              <span>Partnership Inquiries</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-playfair">
              Ready to <span className="text-divino-purple">Partner</span> With Us?
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
                  <p className="text-gray-600">(555) 123-4567</p>
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
              <h3 className="text-2xl font-semibold text-gray-800 font-playfair">Frequently Asked Questions</h3>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-base font-medium">
                  How much does it cost to become a partner?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  We offer different partnership tiers based on your organization's needs and size. Our basic partnership starts at $99/month with premium options available for larger organizations with additional requirements.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-base font-medium">
                  What type of organizations can join as partners?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  We welcome all Catholic organizations including parishes, ministries, schools, religious orders, and Catholic-owned businesses that align with our mission and values.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-base font-medium">
                  How long does it take to get my partner page set up?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Once your application is approved, we can have your partner page set up within 3-5 business days. Our team will work with you to gather all necessary information and content.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-base font-medium">
                  Can I sell products directly on the platform?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes! Partners can sell physical or digital products directly through our platform. We handle payment processing and provide you with the tools to manage your inventory and orders.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-base font-medium">
                  What marketing support do partners receive?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Partners receive visibility across our platform, feature opportunities in our newsletter, social media promotion, and access to our marketing toolkit designed specifically for Catholic organizations.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="mt-8">
              <Button className="w-full text-white bg-lime-600 hover:bg-lime-500">
                Contact Us About Partnership
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;
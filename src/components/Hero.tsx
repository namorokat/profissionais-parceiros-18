
import { Button } from "@/components/ui/button";
import { Church, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-divino-cream to-white py-16 md:py-24">
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-divino-purple blur-3xl"></div>
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-divino-gold blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 space-y-6 text-center md:text-left pt-8 md:pt-0">
            <div className="mb-6 inline-block">
              <div className="flex items-center space-x-2 bg-divino-purple/10 text-divino-purple rounded-full px-4 py-1 text-sm font-medium mb-4">
                <Church size={14} />
                <span>Catholic Social Network Platform</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight font-playfair">
              Conecte a <span className="text-divino-purple">Divino Amor</span> a um fluxo católico e constante.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg">
              Join our growing network of parishes, ministries, and Catholic businesses to engage with an active faith community on our trusted platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 items-center justify-center md:justify-start">
              <Button className="bg-divino-purple hover:bg-divino-purple/90 text-white px-6 py-6 text-lg">
                Become a Partner
              </Button>
              <Button variant="outline" className="border-divino-purple text-divino-purple hover:bg-divino-purple/10 px-6 py-6 text-lg">
                Watch Demo
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 -m-10 rounded-full bg-divino-purple/20 blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Catholic community members connecting" 
                className="relative rounded-2xl shadow-lg max-w-full h-auto w-full object-cover"
                style={{ maxHeight: "500px" }}
              />
              <div className="absolute -bottom-5 -right-5 md:bottom-10 md:-right-10 bg-white rounded-lg shadow-lg p-4">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center gap-1">
                    <Users size={16} className="text-divino-purple" />
                    <span className="text-divino-purple font-medium">50K+</span>
                  </div>
                  <span className="font-medium text-gray-800">Active Members</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Growing faith community</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

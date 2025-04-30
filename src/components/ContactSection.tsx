
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Book, Church, Handshake, MessageSquare } from "lucide-react";

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
              <Handshake size={14} />
              <span>Partnership Inquiries</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-playfair">
              Ready to <span className="text-divino-purple">Partner</span> With Us?
            </h2>
            
            <p className="text-lg text-gray-600">
              Join our growing network of Catholic organizations. Fill out the form and our partnership team will contact you to discuss how we can help you connect with the Catholic community.
            </p>
            
            <div className="space-y-6 pt-4">
              <div className="flex gap-4 items-start">
                <div className="rounded-full bg-divino-purple/10 p-3">
                  <Church className="h-6 w-6 text-divino-purple" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">Partner Types</h3>
                  <p className="text-gray-600">Parishes, Ministries, Catholic Schools, Religious Orders, Catholic Businesses</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="rounded-full bg-divino-purple/10 p-3">
                  <MessageSquare className="h-6 w-6 text-divino-purple" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">Direct Contact</h3>
                  <p className="text-gray-600">partners@communio.network</p>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="rounded-full bg-divino-purple/10 p-3">
                  <Book className="h-6 w-6 text-divino-purple" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">Partnership Resources</h3>
                  <p className="text-gray-600">Download our partner guide to learn more about the benefits of joining Communio.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 font-playfair">Partner Application</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Contact Name</label>
                  <Input id="name" placeholder="Your name" className="border-gray-300" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                  <Input id="email" type="email" placeholder="you@organization.org" className="border-gray-300" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="organization" className="text-sm font-medium text-gray-700">Organization Name</label>
                <Input id="organization" placeholder="Parish, Ministry or Business Name" className="border-gray-300" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="type" className="text-sm font-medium text-gray-700">Organization Type</label>
                <select id="type" className="w-full rounded-md border border-gray-300 py-2 px-3">
                  <option value="">Please select...</option>
                  <option value="parish">Parish</option>
                  <option value="ministry">Ministry</option>
                  <option value="school">Catholic School</option>
                  <option value="religious">Religious Order</option>
                  <option value="business">Catholic Business</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">How can Communio help you?</label>
                <Textarea id="message" placeholder="Tell us about your goals and needs" className="border-gray-300 h-32" />
              </div>
              
              <Button className="w-full bg-divino-purple hover:bg-divino-purple/90 text-white">
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

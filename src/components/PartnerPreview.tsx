
import { Button } from "@/components/ui/button";
import { FileImage, Heart, MessageSquare, Users, Church } from "lucide-react";

const PartnerPreview = () => {
  return (
    <section id="partner-preview" className="py-16 md:py-24 bg-divino-light/30 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-divino-purple blur-3xl"></div>
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-divino-gold blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 bg-divino-purple/10 text-divino-purple rounded-full px-4 py-1 text-sm font-medium mb-4 mx-auto w-fit">
            <FileImage size={14} />
            <span>Partner Page Preview</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-playfair">
            Your <span className="text-divino-purple">Presence</span> on Communio
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            See how your organization will appear to our Catholic community members. Our customizable partner pages help you showcase your ministry, events, and content.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-divino-purple/5 rounded-3xl transform rotate-1 scale-105"></div>
          
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            {/* Partner Page Header */}
            <div className="h-40 bg-gradient-to-r from-divino-purple to-divino-burgundy relative">
              <div className="absolute bottom-0 left-0 w-full flex items-end p-4 pb-0">
                <div className="bg-white rounded-t-xl p-2 px-6 flex items-center space-x-3">
                  <img 
                    src="https://images.unsplash.com/photo-1572082415155-e3e3624a6b41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80" 
                    alt="St. Mary's Parish" 
                    className="h-12 w-12 rounded-full border-2 border-white"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg">St. Mary's Parish</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <Church className="h-3 w-3 mr-1" />
                      <span>Verified Partner</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Partner Page Content */}
            <div className="p-6 pt-12">
              <div className="flex justify-between items-center mb-6">
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-1 text-gray-600">
                    <Users className="h-4 w-4" />
                    <span>2.4K Followers</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-600">
                    <MessageSquare className="h-4 w-4" />
                    <span>124 Posts</span>
                  </div>
                </div>
                <Button className="bg-divino-purple hover:bg-divino-purple/90 text-white">
                  <Heart className="h-4 w-4 mr-1" /> Follow
                </Button>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="prose max-w-none">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">About Our Parish</h4>
                  <p className="text-gray-600">
                    St. Mary's is a vibrant Catholic community dedicated to serving God through worship, education, and outreach. 
                    Join us for Mass, events, and volunteer opportunities.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h5 className="font-medium text-gray-800 mb-2">Upcoming Event</h5>
                    <p className="text-gray-600 text-sm mb-2">Advent Retreat: Preparing Hearts</p>
                    <div className="flex items-center text-divino-purple text-sm">
                      <span className="font-medium">Dec 5 at 9:00 AM</span>
                      <Button variant="link" size="sm" className="text-divino-gold">RSVP</Button>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h5 className="font-medium text-gray-800 mb-2">Latest Post</h5>
                    <p className="text-gray-600 text-sm mb-2">Reflections on Today's Gospel Reading</p>
                    <div className="flex items-center text-divino-purple text-sm">
                      <span>32 comments</span>
                      <Button variant="link" size="sm" className="text-divino-gold">Read More</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-divino-gold hover:bg-divino-gold/90 text-white px-6 py-6 text-lg">
            Create Your Partner Page
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PartnerPreview;

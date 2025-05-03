
import React from 'react';

const VideoSection = () => {
  return (
    <section id="video" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">See Communio in Action</h2>
          <p className="text-lg text-gray-600 mb-8">
            Watch how our platform connects Catholic communities and creates meaningful engagement opportunities.
          </p>
          <div className="relative rounded-lg shadow-xl overflow-hidden aspect-video">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Communio Platform Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-8">
            <p className="text-sm text-gray-500">
              Ready to see more? <a href="#contact" className="text-purple-600 hover:underline">Contact us</a> for a personalized demo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

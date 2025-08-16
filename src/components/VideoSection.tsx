import React from 'react';


const VideoSection: React.FC = () => {
  return (
    <section id="video-section" className="w-full py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Continent of Algeria
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the rich culture, stunning landscapes, and vibrant heritage of Algeria through this immersive journey.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-xl overflow-hidden shadow-algeria-green border border-border">
            <div className="aspect-video bg-background">
              <video
                className="w-full h-full object-cover"
                controls
                preload="metadata"
                aria-label="CONTINENT OF ALGERIA - cinematic video"
                poster="/placeholder.svg"
              >
                <source src="/videos/algeria-cinematic.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground italic">
              "Algeria is not just a country, it's a universe of beauty waiting to be explored."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
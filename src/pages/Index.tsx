import React from 'react';
import AlgerianFlag from '@/components/AlgerianFlag';
import InteractiveMap from '@/components/InteractiveMap';
import VideoSection from '@/components/VideoSection';

const Index = () => {
  const scrollToVideo = () => {
    const videoSection = document.getElementById('video-section');
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section with Flag */}
      <header className="py-12 lg:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Interactive Map of Algeria
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore the 58 provinces of Algeria through our interactive map. Click on any region to discover more about its unique heritage and beauty.
          </p>
          <AlgerianFlag onClick={scrollToVideo} />
        </div>
      </header>

      {/* Interactive Map Section */}
      <main className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Explore Algeria's Provinces
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From the Mediterranean coastline to the vast Sahara Desert, discover the diverse landscapes and rich culture of Algeria's 58 provinces.
            </p>
          </div>
          <InteractiveMap />
        </div>
      </main>

      {/* Video Section */}
      <VideoSection />

      {/* Footer */}
      <footer className="py-8 border-t border-border heritage-pattern">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Interactive Map of Algeria. Celebrating the beauty and diversity of Algeria.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

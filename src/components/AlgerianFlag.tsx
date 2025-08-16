import React from 'react';
import algerianFlag from '@/assets/algeria-flag.png';

interface AlgerianFlagProps {
  onClick: () => void;
}

const AlgerianFlag: React.FC<AlgerianFlagProps> = ({ onClick }) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <button
        onClick={onClick}
        className="group relative overflow-hidden rounded-lg shadow-algeria-green hover:shadow-algeria-red transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent/50"
        aria-label="Click to scroll to video section"
      >
        <img
          src={algerianFlag}
          alt="Flag of Algeria"
          className="w-32 h-auto md:w-48 lg:w-56 flag-wave group-hover:animate-pulse"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </button>
      <p className="text-sm md:text-base text-muted-foreground text-center">
        Click the flag to explore Algeria's story
      </p>
    </div>
  );
};

export default AlgerianFlag;
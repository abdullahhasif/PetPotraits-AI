import React, { useState, useEffect, useRef } from 'react';
import type { ArtStyle } from '../types';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';

interface StyleCardProps {
  style: ArtStyle;
  onCreate: (style: ArtStyle) => void;
}

const StyleCard: React.FC<StyleCardProps> = ({ style, onCreate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    if (style.generatedImages.length <= 1) return;

    timeoutRef.current = window.setTimeout(
      () => setCurrentIndex((prevIndex) => (prevIndex + 1) % style.generatedImages.length),
      3000
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex, style.generatedImages.length]);
  
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + style.generatedImages.length) % style.generatedImages.length
    );
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % style.generatedImages.length
    );
  };

  return (
    <div className="flex flex-col group">
      <div className="relative w-full aspect-[4/5] bg-zinc-200 rounded-2xl overflow-hidden shadow-md transition-shadow duration-300 group-hover:shadow-xl">
        {style.generatedImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${style.name} portrait example ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden={index !== currentIndex}
          />
        ))}

        {style.generatedImages.length > 1 && (
            <>
                <button
                    onClick={handlePrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-1.5 bg-white/40 rounded-full text-zinc-800 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/70 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
                    aria-label="Previous image"
                >
                    <ChevronLeftIcon className="h-5 w-5" />
                </button>
                <button
                    onClick={handleNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-1.5 bg-white/40 rounded-full text-zinc-800 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/70 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
                    aria-label="Next image"
                >
                    <ChevronRightIcon className="h-5 w-5" />
                </button>
            </>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>

        {style.generatedImages.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center space-x-1.5" role="tablist" aria-label="Image gallery controls">
            {style.generatedImages.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                aria-label={`View image ${index + 1}`}
                aria-selected={currentIndex === index}
                role="tab"
                className={`block w-2 h-2 rounded-full transition-colors duration-200 ${
                  currentIndex === index ? 'bg-white' : 'bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        )}
      </div>
      <div className="flex items-center justify-between mt-4 px-1">
        <h3 className="font-bold text-zinc-800 text-lg">{style.name}</h3>
        <button 
          onClick={() => onCreate(style)}
          className="px-5 py-2 text-sm font-semibold bg-pink-100 text-pink-700 rounded-full hover:bg-pink-200 hover:text-pink-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 ring-offset-[#FDFCFB]">
          Create
        </button>
      </div>
    </div>
  );
};

export default StyleCard;
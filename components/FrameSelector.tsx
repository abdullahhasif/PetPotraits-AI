
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { FRAMES } from '../constants';
import type { FrameStyle } from '../types';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';

interface FrameSelectorProps {
  onClose: () => void;
  onSelect: (frame: FrameStyle) => void;
  initialFrame: FrameStyle;
}

const FrameSelector: React.FC<FrameSelectorProps> = ({ onClose, onSelect, initialFrame }) => {
  const [selectedFrame, setSelectedFrame] = useState<FrameStyle>(initialFrame);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkForScroll = useCallback(() => {
    const el = scrollContainerRef.current;
    if (el) {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      setCanScrollLeft(scrollLeft > 1);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    checkForScroll();
    el.addEventListener('scroll', checkForScroll, { passive: true });
    window.addEventListener('resize', checkForScroll);
    const timeoutId = setTimeout(checkForScroll, 100);

    return () => {
      el.removeEventListener('scroll', checkForScroll);
      window.removeEventListener('resize', checkForScroll);
      clearTimeout(timeoutId);
    };
  }, [checkForScroll]);

  const handleScroll = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (el) {
      const scrollAmount = direction === 'left' ? -el.clientWidth * 0.7 : el.clientWidth * 0.7;
      el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div
      className="fixed inset-0 bg-zinc-900/10 backdrop-blur-sm flex items-end justify-center z-50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="frame-selector-title"
    >
      <div
        className="relative bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-6 w-full max-w-4xl transform transition-transform duration-300 ease-out translate-y-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 id="frame-selector-title" className="text-xl font-bold text-zinc-800">Select Frame</h2>
          <button
            onClick={() => onSelect(selectedFrame)}
            className="text-lg font-semibold text-orange-600 hover:text-orange-700 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-md"
          >
            Done
          </button>
        </div>

        <div className="relative">
          <div 
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 transition-opacity duration-300 ${canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            <button 
              onClick={() => handleScroll('left')}
              className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-zinc-700 hover:bg-zinc-100 transition focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-label="Scroll left"
              tabIndex={canScrollLeft ? 0 : -1}
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
          </div>
          
          <div ref={scrollContainerRef} className="flex items-stretch gap-3 overflow-x-auto pb-2 -mb-2 snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {FRAMES.map((frame) => {
              const isSelected = selectedFrame.id === frame.id;
              return (
                <button
                  key={frame.id}
                  onClick={() => setSelectedFrame(frame)}
                  className={`flex-shrink-0 snap-start w-32 p-2 border-2 rounded-xl flex flex-col items-center justify-start text-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500
                    ${isSelected ? 'border-orange-500 bg-orange-50' : 'border-zinc-200 bg-white hover:border-zinc-300 hover:bg-zinc-50'}`}
                >
                  <div className="w-full aspect-square bg-zinc-100 rounded-md mb-3 overflow-hidden">
                    <img src={frame.image} alt={`${frame.name} frame preview`} className="w-full h-full object-cover" />
                  </div>
                  <span className={`font-semibold text-sm transition-colors ${isSelected ? 'text-orange-600' : 'text-zinc-800'}`}>{frame.name}</span>
                  {frame.price && <span className="text-xs text-zinc-500 mt-1">{frame.price}</span>}
                </button>
              )
            })}
          </div>

          <div
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 transition-opacity duration-300 ${canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            <button 
              onClick={() => handleScroll('right')}
              className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-zinc-700 hover:bg-zinc-100 transition focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-label="Scroll right"
              tabIndex={canScrollRight ? 0 : -1}
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameSelector;
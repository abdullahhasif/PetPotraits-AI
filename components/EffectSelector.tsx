import React, { useState } from 'react';
import type { ArtEffect } from '../types';
import { EFFECTS } from '../constants';

interface EffectSelectorProps {
  onClose: () => void;
  onSelect: (effect: ArtEffect) => void;
  initialEffect: ArtEffect;
  previewImage?: string | null;
}

const EffectSelector: React.FC<EffectSelectorProps> = ({ onClose, onSelect, initialEffect, previewImage }) => {
  const [selectedEffect, setSelectedEffect] = useState<ArtEffect>(initialEffect);
  
  const DEFAULT_PREVIEW_IMAGE = 'https://res.cloudinary.com/mixtiles/image/upload/f_auto,q_auto:good/c_scale,w_400/photo-to-art/feed-previews/spa_pet/0.png';

  const handleDone = () => {
    onSelect(selectedEffect);
  };
  
  return (
    <div
      className="fixed inset-0 bg-zinc-900/10 backdrop-blur-sm flex items-end justify-center z-50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="effect-selector-title"
    >
      <div
        className="relative bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-6 w-full max-w-2xl transform transition-transform duration-300 ease-out translate-y-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 id="effect-selector-title" className="text-xl font-bold text-zinc-800">Select Effect</h2>
          <button
            onClick={handleDone}
            className="text-lg font-semibold text-pink-600 hover:text-pink-700 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 rounded-md"
          >
            Done
          </button>
        </div>

        <div className="grid grid-cols-5 gap-4">
            {EFFECTS.map((effect) => {
                const isSelected = selectedEffect.id === effect.id;

                return (
                    <button
                        key={effect.id}
                        onClick={() => setSelectedEffect(effect)}
                        className={`p-2 border-2 rounded-xl flex flex-col items-center justify-center text-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500
                          ${isSelected ? 'border-pink-500 bg-pink-50' : 'border-zinc-200 bg-white hover:border-zinc-300 hover:bg-zinc-50'}`}
                    >
                        <div className="w-full aspect-square bg-zinc-200 rounded-md mb-2 overflow-hidden">
                            <img 
                                src={previewImage || DEFAULT_PREVIEW_IMAGE}
                                alt={`${effect.name} effect preview`}
                                className="w-full h-full object-cover"
                                style={effect.style}
                            />
                        </div>
                        <span className={`font-semibold text-sm transition-colors ${isSelected ? 'text-pink-600' : 'text-zinc-800'}`}>{effect.name}</span>
                    </button>
                )
            })}
        </div>
      </div>
    </div>
  );
};

export default EffectSelector;
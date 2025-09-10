import React, { useState } from 'react';
import type { BorderSettings } from '../types';
import { BORDER_COLORS, BORDER_WIDTHS } from '../constants';

interface BorderSelectorProps {
  onClose: () => void;
  onSelect: (border: BorderSettings) => void;
  initialBorder: BorderSettings;
  previewImage?: string | null;
}

const BorderSelector: React.FC<BorderSelectorProps> = ({ onClose, onSelect, initialBorder, previewImage }) => {
  const [selectedWidth, setSelectedWidth] = useState<BorderSettings['width']>(initialBorder.width);
  const [selectedColor, setSelectedColor] = useState<string>(initialBorder.color);
  
  const DEFAULT_PREVIEW_IMAGE = 'https://res.cloudinary.com/mixtiles/image/upload/f_auto,q_auto:good/c_scale,w_400/photo-to-art/feed-previews/spa_pet/0.png';

  const borderWidthMap = BORDER_WIDTHS.reduce((acc, curr) => {
    acc[curr.id] = curr.padding;
    return acc;
  }, {} as Record<BorderSettings['width'], string>);
  
  const handleDone = () => {
    onSelect({ width: selectedWidth, color: selectedColor });
  };
  
  return (
    <div
      className="fixed inset-0 bg-zinc-900/10 backdrop-blur-sm flex items-end justify-center z-50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="border-selector-title"
    >
      <div
        className="relative bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-6 w-full max-w-xl transform transition-transform duration-300 ease-out translate-y-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 id="border-selector-title" className="text-xl font-bold text-zinc-800">Select Border</h2>
          <button
            onClick={handleDone}
            className="text-lg font-semibold text-pink-600 hover:text-pink-700 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 rounded-md"
          >
            Done
          </button>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-8">
            {BORDER_WIDTHS.map((width) => {
                const isSelected = selectedWidth === width.id;
                const isBordered = width.id !== 'none';
                const paddingValue = isBordered ? borderWidthMap[width.id] : '0';

                return (
                    <button
                        key={width.id}
                        onClick={() => setSelectedWidth(width.id)}
                        className={`p-2 border-2 rounded-xl flex flex-col items-center justify-center text-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500
                          ${isSelected ? 'border-pink-500 bg-pink-50' : 'border-zinc-200 bg-white hover:border-zinc-300 hover:bg-zinc-50'}`}
                    >
                        <div 
                            className="w-full aspect-square bg-zinc-200 rounded-md mb-2 overflow-hidden transition-all"
                            style={{ 
                                padding: isSelected && selectedWidth !== 'none' ? paddingValue : '0',
                                backgroundColor: isSelected && selectedWidth !== 'none' ? selectedColor : '#E5E7EB',
                            }}
                        >
                            <img 
                                src={previewImage || DEFAULT_PREVIEW_IMAGE}
                                alt="Border preview"
                                className="w-full h-full object-cover rounded-sm"
                            />
                        </div>
                        <span className={`font-semibold text-sm transition-colors ${isSelected ? 'text-pink-600' : 'text-zinc-800'}`}>{width.label}</span>
                    </button>
                )
            })}
        </div>

        <div className="flex items-center justify-center gap-3 flex-wrap">
            {BORDER_COLORS.map((color) => (
                <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className="w-8 h-8 rounded-full border-2 border-transparent transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                    style={{ backgroundColor: color, boxShadow: selectedColor.toLowerCase() === color.toLowerCase() ? `0 0 0 2px #EC4899` : `0 0 0 1px rgba(0,0,0,0.1)`}}
                    aria-label={`Select color ${color}`}
                    aria-pressed={selectedColor.toLowerCase() === color.toLowerCase()}
                />
            ))}
        </div>
      </div>
    </div>
  );
};

export default BorderSelector;

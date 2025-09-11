import React from 'react';
import type { ArtStyle, BorderSettings, ArtEffect, FrameStyle, ProductSize } from '../types';
import { BORDER_WIDTHS } from '../constants';
import { ShoppingCartIcon } from './icons';

interface ResultsPageProps {
  style: ArtStyle;
  images: string[];
  selectedSize: ProductSize;
  selectedBorder: BorderSettings;
  selectedEffect: ArtEffect;
  selectedFrame: FrameStyle;
  onAddToCart: (image: string) => void;
}

const ResultsPage: React.FC<ResultsPageProps> = ({ style, images, selectedSize, selectedBorder, selectedEffect, selectedFrame, onAddToCart }) => {
  const aspectRatios: Record<ProductSize['orientation'], string> = {
    square: 'aspect-square',
    portrait: 'aspect-[4/5]',
    landscape: 'aspect-[5/4]',
  };

  const borderWidthMap = BORDER_WIDTHS.reduce((acc, curr) => {
    acc[curr.id] = curr.padding;
    return acc;
  }, {} as Record<BorderSettings['width'], string>);

  const isBordered = selectedBorder.width !== 'none';
  const paddingValue = isBordered ? borderWidthMap[selectedBorder.width] : '0px';

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold font-heading text-zinc-800">Your Pet Portrait Gallery!</h2>
        <p className="mt-2 text-zinc-600">Here are four unique creations in the "{style.name}" style.</p>
        <p className="mt-4 text-zinc-600">
            Current selection: <span className="font-bold text-zinc-800">{selectedSize.label} ({selectedFrame.name})</span>
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
        {images.map((image, index) => (
          <div key={index} className="relative group">
            <div 
              className={`rounded-lg shadow-xl transition-all duration-300 ${aspectRatios[selectedSize.orientation]}`}
              style={selectedFrame.style}
            >
              <div
                className="w-full h-full"
                style={{
                  backgroundColor: isBordered ? selectedBorder.color : 'transparent',
                  padding: paddingValue,
                  transition: 'background-color 0.3s ease, padding 0.3s ease',
                }}
              >
                <img
                  src={image}
                  alt={`Generated portrait of your pet in ${style.name} style, version ${index + 1}`}
                  className="w-full h-full object-cover rounded-sm"
                  style={selectedEffect.style}
                />
              </div>
            </div>
            <div className="absolute inset-0 rounded-lg bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <button 
                    onClick={() => onAddToCart(image)}
                    className="bg-white text-zinc-800 font-bold px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-zinc-200 transform group-hover:scale-100 scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white ring-offset-transparent"
                    aria-label={`Add portrait ${index + 1} to cart`}
                >
                    <ShoppingCartIcon className="h-5 w-5" />
                    <span>Add to Cart</span>
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsPage;

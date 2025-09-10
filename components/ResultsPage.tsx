import React from 'react';
import type { ArtStyle, BorderSettings, ArtEffect, FrameStyle } from '../types';
import type { ProductSize } from '../constants';
import { BORDER_WIDTHS } from '../constants';

interface ResultsPageProps {
  style: ArtStyle;
  images: string[];
  selectedSize: ProductSize;
  selectedBorder: BorderSettings;
  selectedEffect: ArtEffect;
  selectedFrame: FrameStyle;
}

const ResultsPage: React.FC<ResultsPageProps> = ({ style, images, selectedSize, selectedBorder, selectedEffect, selectedFrame }) => {
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
            Current selection: <span className="font-bold text-zinc-800">{selectedSize.label} ({selectedFrame.name})</span> for <span className="font-bold text-zinc-800">{selectedSize.price}</span>
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
        {images.map((image, index) => (
          <div 
            key={index} 
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
        ))}
      </div>
    </div>
  );
};

export default ResultsPage;

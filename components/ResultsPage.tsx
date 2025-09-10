import React from 'react';
import type { ArtStyle } from '../types';
import { FrameIcon, SizeIcon, EffectIcon, BorderIcon, PlusIcon } from './icons';

interface EditingToolbarProps {
  onAdd: () => void;
}

export const EditingToolbar: React.FC<EditingToolbarProps> = ({ onAdd }) => {
    const tools = [
        { name: 'Frame', icon: FrameIcon },
        { name: 'Size', icon: SizeIcon },
        { name: 'Effect', icon: EffectIcon },
        { name: 'Border', icon: BorderIcon },
    ];

    return (
        <div className="bg-white rounded-2xl shadow-lg p-2 flex items-center space-x-2" role="toolbar" aria-label="Image editing tools">
            <div className="flex items-center gap-2 pr-2">
                {tools.map((tool) => (
                    <button key={tool.name} className="flex flex-col items-center justify-center text-zinc-600 hover:text-pink-600 transition-colors duration-200 w-16 h-14 rounded-lg hover:bg-zinc-100 focus:outline-none focus:bg-zinc-100 focus:ring-2 focus:ring-pink-500">
                        <tool.icon className="w-6 h-6" />
                        <span className="text-xs mt-1 font-semibold">{tool.name}</span>
                    </button>
                ))}
            </div>
            
            <div className="w-px h-10 bg-zinc-200" aria-hidden="true"></div>

            <button 
              onClick={onAdd}
              className="w-12 h-12 flex-shrink-0 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center hover:bg-pink-200 transition-colors duration-200 ml-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              aria-label="Add another photo"
            >
                <PlusIcon className="w-6 h-6" />
            </button>
        </div>
    );
};


interface ResultsPageProps {
  style: ArtStyle;
  images: string[];
}

const ResultsPage: React.FC<ResultsPageProps> = ({ style, images }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold font-heading text-zinc-800">Your Pet Portrait Gallery!</h2>
        <p className="mt-2 text-zinc-600">Here are four unique creations in the "{style.name}" style.</p>
      </div>

      <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
        {images.map((image, index) => (
          <div key={index} className="bg-black p-2 rounded-lg shadow-xl aspect-square">
            <img
              src={image}
              alt={`Generated portrait of your pet in ${style.name} style, version ${index + 1}`}
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsPage;
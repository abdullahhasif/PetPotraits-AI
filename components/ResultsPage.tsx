import React from 'react';
import type { ArtStyle } from '../types';
import { ImageIcon, SparklesIcon } from './icons';

interface ResultsPageProps {
  style: ArtStyle;
  images: string[];
  onUseDifferentPhoto: () => void;
  onPickNewStyle: () => void;
}

const ResultsPage: React.FC<ResultsPageProps> = ({ style, images, onUseDifferentPhoto, onPickNewStyle }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold font-heading text-zinc-800">Your Pet Portrait Gallery!</h2>
          <p className="mt-2 text-zinc-600">Here are four unique creations in the "{style.name}" style.</p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4">
          {images.map((image, index) => (
            <div key={index} className="bg-black p-1.5 rounded-md shadow-lg">
              <img
                src={image}
                alt={`Generated portrait of your pet in ${style.name} style, version ${index + 1}`}
                className="w-full aspect-square object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={onUseDifferentPhoto}
            className="w-full flex items-center justify-center px-4 py-3 bg-zinc-100 text-zinc-800 font-semibold rounded-lg hover:bg-zinc-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-400 order-2 sm:order-1"
          >
            <ImageIcon className="w-5 h-5 mr-2" />
            Use a Different Photo
          </button>
          <button
            onClick={onPickNewStyle}
            className="w-full flex items-center justify-center px-4 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 order-1 sm:order-2"
          >
            <SparklesIcon className="w-5 h-5 mr-2" />
            Pick a New Style
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;

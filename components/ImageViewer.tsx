import React, { useEffect } from 'react';
import { CloseIcon } from './icons';

interface ImageViewerProps {
  imageUrl: string | null;
  onClose: () => void;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ imageUrl, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!imageUrl) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image Viewer"
    >
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <img
          src={imageUrl}
          alt="Generated pet portrait full size"
          className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
        />
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 h-10 w-10 bg-white rounded-full flex items-center justify-center text-stone-800 hover:bg-rose-100 hover:text-rose-600 transition-all focus:outline-none focus:ring-2 focus:ring-rose-500"
          aria-label="Close image viewer"
        >
          <CloseIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default ImageViewer;
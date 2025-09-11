
import React, { useState, useRef, useEffect } from 'react';
import type { ArtStyle } from '../types';
import { generatePetPortraits } from '../services/geminiService';
import Loader from './Loader';
import { CloseIcon, PlusIcon, TrashIcon } from './icons';

interface CreationFlowProps {
  style: ArtStyle;
  onClose: () => void;
  onCreationComplete: (images: string[]) => void;
}

type Step = 'upload' | 'loading' | 'error';

const CreationFlow: React.FC<CreationFlowProps> = ({ style, onClose, onCreationComplete }) => {
  const [step, setStep] = useState<Step>('upload');
  const [userImageFile, setUserImageFile] = useState<File | null>(null);
  const [userImagePreview, setUserImagePreview] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUserImageFile(file);
      setUserImagePreview(URL.createObjectURL(file));
    }
  };

  const handleImageDelete = () => {
    setUserImageFile(null);
    setUserImagePreview(null);
    if (fileInputRef.current) {
        fileInputRef.current.value = '';
    }
  };

  const handleGenerate = async () => {
    if (!userImageFile) return;

    setStep('loading');
    try {
      const results = await generatePetPortraits(userImageFile, style.prompt);
      onCreationComplete(results.map(result => `data:image/png;base64,${result}`));
    } catch (error) {
      console.error(error);
      const message = error instanceof Error ? error.message : "An unknown error occurred.";
      setErrorMessage(message);
      setStep('error');
    }
  };
  
  const reset = () => {
    setUserImageFile(null);
    setUserImagePreview(null);
    setErrorMessage('');
    setStep('upload');
  }

  const renderUploadStep = () => (
    <div className="text-center">
      <h2 id="modal-title" className="text-2xl font-bold font-heading text-zinc-800">{style.name}</h2>
      
      {!userImagePreview ? (
        <>
            <p className="mt-2 text-zinc-600">Upload a clear, well-lit photo of your pet for the best results.</p>
            <button
                onClick={() => fileInputRef.current?.click()}
                className="mt-8 w-full h-64 border-2 border-dashed border-zinc-300 rounded-2xl flex flex-col items-center justify-center text-zinc-500 hover:border-orange-400 hover:text-orange-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                    <PlusIcon className="w-8 h-8 text-orange-600" />
                </div>
                <span className="mt-4 font-semibold">Upload Pet Photo</span>
            </button>
        </>
      ) : (
        <div className="mt-6">
            <div className="relative inline-block">
                <img 
                    src={userImagePreview} 
                    alt="Your pet" 
                    className="w-full max-w-sm mx-auto aspect-square object-cover rounded-2xl shadow-md"
                />
                <button 
                    onClick={handleImageDelete}
                    className="absolute -top-2 -right-2 h-9 w-9 bg-zinc-800/70 rounded-full flex items-center justify-center text-white hover:bg-zinc-900 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900 ring-offset-white"
                    aria-label="Remove image"
                >
                    <TrashIcon className="h-5 w-5" />
                </button>
            </div>
            <button
                onClick={handleGenerate}
                className="mt-6 w-full px-4 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
                Create
            </button>
        </div>
      )}

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/png, image/jpeg, image/webp"
      />
    </div>
  );

  const renderLoadingStep = () => (
    <div className="flex flex-col items-center justify-center p-8">
        <Loader />
    </div>
  );
  
  const renderErrorStep = () => (
    <div className="text-center">
        <h2 id="modal-title" className="text-2xl font-bold font-heading text-rose-700">Oops! Something went wrong.</h2>
        <p className="mt-4 text-zinc-600 bg-rose-50 p-4 rounded-lg">{errorMessage}</p>
        <button
            onClick={reset}
            className="mt-6 w-full px-4 py-3 bg-zinc-200 text-zinc-800 font-semibold rounded-lg hover:bg-zinc-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-400"
        >
            Try Again
        </button>
    </div>
  );

  const STEPS_CONTENT: Record<Step, React.ReactNode> = {
    upload: renderUploadStep(),
    loading: renderLoadingStep(),
    error: renderErrorStep(),
  };

  return (
    <div
      className="fixed inset-0 bg-zinc-900/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-lg transition-all duration-300 ease-in-out"
        onClick={(e) => e.stopPropagation()}
      >
        {STEPS_CONTENT[step]}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 h-9 w-9 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 transition-all focus:outline-none focus:ring-2 focus:ring-zinc-400"
          aria-label="Close"
        >
          <CloseIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default CreationFlow;
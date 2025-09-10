import React, { useState, useRef, useEffect } from 'react';
import type { ArtStyle } from '../types';
import { generatePetPortrait } from '../services/geminiService';
import Loader from './Loader';
import { CloseIcon, DownloadIcon, PlusIcon, SparklesIcon } from './icons';

interface CreationFlowProps {
  style: ArtStyle;
  onClose: () => void;
}

type Step = 'upload' | 'loading' | 'result' | 'error';

const CreationFlow: React.FC<CreationFlowProps> = ({ style, onClose }) => {
  const [step, setStep] = useState<Step>('upload');
  const [userImageFile, setUserImageFile] = useState<File | null>(null);
  const [userImagePreview, setUserImagePreview] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
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

  const handleFileSelect = (file: File) => {
    setUserImageFile(file);
    setUserImagePreview(URL.createObjectURL(file));
    handleGenerate(file);
  };
  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleGenerate = async (file: File) => {
    setStep('loading');
    try {
      const result = await generatePetPortrait(file, style.prompt);
      setGeneratedImage(`data:image/png;base64,${result}`);
      setStep('result');
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
    setGeneratedImage(null);
    setErrorMessage('');
    setStep('upload');
  }

  const renderUploadStep = () => (
    <div className="text-center">
      <h2 id="modal-title" className="text-2xl font-bold font-heading text-zinc-800">{style.name}</h2>
      <p className="mt-2 text-zinc-600">Upload a clear, well-lit photo of your pet for the best results.</p>
      <button
        onClick={() => fileInputRef.current?.click()}
        className="mt-8 w-full h-64 border-2 border-dashed border-zinc-300 rounded-2xl flex flex-col items-center justify-center text-zinc-500 hover:border-pink-400 hover:text-pink-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
      >
        <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
            <PlusIcon className="w-8 h-8 text-pink-600" />
        </div>
        <span className="mt-4 font-semibold">Upload Pet Photo</span>
      </button>
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

  const renderResultStep = () => (
    <div>
        <h2 id="modal-title" className="text-2xl font-bold font-heading text-zinc-800 text-center">It's a masterpiece!</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col items-center">
                <p className="font-semibold text-zinc-600 mb-2">Original</p>
                <img src={userImagePreview!} alt="Your pet" className="w-full aspect-square object-cover rounded-xl shadow-md"/>
            </div>
            <div className="flex flex-col items-center">
                <p className="font-semibold text-pink-700 mb-2">{style.name}</p>
                <img src={generatedImage!} alt={`Your pet in ${style.name} style`} className="w-full aspect-square object-cover rounded-xl shadow-md"/>
            </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
                href={generatedImage!}
                download={`myportrait_${style.id}.png`}
                className="w-full flex items-center justify-center px-4 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
                <DownloadIcon className="w-5 h-5 mr-2" />
                Download
            </a>
            <button
                onClick={reset}
                className="w-full flex items-center justify-center px-4 py-3 bg-zinc-200 text-zinc-800 font-semibold rounded-lg hover:bg-zinc-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-400"
            >
                <SparklesIcon className="w-5 h-5 mr-2" />
                Create Another
            </button>
        </div>
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
    result: renderResultStep(),
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
        className="relative bg-white rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-lg"
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
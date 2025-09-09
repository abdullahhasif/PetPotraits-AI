
import React, { useState, useCallback, useRef } from 'react';
import { ART_STYLES } from './constants';
import { generatePetPortrait } from './services/geminiService';
import Loader from './components/Loader';
import { UploadIcon, PawIcon, SparklesIcon } from './components/icons';

const App: React.FC = () => {
    const [originalImage, setOriginalImage] = useState<File | null>(null);
    const [originalImagePreview, setOriginalImagePreview] = useState<string | null>(null);
    const [generatedImage, setGeneratedImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [selectedStyleId, setSelectedStyleId] = useState<string>(ART_STYLES[0].id);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            resetApp();
            setOriginalImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setOriginalImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleGenerate = useCallback(async () => {
        if (!originalImage) return;

        setIsLoading(true);
        setError(null);
        setGeneratedImage(null);

        try {
            const selectedStyle = ART_STYLES.find(s => s.id === selectedStyleId);
            if (!selectedStyle) throw new Error("Please select a valid style.");
            const result = await generatePetPortrait(originalImage, selectedStyle.prompt);
            setGeneratedImage(`data:image/png;base64,${result}`);
        } catch (err) {
            console.error(err);
            setError(err instanceof Error ? err.message : "An unknown error occurred.");
        } finally {
            setIsLoading(false);
        }
    }, [originalImage, selectedStyleId]);

    const resetApp = () => {
        setOriginalImage(null);
        setOriginalImagePreview(null);
        setGeneratedImage(null);
        setError(null);
        setIsLoading(false);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const ImageDisplay: React.FC = () => (
        <div className="w-full aspect-square bg-stone-200 rounded-3xl flex items-center justify-center overflow-hidden relative shadow-inner">
            {originalImagePreview && !generatedImage && (
                <img src={originalImagePreview} alt="Your pet" className="w-full h-full object-cover" />
            )}
            {generatedImage && (
                <img src={generatedImage} alt="Generated pawtrait" className="w-full h-full object-cover" />
            )}
            {!originalImagePreview && !generatedImage && (
                <div className="text-center text-stone-500">
                    <PawIcon className="h-16 w-16 mx-auto" />
                    <p className="mt-2 font-semibold">Your pet's portrait will appear here</p>
                </div>
            )}
            {isLoading && (
                 <div className="absolute inset-0 bg-white/80 backdrop-blur-md flex items-center justify-center z-10">
                    <Loader />
                </div>
            )}
        </div>
    );

    return (
        <div className="min-h-screen bg-stone-50 text-stone-800 flex flex-col">
            <input type="file" accept="image/*" ref={fileInputRef} onChange={handleImageChange} className="hidden" />
            <header className="bg-stone-50/80 backdrop-blur-sm sticky top-0 z-20 border-b border-stone-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-center">
                    <PawIcon className="h-8 w-8 text-rose-600 mr-3" />
                    <h1 className="text-3xl font-bold text-stone-900 tracking-tight font-heading">PetPortraits AI</h1>
                </div>
            </header>
            <main className="w-full flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left Column: Controls */}
                    <div className="flex flex-col space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold text-stone-900 font-heading">Create Your Masterpiece</h2>
                            <p className="text-stone-600 mt-1">Follow these simple steps to generate a unique portrait of your pet.</p>
                        </div>

                        {error && (
                            <div className="text-center text-rose-800 p-4 bg-rose-100 border border-rose-200 rounded-lg">
                                <strong>Oops!</strong><p>{error}</p>
                            </div>
                        )}

                        {/* Step 1: Upload */}
                        <div className="bg-white p-6 rounded-3xl shadow-lg">
                            <label className="text-lg font-semibold text-stone-800">Step 1: Upload a Photo</label>
                            <p className="text-sm text-stone-500 mb-4">Choose a clear, high-quality photo of your pet.</p>
                            <button
                                onClick={() => fileInputRef.current?.click()}
                                className="w-full px-6 py-3 text-md font-semibold text-white bg-stone-800 rounded-lg shadow-md hover:bg-stone-900 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 flex items-center justify-center gap-2"
                            >
                                <UploadIcon className="h-5 w-5" />
                                {originalImage ? 'Change Photo' : 'Choose Photo'}
                            </button>
                             {originalImage && <p className="text-sm text-stone-600 mt-3 text-center truncate">Selected: {originalImage.name}</p>}
                        </div>

                        {/* Step 2: Style */}
                        <div className="bg-white p-6 rounded-3xl shadow-lg">
                            <label htmlFor="style-select" className="text-lg font-semibold text-stone-800">Step 2: Choose a Style</label>
                            <p className="text-sm text-stone-500 mb-4">Pick an artistic style for the portrait.</p>
                            <select
                                id="style-select"
                                value={selectedStyleId}
                                onChange={e => setSelectedStyleId(e.target.value)}
                                className="w-full p-3 border border-stone-300 rounded-lg bg-stone-50 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition"
                                disabled={!originalImage}
                            >
                                {ART_STYLES.map(style => (
                                    <option key={style.id} value={style.id}>{style.name}</option>
                                ))}
                            </select>
                        </div>
                        
                        {/* Step 3: Generate */}
                        <div className="flex flex-col space-y-3 pt-2">
                             <button
                                onClick={handleGenerate}
                                disabled={!originalImage || isLoading}
                                className="w-full px-8 py-4 text-xl font-bold text-white bg-rose-500 rounded-xl shadow-lg hover:bg-rose-600 transition-all disabled:bg-stone-400 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                            >
                                <SparklesIcon className="h-6 w-6"/>
                                {isLoading ? 'Generating...' : 'Generate Portrait'}
                            </button>
                            {(originalImage || generatedImage) && (
                                <button onClick={resetApp} className="text-stone-500 hover:text-stone-800 font-semibold text-sm">
                                    Start Over
                                </button>
                            )}
                        </div>

                    </div>

                    {/* Right Column: Image Display */}
                    <div className="flex flex-col items-center justify-center">
                        <ImageDisplay />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default App;

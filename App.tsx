import React, { useState } from 'react';
import { ART_STYLES } from './constants';
import StyleCard from './components/StyleCard';
import CreationFlow from './components/CreationFlow';
import type { ArtStyle } from './types';
import ResultsPage from './components/ResultsPage';

type View = 'home' | 'results';

const App: React.FC = () => {
    const [activeStyle, setActiveStyle] = useState<ArtStyle | null>(null);
    const [view, setView] = useState<View>('home');
    const [generatedImages, setGeneratedImages] = useState<string[] | null>(null);
    const [creationStyle, setCreationStyle] = useState<ArtStyle | null>(null);

    const handleCreationComplete = (images: string[]) => {
        if (activeStyle) {
            setGeneratedImages(images);
            setCreationStyle(activeStyle);
            setActiveStyle(null);
            setView('results');
        }
    };

    const handlePickNewStyle = () => {
        setView('home');
        setGeneratedImages(null);
        setCreationStyle(null);
    };

    const handleUseDifferentPhoto = () => {
        if (creationStyle) {
            setView('home');
            setGeneratedImages(null);
            // This re-opens the creation flow for the same style
            setActiveStyle(creationStyle); 
            setCreationStyle(null);
        }
    };

    return (
        <div className="min-h-screen bg-[#FDFCFB] text-zinc-800">
            <header className="sticky top-0 bg-[#FDFCFB]/80 backdrop-blur-sm z-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-center">
                    <h1 className="text-xl font-bold text-zinc-900 tracking-tight font-heading">myportraits.ai</h1>
                </div>
            </header>

            <main>
                {view === 'home' && (
                    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
                        <div className="text-center mb-10 md:mb-16">
                            <h2 className="text-4xl lg:text-5xl font-bold font-heading text-zinc-900">Creative Portraits</h2>
                            <p className="mt-3 text-lg text-zinc-600 max-w-2xl mx-auto">Get inspired by what's possible with AI and turn your pet into a work of art.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                            {ART_STYLES.map((style) => (
                                <StyleCard key={style.id} style={style} onCreate={setActiveStyle} />
                            ))}
                        </div>
                    </div>
                )}
                {view === 'results' && generatedImages && creationStyle && (
                    <ResultsPage 
                        images={generatedImages}
                        style={creationStyle}
                        onPickNewStyle={handlePickNewStyle}
                        onUseDifferentPhoto={handleUseDifferentPhoto}
                    />
                )}
            </main>
            
            <footer className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16 text-center text-zinc-500 border-t border-zinc-200">
                <p>&copy; {new Date().getFullYear()} myportraits.ai - All Rights Reserved.</p>
            </footer>

            {activeStyle && (
                <CreationFlow 
                    style={activeStyle} 
                    onClose={() => setActiveStyle(null)} 
                    onCreationComplete={handleCreationComplete}
                />
            )}
        </div>
    );
};

export default App;

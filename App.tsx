
import React, { useState, useEffect, useRef } from 'react';
import { ART_STYLES, SIZES, EFFECTS, FRAMES } from './constants';
import StyleCard from './components/StyleCard';
import CreationFlow from './components/CreationFlow';
import type { ArtStyle, BorderSettings, ArtEffect, FrameStyle, ProductSize, CartItem } from './types';
import ResultsPage from './components/ResultsPage';
import EditingToolbar from './components/EditingToolbar';
import SizeSelector from './components/SizeSelector';
import BorderSelector from './components/BorderSelector';
import EffectSelector from './components/EffectSelector';
import FrameSelector from './components/FrameSelector';
import Cart from './components/Cart';
import Toast from './components/Toast';
import ConfirmationModal from './components/ConfirmationModal';
import { MenuIcon, ShoppingCartIcon, ExclamationTriangleIcon } from './components/icons';

type View = 'home' | 'results';

const parsePrice = (priceString: string | undefined | null): number => {
    if (!priceString) return 0;
    const match = priceString.match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
};

const App: React.FC = () => {
    const [activeStyle, setActiveStyle] = useState<ArtStyle | null>(null);
    const [view, setView] = useState<View>('home');
    const [generatedImages, setGeneratedImages] = useState<string[] | null>(null);
    const [creationStyle, setCreationStyle] = useState<ArtStyle | null>(null);
    const [isSizeSelectorOpen, setIsSizeSelectorOpen] = useState(false);
    const [isBorderSelectorOpen, setIsBorderSelectorOpen] = useState(false);
    const [isEffectSelectorOpen, setIsEffectSelectorOpen] = useState(false);
    const [isFrameSelectorOpen, setIsFrameSelectorOpen] = useState(false);
    const [selectedProductSize, setSelectedProductSize] = useState<ProductSize>(SIZES[5]); // Default to 50x50
    const [selectedBorder, setSelectedBorder] = useState<BorderSettings>({ width: 'none', color: '#FFFFFF' });
    const [selectedEffect, setSelectedEffect] = useState<ArtEffect>(EFFECTS[0]);
    const [selectedFrame, setSelectedFrame] = useState<FrameStyle>(FRAMES[1]); // Default to Black
    
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState<string | null>(null);
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
    const [isAddToCartConfirmOpen, setIsAddToCartConfirmOpen] = useState(false);
    const [pendingCartImage, setPendingCartImage] = useState<string | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    const handleCreationComplete = (images: string[]) => {
        if (activeStyle) {
            setGeneratedImages(images);
            setCreationStyle(activeStyle);
            setActiveStyle(null);
            setView('results');
        }
    };

    const handleGoHome = () => {
        setView('home');
        setGeneratedImages(null);
        setCreationStyle(null);
        setActiveStyle(null);
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

    const handleConfirmStartOver = () => {
        handleUseDifferentPhoto();
        setIsConfirmModalOpen(false);
    };

    const handleSizeSelect = (size: ProductSize) => {
        setSelectedProductSize(size);
        setIsSizeSelectorOpen(false);
    };

    const handleBorderSelect = (border: BorderSettings) => {
        setSelectedBorder(border);
        setIsBorderSelectorOpen(false);
    }

    const handleEffectSelect = (effect: ArtEffect) => {
        setSelectedEffect(effect);
        setIsEffectSelectorOpen(false);
    }

    const handleFrameSelect = (frame: FrameStyle) => {
        setSelectedFrame(frame);
        setIsFrameSelectorOpen(false);
    };

    const handleToolClick = (toolId: string) => {
        switch (toolId) {
            case 'Size':
                setIsSizeSelectorOpen(true);
                break;
            case 'Border':
                setIsBorderSelectorOpen(true);
                break;
            case 'Effect':
                setIsEffectSelectorOpen(true);
                break;
            case 'Frame':
                setIsFrameSelectorOpen(true);
                break;
            case 'Add':
                setIsConfirmModalOpen(true);
                break;
            default:
                console.log(`${toolId} tool clicked`);
        }
    };

    const calculateCurrentPrice = () => {
        const sizePrice = parsePrice(selectedProductSize.price);
        const framePrice = parsePrice(selectedFrame.price);
        return sizePrice + framePrice;
    };

    const handleRequestAddToCart = (image: string) => {
        setPendingCartImage(image);
        setIsAddToCartConfirmOpen(true);
    };
    
    const handleConfirmAddToCart = () => {
        if (!pendingCartImage || !creationStyle) return;
    
        const itemPrice = calculateCurrentPrice();
    
        const newItem: CartItem = {
            id: `${Date.now()}-${Math.random()}`,
            image: pendingCartImage,
            styleName: creationStyle.name,
            size: selectedProductSize,
            frame: selectedFrame,
            border: selectedBorder,
            effect: selectedEffect,
            price: itemPrice,
        };
        setCartItems(prevItems => [...prevItems, newItem]);
        
        setIsAddToCartConfirmOpen(false);
        setPendingCartImage(null);
    
        setToastMessage('Added to your cart!');
        setTimeout(() => setToastMessage(null), 3000);
    };

    const handleCancelAddToCart = () => {
        setIsAddToCartConfirmOpen(false);
        setPendingCartImage(null);
    };

    const handleRemoveFromCart = (itemId: string) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
    };

    return (
        <div className="min-h-screen bg-[#FDFCFB] text-zinc-800 flex flex-col">
            <header className="sticky top-0 bg-[#FDFCFB]/80 backdrop-blur-sm z-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                    <button onClick={handleGoHome} className="text-xl font-bold text-zinc-900 tracking-tight font-heading focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-md px-1">
                        myportraits.ai
                    </button>
                    
                    <div className="flex items-center gap-2">
                        <div className="relative" ref={menuRef}>
                            <button 
                                onClick={() => setIsMenuOpen(prev => !prev)}
                                className="p-2 rounded-full hover:bg-zinc-100 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
                                aria-label="Open menu"
                                aria-haspopup="true"
                                aria-expanded={isMenuOpen}
                            >
                                <MenuIcon className="h-6 w-6 text-zinc-700" />
                            </button>
                            {isMenuOpen && (
                                 <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 z-30">
                                    <div className="py-2">
                                        <button 
                                            onClick={() => { setIsMenuOpen(false); setIsCartOpen(true); }}
                                            className="w-full text-left px-4 py-2.5 text-sm text-zinc-700 hover:bg-zinc-100 flex items-center justify-between transition-colors"
                                        >
                                            <span className="font-semibold">My Cart</span>
                                            <div className="relative">
                                                <ShoppingCartIcon className="h-5 w-5 text-zinc-600" />
                                                {cartItems.length > 0 && (
                                                    <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-orange-600 text-xs font-bold text-white">
                                                        {cartItems.length}
                                                    </span>
                                                )}
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex-grow">
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
                        selectedSize={selectedProductSize}
                        selectedBorder={selectedBorder}
                        selectedEffect={selectedEffect}
                        selectedFrame={selectedFrame}
                        onAddToCart={handleRequestAddToCart}
                    />
                )}
            </main>
            
            {view === 'results' && (
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-center">
                    <EditingToolbar onToolClick={handleToolClick} currentPrice={calculateCurrentPrice()} />
                </div>
            )}

            <footer className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-zinc-500 border-t border-zinc-200">
                <p>&copy; {new Date().getFullYear()} myportraits.ai - All Rights Reserved.</p>
            </footer>

            {activeStyle && (
                <CreationFlow 
                    style={activeStyle} 
                    onClose={() => setActiveStyle(null)} 
                    onCreationComplete={handleCreationComplete}
                />
            )}

            {isCartOpen && (
                <Cart 
                    items={cartItems}
                    onClose={() => setIsCartOpen(false)}
                    onRemoveItem={handleRemoveFromCart}
                />
            )}

            {isSizeSelectorOpen && (
                <SizeSelector 
                    onClose={() => setIsSizeSelectorOpen(false)}
                    onSelect={handleSizeSelect}
                    initialSize={selectedProductSize}
                />
            )}

            {isBorderSelectorOpen && (
                <BorderSelector 
                    onClose={() => setIsBorderSelectorOpen(false)}
                    onSelect={handleBorderSelect}
                    initialBorder={selectedBorder}
                    previewImage={generatedImages?.[0]}
                />
            )}

            {isEffectSelectorOpen && (
                <EffectSelector
                    onClose={() => setIsEffectSelectorOpen(false)}
                    onSelect={handleEffectSelect}
                    initialEffect={selectedEffect}
                    previewImage={generatedImages?.[0]}
                />
            )}

            {isFrameSelectorOpen && (
                <FrameSelector
                    onClose={() => setIsFrameSelectorOpen(false)}
                    onSelect={handleFrameSelect}
                    initialFrame={selectedFrame}
                />
            )}

            {toastMessage && <Toast message={toastMessage} />}

            {isConfirmModalOpen && (
                <ConfirmationModal
                    title="Start with a new photo?"
                    message="Your current generated portraits will be lost. Are you sure you want to continue?"
                    onConfirm={handleConfirmStartOver}
                    onCancel={() => setIsConfirmModalOpen(false)}
                    confirmText="Start Over"
                    icon={<ExclamationTriangleIcon className="h-7 w-7 text-orange-600" />}
                />
            )}

            {isAddToCartConfirmOpen && (
                <ConfirmationModal
                    title="Add Portrait to Cart?"
                    message="This will add the selected portrait with your current customizations (size, frame, etc.) to your shopping cart."
                    onConfirm={handleConfirmAddToCart}
                    onCancel={handleCancelAddToCart}
                    confirmText="Add to Cart"
                    icon={<ShoppingCartIcon className="h-7 w-7 text-orange-600" />}
                />
            )}
        </div>
    );
};

export default App;

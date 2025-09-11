import React, { useState, useEffect } from 'react';
import type { CartItem } from '../types';
import { BORDER_WIDTHS } from '../constants';
import { CloseIcon, TrashIcon } from './icons';

interface CartProps {
  items: CartItem[];
  onClose: () => void;
  onRemoveItem: (itemId: string) => void;
}

const Cart: React.FC<CartProps> = ({ items, onClose, onRemoveItem }) => {
    const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Animate in
        const timer = setTimeout(() => setIsVisible(true), 10);
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        // Wait for animation to finish before calling parent onClose
        setTimeout(onClose, 300);
    };

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
          if (event.key === 'Escape') {
            handleClose();
          }
        };
        window.addEventListener('keydown', handleEsc);
    
        return () => {
          window.removeEventListener('keydown', handleEsc);
        };
      }, []);

    return (
        <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-labelledby="cart-title">
            {/* Backdrop */}
            <div 
                className={`absolute inset-0 bg-zinc-900/50 backdrop-blur-sm transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                onClick={handleClose}
            ></div>

            {/* Cart Panel */}
            <div className={`absolute inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-6 flex items-center justify-between border-b border-zinc-200">
                    <h2 id="cart-title" className="text-2xl font-bold font-heading text-zinc-800">Your Cart</h2>
                    <button 
                        onClick={handleClose}
                        className="p-2 rounded-full text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
                        aria-label="Close cart"
                    >
                        <CloseIcon className="w-6 h-6" />
                    </button>
                </div>

                {items.length === 0 ? (
                    <div className="flex-grow flex flex-col items-center justify-center text-center p-8">
                        <p className="text-lg text-zinc-600">Your cart is empty.</p>
                        <button onClick={handleClose} className="mt-4 text-orange-600 font-semibold hover:underline">Continue Shopping</button>
                    </div>
                ) : (
                    <>
                        <div className="flex-grow overflow-y-auto p-6 space-y-6">
                            {items.map(item => (
                                <div key={item.id} className="flex items-start gap-4">
                                    <div 
                                        className="w-24 h-24 flex-shrink-0 rounded-md shadow-md"
                                        style={item.frame.style}
                                    >
                                        <div
                                            className="w-full h-full"
                                            style={{
                                                backgroundColor: item.border.width !== 'none' ? item.border.color : 'transparent',
                                                padding: BORDER_WIDTHS.find(b => b.id === item.border.width)?.padding || '0',
                                            }}
                                        >
                                            <img src={item.image} alt={`Portrait in ${item.styleName} style`} className="w-full h-full object-cover rounded-sm" style={item.effect.style} />
                                        </div>
                                    </div>
                                    <div className="flex-grow">
                                        <p className="font-bold text-zinc-800">{item.styleName}</p>
                                        <p className="text-sm text-zinc-500">{item.size.label} &bull; {item.frame.name}</p>
                                        <p className="text-sm font-bold text-zinc-800 mt-2">US${item.price}</p>
                                    </div>
                                    <button 
                                        onClick={() => onRemoveItem(item.id)}
                                        className="p-2 text-zinc-400 hover:text-rose-600 transition-colors"
                                        aria-label={`Remove ${item.styleName} from cart`}
                                    >
                                        <TrashIcon className="w-5 h-5" />
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="p-6 border-t border-zinc-200 bg-zinc-50">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-lg font-semibold text-zinc-800">Total</span>
                                <span className="text-2xl font-bold text-zinc-900">US${totalPrice}</span>
                            </div>
                            <button className="w-full bg-orange-600 text-white font-bold py-3 rounded-xl hover:bg-orange-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                                Proceed to Checkout
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
export default Cart;

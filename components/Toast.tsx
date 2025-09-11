
import React, { useState, useEffect } from 'react';
import { CheckCircleIcon } from './icons';

interface ToastProps {
  message: string;
}

const Toast: React.FC<ToastProps> = ({ message }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true); // Trigger animation on mount
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, [message]);

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-6 py-3 bg-zinc-800 text-white rounded-full shadow-lg transition-all duration-300 ease-in-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
    >
      <CheckCircleIcon className="w-6 h-6 text-green-400" />
      <span className="font-semibold">{message}</span>
    </div>
  );
};

export default Toast;

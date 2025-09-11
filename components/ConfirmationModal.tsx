
import React, { useEffect, ReactNode } from 'react';

interface ConfirmationModalProps {
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmText?: string;
  cancelText?: string;
  icon?: ReactNode;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ title, message, onConfirm, onCancel, confirmText = 'Confirm', cancelText = 'Cancel', icon }) => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
          if (event.key === 'Escape') {
            onCancel();
          }
        };
        window.addEventListener('keydown', handleEsc);
    
        return () => {
          window.removeEventListener('keydown', handleEsc);
        };
    }, [onCancel]);
    
  return (
    <div
      className="fixed inset-0 bg-zinc-900/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onCancel}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8 text-center">
            {icon && (
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 mb-5">
                    {icon}
                </div>
            )}
            <h3 className="text-xl font-bold font-heading text-zinc-900" id="modal-title">
                {title}
            </h3>
            <div className="mt-3">
                <p className="text-md text-zinc-600" id="modal-description">
                    {message}
                </p>
            </div>
        </div>
        
        <div className="px-6 pb-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-center">
          <button
            type="button"
            className="w-full justify-center rounded-lg px-6 py-3 text-base font-semibold text-zinc-800 shadow-sm ring-1 ring-inset ring-zinc-300 hover:bg-zinc-50 transition-colors"
            onClick={onCancel}
          >
            {cancelText}
          </button>
          <button
            type="button"
            className="w-full justify-center rounded-lg bg-orange-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-orange-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            onClick={onConfirm}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;

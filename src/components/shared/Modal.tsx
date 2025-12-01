import React, { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, className = '' }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;
  
  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-75 z-50"
        onClick={onClose}
      />
      <div className="fixed inset-0 flex items-center justify-center z-51 p-4">
        <div
          className={`bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-800 ${className}`}
          onClick={(e) => e.stopPropagation()}
        >
              {title && (
                <div className="flex items-center justify-between p-6 border-b border-gray-800">
                  <h2 className="text-2xl font-bold text-white">{title}</h2>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-white transition-colors p-2 text-3xl font-bold leading-none"
                    aria-label="Close modal"
                  >
                    ×
                  </button>
                </div>
              )}
              <div className="p-6">
                {children}
              </div>
            </div>
          </div>
    </>
  );
};

export default Modal;
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    message: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, message }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="bg-black border-2 border-red-600 w-full max-w-md pointer-events-auto relative overflow-hidden shadow-[0_0_50px_rgba(220,38,38,0.5)]">
                            {/* Decorative Corner Accents */}
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-white"></div>
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-white"></div>

                            {/* Header */}
                            <div className="bg-gradient-to-r from-red-600 to-red-900 p-4 border-b border-red-500 flex justify-between items-center">
                                <h3 className="text-xl font-black italic uppercase text-white tracking-wider">
                                    {title}
                                </h3>
                                <button
                                    onClick={onClose}
                                    className="text-white hover:text-black transition-colors font-bold text-xl"
                                >
                                    ✕
                                </button>
                            </div>

                            {/* Body */}
                            <div className="p-8 text-center">
                                <p className="text-gray-300 text-lg leading-relaxed font-medium">
                                    {message}
                                </p>

                                <button
                                    onClick={onClose}
                                    className="mt-8 px-8 py-3 bg-red-600 hover:bg-red-500 text-white font-bold uppercase tracking-widest transition-all hover:shadow-[0_0_20px_rgba(220,38,38,0.6)]"
                                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)' }}
                                >
                                    Close
                                </button>
                            </div>

                            {/* Background Texture */}
                            <div className="absolute inset-0 z-[-1] opacity-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#ff0000_10px,#ff0000_11px)]"></div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default Modal;

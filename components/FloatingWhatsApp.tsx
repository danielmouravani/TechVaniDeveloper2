import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  
  const whatsappLink = "https://wa.me/5521970690315?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site%20e%20tenho%20interesse%20em%20desenvolver%20um%20site%20ou%20aplicativo";

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20, x: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20, x: 20 }}
            className="glass-card p-6 rounded-[2rem] rounded-br-lg max-w-[280px] shadow-2xl border border-white/10 relative"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-slate-500 hover:text-white transition-colors"
              aria-label="Fechar"
            >
              <X size={16} />
            </button>
            <div className="flex flex-col gap-2">
              <span className="text-lg font-bold text-white flex items-center gap-2">
                Olá! <span className="animate-bounce">👋</span>
              </span>
              <p className="text-slate-400 text-sm leading-relaxed">
                Tem um projeto em mente? <br/>
                <span className="text-primary-400 font-bold">Vamos conversar no WhatsApp!</span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 12 }}
        whileTap={{ scale: 0.9 }}
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-black shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-primary-500/50 transition-all duration-300 z-50 relative group"
        onClick={() => setIsOpen(false)}
      >
        <MessageCircle size={32} className="group-hover:text-primary-500 transition-colors" />
        
        {/* Ping animation */}
        <span className="absolute inset-0 rounded-full bg-white opacity-20 animate-ping -z-10"></span>
      </motion.a>
    </div>
  );
};

export default FloatingWhatsApp;

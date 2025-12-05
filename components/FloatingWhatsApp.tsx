import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  
  const whatsappLink = "https://wa.me/5521970690315?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site%20e%20tenho%20interesse%20em%20desenvolver%20um%20site%20ou%20aplicativo";

  useEffect(() => {
    // Show button after 2 seconds
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 animate-fade-in group">
        {/* Tooltip Bubble */}
        <div 
            className={`glass-card p-4 rounded-2xl rounded-br-sm max-w-[260px] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] border border-white/10 relative transition-all duration-300 origin-bottom-right transform ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-4 pointer-events-none'}`}
        >
            <button
                onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                className="absolute top-2 right-2 text-slate-400 hover:text-white transition-colors"
                aria-label="Fechar"
            >
                <X size={14} />
            </button>
            <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold text-white flex items-center gap-2">
                    Olá! <span className="text-lg">👋</span>
                </span>
                <p className="text-slate-300 text-sm leading-snug">
                    Tem um projeto em mente? <br/>
                    <span className="text-primary-400 font-medium">Me chame no WhatsApp!</span>
                </p>
            </div>
        </div>

        {/* Main Button */}
        <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 flex items-center justify-center text-white shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:shadow-[0_0_30px_rgba(14,165,233,0.6)] hover:scale-110 transition-all duration-300 z-50 relative group-hover:rotate-12"
            onClick={() => setIsOpen(false)}
        >
            <MessageCircle size={28} className="fill-white" />
            
            {/* Ping animation */}
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-20 animate-ping -z-10"></span>
        </a>
    </div>
  );
};

export default FloatingWhatsApp;
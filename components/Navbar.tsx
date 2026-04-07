
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const whatsappLink = "https://wa.me/5521970690315?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site%20e%20tenho%20interesse%20em%20desenvolver%20um%20site%20ou%20aplicativo";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Expertise', href: '#features' },
    { name: 'Diferencial', href: '#differential' },
    { name: 'Portfolio', href: '#portfolio' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-4' : 'py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative flex justify-between items-center px-6 py-3 rounded-full transition-all duration-500 ${
          isScrolled ? 'glass-nav shadow-2xl' : 'bg-transparent'
        }`}>
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-2xl font-display font-bold tracking-tighter text-white">
              Tech<span className="text-primary-400">Vani</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full bg-white text-black text-sm font-bold hover:bg-primary-500 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Falar comigo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 glass-nav border-t border-white/5 overflow-hidden"
          >
            <div className="px-6 py-12 space-y-8 flex flex-col items-center">
               {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-display font-bold text-white hover:text-primary-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center px-8 py-4 rounded-full bg-white text-black font-bold text-lg"
              >
                Falar comigo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020617] border-t border-white/5 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <span className="text-3xl font-display font-bold text-white tracking-tighter">
              Tech<span className="text-primary-400">Vani</span>
            </span>
            <p className="text-slate-500 max-w-xs text-center md:text-left font-light">
              Transformando visões em experiências digitais inesquecíveis.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="text-slate-400 text-sm font-light">
              © {new Date().getFullYear()} TechVani. Todos os direitos reservados.
            </div>
            <div className="text-slate-600 text-xs tracking-widest uppercase">
              Design Premium & Performance Máxima
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  const whatsappLink = "https://wa.me/5521970690315?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site%20e%20tenho%20interesse%20em%20desenvolver%20um%20site%20ou%20aplicativo";

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="glass-card rounded-3xl p-12 md:p-20 relative overflow-hidden border border-white/10 group hover:border-blue-500/30 transition-all duration-500">
          
          {/* Glow effect behind */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none group-hover:from-blue-900/20 transition-all duration-500"></div>

          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 relative z-10">
            Tem um projeto em mente? <br />
            <span className="text-blue-400 shadow-blue-500/50 drop-shadow-2xl">Vamos tirar ele do papel.</span>
          </h2>
          
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto relative z-10">
            Seja para criar um site do zero, renovar sua marca ou desenvolver uma aplicação complexa. Estou pronto para ajudar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-500 transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2 hover:-translate-y-1 w-full sm:w-auto"
            >
              Solicitar Orçamento
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
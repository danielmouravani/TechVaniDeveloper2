import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const whatsappLink = "https://wa.me/5521970690315?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site%20e%20tenho%20interesse%20em%20desenvolver%20um%20site%20ou%20aplicativo";

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-950/50 border border-blue-800/50 text-blue-300 text-sm font-medium mb-8 animate-float backdrop-blur-md">
          <Sparkles size={14} className="text-blue-400" />
          <span>Desenvolvimento Web & UI Design</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter mb-8 leading-[1.1]">
          Sua marca merece <br className="hidden md:block" />
          <span className="text-gradient">destaque absoluto</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Desenvolvo sites e interfaces que não apenas impressionam visualmente, mas transformam visitantes em clientes reais. Tecnologia de ponta para o seu negócio.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-bold text-lg shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_40px_rgba(14,165,233,0.5)] transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
          >
            Iniciar meu projeto
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#portfolio"
            className="w-full sm:w-auto px-8 py-4 rounded-xl glass-card text-white font-medium text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 border border-white/10"
          >
            Ver meu trabalho
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
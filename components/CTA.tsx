
import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquare } from 'lucide-react';

const CTA: React.FC = () => {
  const whatsappLink = "https://wa.me/5521970690315?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site%20e%20tenho%20interesse%20em%20desenvolver%20um%20site%20ou%20aplicativo";

  return (
    <section id="contact" className="py-24 lg:py-40 relative overflow-hidden bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card rounded-[3rem] p-12 md:p-24 relative overflow-hidden border border-white/10 group text-center"
        >
          {/* Animated background elements */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-600/20 via-transparent to-accent-600/20 pointer-events-none" 
          />

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-display font-bold text-white mb-8 relative z-10 leading-[1.1]"
          >
            Se for pra ter um site, <br />
            <span className="text-gradient">que seja inesquecível.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto relative z-10 font-light"
          >
            Estou pronto para transformar sua visão em uma experiência digital de alto impacto. Vamos conversar sobre o seu próximo grande projeto?
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center relative z-10"
          >
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 rounded-full bg-white text-black font-bold text-xl hover:bg-primary-500 hover:text-white transition-all duration-500 flex items-center justify-center gap-3 hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            >
              Falar comigo agora
              <MessageSquare size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-600/10 rounded-full blur-[160px] pointer-events-none" />
    </section>
  );
};

export default CTA;

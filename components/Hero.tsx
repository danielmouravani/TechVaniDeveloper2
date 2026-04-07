import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const whatsappLink = "https://wa.me/5521970690315?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site%20e%20tenho%20interesse%20em%20desenvolver%20um%20site%20ou%20aplicativo";
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const y = useTransform(smoothProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(smoothProgress, [0, 1], [1, 0.8]);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-[#020617]"
    >
      {/* Background Animation Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute inset-0 noise-bg" />
        
        {/* Animated Glows */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary-600/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -40, 0],
            y: [0, 60, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent-600/15 rounded-full blur-[100px]" 
        />
      </div>

      <motion.div 
        style={{ y, opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary-400 text-sm font-medium mb-8 backdrop-blur-md"
        >
          <Sparkles size={14} className="animate-pulse" />
          <span className="tracking-widest uppercase text-[10px]">Desenvolvimento Web Premium</span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter mb-8 leading-[0.95] text-white"
        >
          Não é só um site.<br/>
          <span className="text-gradient">É presença digital.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          Eu crio experiências digitais modernas, rápidas e visualmente marcantes que transformam marcas em referências.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a 
            href="#portfolio"
            className="w-full sm:w-auto px-10 py-5 rounded-full bg-white text-black font-bold text-lg hover:bg-primary-400 hover:text-white transition-all duration-500 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-primary-500/40"
          >
            Ver projetos
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-5 rounded-full glass-card text-white font-bold text-lg hover:bg-white/10 transition-all duration-500 flex items-center justify-center gap-2 border border-white/20"
          >
            Falar comigo
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Scroll para explorar</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

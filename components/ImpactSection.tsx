import React from 'react';
import { motion } from 'motion/react';

const ImpactSection: React.FC = () => {
  const phrases = [
    "Design que chama atenção.",
    "Experiência que prende.",
    "Sites que parecem marcas."
  ];

  return (
    <section className="py-24 lg:py-40 bg-[#020617] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:gap-20">
          {phrases.map((phrase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            >
              <h2 className="text-4xl md:text-6xl lg:text-8xl font-display font-bold tracking-tighter text-white/90 hover:text-white transition-colors duration-500 cursor-default">
                {phrase}
              </h2>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent -translate-y-1/2 pointer-events-none" />
    </section>
  );
};

export default ImpactSection;

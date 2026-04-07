import React from 'react';
import { motion } from 'motion/react';

const stats = [
  { value: "+300", suffix: "%", label: "Aumento médio em credibilidade para empresas com site profissional" },
  { value: "24", suffix: "h", label: "Seu negócio aberto vendendo para o mundo todo, sem pausas" },
  { value: "Mobile", suffix: "First", label: "Sites otimizados para onde 90% dos seus clientes estão: no celular" },
];

const Stats: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#020617] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
           <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
             O digital não é o futuro, <span className="text-gradient">é o agora.</span>
           </h3>
           <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
             Não ter um site profissional hoje é deixar dinheiro na mesa. Garanta sua presença online com o padrão que sua marca merece.
           </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-12 rounded-[2.5rem] text-center group hover:bg-white/5 transition-all duration-500 border border-white/10 hover:border-primary-500/30"
            >
              <div className="text-5xl md:text-6xl font-display font-bold text-primary-400 mb-6 group-hover:scale-110 transition-transform duration-500">
                {stat.value}<span className="text-white">{stat.suffix}</span>
              </div>
              <p className="text-slate-300 font-light leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background line */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
    </section>
  );
};

export default Stats;

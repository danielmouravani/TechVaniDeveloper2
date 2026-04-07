import React from 'react';
import { motion } from 'motion/react';
import { Target, Zap, Layout, Users } from 'lucide-react';

const Differential: React.FC = () => {
  const differentials = [
    {
      icon: <Layout className="w-8 h-8 text-primary-400" />,
      title: "Design Premium",
      description: "Não faço apenas sites, crio identidades visuais digitais que elevam o patamar do seu negócio."
    },
    {
      icon: <Zap className="w-8 h-8 text-accent-500" />,
      title: "Impacto Visual",
      description: "Interfaces pensadas para impressionar nos primeiros 3 segundos e manter o engajamento."
    },
    {
      icon: <Target className="w-8 h-8 text-primary-500" />,
      title: "Foco em Conversão",
      description: "Cada elemento é estrategicamente posicionado para guiar o usuário até a ação desejada."
    },
    {
      icon: <Users className="w-8 h-8 text-accent-600" />,
      title: "Experiência Única",
      description: "Navegação fluida e intuitiva que transforma a visita em uma jornada memorável."
    }
  ];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Não é apenas <span className="text-primary-400">código</span>.<br/>
            É <span className="text-gradient">estratégia digital</span>.
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Diferente de desenvolvedores comuns, meu foco está na intersecção entre arte, tecnologia e resultados de negócio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-3xl group hover:border-primary-500/30 transition-all duration-500"
            >
              <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 group-hover:bg-primary-500/10 transition-all duration-500">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-primary-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary-600/5 rounded-full blur-[80px] pointer-events-none" />
    </section>
  );
};

export default Differential;

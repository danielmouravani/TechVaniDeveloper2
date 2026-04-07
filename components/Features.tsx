import React from 'react';
import { motion } from 'motion/react';
import { Zap, Sparkles, TrendingUp, ShieldCheck, MonitorSmartphone, Rocket } from 'lucide-react';

const features = [
  {
    icon: <MonitorSmartphone className="text-primary-400" size={32} />,
    title: "100% Responsivo",
    description: "Seu site perfeito em qualquer dispositivo. Do celular ao desktop, a experiência do seu cliente será impecável."
  },
  {
    icon: <Zap className="text-accent-500" size={32} />,
    title: "Velocidade Extrema",
    description: "Ninguém gosta de sites lentos. Otimizo cada linha de código para garantir carregamento instantâneo."
  },
  {
    icon: <Sparkles className="text-primary-500" size={32} />,
    title: "Design Premium",
    description: "Visual moderno e 'High-Tech' que transmite autoridade imediata para sua marca ou empresa."
  },
  {
    icon: <TrendingUp className="text-accent-600" size={32} />,
    title: "Foco em Vendas",
    description: "Não é apenas beleza. Estruturo o site estrategicamente para converter visitantes em orçamentos e vendas."
  },
  {
    icon: <ShieldCheck className="text-primary-600" size={32} />,
    title: "Segurança Total",
    description: "Proteção de dados e estabilidade garantida. Seu site online 24 horas por dia, 7 dias por semana."
  },
  {
    icon: <Rocket className="text-accent-500" size={32} />,
    title: "Pronto para Crescer",
    description: "Tecnologia escalável. Comece hoje e tenha uma estrutura pronta para acompanhar o crescimento do seu negócio."
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 lg:py-40 relative bg-[#020617] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">
            Soluções <span className="text-gradient">High-End</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
            Tudo o que você precisa para se destacar no digital, construído com as tecnologias mais modernas do mercado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-10 rounded-[2.5rem] group hover:bg-white/[0.05] transition-all duration-500 border border-white/10 hover:border-primary-500/30"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary-500/10 transition-all duration-500 border border-white/5">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors duration-500">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-600/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};

export default Features;

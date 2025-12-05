import React from 'react';
import { Zap, Sparkles, TrendingUp, ShieldCheck, MonitorSmartphone, Rocket } from 'lucide-react';

const features = [
  {
    icon: <MonitorSmartphone className="text-blue-400" size={32} />,
    title: "100% Responsivo",
    description: "Seu site perfeito em qualquer dispositivo. Do celular ao desktop, a experiência do seu cliente será impecável."
  },
  {
    icon: <Zap className="text-amber-400" size={32} />,
    title: "Velocidade Extrema",
    description: "Ninguém gosta de sites lentos. Otimizo cada linha de código para garantir carregamento instantâneo."
  },
  {
    icon: <Sparkles className="text-indigo-400" size={32} />,
    title: "Design Premium",
    description: "Visual moderno e 'High-Tech' que transmite autoridade imediata para sua marca ou empresa."
  },
  {
    icon: <TrendingUp className="text-emerald-400" size={32} />,
    title: "Foco em Vendas",
    description: "Não é apenas beleza. Estruturo o site estrategicamente para converter visitantes em orçamentos e vendas."
  },
  {
    icon: <ShieldCheck className="text-cyan-400" size={32} />,
    title: "Segurança Total",
    description: "Proteção de dados e estabilidade garantida. Seu site online 24 horas por dia, 7 dias por semana."
  },
  {
    icon: <Rocket className="text-rose-400" size={32} />,
    title: "Pronto para Crescer",
    description: "Tecnologia escalável. Comece hoje e tenha uma estrutura pronta para acompanhar o crescimento do seu negócio."
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white">
            Soluções completas para <span className="text-gradient">você e seu negócio</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Tudo o que você precisa para se destacar no digital, feito sob medida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 hover:-translate-y-2 group border border-white/5 hover:border-primary-500/20"
            >
              <div className="w-14 h-14 rounded-xl bg-slate-900/80 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/10 shadow-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
import React from 'react';

const stats = [
  { value: "+300", suffix: "%", label: "Aumento médio em credibilidade para empresas com site profissional" },
  { value: "24", suffix: "h", label: "Seu negócio aberto vendendo para o mundo todo, sem pausas" },
  { value: "Mobile", suffix: "First", label: "Sites otimizados para onde 90% dos seus clientes estão: no celular" },
];

const Stats: React.FC = () => {
  return (
    <section className="py-20 border-y border-white/5 bg-slate-900/30 backdrop-blur-sm relative overflow-hidden">
       <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
           <h3 className="text-2xl md:text-4xl font-display font-bold text-white mb-4">
             O digital não é o futuro, <span className="text-blue-400">é o agora</span>
           </h3>
           <p className="text-slate-400 max-w-2xl mx-auto">
             Não ter um site profissional hoje é deixar dinheiro na mesa. Garanta sua presença online com qualidade.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="glass-card p-8 rounded-2xl text-center group hover:bg-white/5 transition-all border border-white/5">
              <div className="text-4xl md:text-5xl font-display font-bold text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.value}<span className="text-white">{stat.suffix}</span>
              </div>
              <div className="text-sm font-medium text-slate-300 leading-relaxed px-4">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
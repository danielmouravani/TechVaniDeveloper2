import React from 'react';
import { MessageSquare, Coffee, Rocket } from 'lucide-react';

const steps = [
  {
    id: "01",
    icon: <Coffee size={32} />,
    title: "Briefing & Ideia",
    desc: "Vamos tomar um café (virtual ou não) para eu entender seu negócio, seus objetivos e o que você precisa."
  },
  {
    id: "02",
    icon: <MessageSquare size={32} />,
    title: "Desenvolvimento",
    desc: "Coloco a mão na massa. Crio o design, aprovo com você e desenvolvo toda a tecnologia necessária."
  },
  {
    id: "03",
    icon: <Rocket size={32} />,
    title: "Lançamento",
    desc: "Seu site vai para o ar, otimizado, seguro e pronto para receber seus clientes e gerar resultados."
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Como funciona a <span className="text-blue-400">nossa parceria</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Sem burocracia, direto ao ponto e focado na sua entrega.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="glass-card p-8 rounded-2xl h-full border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 bg-slate-950 rounded-lg text-blue-400 group-hover:text-white group-hover:bg-blue-600 transition-colors border border-white/5">
                    {step.icon}
                  </div>
                  <span className="text-5xl font-display font-bold text-slate-800 group-hover:text-slate-700 transition-colors select-none">
                    {step.id}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
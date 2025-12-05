
import React from 'react';
import { ExternalLink, ArrowRight, Smile, Scissors, Eye } from 'lucide-react';

// SUBSTITUA ESTES DADOS PELOS SEUS PROJETOS REAIS
const projects = [
  {
    title: "Clínica de Ortodontia Premium",
    category: "Saúde & Estética",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    desc: "Site minimalista e sofisticado focado em harmonização orofacial e agendamento de consultas.",
    icon: <Smile className="text-teal-400" />,
    link: "https://drajenifferlins.com.br"
  },
  {
    title: "Centro de Saúde Ocular",
    category: "Saúde & Tecnologia",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
    desc: "Referência em Duque de Caxias. Interface 'Dark Blue' moderna que transmite autoridade médica e excelência.",
    icon: <Eye className="text-sky-400" />,
    link: "https://centrokatiamello.netlify.app/"
  },
  {
    title: "Novaça Barbearia Club",
    category: "Beleza & Masculino",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800",
    desc: "Landing Page com design 'Dark Mode' rústico, focada em conversão para clube de assinaturas.",
    icon: <Scissors className="text-amber-400" />,
    link: "https://novacabarbearia.com.br"
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white">
            Meu <span className="text-gradient">Portfolio</span> Selecionado
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Projetos reais que unem design sofisticado e performance técnica.
            Do setor de saúde ao varejo de luxo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group relative rounded-2xl overflow-hidden glass-card border border-white/10 hover:border-blue-500/50 transition-all duration-500 h-[400px]">
              {/* Image Container */}
              <div className="absolute inset-0 h-full w-full">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-300"></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col h-full justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-3">
                      <div className="p-2 rounded-lg bg-white/10 backdrop-blur-md">
                        {project.icon}
                      </div>
                      <span className="text-blue-300 text-xs font-bold tracking-wider uppercase bg-blue-900/30 px-2 py-1 rounded border border-blue-500/20">
                        {project.category}
                      </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{project.title}</h3>
                  
                  <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
                    <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                      {project.desc}
                    </p>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white font-medium hover:text-primary-400 transition-colors"
                    >
                      Ver Projeto <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
            <a href="#contact" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors border-b border-transparent hover:border-primary-500 pb-1">
                Quero um projeto neste nível <ArrowRight size={16} />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

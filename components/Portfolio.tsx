
import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, ArrowRight, Smile, Scissors, Eye } from 'lucide-react';

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
    <section id="portfolio" className="py-24 lg:py-40 bg-[#020617] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">
            Projetos <span className="text-gradient">Selecionados</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
            Uma vitrine de experiências digitais que unem design de alto nível e performance técnica impecável.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative aspect-[16/10] rounded-[2rem] overflow-hidden bg-slate-900 border border-white/10"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-primary-400 text-[10px] uppercase tracking-widest font-bold">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors duration-500">
                  {project.title}
                </h3>
                
                <p className="text-slate-300 text-lg mb-8 max-w-lg opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  {project.desc}
                </p>
                
                <div className="flex items-center justify-between">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-white font-bold text-lg group/link"
                  >
                    Explorar Projeto 
                    <div className="p-2 rounded-full bg-white/10 group-hover/link:bg-primary-500 transition-colors">
                      <ExternalLink size={20} />
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <a href="#contact" className="inline-flex items-center gap-4 text-slate-400 hover:text-white transition-all duration-500 group text-xl font-light">
            Quero um projeto neste nível 
            <div className="w-12 h-px bg-slate-800 group-hover:w-20 group-hover:bg-primary-500 transition-all duration-500" />
            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-500" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;

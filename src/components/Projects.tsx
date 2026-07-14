import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { 
  FolderGit2, 
  ExternalLink, 
  X, 
  CheckCircle2, 
  Sparkles, 
  Award, 
  ChevronRight, 
  ArrowUpRight,
  ShieldCheck,
  Building,
  Users2
} from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'public' | 'private'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'public') return project.clientType === 'public' || project.clientType === 'both';
    if (filter === 'private') return project.clientType === 'private' || project.clientType === 'both';
    return true;
  });

  const getGradientByProject = (id: string) => {
    switch (id) {
      case 'ads-orion':
        return 'from-purple-600 to-indigo-600 shadow-purple-500/10';
      case 'mulher-segura':
        return 'from-pink-600 to-rose-600 shadow-rose-500/10';
      case 'educacao-inteligente':
        return 'from-teal-500 to-emerald-600 shadow-teal-500/10';
      case 'cadastro-unico':
        return 'from-amber-500 to-orange-600 shadow-orange-500/10';
      case 'portal-camara':
        return 'from-blue-600 to-cyan-500 shadow-blue-500/10';
      default:
        return 'from-blue-700 to-indigo-800 shadow-blue-700/10';
    }
  };

  return (
    <section id="projetos" className="py-24 relative overflow-hidden bg-dark-bg border-b border-white/5">
      {/* Decorative grids */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl bg-[radial-gradient(ellipse_at_top,rgba(0,102,255,0.05),transparent_50%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-4 text-xs font-semibold uppercase tracking-widest text-primary text-blue-300">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Portfólio de Sucesso</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Nossos <span className="text-gradient-blue font-black">Projetos Desenvolvidos</span>
            </h2>
            <p className="text-gray-400 mt-4 text-sm sm:text-base">
              Conheça os sistemas e aplicativos criados sob medida para automatizar processos e melhorar o atendimento ao cidadão e ao cliente corporativo.
            </p>
          </div>

          {/* Dynamic Filtering Tabs */}
          <div className="flex items-center bg-white/5 border border-white/10 p-1.5 rounded-full shrink-0 self-start md:self-auto shadow-inner">
            <button
              id="filter-all-btn"
              onClick={() => setFilter('all')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Todos
            </button>
            <button
              id="filter-public-btn"
              onClick={() => setFilter('public')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === 'public'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Gestão Pública
            </button>
            <button
              id="filter-private-btn"
              onClick={() => setFilter('private')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === 'private'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Iniciativa Privada
            </button>
          </div>
        </div>

        {/* Projects Grid with entry animation */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4 }}
                className="group relative h-full cursor-pointer flex flex-col"
                onClick={() => setSelectedProject(project)}
              >
                {/* Visual Sleek Card Box */}
                <div className="relative flex flex-col h-full sleek-card overflow-hidden shadow-xl">
                  
                  {/* High contrast visual background representing project theme */}
                  <div className={`h-48 bg-gradient-to-tr ${getGradientByProject(project.id)} p-8 flex flex-col justify-between relative`}>
                    {/* Abstract Grid Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:14px_14px]"></div>
                    
                    {/* Badge clientType */}
                    <span className="self-start px-2.5 py-1 bg-black/30 border border-white/15 rounded-full text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                      {project.category}
                    </span>

                    {/* Styled Tech-icon */}
                    <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/25 flex items-center justify-center text-white shadow-lg self-end">
                      {project.clientType === 'public' ? (
                        <Building className="w-6 h-6" />
                      ) : (
                        <Users2 className="w-6 h-6" />
                      )}
                    </div>
                  </div>

                  {/* Card Content Area */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-primary-dark transition duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                      {project.description}
                    </p>

                    {/* Card CTA */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                      <span className="text-xs text-gray-400 font-mono">
                        {project.clientType === 'public' ? 'Órgão Público' : 'Empresa Privada'}
                      </span>
                      <span className="text-primary-dark text-xs font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform text-blue-400">
                        Saiba Mais <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Custom detailed "Saiba Mais" Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Overlay Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
              ></motion.div>

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                className="relative w-full max-w-3xl bg-[#0B1F3A] border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 z-10 flex flex-col max-h-[90vh]"
              >
                {/* Header Gradient Block */}
                <div className={`p-8 bg-gradient-to-tr ${getGradientByProject(selectedProject.id)} relative shrink-0`}>
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:14px_14px]"></div>
                  
                  {/* Close button */}
                  <button
                    id="modal-close-btn"
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-6 right-6 p-2 rounded-full bg-black/20 hover:bg-black/45 border border-white/10 text-white transition-all cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <span className="inline-block px-3 py-1 bg-black/25 border border-white/10 rounded-full text-xs font-semibold text-white uppercase tracking-wider mb-3">
                    {selectedProject.category}
                  </span>
                  
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-white/85 text-sm sm:text-base max-w-xl font-medium">
                    {selectedProject.tagline}
                  </p>
                </div>

                {/* Modal Body (Scrollable) */}
                <div className="p-8 overflow-y-auto space-y-8">
                  
                  {/* Full Description */}
                  <div>
                    <h4 className="text-white font-semibold text-base mb-2 font-display">Visão Geral do Projeto</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Impact Block */}
                  <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 flex gap-3">
                    <Award className="w-5 h-5 text-primary shrink-0 mt-0.5 text-blue-400" />
                    <div>
                      <h5 className="text-white font-semibold text-sm">Impacto & Resultados</h5>
                      <p className="text-gray-300 text-xs mt-1 leading-relaxed">{selectedProject.impact}</p>
                    </div>
                  </div>

                  {/* Core features bullet list */}
                  <div>
                    <h4 className="text-white font-semibold text-base mb-4 font-display">Principais Funcionalidades</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedProject.details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-2.5 text-xs text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5 text-blue-400" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Footer Actions */}
                <div className="p-6 bg-white/3 border-t border-white/5 flex items-center justify-between shrink-0">
                  <span className="text-xs text-gray-400 font-mono">
                    Data Orion Tech • Solução Segura
                  </span>
                  <button
                    id="modal-cta-contact"
                    onClick={() => {
                      setSelectedProject(null);
                      const contactSection = document.getElementById('contato');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="bg-primary hover:bg-[#0052cc] text-white px-6 py-3 rounded-full font-bold text-xs sm:text-sm transition-all shadow-lg hover:shadow-primary/30 cursor-pointer"
                  >
                    Solicitar Solução Semelhante
                  </button>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

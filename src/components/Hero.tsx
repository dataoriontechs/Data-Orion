import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, Database, Cpu, HelpCircle } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-dark-bg"
    >
      {/* Network background graphic generated via AI */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/orion_tech_hero_1784035405738.jpg"
          alt="Constelação Data Orion Tech"
          className="w-full h-full object-cover object-center opacity-35 scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Deep blue color overlay to blend nicely with design and ensure text-contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/85 to-[#0B1F3A]/45"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] via-transparent to-[#0B1F3A]/85"></div>
        
        {/* Sleek dotted grid overlay */}
        <div className="absolute inset-0 opacity-15 dot-grid"></div>
      </div>

      {/* Floating abstract decorative elements */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-[#0066FF] rounded-full blur-[130px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-[-150px] right-[-150px] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px] opacity-20 pointer-events-none"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Small Highlight Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#0066FF]/20 border border-[#0066FF]/30 rounded-full text-[#3aedff] text-xs font-bold uppercase tracking-wider mb-8 backdrop-blur-md"
        >
          <span className="w-2.5 h-2.5 bg-[#0066FF] rounded-full animate-pulse"></span>
          Inteligência de Dados e Inovação
        </motion.div>

        {/* Big Catchy Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[68px] tracking-tight max-w-5xl mx-auto mb-8 leading-[1.1]"
        >
          <span className="text-white block">Tecnologia que transforma</span>
          <span className="text-gradient-blue font-extrabold block mt-2">ideias em soluções.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/70 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          A <strong className="text-white font-semibold">Data Orion Tech</strong> desenvolve sistemas personalizados, plataformas web e aplicativos mobile orientados por dados para o setor público e privado.
        </motion.p>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none"
        >
          <button
            id="hero-cta-orcamento"
            onClick={() => onNavigate('contato')}
            className="w-full sm:w-auto bg-primary hover:bg-[#0052cc] text-white px-8 py-4 rounded-full font-bold text-base transition-all duration-300 shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2.5 group cursor-pointer"
          >
            <span>Solicitar Orçamento</span>
            <MessageSquare className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            id="hero-cta-projetos"
            onClick={() => onNavigate('projetos')}
            className="w-full sm:w-auto bg-white text-[#0B1F3A] px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:bg-gray-100 flex items-center justify-center gap-2.5 group cursor-pointer shadow-lg"
          >
            <span>Conheça nossos Projetos</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

        {/* Bottom Trust Indicators or Quick Strengths */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto border-t border-white/10 pt-12"
        >
          <div className="flex flex-col items-center p-3 text-center border-r border-white/5 last:border-r-0">
            <div className="text-[#3aedff] text-2xl sm:text-3xl font-extrabold mb-1 font-mono">100%</div>
            <div className="text-white/40 text-xs uppercase tracking-wider">Desenvolvimento Próprio</div>
          </div>
          <div className="flex flex-col items-center p-3 text-center border-r border-white/5 last:border-r-0">
            <div className="text-[#3aedff] text-2xl sm:text-3xl font-extrabold mb-1 font-mono">LGPD</div>
            <div className="text-white/40 text-xs uppercase tracking-wider">Sistemas Seguros</div>
          </div>
          <div className="flex flex-col items-center p-3 text-center border-r border-white/5 last:border-r-0">
            <div className="text-[#3aedff] text-2xl sm:text-3xl font-extrabold mb-1 font-mono">+50</div>
            <div className="text-white/40 text-xs uppercase tracking-wider">Projetos Ativos</div>
          </div>
          <div className="flex flex-col items-center p-3 text-center">
            <div className="text-[#3aedff] text-2xl sm:text-3xl font-extrabold mb-1 font-mono">GovTech</div>
            <div className="text-white/40 text-xs uppercase tracking-wider">Expertise Pública</div>
          </div>
        </motion.div>
      </div>

      {/* Modern Wave Divider at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10 translate-y-[1px]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[40px] text-dark-bg fill-current"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,53.05,22,79.4,30.56,158.34,56.24,242.05,68.81,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { AREAS_OF_ACTIVITY } from '../data';
import { 
  Briefcase, 
  Building2, 
  FolderOpen, 
  Scale, 
  Library, 
  GraduationCap, 
  Heart, 
  HeartPulse, 
  ShieldCheck, 
  Lightbulb, 
  Globe, 
  Target 
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<any>> = {
  "Empresas Privadas": Briefcase,
  "Prefeituras": Building2,
  "Secretarias Municipais": FolderOpen,
  "Câmaras de Vereadores": Scale,
  "Instituições Públicas": Library,
  "Educação": GraduationCap,
  "Assistência Social": Heart,
  "Saúde": HeartPulse,
  "Segurança Pública": ShieldCheck,
  "Empreendedores": Lightbulb,
  "Organizações": Globe
};

export default function AreasAtuacao() {
  return (
    <section id="atuacao" className="py-24 relative overflow-hidden bg-dark-bg border-b border-white/5">
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-4 text-xs font-semibold uppercase tracking-widest text-primary text-blue-300"
          >
            <Target className="w-3.5 h-3.5" />
            <span>Mercado & Atuação</span>
          </motion.div>
          
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6 tracking-tight">
            Nossas <span className="text-gradient-blue font-black">Áreas de Atuação</span>
          </h2>
          
          <p className="text-gray-400 text-sm sm:text-base">
            Fornecemos inovação digital inteligente para atender múltiplos setores, garantindo eficiência operacional e satisfação do usuário final.
          </p>
        </div>

        {/* Bento grid style areas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {AREAS_OF_ACTIVITY.map((area, index) => {
            const IconComponent = iconMap[area.title] || Globe;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative"
              >
                {/* Visual Sleek Bento Card */}
                <div className="h-full sleek-card p-6 flex flex-col justify-between">
                  <div>
                    {/* Icon container */}
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-5">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    
                    <h3 className="font-display font-bold text-base text-white mb-2 group-hover:text-primary-dark transition duration-300">
                      {area.title}
                    </h3>
                    
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                  
                  {/* Small decorative dot */}
                  <div className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 self-end mt-4"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

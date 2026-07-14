import React from 'react';
import { motion } from 'motion/react';
import { TIMELINE_STEPS } from '../data';
import { 
  Search, 
  FileText, 
  Code2, 
  ShieldCheck, 
  Rocket, 
  Wrench, 
  GitCommit 
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<any>> = {
  Search,
  FileText,
  Code2,
  ShieldCheck,
  Rocket,
  Wrench
};

export default function WorkProcess() {
  return (
    <section id="processo" className="py-24 relative overflow-hidden bg-dark-bg border-b border-white/5">
      {/* Background soft ambient decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-4 text-xs font-semibold uppercase tracking-widest text-primary text-blue-300"
          >
            <GitCommit className="w-3.5 h-3.5 animate-pulse" />
            <span>Fluxo de Trabalho</span>
          </motion.div>
          
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6 tracking-tight">
            Como damos <span className="text-gradient-blue font-black">vida à sua ideia</span>
          </h2>
          
          <p className="text-gray-400 text-sm sm:text-base">
            Seguimos um processo de engenharia de software estruturado e ágil, mitigando riscos e garantindo velocidade de entrega.
          </p>
        </div>

        {/* Timeline Grid layout (Vertical flow for all with clean connector bar) */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central connector bar (desktop only) */}
          <div className="hidden md:block absolute left-[50%] top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-blue-500 to-indigo-600 opacity-20"></div>

          {/* Steps Loop */}
          <div className="space-y-12">
            {TIMELINE_STEPS.map((step, index) => {
              const IconComponent = iconMap[step.iconName] || Code2;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Left or Right Content Block */}
                  <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                    <div className={`w-full max-w-md sleek-card p-6 sm:p-8 ${
                      isEven ? 'md:text-left' : 'md:text-right'
                    }`}>
                      {/* Step Badge */}
                      <span className="font-mono text-xs font-semibold text-primary uppercase tracking-widest bg-primary/10 px-2.5 py-1 rounded-md text-blue-300">
                        Etapa {step.step}
                      </span>
                      
                      <h3 className="font-display font-bold text-lg sm:text-xl text-white mt-3 mb-2">
                        {step.title}
                      </h3>
                      
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Centered Node Icon */}
                  <div className="relative z-10 shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-primary to-blue-500 border-2 border-dark-bg text-white flex items-center justify-center shadow-lg shadow-primary/20 hover:scale-110 transition duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Empty balancing space for desktop grids */}
                  <div className="hidden md:block w-1/2"></div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

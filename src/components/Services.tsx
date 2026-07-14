import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Smartphone, BarChart3, Zap, Building2, Users2, Check, Sparkles } from 'lucide-react';
import { SERVICES } from '../data';

const iconMap: Record<string, React.ComponentType<any>> = {
  Cpu,
  Smartphone,
  BarChart3,
  Zap,
  Building2,
  Users2
};

export default function Services() {
  return (
    <section id="servicos" className="py-24 relative overflow-hidden bg-dark-bg border-b border-white/5">
      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-4 text-xs font-semibold uppercase tracking-widest text-primary text-blue-300"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Nossos Serviços</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6 tracking-tight"
          >
            Soluções completas sob medida para <span className="text-gradient-blue font-black">alavancar sua gestão</span>.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg"
          >
            Construímos ferramentas robustas, seguras e de alta usabilidade para conectar processos e multiplicar resultados.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Cpu;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative h-full"
              >
                {/* Neon Glow Hover Accent */}
                <div className="absolute -inset-0.5 bg-gradient-to-tr from-primary/30 to-blue-500/0 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500 group-hover:from-primary/50 group-hover:to-blue-400/20"></div>

                {/* Main Card Element */}
                <div className="relative h-full sleek-card p-8 flex flex-col shadow-xl">
                  
                  {/* Icon & Title Row */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-primary to-blue-500 flex items-center justify-center shadow-[0_0_15px_rgba(0,102,255,0.4)] group-hover:scale-110 transition duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-white group-hover:text-primary transition duration-300">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Feature/Capabilities list */}
                  <ul className="space-y-3 pt-6 border-t border-white/5">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-400 group-hover:text-gray-300 transition duration-300">
                        <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

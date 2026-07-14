import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { DIFFERENTIALS, COMPANY_NUMBERS } from '../data';
import { Shield, Sparkles, CheckCircle, Database } from 'lucide-react';

// Sub-component for animated counter
function AnimatedCounter({ target, duration = 1.5 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count}</span>;
}

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="py-24 relative overflow-hidden bg-dark-bg border-b border-white/5">
      {/* Decorative lines & elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Differentials (Left) & Metrics (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: List of 12 Differentials */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-4 text-xs font-semibold uppercase tracking-widest text-primary text-blue-300">
                <Shield className="w-3.5 h-3.5" />
                <span>Nossos Pilares</span>
              </div>

              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-6 tracking-tight">
                Por que escolher a <span className="text-gradient-blue font-black">Data Orion Tech</span>?
              </h2>
              <p className="text-gray-400 mb-10 text-sm sm:text-base">
                Trabalhamos com foco na excelência, usabilidade e conformidade jurídica, garantindo o melhor produto digital do mercado.
              </p>

              {/* 12 Key Differentials Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {DIFFERENTIALS.map((diff, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 bg-white/3 border border-white/5 hover:border-primary/20 rounded-xl p-3.5 hover:bg-white/5 transition-all duration-300 group"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center shrink-0 transition-colors">
                      <CheckCircle className="w-4 h-4 text-primary group-hover:scale-110 transition duration-300" />
                    </div>
                    <span className="text-gray-300 text-sm font-medium group-hover:text-white transition duration-300">
                      {diff}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Numbers / Statistics */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative sleek-card p-8 sm:p-10 overflow-hidden"
            >
              {/* Outer glow accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex items-center gap-2 mb-8">
                <Sparkles className="w-5 h-5 text-primary text-blue-400" />
                <h3 className="font-display font-bold text-xl text-white">Nossos Números</h3>
              </div>

              {/* Counts Grid */}
              <div className="space-y-6">
                {COMPANY_NUMBERS.map((number, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-primary/20 transition-all duration-300"
                  >
                    <div>
                      <span className="block text-gray-400 text-xs uppercase tracking-wider font-mono">
                        {number.suffix}
                      </span>
                      <span className="block text-white text-sm font-semibold mt-0.5">
                        {number.label}
                      </span>
                    </div>
                    
                    <div className="font-display font-extrabold text-3xl sm:text-4xl text-gradient-blue">
                      <AnimatedCounter target={number.count} />
                      {number.value.includes('+') && '+'}
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}

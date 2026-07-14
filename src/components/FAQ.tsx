import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_ITEMS } from '../data';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

function FAQAccordionItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void; key?: string }) {
  return (
    <div className="sleek-card hover:translate-y-0 rounded-2xl overflow-hidden">
      {/* Header Button */}
      <button
        onClick={onToggle}
        className="w-full text-left px-6 py-5 sm:py-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
      >
        <span className="font-display font-semibold text-white text-base sm:text-lg">
          {question}
        </span>
        <div className={`w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center shrink-0 transition-transform duration-300 ${
          isOpen ? 'rotate-180 bg-primary/20 text-primary' : 'text-gray-400'
        }`}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>

      {/* Expandable Body */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-6 pb-6 pt-1 text-gray-300 text-sm sm:text-base leading-relaxed border-t border-white/5">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1"); // First one open by default

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-dark-bg border-b border-white/5">
      {/* Ambient graphic light */}
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Title block */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-4 text-xs font-semibold uppercase tracking-widest text-primary text-blue-300">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Perguntas Frequentes</span>
          </div>
          
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Tire suas <span className="text-gradient-blue font-black">dúvidas rápidas</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm">
            Tudo o que você precisa saber sobre as soluções da Data Orion Tech para impulsionar seus negócios.
          </p>
        </div>

        {/* Accordions stack */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <FAQAccordionItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

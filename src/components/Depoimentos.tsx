import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../data';
import { Quote, Star, ChevronLeft, ChevronRight, MessageSquareCode } from 'lucide-react';

export default function Depoimentos() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Helper to render star rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-600'
        }`}
      />
    ));
  };

  const current = TESTIMONIALS[activeIndex];

  // Colors for placeholder initials avatar
  const getAvatarBg = (seed: string) => {
    switch (seed) {
      case 'marcelo':
        return 'bg-gradient-to-tr from-blue-500 to-indigo-600';
      case 'juliana':
        return 'bg-gradient-to-tr from-pink-500 to-rose-600';
      default:
        return 'bg-gradient-to-tr from-teal-400 to-emerald-600';
    }
  };

  return (
    <section id="depoimentos" className="py-24 relative overflow-hidden bg-dark-bg border-b border-white/5">
      {/* Background blur effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-4 text-xs font-semibold uppercase tracking-widest text-primary text-blue-300">
            <MessageSquareCode className="w-3.5 h-3.5" />
            <span>Depoimentos</span>
          </div>
          
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            O que dizem os <span className="text-gradient-blue font-black">nossos parceiros</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm">
            A satisfação e o impacto direto na vida de milhares de pessoas são o nosso maior combustível.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          
          {/* Card Frame with Outer Glow */}
          <div className="relative sleek-card p-8 sm:p-12 shadow-2xl shadow-black/25">
            {/* Big quote graphic in background */}
            <Quote className="absolute top-8 right-8 w-20 h-20 text-white/5 pointer-events-none rotate-180" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col md:flex-row items-center md:items-start gap-8"
              >
                {/* Initials Avatar */}
                <div className="shrink-0">
                  <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl ${getAvatarBg(current.avatarSeed)} flex items-center justify-center text-white text-3xl font-bold font-display shadow-lg shadow-black/30 border border-white/10`}>
                    {current.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                  </div>
                </div>

                {/* Testimonial Message */}
                <div className="space-y-4 text-center md:text-left">
                  {/* Rating stars */}
                  <div className="flex justify-center md:justify-start gap-1">
                    {renderStars(current.rating)}
                  </div>
                  
                  {/* Quotation text */}
                  <blockquote className="text-gray-200 text-base sm:text-lg italic leading-relaxed font-light">
                    "{current.text}"
                  </blockquote>

                  {/* Author Meta */}
                  <div>
                    <cite className="not-italic text-white font-semibold text-base block font-display">
                      {current.name}
                    </cite>
                    <span className="text-primary text-xs font-mono uppercase tracking-wider block mt-0.5 text-blue-400">
                      {current.role} — <strong className="text-gray-400 font-medium">{current.company}</strong>
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons (Left / Right) */}
          <div className="flex items-center justify-between mt-8">
            {/* Dot page indicators */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  id={`testimonial-dot-${idx}`}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === idx ? 'w-8 bg-primary' : 'w-2.5 bg-gray-600'
                  }`}
                  aria-label={`Ir para depoimento ${idx + 1}`}
                ></button>
              ))}
            </div>

            {/* Prev/Next Controls */}
            <div className="flex gap-3">
              <button
                id="testimonial-prev-btn"
                onClick={prevTestimonial}
                className="p-3.5 rounded-full bg-white/5 border border-white/5 hover:border-primary/30 hover:bg-white/10 text-white transition-all cursor-pointer"
                aria-label="Depoimento Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                id="testimonial-next-btn"
                onClick={nextTestimonial}
                className="p-3.5 rounded-full bg-primary hover:bg-[#0052cc] text-white border border-primary transition-all cursor-pointer shadow-lg hover:shadow-primary/30"
                aria-label="Próximo Depoimento"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

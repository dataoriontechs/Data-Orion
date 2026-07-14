import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_DETAILS } from '../data';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${COMPANY_DETAILS.phoneRaw}?text=Ol%C3%A1%2520Data%2520Orion%2520Tech%2C%2520gostaria%2520de%2520solicitar%2520um%2520or%25C3%25A7amento%2520para%2520meu%2520projeto!`;

  return (
    <a
      id="whatsapp-floating-btn"
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-2"
      aria-label="Fale conosco no WhatsApp"
    >
      {/* Tooltip badge text appearing on hover */}
      <div className="bg-emerald-600 text-white text-xs font-semibold px-3 py-2 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-3 group-hover:translate-x-0 whitespace-nowrap pointer-events-none hidden sm:block border border-emerald-500/30">
        Fale Conosco
      </div>

      {/* Floating pulsate green ring decoration */}
      <div className="relative">
        <div className="absolute inset-0 bg-emerald-500 rounded-full blur-md opacity-70 group-hover:opacity-100 group-hover:scale-110 transition duration-300 animate-ping"></div>
        
        {/* Real Button Body */}
        <div className="relative w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-emerald-600 transform group-hover:scale-110 transition duration-300 cursor-pointer">
          <MessageCircle className="w-7 h-7" />
        </div>
      </div>
    </a>
  );
}

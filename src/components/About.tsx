import React from 'react';
import { motion } from 'motion/react';
import { Instagram, ArrowRight, ShieldCheck, Mail, Phone, Users } from 'lucide-react';
import { COMPANY_DETAILS } from '../data';

export default function About() {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden bg-dark-bg border-b border-white/5">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* History Text Column */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-4 text-xs font-semibold uppercase tracking-widest text-primary text-blue-300">
                <Users className="w-3 h-3" />
                <span>Nossa Trajetória</span>
              </div>
              
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-8 tracking-tight">
                Inovação tecnológica guiada pela <span className="text-gradient-blue font-black">inteligência de dados</span>.
              </h2>
              
              <div className="space-y-6 text-gray-300 text-base leading-relaxed">
                {COMPANY_DETAILS.aboutFull.map((paragraph, idx) => (
                  <p key={idx}>
                    {idx === 0 ? (
                      <span className="text-white font-semibold text-lg block mb-2">
                        {paragraph}
                      </span>
                    ) : (
                      paragraph
                    )}
                  </p>
                ))}
              </div>

              {/* Company Core Values Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/5">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">Compromisso Ético</h4>
                    <p className="text-gray-400 text-xs mt-0.5">Segurança jurídica, conformidade com a LGPD e transparência total.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">Inovação Orientada</h4>
                    <p className="text-gray-400 text-xs mt-0.5">Pesquisa contínua em engenharia de dados e arquitetura moderna.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CEO Card Column */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              {/* Card Outer Glow Effect */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-primary to-blue-500 rounded-3xl blur opacity-25 group-hover:opacity-45 transition duration-500"></div>
              
              {/* Sleek Card Container */}
              <div className="relative sleek-card p-8 sm:p-10 flex flex-col items-center text-center">
                
                {/* Photo Frame with circular crop and subtle glow */}
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden mb-6 border-2 border-primary/30 hover:border-primary/80 transition-all duration-300 shadow-[0_0_15px_rgba(0,102,255,0.3)] hover:shadow-[0_0_25px_rgba(0,102,255,0.5)] bg-[#0B1F3A]">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4D03AQGa28P-6f4lPw/profile-displayphoto-crop_800_800/B4DZf4R4XYGgAI-/0/1752217127057?e=1785369600&v=beta&t=NKOGsadTnOOy6vECeBa3k6XH13PSj5S5qnvqrlZhqhg"
                    alt="Abel Santos - CEO Data Orion Tech"
                    className="w-full h-full object-cover transform hover:scale-110 transition duration-500 rounded-full"
                    referrerPolicy="no-referrer"
                  />
                  {/* Glass shimmer overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/40 via-transparent to-transparent rounded-full pointer-events-none"></div>
                </div>

                {/* Name & Title */}
                <h3 className="font-display font-extrabold text-2xl text-white mb-1">
                  {COMPANY_DETAILS.ceo}
                </h3>
                <p className="text-primary font-mono text-xs uppercase tracking-widest mb-6">
                  Fundador & CEO
                </p>

                {/* Bio text */}
                <p className="text-gray-300 text-sm leading-relaxed mb-8 max-w-sm">
                  CEO e idealizador da Data Orion Tech, responsável pelo planejamento estratégico e desenvolvimento das soluções integradas de transformação digital, inteligência de dados e automação de serviços.
                </p>

                {/* Core Skills Tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {['Data Engineering', 'GovTech Specialist', 'Business Architect', 'Software Engineer'].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] text-gray-400 font-mono">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Contact and Social Row */}
                <div className="w-full grid grid-cols-2 gap-4 border-t border-white/5 pt-6">
                  <a
                    id="ceo-whatsapp-link"
                    href={`https://wa.me/${COMPANY_DETAILS.phoneRaw}?text=Ol%C3%A1%20Abel%2C%20gostaria%20de%20falar%20sobre%20um%20projeto%20com%20a%20Data%20Orion%20Tech!`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 px-3 py-2.5 bg-primary/10 hover:bg-primary/20 text-primary-dark rounded-xl text-xs font-semibold transition-all border border-primary/20 text-blue-300"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Fale com o CEO</span>
                  </a>

                  <a
                    id="ceo-instagram-link"
                    href={COMPANY_DETAILS.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 px-3 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-xl text-xs font-semibold transition-all border border-white/5"
                  >
                    <Instagram className="w-3.5 h-3.5 text-pink-500" />
                    <span>Instagram</span>
                  </a>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

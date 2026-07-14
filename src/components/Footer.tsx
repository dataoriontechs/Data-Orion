import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_DETAILS, SERVICES, PROJECTS } from '../data';
import { 
  Rocket, 
  Instagram, 
  Phone, 
  Mail, 
  ArrowUp, 
  ExternalLink, 
  FileText, 
  ShieldCheck, 
  X,
  Scale
} from 'lucide-react';

export default function Footer() {
  const [modalContent, setModalContent] = useState<'privacy' | 'terms' | null>(null);

  const handleLinkClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const getPrivacyPolicyText = () => (
    <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
      <p>A <strong>Data Orion Tech</strong>, sob responsabilidade do CNPJ <strong>54.377.268/0001-76</strong>, tem como compromisso zelar pela privacidade e proteção dos dados pessoais de seus clientes, cidadãos e parceiros, de acordo com as diretrizes da <strong>Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)</strong>.</p>
      
      <h5 className="text-white font-semibold font-display mt-4">1. Coleta e Uso de Informações</h5>
      <p>Coletamos apenas informações fornecidas de forma voluntária por meio de nossos formulários de contato e solicitações de orçamento (Nome, E-mail, Telefone, Empresa, Cidade). Esses dados são utilizados exclusivamente para estabelecer comunicação comercial primária e viabilizar estimativas orçamentárias.</p>
      
      <h5 className="text-white font-semibold font-display mt-4">2. Segurança dos Dados</h5>
      <p>Empregamos protocolos modernos de segurança e criptografia no tráfego de dados para mitigar riscos de vazamentos, acessos indevidos ou modificações acidentais de registros. Não compartilhamos informações com terceiros sem consentimento explícito.</p>
      
      <h5 className="text-white font-semibold font-display mt-4">3. Direitos dos Titulares</h5>
      <p>Os usuários do site podem solicitar a qualquer momento a retificação, limitação ou exclusão total de seus dados pessoais armazenados em nossos cadastros através do e-mail <strong>{COMPANY_DETAILS.email}</strong>.</p>
    </div>
  );

  const getTermsOfUseText = () => (
    <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
      <p>Bem-vindo ao site institucional da <strong>Data Orion Tech</strong>. Ao acessar ou interagir com nosso portal, você concorda em cumprir e respeitar os seguintes Termos de Uso.</p>
      
      <h5 className="text-white font-semibold font-display mt-4">1. Propriedade Intelectual</h5>
      <p>Todo o conteúdo visual, códigos-fonte, logotipos, marcas, textos e imagens disponibilizados neste portal pertencem à Data Orion Tech ou estão licenciados de forma legal. Fica estritamente proibida qualquer cópia ou republicação de conteúdo sem prévia anuência por escrito da nossa diretoria.</p>
      
      <h5 className="text-white font-semibold font-display mt-4">2. Uso Permitido</h5>
      <p>O portal deve ser utilizado exclusivamente para fins de conhecimento institucional, portfólio de projetos, esclarecimento de dúvidas e solicitação oficial de propostas de soluções tecnológicas. Qualquer tentativa de exploração de vulnerabilidades, injeção de scripts maliciosos ou engenharia reversa do portal será tratada nos termos da lei.</p>
      
      <h5 className="text-white font-semibold font-display mt-4">3. Limitação de Responsabilidades</h5>
      <p>A Data Orion Tech busca fornecer informações exatas e atualizadas neste canal. No entanto, não nos responsabilizamos por perdas de conexão temporárias do site, indisponibilidades de links externos de redes sociais ou imprecisões menores originadas por alterações estruturais recentes de portfólios.</p>
    </div>
  );

  return (
    <footer className="bg-[#081628] border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Logo & Corporate Summary */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleLinkClick('home')}>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-blue-400 flex items-center justify-center">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-display font-extrabold text-xl tracking-tight text-white block">
                  Data Orion<span className="text-primary"> Tech</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400 block -mt-1 font-mono">
                  Inteligência de Dados
                </span>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Desenvolvemos sistemas personalizados de alta qualidade, aplicativos para celulares e consultoria focada em automação e modernização de processos corporativos e governamentais.
            </p>

            <div className="space-y-1 text-xs text-gray-400 font-mono">
              <p><strong>CEO:</strong> {COMPANY_DETAILS.ceo}</p>
              <p><strong>CNPJ:</strong> {COMPANY_DETAILS.cnpj}</p>
              <p><strong>E-mail:</strong> {COMPANY_DETAILS.email}</p>
              <p><strong>Tel:</strong> {COMPANY_DETAILS.phone}</p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider">
              Links Rápidos
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {['home', 'sobre', 'servicos', 'projetos', 'diferenciais', 'faq'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => handleLinkClick(link)}
                    className="hover:text-primary hover:translate-x-1 transition-all capitalize cursor-pointer text-left"
                  >
                    {link === 'faq' ? 'FAQ' : link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider">
              Serviços Prestados
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400">
              {SERVICES.map((serv) => (
                <li key={serv.id}>
                  <button
                    onClick={() => handleLinkClick('servicos')}
                    className="hover:text-primary transition-colors text-left"
                  >
                    {serv.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Projects Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider">
              Principais Projetos
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400">
              {PROJECTS.slice(0, 4).map((proj) => (
                <li key={proj.id}>
                  <button
                    onClick={() => handleLinkClick('projetos')}
                    className="hover:text-primary transition-colors text-left flex items-center gap-1"
                  >
                    <span>{proj.title}</span>
                    <ExternalLink className="w-3 h-3 text-gray-600 shrink-0" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Lower Legal Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-gray-500">
          
          {/* Copyright text */}
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Data Orion Tech — Todos os direitos reservados.
          </p>

          {/* Legal Pages Buttons */}
          <div className="flex items-center gap-6">
            <button
              id="privacy-policy-btn"
              onClick={() => setModalContent('privacy')}
              className="hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Política de Privacidade</span>
            </button>
            <button
              id="terms-of-use-btn"
              onClick={() => setModalContent('terms')}
              className="hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Scale className="w-3.5 h-3.5" />
              <span>Termos de Uso</span>
            </button>
          </div>

        </div>
      </div>

      {/* Modal for Privacy Policy or Terms of Use */}
      <AnimatePresence>
        {modalContent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalContent(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            ></motion.div>

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl glass rounded-3xl p-8 border border-white/10 shadow-2xl z-10 flex flex-col max-h-[85vh]"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6 shrink-0">
                <div className="flex items-center gap-2">
                  {modalContent === 'privacy' ? (
                    <ShieldCheck className="w-5 h-5 text-primary text-blue-400" />
                  ) : (
                    <Scale className="w-5 h-5 text-primary text-blue-400" />
                  )}
                  <h4 className="font-display font-bold text-lg text-white">
                    {modalContent === 'privacy' ? 'Política de Privacidade' : 'Termos de Uso'}
                  </h4>
                </div>
                <button
                  id="footer-modal-close"
                  onClick={() => setModalContent(null)}
                  className="p-1 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body (Scrollable) */}
              <div className="overflow-y-auto pr-2">
                {modalContent === 'privacy' ? getPrivacyPolicyText() : getTermsOfUseText()}
              </div>

              {/* Footer */}
              <div className="pt-6 mt-6 border-t border-white/10 text-right shrink-0">
                <button
                  id="footer-modal-accept"
                  onClick={() => setModalContent(null)}
                  className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-xl text-xs font-semibold cursor-pointer"
                >
                  Entendi e Aceito
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </footer>
  );
}

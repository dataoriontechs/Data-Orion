import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket, ArrowRight } from 'lucide-react';
import { COMPANY_DETAILS } from '../data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section for indicators
      const sections = ['home', 'sobre', 'servicos', 'projetos', 'diferenciais', 'processo', 'faq', 'contato'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Sobre', id: 'sobre' },
    { name: 'Serviços', id: 'servicos' },
    { name: 'Projetos', id: 'projetos' },
    { name: 'Diferenciais', id: 'diferenciais' },
    { name: 'Processo', id: 'processo' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Contato', id: 'contato' },
  ];

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
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

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B1F3A]/90 backdrop-blur-md py-3 border-b border-white/10 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleLinkClick('home')}>
            <div className="w-10 h-10 bg-[#0066FF] rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,102,255,0.5)] transition-transform hover:scale-105">
              <div className="w-4 h-4 border-2 border-white rotate-45"></div>
            </div>
            <div>
              <span className="font-display font-extrabold text-2xl tracking-tight text-white block uppercase">
                Data Orion<span className="text-primary"> Tech</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#3aedff] block -mt-1 font-mono">
                Inteligência de Dados
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer ${
                  activeSection === link.id
                    ? 'text-primary bg-primary/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Call to Action Button */}
          <div className="hidden lg:block">
            <button
              id="navbar-cta-btn"
              onClick={() => handleLinkClick('contato')}
              className="relative overflow-hidden group bg-primary hover:bg-[#0052cc] text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-primary/30 flex items-center gap-2 cursor-pointer"
            >
              <span className="relative z-10">Solicitar Orçamento</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-nav-menu"
        className={`lg:hidden fixed inset-x-0 top-[65px] bg-dark-bg/95 backdrop-blur-xl border-b border-white/10 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100 py-6 px-4' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              id={`mobile-nav-link-${link.id}`}
              onClick={() => handleLinkClick(link.id)}
              className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                activeSection === link.id
                  ? 'text-white bg-primary/20 border-l-4 border-primary'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button
            id="mobile-navbar-cta-btn"
            onClick={() => handleLinkClick('contato')}
            className="w-full mt-4 bg-primary hover:bg-primary-dark text-white py-3 px-4 rounded-xl font-medium text-center shadow-lg flex items-center justify-center gap-2"
          >
            <span>Solicitar Orçamento</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </nav>
  );
}

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_DETAILS } from '../data';
import { ContactMessage } from '../types';
import { 
  Send, 
  Phone, 
  Mail, 
  Instagram, 
  Award, 
  MapPin, 
  CheckCircle, 
  AlertCircle, 
  Inbox, 
  Calendar,
  Building,
  User,
  Trash2,
  Lock
} from 'lucide-react';

export default function Contact() {
  // Form fields state
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // Status and error triggers
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  // Local leads viewer (stored in localStorage for premium interaction demonstration)
  const [leads, setLeads] = useState<ContactMessage[]>([]);
  const [showLeads, setShowLeads] = useState(false);

  // Load existing leads from localStorage
  useEffect(() => {
    const savedLeads = localStorage.getItem('data_orion_leads');
    if (savedLeads) {
      try {
        setLeads(JSON.parse(savedLeads));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!name || !phone || !email || !message) {
      setErrorMessage('Por favor, preencha todos os campos obrigatórios (Nome, Telefone, E-mail e Mensagem).');
      setStatus('error');
      return;
    }

    setStatus('loading');

    // Simulate server-side API delay
    setTimeout(() => {
      const newLead: ContactMessage = {
        id: Math.random().toString(36).substring(2, 9),
        name,
        company: company || 'Não informado',
        city: city || 'Não informado',
        phone,
        email,
        subject: subject || 'Orçamento Geral',
        message,
        date: new Date().toLocaleString('pt-BR'),
        status: 'unread'
      };

      const updatedLeads = [newLead, ...leads];
      setLeads(updatedLeads);
      localStorage.setItem('data_orion_leads', JSON.stringify(updatedLeads));

      // Reset form fields
      setName('');
      setCompany('');
      setCity('');
      setPhone('');
      setEmail('');
      setSubject('');
      setMessage('');
      
      setStatus('success');
    }, 1200);
  };

  const handleDeleteLead = (id: string) => {
    const filtered = leads.filter(l => l.id !== id);
    setLeads(filtered);
    localStorage.setItem('data_orion_leads', JSON.stringify(filtered));
  };

  return (
    <section id="contato" className="py-24 relative overflow-hidden bg-dark-bg border-b border-white/5">
      {/* Visual background lights */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-4 text-xs font-semibold uppercase tracking-widest text-primary text-blue-300">
            <Mail className="w-3.5 h-3.5" />
            <span>Contato Direto</span>
          </div>
          
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Vamos construir o seu <span className="text-gradient-blue font-black">projeto de sucesso</span>?
          </h2>
          <p className="text-gray-400 mt-4 text-sm sm:text-base">
            Preencha o formulário e nossa equipe técnica retornará com uma análise e orçamento estruturado para a sua necessidade.
          </p>
        </div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Corporate Contact Info (Left Column) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative sleek-card p-8 space-y-8 shadow-xl">
              
              <div>
                <h3 className="font-display font-extrabold text-2xl text-white mb-2">
                  Data Orion Tech
                </h3>
                <span className="text-primary font-mono text-[10px] uppercase tracking-widest block bg-primary/10 px-2.5 py-1 rounded-md self-start w-fit text-blue-300">
                  CNPJ: {COMPANY_DETAILS.cnpj}
                </span>
                <p className="text-gray-300 text-sm leading-relaxed mt-4">
                  Desenvolvimento de plataformas institucionais, aplicativos de alta performance, portais legislativos municipais e análise estruturada de dados estratégicos.
                </p>
              </div>

              {/* Direct channels links */}
              <div className="space-y-4 pt-4 border-t border-white/5">
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-gray-400 text-xs font-mono uppercase">Telefone / WhatsApp</span>
                    <a
                      id="contact-phone-link"
                      href={`https://wa.me/${COMPANY_DETAILS.phoneRaw}?text=Ol%C3%A1%20Data%20Orion%20Tech%2C%20gostaria%20de%20um%20or%C3%A7amento!`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white hover:text-primary transition duration-200 font-semibold text-sm sm:text-base"
                    >
                      {COMPANY_DETAILS.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-gray-400 text-xs font-mono uppercase">E-mail corporativo</span>
                    <a
                      id="contact-email-link"
                      href={`mailto:${COMPANY_DETAILS.email}`}
                      className="text-white hover:text-primary transition duration-200 font-semibold text-sm sm:text-base break-all"
                    >
                      {COMPANY_DETAILS.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-gray-400 text-xs font-mono uppercase">Instagram Oficial</span>
                    <a
                      id="contact-instagram-link"
                      href={COMPANY_DETAILS.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white hover:text-primary transition duration-200 font-semibold text-sm sm:text-base break-all"
                    >
                      @adsoriontech
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-gray-400 text-xs font-mono uppercase">Liderança Executiva</span>
                    <span className="text-white font-semibold text-sm sm:text-base block">
                      Abel Santos <span className="text-xs text-gray-400 font-normal">(CEO e Fundador)</span>
                    </span>
                  </div>
                </div>

              </div>

            </div>

            {/* Simulated Live Leads Monitor Link (Client-side interactive feature) */}
            <div className="p-1">
              <button
                id="toggle-leads-dashboard-btn"
                onClick={() => setShowLeads(!showLeads)}
                className="w-full text-center px-4 py-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 text-xs text-gray-400 hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer font-mono"
              >
                <Inbox className="w-4 h-4 text-primary text-blue-400" />
                <span>
                  {showLeads ? 'Esconder' : 'Visualizar'} Painel de Mensagens Recebidas ({leads.length})
                </span>
              </button>
            </div>
          </div>

          {/* Contact Form (Right Column) */}
          <div className="lg:col-span-7">
            <div className="relative sleek-card p-8 sm:p-10 shadow-2xl">
              
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Nome */}
                  <div>
                    <label className="block text-gray-300 text-xs font-semibold uppercase tracking-wider mb-2">
                      Nome Completo <span className="text-primary">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="form-input-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ex: Carlos Silva"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* E-mail */}
                  <div>
                    <label className="block text-gray-300 text-xs font-semibold uppercase tracking-wider mb-2">
                      E-mail para contato <span className="text-primary">*</span>
                    </label>
                    <input
                      id="form-input-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Ex: carlos@empresa.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Empresa */}
                  <div>
                    <label className="block text-gray-300 text-xs font-semibold uppercase tracking-wider mb-2">
                      Empresa / Órgão Público
                    </label>
                    <input
                      id="form-input-company"
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Ex: Prefeitura de Salvador"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
                    />
                  </div>

                  {/* Cidade */}
                  <div>
                    <label className="block text-gray-300 text-xs font-semibold uppercase tracking-wider mb-2">
                      Cidade / Estado
                    </label>
                    <input
                      id="form-input-city"
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Ex: Salvador / BA"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Telefone */}
                  <div>
                    <label className="block text-gray-300 text-xs font-semibold uppercase tracking-wider mb-2">
                      Telefone / WhatsApp <span className="text-primary">*</span>
                    </label>
                    <input
                      id="form-input-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Ex: (71) 99289-4537"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
                    />
                  </div>

                  {/* Assunto */}
                  <div>
                    <label className="block text-gray-300 text-xs font-semibold uppercase tracking-wider mb-2">
                      Assunto da mensagem
                    </label>
                    <select
                      id="form-input-subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-dark-surface text-white">Selecione o Assunto</option>
                      <option value="Sistemas Personalizados" className="bg-dark-surface text-white">Sistemas Personalizados</option>
                      <option value="Desenvolvimento de Apps" className="bg-dark-surface text-white">Desenvolvimento de Aplicativos</option>
                      <option value="Gestão Pública Inteligente" className="bg-dark-surface text-white">Sistemas para Gestão Pública</option>
                      <option value="BI & Análise de Dados" className="bg-dark-surface text-white">Análise de Dados / BI</option>
                      <option value="Transformação Digital" className="bg-dark-surface text-white">Transformação Digital</option>
                      <option value="Outros Assuntos" className="bg-dark-surface text-white">Outros</option>
                    </select>
                  </div>
                </div>

                {/* Mensagem */}
                <div>
                  <label className="block text-gray-300 text-xs font-semibold uppercase tracking-wider mb-2">
                    Descreva seu projeto ou dúvida <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="form-input-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Nos conte detalhes do sistema, metas ou problemas que pretende solucionar com tecnologia..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 resize-none"
                  ></textarea>
                </div>

                {/* Submitting Actions */}
                <button
                  id="form-submit-btn"
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-primary hover:bg-[#0052cc] disabled:bg-primary/50 text-white font-bold py-4 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-3 cursor-pointer"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Processando solicitação...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Solicitar Orçamento</span>
                    </>
                  )}
                </button>

              </form>

              {/* Status Notifications */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 shrink-0 mt-0.5 text-emerald-400" />
                    <div>
                      <strong className="block font-semibold">Orçamento enviado com sucesso!</strong>
                      <span className="text-xs text-gray-300 block mt-1">
                        Agradecemos seu contato. Nossa equipe técnica analisará sua demanda e enviará um retorno formal em até 24 horas úteis.
                      </span>
                    </div>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="mt-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm flex items-start gap-3"
                  >
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-semibold">Erro no preenchimento!</strong>
                      <span className="text-xs text-gray-300 block mt-1">{errorMessage}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

        {/* Local leads administrator console container */}
        <AnimatePresence>
          {showLeads && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              className="mt-16 relative sleek-card p-8 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-primary text-blue-400" />
                  <h3 className="font-display font-bold text-lg text-white">
                    Console Local de Leads Recebidos (Demonstração Offline)
                  </h3>
                </div>
                <span className="text-xs text-gray-400 font-mono bg-white/5 px-2.5 py-1 rounded-md">
                  Apenas visível localmente no navegador do usuário
                </span>
              </div>

              {leads.length === 0 ? (
                <div className="text-center py-12 text-gray-400 space-y-3">
                  <Inbox className="w-12 h-12 mx-auto text-gray-600 animate-bounce" />
                  <p className="text-sm">Nenhuma mensagem cadastrada localmente ainda.</p>
                  <p className="text-xs text-gray-500 max-w-sm mx-auto">
                    Preencha o formulário acima e clique em "Solicitar Orçamento" para ver seu lead persistido localmente em tempo real nesta lista!
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[500px] overflow-y-auto pr-2">
                  {leads.map((lead) => (
                    <div
                      key={lead.id}
                      className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/25 relative group transition-all"
                    >
                      <button
                        id={`delete-lead-${lead.id}`}
                        onClick={() => handleDeleteLead(lead.id)}
                        className="absolute top-4 right-4 p-2 text-gray-500 hover:text-rose-500 transition-colors"
                        title="Deletar Lead"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>

                      <div className="flex items-center gap-1.5 text-xs text-primary font-mono font-semibold uppercase text-blue-300">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{lead.date}</span>
                      </div>

                      <h4 className="font-semibold text-white mt-2 mb-1">{lead.name}</h4>
                      
                      <div className="text-xs text-gray-300 space-y-1">
                        <p><strong className="text-gray-400">E-mail:</strong> {lead.email}</p>
                        <p><strong className="text-gray-400">Tel:</strong> {lead.phone}</p>
                        <p><strong className="text-gray-400">Empresa:</strong> {lead.company} | <strong className="text-gray-400">Cidade:</strong> {lead.city}</p>
                        <p><strong className="text-gray-400">Assunto:</strong> {lead.subject}</p>
                      </div>

                      <div className="mt-4 p-3 bg-black/20 rounded-xl text-xs text-gray-300 border border-white/5 whitespace-pre-wrap leading-relaxed">
                        {lead.message}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

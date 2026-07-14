import { Service, Project, FAQItem, Testimonial, TimelineStep } from './types';

export const COMPANY_DETAILS = {
  name: "Data Orion Tech",
  ceo: "Abel Santos",
  cnpj: "54.377.268/0001-76",
  phone: "(71) 99289-4537",
  phoneRaw: "5571992894537",
  email: "dataoriontechs@gmail.com",
  instagram: "https://www.instagram.com/adsoriontech/",
  aboutBrief: "A Data Orion Tech nasceu com o propósito de desenvolver soluções tecnológicas capazes de transformar a gestão pública e privada por meio da inovação, automação e inteligência de dados.",
  aboutFull: [
    "A Data Orion Tech nasceu com o propósito de desenvolver soluções tecnológicas capazes de transformar a gestão pública e privada por meio da inovação, automação e inteligência de dados.",
    "Nosso compromisso é criar sistemas modernos, intuitivos e eficientes que melhorem processos, aumentem a produtividade e aproximem instituições das pessoas.",
    "Atuamos no desenvolvimento de sistemas sob medida, plataformas web, aplicativos, painéis analíticos (Dashboards), automação de processos e análise de dados estratégicos.",
    "Nossa missão é utilizar a tecnologia como ferramenta de transformação social e empresarial."
  ]
};

export const SERVICES: Service[] = [
  {
    id: "dev-sistemas",
    title: "Desenvolvimento de Sistemas",
    description: "Desenvolvimento de sistemas personalizados para empresas, órgãos públicos e instituições privadas.",
    iconName: "Cpu",
    items: [
      "Sistemas Web",
      "Aplicativos",
      "Plataformas Administrativas",
      "Portais Institucionais",
      "Sistemas de Atendimento",
      "Sistemas de Protocolos",
      "Portais Corporativos",
      "Sistemas Municipais"
    ]
  },
  {
    id: "dev-apps",
    title: "Desenvolvimento de Aplicativos",
    description: "Aplicativos móveis nativos e híbridos sob medida para Android, iOS e Web, integrando excelentes recursos visuais.",
    iconName: "Smartphone",
    items: [
      "Login seguro e biometria",
      "Painéis administrativos",
      "Geolocalização em tempo real",
      "Notificações Push",
      "Dashboards integrados",
      "Integrações de API complexas"
    ]
  },
  {
    id: "analise-dados",
    title: "Análise de Dados",
    description: "Transformamos dados brutos em inteligência analítica de alto nível para tomada de decisões seguras e estratégicas.",
    iconName: "BarChart3",
    items: [
      "Dashboards em tempo real",
      "Business Intelligence (BI)",
      "Métricas e Indicadores-chave (KPIs)",
      "Relatórios dinâmicos e exportáveis",
      "Estatísticas preditivas",
      "Visualizações interativas"
    ]
  },
  {
    id: "transformacao-digital",
    title: "Transformação Digital",
    description: "Modernização completa de fluxos e processos, eliminando gargalos físicos e otimizando a produtividade.",
    iconName: "Zap",
    items: [
      "Digitalização de documentos",
      "Automação de tarefas repetitivas",
      "Fluxos de trabalho inteligentes",
      "Gestão documental eletrônica (GED)",
      "Integração de sistemas legados"
    ]
  },
  {
    id: "gestao-publica",
    title: "Sistemas para Gestão Pública",
    description: "Soluções integradas sob medida que modernizam o serviço ao cidadão e otimizam a administração municipal.",
    iconName: "Building2",
    items: [
      "Sistemas para Prefeituras",
      "Secretarias Municipais",
      "Câmaras de Vereadores",
      "Autarquias municipais",
      "Soluções de Transparência Fiscal"
    ]
  },
  {
    id: "consultoria-tech",
    title: "Consultoria Tecnológica",
    description: "Planejamento estratégico focado na identificação e desenho das melhores soluções digitais para os seus desafios.",
    iconName: "Users2",
    items: [
      "Planejamento de soluções digitais",
      "Estudos de viabilidade técnica",
      "Desenho de arquitetura de software",
      "Otimização de custos com nuvem",
      "Mentoria técnica especializada"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "ads-orion",
    title: "ADS Orion",
    tagline: "Inteligência para campanhas de marketing digital de alta performance",
    description: "Plataforma inteligente para gerenciamento de anúncios digitais. Permite organizar campanhas, acompanhar desempenho, administrar anúncios e centralizar informações para otimizar estratégias de divulgação e marketing digital.",
    category: "Marketing Digital",
    clientType: "private",
    impact: "Aumento de até 40% no ROI de campanhas de anúncios digitais por meio de centralização e dados em tempo real.",
    details: [
      "Organização centralizada de campanhas",
      "Acompanhamento de desempenho em tempo real",
      "Administração unificada de canais de anúncios",
      "Geração automática de relatórios analíticos",
      "Otimização inteligente de verbas de marketing"
    ],
    imageSeed: "ads_orion"
  },
  {
    id: "mulher-segura",
    title: "Mulher Segura Bahia",
    tagline: "Tecnologia voltada à proteção, apoio e acolhimento das mulheres",
    description: "Plataforma de extrema importância focada no apoio e segurança de mulheres sob risco ou vulnerabilidade social, integrando órgãos públicos e a comunidade.",
    category: "Segurança Pública",
    clientType: "public",
    impact: "Canal direto e rápido com órgãos competentes, reduzindo significativamente o tempo de resposta em casos críticos.",
    details: [
      "Botão de emergência SOS instantâneo",
      "Compartilhamento de localização em tempo real com contatos confiáveis",
      "Rede de apoio comunitário e profissional",
      "Mapa inteligente de unidades de acolhimento e delegacias",
      "Registro facilitado e seguro de ocorrências",
      "Canal de comunicação segura e criptografada entre instituições",
      "Painel administrativo integrado para as forças de segurança"
    ],
    imageSeed: "mulher_segura"
  },
  {
    id: "educacao-inteligente",
    title: "Educação Inteligente",
    tagline: "Análise dinâmica de indicadores e evolução do desempenho escolar",
    description: "Sistema para acompanhamento pedagógico avançado e tomada de decisão fundamentada por dados em secretarias de educação municipal.",
    category: "Educação",
    clientType: "public",
    impact: "Redução de taxas de evasão e identificação ágil de dificuldades individuais de aprendizagem.",
    details: [
      "Avaliação diagnóstica automatizada de estudantes",
      "Identificação precoce de dificuldades de aprendizagem",
      "Emissão de relatórios pedagógicos automáticos",
      "Painéis de indicadores de progresso por escola e turma",
      "Módulo completo de gestão escolar e frequência digital",
      "Painel estratégico para secretários de educação e diretores"
    ],
    imageSeed: "educacao_inteligente"
  },
  {
    id: "cadastro-unico",
    title: "Agendamento Cadastro Único",
    tagline: "Agilidade e organização no acesso a benefícios e assistência social",
    description: "Plataforma inovadora para agendamento digital dos serviços e entrevistas do Cadastro Único, eliminando filas físicas.",
    category: "Assistência Social",
    clientType: "public",
    impact: "Fim das filas externas nas centrais de atendimento, trazendo dignidade e eficiência ao cidadão.",
    details: [
      "Agendamento online simplificado compatível com celulares",
      "Consulta instantânea de horários disponíveis",
      "Gestão inteligente de capacidade de atendimento por posto",
      "Painel administrativo para controle e estatísticas",
      "Organização automatizada de filas e chamadas de senhas",
      "Sistema de notificações e lembretes para evitar faltas"
    ],
    imageSeed: "agendamento_cadunico"
  },
  {
    id: "portal-camara",
    title: "Portal Legislativo Transparente",
    tagline: "Aproximação entre o cidadão e a gestão da Câmara Municipal",
    description: "Portal institucional moderno para câmaras de vereadores focado em transparência pública, comunicação social e gestão legislativa.",
    category: "Transparência",
    clientType: "public",
    impact: "Adequação completa à Lei de Acesso à Informação (LAI) com portal responsivo e acessível.",
    details: [
      "Portal dinâmico de notícias e comunicados oficiais",
      "Transmissão e catalogação de sessões legislativas em vídeo",
      "Módulo avançado de Transparência Fiscal e contas públicas",
      "Acompanhamento público de Projetos de Lei e emendas",
      "Canais de comunicação direta do cidadão com vereadores",
      "Sistema de protocolo eletrônico e Ouvidoria integrada",
      "Painel administrativo intuitivo para assessores"
    ],
    imageSeed: "portal_camara"
  },
  {
    id: "sistemas-personalizados",
    title: "Sistemas Personalizados",
    tagline: "Sistemas sob demanda focados em resolver desafios complexos",
    description: "Arquitetura e desenvolvimento de soluções proprietárias exclusivas com foco na escala, alto desempenho e experiência do usuário diferenciada.",
    category: "Personalizado",
    clientType: "both",
    impact: "Digitalização e otimização total de fluxos operacionais específicos de cada cliente.",
    details: [
      "Levantamento técnico e desenho de processos personalizado",
      "Interface sob medida alinhada à marca e necessidades",
      "Arquitetura moderna escalável em nuvem",
      "Integrações nativas de dados de múltiplos canais",
      "Garantia de segurança máxima e adequação à LGPD"
    ],
    imageSeed: "sistemas_personalizados"
  }
];

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    step: 1,
    title: "Levantamento de Requisitos",
    description: "Entendemos a fundo a sua dor, o seu modelo de negócios e os seus objetivos estratégicos.",
    iconName: "Search"
  },
  {
    step: 2,
    title: "Planejamento e Design",
    description: "Desenhamos a arquitetura ideal do sistema junto a protótipos modernos com a melhor experiência de usuário.",
    iconName: "FileText"
  },
  {
    step: 3,
    title: "Desenvolvimento Ágil",
    description: "Nossos engenheiros programam a solução utilizando metodologias ágeis e tecnologias robustas.",
    iconName: "Code2"
  },
  {
    step: 4,
    title: "Testes e Homologação",
    description: "Garantimos a qualidade final, realizando testes rigorosos de segurança, desempenho e usabilidade.",
    iconName: "ShieldCheck"
  },
  {
    step: 5,
    title: "Implantação e Treinamento",
    description: "Realizamos o deploy seguro em servidores de alta disponibilidade e treinamos a sua equipe.",
    iconName: "Rocket"
  },
  {
    step: 6,
    title: "Suporte e Evolução",
    description: "Oferecemos monitoramento, suporte de alta qualidade e atualizações contínuas para acompanhar o seu crescimento.",
    iconName: "Wrench"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Quais tipos de sistemas a Data Orion Tech desenvolve?",
    answer: "Desenvolvemos uma vasta gama de soluções sob medida: desde plataformas web corporativas, portais municipais, sistemas internos de gestão administrativa, fluxos de atendimento automatizados até sistemas analíticos (BI e Dashboards) e de agendamento."
  },
  {
    id: "faq-2",
    question: "A empresa desenvolve aplicativos para celulares?",
    answer: "Sim! Desenvolvemos aplicativos nativos e híbridos de alta performance para Android e iOS, totalmente integrados com painéis web de gerenciamento, geolocalização, notificações e sistemas de login seguros."
  },
  {
    id: "faq-3",
    question: "É possível solicitar um sistema 100% personalizado?",
    answer: "Com certeza. Nossos sistemas personalizados são nossa especialidade. Desenhamos a arquitetura do software desde o absoluto zero para atender regras de negócio específicas que sistemas comuns de prateleira não conseguem suprir."
  },
  {
    id: "faq-4",
    question: "A empresa atende órgãos públicos?",
    answer: "Sim, somos especialistas em tecnologia voltada para a gestão pública (GovTech). Desenvolvemos portais de transparência, plataformas legislativas para Câmaras de Vereadores, ferramentas de agendamento para assistência social e sistemas de monitoramento de segurança pública e educação municipal."
  },
  {
    id: "faq-5",
    question: "Como solicitar um orçamento?",
    answer: "Você pode solicitar de forma muito rápida preenchendo o formulário de contato disponível ao final desta página ou clicando no botão do WhatsApp para falar diretamente conosco."
  },
  {
    id: "faq-6",
    question: "A empresa oferece suporte técnico após a entrega do projeto?",
    answer: "Sim. Oferecemos pacotes de suporte e evolução continuada. Isso inclui manutenção corretiva, monitoramento de servidores, atualizações de segurança e implementação de novas melhorias sempre que necessário."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "Dr. Marcelo Cavalcanti",
    role: "Secretário Municipal de Administração",
    company: "Gestão Pública Integrada",
    text: "O sistema de Agendamento do Cadastro Único desenvolvido pela Data Orion Tech revolucionou nosso atendimento. Eliminamos as imensas filas que se formavam na porta da secretaria e trouxemos dignidade para os cidadãos.",
    avatarSeed: "marcelo",
    rating: 5
  },
  {
    id: "t-2",
    name: "Juliana Vasconcelos",
    role: "Diretora de Operações",
    company: "Grupo Vanguarda Comercial",
    text: "A análise de dados estratégicos desenhada pela equipe do Abel Santos nos permitiu enxergar pontos cegos na nossa logística. Os painéis em tempo real são intuitivos e dão total segurança para nossas reuniões de diretoria.",
    avatarSeed: "juliana",
    rating: 5
  },
  {
    id: "t-3",
    name: "Felipe Sampaio",
    role: "Coordenador de TI",
    company: "Câmara Municipal Legislativa",
    text: "O novo portal legislativo atendeu 100% das exigências da lei de transparência e foi muito bem aceito pelos vereadores e munícipes. O suporte pós-entrega é ágil e extremamente qualificado.",
    avatarSeed: "felipe",
    rating: 5
  }
];

export const DIFFERENTIALS = [
  "Sistemas personalizados",
  "Interfaces modernas",
  "Alto desempenho",
  "Segurança robusta",
  "Escalabilidade garantida",
  "Experiência do usuário (UX)",
  "Soluções inteligentes",
  "Desenvolvimento sob demanda",
  "Tecnologia para gestão pública",
  "Tecnologia para empresas privadas",
  "Inteligência de dados estratégica",
  "Inovação contínua"
];

export const AREAS_OF_ACTIVITY = [
  { title: "Empresas Privadas", description: "Sistemas de gestão interna, BI e automatização de vendas." },
  { title: "Prefeituras", description: "Canais de atendimento digital, portais municipais e agendamento público." },
  { title: "Secretarias Municipais", description: "Sistemas específicos para controle social, saúde, esporte e infraestrutura." },
  { title: "Câmaras de Vereadores", description: "Processo legislativo digital, transmissões e total transparência pública." },
  { title: "Instituições Públicas", description: "Sistemas integrados para autarquias e gestão documental eletrônica." },
  { title: "Educação", description: "Monitoramento de desempenho escolar e avaliação diagnóstica de alunos." },
  { title: "Assistência Social", description: "Agendamento otimizado de programas como Cadastro Único e benefícios." },
  { title: "Saúde", description: "Agendamentos, controle de insumos e indicadores de atendimento de saúde." },
  { title: "Segurança Pública", description: "Botões de alerta SOS, geolocalização de equipes e apoio à mulher." },
  { title: "Empreendedores", description: "Tecnologia sob demanda para lançar novas plataformas e aplicativos inovadores." },
  { title: "Organizações", description: "Portais institucionais modernos, dinâmicos e totalmente responsivos." }
];

export const COMPANY_NUMBERS = [
  { label: "Projetos Desenvolvidos", value: "45+", suffix: "Projetos", count: 45 },
  { label: "Clientes Atendidos", value: "30+", suffix: "Clientes", count: 30 },
  { label: "Soluções Criadas", value: "60+", suffix: "Soluções", count: 60 },
  { label: "Áreas de Atuação", value: "12", suffix: "Setores", count: 12 },
  { label: "Municípios Atendidos", value: "15+", suffix: "Municípios", count: 15 }
];

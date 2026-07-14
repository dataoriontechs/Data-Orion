export interface Service {
  id: string;
  title: string;
  description: string;
  items: string[];
  iconName: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  details: string[];
  clientType: 'public' | 'private' | 'both';
  tagline: string;
  impact: string;
  imageSeed: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  avatarSeed: string;
  rating: number;
}

export interface TimelineStep {
  step: number;
  title: string;
  description: string;
  iconName: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  company: string;
  city: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  status: 'unread' | 'read' | 'replied';
}

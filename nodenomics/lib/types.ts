// TypeScript types for Nodenomics Knowledge Hub

export interface ResearchTheme {
  id: string;
  title: string;
  description: string;
  keyInsight: string;
  citationCount: number;
  keyPapers: ResearchPaper[];
}

export interface ResearchPaper {
  authors: string;
  year: number;
  title: string;
  journal: string;
  citations: number;
  url: string;
}

export interface ImpactApplication {
  industry: string;
  useCase: string;
  description: string;
  participants: ParticipantType[];
  researchSource?: string;
}

export interface HumanitarianCase {
  title: string;
  description: string;
  aiAgent: string;
  dataNeeded: string;
  impact: string;
}

export interface ParticipantInfo {
  type: ParticipantType;
  title: string;
  description: string;
  sells: string;
  buys: string;
  icon: string;
  examples: string[];
  benefits: string[];
}

export type ParticipantType = 'iot-devices' | 'value-added-brokers' | 'ai-agents';

export interface FAQCategory {
  category: string;
  questions: FAQItem[];
}

export interface FAQItem {
  question: string;
  answer: string;
  researchSource?: string;
}

export interface PartnerCategory {
  category: string;
  description: string;
  examples: string[];
  participantType?: ParticipantType;
}

export interface Technology {
  name: string;
  description: string;
  advantages: string[];
  challenges: string[];
  researchSource: string;
}

export interface ResearchChallenge {
  title: string;
  description: string;
  currentApproaches: string[];
  futureDirections: string;
}

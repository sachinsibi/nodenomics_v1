export interface ParticipantInfo {
  type: "iot-devices" | "value-added-brokers" | "ai-agents"
  title: string
  description: string
  sells: string
  buys: string
  icon: string
  examples: string[]
  benefits: string[]
}

export interface ImpactApplication {
  industry: string
  useCase: string
  description: string
  participants: string[]
  researchSource?: string
}

export interface HumanitarianCase {
  title: string
  description: string
  aiAgent: string
  dataNeeded: string
  impact: string
}

export interface ResearchTheme {
  id: string
  title: string
  description: string
  keyInsight: string
  citationCount: number
  keyPapers: ResearchPaper[]
}

export interface ResearchPaper {
  authors: string
  year: number
  title: string
  journal: string
  citations: number
  url?: string
}

export interface Technology {
  name: string
  description: string
  advantages: string[]
  challenges: string[]
  researchSource: string
}

export interface ResearchChallenge {
  title: string
  description: string
  currentApproaches: string[]
  futureDirections: string
}

export interface FAQCategory {
  category: string
  questions: FAQItem[]
}

export interface FAQItem {
  question: string
  answer: string
  researchSource?: string
}

export interface CloudProvider {
  name: string
  pricePerHour: number
  color: string
}

export interface ComputeConfig {
  vcpus: number
  memory: number
  storage: number
  hours: number
}

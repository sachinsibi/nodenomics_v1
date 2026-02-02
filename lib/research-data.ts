import { ResearchTheme, Technology, ResearchChallenge } from "./types"

export const researchThemes: ResearchTheme[] = [
  {
    id: "blockchain-marketplaces",
    title: "Blockchain-Based Data Marketplaces",
    description:
      "Decentralized platforms for secure and transparent data exchange",
    keyInsight:
      "Blockchain-based marketplaces eliminate intermediaries, reduce transaction costs, enhance data provenance, and empower data producers with greater control over their assets.",
    citationCount: 133,
    keyPapers: [
      {
        authors: "Gonzalez V. et al.",
        year: 2023,
        title:
          "Design and evaluation of a scalable IoT Data Marketplace (BIDM)",
        journal: "ScienceDirect",
        citations: 20,
      },
      {
        authors: "Nguyen LD. et al.",
        year: 2020,
        title:
          "Modeling and analysis of data trading on blockchain-based markets in IoT",
        journal: "IEEE",
        citations: 102,
      },
    ],
  },
  {
    id: "smart-contracts",
    title: "Smart Contracts and Autonomous Agents",
    description:
      "Self-executing agreements enabling autonomous machine transactions",
    keyInsight:
      "Smart contracts enable machines to transact autonomously without trusted third parties. Integration with AI creates sophisticated autonomous agents.",
    citationCount: 1500,
    keyPapers: [
      {
        authors: "Wang S. et al.",
        year: 2019,
        title:
          "Blockchain-enabled smart contracts: architecture, applications, and future trends",
        journal: "IEEE Transactions",
        citations: 1500,
      },
    ],
  },
  {
    id: "distributed-ledger",
    title: "Distributed Ledger Technologies",
    description: "Infrastructure layer for decentralized transaction recording",
    keyInsight:
      "DAG-based ledgers like IOTA overcome blockchain scalability bottlenecks through parallel transaction processing and feeless micropayments.",
    citationCount: 389,
    keyPapers: [
      {
        authors: "Khan MA. et al.",
        year: 2022,
        title:
          "A Review of Distributed Ledger Technologies in the Machine Economy",
        journal: "ScienceDirect",
        citations: 45,
      },
    ],
  },
  {
    id: "compute-trading",
    title: "Cloud and Edge Computing Resource Trading",
    description:
      "Markets for dynamic allocation of computational resources",
    keyInsight:
      "Edge computing brings computation closer to data sources, reducing latency. Game-theoretic approaches optimize resource allocation.",
    citationCount: 469,
    keyPapers: [
      {
        authors: "Li Z. et al.",
        year: 2019,
        title: "Resource trading for edge-cloud-assisted IoT",
        journal: "IEEE Trans. Industrial Informatics",
        citations: 150,
      },
    ],
  },
  {
    id: "federated-learning",
    title: "Federated Learning Data Markets",
    description: "Privacy-preserving ML with incentive mechanisms",
    keyInsight:
      "Federated Learning enables model training on decentralized data without data leaving source devices. Shapley values ensure fair reward distribution.",
    citationCount: 1383,
    keyPapers: [
      {
        authors: "Zhan Y. et al.",
        year: 2020,
        title: "A learning-based incentive mechanism for FL",
        journal: "IEEE IoT Journal",
        citations: 707,
      },
    ],
  },
  {
    id: "energy-trading",
    title: "Peer-to-Peer Energy Trading",
    description: "Decentralized markets for renewable energy exchange",
    keyInsight:
      "Blockchain and smart contracts enable autonomous P2P energy trading. Double auction mechanisms achieve efficient and fair price discovery.",
    citationCount: 334,
    keyPapers: [
      {
        authors: "Doan HT. et al.",
        year: 2021,
        title:
          "P2P energy trading using double auction game theory and blockchain",
        journal: "IEEE Access",
        citations: 176,
      },
    ],
  },
]

export const keyTechnologies: Technology[] = [
  {
    name: "DAG (Directed Acyclic Graph)",
    description:
      "Graph of interconnected transactions enabling feeless micropayments",
    advantages: [
      "Feeless transactions",
      "Scalability improves with network activity",
      "Parallel transaction processing",
      "Ideal for micropayments",
    ],
    challenges: [
      "Newer technology with evolving security models",
      "Requires critical mass for security",
    ],
    researchSource: "Section 2.3",
  },
  {
    name: "Smart Contracts",
    description: "Self-executing code on distributed ledgers",
    advantages: [
      "Automate complex transactions",
      "Eliminate intermediaries",
      "Transparent and auditable",
    ],
    challenges: [
      "Security vulnerabilities",
      "Formal verification complexity",
      "Immutability can be problematic for bugs",
    ],
    researchSource: "Section 2.2",
  },
  {
    name: "Secure Multi-Party Computation",
    description: "Cryptographic technique for privacy-preserving computation",
    advantages: [
      "Compute on encrypted data",
      "No single party sees raw data",
      "Mathematically proven security",
    ],
    challenges: ["Computational overhead", "Complex implementation"],
    researchSource: "Section 2.9",
  },
]

export const researchChallenges: ResearchChallenge[] = [
  {
    title: "Scalability",
    description:
      "Transaction throughput of many blockchain platforms is insufficient for high-frequency IoT data streams.",
    currentApproaches: [
      "Layer 2 scaling solutions",
      "DAG-based ledgers for parallel processing",
      "Hybrid on-chain/off-chain architectures",
    ],
    futureDirections:
      "Integration of Mobile Edge Computing (MEC) with blockchain.",
  },
  {
    title: "Privacy-Utility Tradeoff",
    description:
      "Balancing data utility for analysis with protection of sensitive information.",
    currentApproaches: [
      "Secure Multi-Party Computation (SMPC)",
      "Zero-Knowledge Proofs (ZKPs)",
      "Differential Privacy",
    ],
    futureDirections:
      "Advanced cryptographic techniques that minimize utility loss.",
  },
  {
    title: "Interoperability",
    description:
      "Enabling seamless interaction between disparate DLT platforms and legacy systems.",
    currentApproaches: [
      "Cross-chain bridges",
      "Standardized protocols",
      "Hybrid blockchain architectures",
    ],
    futureDirections:
      "Universal standards for cross-platform data and value exchange.",
  },
]

export const researchStats = {
  totalStudies: 115,
  thematicAreas: 12,
  totalCitations: 5000,
  yearRange: "2001-2026",
  topJournals: ["IEEE", "ScienceDirect", "Springer", "arXiv", "PMC"],
}

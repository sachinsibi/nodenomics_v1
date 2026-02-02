import { ResearchTheme, ResearchPaper, Technology, ResearchChallenge } from './types';

// 12 Research Themes from M2M Research Document
export const researchThemes: ResearchTheme[] = [
  {
    id: 'blockchain-marketplaces',
    title: 'Blockchain-Based Data Marketplaces',
    description: 'Decentralized platforms for secure and transparent data exchange',
    keyInsight: 'Blockchain-based marketplaces eliminate intermediaries, reduce transaction costs, enhance data provenance, and empower data producers with greater control over their assets.',
    citationCount: 133,
    keyPapers: [
      {
        authors: 'González V. et al.',
        year: 2023,
        title: 'Design and evaluation of a scalable IoT Data Marketplace (BIDM)',
        journal: 'ScienceDirect',
        citations: 20,
        url: 'https://www.sciencedirect.com/science/article/pii/S2542660523000458'
      },
      {
        authors: 'Nguyen LD. et al.',
        year: 2020,
        title: 'Modeling and analysis of data trading on blockchain-based markets in IoT',
        journal: 'IEEE',
        citations: 102,
        url: 'https://ieeexplore.ieee.org/abstract/document/9324804/'
      },
      {
        authors: 'Banerjee P. et al.',
        year: 2018,
        title: 'Blockchain Enabled Data Marketplace - Design and Challenges',
        journal: 'arXiv',
        citations: 58,
        url: 'https://arxiv.org/pdf/1811.11462'
      }
    ]
  },
  {
    id: 'smart-contracts',
    title: 'Smart Contracts and Autonomous Agents',
    description: 'Self-executing agreements enabling autonomous machine transactions',
    keyInsight: 'Smart contracts enable machines to transact autonomously without trusted third parties. Integration with AI creates sophisticated autonomous agents with goal-oriented behaviors.',
    citationCount: 1500,
    keyPapers: [
      {
        authors: 'Wang S. et al.',
        year: 2019,
        title: 'Blockchain-enabled smart contracts: architecture, applications, and future trends',
        journal: 'IEEE Transactions',
        citations: 1500,
        url: 'https://ieeexplore.ieee.org/abstract/document/8643084/'
      },
      {
        authors: 'Ciatto G. et al.',
        year: 2019,
        title: 'Towards agent-oriented blockchains: Autonomous smart contracts',
        journal: 'Springer',
        citations: 42,
        url: 'https://link.springer.com/chapter/10.1007/978-3-030-25693-7_1'
      }
    ]
  },
  {
    id: 'distributed-ledger',
    title: 'Distributed Ledger Technologies',
    description: 'Infrastructure layer for decentralized transaction recording',
    keyInsight: 'DAG-based ledgers like IOTA overcome blockchain scalability bottlenecks through parallel transaction processing and feeless micropayments, making them ideal for M2M economies.',
    citationCount: 389,
    keyPapers: [
      {
        authors: 'Khan MA. et al.',
        year: 2022,
        title: 'A Review of Distributed Ledger Technologies in the Machine Economy',
        journal: 'ScienceDirect',
        citations: 45,
        url: 'https://www.sciencedirect.com/science/article/pii/S2212827122004103'
      },
      {
        authors: 'Cao B. et al.',
        year: 2019,
        title: 'Challenges in distributed consensus for IoT and blockchain',
        journal: 'IEEE',
        citations: 389,
        url: ''
      }
    ]
  },
  {
    id: 'compute-trading',
    title: 'Cloud and Edge Computing Resource Trading',
    description: 'Markets for dynamic allocation of computational resources',
    keyInsight: 'Edge computing brings computation closer to data sources, reducing latency. Game-theoretic approaches optimize resource allocation in edge-cloud markets.',
    citationCount: 469,
    keyPapers: [
      {
        authors: 'Li Z. et al.',
        year: 2019,
        title: 'Resource trading for edge-cloud-assisted IoT',
        journal: 'IEEE Trans. Industrial Informatics',
        citations: 150,
        url: 'https://ieeexplore.ieee.org/abstract/document/8633978/'
      },
      {
        authors: 'Zhou Z. et al.',
        year: 2019,
        title: 'Resource sharing and task offloading in IoT fog computing',
        journal: 'IEEE',
        citations: 129,
        url: 'https://ieeexplore.ieee.org/abstract/document/8750979/'
      },
      {
        authors: 'Garg SK. et al.',
        year: 2013,
        title: 'Mandi: a market exchange for trading utility and cloud computing services',
        journal: 'J. Supercomputing',
        citations: 96,
        url: 'https://link.springer.com/article/10.1007/s11227-011-0629-z'
      }
    ]
  },
  {
    id: 'federated-learning',
    title: 'Federated Learning Data Markets',
    description: 'Privacy-preserving ML with incentive mechanisms',
    keyInsight: 'Federated Learning enables model training on decentralized data without data leaving source devices. Shapley values ensure fair reward distribution based on marginal contributions.',
    citationCount: 1383,
    keyPapers: [
      {
        authors: 'Zhan Y. et al.',
        year: 2020,
        title: 'A learning-based incentive mechanism for FL',
        journal: 'IEEE IoT Journal',
        citations: 707,
        url: 'https://ieeexplore.ieee.org/abstract/document/9123238/'
      },
      {
        authors: 'Zhan Y. et al.',
        year: 2021,
        title: 'A survey of incentive mechanism design for federated learning',
        journal: 'IEEE Transactions',
        citations: 387,
        url: 'https://ieeexplore.ieee.org/abstract/document/9570285/'
      },
      {
        authors: 'Tu X. et al.',
        year: 2022,
        title: 'Economic and game theoretic perspective on FL incentives',
        journal: 'IEEE Transactions',
        citations: 245,
        url: 'https://ieeexplore.ieee.org/abstract/document/9813958/'
      }
    ]
  },
  {
    id: 'energy-trading',
    title: 'Peer-to-Peer Energy Trading',
    description: 'Decentralized markets for renewable energy exchange',
    keyInsight: 'Blockchain and smart contracts enable autonomous P2P energy trading. Double auction mechanisms achieve efficient and fair price discovery for localized energy markets.',
    citationCount: 334,
    keyPapers: [
      {
        authors: 'Doan HT. et al.',
        year: 2021,
        title: 'P2P energy trading using double auction game theory and blockchain',
        journal: 'IEEE Access',
        citations: 176,
        url: 'https://ieeexplore.ieee.org/abstract/document/9400902/'
      },
      {
        authors: 'Lasla N. et al.',
        year: 2020,
        title: 'A blockchain based trading platform for EV charging in smart cities',
        journal: 'IEEE Open Journal',
        citations: 92,
        url: 'https://ieeexplore.ieee.org/abstract/document/9151291/'
      }
    ]
  },
  {
    id: 'vehicular-networks',
    title: 'Vehicular Networks and V2X Data Trading',
    description: 'Data exchange for autonomous vehicles and transportation',
    keyInsight: 'Vehicles generate valuable sensor data about traffic, road conditions, and environment. Lightweight blockchain solutions address resource constraints while ensuring trust and data integrity.',
    citationCount: 388,
    keyPapers: [
      {
        authors: 'Yusuf SA. et al.',
        year: 2024,
        title: 'A comprehensive review of V2X in autonomous vehicles',
        journal: 'ScienceDirect',
        citations: 208,
        url: 'https://www.sciencedirect.com/science/article/pii/B9780443191301000037'
      },
      {
        authors: 'Jung C. et al.',
        year: 2020,
        title: 'A survey of V2X-communication-aided autonomous driving',
        journal: 'PMC',
        citations: 96,
        url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7465939/'
      }
    ]
  },
  {
    id: 'data-pricing',
    title: 'Data Pricing and Valuation Mechanisms',
    description: 'Economic models for determining data value',
    keyInsight: 'Dynamic pricing models adapt to market conditions, data freshness, and quality. Shapley values quantify data contributions to ML model performance for fair compensation.',
    citationCount: 730,
    keyPapers: [
      {
        authors: 'Liang F. et al.',
        year: 2018,
        title: 'A survey on big data market: pricing, trading, and protection',
        journal: 'IEEE Access',
        citations: 462,
        url: 'https://ieeexplore.ieee.org/abstract/document/8489392/'
      },
      {
        authors: 'Sim RHL.',
        year: 2019,
        title: 'Data Valuation in Machine Learning',
        journal: 'IJCAI',
        citations: 98,
        url: 'https://www.ijcai.org/proceedings/2019/0834.pdf'
      },
      {
        authors: 'Zhang M. et al.',
        year: 2023,
        title: 'A survey of data pricing for data marketplaces',
        journal: 'IEEE Trans. Big Data',
        citations: 78,
        url: ''
      }
    ]
  },
  {
    id: 'privacy-preserving',
    title: 'Privacy-Preserving Data Exchange',
    description: 'Cryptographic techniques for secure data trading',
    keyInsight: 'Secure Multi-Party Computation (SMPC), Differential Privacy, and Zero-Knowledge Proofs enable data trading and analysis without revealing sensitive information.',
    citationCount: 238,
    keyPapers: [
      {
        authors: 'Hynes N. et al.',
        year: 2018,
        title: 'Sterling: A Privacy-Preserving Data Marketplace',
        journal: 'VLDB',
        citations: 128,
        url: 'http://www.vldb.org/pvldb/vol11/p1934-hynes.pdf'
      },
      {
        authors: 'Kumar M. et al.',
        year: 2023,
        title: 'Secure and reliable data exchange in cyber-physical healthcare',
        journal: 'ScienceDirect',
        citations: 85,
        url: 'https://www.sciencedirect.com/science/article/pii/S2667345223000330'
      }
    ]
  },
  {
    id: 'consensus-mechanisms',
    title: 'Consensus Mechanisms and Transaction Throughput',
    description: 'Agreement protocols for distributed networks',
    keyInsight: 'Trade-off between security, decentralization, and scalability drives research into lightweight consensus. Layer 2 solutions and edge computing integration improve throughput.',
    citationCount: 717,
    keyPapers: [
      {
        authors: 'Cao B. et al.',
        year: 2019,
        title: 'Challenges in distributed consensus for IoT and blockchain',
        journal: 'IEEE',
        citations: 389,
        url: ''
      },
      {
        authors: 'Alkhateeb A. et al.',
        year: 2022,
        title: 'A review of hybrid blockchain platforms for the IoT',
        journal: 'PMC',
        citations: 178,
        url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8962977/'
      },
      {
        authors: 'Gugueoth V. et al.',
        year: 2023,
        title: 'A review of IoT security and privacy using decentralized blockchain',
        journal: 'ScienceDirect',
        citations: 111,
        url: 'https://www.sciencedirect.com/science/article/pii/S1574013723000527'
      }
    ]
  },
  {
    id: 'game-theory',
    title: 'Game Theory and Mechanism Design',
    description: 'Mathematical frameworks for strategic interactions',
    keyInsight: 'Auction mechanisms allocate resources efficiently. Nash equilibrium analysis predicts market outcomes. Mechanism design creates rules that incentivize truthful bidding and maximize social welfare.',
    citationCount: 136,
    keyPapers: [
      {
        authors: 'Sharghivand N. et al.',
        year: 2021,
        title: 'A comprehensive survey on auction mechanism design for cloud/edge computing',
        journal: 'IEEE',
        citations: 42,
        url: 'https://ieeexplore.ieee.org/document/9530537/'
      },
      {
        authors: "D'Oro S. et al.",
        year: 2017,
        title: 'A game theoretic approach for distributed resource allocation',
        journal: '',
        citations: 69,
        url: ''
      }
    ]
  },
  {
    id: 'ai-agents',
    title: 'AI Agents and Autonomous Economic Systems',
    description: 'Intelligent agents as autonomous economic actors',
    keyInsight: 'Reinforcement Learning enables agents to develop adaptive trading strategies. Multi-Agent Systems simulate emergent behaviors. Ethical implications of autonomous economic agents require careful consideration.',
    citationCount: 238,
    keyPapers: [
      {
        authors: 'Dakalbab F. et al.',
        year: 2024,
        title: 'A review of artificial intelligence techniques in financial trading',
        journal: 'ScienceDirect',
        citations: 109,
        url: 'https://www.sciencedirect.com/science/article/pii/S1319157824001046'
      },
      {
        authors: 'Dou WW. et al.',
        year: 2025,
        title: 'AI-Powered Trading, Algorithmic Collusion, and Price',
        journal: 'NBER',
        citations: 94,
        url: 'https://www.nber.org/papers/w34054'
      }
    ]
  }
];

// Key Technologies
export const keyTechnologies: Technology[] = [
  {
    name: 'Blockchain',
    description: 'Linear chain of blocks with decentralized consensus',
    advantages: [
      'High security and immutability',
      'Proven track record',
      'Wide ecosystem support'
    ],
    challenges: [
      'Limited scalability (block size/time)',
      'High transaction fees',
      'Energy consumption (PoW)'
    ],
    researchSource: 'Section 2.3'
  },
  {
    name: 'DAG (Directed Acyclic Graph)',
    description: 'Graph of interconnected transactions (e.g., IOTA Tangle)',
    advantages: [
      'Feeless transactions',
      'Scalability improves with network activity',
      'Parallel transaction processing',
      'Ideal for micropayments'
    ],
    challenges: [
      'Newer technology with evolving security models',
      'Requires critical mass for security'
    ],
    researchSource: 'Section 2.3'
  },
  {
    name: 'Smart Contracts',
    description: 'Self-executing code on distributed ledgers',
    advantages: [
      'Automate complex transactions',
      'Eliminate intermediaries',
      'Transparent and auditable'
    ],
    challenges: [
      'Security vulnerabilities (e.g., DAO attack)',
      'Formal verification complexity',
      'Immutability can be problematic for bugs'
    ],
    researchSource: 'Section 2.2'
  },
  {
    name: 'Secure Multi-Party Computation (SMPC)',
    description: 'Cryptographic technique for privacy-preserving computation',
    advantages: [
      'Compute on encrypted data',
      'No single party sees raw data',
      'Mathematically proven security'
    ],
    challenges: [
      'Computational overhead',
      'Complex implementation'
    ],
    researchSource: 'Section 2.9'
  },
  {
    name: 'Differential Privacy',
    description: 'Statistical noise addition to protect individual privacy',
    advantages: [
      'Quantifiable privacy guarantees',
      'Useful for aggregate analytics',
      'Wide applicability'
    ],
    challenges: [
      'Privacy-utility tradeoff',
      'Parameter tuning complexity'
    ],
    researchSource: 'Section 2.9'
  }
];

// Research Challenges
export const researchChallenges: ResearchChallenge[] = [
  {
    title: 'Scalability',
    description: 'Transaction throughput of many blockchain platforms is insufficient for high-frequency IoT data streams.',
    currentApproaches: [
      'Layer 2 scaling solutions (state channels, sidechains)',
      'DAG-based ledgers for parallel processing',
      'Hybrid on-chain/off-chain architectures',
      'Lightweight consensus mechanisms for IoT'
    ],
    futureDirections: 'Integration of Mobile Edge Computing (MEC) with blockchain to leverage computational resources at network edge.'
  },
  {
    title: 'Privacy-Utility Tradeoff',
    description: 'Balancing data utility for analysis with protection of sensitive information.',
    currentApproaches: [
      'Secure Multi-Party Computation (SMPC)',
      'Zero-Knowledge Proofs (ZKPs)',
      'Differential Privacy',
      'Federated Learning with local differential privacy'
    ],
    futureDirections: 'Advanced cryptographic techniques that minimize utility loss while providing strong privacy guarantees.'
  },
  {
    title: 'Interoperability',
    description: 'Enabling seamless interaction between disparate DLT platforms and legacy systems.',
    currentApproaches: [
      'Cross-chain bridges',
      'Standardized protocols',
      'Hybrid blockchain architectures'
    ],
    futureDirections: 'Universal standards for cross-platform data and value exchange in the machine economy.'
  },
  {
    title: 'Data Quality and Provenance',
    description: 'Ensuring data quality and tracking data lineage in decentralized marketplaces.',
    currentApproaches: [
      'Reputation systems',
      'Stake-based quality assurance',
      'Blockchain-based provenance tracking',
      'Smart contract enforcement'
    ],
    futureDirections: 'AI-powered quality assessment combined with cryptographic proof of provenance.'
  },
  {
    title: 'Autonomous Agent Governance',
    description: 'Ethical, legal, and regulatory frameworks for autonomous economic agents.',
    currentApproaches: [
      'Trust-based smart contracts',
      'Reputation metrics',
      'Human-in-the-loop oversight'
    ],
    futureDirections: 'Clear regulatory frameworks ensuring fairness, accountability, and preventing systemic risks from autonomous trading.'
  }
];

// Summary Statistics
export const researchStats = {
  totalStudies: 115,
  thematicAreas: 12,
  totalCitations: 5000,
  yearRange: '2001-2026',
  topJournals: ['IEEE', 'ScienceDirect', 'Springer', 'arXiv', 'PMC']
};

import { FAQCategory } from './types';

export const faqCategories: FAQCategory[] = [
  {
    category: 'General',
    questions: [
      {
        question: 'What is Nodenomics?',
        answer: 'Nodenomics is a decentralized data marketplace enabling autonomous machine-to-machine (M2M) transactions. It provides the infrastructure for IoT devices, value-added brokers, and AI agents to buy, sell, and trade data and compute resources in real-time using micropayments.'
      },
      {
        question: 'What is the machine economy?',
        answer: 'The machine economy is an emerging economic paradigm where autonomous agents—intelligent software programs and connected devices—engage in economic transactions, trading data and computational resources with minimal human intervention. This convergence of IoT, AI, and distributed ledger technology creates new business models and efficiency gains across industries.',
        researchSource: 'M2M Research Document Introduction'
      },
      {
        question: 'Who are the three participants in Nodenomics?',
        answer: 'Nodenomics has three participant types: (1) IoT Devices that sell raw data and buy compute resources, (2) Value-Added Brokers that buy raw data, refine it, and sell refined data products, and (3) AI Agents that buy refined data and sell compute resources while performing autonomous tasks.'
      },
      {
        question: 'How is this different from traditional data marketplaces?',
        answer: 'Unlike traditional marketplaces that require manual contracts, subscriptions, and human-mediated payments, Nodenomics enables autonomous, real-time transactions at machine speed. Devices can instantly purchase exactly the data they need using micropayments, without contracts or intermediaries. The marketplace is decentralized, transparent, and operates 24/7 without human intervention.'
      },
      {
        question: 'What makes Nodenomics suitable for humanitarian applications?',
        answer: 'Nodenomics reduces barriers to data access for humanitarian organizations through micropayments (pay only for what you use), autonomous operation (24/7 monitoring without human oversight), and decentralized infrastructure (resilient to single points of failure). AI agents can autonomously coordinate disaster response, healthcare, food security, and environmental protection at scales impossible with manual coordination.'
      }
    ]
  },
  {
    category: 'For IoT Devices',
    questions: [
      {
        question: 'How do IoT devices sell data on Nodenomics?',
        answer: 'IoT devices register on the Nodenomics network, specify what data they can provide (type, quality, latency), and set pricing rules. When buyers request data matching their offerings, smart contracts automatically execute the transaction, transfer micropayments, and deliver the data. The entire process is autonomous—no human intervention required.',
        researchSource: 'Section 2.2: Smart Contracts and Autonomous Agents'
      },
      {
        question: 'What types of data can IoT devices monetize?',
        answer: 'Any machine-generated data with market value: environmental sensor readings (temperature, air quality, soil moisture), traffic and infrastructure data, energy production and consumption, industrial equipment telemetry, weather data, location and movement patterns, health monitoring signals, and more. Data value depends on accuracy, freshness, and market demand.'
      },
      {
        question: 'How are micropayments handled?',
        answer: 'Nodenomics uses DAG-based distributed ledger technology (like IOTA Tangle) that enables feeless micropayments. Unlike traditional blockchains with high transaction fees, DAG architectures scale with network activity and process transactions in parallel, making fractional-cent payments economically viable.',
        researchSource: 'Section 2.3: Distributed Ledger Technologies (DAG comparison)'
      },
      {
        question: 'What about data privacy and security?',
        answer: 'Nodenomics employs multiple privacy-preserving techniques: (1) Secure Multi-Party Computation (SMPC) allows computation on data without revealing raw values, (2) Differential Privacy adds statistical noise to protect individuals while preserving aggregate insights, (3) Zero-Knowledge Proofs enable verification without data disclosure, and (4) blockchain immutability ensures tamper-proof transaction records.',
        researchSource: 'Section 2.9: Privacy-Preserving Data Exchange'
      },
      {
        question: 'Can existing IoT devices integrate with Nodenomics?',
        answer: 'Yes. Nodenomics provides APIs and SDKs for common IoT platforms (AWS IoT, Azure IoT Hub, Google Cloud IoT). Devices need internet connectivity and ability to run lightweight client software. Edge computing capabilities can enhance performance but aren\'t required for basic participation.'
      }
    ]
  },
  {
    category: 'For Value-Added Brokers',
    questions: [
      {
        question: 'What is a Value-Added Broker?',
        answer: 'Value-Added Brokers are organizations that purchase raw data from IoT devices, apply analytics and enrichment (cleaning, aggregation, validation, privacy-preservation), and sell refined data products to AI agents and other consumers. They create value through expertise in data science, domain knowledge, and privacy-preserving techniques.'
      },
      {
        question: 'How do brokers acquire raw data?',
        answer: 'Brokers query the Nodenomics marketplace specifying their data requirements (type, geographic coverage, quality thresholds, price limits). Smart contracts automatically match brokers with suitable IoT devices, execute micropayments, and deliver data. Brokers can establish ongoing data feeds or make one-time purchases.'
      },
      {
        question: 'What data enrichment services can brokers provide?',
        answer: 'Brokers can offer: data cleaning and outlier removal, multi-source aggregation and fusion, temporal and spatial interpolation, privacy-preserving transformations, quality assurance and validation, anomaly detection, predictive analytics, domain-specific insights, and regulatory compliance services (GDPR, HIPAA, etc.).'
      },
      {
        question: 'How is data quality ensured?',
        answer: 'Nodenomics uses a multi-layered quality system: (1) Reputation mechanisms track provider reliability over time, (2) buyers rate data quality after each transaction, (3) smart contracts can include quality guarantees with automatic refunds for substandard data, (4) brokers stake tokens as quality assurance, and (5) cryptographic proofs of data provenance track the entire data lineage.',
        researchSource: 'Research Challenges: Data Quality and Provenance'
      },
      {
        question: 'What are the revenue opportunities?',
        answer: 'Brokers earn revenue through: (1) margin on data products (buy raw, sell refined), (2) premium pricing for high-quality, validated data, (3) specialized analytics services, (4) subscription services for ongoing data feeds, (5) consulting on data strategy, and (6) privacy-preserving computation services. Brokers with strong reputations command higher prices.'
      }
    ]
  },
  {
    category: 'For AI Agents',
    questions: [
      {
        question: 'How do AI agents purchase data autonomously?',
        answer: 'AI agents are programmed with decision rules, budgets, and data requirements. Using reinforcement learning, they adaptively purchase data based on task needs, data quality, pricing, and urgency. Smart contracts execute transactions automatically when agents\' criteria are met. Agents can operate 24/7 without human approval for routine purchases.',
        researchSource: 'Section 2.12: AI Agents and Autonomous Economic Systems'
      },
      {
        question: 'What types of humanitarian missions can AI agents perform?',
        answer: 'AI agents autonomously coordinate: disaster response (purchasing real-time sensor data for rescue optimization), healthcare diagnostics (buying anonymized patient data for improved models), food security monitoring (acquiring agricultural and market data to predict shortages), environmental conservation (purchasing wildlife and deforestation data), pandemic early warning (buying syndromic surveillance data), and clean water management (acquiring quality and usage data).'
      },
      {
        question: 'How do AI agents sell compute resources?',
        answer: 'AI agents with idle computational capacity (GPUs, processing power, storage) can sell these resources on the marketplace. Edge computing and fog computing architectures enable distributed computation. Agents offer compute at competitive prices, and smart contracts ensure service delivery and payment. This creates a circular economy where agents both buy data and sell compute.',
        researchSource: 'Section 2.4: Cloud and Edge Computing Resource Trading'
      },
      {
        question: 'What safeguards exist for autonomous transactions?',
        answer: 'Multiple safeguards protect autonomous transactions: (1) spending limits and budget constraints, (2) human-in-the-loop approval for high-value transactions, (3) reputation systems prevent malicious actors, (4) smart contract audits ensure code correctness, (5) multi-signature wallets for organizational agents, (6) anomaly detection flags unusual trading patterns, and (7) immutable blockchain records enable transaction audits.'
      }
    ]
  },
  {
    category: 'Technical',
    questions: [
      {
        question: 'What blockchain/DLT technology does Nodenomics use?',
        answer: 'Nodenomics uses a hybrid approach: DAG-based ledgers (like IOTA Tangle) for micropayments due to feeless transactions and high scalability, combined with blockchain for high-value transactions and smart contract execution. This hybrid architecture balances the scalability needs of IoT (millions of micropayments) with the security requirements of valuable data trades.',
        researchSource: 'Section 2.3: DAG advantages for M2M micropayments'
      },
      {
        question: 'How fast are transactions?',
        answer: 'Average transaction latency is under 100ms from data request to delivery. DAG-based systems achieve this through parallel transaction processing rather than sequential block creation. Scalability actually improves with network growth—more transactions mean faster confirmation times.',
        researchSource: 'Platform Metrics'
      },
      {
        question: 'What about scalability?',
        answer: 'Nodenomics addresses scalability through: (1) DAG architecture that processes transactions in parallel, (2) Layer 2 solutions for off-chain transaction processing, (3) edge computing integration to distribute computational load, (4) lightweight consensus mechanisms optimized for IoT, and (5) state channels for high-frequency trading between repeat participants.',
        researchSource: 'Section 2.10: Consensus Mechanisms; Research Challenge: Scalability'
      },
      {
        question: 'How is data provenance tracked?',
        answer: 'Every data transaction is recorded on the distributed ledger with cryptographic hashes linking data to its source. The ledger tracks: original IoT device ID, timestamp, any broker transformations applied, quality ratings, and current owner. This immutable chain of custody prevents data tampering and enables verification of data authenticity.'
      },
      {
        question: 'What privacy-preserving techniques are used?',
        answer: 'Nodenomics employs state-of-the-art cryptographic techniques: (1) Secure Multi-Party Computation (SMPC) enables computation on encrypted data, (2) Differential Privacy protects individual records while allowing aggregate analysis, (3) Zero-Knowledge Proofs verify data properties without revealing the data itself, (4) Federated Learning trains models without centralizing data, and (5) Homomorphic encryption allows computation on encrypted data.',
        researchSource: 'Section 2.9: Privacy-Preserving Data Exchange'
      }
    ]
  },
  {
    category: 'Business Model',
    questions: [
      {
        question: 'How does Nodenomics make money?',
        answer: 'Nodenomics charges a small transaction fee (typically 1-2%) on each data or compute trade. This fee covers network maintenance, security, and continuous development. Unlike centralized marketplaces with high fees (15-30%), our decentralized architecture enables minimal overhead while ensuring sustainability.'
      },
      {
        question: 'What are the transaction fees?',
        answer: 'Transaction fees vary by transaction value and participant type: Micropayments under $1: 2% fee; Transactions $1-$100: 1.5% fee; Transactions over $100: 1% fee. IoT devices in humanitarian applications receive 50% fee reduction. Compute resource sales: 1% fee. Volume discounts available for enterprise participants.'
      },
      {
        question: 'How is pricing determined?',
        answer: 'Pricing is market-driven through auction mechanisms. Sellers set minimum prices, buyers set maximum prices, and smart contracts match compatible trades. Dynamic pricing models adapt to data freshness, quality, urgency, and market supply/demand. Game theory ensures efficient price discovery and prevents market manipulation.',
        researchSource: 'Section 2.8: Data Pricing; Section 2.11: Game Theory and Mechanism Design'
      },
      {
        question: 'What are the minimum transaction sizes?',
        answer: 'No minimum transaction size. DAG-based architecture enables economically viable micropayments down to fractions of a cent. This allows IoT devices to sell individual sensor readings and AI agents to purchase exactly the data they need, when they need it, without subscription overhead.'
      }
    ]
  },
  {
    category: 'Getting Started',
    questions: [
      {
        question: 'How do I join Nodenomics as an IoT device owner?',
        answer: 'Visit our Partners page and select "IoT Device Provider" to request early access. You\'ll receive integration documentation, API keys, and SDKs for your platform. Technical support is available to help with device registration and data specification.'
      },
      {
        question: 'How do I become a Value-Added Broker?',
        answer: 'Apply through our Partners page under "Value-Added Broker". We\'ll review your data science capabilities, privacy compliance, and domain expertise. Approved brokers receive access to the marketplace, data procurement tools, and certification as trusted data refiners.'
      },
      {
        question: 'How can AI developers deploy agents on Nodenomics?',
        answer: 'Request access through our Partners page under "AI Agent Developer". You\'ll receive API documentation, agent SDKs (Python, JavaScript, Rust), smart contract templates, and testnet access. We provide sandbox environments for development and testing before deploying to production.'
      },
      {
        question: 'Is there a test environment?',
        answer: 'Yes. Nodenomics provides a full-featured testnet with mock data sources, simulated IoT devices, and test tokens. Developers can test agents, brokers can refine data pipelines, and IoT providers can validate integrations risk-free before production deployment.'
      },
      {
        question: 'What support is available?',
        answer: 'Nodenomics offers: comprehensive API documentation, SDK guides and code examples, community forum for peer support, dedicated technical support for enterprise partners, integration consulting services, and regular webinars on best practices. Humanitarian organizations receive priority support.'
      }
    ]
  }
];
